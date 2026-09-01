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
}: {
  scene: CinematicSceneConfig;
  knockStage: number;
  sunProgress: number;
  pressProgress: number;
  isShattering: boolean;
  isHandshakeShaking: boolean;
  isDoorOpen: boolean;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* =========================================================
          ACT 01: REJECTION (1080P HD + Cold Tension + Clean Shatter)
          ========================================================= */}
      {scene.id === 1 && (
        <div
          className={`relative w-full h-full transition-transform duration-100 ${
            isShattering
              ? "scale-105 filter brightness-125"
              : pressProgress > 0
              ? "scale-[1.012] translate-y-[-1px]"
              : "scale-100"
          }`}
        >
          <Image
            src={scene.imageSrc}
            alt="Act 1: Rejection"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%] transform transition-transform duration-7000 ease-out"
          />

          {/* Natural Tension Darkening during Hold */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-150"
            style={{
              background: `radial-gradient(circle at center, transparent ${
                70 - pressProgress * 30
              }%, rgba(0,0,0,${0.3 + pressProgress * 0.4}) 100%)`,
              opacity: pressProgress > 0 ? 1 : 0,
            }}
          />

          {/* Clean Glass Fracture SVG on Shatter */}
          {isShattering && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-ping opacity-90">
              <svg className="w-full h-full max-w-xl" viewBox="0 0 800 800" fill="none">
                <path d="M400 400 L260 160 M400 400 L560 190 M400 400 L660 420 M400 400 L540 660 M400 400 L240 600 M400 400 L140 390" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" />
                <path d="M260 160 L200 90 M560 190 L700 130 M660 420 L760 450 M540 660 L600 740 M240 600 L160 700" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
                <circle cx="400" cy="400" r="50" stroke="#ffffff" strokeWidth="4" fill="rgba(6,182,212,0.2)" />
              </svg>
            </div>
          )}

          {/* Minimal Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/60 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 02: HANDSHAKE (1080P HD + Warm Golden Clasp)
          ========================================================= */}
      {scene.id === 2 && (
        <div
          className={`relative w-full h-full transition-transform duration-200 ${
            isHandshakeShaking
              ? "scale-102 translate-x-1.5 translate-y-[-1px] rotate-[0.25deg]"
              : "scale-100"
          }`}
        >
          <Image
            src={scene.imageSrc}
            alt="Act 2: Handshake"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%] transform transition-transform duration-7000 ease-out"
          />

          {/* Warm Golden Energy Bloom at Center on Tap */}
          {isHandshakeShaking && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-400/30 blur-3xl animate-pulse pointer-events-none z-10" />
          )}

          {/* Minimal Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/55 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 03: APPROVAL (1080P HD + Smooth Volumetric Sunrise)
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
            alt="Act 3: Approval"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%] transform transition-transform duration-7000 ease-out"
          />

          {/* Rising Dawn Light Flare */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none transition-all duration-100"
            style={{
              bottom: `${15 + sunProgress * 35}%`,
              width: `${160 + sunProgress * 400}px`,
              height: `${160 + sunProgress * 400}px`,
              background: `radial-gradient(circle, rgba(251,191,36,${
                0.25 + sunProgress * 0.5
              }) 0%, rgba(245,158,11,${0.15 + sunProgress * 0.3}) 45%, transparent 75%)`,
              opacity: sunProgress > 0 ? 1 : 0,
            }}
          />

          {/* Minimal Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/50 pointer-events-none" />
        </div>
      )}

      {/* =========================================================
          ACT 04: THE DOOR (1080P HD + 3-Knock Rhythm + Light Flood)
          ========================================================= */}
      {scene.id === 4 && (
        <div className="relative w-full h-full">
          <Image
            src={scene.imageSrc}
            alt="Act 4: The Door"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />

          {/* Door Knock Lighting Resonance */}
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
                      ? "bg-amber-400/20 shadow-[inset_0_0_80px_rgba(245,158,11,0.35)]"
                      : "bg-black/40"
                  }`}
                />
              );
            })}
          </div>

          {/* Golden Volumetric Light Flood when Door 3 Unlocks */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/80 mix-blend-screen transition-opacity duration-1000 pointer-events-none ${
              isDoorOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Minimal Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}
