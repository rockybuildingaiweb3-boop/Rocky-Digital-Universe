"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { CinematicSceneConfig } from "./opening-config";
import type { MotionState } from "./motion-spec";
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
          Physics: Non-Linear Inward Tension -> Instant Shatter Snap -> Damped Release
          ========================================================================= */}
      {scene.id === 1 && (
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale:
              motionState === "impact"
                ? 1.025
                : motionState === "engaging"
                ? 1 - Math.sqrt(pressProgress) * 0.015
                : 1,
            y:
              motionState === "impact"
                ? -3
                : motionState === "engaging"
                ? Math.sin(pressProgress * 30) * 0.8
                : 0,
            filter: motionState === "impact" ? "brightness(1.25)" : "brightness(1)",
          }}
          transition={{
            type: "spring",
            stiffness: motionState === "impact" ? 600 : 300,
            damping: motionState === "impact" ? 18 : 30,
            mass: 0.8,
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

          {/* Dynamic Physical Tension Darkening */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, transparent ${
                72 - pressProgress * 32
              }%, rgba(0,0,0,${0.25 + pressProgress * 0.45}) 100%)`,
              opacity: pressProgress > 0 ? 1 : 0,
            }}
          />

          {/* Clean Glass Fracture Shockwave on Impact */}
          <AnimatePresence>
            {(motionState === "impact" || motionState === "follow_through") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                <svg className="w-full h-full max-w-xl" viewBox="0 0 800 800" fill="none">
                  <path d="M400 400 L250 150 M400 400 L570 180 M400 400 L670 420 M400 400 L550 670 M400 400 L230 610 M400 400 L130 380" stroke="#bae6fd" strokeWidth="3" strokeLinecap="round" />
                  <path d="M250 150 L190 85 M570 180 L710 120 M670 420 L770 450 M550 670 L610 750 M230 610 L150 710" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="400" cy="400" r="40" stroke="#ffffff" strokeWidth="2.5" fill="rgba(6,182,212,0.15)" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* =========================================================================
          SCENE 2: HANDSHAKE (sc2.png)
          Physics: Contact Micro-Rebound Spring (Critically Damped) -> Warm Golden Energy
          ========================================================================= */}
      {scene.id === 2 && (
        <motion.div
          className="relative w-full h-full"
          animate={{
            x: motionState === "impact" ? [0, 2, -1, 0.5, 0] : 0,
            y: motionState === "impact" ? [0, -1.5, 0.8, -0.3, 0] : 0,
            scale: motionState === "impact" ? [1, 1.015, 1.002, 1] : 1,
            rotate: motionState === "impact" ? [0, 0.25, -0.15, 0] : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
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

          {/* Localized Warm Golden Energy Flare on Contact */}
          <AnimatePresence>
            {(motionState === "impact" || motionState === "follow_through") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1.25 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none z-10"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* =========================================================================
          SCENE 3: APPROVAL / TRUST (sc3.png)
          Physics: Continuous Light Ascent & Hope Expansion
          ========================================================================= */}
      {scene.id === 3 && (
        <motion.div
          className="relative w-full h-full"
          animate={{
            filter: `brightness(${1 + sunProgress * 0.35}) saturate(${
              1 + sunProgress * 0.25
            })`,
          }}
          transition={{ duration: 0.15, ease: "linear" }}
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
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: sunProgress > 0 ? 1 : 0,
            }}
            style={{
              background: `radial-gradient(circle at 50% ${70 - sunProgress * 30}%, rgba(251,191,36,${
                sunProgress * 0.35
              }) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      )}

      {/* =========================================================================
          SCENE 4: THREE-STAGE DOOR SEQUENCE (sc4.png)
          Physics: Rhythmic Door Impulse Matrices (Knock 1..3) -> Golden Light Flood
          ========================================================================= */}
      {scene.id === 4 && (
        <motion.div
          className="relative w-full h-full"
          animate={{
            x:
              knockStage === 1 && motionState === "impact"
                ? [-2, 1.5, -0.8, 0]
                : 0,
            y:
              knockStage === 2 && motionState === "impact"
                ? [1.5, -1, 0.5, 0]
                : knockStage === 3 && motionState === "impact"
                ? [-3, 2, -1, 0]
                : 0,
            scale:
              knockStage === 3 && motionState === "impact"
                ? [1, 1.02, 1.005, 1]
                : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
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
            <motion.div
              animate={{
                backgroundColor:
                  knockStage === 1 ? "rgba(6,182,212,0.18)" : "rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
              className="h-full border-r border-white/5"
            />
            {/* Panel 2: Human Fist on Closed Door */}
            <motion.div
              animate={{
                backgroundColor:
                  knockStage === 2 ? "rgba(245,158,11,0.22)" : "rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
              className="h-full border-r border-white/5"
            />
            {/* Panel 3: Together Reaching to Open Door with Light Spill */}
            <motion.div
              animate={{
                backgroundColor:
                  knockStage >= 3 ? "rgba(251,191,36,0.3)" : "rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
              className="h-full"
            />
          </div>

          {/* Full Golden Volumetric Light Burst upon Knock 3 */}
          <motion.div
            animate={{
              opacity: knockStage >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/85 mix-blend-screen pointer-events-none"
          />
        </motion.div>
      )}

      {/* =========================================================================
          SCENE 5: WELCOME ROCKYOS — COSMIC PROLOGUE (sc5.png)
          Observation deck panoramic view with interactive entrance CTA
          ========================================================================= */}
      {scene.id === 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex flex-col items-center justify-center"
        >
          <Image
            src={scene.imageSrc}
            alt="Scene 5: Welcome RockyOS"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Center Interactive Entrance CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 flex flex-col items-center gap-3.5 pointer-events-auto mt-16 sm:mt-24"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, boxShadow: "0 0 45px rgba(6,182,212,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnterUniverse}
              className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-cyan-500/25 hover:bg-cyan-500/40 text-white font-mono text-sm tracking-wider uppercase backdrop-blur-md border border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>{isZh ? "踏入星系主页" : "Enter Universe"}</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
              {isZh ? "点击按钮或任意区域进入" : "Click anywhere to explore"}
            </span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
