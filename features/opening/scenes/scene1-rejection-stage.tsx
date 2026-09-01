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
              ? [1, 1.035, 1.008, 1]
              : motionState === "engaging"
              ? 1 - Math.sqrt(pressProgress) * 0.018
              : 1,
          x:
            motionState === "impact"
              ? [-4, 3, -1.5, 0]
              : 0,
          y:
            motionState === "impact"
              ? [-3, 2, -1, 0]
              : motionState === "engaging"
              ? Math.sin(pressProgress * 35) * 1.2
              : 0,
          filter:
            motionState === "impact"
              ? "brightness(1.4) contrast(1.15)"
              : "brightness(1) contrast(1)",
        }}
        transition={{
          duration: motionState === "impact" ? 0.42 : 0.15,
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
              68 - pressProgress * 36
            }%, rgba(0,0,0,${0.3 + pressProgress * 0.5}) 100%)`,
            opacity: pressProgress > 0 ? 1 : 0,
          }}
        />

        {/* Blinding Energy Flare upon Breakthrough Impact */}
        <AnimatePresence>
          {motionState === "impact" && (
            <motion.div
              initial={{ opacity: 0.9, scale: 0.9 }}
              animate={{ opacity: 0, scale: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="absolute inset-0 bg-radial from-cyan-300/60 via-sky-500/20 to-transparent pointer-events-none z-30 mix-blend-screen"
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
