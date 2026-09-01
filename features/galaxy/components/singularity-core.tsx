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
          1. VOLUMETRIC LUMINOUS PLANETARY SINGULARITY STAR
          ------------------------------------------------------------- */}
      <div className="relative flex items-center justify-center">
        {/* Layered Atmospheric Coronal Glows */}
        <div className="absolute w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute w-56 h-56 sm:w-[320px] sm:h-[320px] rounded-full bg-blue-600/25 blur-2xl animate-pulse delay-500" />
        <div className="absolute w-44 h-44 sm:w-[260px] sm:h-[260px] rounded-full bg-sky-400/20 blur-xl" />

        {/* 3D Tilted Orbital Elliptical Rings with Particle Sparks */}
        {/* Ring 1 (Tilted Primary Orbit) */}
        <div className="absolute w-[290px] sm:w-[430px] h-[115px] sm:h-[170px] rounded-[100%] border border-cyan-400/40 rotate-[22deg] animate-[spin_90s_linear_infinite]" />
        {/* Ring 2 (Cross Counter Orbit with Dashed Line) */}
        <div className="absolute w-[265px] sm:w-[390px] h-[100px] sm:h-[145px] rounded-[100%] border border-dashed border-indigo-300/30 rotate-[-35deg] animate-[spin_70s_linear_infinite_reverse]" />
        {/* Ring 3 (Steep Tilted Orbital Ellipse) */}
        <div className="absolute w-[235px] sm:w-[350px] h-[85px] sm:h-[125px] rounded-[100%] border border-white/20 rotate-[70deg] animate-[spin_100s_linear_infinite]" />

        {/* The Central Volumetric 3D Planet Body */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-[radial-gradient(circle_at_35%_30%,#38bdf8_0%,#0369a1_25%,#0c234b_55%,#030a1c_85%)] border-2 border-cyan-300/90 shadow-[0_0_65px_rgba(6,182,212,0.85),inset_0_0_40px_rgba(56,189,248,0.9)] flex flex-col items-center justify-center overflow-hidden">
          {/* Internal Plasma Atmosphere & Specular Highlights */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7)_0%,rgba(56,189,248,0.35)_35%,transparent_70%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(168,85,247,0.4)_0%,transparent_60%)] mix-blend-screen pointer-events-none" />
          
          {/* Specular Limb Sheen */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-100/60 blur-[1px] pointer-events-none" />

          {/* Center Logo & Typography Lockup */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Orbit Crescent Emblem */}
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-cyan-400/25 border border-cyan-200/90 flex items-center justify-center mb-1.5 shadow-[0_0_25px_rgba(6,182,212,0.95)]">
              <Orbit className="w-5 h-5 sm:w-7 sm:h-7 text-white animate-[spin_40s_linear_infinite]" />
            </div>

            {/* RockyOS Brand Wordmark */}
            <span className="text-white font-extrabold text-lg sm:text-2xl tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Rocky<span className="text-cyan-300">OS</span>
            </span>

            {/* Sub-tagline */}
            <span className="text-[8px] sm:text-[10px] font-mono text-cyan-200/90 tracking-[0.25em] uppercase font-semibold mt-1 drop-shadow-sm">
              Think · Create · Grow
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
