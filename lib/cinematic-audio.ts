/**
 * Cinematic Sound & BGM Synthesizer for RockyOS Opening Experience
 * Procedural Web Audio Engine with simulated spatial reverb chamber,
 * HTML5 background music playback/fading, and act-specific tactile feedback.
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private bgmAudio: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private tensionOsc: OscillatorNode | null = null;
  private tensionGain: GainNode | null = null;

  // Spatial Reverb Bus Nodes
  private reverbInput: GainNode | null = null;
  private reverbDelay1: DelayNode | null = null;
  private reverbDelay2: DelayNode | null = null;
  private reverbFeedback: GainNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("rockyos_audio_muted");
      this.isMuted = savedMute === "true";
    }
  }

  /**
   * Initialize or resume Web Audio Context and Reverb Space
   */
  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.buildSpatialReverbBus();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  /**
   * Build simulated stone vault spatial reverb chamber
   */
  private buildSpatialReverbBus() {
    if (!this.ctx) return;
    try {
      this.reverbInput = this.ctx.createGain();
      this.reverbInput.gain.value = 0.35;

      this.reverbDelay1 = this.ctx.createDelay();
      this.reverbDelay1.delayTime.value = 0.085; // 85ms early reflection

      this.reverbDelay2 = this.ctx.createDelay();
      this.reverbDelay2.delayTime.value = 0.165; // 165ms late chamber tail

      this.reverbFeedback = this.ctx.createGain();
      this.reverbFeedback.gain.value = 0.28;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1800; // Dampen harsh high frequencies like stone walls

      // Feedback loop
      this.reverbInput.connect(this.reverbDelay1);
      this.reverbDelay1.connect(this.reverbDelay2);
      this.reverbDelay2.connect(filter);
      filter.connect(this.reverbFeedback);
      this.reverbFeedback.connect(this.reverbDelay1);
      filter.connect(this.ctx.destination);
    } catch (e) {}
  }

  public unlockAudio() {
    this.initContext();

    // Start / resume HTML5 BGM
    if (!this.bgmAudio && typeof window !== "undefined") {
      try {
        this.bgmAudio = new Audio("/opening/bgm.mp3");
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = this.isMuted ? 0 : 0.45;
        this.bgmAudio.play().catch(() => {
          // If bgm.mp3 is absent, fallback to rich procedural ambient
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

    if (this.bgmAudio) {
      this.bgmAudio.volume = this.isMuted ? 0 : 0.45;
    }

    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(
        this.isMuted ? 0 : 0.04,
        this.ctx.currentTime,
        0.1
      );
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Fade out BGM smoothly when opening completes
   */
  public fadeOutBGM(durationMs: number = 900) {
    if (this.bgmAudio) {
      const startVol = this.bgmAudio.volume;
      const step = startVol / (durationMs / 50);
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
      }, 50);
    }
    this.stopProceduralAmbient();
  }

  /**
   * Deep space low-frequency cinematic drone (50Hz sub-bass)
   */
  public startProceduralAmbient() {
    this.initContext();
    if (this.ambientOsc || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.001, t);
      this.ambientGain.gain.exponentialRampToValueAtTime(
        this.isMuted ? 0 : 0.04,
        t + 2
      );

      this.ambientOsc = this.ctx.createOscillator();
      this.ambientOsc.type = "sine";
      this.ambientOsc.frequency.setValueAtTime(50, t);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(160, t);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch (e) {}
  }

  public stopProceduralAmbient() {
    if (this.ambientGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.ambientGain.gain.setTargetAtTime(0, t, 0.4);
      setTimeout(() => {
        try {
          this.ambientOsc?.stop();
          this.ambientOsc?.disconnect();
        } catch (e) {}
        this.ambientOsc = null;
      }, 500);
    }
  }

  /**
   * Scene 1: Pressure charge tension pitch
   */
  public updateTensionSound(progress: number) {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      if (!this.tensionOsc) {
        this.tensionOsc = this.ctx.createOscillator();
        this.tensionGain = this.ctx.createGain();
        this.tensionOsc.type = "sawtooth";
        this.tensionGain.gain.setValueAtTime(0.001, t);

        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(450, t);

        this.tensionOsc.connect(filter);
        filter.connect(this.tensionGain);
        this.tensionGain.connect(this.ctx.destination);
        this.tensionOsc.start();
      }

      const freq = 110 + progress * 400;
      this.tensionOsc.frequency.setValueAtTime(freq, t);
      const vol = Math.min(progress * 0.14, 0.14);
      this.tensionGain?.gain.setValueAtTime(vol, t);
    } catch (e) {}
  }

  public stopTensionSound() {
    if (this.tensionGain && this.ctx) {
      this.tensionGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      setTimeout(() => {
        try {
          this.tensionOsc?.stop();
          this.tensionOsc?.disconnect();
        } catch (e) {}
        this.tensionOsc = null;
        this.tensionGain = null;
      }, 50);
    }
  }

  /**
   * Scene 1: High-impact glass fracture & ice blast with spatial reverb
   */
  public playRejectionShatter() {
    this.stopTensionSound();
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. High frequency shatter crack noise burst
      const bufferSize = this.ctx.sampleRate * 0.22;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = "highpass";
      noiseFilter.frequency.setValueAtTime(1400, t);
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      if (this.reverbInput) noiseGain.connect(this.reverbInput);
      noise.start(t);

      // 2. Heavy sub-bass shockwave impact
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(200, t);
      sub.frequency.exponentialRampToValueAtTime(32, t + 0.35);
      subGain.gain.setValueAtTime(0.4, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + 0.4);
    } catch (e) {}
  }

  /**
   * Scene 2: Handshake elastic clasp and warm chord
   */
  public playHandshakeClasp() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Warm chord: F3, A3, C4, E4
      [174.61, 220.0, 261.63, 329.63].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + idx * 0.025);

        gain.gain.setValueAtTime(0.14, t + idx * 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        if (this.reverbInput) gain.connect(this.reverbInput);

        osc.start(t + idx * 0.025);
        osc.stop(t + 0.7);
      });
    } catch (e) {}
  }

  /**
   * Scene 3: Rising Sun Harmonic Tone
   */
  public playSunRiseTone(progress: number) {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = 220 + progress * 440;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.07, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      if (this.reverbInput) gain.connect(this.reverbInput);

      osc.start(t);
      osc.stop(t + 0.16);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 1 — Robot Alone (High metallic clang with reverb echo)
   */
  public playDoorKnock1_Robot() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(360, t);
      osc.frequency.exponentialRampToValueAtTime(75, t + 0.2);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(950, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      if (this.reverbInput) gain.connect(this.reverbInput);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 2 — Human Alone (Deep wooden resonance with reverb tail)
   */
  public playDoorKnock2_Human() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(130, t);
      osc.frequency.exponentialRampToValueAtTime(28, t + 0.28);

      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      if (this.reverbInput) gain.connect(this.reverbInput);

      osc.start(t);
      osc.stop(t + 0.32);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 3 — Together (Massive impact, vault latch click, grand portal chord swell)
   */
  public playDoorKnock3_Together() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. Heavy Impact
      const impact = this.ctx.createOscillator();
      const impactGain = this.ctx.createGain();
      impact.type = "sawtooth";
      impact.frequency.setValueAtTime(240, t);
      impact.frequency.exponentialRampToValueAtTime(30, t + 0.45);
      impactGain.gain.setValueAtTime(0.48, t);
      impactGain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      impact.connect(impactGain);
      impactGain.connect(this.ctx.destination);
      if (this.reverbInput) impactGain.connect(this.reverbInput);
      impact.start(t);
      impact.stop(t + 0.52);

      // 2. Mechanical Vault Lock Click
      setTimeout(() => {
        if (!this.ctx) return;
        const ct = this.ctx.currentTime;
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = "sine";
        click.frequency.setValueAtTime(960, ct);
        click.frequency.exponentialRampToValueAtTime(260, ct + 0.1);
        clickGain.gain.setValueAtTime(0.2, ct);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ct + 0.12);
        click.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        if (this.reverbInput) clickGain.connect(this.reverbInput);
        click.start(ct);
        click.stop(ct + 0.15);
      }, 350);

      // 3. Majestic Golden Portal Chord Swell (C Major 9: C3, G3, D4, E4, B4)
      const freqs = [130.81, 196.0, 293.66, 329.63, 493.88];
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, t + 0.4 + i * 0.05);

        gain.gain.setValueAtTime(0.001, t + 0.4 + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.1, t + 1.2 + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        if (this.reverbInput) gain.connect(this.reverbInput);

        osc.start(t + 0.4 + i * 0.05);
        osc.stop(t + 4.8);
      });
    } catch (e) {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
