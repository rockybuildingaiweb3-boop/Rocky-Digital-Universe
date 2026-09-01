"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SingularityCore({
  cursorOffset,
}: {
  cursorOffset: { x: number; y: number };
}) {
  return (
    <motion.div
      animate={{
        x: cursorOffset.x * -8,
        y: cursorOffset.y * -8,
      }}
      transition={{ ease: "linear", duration: 0.1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none select-none"
    >
      {/* 1. Deep Space Gravitational Corona */}
      <div className="relative flex items-center justify-center">
        {/* Soft Radial Ambient Aura */}
        <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-purple-500/15 blur-2xl animate-pulse delay-700" />

        {/* Outer Rotating Gyro Ring */}
        <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-cyan-400/25 border-dashed animate-[spin_60s_linear_infinite]" />
        {/* Counter-rotating Inner Ring */}
        <div className="absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full border border-indigo-400/20 animate-[spin_45s_linear_infinite_reverse]" />

        {/* Central Core Crystal Nucleus */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.45)] flex flex-col items-center justify-center backdrop-blur-xl">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse mb-0.5" />
          <span className="text-cyan-300 font-bold text-xs tracking-widest font-mono">
            KERNEL
          </span>
          <span className="text-[9px] text-slate-400 font-mono tracking-wider">
            ROCKY
          </span>
        </div>
      </div>

      {/* Singularity Telemetry Label */}
      <div className="mt-3 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-950/80 border border-white/10 text-[10px] font-mono text-cyan-400 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>GRAVITATIONAL CENTER ONLINE</span>
      </div>
    </motion.div>
  );
}
