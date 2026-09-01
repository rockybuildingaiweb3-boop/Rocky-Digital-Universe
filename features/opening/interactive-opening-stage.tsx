"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";
import type { MotionState } from "./motion-spec";
import { MOTION_EASING } from "./motion-spec";
import { ArrowRight, Sparkles } from "lucide-react";

export function InteractiveOpeningStage({
  scene,
  motionState,
  knockStage,
  sunProgress,
  pressProgress,
  onEnterUniverse,
  isZh,
}: {
  scene: CinematicSceneConfig;
  motionState: MotionState;
  knockStage: number;
  sunProgress: number;
  pressProgress: number;
  onEnterUniverse?: () => void;
  isZh: boolean;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* =========================================================================
          SCENE 1: REJECTION (sc1.png)
          Motion: Anticipation Contract -> Tension Build-up -> Crisp Shatter Release
          ========================================================================= */}
      {scene.id === 1 && (
        <div
          className="relative w-full h-full"
          style={{
            transform:
              motionState === "impact"
                ? "scale(1.02) translate3d(0, -2px, 0)"
                : motionState === "engaging"
                ? `scale(${1 - pressProgress * 0.008})`
                : "scale(1)",
            transition:
              motionState === "impact"
                ? `transform 180ms ${MOTION_EASING.impactOvershoot}, filter 180ms ease-out`
                : motionState === "follow_through"
                ? `transform 450ms ${MOTION_EASING.smoothOut}`
                : `transform 120ms ${MOTION_EASING.anticipationIn}`,
            filter: motionState === "impact" ? "brightness(1.25)" : "brightness(1)",
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 1: Rejection"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Anticipatory Tension Darkening during Hold */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-150"
            style={{
              background: `radial-gradient(circle at center, transparent ${
                72 - pressProgress * 32
              }%, rgba(0,0,0,${0.25 + pressProgress * 0.45}) 100%)`,
              opacity: pressProgress > 0 ? 1 : 0,
            }}
          />

          {/* Clean Glass Fracture on Impact */}
          {(motionState === "impact" || motionState === "follow_through") && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              style={{
                opacity: motionState === "impact" ? 1 : 0.4,
                transition: `opacity ${MOTION_EASING.smoothOut} 300ms`,
              }}
            >
              <svg className="w-full h-full max-w-xl" viewBox="0 0 800 800" fill="none">
                <path d="M400 400 L250 150 M400 400 L570 180 M400 400 L670 420 M400 400 L550 670 M400 400 L230 610 M400 400 L130 380" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" />
                <path d="M250 150 L190 85 M570 180 L710 120 M670 420 L770 450 M550 670 L610 750 M230 610 L150 710" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="400" cy="400" r="40" stroke="#ffffff" strokeWidth="2.5" fill="rgba(6,182,212,0.15)" />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SCENE 2: HANDSHAKE (sc2.png)
          Motion: Contact -> Micro-Rebound -> Warm Golden Energy Flare
          ========================================================================= */}
      {scene.id === 2 && (
        <div
          className="relative w-full h-full"
          style={{
            transform:
              motionState === "impact"
                ? "translate3d(1.5px, -1px, 0) scale(1.012) rotate(0.2deg)"
                : motionState === "follow_through"
                ? "translate3d(0, 0, 0) scale(1.002)"
                : "translate3d(0, 0, 0) scale(1)",
            transition:
              motionState === "impact"
                ? `transform 120ms ${MOTION_EASING.impactOvershoot}`
                : `transform 450ms ${MOTION_EASING.smoothOut}`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 2: Handshake"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Warm Golden Energy Flare at Clasp Center */}
          {(motionState === "impact" || motionState === "follow_through") && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/25 blur-3xl pointer-events-none z-10"
              style={{
                opacity: motionState === "impact" ? 1 : 0.6,
                transform:
                  motionState === "impact"
                    ? "translate(-50%, -50%) scale(1.1)"
                    : "translate(-50%, -50%) scale(1.3)",
                transition: `all 500ms ${MOTION_EASING.smoothOut}`,
              }}
            />
          )}
        </div>
      )}

      {/* =========================================================================
          SCENE 3: APPROVAL / CO-CREATION (sc3.png)
          Motion: Slow Light Ascent -> Translucent Amber Warmth Expansion
          ========================================================================= */}
      {scene.id === 3 && (
        <div
          className="relative w-full h-full"
          style={{
            filter: `brightness(${1 + sunProgress * 0.35}) saturate(${
              1 + sunProgress * 0.25
            })`,
            transition: `filter 180ms ${MOTION_EASING.smoothOut}`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 3: Approval"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Rising Amber Backlight Expansion */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% ${70 - sunProgress * 30}%, rgba(251,191,36,${
                sunProgress * 0.35
              }) 0%, transparent 70%)`,
              opacity: sunProgress > 0 ? 1 : 0,
              transition: `opacity 120ms ${MOTION_EASING.smoothOut}`,
            }}
          />
        </div>
      )}

      {/* =========================================================================
          SCENE 4: THREE-STAGE DOOR SEQUENCE (sc4.png)
          Motion: 3-Knock Rhythm -> Escalation across 3 Door Panels
          ========================================================================= */}
      {scene.id === 4 && (
        <div
          className="relative w-full h-full"
          style={{
            transform:
              knockStage === 1 && motionState === "impact"
                ? "translate3d(-2px, 0, 0)"
                : knockStage === 2 && motionState === "impact"
                ? "translate3d(0, 1.5px, 0)"
                : knockStage === 3 && motionState === "impact"
                ? "translate3d(0, -3px, 0) scale(1.015)"
                : "translate3d(0, 0, 0) scale(1)",
            transition:
              motionState === "impact"
                ? `transform 140ms ${MOTION_EASING.impactOvershoot}`
                : `transform 400ms ${MOTION_EASING.smoothOut}`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 4: Door Sequence"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* 3-Panel Lighting Spotlight Feedback */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
            {/* Panel 1: Robot Hand on Closed Door */}
            <div
              className={`h-full border-r border-white/5 transition-all duration-700 ${
                knockStage === 1
                  ? "bg-cyan-500/15 shadow-[inset_0_0_80px_rgba(6,182,212,0.35)]"
                  : "bg-black/30"
              }`}
            />
            {/* Panel 2: Human Fist on Closed Door */}
            <div
              className={`h-full border-r border-white/5 transition-all duration-700 ${
                knockStage === 2
                  ? "bg-amber-500/20 shadow-[inset_0_0_80px_rgba(245,158,11,0.35)]"
                  : "bg-black/30"
              }`}
            />
            {/* Panel 3: Together Reaching to Open Door with Light Spill */}
            <div
              className={`h-full transition-all duration-700 ${
                knockStage >= 3
                  ? "bg-amber-400/25 shadow-[inset_0_0_100px_rgba(251,191,36,0.5)]"
                  : "bg-black/30"
              }`}
            />
          </div>

          {/* Full Golden Volumetric Light Burst upon Knock 3 */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/85 mix-blend-screen pointer-events-none"
            style={{
              opacity: knockStage >= 3 ? 1 : 0,
              transition: `opacity 900ms ${MOTION_EASING.cinematicInOut}`,
            }}
          />
        </div>
      )}

      {/* =========================================================================
          SCENE 5: WELCOME ROCKYOS — COSMIC PROLOGUE (sc5.png)
          Observation deck panoramic view of galaxy & nebulae
          ========================================================================= */}
      {scene.id === 5 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <Image
            src={scene.imageSrc}
            alt="Scene 5: Welcome RockyOS"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Center Interactive Call to Action */}
          <div className="relative z-30 flex flex-col items-center gap-4 pointer-events-auto mt-16 sm:mt-24 animate-in fade-in zoom-in-95 duration-1000">
            <button
              type="button"
              onClick={onEnterUniverse}
              className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/35 active:scale-95 text-white font-mono text-sm tracking-wider uppercase backdrop-blur-md border border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>{isZh ? "踏入星系主页" : "Enter Universe"}</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
              {isZh ? "点击按钮或任意区域进入" : "Click anywhere to explore"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
