/**
 * Web Audio & BGM Engine for RockyOS Opening Experience
 * Supports external MP3 background music with fallback to procedural cinematic synth,
 * plus dedicated physical interaction sound effects for each act.
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

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("rockyos_audio_muted");
      this.isMuted = savedMute === "true";
    }
  }

  public unlockAudio() {
    if (typeof window === "undefined") return;

    // Initialize Web Audio Context
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    // Initialize BGM audio element
    if (!this.bgmAudio) {
      try {
        this.bgmAudio = new Audio("/opening/bgm.mp3");
        this.bgmAudio.loop = true;
        this.bgmAudio.volume = this.isMuted ? 0 : 0.45;
        this.bgmAudio.play().catch(() => {
          // If bgm.mp3 is not present or blocked, fallback to procedural ambient
          this.startProceduralAmbient();
        });
      } catch (e) {
        this.startProceduralAmbient();
      }
    } else if (this.bgmAudio.paused && !this.isMuted) {
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
   * Smoothly fade out BGM when entering homepage
   */
  public fadeOutBGM(durationMs: number = 800) {
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
   * Procedural low-frequency deep space ambient (Fallback or reinforcement)
   */
  public startProceduralAmbient() {
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
   * Scene 1: Pressure/Tension accumulation during hold
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
        filter.frequency.setValueAtTime(400, t);

        this.tensionOsc.connect(filter);
        filter.connect(this.tensionGain);
        this.tensionGain.connect(this.ctx.destination);
        this.tensionOsc.start();
      }

      const freq = 120 + progress * 380;
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

  /**
   * Scene 1: Glass Shatter / Ice Break Impact
   */
  public playRejectionShatter() {
    this.stopTensionSound();
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. High frequency shatter noise burst
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = "highpass";
      noiseFilter.frequency.setValueAtTime(1200, t);
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(t);

      // 2. Heavy sub impact
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(180, t);
      sub.frequency.exponentialRampToValueAtTime(35, t + 0.3);
      subGain.gain.setValueAtTime(0.35, t);
      subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + 0.38);
    } catch (e) {}
  }

  /**
   * Scene 2: Handshake Elastic Clasp & Warm Chime
   */
  public playHandshakeClasp() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Warm chord: F3, A3, C4
      [174.61, 220.0, 261.63].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + idx * 0.03);

        gain.gain.setValueAtTime(0.12, t + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t + idx * 0.03);
        osc.stop(t + 0.65);
      });
    } catch (e) {}
  }

  /**
   * Scene 3: Rising Sun Harmonic Tone (Pitch climbs with progress)
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

      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.15);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 1 — Robot Alone (Metallic clang, door locked)
   */
  public playDoorKnock1_Robot() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(340, t);
      osc.frequency.exponentialRampToValueAtTime(70, t + 0.2);

      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(900, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 2 — Human Alone (Deep wooden thud, door locked)
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
      osc.frequency.exponentialRampToValueAtTime(28, t + 0.25);

      gain.gain.setValueAtTime(0.38, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 3 — Together (Heavy impact, lock unlatch, grand portal chord swell)
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
      impact.frequency.setValueAtTime(220, t);
      impact.frequency.exponentialRampToValueAtTime(30, t + 0.4);
      impactGain.gain.setValueAtTime(0.45, t);
      impactGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
      impact.connect(impactGain);
      impactGain.connect(this.ctx.destination);
      impact.start(t);
      impact.stop(t + 0.5);

      // 2. Mechanical Vault Lock Click
      setTimeout(() => {
        if (!this.ctx) return;
        const ct = this.ctx.currentTime;
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = "sine";
        click.frequency.setValueAtTime(920, ct);
        click.frequency.exponentialRampToValueAtTime(240, ct + 0.1);
        clickGain.gain.setValueAtTime(0.18, ct);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ct + 0.12);
        click.connect(clickGain);
        clickGain.connect(this.ctx.destination);
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
        gain.gain.exponentialRampToValueAtTime(0.09, t + 1.2 + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.2);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t + 0.4 + i * 0.05);
        osc.stop(t + 4.5);
      });
    } catch (e) {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
