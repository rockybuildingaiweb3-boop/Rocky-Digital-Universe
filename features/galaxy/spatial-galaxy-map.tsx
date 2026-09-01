"use client";

import React, { useState } from "react";
import { WORLD_NODES } from "@/data/navigation";
import type { WorldNode } from "@/types";
import { useGravitationalCursor } from "./hooks/use-gravitational-cursor";
import { SingularityCore } from "./components/singularity-core";
import { CelestialPlanetNode } from "./components/celestial-planet-node";
import { OrbitalEnergyGrid } from "./components/orbital-energy-grid";
import { GalaxyHeroAside } from "./components/galaxy-hero-aside";
import { Orbit, Mouse } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function SpatialGalaxyMap() {
  const cursorOffset = useGravitationalCursor();
  const [activeWorld, setActiveWorld] = useState<WorldNode | null>(null);
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className="relative w-full max-w-[1500px] mx-auto min-h-[calc(100vh-4.25rem)] flex flex-col justify-between px-4 sm:px-8 py-3 select-none overflow-hidden">
      {/* -------------------------------------------------------------
          1. INTEGRATED SPATIAL UNIVERSE CANVAS (True Celestial Staging)
          ------------------------------------------------------------- */}
      <div className="relative w-full flex-1 min-h-[620px] sm:min-h-[700px] flex items-center justify-center">
        {/* Deep Space Background Orbit Network & Phenomena */}
        <OrbitalEnergyGrid activeWorld={activeWorld} />

        {/* Integrated Floating Hero Aside (Top-Left Cosmic Quadrant) */}
        <div className="absolute top-6 sm:top-12 left-2 sm:left-6 lg:left-10 z-30 pointer-events-auto">
          <GalaxyHeroAside />
        </div>

        {/* Central Planetary Singularity Star (Exact Gravitational Center) */}
        <SingularityCore cursorOffset={cursorOffset} />

        {/* Six Satellite Worlds on Elliptical Orbits */}
        {WORLD_NODES.map((node) => (
          <CelestialPlanetNode
            key={node.id}
            node={node}
            isActive={activeWorld?.id === node.id}
            onHover={(n) => setActiveWorld(n)}
            onLeave={() => setActiveWorld(null)}
            cursorOffset={cursorOffset}
          />
        ))}

        {/* Right Vertical Orbit / Scroll Guide */}
        <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none opacity-75">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.95)]" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="flex flex-col items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-4">
            <Mouse className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scroll</span>
            <span>Explore</span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. AMBIENT SYSTEM STATUS STRIP (Bottom Floating Telemetry)
          ------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-between pt-3 border-t border-white/10 select-none z-30 pointer-events-auto backdrop-blur-sm">
        {/* Bottom-Left System Emblem */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.35)]">
            <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-[spin_30s_linear_infinite]" />
          </div>
          <div className="flex flex-col text-left font-mono">
            <span className="text-[11px] font-bold text-white tracking-wider">
              ROCKY<span className="text-cyan-400">OS</span>
            </span>
            <span className="text-[9px] text-slate-400 tracking-widest">
              {isZh ? "个人数字操作系统" : "PERSONAL OPERATING SYSTEM"}
            </span>
          </div>
        </div>

        {/* Bottom-Right Progress Bar & Status Metric */}
        <div className="flex flex-col items-end gap-1.5 font-mono text-[10px]">
          <div className="flex items-center gap-2 text-white">
            <span className="text-cyan-300 font-medium">Six Worlds</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Infinite Possibilities</span>
          </div>
          <div className="w-36 sm:w-44 h-1 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
