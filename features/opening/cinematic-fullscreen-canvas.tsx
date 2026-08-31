"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";

export function CinematicFullscreenCanvas({
  scene,
  knockIndex = 0,
  isDoorOpen = false,
  isZh = false,
  shakeTrigger = 0,
}: {
  scene: CinematicSceneConfig;
  knockIndex?: number;
  isDoorOpen?: boolean;
  isZh?: boolean;
  shakeTrigger?: number;
}) {
  return (
    <div
      key={`canvas-frame-${scene.id}`}
      className={`relative w-full h-full overflow-hidden select-none bg-black transition-transform duration-150 ${
        shakeTrigger > 0 ? "scale-[1.015] translate-y-[-2px]" : "scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          SCENE 1 ~ 3: FULLSCREEN FILM CANVASES (Ken Burns Camera Drift)
          ------------------------------------------------------------- */}
      {scene.id < 4 && (
        <div className="relative w-full h-full animate-in fade-in zoom-in-105 duration-1000 overflow-hidden">
          <Image
            src={scene.imageSrc}
            alt={scene.lineEn}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-7000 ease-out"
          />
          {/* Deep Cinematic Vignette & Atmospheric Fog */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/85 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 4: FULLSCREEN PROGRESSIVE 4-DOOR SEQUENCE
          ------------------------------------------------------------- */}
      {scene.id === 4 && (
        <div className="relative w-full h-full animate-in fade-in duration-1000 overflow-hidden">
          <Image
            src="/opening/hero-act-4-door-panorama.jpg"
            alt="The Gateway Door Sequence - Welcome to RockyOS"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Golden Volumetric Light Burst Spill from Door 4 */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/30 to-amber-200/60 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
              isDoorOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Interactive Door Column Spotlights (1 to 4) */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => {
              const isCurrentKnock = knockIndex === i;
              const isPastKnock = knockIndex > i;
              return (
                <div
                  key={i}
                  className={`h-full border-r border-white/5 transition-all duration-700 ${
                    isCurrentKnock
                      ? "bg-amber-400/15 shadow-[inset_0_0_80px_rgba(245,158,11,0.35)]"
                      : isPastKnock
                      ? "bg-transparent"
                      : "bg-black/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Top Door Inscription Tracking Status */}
          <div className="absolute top-16 sm:top-20 inset-x-0 flex items-center justify-center gap-3 sm:gap-8 z-20 pointer-events-none">
            {[
              { num: 1, label: isZh ? "POSSIBILITIES" : "POSSIBILITIES" },
              { num: 2, label: isZh ? "TOGETHER" : "TOGETHER" },
              { num: 3, label: isZh ? "LIMITLESS" : "LIMITLESS" },
              { num: 4, label: isZh ? "WELCOME HOME" : "WELCOME HOME" },
            ].map((door) => {
              const isKnocked = knockIndex >= door.num;
              return (
                <div
                  key={door.num}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${
                    isKnocked ? "opacity-100 scale-105" : "opacity-30 scale-95"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isKnocked
                        ? "bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.95)]"
                        : "bg-slate-700"
                    }`}
                  />
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-200/90 hidden sm:inline">
                    {door.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}
