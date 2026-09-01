"use client";

import React, { useState } from "react";
import { WORLD_NODES } from "@/data/navigation";
import type { WorldNode } from "@/types";
import { useGravitationalCursor } from "./hooks/use-gravitational-cursor";
import { SingularityCore } from "./components/singularity-core";
import { CelestialPlanetNode } from "./components/celestial-planet-node";
import { OrbitalEnergyGrid } from "./components/orbital-energy-grid";
import { GalaxyTelemetryHUD } from "./components/galaxy-telemetry-hud";
import { WeChatModal } from "@/features/connection/wechat-modal";

export function SpatialGalaxyMap() {
  const cursorOffset = useGravitationalCursor();
  const [activeWorld, setActiveWorld] = useState<WorldNode | null>(null);
  const [isWeChatOpen, setIsWeChatOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-6 select-none">
      {/* -------------------------------------------------------------
          1. THE SPATIAL GALAXY UNIVERSE CANVAS
          ------------------------------------------------------------- */}
      <div className="relative w-full max-w-6xl aspect-[16/10] max-h-[720px] rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center">
        {/* Orbital Energy Filaments & Concentric Rings */}
        <OrbitalEnergyGrid activeWorld={activeWorld} />

        {/* Central Singularity Kernel */}
        <SingularityCore cursorOffset={cursorOffset} />

        {/* Six Celestial Planet Nodes */}
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
      </div>

      {/* -------------------------------------------------------------
          2. NON-INTRUSIVE TELEMETRY HUD & QUICK ACTIONS
          ------------------------------------------------------------- */}
      <GalaxyTelemetryHUD
        activeWorld={activeWorld}
        onOpenWeChat={() => setIsWeChatOpen(true)}
      />

      {/* -------------------------------------------------------------
          3. WECHAT MODAL
          ------------------------------------------------------------- */}
      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
      />
    </div>
  );
}
