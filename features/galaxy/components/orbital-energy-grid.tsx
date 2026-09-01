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
          1. DEEP SPACE COSMIC PHENOMENA (Galaxy Spiral & Planet Horizon)
          ------------------------------------------------------------- */}
      {/* Top-Right Spiral Galaxy Nebula */}
      <div className="absolute top-[-5%] right-[-5%] w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.18)_0%,rgba(59,130,246,0.12)_35%,transparent_70%)] blur-3xl" />
      {/* Spiral Galaxy Core Gleam */}
      <div className="absolute top-12 right-16 w-32 h-32 rounded-full border border-purple-400/20 border-dashed animate-[spin_80s_linear_infinite] rotate-[45deg]" />

      {/* Bottom-Left Curved Exoplanet Horizon with Atmospheric Blue Limb */}
      <div className="absolute -bottom-48 -left-48 w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full bg-gradient-to-tr from-slate-950 via-blue-950/60 to-cyan-500/20 shadow-[0_0_90px_rgba(6,182,212,0.35)] border border-cyan-400/30 blur-[1px]" />

      {/* Ambient Starfield & Color Clouds */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* -------------------------------------------------------------
          2. CONCENTRIC ELLIPTICAL ORBITS ENCIRCLING THE SIX WORLDS
          ------------------------------------------------------------- */}
      {/* Outer Elliptical Orbital Belt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[920px] h-[380px] sm:h-[480px] rounded-[100%] border border-cyan-400/20 rotate-[-12deg]" />
      {/* Secondary Counter-Angle Orbital Belt */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[820px] h-[340px] sm:h-[420px] rounded-[100%] border border-dashed border-white/10 rotate-[15deg]" />

      {/* -------------------------------------------------------------
          3. DYNAMIC SVG ENERGY FILAMENTS BETWEEN CELESTIAL WORLDS
          ------------------------------------------------------------- */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="activeEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Orbit Ring Connections between adjacent nodes */}
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

        {/* Gravitational Rays from Central Core (50%, 50%) to Each Node */}
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
              strokeWidth={isHighlight ? "2" : "0.75"}
              strokeOpacity={isHighlight ? "0.8" : "0.15"}
              strokeDasharray={isHighlight ? "none" : "4 8"}
              className="transition-all duration-400"
            />
          );
        })}
      </svg>
    </div>
  );
}
