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
  actionPromptEn: string;
  actionPromptZh: string;
}

export const CINEMA_SCENES: CinematicSceneConfig[] = [
  {
    id: 1,
    type: "scene1",
    actBadge: "ACT 01",
    actTitleEn: "REJECTION",
    actTitleZh: "拒绝",
    imageSrc: "/opening/hd-scene1-rejection.jpg",
    lineEn: "I questioned AI.",
    lineZh: "我曾质疑 AI。",
    subEn: "Skeptical of shortcuts. Guarding human craft and creative boundaries.",
    subZh: "警惕投机取巧，坚守人类独有的创造底线与独立思考。",
    actionPromptEn: "Click / Tap to break the tension",
    actionPromptZh: "点击屏幕 · 触发拒绝冲击",
  },
  {
    id: 2,
    type: "scene2",
    actBadge: "ACT 02",
    actTitleEn: "HANDSHAKE",
    actTitleZh: "握手",
    imageSrc: "/opening/hd-scene2-handshake.jpg",
    lineEn: "I learned to work with AI.",
    lineZh: "我学会了与 AI 合作。",
    subEn: "Not as a replacement, but as an intellectual amplifier.",
    subZh: "它不是替代者，而是拓宽认知边界的心智放大器。",
    actionPromptEn: "Click handshake to establish contact",
    actionPromptZh: "点击握手 · 建立共生联结",
  },
  {
    id: 3,
    type: "scene3",
    actBadge: "ACT 03",
    actTitleEn: "APPROVAL",
    actTitleZh: "点赞",
    imageSrc: "/opening/hd-scene3-approval.jpg",
    lineEn: "Together, we built more than either of us could alone.",
    lineZh: "我们共同创造了超越彼此的可能。",
    subEn: "Human intuition multiplied by machine precision.",
    subZh: "以人类直觉为罗盘，以机器极致精度为引擎。",
    actionPromptEn: "Press & Hold background to raise the dawn",
    actionPromptZh: "长按背景 · 升起希望朝阳",
  },
  {
    id: 4,
    type: "scene4",
    actBadge: "ACT 04",
    actTitleEn: "THE DOOR",
    actTitleZh: "启门",
    imageSrc: "/opening/hd-scene4-door.jpg",
    lineEn: "I began to see what we could become together.",
    lineZh: "我开始看到我们共同走向的未来。",
    subEn: "Three progressive knocks to unseal the gateway into RockyOS.",
    subZh: "三次叩门进阶，推开通往 RockyOS 数字宇宙的巨门。",
    actionPromptEn: "Click door to knock",
    actionPromptZh: "轻叩门扉 · 开启数字宇宙",
  },
];
