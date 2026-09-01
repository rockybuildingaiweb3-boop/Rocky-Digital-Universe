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
        x: cursorOffset.x * -8,
        y: cursorOffset.y * -8,
      }}
      transition={{ ease: "linear", duration: 0.1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none select-none"
    >
      {/* -------------------------------------------------------------
          1. MASSIVE LUMINOUS BLUE PLANETARY PLASMA SPHERE
          ------------------------------------------------------------- */}
      <div className="relative flex items-center justify-center">
        {/* Deep Gravitational Halo Layers */}
        <div className="absolute w-80 h-80 sm:w-[440px] sm:h-[440px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
        <div className="absolute w-64 h-64 sm:w-[360px] sm:h-[360px] rounded-full bg-blue-600/30 blur-2xl animate-pulse delay-700" />
        <div className="absolute w-52 h-52 sm:w-[280px] sm:h-[280px] rounded-full bg-sky-400/25 blur-xl" />

        {/* 3D Tilted Orbital Elliptical Rings with Particle Accents */}
        {/* Ring 1 (Tilted Primary Orbit) */}
        <div className="absolute w-[320px] sm:w-[500px] h-[130px] sm:h-[190px] rounded-[100%] border border-cyan-400/40 rotate-[22deg] animate-[spin_80s_linear_infinite]" />
        {/* Ring 2 (Cross Counter Orbit with Dashed Line) */}
        <div className="absolute w-[290px] sm:w-[450px] h-[115px] sm:h-[165px] rounded-[100%] border border-dashed border-indigo-400/30 rotate-[-35deg] animate-[spin_65s_linear_infinite_reverse]" />
        {/* Ring 3 (Steep Tilted Orbital Ellipse) */}
        <div className="absolute w-[260px] sm:w-[400px] h-[100px] sm:h-[140px] rounded-[100%] border border-white/20 rotate-[70deg] animate-[spin_90s_linear_infinite]" />

        {/* The Central Primary Planetary Body */}
        <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#030c1e] via-[#08224d] to-[#0284c7] border-2 border-cyan-300 shadow-[0_0_90px_rgba(6,182,212,0.75),inset_0_0_60px_rgba(56,189,248,0.9)] flex flex-col items-center justify-center overflow-hidden">
          {/* Multi-layered Internal Plasma Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.5),transparent_65%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.2)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-40 animate-[pulse_4s_ease-in-out_infinite]" />
          
          {/* Atmospheric Limb Sheen */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-200/40 blur-[2px] pointer-events-none" />

          {/* Central Logo & Typography Lockup */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Orbit Crescent Emblem */}
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-cyan-400/30 border border-cyan-100 flex items-center justify-center mb-2.5 shadow-[0_0_30px_rgba(6,182,212,0.95)]">
              <Orbit className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-[spin_40s_linear_infinite]" />
            </div>

            {/* RockyOS Brand Wordmark */}
            <span className="text-white font-extrabold text-xl sm:text-3xl tracking-wide drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)]">
              Rocky<span className="text-cyan-300">OS</span>
            </span>

            {/* Sub-tagline */}
            <span className="text-[9px] sm:text-[11px] font-mono text-cyan-200 tracking-[0.28em] uppercase font-semibold mt-1 drop-shadow-sm">
              Think · Create · Grow
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
