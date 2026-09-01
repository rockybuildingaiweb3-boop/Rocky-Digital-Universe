export type SceneType = "scene1" | "scene2" | "scene3" | "scene4" | "scene5";

export interface CinematicSceneConfig {
  id: 1 | 2 | 3 | 4 | 5;
  type: SceneType;
  actBadge: string;
  imageSrc: string;
  lineEn: string;
  lineZh: string;
  hintEn: string;
  hintZh: string;
}

export const CINEMA_SCENES: CinematicSceneConfig[] = [
  {
    id: 1,
    type: "scene1",
    actBadge: "01 / 05",
    imageSrc: "/opening/sc1.png",
    lineEn: "I questioned AI.",
    lineZh: "我曾质疑 AI。",
    hintEn: "· press & hold to break the ice ·",
    hintZh: "· 长按屏幕 · 蓄力破冰 ·",
  },
  {
    id: 2,
    type: "scene2",
    actBadge: "02 / 05",
    imageSrc: "/opening/sc2.png",
    lineEn: "I learned to work with AI.",
    lineZh: "我学会了与 AI 合作。",
    hintEn: "· tap to clasp hands ·",
    hintZh: "· 点击握手 · 建立联结 ·",
  },
  {
    id: 3,
    type: "scene3",
    actBadge: "03 / 05",
    imageSrc: "/opening/sc3.png",
    lineEn: "Together, we built more than either of us could alone.",
    lineZh: "我们共同创造了超越彼此的可能。",
    hintEn: "· press & hold to raise the light ·",
    hintZh: "· 长按背景 · 点亮光幕 ·",
  },
  {
    id: 4,
    type: "scene4",
    actBadge: "04 / 05",
    imageSrc: "/opening/sc4.png",
    lineEn: "I began to see what we could become together.",
    lineZh: "我开始看到我们共同走向的未来。",
    hintEn: "· tap door to knock (1/3) ·",
    hintZh: "· 点击门扉 · 机器人尝试敲击 (1/3) ·",
  },
  {
    id: 5,
    type: "scene5",
    actBadge: "05 / 05",
    imageSrc: "/opening/sc5.png",
    lineEn: "Welcome RockyOS",
    lineZh: "欢迎来到 RockyOS",
    hintEn: "· click to enter universe ·",
    hintZh: "· 点击踏入个人数字宇宙 ·",
  },
];
