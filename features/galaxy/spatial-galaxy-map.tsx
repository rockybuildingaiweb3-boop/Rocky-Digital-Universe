"use client";

import React, { useState } from "react";
import { WORLD_NODES } from "@/data/navigation";
import type { WorldNode } from "@/types";
import { useGravitationalCursor } from "./hooks/use-gravitational-cursor";
import { SingularityCore } from "./components/singularity-core";
import { CelestialPlanetNode } from "./components/celestial-planet-node";
import { OrbitalEnergyGrid } from "./components/orbital-energy-grid";
import { GalaxyHeroAside } from "./components/galaxy-hero-aside";
import { GalaxyDockMetrics } from "./components/galaxy-dock-metrics";
import { Mouse } from "lucide-react";

export function SpatialGalaxyMap() {
  const cursorOffset = useGravitationalCursor();
  const [activeWorld, setActiveWorld] = useState<WorldNode | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-5.5rem)] px-4 sm:px-8 py-4 select-none">
      {/* -------------------------------------------------------------
          1. MAIN CENTRAL COSMIC CANVAS
          ------------------------------------------------------------- */}
      <div className="relative w-full flex-1 min-h-[560px] sm:min-h-[640px] flex items-center justify-between">
        {/* Deep Space Orbital Energy Grid & Galaxy Backdrops */}
        <OrbitalEnergyGrid activeWorld={activeWorld} />

        {/* Left Floating Hero Branding */}
        <div className="relative z-30 self-center">
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
        <div className="hidden xl:flex flex-col items-center gap-3 self-center z-20 pointer-events-none opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div className="flex flex-col items-center gap-1 font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-2">
            <Mouse className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scroll</span>
            <span>Explore</span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. BOTTOM DOCK METRICS (6 Worlds · ∞ Possibilities · One OS)
          ------------------------------------------------------------- */}
      <GalaxyDockMetrics />
    </div>
  );
}
