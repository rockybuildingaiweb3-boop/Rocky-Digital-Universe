"use client";

import React from "react";
import { Globe, Sparkles, Box, Orbit } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function GalaxyDockMetrics() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 mt-6 select-none">
      {/* 1. Left System Tagline */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Orbit className="w-4 h-4 text-cyan-300 animate-[spin_30s_linear_infinite]" />
        </div>
        <div className="flex flex-col text-left font-mono">
          <span className="text-xs font-bold text-white tracking-wider">
            ROCKY<span className="text-cyan-400">OS</span>
          </span>
          <span className="text-[10px] text-slate-400 tracking-widest">
            {isZh ? "个人数字操作系统" : "PERSONAL OPERATING SYSTEM"}
          </span>
        </div>
      </div>

      {/* 2. Center 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-6 sm:gap-10 font-mono text-left">
        {/* Metric 1 */}
        <div className="flex items-start gap-2.5">
          <Globe className="w-4 h-4 text-cyan-400 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white tracking-wider">
              {isZh ? "6 大世界" : "6 WORLDS"}
            </span>
            <span className="text-[10px] text-slate-400 tracking-wide font-sans">
              {isZh ? "探索你的数字宇宙" : "Explore your digital universe"}
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-purple-400 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white tracking-wider">
              {isZh ? "∞ 无限可能" : "∞ POSSIBILITIES"}
            </span>
            <span className="text-[10px] text-slate-400 tracking-wide font-sans">
              {isZh ? "构筑理想人生" : "Build the life you want"}
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex items-start gap-2.5">
          <Box className="w-4 h-4 text-emerald-400 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white tracking-wider">
              {isZh ? "一个操作系统" : "ONE OS"}
            </span>
            <span className="text-[10px] text-slate-400 tracking-wide font-sans">
              {isZh ? "万物尽在掌握" : "Everything in one place"}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Right Progress Bar & Status Metric */}
      <div className="flex flex-col items-end gap-1.5 font-mono text-[10px] text-slate-400">
        <div className="flex items-center gap-2 text-white">
          <span className="text-cyan-300">Six Worlds</span>
          <span className="text-slate-600">/</span>
          <span>Infinite Possibilities</span>
        </div>
        <div className="w-36 h-1 rounded-full bg-slate-800 overflow-hidden">
          <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
