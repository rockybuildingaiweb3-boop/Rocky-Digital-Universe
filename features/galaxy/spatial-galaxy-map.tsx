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
    <div className="relative w-full max-w-[1400px] mx-auto flex flex-col justify-between min-h-[calc(100vh-4.5rem)] px-4 sm:px-8 py-3 select-none overflow-hidden">
      {/* -------------------------------------------------------------
          1. MAIN CENTRAL COSMIC CANVAS
          ------------------------------------------------------------- */}
      <div className="relative w-full flex-1 min-h-[580px] sm:min-h-[660px] flex items-center justify-between">
        {/* Deep Space Orbital Energy Grid & Galaxy Backdrops */}
        <OrbitalEnergyGrid activeWorld={activeWorld} />

        {/* Left Floating Hero Branding */}
        <div className="relative z-30 self-center pl-2 sm:pl-4">
          <GalaxyHeroAside />
        </div>

        {/* Central Singularity Blue Plasma Core */}
        <SingularityCore cursorOffset={cursorOffset} />

        {/* Six Surrounding Celestial World Planets */}
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

        {/* Right Vertical Scroll / Orbit Guide */}
        <div className="hidden xl:flex flex-col items-center gap-3 self-center z-20 pointer-events-none opacity-70 pr-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
          <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          <div className="flex flex-col items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-4">
            <Mouse className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scroll</span>
            <span>Explore</span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. BOTTOM METRIC STRIP (Bottom-Left Badge & Bottom-Right Progress)
          ------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-between pt-2 border-t border-white/5 select-none z-30 pointer-events-auto">
        {/* Bottom-Left System Emblem */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-[spin_30s_linear_infinite]" />
          </div>
          <div className="flex flex-col text-left font-mono">
            <span className="text-[11px] font-bold text-white tracking-wider">
              ROCKY<span className="text-cyan-400">OS</span>
            </span>
            <span className="text-[9px] text-slate-400/90 tracking-widest">
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
          <div className="w-36 h-1 rounded-full bg-slate-800/80 overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
