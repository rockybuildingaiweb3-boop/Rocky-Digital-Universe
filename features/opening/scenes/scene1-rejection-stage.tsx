"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionState } from "../motion-spec";
import { Scene1ShatterCanvas } from "./scene1-shatter-canvas";

export function Scene1RejectionStage({
  imageSrc,
  motionState,
  pressProgress,
}: {
  imageSrc: string;
  motionState: MotionState;
  pressProgress: number;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* -------------------------------------------------------------
          CAMERA RECOIL & PHYSICAL TENSION CANVAS
          ------------------------------------------------------------- */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale:
            motionState === "impact"
              ? [1, 1.045, 1.01, 1]
              : motionState === "engaging"
              ? 1 - Math.sqrt(pressProgress) * 0.02
              : 1,
          x:
            motionState === "impact"
              ? [-6, 4.5, -2, 1, 0]
              : 0,
          y:
            motionState === "impact"
              ? [-4, 3, -1.5, 0]
              : motionState === "engaging"
              ? Math.sin(pressProgress * 40) * 1.5
              : 0,
          filter:
            motionState === "impact"
              ? "brightness(1.45) contrast(1.18)"
              : "brightness(1) contrast(1)",
        }}
        transition={{
          duration: motionState === "impact" ? 0.45 : 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src={imageSrc}
          alt="Scene 1: Rejection"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dynamic Structural Tension Darkening during Press */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, transparent ${
              65 - pressProgress * 38
            }%, rgba(0,0,0,${0.35 + pressProgress * 0.55}) 100%)`,
            opacity: pressProgress > 0 ? 1 : 0,
          }}
        />

        {/* Blinding Radial Chromatic Energy Flare upon Breakthrough */}
        <AnimatePresence>
          {motionState === "impact" && (
            <motion.div
              initial={{ opacity: 1, scale: 0.85 }}
              animate={{ opacity: 0, scale: 1.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="absolute inset-0 bg-radial from-cyan-200/70 via-sky-500/30 to-transparent pointer-events-none z-30 mix-blend-screen"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* -------------------------------------------------------------
          HIGH-PERFORMANCE CANVAS 2D FRACTURE & SHARD PHYSICS ENGINE
          ------------------------------------------------------------- */}
      <Scene1ShatterCanvas
        pressProgress={pressProgress}
        motionState={motionState}
      />
    </div>
  );
}
