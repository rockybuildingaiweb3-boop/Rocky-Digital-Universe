"use client";

import React from "react";
import Image from "next/image";
import type { CinematicSceneConfig } from "./opening-config";
import type { MotionState } from "./motion-spec";
import { MOTION_EASING } from "./motion-spec";

export function InteractiveOpeningStage({
  scene,
  motionState,
  knockStage,
  sunProgress,
  pressProgress,
  isDoorOpen,
}: {
  scene: CinematicSceneConfig;
  motionState: MotionState;
  knockStage: number;
  sunProgress: number;
  pressProgress: number;
  isDoorOpen: boolean;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* =========================================================================
          ACT 01: REJECTION
          Motion Script: Anticipation (Contract) -> Pressure Build-up -> Shatter Release -> Follow-through
          ========================================================================= */}
      {scene.id === 1 && (
        <div
          className="relative w-full h-full"
          style={{
            transform:
              motionState === "impact"
                ? "scale(1.025) translate3d(0, -2px, 0)"
                : motionState === "engaging"
                ? `scale(${1 - pressProgress * 0.008}) translate3d(0, ${pressProgress * 1}px, 0)`
                : "scale(1) translate3d(0, 0, 0)",
            transition:
              motionState === "impact"
                ? `transform 180ms ${MOTION_EASING.impactOvershoot}, filter 180ms ease-out`
                : motionState === "follow_through"
                ? `transform 450ms ${MOTION_EASING.smoothOut}`
                : `transform 120ms ${MOTION_EASING.anticipationIn}`,
            filter: motionState === "impact" ? "brightness(1.3)" : "brightness(1)",
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Act 1: Rejection"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />

          {/* Anticipatory Tension Vignette (Expands as user presses) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-150"
            style={{
              background: `radial-gradient(circle at center, transparent ${
                72 - pressProgress * 32
              }%, rgba(0,0,0,${0.3 + pressProgress * 0.45}) 100%)`,
              opacity: pressProgress > 0 ? 1 : 0,
            }}
          />

          {/* Glass Fracture SVG (Appears instantaneously on impact & dissipates in follow-through) */}
          {(motionState === "impact" || motionState === "follow_through") && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              style={{
                opacity: motionState === "impact" ? 1 : 0.4,
                transition: `opacity ${MOTION_EASING.smoothOut} 300ms`,
              }}
            >
              <svg
                className="w-full h-full max-w-xl scale-105"
                viewBox="0 0 800 800"
                fill="none"
              >
                <path
                  d="M400 400 L250 150 M400 400 L570 180 M400 400 L670 420 M400 400 L550 670 M400 400 L230 610 M400 400 L130 380"
                  stroke="#bae6fd"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M250 150 L190 85 M570 180 L710 120 M670 420 L770 450 M550 670 L610 750 M230 610 L150 710"
                  stroke="#7dd3fc"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="45"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="rgba(6,182,212,0.18)"
                />
              </svg>
            </div>
          )}

          {/* Restrained Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/60 pointer-events-none" />
        </div>
      )}

      {/* =========================================================================
          ACT 02: HANDSHAKE
          Motion Script: Contact -> Micro-Rebound -> Energy Bloom -> Follow-Through
          ========================================================================= */}
      {scene.id === 2 && (
        <div
          className="relative w-full h-full"
          style={{
            transform:
              motionState === "impact"
                ? "translate3d(1.5px, -1px, 0) scale(1.012) rotate(0.25deg)"
                : motionState === "follow_through"
                ? "translate3d(0, 0, 0) scale(1.002) rotate(0deg)"
                : "translate3d(0, 0, 0) scale(1)",
            transition:
              motionState === "impact"
                ? `transform 120ms ${MOTION_EASING.impactOvershoot}`
                : `transform 450ms ${MOTION_EASING.smoothOut}`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Act 2: Handshake"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%]"
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

          {/* Restrained Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/55 pointer-events-none" />
        </div>
      )}

      {/* =========================================================================
          ACT 03: APPROVAL
          Motion Script: Slow Rise -> Light Expansion -> Emotional Build
          ========================================================================= */}
      {scene.id === 3 && (
        <div
          className="relative w-full h-full"
          style={{
            filter: `brightness(${1 + sunProgress * 0.4}) saturate(${
              1 + sunProgress * 0.3
            })`,
            transition: `filter 180ms ${MOTION_EASING.smoothOut}`,
          }}
        >
          <Image
            src={scene.imageSrc}
            alt="Act 3: Approval"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />

          {/* Volumetric Solar Dawn Orb Rising */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              bottom: `${15 + sunProgress * 35}%`,
              width: `${160 + sunProgress * 400}px`,
              height: `${160 + sunProgress * 400}px`,
              background: `radial-gradient(circle, rgba(251,191,36,${
                0.25 + sunProgress * 0.5
              }) 0%, rgba(245,158,11,${0.15 + sunProgress * 0.3}) 45%, transparent 75%)`,
              opacity: sunProgress > 0 ? 1 : 0,
              transition: `bottom 120ms ${MOTION_EASING.smoothOut}, width 120ms ${MOTION_EASING.smoothOut}, height 120ms ${MOTION_EASING.smoothOut}, opacity 120ms ${MOTION_EASING.smoothOut}`,
            }}
          />

          {/* Restrained Film Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/50 pointer-events-none" />
        </div>
      )}

      {/* =========================================================================
          ACT 04: THE DOOR SEQUENCE
          Motion Script: Rhythm -> Escalation (Knock 1..3) -> Grand Payoff (Light Flood)
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
            alt="Act 4: The Door"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />

          {/* Door Columns Resonance Feedback */}
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

          {/* Golden Volumetric Light Flood (Grand Payoff on Knock 3) */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/80 mix-blend-screen pointer-events-none"
            style={{
              opacity: isDoorOpen ? 1 : 0,
              transition: `opacity 1000ms ${MOTION_EASING.cinematicInOut}`,
            }}
          />

          {/* Restrained Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}
