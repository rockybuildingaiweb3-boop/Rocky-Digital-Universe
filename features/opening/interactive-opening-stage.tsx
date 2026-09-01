"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";

export function InteractiveOpeningStage({
  scene,
  knockStage,
  sunProgress,
  pressProgress,
  isShattering,
  isHandshakeShaking,
  isDoorOpen,
  isZh,
}: {
  scene: CinematicSceneConfig;
  knockStage: number; // 0, 1, 2, 3
  sunProgress: number; // 0 to 1
  pressProgress: number; // 0 to 1 (for Scene 1 hold)
  isShattering: boolean;
  isHandshakeShaking: boolean;
  isDoorOpen: boolean;
  isZh: boolean;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* =========================================================
          ACT 01: REJECTION (1080P HD + Press & Hold Shatter)
          ========================================================= */}
      {scene.id === 1 && (
        <div
          className={`relative w-full h-full transition-transform duration-100 ${
            isShattering
              ? "scale-105 filter brightness-150"
              : pressProgress > 0
              ? "scale-[1.015] translate-y-[-1px]"
              : "scale-100"
          }`}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 1: Rejection"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-center transform transition-transform duration-7000 ease-out"
          />

          {/* Pressure Charge Vignette & Tension Ring during Hold */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-150"
            style={{
              background: `radial-gradient(circle at center, transparent ${
                70 - pressProgress * 40
              }%, rgba(6,182,212,${pressProgress * 0.4}) 85%, rgba(0,0,0,0.9) 100%)`,
              opacity: pressProgress > 0 ? 1 : 0,
            }}
          />

          {/* Center Hold Charge Gauge Ring */}
          {pressProgress > 0 && !isShattering && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="#06b6d4"
                    strokeWidth="6"
                    strokeDasharray={301.6}
                    strokeDashoffset={301.6 * (1 - pressProgress)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-75"
                  />
                </svg>
                <span className="absolute font-mono text-xs font-bold text-cyan-300">
                  {Math.round(pressProgress * 100)}%
                </span>
              </div>
              <span className="mt-2 text-[10px] font-mono text-cyan-200 tracking-widest bg-black/60 px-2 py-0.5 rounded-full border border-cyan-500/30">
                {isZh ? "蓄压破冰中..." : "ACCUMULATING PRESSURE..."}
              </span>
            </div>
          )}

          {/* Glass Shatter Impact Shockwave upon reaching 100% */}
          {isShattering && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 animate-ping opacity-90">
              <div className="w-[640px] h-[640px] rounded-full border-8 border-cyan-200 shadow-[0_0_120px_rgba(6,182,212,1)]" />
            </div>
          )}

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/75 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 02: HANDSHAKE (1080P HD + Elastic Haptic Clasp)
          ========================================================= */}
      {scene.id === 2 && (
        <div
          className={`relative w-full h-full transition-transform duration-200 ${
            isHandshakeShaking
              ? "scale-102 translate-x-1.5 translate-y-[-1px] rotate-[0.3deg]"
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
            className="object-cover object-center transform transition-transform duration-7000 ease-out"
          />

          {/* Warm Golden-Cyan Clasp Energy Bloom on Interaction */}
          {isHandshakeShaking && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/35 blur-3xl animate-pulse pointer-events-none z-20" />
          )}

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/70 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 03: APPROVAL (1080P HD + Dynamic Sunrise Illumination)
          ========================================================= */}
      {scene.id === 3 && (
        <div
          className="relative w-full h-full transition-all duration-300"
          style={{
            filter: `brightness(${1 + sunProgress * 0.45}) saturate(${
              1 + sunProgress * 0.35
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
            className="object-cover object-center transform transition-transform duration-7000 ease-out"
          />

          {/* Rising Sun Glowing Orb Over Horizon */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none transition-all duration-100"
            style={{
              bottom: `${15 + sunProgress * 35}%`,
              width: `${180 + sunProgress * 420}px`,
              height: `${180 + sunProgress * 420}px`,
              background: `radial-gradient(circle, rgba(251,191,36,${
                0.25 + sunProgress * 0.55
              }) 0%, rgba(245,158,11,${0.15 + sunProgress * 0.35}) 45%, transparent 75%)`,
              opacity: sunProgress > 0 ? 1 : 0,
            }}
          />

          {/* Sun Rise Progress Indicator Pill */}
          {sunProgress > 0 && sunProgress < 1 && (
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
              <span className="text-[10px] font-mono text-amber-300 tracking-widest bg-black/70 px-3 py-1 rounded-full border border-amber-500/40 shadow-lg">
                {isZh
                  ? `晨曦破晓中 ${(sunProgress * 100).toFixed(0)}%`
                  : `DAWN RISING ${(sunProgress * 100).toFixed(0)}%`}
              </span>
            </div>
          )}

          {/* Film Edge Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/65 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 04: THE DOOR (1080P HD + 3-Stage Knock Progression)
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

          {/* Door Knock Spotlight Feedback Columns */}
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
                      ? "bg-amber-400/25 shadow-[inset_0_0_90px_rgba(245,158,11,0.45)]"
                      : "bg-black/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Golden Volumetric Light Burst Spill when Door 3 is knocked open */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/40 to-amber-200/80 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
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
