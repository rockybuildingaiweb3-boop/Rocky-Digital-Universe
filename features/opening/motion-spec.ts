/**
 * RockyOS Opening Experience — Motion Design Specification
 * Defines timing, physical damping, cubic-bezier curves, and state architecture.
 */

export const MOTION_TIMING = {
  // Scene 1
  scene1_holdDurationMs: 1250,
  scene1_shatterImpactMs: 220,
  scene1_followThroughMs: 450,

  // Scene 2
  scene2_reboundMs: 350,
  scene2_followThroughMs: 500,

  // Scene 3
  scene3_riseHoldMs: 1300,
  scene3_settleMs: 550,

  // Scene 4
  scene4_knock1TremorMs: 180,
  scene4_knock2TremorMs: 220,
  scene4_knock3ImpactMs: 600,
  scene4_lightFloodMs: 1000,
  scene4_homepageTransitionDelayMs: 3200,
  scene4_bgmFadeoutMs: 900,
} as const;

export const MOTION_EASING = {
  // Apple / Linear-style high-damping deceleration
  smoothOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  // Acceleration for anticipatory contraction
  anticipationIn: "cubic-bezier(0.4, 0, 0.7, 0.2)",
  // Symmetrical breathing transition
  cinematicInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Physical spring shock impact
  impactOvershoot: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export type MotionState =
  | "idle"
  | "engaging"
  | "threshold_reached"
  | "impact"
  | "follow_through"
  | "transitioning"
  | "complete";
