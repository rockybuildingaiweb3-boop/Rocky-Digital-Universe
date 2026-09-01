"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionState } from "../motion-spec";

export function Scene4DoorStage({
  imageSrc,
  motionState,
  knockStage,
}: {
  imageSrc: string;
  motionState: MotionState;
  knockStage: number;
}) {
  // Determine dynamic camera focal center based on current knocking actor
  const focalOrigin =
    knockStage === 1
      ? "16% 50%"
      : knockStage === 2
      ? "50% 50%"
      : knockStage >= 3
      ? "84% 50%"
      : "50% 50%";

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* -------------------------------------------------------------
          CAMERA FOCAL ZOOMS & PHYSICAL IMPULSE MATRICES
          ------------------------------------------------------------- */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformOrigin: focalOrigin }}
        animate={{
          scale:
            knockStage === 3 && motionState === "impact"
              ? [1, 1.04, 1.01, 1]
              : knockStage === 1 && motionState === "impact"
              ? [1, 1.02, 1]
              : knockStage === 2 && motionState === "impact"
              ? [1, 1.02, 1]
              : 1,
          x:
            knockStage === 1 && motionState === "impact"
              ? [-4, 2.5, -1, 0]
              : knockStage === 3 && motionState === "impact"
              ? [-5.5, 4, -2, 0]
              : 0,
          y:
            knockStage === 2 && motionState === "impact"
              ? [3.5, -2, 1, 0]
              : knockStage === 3 && motionState === "impact"
              ? [-3, 2, -1, 0]
              : 0,
          filter:
            knockStage === 3 && motionState === "impact"
              ? "brightness(1.35) contrast(1.1)"
              : "brightness(1) contrast(1)",
        }}
        transition={{
          duration: knockStage === 3 ? 0.48 : 0.32,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src={imageSrc}
          alt="Scene 4: Door Sequence"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* 3-Panel Progressive Lighting Spotlight Feedback */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
          {/* Panel 1: Robot Hand on Closed Door */}
          <motion.div
            animate={{
              backgroundColor:
                knockStage === 1 ? "rgba(6,182,212,0.22)" : "rgba(0,0,0,0.32)",
              boxShadow:
                knockStage === 1
                  ? "inset 0 0 90px rgba(6,182,212,0.45)"
                  : "inset 0 0 0px transparent",
            }}
            transition={{ duration: 0.35 }}
            className="h-full border-r border-white/5"
          />
          {/* Panel 2: Human Fist on Closed Door */}
          <motion.div
            animate={{
              backgroundColor:
                knockStage === 2 ? "rgba(245,158,11,0.25)" : "rgba(0,0,0,0.32)",
              boxShadow:
                knockStage === 2
                  ? "inset 0 0 90px rgba(245,158,11,0.45)"
                  : "inset 0 0 0px transparent",
            }}
            transition={{ duration: 0.35 }}
            className="h-full border-r border-white/5"
          />
          {/* Panel 3: Together Reaching to Open Door with Light Spill */}
          <motion.div
            animate={{
              backgroundColor:
                knockStage >= 3 ? "rgba(251,191,36,0.35)" : "rgba(0,0,0,0.32)",
              boxShadow:
                knockStage >= 3
                  ? "inset 0 0 120px rgba(251,191,36,0.6)"
                  : "inset 0 0 0px transparent",
            }}
            transition={{ duration: 0.35 }}
            className="h-full"
          />
        </div>

        {/* Radiant Volumetric Golden Light Flood upon Knock 3 */}
        <motion.div
          animate={{
            opacity: knockStage >= 3 ? 1 : 0,
          }}
          transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/40 to-amber-100/90 mix-blend-screen pointer-events-none z-20"
        />

        {/* 3 Volumetric Light Beams Piercing Through Door Seams */}
        <AnimatePresence>
          {knockStage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-end pointer-events-none z-30 pr-12 sm:pr-24"
            >
              <div className="w-1/2 h-full bg-gradient-to-l from-amber-200/95 via-amber-400/50 to-transparent blur-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
