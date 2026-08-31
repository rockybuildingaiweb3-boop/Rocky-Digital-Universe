/**
 * Web Audio Cinematic Sound Engine for RockyOS Opening Experience
 * Pure procedural synthesis — Zero external network audio dependencies, low latency, instant autoplay unlock
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private isUnlocked: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("rockyos_audio_muted");
      this.isMuted = savedMute === "true";
    }
  }

  public unlockAudio() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    if (!this.isUnlocked && this.ctx) {
      this.isUnlocked = true;
      this.startAmbient();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("rockyos_audio_muted", String(this.isMuted));
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
   * Continuous deep cinematic space ambient drone (50Hz sub-bass)
   */
  public startAmbient() {
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
      filter.frequency.setValueAtTime(180, t);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start();
    } catch (e) {}
  }

  public stopAmbient() {
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
   * Scene 1: Rejection Shatter / Impact Wave
   */
  public playRejectionShatter() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Impact down-sweep
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.28);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.35);
    } catch (e) {}
  }

  /**
   * Scene 2: Handshake Clasp & Warm Connection
   */
  public playHandshakeClasp() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Dual harmonic resonance (warm 4th chord: F3 & C4)
      [174.61, 261.63].forEach((freq) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t);
        osc.stop(t + 0.55);
      });
    } catch (e) {}
  }

  /**
   * Scene 3: Rising Sun / Golden Glow Swell (Dynamic pitch based on hold progress 0 -> 1)
   */
  public playSunRiseTone(progress: number) {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch climbs smoothly with solar rise from 220Hz to 660Hz
      const freq = 220 + progress * 440;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.18);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 1 — Robot Alone (High metallic clang, door locked)
   */
  public playDoorKnock1_Robot() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(80, t + 0.2);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, t);

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
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.25);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {}
  }

  /**
   * Scene 4: Knock 3 — Together (Heavy impact, mechanical lock opening, celestial chord swell)
   */
  public playDoorKnock3_Together() {
    this.unlockAudio();
    if (this.isMuted || !this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. Dual Heavy Impact
      const impact = this.ctx.createOscillator();
      const impactGain = this.ctx.createGain();
      impact.type = "sawtooth";
      impact.frequency.setValueAtTime(200, t);
      impact.frequency.exponentialRampToValueAtTime(30, t + 0.4);
      impactGain.gain.setValueAtTime(0.4, t);
      impactGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
      impact.connect(impactGain);
      impactGain.connect(this.ctx.destination);
      impact.start(t);
      impact.stop(t + 0.5);

      // 2. Mechanical Vault Click (at t + 0.35)
      setTimeout(() => {
        if (!this.ctx) return;
        const ct = this.ctx.currentTime;
        const click = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click.type = "sine";
        click.frequency.setValueAtTime(880, ct);
        click.frequency.exponentialRampToValueAtTime(220, ct + 0.1);
        clickGain.gain.setValueAtTime(0.15, ct);
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
        gain.gain.exponentialRampToValueAtTime(0.08, t + 1.2 + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.0);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t + 0.4 + i * 0.05);
        osc.stop(t + 4.2);
      });
    } catch (e) {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
