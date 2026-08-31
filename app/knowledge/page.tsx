"use client";

import React from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { BookOpen } from "lucide-react";

export default function KnowledgePage() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "系统性深度长文" : "Deep Architecture Essays",
      desc: isZh ? "针对个人操作系统、软件设计模式与复杂系统思考的长篇论著。" : "Long-form writing on systems thinking, web standards, and software.",
      tag: "ESSAYS",
    },
    {
      number: "02",
      title: isZh ? "工程实战笔记" : "Engineering Runbooks",
      desc: isZh ? "前端微内核、Tailwind 高阶工程、Next.js 踩坑与性能调优指南。" : "Hands-on playbooks, debugging runbooks, and performance tuning.",
      tag: "RUNBOOKS",
    },
    {
      number: "03",
      title: isZh ? "AI 工程师手记" : "AI Engineering Notes",
      desc: isZh ? "大模型提示词工程、Agent 状态机编排与 MCP 工具生态深度实践。" : "LLM prompt patterns, autonomous agent design, and MCP architecture.",
      tag: "AI NOTES",
    },
    {
      number: "04",
      title: isZh ? "经典书籍书摘金库" : "The Book Vault",
      desc: isZh ? "技术经典、商业战略与哲学著作的高密度核心思维模型沉淀。" : "High-density summaries, highlights, and mental models from books.",
      tag: "VAULT",
    },
    {
      number: "05",
      title: isZh ? "知识图谱与概念索引" : "Knowledge Concept Graph",
      desc: isZh ? "双向链接的网状概念索引，实现跨领域的思维闪光聚合。" : "Interlinked bi-directional knowledge map connecting discrete thoughts.",
      tag: "GRAPH",
    },
    {
      number: "06",
      title: isZh ? "开源知识库订阅" : "Public Knowledge Feed",
      desc: isZh ? "RSS 动态订阅与公开笔记导出，实现个体认知公共化。" : "RSS syndication and markdown vault export for public learning.",
      tag: "SYNDICATION",
    },
  ];

  return (
    <WorldPortalTemplate
      worldOrder="03"
      worldName={isZh ? "知识世界" : "Knowledge Realm"}
      worldSubtitle={isZh ? "公开学习，持续沉淀，将个体认知转化为公共价值。" : "Learning in Public · Transforming Mind into Public Value."}
      missionQuote={isZh ? "知识如果只是私藏便会腐坏；公开分享才是最好的思维磨刀石。" : "Knowledge decays in isolation; public expression is the ultimate crucible."}
      accentColor="#8b5cf6"
      icon={BookOpen}
      subsystems={subsystems}
    />
  );
}
