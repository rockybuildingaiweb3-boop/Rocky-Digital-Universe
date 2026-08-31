"use client";

import React from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { TrendingUp } from "lucide-react";

export default function GrowthPage() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "十年系统演进日志" : "The 10-Year Changelog",
      desc: isZh ? "版本化追踪 RockyOS 与个人认知演进的季度里程碑（2024–2034）。" : "Quarterly milestones tracking RockyOS and cognitive growth (2024–2034).",
      tag: "CHANGELOG",
    },
    {
      number: "02",
      title: isZh ? "季度深度复盘" : "Quarterly Reflections",
      desc: isZh ? "坦诚直面技术判断、战略抉择与思维盲点的深度自我审视录。" : "Candid postmortems examining blind spots and strategic decisions.",
      tag: "REFLECTIONS",
    },
    {
      number: "03",
      title: isZh ? "习惯与微习惯飞轮" : "Habit Compounding Flywheel",
      desc: isZh ? "代码提交律动、每日深度思考时长与跨领域阅读习惯数据沉淀。" : "Daily coding cadence, deep thought blocks, and reading habits.",
      tag: "METRICS",
    },
    {
      number: "04",
      title: isZh ? "技能树解锁树状图" : "Competency Evolution Tree",
      desc: isZh ? "从普通全栈工程师到 AI 协作架构师的技能分支解锁与熟练度曲线。" : "Visual branching tech tree tracking evolution from dev to architect.",
      tag: "TECH TREE",
    },
    {
      number: "05",
      title: isZh ? "年度公开信与报告" : "Annual Letters to Future Self",
      desc: isZh ? "每年元旦写给未来十年的自省书信与年度技术成就审计报告。" : "Annual letters and audited reviews measuring multi-year progress.",
      tag: "LETTERS",
    },
    {
      number: "06",
      title: isZh ? "长寿愿景与生命指标" : "Endurance & Health Baseline",
      desc: isZh ? "将身体活力与睡眠质量视为长期工程可持续交付的底层基石。" : "Physical vitality, sleep ergonomics, and high-performance longevity.",
      tag: "ENDURANCE",
    },
  ];

  return (
    <WorldPortalTemplate
      worldOrder="06"
      worldName={isZh ? "成长世界" : "Growth Realm"}
      worldSubtitle={isZh ? "记录时间复利，见证一个生命个体向数字宇宙的持续跃迁。" : "The 10-Year Horizon (2024–2034) · Compounding Trajectory."}
      missionQuote={isZh ? "真正的成熟不是变得世故，而是拥有让时间成为盟友的定力。" : "True maturity is aligning your daily actions with the compounding of time."}
      accentColor="#f59e0b"
      icon={TrendingUp}
      subsystems={subsystems}
    />
  );
}
