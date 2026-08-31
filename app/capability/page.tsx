"use client";

import React from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { Cpu } from "lucide-react";

export default function CapabilityPage() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "核心旗舰项目" : "Flagship Projects",
      desc: isZh ? "具备真实业务指标、架构拓扑与 GitHub 源码交付的重点作品。" : "Production case studies with measurable metrics, topology, and code.",
      tag: "FLAGSHIPS",
    },
    {
      number: "02",
      title: isZh ? "全栈架构纵深" : "Full-Stack Architecture",
      desc: isZh ? "现代前端工程、响应式设计系统、无服务器与云原生落地实践。" : "Deep frontend systems, edge computing, and cloud engineering.",
      tag: "SYSTEMS",
    },
    {
      number: "03",
      title: isZh ? "技术能力矩阵" : "Mastery Skills Matrix",
      desc: isZh ? "TypeScript、Modern CSS、Next.js、Python 与分布式工具集。" : "Proficiency breakdown across languages, frameworks, and dev tooling.",
      tag: "STACK",
    },
    {
      number: "04",
      title: isZh ? "交互式动态履历" : "Interactive Résumé",
      desc: isZh ? "可筛选、高密度的职业演进轨迹，支持导出单页规范 PDF。" : "Dynamic career timeline with filterable impact and PDF export.",
      tag: "CAREER",
    },
    {
      number: "05",
      title: isZh ? "开源贡献与动态" : "Open Source & Commits",
      desc: isZh ? "GitHub 活跃度流、开源工具集维护与技术社区共建。" : "Live repository contributions, developer tooling, and pull requests.",
      tag: "COMMUNITY",
    },
    {
      number: "06",
      title: isZh ? "架构复盘与工程原则" : "Architectural Postmortems",
      desc: isZh ? "真实项目踩坑记录、性能基准调优与架构决策记录（ADR）。" : "Production failure postmortems and architectural decision records.",
      tag: "INSIGHTS",
    },
  ];

  return (
    <WorldPortalTemplate
      worldOrder="02"
      worldName={isZh ? "能力世界" : "Capability Realm"}
      worldSubtitle={isZh ? "不谈虚名，以真实交付的系统与架构说话。" : "Builder · Engineer · Architect · Problem Solver."}
      missionQuote={isZh ? "卓越的工程不是复杂代码的堆砌，而是对复杂现实的极致解耦。" : "True engineering is not compounding complexity, but ruthless decoupling."}
      accentColor="#6366f1"
      icon={Cpu}
      subsystems={subsystems}
    />
  );
}
