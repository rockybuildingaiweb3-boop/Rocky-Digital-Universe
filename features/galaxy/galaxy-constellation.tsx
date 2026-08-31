"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WORLD_NODES } from "@/data/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import type { WorldNode } from "@/types";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

export function GalaxyConstellation() {
  const { locale, t } = useLanguage();
  const [activeWorld, setActiveWorld] = useState<WorldNode | null>(null);

  // Six-pointed constellation energy connections between celestial nodes
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
    <div className="relative w-full max-w-5xl mx-auto my-8 flex flex-col items-center">
      {/* -----------------------------------------------------------------
          DESKTOP & TABLET: THE INTERACTIVE CELESTIAL CONSTELLATION MAP
          ----------------------------------------------------------------- */}
      <div className="relative w-full aspect-[4/3] max-h-[640px] hidden md:block rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden select-none">
        {/* Deep Space Background Ambient Rings & Nebulae */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,rgba(139,92,246,0.05)_40%,transparent_75%)] pointer-events-none" />
        
        {/* Orbital Coordinate Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.04] animate-[spin_120s_linear_infinite] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-cyan-500/10 pointer-events-none" />

        {/* Central Singularity Kernel (The Heart of RockyOS) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center">
              <span className="text-cyan-400 font-bold text-xs tracking-widest font-mono">KERNEL</span>
              <span className="text-[9px] text-slate-400 font-mono">ROCKY</span>
            </div>
          </div>
          <span className="mt-2 text-[10px] font-mono text-cyan-300/80 tracking-widest bg-slate-950/80 px-2 py-0.5 rounded-full border border-white/10">
            SYSTEM KERNEL ONLINE
          </span>
        </div>

        {/* SVG Dynamic Energy Filaments (Filaments connecting the worlds) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
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
                stroke={isHighlight ? "#06b6d4" : "#ffffff"}
                strokeWidth={isHighlight ? "2" : "1"}
                strokeOpacity={isHighlight ? "0.8" : "0.12"}
                strokeDasharray={isHighlight ? "none" : "4 4"}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>

        {/* The Six Celestial World Nodes */}
        {WORLD_NODES.map((node) => {
          const isCurrentActive = activeWorld?.id === node.id;
          const nodeName = node.name[locale] || node.name.en;
          const nodeTagline = node.tagline[locale] || node.tagline.en;

          return (
            <div
              key={node.id}
              style={{
                left: `${node.coordinates.x}%`,
                top: `${node.coordinates.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              onMouseEnter={() => setActiveWorld(node)}
              onMouseLeave={() => setActiveWorld(null)}
            >
              <Link
                href={node.route}
                className="group relative flex flex-col items-center focus:outline-none"
              >
                {/* Celestial Glow Halo */}
                <div
                  className="absolute w-24 h-24 rounded-full blur-xl opacity-20 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ backgroundColor: node.accentColor }}
                />

                {/* Celestial Planet Node */}
                <div
                  className="relative w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-115 group-hover:-translate-y-1 shadow-xl"
                  style={{
                    backgroundColor: "#0b0f19",
                    borderColor: isCurrentActive ? node.accentColor : "rgba(255,255,255,0.2)",
                    boxShadow: isCurrentActive
                      ? `0 0 30px ${node.accentColor}80`
                      : "0 4px 20px rgba(0,0,0,0.6)",
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: node.accentColor }}
                  >
                    {node.order}
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 uppercase">
                    WORLD
                  </span>
                </div>

                {/* Node Label Tooltip Pill */}
                <div className="mt-2 flex flex-col items-center pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors shadow-lg whitespace-nowrap">
                    {nodeName}
                  </span>
                  <span className="text-[10px] font-sans text-slate-400 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {nodeTagline}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}

        {/* Bottom Interactive Telemetry Ticker */}
        <div className="absolute bottom-4 inset-x-6 flex items-center justify-between pointer-events-none font-mono text-xs text-slate-400 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>
              {activeWorld
                ? `HOVERING: WORLD ${activeWorld.order} [${activeWorld.name[locale] || activeWorld.name.en}]`
                : "ORBITAL TELEMETRY: SELECT A CELESTIAL REALM TO WARP"}
            </span>
          </div>
          <span className="text-cyan-400">6 WORLDS IN COMPASS</span>
        </div>
      </div>

      {/* -----------------------------------------------------------------
          MOBILE ADAPTIVE CONSTELLATION: COMPACT PARALLEL REALMS
          ----------------------------------------------------------------- */}
      <div className="w-full md:hidden flex flex-col gap-3">
        {WORLD_NODES.map((node) => {
          const nodeName = node.name[locale] || node.name.en;
          const nodeTagline = node.tagline[locale] || node.tagline.en;

          return (
            <Link
              key={node.id}
              href={node.route}
              className="relative p-4 rounded-2xl border border-white/10 bg-slate-900/70 hover:bg-slate-900 active:scale-[0.98] transition-all flex items-center justify-between overflow-hidden"
            >
              <div
                className="absolute left-0 inset-y-0 w-1.5"
                style={{ backgroundColor: node.accentColor }}
              />
              <div className="flex items-center gap-3 pl-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                  style={{
                    backgroundColor: `${node.accentColor}20`,
                    color: node.accentColor,
                    border: `1px solid ${node.accentColor}40`,
                  }}
                >
                  {node.order}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {nodeName}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {nodeTagline}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-cyan-400">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
