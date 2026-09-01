"use client";

import React from "react";
import { Orbit } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function GalaxyDockMetrics() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className="w-full flex items-center justify-between pt-2.5 border-t border-white/5 select-none z-30 pointer-events-auto backdrop-blur-sm">
      {/* Bottom-Left System Emblem */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.35)]">
          <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-spin-slow" />
        </div>
        <div className="flex flex-col text-left font-mono">
          <span className="text-[11px] font-bold text-white tracking-wider">
            ROCKY<span className="text-cyan-400">OS</span>
          </span>
          <span className="text-[9px] text-slate-400/90 tracking-widest">
            {isZh ? "个人数字操作系统" : "PERSONAL OPERATING SYSTEM"}
          </span>
        </div>
      </div>

      {/* Bottom-Right Progress Bar & Status Metric */}
      <div className="flex flex-col items-end gap-1.5 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-white">
          <span className="text-cyan-300 font-medium">Six Worlds</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Infinite Possibilities</span>
        </div>
        <div className="w-36 sm:w-44 h-1 rounded-full bg-slate-800/80 overflow-hidden">
          <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
