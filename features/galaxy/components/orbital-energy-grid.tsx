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
    { from: "capability", to: "laboratory" },
    { from: "laboratory", to: "connection" },
    { from: "connection", to: "knowledge" },
    { from: "knowledge", to: "growth" },
    { from: "growth", to: "identity" },
    { from: "identity", to: "laboratory" },
    { from: "growth", to: "capability" },
    { from: "knowledge", to: "laboratory" },
  ];

  const getNode = (id: string) => WORLD_NODES.find((n) => n.id === id);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Deep Space Atmospheric Nebula Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,rgba(139,92,246,0.06)_35%,transparent_75%)]" />

      {/* 2. Concentric Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/[0.04] animate-[spin_180s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-cyan-400/[0.08] animate-[spin_120s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/[0.05]" />

      {/* 3. SVG Dynamic Energy Filaments */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="activeEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
          </linearGradient>
        </defs>

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
              stroke={isHighlight ? "url(#activeEnergyGrad)" : "#ffffff"}
              strokeWidth={isHighlight ? "2.5" : "1"}
              strokeOpacity={isHighlight ? "0.9" : "0.1"}
              strokeDasharray={isHighlight ? "none" : "5 5"}
              className="transition-all duration-500"
            />
          );
        })}
      </svg>
    </div>
  );
}
