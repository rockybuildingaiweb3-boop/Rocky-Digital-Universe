"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cinematicAudio } from "@/lib/cinematic-audio";
import { TIMINGS } from "../engine/motion-curves";

export interface PressureState {
  progress: number;
  isHolding: boolean;
  isTriggered: boolean;
}

export function usePressureAccumulator({
  thresholdMs = TIMINGS.scene1_holdThresholdMs,
  onComplete,
}: {
  thresholdMs?: number;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState<number>(0);
  const [isHolding, setIsHolding] = useState<boolean>(false);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  const isHoldingRef = useRef<boolean>(false);
  const holdStartRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const updateLoop = useCallback(() => {
    if (!isHoldingRef.current) return;

    const elapsed = performance.now() - holdStartRef.current;
    // Non-linear cubic accumulation curve
    const linearP = Math.min(elapsed / thresholdMs, 1);
    const nonLinearP = Math.pow(linearP, 1.2);

    setProgress(nonLinearP);
    cinematicAudio.updateTensionSound(nonLinearP);

    if (linearP >= 1) {
      isHoldingRef.current = false;
      setIsHolding(false);
      setIsTriggered(true);
      onComplete();
      return;
    }

    rafRef.current = requestAnimationFrame(updateLoop);
  }, [thresholdMs, onComplete]);

  const startHold = useCallback(
    (e?: React.PointerEvent) => {
      cinematicAudio.unlockAudio();
      if (e?.currentTarget && "setPointerCapture" in e.currentTarget) {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch (err) {}
      }

      isHoldingRef.current = true;
      setIsHolding(true);
      holdStartRef.current = performance.now();

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateLoop);
    },
    [updateLoop]
  );

  const releaseHold = useCallback(() => {
    if (!isHoldingRef.current) return;
    isHoldingRef.current = false;
    setIsHolding(false);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cinematicAudio.stopTensionSound();

    // Damped elastic release back to zero
    setProgress(0);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cinematicAudio.stopTensionSound();
    };
  }, []);

  return {
    progress,
    isHolding,
    isTriggered,
    startHold,
    releaseHold,
  };
}
