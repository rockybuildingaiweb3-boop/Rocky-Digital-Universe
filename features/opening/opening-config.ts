export type SceneType = "scene1" | "scene2" | "scene3" | "scene4" | "transition";

export interface CinematicScene {
  id: 1 | 2 | 3 | 4;
  type: SceneType;
  primaryLineKey: string;
  durationMs: number;
  accentColor: string;
  humanPosture: "withdrawn" | "handshake" | "thumbsup" | "knock";
  robotPosture: "outreach" | "handshake" | "thumbsup" | "knock";
}

export const CINEMATIC_TIMELINE: CinematicScene[] = [
  {
    id: 1,
    type: "scene1",
    primaryLineKey: "I questioned AI.",
    durationMs: 2400,
    accentColor: "#ef4444",
    humanPosture: "withdrawn",
    robotPosture: "outreach",
  },
  {
    id: 2,
    type: "scene2",
    primaryLineKey: "I learned to work with AI.",
    durationMs: 2400,
    accentColor: "#06b6d4",
    humanPosture: "handshake",
    robotPosture: "handshake",
  },
  {
    id: 3,
    type: "scene3",
    primaryLineKey: "Together, we built more than either of us could alone.",
    durationMs: 2000,
    accentColor: "#10b981",
    humanPosture: "thumbsup",
    robotPosture: "thumbsup",
  },
  {
    id: 4,
    type: "scene4",
    primaryLineKey: "I began to see what we could become together.",
    durationMs: 4000,
    accentColor: "#a855f7",
    humanPosture: "knock",
    robotPosture: "knock",
  },
];
