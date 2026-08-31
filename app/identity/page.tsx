"use client";

import React from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { Sparkles } from "lucide-react";

export default function IdentityPage() {
  const { locale } = useLanguage();

  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "个人原点故事" : "The Origin Story",
      desc: isZh ? "从早期技术好奇到专业全栈工程开拓者的心路历程。" : "Narrative biography tracing the journey from curiosity to builder.",
      tag: "BIOGRAPHY",
    },
    {
      number: "02",
      title: isZh ? "核心价值观" : "Core Values",
      desc: isZh ? "匠人精神、技术诚实、极致所有权与长期主义守则。" : "Principles of craftsmanship, extreme ownership, and long-termism.",
      tag: "VALUES",
    },
    {
      number: "03",
      title: isZh ? "成长转折时间线" : "Formative Timeline",
      desc: isZh ? "人生核心章节、关键十字路口与心智认知重塑节点。" : "Major life chapters, crossroads, and intellectual milestones.",
      tag: "CHRONOLOGY",
    },
    {
      number: "04",
      title: isZh ? "思想与哲学源泉" : "Books & Mental Models",
      desc: isZh ? "塑造个人世界观的思想家、经典著作与认知透镜。" : "Thinkers, foundational books, and mental models that shaped my lens.",
      tag: "PHILOSOPHY",
    },
    {
      number: "05",
      title: isZh ? "实体世界探索影像" : "Curated Gallery & Footprints",
      desc: isZh ? "物理世界的足迹、城市漫游与屏幕之外的真实温度。" : "Visual footprints across physical cities, cultures, and offline life.",
      tag: "EXPLORATION",
    },
    {
      number: "06",
      title: isZh ? "十年人生罗盘" : "10-Year Horizon Compass",
      desc: isZh ? "未来十年的技术使命、个人愿景与生命航向。" : "Personal aspirations and purposeful compass for the decade ahead.",
      tag: "VISION",
    },
  ];

  return (
    <WorldPortalTemplate
      worldOrder="01"
      worldName={isZh ? "身份世界" : "Identity Realm"}
      worldSubtitle={isZh ? "剥离技术标签，回归真实的生命底色。" : "Human · Origin · Values · Purpose Behind The Code."}
      missionQuote={isZh ? "技术的终极归宿是人性的温度。" : "Technology should feel human. Strip away the titles, uncover the core."}
      accentColor="#06b6d4"
      icon={Sparkles}
      subsystems={subsystems}
    />
  );
}
