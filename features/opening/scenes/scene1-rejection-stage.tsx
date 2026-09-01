"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionState } from "../motion-spec";
import { SPRING_CONFIGS } from "../engine/motion-curves";

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
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale:
            motionState === "impact"
              ? 1.025
              : motionState === "engaging"
              ? 1 - Math.sqrt(pressProgress) * 0.016
              : 1,
          y:
            motionState === "impact"
              ? -3
              : motionState === "engaging"
              ? Math.sin(pressProgress * 30) * 0.8
              : 0,
          filter: motionState === "impact" ? "brightness(1.25)" : "brightness(1)",
        }}
        transition={SPRING_CONFIGS.impactHard}
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

        {/* Dynamic Inward Tension Darkening */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, transparent ${
              72 - pressProgress * 32
            }%, rgba(0,0,0,${0.25 + pressProgress * 0.45}) 100%)`,
            opacity: pressProgress > 0 ? 1 : 0,
          }}
        />

        {/* High-Energy Glass Fracture Impact Wave */}
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
                <path
                  d="M400 400 L250 150 M400 400 L570 180 M400 400 L670 420 M400 400 L550 670 M400 400 L230 610 M400 400 L130 380"
                  stroke="#bae6fd"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M250 150 L190 85 M570 180 L710 120 M670 420 L770 450 M550 670 L610 750 M230 610 L150 710"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="40"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  fill="rgba(6,182,212,0.15)"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
