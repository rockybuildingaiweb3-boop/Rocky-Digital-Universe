"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionState } from "../motion-spec";
import { CinematicCameraRig } from "../components/cinematic-camera-rig";
import { DoorVolumetricBeamLayer } from "../components/door-volumetric-beam-layer";

export function Scene4DoorStage({
  imageSrc,
  motionState,
  knockStage,
}: {
  imageSrc: string;
  motionState: MotionState;
  knockStage: number;
}) {
  const isImpacting = motionState === "impact";

  // Calculate dynamic focal origin based on knocking actor
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
          1. CINEMATIC CAMERA RIG (Dynamic Focal Zoom & Trauma Recoil)
          ------------------------------------------------------------- */}
      <CinematicCameraRig
        isImpacting={isImpacting}
        focalOrigin={focalOrigin}
        intensity={knockStage === 3 ? 1.4 : 1.0}
        scale={knockStage >= 3 ? 1.03 : knockStage > 0 ? 1.015 : 1}
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

        {/* -------------------------------------------------------------
            2. THREE-PANEL PROGRESSIVE LIGHTING & STRESS SPOTLIGHTS
            ------------------------------------------------------------- */}
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

        {/* -------------------------------------------------------------
            3. PIERCING VOLUMETRIC LIGHT BEAM BURST & GOLDEN FLOOD
            ------------------------------------------------------------- */}
        <DoorVolumetricBeamLayer knockStage={knockStage} />
      </CinematicCameraRig>
    </div>
  );
}
