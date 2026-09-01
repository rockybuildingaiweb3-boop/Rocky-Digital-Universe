/**
 * Navigation Registry & Spatial Celestial Coordinates
 * Aligned with RockyOS Master Universe Design
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
      en: "Know Yourself",
      zh: "认识自己",
      de: "Erkenne dich",
      fr: "Connais-toi",
      ja: "自分を知る",
    },
    route: "/identity",
    accentColor: "#38bdf8",
    coordinates: { x: 50, y: 18 },
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
      en: "Do More",
      zh: "突破极限",
      de: "Mehr tun",
      fr: "Faire plus",
      ja: "限界を超える",
    },
    route: "/capability",
    accentColor: "#f59e0b",
    coordinates: { x: 74, y: 36 },
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
      en: "See Deeper",
      zh: "洞悉深度",
      de: "Tiefer sehen",
      fr: "Voir plus loin",
      ja: "深く探求する",
    },
    route: "/knowledge",
    accentColor: "#3b82f6",
    coordinates: { x: 72, y: 63 },
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
      en: "Explore Freely",
      zh: "自由探索",
      de: "Frei erforschen",
      fr: "Explorer librement",
      ja: "自由に実験する",
    },
    route: "/laboratory",
    accentColor: "#a855f7",
    coordinates: { x: 50, y: 75 },
  },
  {
    id: "growth",
    order: "05",
    name: {
      en: "Growth",
      zh: "成长世界",
      de: "Wachstum",
      fr: "Croissance",
      ja: "成長の記録",
    },
    tagline: {
      en: "Keep Evolving",
      zh: "持续进化",
      de: "Weiterentwickeln",
      fr: "Évoluer sans cesse",
      ja: "進化し続ける",
    },
    route: "/growth",
    accentColor: "#10b981",
    coordinates: { x: 28, y: 60 },
  },
  {
    id: "connection",
    order: "06",
    name: {
      en: "Connection",
      zh: "连接世界",
      de: "Verbindung",
      fr: "Connexion",
      ja: "つながり",
    },
    tagline: {
      en: "Build Together",
      zh: "携手共创",
      de: "Zusammen bauen",
      fr: "Construire ensemble",
      ja: "共に創る",
    },
    route: "/connection",
    accentColor: "#9333ea",
    coordinates: { x: 32, y: 32 },
  },
];
