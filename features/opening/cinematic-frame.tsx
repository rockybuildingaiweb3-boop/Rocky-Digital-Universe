"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";

export function CinematicFrame({
  scene,
  knockIndex = 0,
  isDoorOpen = false,
  isZh = false,
}: {
  scene: CinematicSceneConfig;
  knockIndex?: number;
  isDoorOpen?: boolean;
  isZh?: boolean;
}) {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_0_90px_rgba(0,0,0,0.95)] border border-white/15 select-none bg-black">
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
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-3000 ease-out"
          />
          {/* Subtle Cinematic Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/60 pointer-events-none" />
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 4: PROGRESSIVE 4-PANEL DOOR SEQUENCE
          ------------------------------------------------------------- */}
      {scene.id === 4 && (
        <div className="relative w-full h-full animate-in fade-in duration-1000 overflow-hidden">
          <Image
            src="/opening/hero-act-4-door-panorama.jpg"
            alt="The Door Sequence - Welcome to RockyOS"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />

          {/* Golden Volumetric Light Beam Spill from Door 4 */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/25 to-amber-200/50 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
              isDoorOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Interactive Column Focus (Panels 1 to 4) */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => {
              const isCurrentKnock = knockIndex === i;
              const isPastKnock = knockIndex > i;
              return (
                <div
                  key={i}
                  className={`h-full border-r border-white/5 transition-all duration-700 ${
                    isCurrentKnock
                      ? "bg-amber-400/10 shadow-[inset_0_0_50px_rgba(245,158,11,0.25)]"
                      : isPastKnock
                      ? "bg-transparent"
                      : "bg-black/40"
                  }`}
                />
              );
            })}
          </div>

          {/* Door Knock Status Pills */}
          <div className="absolute top-4 sm:top-6 inset-x-0 flex items-center justify-center gap-3 sm:gap-6 z-20">
            {[
              { num: 1, label: isZh ? "轻叩一声" : "POSSIBILITIES AHEAD" },
              { num: 2, label: isZh ? "轻叩两声" : "BETTER TOGETHER" },
              { num: 3, label: isZh ? "轻叩三声" : "UNLIMITED FUTURE" },
              { num: 4, label: isZh ? "门扉开启" : "WELCOME HOME" },
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
                      isKnocked ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" : "bg-slate-700"
                    }`}
                  />
                  <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-amber-200/90 hidden sm:inline">
                    {door.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Cinematic Frame Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none" />
    </div>
  );
}
