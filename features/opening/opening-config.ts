export type SceneType = "scene1" | "scene2" | "scene3" | "scene4";

export interface CinematicSceneConfig {
  id: 1 | 2 | 3 | 4;
  type: SceneType;
  imageSrc: string;
  durationMs: number;
  lineEn: string;
  lineZh: string;
  subEn: string;
  subZh: string;
  tone: string;
}

export const CINEMA_SCENES: CinematicSceneConfig[] = [
  {
    id: 1,
    type: "scene1",
    imageSrc: "/opening/scene1-rejection.jpg",
    durationMs: 2600,
    lineEn: "I questioned AI.",
    lineZh: "我曾对 AI 抱有质疑。",
    subEn: "Skeptical of shortcuts. Guarding human craft and boundaries.",
    subZh: "警惕投机取巧，坚守人类独有的创造底线。",
    tone: "Hesitation · Cold Light",
  },
  {
    id: 2,
    type: "scene2",
    imageSrc: "/opening/scene2-handshake.jpg",
    durationMs: 2600,
    lineEn: "I learned to work with AI.",
    lineZh: "我开始学会与 AI 并肩作战。",
    subEn: "Not as a replacement, but as an intellectual amplifier.",
    subZh: "它不是替代者，而是拓宽认知边界的心智放大器。",
    tone: "Alignment · Warm Dawn",
  },
  {
    id: 3,
    type: "scene3",
    imageSrc: "/opening/scene3-approval.jpg",
    durationMs: 2400,
    lineEn: "Together, we built more than either of us could alone.",
    lineZh: "携手同行，我们创造出彼此独自无法企及的可能。",
    subEn: "Human intuition multiplied by machine precision.",
    subZh: "以人类直觉为罗盘，以机器极致精度为引擎。",
    tone: "Synergy · Golden Hour",
  },
  {
    id: 4,
    type: "scene4",
    imageSrc: "/opening/scene4-door.jpg",
    durationMs: 4400,
    lineEn: "I began to see what we could become together.",
    lineZh: "我看见了我们共同成为的一切。",
    subEn: "Four knocks on the gateway. The portal unlocks.",
    subZh: "四声轻叩，敲响新纪元大门。欢迎踏入我的数字宇宙。",
    tone: "Threshold · Welcome Home",
  },
];
