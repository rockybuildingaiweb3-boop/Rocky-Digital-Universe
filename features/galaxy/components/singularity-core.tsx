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
          1. LUMINOUS BLUE PLASMA PLANET SPHERE
          ------------------------------------------------------------- */}
      <div className="relative flex items-center justify-center">
        {/* Deep Blue/Cyan Radial Coronal Flare */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-blue-600/30 blur-2xl animate-pulse delay-500" />
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-sky-400/20 blur-xl" />

        {/* 3D Tilted Orbital Elliptical Rings */}
        {/* Ring 1 (Horizontal Tilted) */}
        <div className="absolute w-72 sm:w-96 h-28 sm:h-36 rounded-[100%] border border-cyan-400/30 rotate-[22deg] animate-[spin_50s_linear_infinite]" />
        {/* Ring 2 (Cross Diagonal Tilted) */}
        <div className="absolute w-64 sm:w-88 h-24 sm:h-32 rounded-[100%] border border-dashed border-indigo-400/25 rotate-[-35deg] animate-[spin_40s_linear_infinite_reverse]" />
        {/* Ring 3 (Steep Tilted) */}
        <div className="absolute w-56 sm:w-80 h-20 sm:h-28 rounded-[100%] border border-white/15 rotate-[70deg] animate-[spin_60s_linear_infinite]" />

        {/* The Central Blue Energy Star Body */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-blue-950 via-cyan-900 to-sky-700 border-2 border-cyan-300/80 shadow-[0_0_60px_rgba(6,182,212,0.6),inset_0_0_40px_rgba(56,189,248,0.8)] flex flex-col items-center justify-center overflow-hidden">
          {/* Internal Plasma Texture Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-40 animate-[pulse_4s_ease-in-out_infinite]" />

          {/* Crescent Logo Emblem */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-cyan-400/20 border border-cyan-300 flex items-center justify-center mb-1.5 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
              <Orbit className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            {/* RockyOS Brand Wordmark */}
            <span className="text-white font-extrabold text-base sm:text-xl tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Rocky<span className="text-cyan-300">OS</span>
            </span>

            {/* Sub-tagline */}
            <span className="text-[8px] sm:text-[9px] font-mono text-cyan-200/90 tracking-[0.25em] uppercase font-semibold mt-1">
              THINK · CREATE · GROW
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
