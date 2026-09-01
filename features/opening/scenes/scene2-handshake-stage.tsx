"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionState } from "../motion-spec";
import { SPRING_CONFIGS } from "../engine/motion-curves";

export function Scene2HandshakeStage({
  imageSrc,
  motionState,
}: {
  imageSrc: string;
  motionState: MotionState;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      <motion.div
        className="relative w-full h-full"
        animate={{
          x: motionState === "impact" ? [0, 2.2, -1.2, 0.6, 0] : 0,
          y: motionState === "impact" ? [0, -1.8, 1, -0.4, 0] : 0,
          scale: motionState === "impact" ? [1, 1.018, 1.004, 1] : 1,
          rotate: motionState === "impact" ? [0, 0.28, -0.18, 0] : 0,
        }}
        transition={{
          duration: 0.48,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src={imageSrc}
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
              animate={{ opacity: 0.65, scale: 1.25 }}
              exit={{ opacity: 0, scale: 1.45 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none z-10"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
