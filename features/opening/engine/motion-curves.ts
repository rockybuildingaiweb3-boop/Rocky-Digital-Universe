/**
 * RockyOS Motion & Interaction Physics Curves
 * Precision springs and cubic-bezier timings
 */

export const SPRING_CONFIGS = {
  // Hard impact overshoot (breaking / collision)
  impactHard: {
    type: "spring" as const,
    stiffness: 600,
    damping: 18,
    mass: 0.8,
  },
  // Tactile contact rebound (handshake touch)
  tactileContact: {
    type: "spring" as const,
    stiffness: 450,
    damping: 24,
    mass: 1.2,
  },
  // Smooth settling for dawn / atmosphere
  atmosphericSettle: {
    type: "spring" as const,
    stiffness: 180,
    damping: 28,
    mass: 1,
  },
  // UI Interactive Buttons
  interactiveCTA: {
    type: "spring" as const,
    stiffness: 400,
    damping: 20,
  },
} as const;

export const TIMINGS = {
  scene1_holdThresholdMs: 1600,
  scene1_impactDurationMs: 220,
  scene1_followThroughMs: 450,

  scene2_reboundMs: 350,
  scene2_followThroughMs: 500,

  scene3_riseHoldThresholdMs: 1800,
  scene3_settleMs: 550,

  scene4_knock1Ms: 180,
  scene4_knock2Ms: 220,
  scene4_knock3Ms: 600,
  scene4_lightFloodTransitionMs: 1100,

  scene5_bgmFadeoutMs: 900,
} as const;
