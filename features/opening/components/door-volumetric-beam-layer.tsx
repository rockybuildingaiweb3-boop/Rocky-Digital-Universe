"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DoorVolumetricBeamLayer({
  knockStage,
}: {
  knockStage: number;
}) {
  const isUnlocked = knockStage >= 3;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* 1. Full-Screen Radiant Golden Light Wash */}
      <motion.div
        animate={{
          opacity: isUnlocked ? 1 : 0,
        }}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/45 to-amber-100/95 mix-blend-screen"
      />

      {/* 2. Three Piercing Volumetric Light Beams from Door Cracks */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col justify-around pointer-events-none pr-8 sm:pr-20"
          >
            {/* Top Beam */}
            <div className="w-3/4 h-32 ml-auto bg-gradient-to-l from-amber-100 via-amber-400/50 to-transparent blur-3xl opacity-85 rotate-[-4deg]" />
            {/* Center Core Beam */}
            <div className="w-4/5 h-48 ml-auto bg-gradient-to-l from-white via-amber-300/60 to-transparent blur-2xl opacity-95" />
            {/* Bottom Beam */}
            <div className="w-2/3 h-32 ml-auto bg-gradient-to-l from-amber-200 via-amber-500/40 to-transparent blur-3xl opacity-80 rotate-[6deg]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
