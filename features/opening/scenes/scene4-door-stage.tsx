"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      <motion.div
        className="relative w-full h-full"
        animate={{
          x:
            knockStage === 1 && motionState === "impact"
              ? [-2.5, 1.8, -0.8, 0]
              : 0,
          y:
            knockStage === 2 && motionState === "impact"
              ? [1.8, -1.2, 0.6, 0]
              : knockStage === 3 && motionState === "impact"
              ? [-3.5, 2.5, -1, 0]
              : 0,
          scale:
            knockStage === 3 && motionState === "impact"
              ? [1, 1.025, 1.008, 1]
              : 1,
        }}
        transition={{
          duration: 0.38,
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
                knockStage >= 3 ? "rgba(251,191,36,0.32)" : "rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.4 }}
            className="h-full"
          />
        </div>

        {/* Radiant Volumetric Golden Light Flood upon Knock 3 */}
        <motion.div
          animate={{
            opacity: knockStage >= 3 ? 1 : 0,
          }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/35 to-amber-200/85 mix-blend-screen pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
