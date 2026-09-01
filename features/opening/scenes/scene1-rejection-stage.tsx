"use client";

import React from "react";
import Image from "next/image";
import type { MotionState } from "../motion-spec";
import { CinematicCameraRig } from "../components/cinematic-camera-rig";
import { PressureStressLayer } from "../components/pressure-stress-layer";
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
  const isImpacting = motionState === "impact";
  const p = Math.min(pressProgress, 1);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-black">
      {/* -------------------------------------------------------------
          1. CINEMATIC CAMERA RIG (3-Axis Screen Recoil & Jitter)
          ------------------------------------------------------------- */}
      <CinematicCameraRig
        isImpacting={isImpacting}
        intensity={1.2}
        scale={motionState === "engaging" ? 1 - Math.sqrt(p) * 0.02 : 1}
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

        {/* -------------------------------------------------------------
            2. DYNAMIC PRESSURE STRESS & CHROMATIC ENERGY LAYER
            ------------------------------------------------------------- */}
        <PressureStressLayer
          progress={pressProgress}
          isImpacting={isImpacting}
        />
      </CinematicCameraRig>

      {/* -------------------------------------------------------------
          3. HIGH-PERFORMANCE CANVAS 2D FRACTURE & 48-SHARD PHYSICS
          ------------------------------------------------------------- */}
      <Scene1ShatterCanvas
        pressProgress={pressProgress}
        motionState={motionState}
      />
    </div>
  );
}
