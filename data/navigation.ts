/**
 * Navigation Registry & Static Coordinates
 * Aligned with docs/03_Information_Architecture.md
 */

import type { WorldNode } from "@/types";

export const WORLD_NODES: WorldNode[] = [
  {
    id: "identity",
    order: "01",
    name: {
      en: "Identity",
      zh: "身份世界",
      de: "Identität",
      fr: "Identité",
      ja: "アイデンティティ",
    },
    tagline: {
      en: "Who I Am",
      zh: "我是谁",
      de: "Wer ich bin",
      fr: "Qui je suis",
      ja: "自分について",
    },
    route: "/identity",
    accentColor: "#06b6d4",
    coordinates: { x: 50, y: 15 },
  },
  {
    id: "capability",
    order: "02",
    name: {
      en: "Capability",
      zh: "能力世界",
      de: "Fähigkeiten",
      fr: "Capacités",
      ja: "能力と実績",
    },
    tagline: {
      en: "What I Can Build",
      zh: "我能创造什么",
      de: "Was ich baue",
      fr: "Ce que je construis",
      ja: "創造できるもの",
    },
    route: "/capability",
    accentColor: "#6366f1",
    coordinates: { x: 85, y: 40 },
  },
  {
    id: "knowledge",
    order: "03",
    name: {
      en: "Knowledge",
      zh: "知识世界",
      de: "Wissen",
      fr: "Connaissance",
      ja: "知識と学び",
    },
    tagline: {
      en: "What I Learn",
      zh: "我学到了什么",
      de: "Was ich lerne",
      fr: "Ce que j'apprends",
      ja: "学びの軌迹",
    },
    route: "/knowledge",
    accentColor: "#8b5cf6",
    coordinates: { x: 15, y: 70 },
  },
  {
    id: "laboratory",
    order: "04",
    name: {
      en: "Laboratory",
      zh: "实验世界",
      de: "Laboratorium",
      fr: "Laboratoire",
      ja: "実験場",
    },
    tagline: {
      en: "Where Ideas Play",
      zh: "灵感试验场",
      de: "Wo Ideen spielen",
      fr: "Où jouent les idées",
      ja: "アイデアの実験",
    },
    route: "/laboratory",
    accentColor: "#ec4899",
    coordinates: { x: 85, y: 70 },
  },
  {
    id: "connection",
    order: "05",
    name: {
      en: "Connection",
      zh: "连接世界",
      de: "Verbindung",
      fr: "Connexion",
      ja: "つながり",
    },
    tagline: {
      en: "Human Bridge",
      zh: "连接人与世界",
      de: "Menschliche Brücke",
      fr: "Pont humain",
      ja: "人との架け桥",
    },
    route: "/connection",
    accentColor: "#10b981",
    coordinates: { x: 50, y: 90 },
  },
  {
    id: "growth",
    order: "06",
    name: {
      en: "Growth",
      zh: "成长世界",
      de: "Wachstum",
      fr: "Croissance",
      ja: "成長の記録",
    },
    tagline: {
      en: "The 10-Yr Journey",
      zh: "十年成长轨迹",
      de: "Die 10-Jahre-Reise",
      fr: "Le voyage de 10 ans",
      ja: "10年の旅路",
    },
    route: "/growth",
    accentColor: "#f59e0b",
    coordinates: { x: 15, y: 40 },
  },
];
