"use client";

import React from "react";
import { Mouse } from "lucide-react";

export function GalaxyTelemetryHUD() {
  return (
    <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-2.5 z-20 pointer-events-none opacity-75 pr-2 select-none">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.95)]" />
      <div className="w-1 h-1 rounded-full bg-slate-500/80" />
      <div className="w-1 h-1 rounded-full bg-slate-500/80" />
      <div className="w-1 h-1 rounded-full bg-slate-500/80" />
      <div className="w-1 h-1 rounded-full bg-slate-500/80" />
      <div className="flex flex-col items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-3">
        <Mouse className="w-3.5 h-3.5 text-cyan-400" />
        <span>Scroll</span>
        <span>Explore</span>
      </div>
    </div>
  );
}
