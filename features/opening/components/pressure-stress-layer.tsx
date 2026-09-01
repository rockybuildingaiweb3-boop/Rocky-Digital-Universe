"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PressureStressLayer({
  progress,
  isImpacting,
}: {
  progress: number;
  isImpacting: boolean;
}) {
  const p = Math.min(progress, 1);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 1. Dynamic Stress Vignette Darkening */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent ${
            68 - p * 38
          }%, rgba(0,0,0,${0.3 + p * 0.55}) 100%)`,
          opacity: p > 0 ? 1 : 0,
        }}
      />

      {/* 2. Chromatic Cyan Caustic Glow at Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{
          width: `${80 + p * 220}px`,
          height: `${80 + p * 220}px`,
          background: `radial-gradient(circle, rgba(56,189,248,${
            0.15 + p * 0.4
          }) 0%, transparent 70%)`,
          opacity: p > 0 ? 1 : 0,
        }}
      />

      {/* 3. Blinding Breakthrough Energy Flash on Impact */}
      <AnimatePresence>
        {isImpacting && (
          <motion.div
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0 bg-radial from-cyan-200/80 via-sky-400/35 to-transparent mix-blend-screen z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
