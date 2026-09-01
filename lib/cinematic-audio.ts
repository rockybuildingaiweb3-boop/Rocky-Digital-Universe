/**
 * Premium Cinematic Audio Engine for RockyOS Opening Experience
 * Multi-layered acoustic foley synthesis, analog soft-clipping saturation,
 * spatial reverb chamber, and continuous seamless BGM looping.
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private bgmAudio: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;

  // Master Audio Bus
  private masterGain: GainNode | null = null;
  private waveShaper: WaveShaperNode | null = null;
  private reverbBus: GainNode | null = null;

  // Real-time Sound Generators
  private tensionSubOsc: OscillatorNode | null = null;
  private tensionHarmonicOsc: OscillatorNode | null = null;
  private tensionGain: GainNode | null = null;
  private ambientGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("rockyos_audio_muted");
      this.isMuted = savedMute === "true";
    }
  }

  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.buildMasterBus();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Build analog soft-clipping saturation curve for warm, cinematic warmth
  private makeDistortionCurve(amount: number = 20): Float32Array {
    const k = amount;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  private buildMasterBus() {
    if (!this.ctx) return;
    try {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : 0.85;

      // Soft-clipper saturation
      this.waveShaper = this.ctx.createWaveShaper();
      this.waveShaper.curve = this.makeDistortionCurve(12) as any;
      this.waveShaper.oversample = "4x";

      // Spatial Reverb Impulse & Delay Network
      this.reverbBus = this.ctx.createGain();
      this.reverbBus.gain.value = 0.35;

      const delay1 = this.ctx.createDelay();
      delay1.delayTime.value = 0.075;

      const delay2 = this.ctx.createDelay();
      delay2.delayTime.value = 0.15;

      const feedback = this.ctx.createGain();
      feedback.gain.value = 0.3;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 2200;

      this.reverbBus.connect(delay1);
      delay1.connect(delay2);
      delay2.connect(filter);
      filter.connect(feedback);
      feedback.connect(delay1);

      // Connect to master
      this.reverbBus.connect(this.masterGain);
      filter.connect(this.masterGain);
      this.waveShaper.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {}
  }

  public unlockAudio() {
    this.initContext();

    // Guaranteed continuous background music loop
    if (!this.bgmAudio && typeof window !== "undefined") {
      try {
        this.bgmAudio = new Audio("/opening/background.mp3");
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = this.isMuted ? 0 : 0.5;

        // Auto-recovery listener to prevent any browser silent stalls
        this.bgmAudio.addEventListener("ended", () => {
          if (this.bgmAudio && !this.isMuted) {
            this.bgmAudio.currentTime = 0;
            this.bgmAudio.play().catch(() => {});
          }
        });

        this.bgmAudio.play().catch(() => {
          this.startProceduralAmbient();
        });
      } catch (e) {
        this.startProceduralAmbient();
      }
    } else if (this.bgmAudio && this.bgmAudio.paused && !this.isMuted) {
      this.bgmAudio.play().catch(() => {});
    }

    if (!this.isUnlocked) {
      this.isUnlocked = true;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("rockyos_audio_muted", String(this.isMuted));
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : 0.85,
        this.ctx.currentTime,
        0.05
      );
    }

    if (this.bgmAudio) {
      this.bgmAudio.volume = this.isMuted ? 0 : 0.5;
    }

    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public fadeOutBGM(durationMs: number = 900) {
    if (this.bgmAudio) {
      const startVol = this.bgmAudio.volume;
      const step = startVol / (durationMs / 40);
      const interval = setInterval(() => {
        if (!this.bgmAudio) {
          clearInterval(interval);
          return;
        }
        if (this.bgmAudio.volume > step) {
          this.bgmAudio.volume -= step;
        } else {
          this.bgmAudio.volume = 0;
          this.bgmAudio.pause();
          clearInterval(interval);
        }
      }, 40);
    }
    this.stopProceduralAmbient();
  }

  public startProceduralAmbient() {
    this.initContext();
    if (this.ambientOsc || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.001, t);
      this.ambientGain.gain.exponentialRampToValueAtTime(
        this.isMuted ? 0 : 0.03,
        t + 2
      );

      this.ambientOsc = this.ctx.createOscillator();
      this.ambientOsc.type = "sine";
      this.ambientOsc.frequency.setValueAtTime(48, t);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(140, t);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);

      this.ambientOsc.start();
    } catch (e) {}
  }

  public stopProceduralAmbient() {
    if (this.ambientGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.ambientGain.gain.setTargetAtTime(0, t, 0.3);
      setTimeout(() => {
        try {
          this.ambientOsc?.stop();
          this.ambientOsc?.disconnect();
        } catch (e) {}
        this.ambientOsc = null;
      }, 400);
    }
  }

  // =========================================================================
  // SCENE 1: Deep Structural Stress Tension & Cinematic Glass Shatter
  // =========================================================================
  public updateTensionSound(progress: number) {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      if (!this.tensionSubOsc) {
        this.tensionGain = this.ctx.createGain();
        this.tensionGain.gain.setValueAtTime(0.001, t);

        // Low structural rumble
        this.tensionSubOsc = this.ctx.createOscillator();
        this.tensionSubOsc.type = "sine";
        this.tensionSubOsc.frequency.setValueAtTime(45, t);

        // High glass stress creak
        this.tensionHarmonicOsc = this.ctx.createOscillator();
        this.tensionHarmonicOsc.type = "triangle";
        this.tensionHarmonicOsc.frequency.setValueAtTime(480, t);

        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(650, t);
        filter.Q.setValueAtTime(4.5, t);

        this.tensionSubOsc.connect(this.tensionGain);
        this.tensionHarmonicOsc.connect(filter);
        filter.connect(this.tensionGain);

        this.tensionGain.connect(this.masterGain);
        if (this.reverbBus) this.tensionGain.connect(this.reverbBus);

        this.tensionSubOsc.start(t);
        this.tensionHarmonicOsc.start(t);
      }

      // Non-linear frequency ascension
      const p = Math.min(progress, 1);
      const subFreq = 45 + p * 60;
      const harmFreq = 480 + Math.pow(p, 2) * 1200;
      const vol = Math.min(0.02 + p * 0.15, 0.18);

      this.tensionSubOsc?.frequency.setValueAtTime(subFreq, t);
      this.tensionHarmonicOsc?.frequency.setValueAtTime(harmFreq, t);
      this.tensionGain?.gain.setValueAtTime(vol, t);
    } catch (e) {}
  }

  public stopTensionSound() {
    if (this.tensionGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.tensionGain.gain.setValueAtTime(0.001, t);
      setTimeout(() => {
        try {
          this.tensionSubOsc?.stop();
          this.tensionSubOsc?.disconnect();
          this.tensionHarmonicOsc?.stop();
          this.tensionHarmonicOsc?.disconnect();
        } catch (e) {}
        this.tensionSubOsc = null;
        this.tensionHarmonicOsc = null;
        this.tensionGain = null;
      }, 50);
    }
  }

  public playRejectionShatter() {
    this.stopTensionSound();
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      // 1. LAYER 1: Deep Sub-Bass Kinetic Punch (35Hz)
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(140, t);
      sub.frequency.exponentialRampToValueAtTime(32, t + 0.38);
      subGain.gain.setValueAtTime(0.55, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

      sub.connect(subGain);
      if (this.waveShaper) subGain.connect(this.waveShaper);
      else subGain.connect(this.masterGain);
      sub.start(t);
      sub.stop(t + 0.45);

      // 2. LAYER 2: Transient Crack Spike (<15ms)
      const crackBufferSize = this.ctx.sampleRate * 0.15;
      const crackBuffer = this.ctx.createBuffer(1, crackBufferSize, this.ctx.sampleRate);
      const crackData = crackBuffer.getChannelData(0);
      for (let i = 0; i < crackBufferSize; i++) {
        crackData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (crackBufferSize * 0.18));
      }
      const crack = this.ctx.createBufferSource();
      crack.buffer = crackBuffer;
      const crackFilter = this.ctx.createBiquadFilter();
      crackFilter.type = "highpass";
      crackFilter.frequency.setValueAtTime(2400, t);
      const crackGain = this.ctx.createGain();
      crackGain.gain.setValueAtTime(0.42, t);
      crackGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

      crack.connect(crackFilter);
      crackFilter.connect(crackGain);
      crackGain.connect(this.masterGain);
      if (this.reverbBus) crackGain.connect(this.reverbBus);
      crack.start(t);

      // 3. LAYER 3: Modal Crystal Glass Ringing Nodes (2.8kHz, 4.4kHz, 7.2kHz)
      const modalFreqs = [2800, 4400, 7200];
      modalFreqs.forEach((freq, idx) => {
        const modal = this.ctx!.createOscillator();
        const modalGain = this.ctx!.createGain();
        modal.type = "sine";
        modal.frequency.setValueAtTime(freq * (1 + (Math.random() * 0.08 - 0.04)), t + idx * 0.01);

        modalGain.gain.setValueAtTime(0.08 / (idx + 1), t + idx * 0.01);
        modalGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.65 + idx * 0.15);

        modal.connect(modalGain);
        modalGain.connect(this.masterGain!);
        if (this.reverbBus) modalGain.connect(this.reverbBus!);

        modal.start(t + idx * 0.01);
        modal.stop(t + 0.85);
      });
    } catch (e) {}
  }

  // =========================================================================
  // SCENE 2: Velvet Handshake Contact Touch
  // =========================================================================
  public playHandshakeClasp() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      // Low-mid warm body impulse (160Hz)
      const body = this.ctx.createOscillator();
      const bodyGain = this.ctx.createGain();
      body.type = "sine";
      body.frequency.setValueAtTime(160, t);
      body.frequency.exponentialRampToValueAtTime(80, t + 0.18);
      bodyGain.gain.setValueAtTime(0.28, t);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

      body.connect(bodyGain);
      bodyGain.connect(this.masterGain);
      body.start(t);
      body.stop(t + 0.22);

      // Soothing harmonic resonance chord (A major 9th)
      const chord = [220.0, 277.18, 329.63, 415.3];
      chord.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + idx * 0.02);

        gain.gain.setValueAtTime(0.09, t + idx * 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);

        osc.connect(gain);
        gain.connect(this.masterGain!);
        if (this.reverbBus) gain.connect(this.reverbBus!);

        osc.start(t + idx * 0.02);
        osc.stop(t + 0.8);
      });
    } catch (e) {}
  }

  // =========================================================================
  // SCENE 3: Celestial 5th Harmonic Choir Swell (Dawn Rising)
  // =========================================================================
  public playSunRiseTone(progress: number) {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;
      const freqs = [216, 324, 432, 648];
      const p = Math.min(progress, 1);

      freqs.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq * (1 + p * 0.08), t);

        const vol = (0.04 * (1 + p * 1.5)) / (idx + 1);
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

        osc.connect(gain);
        gain.connect(this.masterGain!);
        if (this.reverbBus) gain.connect(this.reverbBus!);

        osc.start(t);
        osc.stop(t + 0.2);
      });
    } catch (e) {}
  }

  // =========================================================================
  // SCENE 4: Distinct Rhythmic Door Material Acoustics
  // =========================================================================
  public playDoorKnock1_Robot() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      // Titanium metallic clang
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(420, t);
      osc.frequency.exponentialRampToValueAtTime(110, t + 0.18);

      gain.gain.setValueAtTime(0.32, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, t);
      filter.Q.setValueAtTime(3, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      if (this.reverbBus) gain.connect(this.reverbBus);

      osc.start(t);
      osc.stop(t + 0.22);
    } catch (e) {}
  }

  public playDoorKnock2_Human() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      // Deep solid oak / stone thud
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(26, t + 0.28);

      gain.gain.setValueAtTime(0.48, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(gain);
      if (this.waveShaper) gain.connect(this.waveShaper);
      else gain.connect(this.masterGain);
      if (this.reverbBus) gain.connect(this.reverbBus);

      osc.start(t);
      osc.stop(t + 0.32);
    } catch (e) {}
  }

  public playDoorKnock3_Together() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const t = this.ctx.currentTime;

      // Seismic dual-strike sub impact (40Hz)
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sawtooth";
      sub.frequency.setValueAtTime(220, t);
      sub.frequency.exponentialRampToValueAtTime(28, t + 0.48);
      subGain.gain.setValueAtTime(0.6, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.52);
      sub.connect(subGain);
      if (this.waveShaper) subGain.connect(this.waveShaper);
      else subGain.connect(this.masterGain);
      if (this.reverbBus) subGain.connect(this.reverbBus);
      sub.start(t);
      sub.stop(t + 0.55);

      // Heavy vault latch mechanical unseal
      setTimeout(() => {
        if (!this.ctx || !this.masterGain) return;
        const ct = this.ctx.currentTime;
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = "sine";
        click.frequency.setValueAtTime(1100, ct);
        click.frequency.exponentialRampToValueAtTime(320, ct + 0.12);
        clickGain.gain.setValueAtTime(0.25, ct);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ct + 0.14);
        click.connect(clickGain);
        clickGain.connect(this.masterGain);
        if (this.reverbBus) clickGain.connect(this.reverbBus);
        click.start(ct);
        click.stop(ct + 0.16);
      }, 280);

      // Grand celestial gate opening swell
      const freqs = [130.81, 196.0, 261.63, 329.63, 392.0, 523.25];
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, t + 0.35 + i * 0.04);

        gain.gain.setValueAtTime(0.001, t + 0.35 + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.1, t + 1.1 + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.8);

        osc.connect(gain);
        gain.connect(this.masterGain!);
        if (this.reverbBus) gain.connect(this.reverbBus!);

        osc.start(t + 0.35 + i * 0.04);
        osc.stop(t + 5.0);
      });
    } catch (e) {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
