"use client";

import React, { useState } from "react";
import { WORLD_NODES } from "@/data/navigation";
import type { WorldNode } from "@/types";
import { useGravitationalCursor } from "./hooks/use-gravitational-cursor";
import { SingularityCore } from "./components/singularity-core";
import { CelestialPlanetNode } from "./components/celestial-planet-node";
import { OrbitalEnergyGrid } from "./components/orbital-energy-grid";
import { GalaxyHeroAside } from "./components/galaxy-hero-aside";
import { GalaxyTelemetryHUD } from "./components/galaxy-telemetry-hud";
import { GalaxyDockMetrics } from "./components/galaxy-dock-metrics";

export function SpatialGalaxyMap() {
  const cursorOffset = useGravitationalCursor();
  const [activeWorld, setActiveWorld] = useState<WorldNode | null>(null);

  return (
    <div className="relative w-full max-w-[1600px] mx-auto min-h-[calc(100vh-4.25rem)] flex flex-col justify-between px-4 sm:px-8 py-3 select-none overflow-hidden">
      {/* -------------------------------------------------------------
          1. INTEGRATED SPATIAL UNIVERSE CANVAS (True Celestial Staging)
          ------------------------------------------------------------- */}
      <div className="relative w-full flex-1 min-h-[640px] sm:min-h-[720px] flex items-center justify-center">
        {/* Deep Space Background Orbit Network, Galaxy, & Exoplanet */}
        <OrbitalEnergyGrid activeWorld={activeWorld} />

        {/* Integrated Floating Hero Aside (Top-Left Cosmic Flow) */}
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
        <GalaxyTelemetryHUD />
      </div>

      {/* -------------------------------------------------------------
          2. AMBIENT SYSTEM STATUS STRIP (Bottom Floating Telemetry)
          ------------------------------------------------------------- */}
      <GalaxyDockMetrics />
    </div>
  );
}
