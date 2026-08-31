"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";

export function InteractiveOpeningStage({
  scene,
  knockStage,
  sunProgress,
  isShattering,
  isHandshakeShaking,
  isDoorOpen,
  isZh,
}: {
  scene: CinematicSceneConfig;
  knockStage: number; // 0, 1, 2, 3
  sunProgress: number; // 0 to 1
  isShattering: boolean;
  isHandshakeShaking: boolean;
  isDoorOpen: boolean;
  isZh: boolean;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* =========================================================
          ACT 01: REJECTION (Ultra-HD Canvas + Shatter Shockwave)
          ========================================================= */}
      {scene.id === 1 && (
        <div
          className={`relative w-full h-full transition-transform duration-100 ${
            isShattering ? "scale-105 filter brightness-125" : "scale-100"
          }`}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 1: Rejection"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-center transform transition-transform duration-5000 ease-out"
          />

          {/* Dynamic Shatter Shockwave Effect on Interaction */}
          {isShattering && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 animate-ping opacity-80">
              <div className="w-[500px] h-[500px] rounded-full border-4 border-cyan-300/90 shadow-[0_0_80px_rgba(6,182,212,0.9)]" />
            </div>
          )}

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/75 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 02: HANDSHAKE (Ultra-HD Canvas + Elastic Clasp Shake)
          ========================================================= */}
      {scene.id === 2 && (
        <div
          className={`relative w-full h-full transition-transform duration-150 ${
            isHandshakeShaking
              ? "scale-102 translate-x-1 translate-y-[-1px]"
              : "scale-100"
          }`}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 2: Handshake"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-center transform transition-transform duration-5000 ease-out"
          />

          {/* Warm Golden-Cyan Clasp Energy Bloom on Interaction */}
          {isHandshakeShaking && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-400/30 blur-2xl animate-pulse pointer-events-none" />
          )}

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/70 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 03: APPROVAL (Ultra-HD Canvas + Interactive Sunrise)
          ========================================================= */}
      {scene.id === 3 && (
        <div
          className="relative w-full h-full transition-all duration-300"
          style={{
            filter: `brightness(${1 + sunProgress * 0.4}) saturate(${
              1 + sunProgress * 0.3
            })`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 3: Approval"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-center transform transition-transform duration-5000 ease-out"
          />

          {/* Rising Sun Light Flare Over Horizon */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none transition-all duration-150"
            style={{
              bottom: `${15 + sunProgress * 30}%`,
              width: `${200 + sunProgress * 400}px`,
              height: `${200 + sunProgress * 400}px`,
              background: `radial-gradient(circle, rgba(251,191,36,${
                0.2 + sunProgress * 0.5
              }) 0%, rgba(245,158,11,${0.1 + sunProgress * 0.3}) 40%, transparent 70%)`,
              opacity: sunProgress > 0 ? 1 : 0,
            }}
          />

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/65 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 04: THE DOOR (3-Stage Knock Progression + Portal Open)
          ========================================================= */}
      {scene.id === 4 && (
        <div className="relative w-full h-full">
          <Image
            src={scene.imageSrc}
            alt="Scene 4: The Door Sequence"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Door Knock Spotlight Feedback */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => {
              const isGlowing =
                (knockStage === 1 && i === 1) ||
                (knockStage === 2 && i <= 2) ||
                (knockStage >= 3 && i <= 4);

              return (
                <div
                  key={i}
                  className={`h-full border-r border-white/5 transition-all duration-700 ${
                    isGlowing
                      ? "bg-amber-400/20 shadow-[inset_0_0_80px_rgba(245,158,11,0.4)]"
                      : "bg-black/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Golden Volumetric Light Burst Spill when Door 3 is knocked open */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/70 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
              isDoorOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Top Inscription Indicator Pills */}
          <div className="absolute top-16 sm:top-20 inset-x-0 flex items-center justify-center gap-3 sm:gap-8 z-20 pointer-events-none">
            {[
              { step: 1, label: isZh ? "1. 机器敲门 (未开)" : "1. ROBOT KNOCK" },
              { step: 2, label: isZh ? "2. 人类敲门 (未开)" : "2. HUMAN KNOCK" },
              { step: 3, label: isZh ? "3. 双方合力 (门开)" : "3. TOGETHER UNLOCK" },
            ].map((d) => {
              const isAchieved = knockStage >= d.step;
              return (
                <div
                  key={d.step}
                  className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${
                    isAchieved ? "opacity-100 scale-105" : "opacity-35 scale-95"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isAchieved
                        ? "bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.95)]"
                        : "bg-slate-700"
                    }`}
                  />
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-200/90 hidden sm:inline">
                    {d.label}
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
