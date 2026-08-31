"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { ArrowLeft, Compass, Sparkles, LucideIcon } from "lucide-react";

interface SubSystemItem {
  number: string;
  title: string;
  desc: string;
  tag: string;
}

export function WorldPortalTemplate({
  worldOrder,
  worldName,
  worldSubtitle,
  missionQuote,
  accentColor,
  icon: Icon,
  subsystems,
}: {
  worldOrder: string;
  worldName: string;
  worldSubtitle: string;
  missionQuote: string;
  accentColor: string;
  icon: LucideIcon;
  subsystems: SubSystemItem[];
}) {
  const { t } = useLanguage();

  return (
    <div className="relative flex-1 flex flex-col items-center px-4 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto w-full">
      {/* Dynamic Cosmic Ambient Radial Halo */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
        style={{ backgroundColor: accentColor }}
      />

      {/* Top Breadcrumb Channel */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-all active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t("subpage.backHome")}</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Compass className="w-3.5 h-3.5" style={{ color: accentColor }} />
          <span>WORLD {worldOrder} // CELESTIAL REALM</span>
        </div>
      </div>

      {/* World Hero Banner */}
      <header className="flex flex-col items-center text-center max-w-3xl mb-12">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-xl text-xs font-mono font-bold tracking-wider"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
            border: `1px solid ${accentColor}40`,
          }}
        >
          <Icon className="w-4 h-4" />
          <span>WORLD {worldOrder} : {worldName.toUpperCase()}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          {worldName}
        </h1>
        <p className="text-base sm:text-lg text-slate-400 font-sans mb-6">
          {worldSubtitle}
        </p>

        {/* Philosophy Quote Pill */}
        <div className="px-5 py-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md text-sm font-sans italic text-slate-300 shadow-xl max-w-xl">
          &ldquo;{missionQuote}&rdquo;
        </div>
      </header>

      {/* Subsystem Dimensional Bento Grid */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10 text-xs font-mono text-slate-400">
          <span className="font-bold text-white tracking-wider">
            ARCHITECTURAL DIMENSIONS & SUBSYSTEMS
          </span>
          <span style={{ color: accentColor }}>
            {subsystems.length} ACTIVE MODULES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subsystems.map((sub, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/80 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span
                    className="font-bold"
                    style={{ color: accentColor }}
                  >
                    DIMENSION {sub.number}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400">
                    {sub.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  {sub.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                <span>STATUS: OPERATIONAL</span>
                <span style={{ color: accentColor }}>EXPLORE &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
