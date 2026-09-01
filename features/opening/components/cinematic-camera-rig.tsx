"use client";

import React from "react";
import { motion } from "framer-motion";

export function CinematicCameraRig({
  children,
  isImpacting = false,
  focalOrigin = "50% 50%",
  intensity = 1,
  scale = 1,
  className = "",
}: {
  children: React.ReactNode;
  isImpacting?: boolean;
  focalOrigin?: string;
  intensity?: number;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      style={{ transformOrigin: focalOrigin }}
      animate={{
        scale: isImpacting ? [scale, scale * (1 + 0.035 * intensity), scale] : scale,
        x: isImpacting ? [-5 * intensity, 3.8 * intensity, -1.8 * intensity, 0] : 0,
        y: isImpacting ? [-3.5 * intensity, 2.5 * intensity, -1.2 * intensity, 0] : 0,
        rotate: isImpacting ? [-0.25 * intensity, 0.2 * intensity, 0] : 0,
      }}
      transition={{
        duration: isImpacting ? 0.42 : 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
