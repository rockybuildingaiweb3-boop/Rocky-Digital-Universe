"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";

export function CinematicFrame({
  scene,
  knockIndex = 0,
  isDoorOpen = false,
}: {
  scene: CinematicSceneConfig;
  knockIndex?: number;
  isDoorOpen?: boolean;
}) {
  return (
    <div className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/10 select-none bg-slate-950">
      {/* -------------------------------------------------------------
          SCENE 1 ~ 3: CINEMATIC CANVASES (Ken Burns Smooth Camera Push)
          ------------------------------------------------------------- */}
      {scene.id < 4 && (
        <div className="relative w-full h-full animate-in fade-in zoom-in-105 duration-1000 overflow-hidden">
          <Image
            src={scene.imageSrc}
            alt={scene.lineEn}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-3000 ease-out"
          />
          {/* Subtle Film Grain & Vignette Overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 4: PROGRESSIVE 4-DOOR KNOCK SEQUENCE
          ------------------------------------------------------------- */}
      {scene.id === 4 && (
        <div className="relative w-full h-full animate-in fade-in duration-1000 overflow-hidden">
          <Image
            src="/opening/scene4-door.jpg"
            alt="The Gateway Door Sequence"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
          />

          {/* Golden Volumetric Light Beam Spill from Door 4 */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-amber-200/40 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
              isDoorOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Active Knock Spotlight Columns (1 to 4) */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => {
              const isActive = knockIndex >= i;
              return (
                <div
                  key={i}
                  className={`h-full border-r border-white/5 transition-all duration-500 ${
                    isActive
                      ? "bg-amber-400/10 shadow-[inset_0_0_40px_rgba(245,158,11,0.2)]"
                      : "bg-black/30"
                  }`}
                />
              );
            })}
          </div>

          {/* Knock Pulse Indicators */}
          <div className="absolute top-4 sm:top-6 inset-x-0 flex items-center justify-center gap-4 z-20">
            {[
              { num: 1, label: "POSSIBILITIES AHEAD" },
              { num: 2, label: "BETTER TOGETHER" },
              { num: 3, label: "UNLIMITED FUTURE" },
              { num: 4, label: "WELCOME HOME" },
            ].map((door) => {
              const isKnocked = knockIndex >= door.num;
              return (
                <div
                  key={door.num}
                  className={`flex flex-col items-center gap-1 transition-all duration-500 ${
                    isKnocked ? "opacity-100 scale-105" : "opacity-40 scale-95"
                  }`}
                >
                  <span
                    className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-colors ${
                      isKnocked ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" : "bg-slate-700"
                    }`}
                  />
                  <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-amber-200/80 hidden sm:inline">
                    {door.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Cinematic Frame Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/15 pointer-events-none" />
    </div>
  );
}
