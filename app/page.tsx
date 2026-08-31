"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WORLD_NODES } from "@/data/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { WeChatModal } from "@/features/connection/wechat-modal";
import { ArrowRight, QrCode, Play, Sparkles } from "lucide-react";

export default function HomePage() {
  const { locale, t } = useLanguage();
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto w-full">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-12 sm:mb-16">
        {/* Telemetry Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-wider">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{t("hero.badge")}</span>
        </div>

        {/* Master Vision Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          {t("hero.titleLine1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
            {t("hero.titleLine2")}
          </span>
        </h1>

        {/* Mission Statement */}
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-sans">
          {t("hero.mission")}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs w-full sm:w-auto">
          <Link
            href="/opening"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t("hero.ctaPrologue")}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsWeChatOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 text-slate-200 transition-all active:scale-95"
          >
            <QrCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("hero.ctaWeChat")}</span>
          </button>
        </div>
      </section>

      {/* Six Worlds Realm Grid */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/10 gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide font-mono">
              {t("hero.worldsHeading")}
            </h2>
            <p className="text-xs text-slate-400">{t("hero.worldsSub")}</p>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
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
                className="group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/25 transition-all flex flex-col justify-between overflow-hidden"
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
                      {t("hero.world")} {node.order}
                    </span>
                    <span className="text-slate-500 group-hover:text-slate-300 transition-colors text-[11px]">
                      {t("hero.coord")} ({node.coordinates.x}, {node.coordinates.y})
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {worldName}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mb-6">
                    {worldTagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>{t("hero.enterWorld")}</span>
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
