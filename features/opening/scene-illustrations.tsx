"use client";

import React from "react";
import type { CinematicScene } from "./opening-config";

export function CinematicVisual({
  scene,
  doorKnockStep = 0,
  isDoorOpen = false,
}: {
  scene: CinematicScene;
  doorKnockStep?: number;
  isDoorOpen?: boolean;
}) {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center select-none">
      {/* Background Soft Depth Vignette & Stars */}
      <div className="absolute inset-0 rounded-full bg-radial from-white/[0.04] to-transparent pointer-events-none" />
      <div className="absolute -inset-4 rounded-full border border-white/5 animate-[pulse_4s_ease-in-out_infinite]" />

      {/* -------------------------------------------------------------
          SCENE 1: REJECTION (Robot reaches hand; Human withdraws & waves away)
          ------------------------------------------------------------- */}
      {scene.id === 1 && (
        <div className="relative w-full h-full flex items-center justify-between px-8 transition-all duration-700">
          {/* Left: Robot Outreach Hand */}
          <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="relative w-20 h-24 rounded-2xl border border-cyan-400/50 bg-cyan-950/40 backdrop-blur-md p-3 flex flex-col justify-between shadow-[0_0_25px_rgba(6,182,212,0.25)]">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono text-cyan-300 font-bold tracking-wider">AI</span>
              </div>
              {/* Articulated fingers extending right */}
              <div className="flex flex-col gap-1.5 pl-2">
                <div className="w-10 h-1.5 rounded-full bg-cyan-400/80 shadow-sm" />
                <div className="w-12 h-1.5 rounded-full bg-cyan-400 shadow-sm" />
                <div className="w-11 h-1.5 rounded-full bg-cyan-400/80 shadow-sm" />
                <div className="w-8 h-1.5 rounded-full bg-cyan-400/60 shadow-sm" />
              </div>
              <span className="text-[9px] font-mono text-cyan-400/80 text-center">OUTREACH</span>
            </div>
            <span className="text-xs font-mono text-cyan-400 tracking-wide">Machine Hand</span>
          </div>

          {/* Center: Invisible Repulsion Field / Doubt Space */}
          <div className="relative flex flex-col items-center">
            <div className="w-px h-28 bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />
            <div className="my-2 px-2 py-0.5 rounded-full bg-red-950/60 border border-red-500/40 text-[9px] font-mono text-red-400 uppercase tracking-widest">
              Hesitation
            </div>
            <div className="w-px h-28 bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />
          </div>

          {/* Right: Human Hand (Withdrawn, Palm Facing Forward Refusing) */}
          <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-right-6 duration-700">
            <div className="relative w-20 h-24 rounded-2xl border border-amber-500/40 bg-amber-950/30 backdrop-blur-md p-3 flex flex-col justify-between shadow-[0_0_20px_rgba(245,158,11,0.15)] translate-x-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-300 font-bold tracking-wider">HUMAN</span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              {/* Palm raised back */}
              <div className="flex items-center justify-center text-3xl">
                ✋
              </div>
              <span className="text-[9px] font-mono text-amber-400/80 text-center">WITHDRAWN</span>
            </div>
            <span className="text-xs font-mono text-amber-400 tracking-wide">Human Guard</span>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 2: HANDSHAKE (Human accepts; Fingers interlock with sync aura)
          ------------------------------------------------------------- */}
      {scene.id === 2 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
          {/* Energy Halo */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-cyan-500/25 to-amber-500/20 blur-2xl animate-pulse" />

          {/* The Handshake Unit */}
          <div className="relative z-10 flex items-center gap-2 p-5 sm:p-6 rounded-3xl border border-white/20 bg-slate-900/90 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
            <div className="text-5xl sm:text-6xl tracking-widest select-none transform hover:scale-105 transition-transform">
              🤝
            </div>
          </div>

          {/* Synchronized Circuit Pill */}
          <div className="mt-5 flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 font-mono text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="tracking-wide">NEURAL & INTUITION SYNC</span>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 3: APPROVAL (Human and Robot both thumbs-up; shared victory)
          ------------------------------------------------------------- */}
      {scene.id === 3 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-5 animate-in fade-in zoom-in-95 duration-700">
          <div className="flex items-center gap-6 sm:gap-8">
            {/* Robot Thumbs Up */}
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl border border-cyan-400/50 bg-cyan-950/40 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
              <span className="text-4xl sm:text-5xl">👍</span>
              <span className="mt-2 text-[10px] font-mono text-cyan-300 font-bold">ROBOT</span>
            </div>

            {/* Synergistic Operator */}
            <div className="flex flex-col items-center">
              <span className="text-2xl font-mono font-bold text-emerald-400 animate-pulse">&times;</span>
              <span className="text-[10px] font-mono text-slate-500">MULTIPLIER</span>
            </div>

            {/* Human Thumbs Up */}
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl border border-emerald-400/50 bg-emerald-950/40 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <span className="text-4xl sm:text-5xl">👍</span>
              <span className="mt-2 text-[10px] font-mono text-emerald-300 font-bold">HUMAN</span>
            </div>
          </div>

          {/* Shared Victory Affirmation */}
          <div className="px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold tracking-wider">
            SHARED CREATION ACHIEVED
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 4: DOOR SEQUENCE (Together before the door, 4 knocks, text changes, vault opens)
          ------------------------------------------------------------- */}
      {scene.id === 4 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
          {/* Standing Silhouettes (Human + Robot together before the gateway) */}
          <div className="flex items-center gap-3 mb-3 text-xs font-mono text-slate-400">
            <span className="text-amber-400 font-bold">HUMAN</span>
            <span className="text-slate-600">&</span>
            <span className="text-cyan-400 font-bold">ROBOT</span>
            <span className="text-slate-500">AT THE PORTAL</span>
          </div>

          {/* The Cosmic Gateway Door */}
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl border-2 border-purple-500/50 bg-slate-950 shadow-[0_0_50px_rgba(168,85,247,0.35)] overflow-hidden flex items-center justify-between p-1">
            {/* Interior Universe Space (Revealed as door opens) */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-cyan-600/30 via-purple-600/40 to-slate-900 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                isDoorOpen ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg animate-pulse">
                R
              </div>
              <span className="text-xs font-mono text-white font-bold tracking-widest mt-2">
                ROCKYOS
              </span>
              <span className="text-[9px] font-mono text-cyan-300">ENTER UNIVERSE</span>
            </div>

            {/* Left Door Panel */}
            <div
              className="relative z-10 h-full w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 border-r border-purple-500/30 transition-transform duration-1000 ease-out flex items-center justify-end pr-2"
              style={{
                transform: isDoorOpen ? "translateX(-90%)" : "translateX(0%)",
              }}
            >
              <div className="w-1 h-8 rounded bg-purple-400/70" />
            </div>

            {/* Right Door Panel */}
            <div
              className="relative z-10 h-full w-1/2 bg-gradient-to-bl from-slate-900 to-slate-800 border-l border-purple-500/30 transition-transform duration-1000 ease-out flex items-center justify-start pl-2"
              style={{
                transform: isDoorOpen ? "translateX(90%)" : "translateX(0%)",
              }}
            >
              <div className="w-1 h-8 rounded bg-purple-400/70" />
            </div>
          </div>

          {/* Knock Pulse Indicators (1, 2, 3, 4) */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => {
              const isKnocked = doorKnockStep >= i;
              return (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isKnocked
                      ? "bg-purple-400 scale-125 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
                      : "bg-slate-800 border border-white/10"
                  }`}
                >
                  {isKnocked && <span className="w-1 h-1 rounded-full bg-white" />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
