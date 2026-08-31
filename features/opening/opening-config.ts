export type SceneType = "scene1" | "scene2" | "scene3" | "scene4";

export interface CinematicSceneConfig {
  id: 1 | 2 | 3 | 4;
  type: SceneType;
  actBadge: string;
  actTitleEn: string;
  actTitleZh: string;
  imageSrc: string;
  lineEn: string;
  lineZh: string;
  subEn: string;
  subZh: string;
  interactivePromptEn: string;
  interactivePromptZh: string;
  tone: string;
}

export const CINEMA_SCENES: CinematicSceneConfig[] = [
  {
    id: 1,
    type: "scene1",
    actBadge: "01 / 04",
    actTitleEn: "REJECTION",
    actTitleZh: "拒绝",
    imageSrc: "/opening/hero-act-1.jpg",
    lineEn: "I questioned AI.",
    lineZh: "我曾质疑 AI。",
    subEn: "Skeptical of shortcuts. Guarding human craft and creative boundaries.",
    subZh: "警惕投机取巧，坚守人类独有的创造底线与独立思考。",
    interactivePromptEn: "Tap to confront the distance",
    interactivePromptZh: "点击屏幕 · 确认审视界限",
    tone: "Hesitation · Cold Light",
  },
  {
    id: 2,
    type: "scene2",
    actBadge: "02 / 04",
    actTitleEn: "HANDSHAKE",
    actTitleZh: "握手",
    imageSrc: "/opening/hero-act-2.jpg",
    lineEn: "I learned to work with AI.",
    lineZh: "我学会了与 AI 合作。",
    subEn: "Not as a replacement, but as an intellectual amplifier.",
    subZh: "它不是替代者，而是拓宽认知边界的心智放大器。",
    interactivePromptEn: "Tap to establish alignment",
    interactivePromptZh: "点击屏幕 · 建立共生信任",
    tone: "Alignment · Warm Dawn",
  },
  {
    id: 3,
    type: "scene3",
    actBadge: "03 / 04",
    actTitleEn: "APPROVAL",
    actTitleZh: "点赞",
    imageSrc: "/opening/hero-act-3.jpg",
    lineEn: "Together, we built more than either of us could alone.",
    lineZh: "我们共同创造了超越彼此的可能。",
    subEn: "Human intuition multiplied by machine precision.",
    subZh: "以人类直觉为罗盘，以机器极致精度为引擎。",
    interactivePromptEn: "Tap to confirm shared victory",
    interactivePromptZh: "点击屏幕 · 见证协同飞跃",
    tone: "Synergy · Golden Hour",
  },
  {
    id: 4,
    type: "scene4",
    actBadge: "04 / 04",
    actTitleEn: "THE DOOR",
    actTitleZh: "进入",
    imageSrc: "/opening/hero-act-4-door-panorama.jpg",
    lineEn: "I began to see what we could become together.",
    lineZh: "我开始看到我们共同走向的未来。",
    subEn: "The gateway unlocks. Welcome to RockyOS.",
    subZh: "门扉轻启，极光破晓。欢迎来到 RockyOS。",
    interactivePromptEn: "Tap door to knock",
    interactivePromptZh: "敲击门扉 · 开启数字宇宙",
    tone: "Threshold · Welcome to RockyOS",
  },
];
