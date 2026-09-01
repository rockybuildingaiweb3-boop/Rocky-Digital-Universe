"use client";

import React from "react";
import { motion } from "framer-motion";
import { Orbit } from "lucide-react";

export function SingularityCore({
  cursorOffset,
}: {
  cursorOffset: { x: number; y: number };
}) {
  return (
    <motion.div
      animate={{
        x: cursorOffset.x * -6,
        y: cursorOffset.y * -6,
      }}
      transition={{ ease: "linear", duration: 0.1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none select-none"
    >
      {/* -------------------------------------------------------------
          1. LUMINOUS BLUE PLANETARY PLASMA SPHERE
          ------------------------------------------------------------- */}
      <div className="relative flex items-center justify-center">
        {/* Deep Blue & Cyan Coronal Atmosphere */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-blue-600/25 blur-2xl animate-pulse delay-700" />
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-sky-400/20 blur-xl" />

        {/* 3D Tilted Orbital Elliptical Rings */}
        {/* Ring 1 (Tilted Primary Orbit) */}
        <div className="absolute w-80 sm:w-[440px] h-32 sm:h-44 rounded-[100%] border border-cyan-400/30 rotate-[22deg] animate-[spin_60s_linear_infinite]" />
        {/* Ring 2 (Cross Counter Orbit with Dashed Line) */}
        <div className="absolute w-72 sm:w-[400px] h-28 sm:h-38 rounded-[100%] border border-dashed border-indigo-400/25 rotate-[-35deg] animate-[spin_50s_linear_infinite_reverse]" />
        {/* Ring 3 (Steep Tilted Orbital Ellipse) */}
        <div className="absolute w-64 sm:w-[360px] h-24 sm:h-32 rounded-[100%] border border-white/15 rotate-[70deg] animate-[spin_70s_linear_infinite]" />

        {/* The Central Planetary Body */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-950 via-cyan-950 to-sky-700 border-2 border-cyan-300/80 shadow-[0_0_80px_rgba(6,182,212,0.65),inset_0_0_50px_rgba(56,189,248,0.85)] flex flex-col items-center justify-center overflow-hidden">
          {/* Internal Plasma & Webbing Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.45),transparent_65%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.18)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-35 animate-[pulse_4s_ease-in-out_infinite]" />

          {/* Central Logo & Typography Lockup */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Crescent Emblem */}
            <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-cyan-400/25 border border-cyan-200/90 flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(6,182,212,0.85)]">
              <Orbit className="w-6 h-6 sm:w-7 sm:h-7 text-white animate-[spin_40s_linear_infinite]" />
            </div>

            {/* RockyOS Brand Wordmark */}
            <span className="text-white font-extrabold text-lg sm:text-2xl tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Rocky<span className="text-cyan-300">OS</span>
            </span>

            {/* Sub-tagline */}
            <span className="text-[9px] sm:text-[10px] font-mono text-cyan-200/95 tracking-[0.25em] uppercase font-semibold mt-1">
              Think · Create · Grow
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
