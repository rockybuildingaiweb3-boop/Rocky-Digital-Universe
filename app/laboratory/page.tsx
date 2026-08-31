"use client";

import React from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { FlaskConical } from "lucide-react";

export default function LaboratoryPage() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "AI 提示词试验台" : "Prompt Engineering Lab",
      desc: isZh ? "针对复杂系统重构与自主 Agent 调优的系统级 Prompt 沙盒演示。" : "Curated system prompts, few-shot templates, and evaluation suites.",
      tag: "PROMPTS",
    },
    {
      number: "02",
      title: isZh ? "交互式微原型" : "Interactive Micro-Prototypes",
      desc: isZh ? "极客微应用、动效灵感测试场与极简 WebGL/Canvas 空间实验。" : "UI playgrounds, creative web experiments, and spatial prototypes.",
      tag: "SANDBOX",
    },
    {
      number: "03",
      title: isZh ? "MCP 自定义工具集" : "Custom MCP Tool Ecosystem",
      desc: isZh ? "为智能体赋能的 Model Context Protocol 协议扩展与接口工具。" : "Model Context Protocol servers connecting agents to file & dev systems.",
      tag: "MCP TOOLS",
    },
    {
      number: "04",
      title: isZh ? "自动化工作流脚本" : "Agentic Automations",
      desc: isZh ? "端到端跨终端、浏览器与代码编辑器的自主 Pair-Programming 流水线。" : "Autonomous pair-programming pipelines across editor and browser.",
      tag: "WORKFLOWS",
    },
    {
      number: "05",
      title: isZh ? "前沿技术调研日志" : "Bleeding-Edge Spikes",
      desc: isZh ? "对 Web3、本地离线大模型推理与新兴前端工具链的技术验证试验。" : "Rapid spikes on offline inference, edge runtimes, and next-gen tools.",
      tag: "SPIKES",
    },
    {
      number: "06",
      title: isZh ? "实验归档与反思" : "Laboratory Archives",
      desc: isZh ? "记录失败的尝试、被淘汰的原型以及从中提炼的核心反直觉经验。" : "Documented failed experiments and counter-intuitive lessons learned.",
      tag: "RETRO",
    },
  ];

  return (
    <WorldPortalTemplate
      worldOrder="04"
      worldName={isZh ? "实验世界" : "Laboratory Realm"}
      worldSubtitle={isZh ? "保持孩子般的好奇心，在严谨工程之外保留一片灵感试验田。" : "The Sandbox of Ideas · Prototyping The Uncharted."}
      missionQuote={isZh ? "在确定性中创造生产力，在不确定性中发现未来。" : "Build productivity in certainty; discover the future in uncertainty."}
      accentColor="#ec4899"
      icon={FlaskConical}
      subsystems={subsystems}
    />
  );
}
