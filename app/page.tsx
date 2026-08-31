"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WORLD_NODES } from "@/data/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { WeChatModal } from "@/features/connection/wechat-modal";
import { ArrowRight, QrCode, Play, Sparkles } from "lucide-react";

export default function HomePage() {
  const { locale } = useLanguage();
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  const copy = {
    en: {
      badge: "ROCKYOS v1.0 // KERNEL ONLINE",
      titleLine1: "Not a Portfolio.",
      titleLine2: "My Personal Operating System.",
      mission:
        "A living digital universe to document growth, showcase capabilities, share knowledge, and connect with the world over the next decade (2024–2034).",
      ctaPrologue: "Watch Human-AI Prologue",
      ctaWeChat: "WeChat Connect",
      worldsHeading: "The Six Core Worlds",
      worldsSub: "Select a celestial realm to explore Rocky's digital ecosystem.",
      enterWorld: "Enter World",
    },
    zh: {
      badge: "ROCKYOS v1.0 // 内核正常运行",
      titleLine1: "它不是一个作品集。",
      titleLine2: "它是我的个人操作系统。",
      mission:
        "这是我的数字世界：一个记录成长、展示能力、分享知识、连接他人的地方。不仅展示现在的自己，更记录未来十年成长的自己 (2024–2034)。",
      ctaPrologue: "观看人机合作前言剧场",
      ctaWeChat: "微信扫码直连",
      worldsHeading: "六大核心世界",
      worldsSub: "探索 RockyOS 数字化生命宇宙的六大核心维度。",
      enterWorld: "进入世界",
    },
  };

  const t = locale === "zh" ? copy.zh : copy.en;

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto w-full">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16 sm:mb-20">
        {/* Telemetry Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-wider">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{t.badge}</span>
        </div>

        {/* Master Vision Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          {t.titleLine1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
            {t.titleLine2}
          </span>
        </h1>

        {/* Mission Statement */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-sans">
          {t.mission}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
          <Link
            href="/opening"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t.ctaPrologue}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsWeChatOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 text-slate-200 transition-all"
          >
            <QrCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.ctaWeChat}</span>
          </button>
        </div>
      </section>

      {/* Six Worlds Realm Grid */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-white/10 gap-2">
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide font-mono">
              {t.worldsHeading}
            </h2>
            <p className="text-xs text-slate-400">{t.worldsSub}</p>
          </div>
          <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
            6 ACTIVE REALMS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORLD_NODES.map((node) => {
            const worldName = node.name[locale] || node.name.en;
            const worldTagline = node.tagline[locale] || node.tagline.en;

            return (
              <Link
                key={node.id}
                href={node.route}
                className="group relative p-6 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/25 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: node.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span
                      className="px-2 py-0.5 rounded-md font-bold text-[10px]"
                      style={{
                        backgroundColor: `${node.accentColor}20`,
                        color: node.accentColor,
                      }}
                    >
                      WORLD {node.order}
                    </span>
                    <span className="text-slate-500 group-hover:text-slate-300 transition-colors">
                      COORD ({node.coordinates.x}, {node.coordinates.y})
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {worldName}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mb-6">
                    {worldTagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>{t.enterWorld}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Interactive WeChat Modal */}
      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
      />
    </div>
  );
}
