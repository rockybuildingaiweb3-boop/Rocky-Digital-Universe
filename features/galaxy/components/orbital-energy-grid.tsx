"use client";

import React from "react";
import { WORLD_NODES } from "@/data/navigation";
import type { WorldNode } from "@/types";

export function OrbitalEnergyGrid({
  activeWorld,
}: {
  activeWorld: WorldNode | null;
}) {
  const CONNECTIONS = [
    { from: "identity", to: "capability" },
    { from: "capability", to: "knowledge" },
    { from: "knowledge", to: "laboratory" },
    { from: "laboratory", to: "growth" },
    { from: "growth", to: "connection" },
    { from: "connection", to: "identity" },
  ];

  const getNode = (id: string) => WORLD_NODES.find((n) => n.id === id);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* -------------------------------------------------------------
          1. DEEP SPACE COSMIC PHENOMENA (Galaxy & Exoplanet Atmosphere)
          ------------------------------------------------------------- */}
      {/* Top-Right Spiral Galaxy Nebula */}
      <div className="absolute -top-12 -right-12 w-[540px] sm:w-[720px] h-[540px] sm:h-[720px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(59,130,246,0.18)_35%,transparent_70%)] blur-3xl" />
      {/* Spiral Galaxy Core Spiral Rings */}
      <div className="absolute top-10 right-14 w-48 h-48 rounded-full border border-purple-400/30 border-dashed animate-[spin_100s_linear_infinite] rotate-[45deg]" />
      <div className="absolute top-16 right-20 w-36 h-36 rounded-full border border-cyan-400/25 animate-[spin_75s_linear_infinite_reverse] rotate-[30deg]" />
      <div className="absolute top-24 right-28 w-20 h-20 rounded-full bg-cyan-300/30 blur-xl" />

      {/* Bottom-Left Exoplanet Atmospheric Limb */}
      <div className="absolute -bottom-64 -left-64 w-[620px] sm:w-[860px] h-[620px] sm:h-[860px] rounded-full bg-gradient-to-tr from-[#020617] via-[#0b1b3d] to-[#0ea5e9]/40 shadow-[0_0_150px_rgba(14,165,233,0.55)] border border-cyan-300/50 blur-[1px]" />
      <div className="absolute -bottom-52 -left-52 w-[540px] sm:w-[740px] h-[540px] sm:h-[740px] rounded-full bg-gradient-to-tr from-black via-slate-950 to-blue-950/70" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Ambient Cosmic Gas Clouds */}
      <div className="absolute top-1/4 left-1/4 w-[460px] h-[460px] rounded-full bg-cyan-600/12 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] rounded-full bg-purple-600/12 blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-[380px] h-[380px] rounded-full bg-indigo-600/12 blur-3xl" />

      {/* Twinkling Diamond Star Crosses in Background */}
      <div className="absolute top-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8] animate-pulse" />
      <div className="absolute top-[42%] right-[18%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#ffffff] animate-pulse delay-700" />
      <div className="absolute bottom-[35%] left-[45%] w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_6px_#c084fc] animate-pulse delay-1000" />
      <div className="absolute top-[15%] right-[40%] w-1.5 h-1.5 rounded-full bg-sky-200 shadow-[0_0_8px_#bae6fd] animate-pulse delay-500" />

      {/* -------------------------------------------------------------
          2. CLOSED CONCENTRIC ELLIPTICAL ORBIT BELTS
          ------------------------------------------------------------- */}
      {/* Outer Continuous Primary Elliptical Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] sm:w-[1100px] h-[420px] sm:h-[580px] rounded-[100%] border border-cyan-400/25 rotate-[-12deg]" />
      {/* Secondary Counter-Angle Elliptical Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[980px] h-[370px] sm:h-[510px] rounded-[100%] border border-dashed border-white/15 rotate-[16deg]" />
      {/* Inner Harmonic Orbit Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[820px] h-[310px] sm:h-[430px] rounded-[100%] border border-cyan-500/15 rotate-[-5deg]" />

      {/* -------------------------------------------------------------
          3. COMPLETE SVG ENERGY FILAMENT CONSTELLATION
          ------------------------------------------------------------- */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="activeEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Path connecting each satellite planet */}
        {CONNECTIONS.map((c, idx) => {
          const n1 = getNode(c.from);
          const n2 = getNode(c.to);
          if (!n1 || !n2) return null;

          const isHighlight =
            activeWorld?.id === n1.id || activeWorld?.id === n2.id;

          return (
            <line
              key={idx}
              x1={`${n1.coordinates.x}%`}
              y1={`${n1.coordinates.y}%`}
              x2={`${n2.coordinates.x}%`}
              y2={`${n2.coordinates.y}%`}
              stroke={isHighlight ? "url(#activeEnergyGrad)" : "rgba(255,255,255,0.18)"}
              strokeWidth={isHighlight ? "2.5" : "1.2"}
              strokeDasharray={isHighlight ? "none" : "6 6"}
              className="transition-all duration-500"
            />
          );
        })}

        {/* Gravitational Anchor Lines from Center (50%, 50%) to Each Planet */}
        {WORLD_NODES.map((node) => {
          const isHighlight = activeWorld?.id === node.id;
          return (
            <line
              key={`core-${node.id}`}
              x1="50%"
              y1="50%"
              x2={`${node.coordinates.x}%`}
              y2={`${node.coordinates.y}%`}
              stroke={node.accentColor}
              strokeWidth={isHighlight ? "2" : "0.85"}
              strokeOpacity={isHighlight ? "0.85" : "0.18"}
              strokeDasharray={isHighlight ? "none" : "4 8"}
              className="transition-all duration-400"
            />
          );
        })}
      </svg>
    </div>
  );
}
