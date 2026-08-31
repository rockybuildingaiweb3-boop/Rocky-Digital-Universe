/**
 * Cinematic Web Audio Synthesizer
 * Zero-dependency, zero-download, low-latency procedural sound design for RockyOS Prologue
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      const savedMute = localStorage.getItem("rockyos_audio_muted");
      this.isMuted = savedMute === "true";
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("rockyos_audio_muted", String(this.isMuted));
    }
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(
        this.isMuted ? 0 : 0.035,
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
   * Deep space low-frequency cinematic drone (55Hz sub-bass harmonic)
   */
  public startAmbient() {
    if (this.ambientOsc1) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.001, t);
      this.ambientGain.gain.exponentialRampToValueAtTime(
        this.isMuted ? 0 : 0.035,
        t + 3
      );

      // Low sub bass
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = "sine";
      this.ambientOsc1.frequency.setValueAtTime(55, t); // A1 note

      // Gentle detuned beating harmonic
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = "triangle";
      this.ambientOsc2.frequency.setValueAtTime(110.5, t); // Octave + 0.5Hz beat

      // Lowpass filter for smooth cinematic warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, t);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch (e) {
      // Audio autoplay policy resilience
    }
  }

  public stopAmbient() {
    if (this.ambientGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.ambientGain.gain.setTargetAtTime(0, t, 0.5);
      setTimeout(() => {
        try {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.ambientOsc1?.disconnect();
          this.ambientOsc2?.disconnect();
        } catch (e) {}
        this.ambientOsc1 = null;
        this.ambientOsc2 = null;
      }, 600);
    }
  }

  /**
   * Organic, tactile pulse on user click/advance
   */
  public playInteractPulse() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(70, t + 0.18);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }

  /**
   * Resonant wooden/metallic door knock impact
   */
  public playDoorKnock(step: number = 1) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // Base thump
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch rises slightly with each knock
      const baseFreq = 90 + step * 25;
      osc.type = "triangle";
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.18);

      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.26);

      // Noise click impact
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(600 + step * 100, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(t);
    } catch (e) {}
  }

  /**
   * Transcendent celestial chord as the door unlocks and enters the universe
   */
  public playVaultOpenSwell() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Multi-note shimmering pentatonic chord: C3, G3, C4, E4, B4
      const freqs = [130.81, 196.0, 261.63, 329.63, 493.88];

      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, t + i * 0.08);

        gain.gain.setValueAtTime(0.001, t + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.06, t + 0.8 + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t + i * 0.08);
        osc.stop(t + 3.5);
      });
    } catch (e) {}
  }
}

export const cinematicAudio = new CinematicAudioEngine();
