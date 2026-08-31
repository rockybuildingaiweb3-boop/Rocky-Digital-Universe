"use client";

import React from "react";
import type { PrologueSceneId } from "./opening-config";

export function SceneIllustrations({
  sceneId,
  doorProgress = 0,
}: {
  sceneId: PrologueSceneId;
  doorProgress?: number;
}) {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Background Orbital Rings */}
      <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]" />

      {/* ACT 1: REJECTION (Robot reaches hand, Human steps back) */}
      {sceneId === 1 && (
        <div className="relative w-full h-full flex items-center justify-between px-6 animate-in fade-in zoom-in-95 duration-500">
          {/* Robot Hand (Mechanical, segmented, cyan pulse) */}
          <div className="flex flex-col items-center gap-2 group animate-pulse">
            <div className="w-14 h-20 rounded-xl border-2 border-cyan-400/80 bg-cyan-950/40 p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-1.5 bg-cyan-400 rounded-full" />
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-cyan-500/40 rounded" />
                <div className="h-8 bg-cyan-500/60 rounded" />
                <div className="h-5 bg-cyan-500/40 rounded" />
              </div>
              <span className="text-[9px] font-mono text-cyan-300 text-center font-bold">ROBOT</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400">Offer Outreach</span>
          </div>

          {/* Separation Barrier */}
          <div className="h-32 w-0.5 bg-gradient-to-b from-transparent via-red-500/60 to-transparent border-dashed border-r border-red-500/50 flex items-center justify-center">
            <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/60 text-[9px] font-mono text-red-400 uppercase tracking-widest rotate-90">
              BOUNDARY
            </span>
          </div>

          {/* Human Hand (Warm organic, withdrew back) */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-20 rounded-2xl border-2 border-amber-500/70 bg-amber-950/30 p-2 flex flex-col justify-between shadow-[0_0_15px_rgba(245,158,11,0.2)] translate-x-2">
              <div className="w-full h-1.5 bg-amber-400 rounded-full" />
              <div className="flex justify-center items-center h-10">
                <span className="text-xl">✋</span>
              </div>
              <span className="text-[9px] font-mono text-amber-300 text-center font-bold">HUMAN</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400">Reserved Doubt</span>
          </div>
        </div>
      )}

      {/* ACT 2: HANDSHAKE (Human & Robot Handshake, Synchronous Glow) */}
      {sceneId === 2 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
          <div className="relative flex items-center justify-center">
            {/* Energy Convergence Aura */}
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl animate-pulse" />

            {/* Clasping Hands Representation */}
            <div className="relative z-10 flex items-center p-4 rounded-2xl border border-cyan-500/40 bg-slate-900/90 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="text-4xl sm:text-5xl tracking-widest animate-bounce">
                🤝
              </div>
            </div>
          </div>

          {/* Circuit connection particles */}
          <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>NEURAL BRIDGE SYNCHRONIZED</span>
          </div>
        </div>
      )}

      {/* ACT 3: SYNERGY & THUMBS UP (Both give thumbs up, shared victory) */}
      {sceneId === 3 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="flex items-center gap-6">
            {/* Robot Thumbs Up */}
            <div className="flex flex-col items-center p-3 rounded-xl border border-cyan-500/40 bg-cyan-950/30">
              <span className="text-3xl sm:text-4xl">👍</span>
              <span className="text-[10px] font-mono text-cyan-300 mt-1 font-bold">MACHINE</span>
            </div>

            {/* Multiplication Symbol */}
            <span className="text-xl font-bold font-mono text-emerald-400 animate-pulse">
              &times;
            </span>

            {/* Human Thumbs Up */}
            <div className="flex flex-col items-center p-3 rounded-xl border border-emerald-500/40 bg-emerald-950/30">
              <span className="text-3xl sm:text-4xl">👍</span>
              <span className="text-[10px] font-mono text-emerald-300 mt-1 font-bold">HUMAN</span>
            </div>
          </div>

          {/* 1 + 1 > 2 Banner */}
          <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wide font-bold">
            INTUITION &times; PRECISION = TRANSCENDENCE
          </div>
        </div>
      )}

      {/* ACT 4: THE THRESHOLD & 4 KNOCKS (Vault Gate with 4 Knock Waves) */}
      {sceneId === 4 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
          {/* The Gateway Doors */}
          <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-2xl border-2 border-purple-500/50 bg-slate-900/90 shadow-[0_0_40px_rgba(168,85,247,0.3)] overflow-hidden flex items-center justify-between p-1">
            {/* Left Door Leaf */}
            <div
              className="h-full w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 border-r border-purple-500/30 transition-transform duration-1000 flex items-center justify-end pr-2"
              style={{
                transform: doorProgress > 3 ? "translateX(-65%)" : "translateX(0%)",
              }}
            >
              <div className="w-1.5 h-6 rounded bg-purple-400/60" />
            </div>

            {/* Inner Core Portal Light (Revealed as door opens) */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-purple-500/40 to-transparent flex items-center justify-center transition-opacity duration-1000"
              style={{ opacity: doorProgress > 2 ? 1 : 0.2 }}
            >
              <span className="text-2xl font-mono font-bold text-white tracking-widest animate-pulse">
                ROCKYOS
              </span>
            </div>

            {/* Right Door Leaf */}
            <div
              className="h-full w-1/2 bg-gradient-to-bl from-slate-800 to-slate-900 border-l border-purple-500/30 transition-transform duration-1000 flex items-center justify-start pl-2"
              style={{
                transform: doorProgress > 3 ? "translateX(65%)" : "translateX(0%)",
              }}
            >
              <div className="w-1.5 h-6 rounded bg-purple-400/60" />
            </div>
          </div>

          {/* 4 Knocks Wave Indicator */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  doorProgress >= i
                    ? "bg-purple-400 scale-125 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
