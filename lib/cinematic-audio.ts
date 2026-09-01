/**
 * Premium Cinematic Audio Engine for RockyOS Opening Experience
 * Manages background music playback (/opening/background.mp3) and procedural spatial sound effects.
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

  // Spatial Reverb Bus
  private reverbInput: GainNode | null = null;

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
        this.buildSpatialReverbBus();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  private buildSpatialReverbBus() {
    if (!this.ctx) return;
    try {
      this.reverbInput = this.ctx.createGain();
      this.reverbInput.gain.value = 0.3;

      const delay1 = this.ctx.createDelay();
      delay1.delayTime.value = 0.08;

      const delay2 = this.ctx.createDelay();
      delay2.delayTime.value = 0.16;

      const feedback = this.ctx.createGain();
      feedback.gain.value = 0.25;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1600;

      this.reverbInput.connect(delay1);
      delay1.connect(delay2);
      delay2.connect(filter);
      filter.connect(feedback);
      feedback.connect(delay1);
      filter.connect(this.ctx.destination);
    } catch (e) {}
  }

  public unlockAudio() {
    this.initContext();

    // Initialize & play background music
    if (!this.bgmAudio && typeof window !== "undefined") {
      try {
        // First try background.mp3, fallback to bgm.mp3
        this.bgmAudio = new Audio("/opening/background.mp3");
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = this.isMuted ? 0 : 0.5;

        this.bgmAudio.play().catch(() => {
          // If background.mp3 fails, try bgm.mp3
          try {
            this.bgmAudio = new Audio("/opening/bgm.mp3");
            this.bgmAudio.loop = true;
            this.bgmAudio.volume = this.isMuted ? 0 : 0.5;
            this.bgmAudio.play().catch(() => {
              this.startProceduralAmbient();
            });
          } catch (e) {
            this.startProceduralAmbient();
          }
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
      this.bgmAudio.volume = this.isMuted ? 0 : 0.5;
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

      const freq = 100 + progress * 350;
      this.tensionOsc.frequency.setValueAtTime(freq, t);
      const vol = Math.min(progress * 0.12, 0.12);
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

  public playRejectionShatter() {
    this.stopTensionSound();
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // High frequency fracture noise burst
      const bufferSize = this.ctx.sampleRate * 0.2;
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
      noiseGain.gain.setValueAtTime(0.28, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      if (this.reverbInput) noiseGain.connect(this.reverbInput);
      noise.start(t);

      // Heavy sub-bass shock
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(190, t);
      sub.frequency.exponentialRampToValueAtTime(32, t + 0.32);
      subGain.gain.setValueAtTime(0.35, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + 0.38);
    } catch (e) {}
  }

  public playHandshakeClasp() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      [174.61, 220.0, 261.63, 329.63].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + idx * 0.025);

        gain.gain.setValueAtTime(0.12, t + idx * 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        if (this.reverbInput) gain.connect(this.reverbInput);

        osc.start(t + idx * 0.025);
        osc.stop(t + 0.65);
      });
    } catch (e) {}
  }

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

      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      if (this.reverbInput) gain.connect(this.reverbInput);

      osc.start(t);
      osc.stop(t + 0.15);
    } catch (e) {}
  }

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

      gain.gain.setValueAtTime(0.28, t);
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

  public playDoorKnock2_Human() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(130, t);
      osc.frequency.exponentialRampToValueAtTime(28, t + 0.26);

      gain.gain.setValueAtTime(0.36, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      if (this.reverbInput) gain.connect(this.reverbInput);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {}
  }

  public playDoorKnock3_Together() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // Heavy combined impact
      const impact = this.ctx.createOscillator();
      const impactGain = this.ctx.createGain();
      impact.type = "sawtooth";
      impact.frequency.setValueAtTime(240, t);
      impact.frequency.exponentialRampToValueAtTime(30, t + 0.45);
      impactGain.gain.setValueAtTime(0.45, t);
      impactGain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      impact.connect(impactGain);
      impactGain.connect(this.ctx.destination);
      if (this.reverbInput) impactGain.connect(this.reverbInput);
      impact.start(t);
      impact.stop(t + 0.52);

      // Vault lock unlatch click
      setTimeout(() => {
        if (!this.ctx) return;
        const ct = this.ctx.currentTime;
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = "sine";
        click.frequency.setValueAtTime(960, ct);
        click.frequency.exponentialRampToValueAtTime(260, ct + 0.1);
        clickGain.gain.setValueAtTime(0.18, ct);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ct + 0.12);
        click.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        if (this.reverbInput) clickGain.connect(this.reverbInput);
        click.start(ct);
        click.stop(ct + 0.15);
      }, 350);

      // Celestial chord swell
      const freqs = [130.81, 196.0, 293.66, 329.63, 493.88];
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, t + 0.4 + i * 0.05);

        gain.gain.setValueAtTime(0.001, t + 0.4 + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.09, t + 1.2 + i * 0.08);
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
