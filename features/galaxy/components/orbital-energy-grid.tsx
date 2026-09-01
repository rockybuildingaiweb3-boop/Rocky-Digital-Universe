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
          1. DEEP SPACE COSMIC PHENOMENA
          ------------------------------------------------------------- */}
      {/* Top-Right Spiral Galaxy Nebula */}
      <div className="absolute top-[-8%] right-[-5%] w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.22)_0%,rgba(59,130,246,0.15)_35%,transparent_70%)] blur-3xl" />
      {/* Spiral Galaxy Core Spiral Discs */}
      <div className="absolute top-10 right-14 w-40 h-40 rounded-full border border-purple-400/25 border-dashed animate-[spin_90s_linear_infinite] rotate-[45deg]" />
      <div className="absolute top-16 right-20 w-28 h-28 rounded-full border border-cyan-400/20 animate-[spin_60s_linear_infinite_reverse] rotate-[30deg]" />

      {/* Bottom-Left Curved Exoplanet Horizon with Bright Atmospheric Blue Limb */}
      <div className="absolute -bottom-56 -left-56 w-[560px] sm:w-[760px] h-[560px] sm:h-[760px] rounded-full bg-gradient-to-tr from-slate-950 via-blue-950/70 to-cyan-400/30 shadow-[0_0_120px_rgba(6,182,212,0.45)] border border-cyan-300/40 blur-[1px]" />
      <div className="absolute -bottom-48 -left-48 w-[480px] sm:w-[640px] h-[480px] sm:h-[640px] rounded-full bg-gradient-to-tr from-black via-slate-950 to-blue-900/40" />

      {/* Ambient Starfield & Nebula Clouds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* -------------------------------------------------------------
          2. CONCENTRIC ELLIPTICAL ORBITS ENCIRCLING THE SIX WORLDS
          ------------------------------------------------------------- */}
      {/* Outer Elliptical Orbital Belt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] sm:w-[1020px] h-[400px] sm:h-[540px] rounded-[100%] border border-cyan-400/20 rotate-[-12deg]" />
      {/* Secondary Counter-Angle Orbital Belt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] sm:w-[920px] h-[360px] sm:h-[480px] rounded-[100%] border border-dashed border-white/10 rotate-[16deg]" />
      {/* Inner Close Orbital Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[760px] h-[300px] sm:h-[400px] rounded-[100%] border border-cyan-500/10 rotate-[-5deg]" />

      {/* -------------------------------------------------------------
          3. DYNAMIC SVG ENERGY FILAMENTS BETWEEN CELESTIAL WORLDS
          ------------------------------------------------------------- */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="activeEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Orbit Ring Connections between adjacent planet nodes */}
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
              stroke={isHighlight ? "url(#activeEnergyGrad)" : "rgba(255,255,255,0.12)"}
              strokeWidth={isHighlight ? "2.5" : "1"}
              strokeDasharray={isHighlight ? "none" : "6 6"}
              className="transition-all duration-500"
            />
          );
        })}

        {/* Gravitational Rays from Central Core (52%, 50%) to Each Node */}
        {WORLD_NODES.map((node) => {
          const isHighlight = activeWorld?.id === node.id;
          return (
            <line
              key={`core-${node.id}`}
              x1="52%"
              y1="50%"
              x2={`${node.coordinates.x}%`}
              y2={`${node.coordinates.y}%`}
              stroke={node.accentColor}
              strokeWidth={isHighlight ? "2" : "0.75"}
              strokeOpacity={isHighlight ? "0.8" : "0.12"}
              strokeDasharray={isHighlight ? "none" : "4 8"}
              className="transition-all duration-400"
            />
          );
        })}
      </svg>
    </div>
  );
}
