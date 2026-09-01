"use client";

import { useState, useCallback, useRef } from "react";
import { cinematicAudio } from "@/lib/cinematic-audio";
import { TIMINGS } from "../engine/motion-curves";

export function useDoorKnockController({
  onDoorUnlocked,
}: {
  onDoorUnlocked: () => void;
}) {
  const [knockStage, setKnockStage] = useState<number>(0);
  const [isImpacting, setIsImpacting] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const isLockedRef = useRef<boolean>(false);

  const triggerKnock = useCallback(() => {
    if (isLockedRef.current) return;
    cinematicAudio.unlockAudio();
    setIsImpacting(true);

    if (knockStage === 0) {
      // Knock 1: Robot titanium clang (door stays locked)
      setKnockStage(1);
      cinematicAudio.playDoorKnock1_Robot();
      setTimeout(() => setIsImpacting(false), TIMINGS.scene4_knock1Ms);
    } else if (knockStage === 1) {
      // Knock 2: Human solid oak/stone thud (door stays locked)
      setKnockStage(2);
      cinematicAudio.playDoorKnock2_Human();
      setTimeout(() => setIsImpacting(false), TIMINGS.scene4_knock2Ms);
    } else if (knockStage === 2) {
      // Knock 3: Joint seismic breakthrough & gate unseal!
      setKnockStage(3);
      isLockedRef.current = true;
      cinematicAudio.playDoorKnock3_Together();

      setTimeout(() => {
        setIsImpacting(false);
        setIsUnlocked(true);
      }, TIMINGS.scene4_knock3Ms);

      // Transition to Scene 5 after golden light flood
      setTimeout(() => {
        onDoorUnlocked();
      }, TIMINGS.scene4_lightFloodTransitionMs);
    } else {
      onDoorUnlocked();
    }
  }, [knockStage, onDoorUnlocked]);

  return {
    knockStage,
    isImpacting,
    isUnlocked,
    triggerKnock,
  };
}
