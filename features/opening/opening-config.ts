export type PrologueSceneId = 1 | 2 | 3 | 4;

export interface PrologueSceneConfig {
  id: PrologueSceneId;
  key: "scene1" | "scene2" | "scene3" | "scene4";
  accentColor: string;
  durationMs: number;
}

export const PROLOGUE_SCENES: PrologueSceneConfig[] = [
  {
    id: 1,
    key: "scene1",
    accentColor: "#ef4444", // Red/Amber representing caution & boundary
    durationMs: 4200,
  },
  {
    id: 2,
    key: "scene2",
    accentColor: "#06b6d4", // Cyan representing electric contact & alignment
    durationMs: 4200,
  },
  {
    id: 3,
    key: "scene3",
    accentColor: "#10b981", // Emerald representing synergy & thumbs up
    durationMs: 4200,
  },
  {
    id: 4,
    key: "scene4",
    accentColor: "#8b5cf6", // Purple/Cosmic gold representing portal & gateway
    durationMs: 4600,
  },
];
