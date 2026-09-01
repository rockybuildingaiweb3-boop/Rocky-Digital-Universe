"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionState } from "../motion-spec";

export function Scene3ApprovalStage({
  imageSrc,
  sunProgress,
}: {
  imageSrc: string;
  motionState: MotionState;
  sunProgress: number;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
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
          src={imageSrc}
          alt="Scene 3: Approval"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dynamic Translucent Amber Dawn Light Expansion */}
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
    </div>
  );
}
