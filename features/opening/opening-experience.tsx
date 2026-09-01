"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { cinematicAudio } from "@/lib/cinematic-audio";
import { MOTION_TIMING, type MotionState } from "./motion-spec";
import { Scene1RejectionStage } from "./scenes/scene1-rejection-stage";
import { Scene2HandshakeStage } from "./scenes/scene2-handshake-stage";
import { Scene3ApprovalStage } from "./scenes/scene3-approval-stage";
import { Scene4DoorStage } from "./scenes/scene4-door-stage";
import { Scene5WelcomeStage } from "./scenes/scene5-welcome-stage";
import { OpeningHUD } from "./ui/opening-hud";

export function OpeningExperience() {
  const router = useRouter();
  const { locale } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [motionState, setMotionState] = useState<MotionState>("idle");
  const [knockStage, setKnockStage] = useState<number>(0);
  const [sunProgress, setSunProgress] = useState<number>(0);
  const [pressProgress, setPressProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const isHoldingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const holdStartTimeRef = useRef<number>(0);

  const currentScene: CinematicSceneConfig = CINEMA_SCENES[currentIndex];
  const isZh = locale === "zh";

  // Audio mute init
  useEffect(() => {
    setIsMuted(cinematicAudio.getIsMuted());
  }, []);

  // Enter RockyOS Universe Map smoothly with BGM fadeout
  const handleEnterHomepage = useCallback(() => {
    setMotionState("transitioning");
    cinematicAudio.fadeOutBGM(MOTION_TIMING.scene4_bgmFadeoutMs);
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {}

    setTimeout(() => {
      setMotionState("complete");
      router.push("/");
    }, 900);
  }, [router]);

  // Audio mute toggle
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = cinematicAudio.toggleMute();
    setIsMuted(muted);
  };

  // =========================================================================
  // Scene 1: Shatter Action (Anticipation -> Impact -> Follow-Through)
  // =========================================================================
  const triggerScene1Shatter = useCallback(() => {
    if (motionState === "impact" || motionState === "follow_through") return;

    setMotionState("impact");
    cinematicAudio.playRejectionShatter();
    setPressProgress(1);

    setTimeout(() => {
      setMotionState("follow_through");
    }, MOTION_TIMING.scene1_shatterImpactMs);

    setTimeout(() => {
      setPressProgress(0);
      setMotionState("idle");
      setCurrentIndex(1); // Advance to Scene 2
    }, MOTION_TIMING.scene1_shatterImpactMs + MOTION_TIMING.scene1_followThroughMs);
  }, [motionState]);

  // =========================================================================
  // Scene 2: Handshake Clasp Action (Contact -> Micro-Rebound -> Follow-Through)
  // =========================================================================
  const triggerScene2Clasp = useCallback(() => {
    if (motionState === "impact" || motionState === "follow_through") return;

    cinematicAudio.unlockAudio();
    cinematicAudio.playHandshakeClasp();
    setMotionState("impact");

    setTimeout(() => {
      setMotionState("follow_through");
    }, MOTION_TIMING.scene2_reboundMs);

    setTimeout(() => {
      setMotionState("idle");
      setCurrentIndex(2); // Advance to Scene 3
    }, MOTION_TIMING.scene2_reboundMs + MOTION_TIMING.scene2_followThroughMs);
  }, [motionState]);

  // =========================================================================
  // Scene 4: 3-Stage Door Knock Sequence (Panel 1 -> Panel 2 -> Panel 3 Unlock -> Scene 5)
  // =========================================================================
  const triggerDoorKnock = useCallback(() => {
    cinematicAudio.unlockAudio();
    setMotionState("impact");

    if (knockStage === 0) {
      // Knock 1: Robot alone (door locked)
      setKnockStage(1);
      cinematicAudio.playDoorKnock1_Robot();
      setTimeout(() => setMotionState("idle"), MOTION_TIMING.scene4_knock1TremorMs + 100);
    } else if (knockStage === 1) {
      // Knock 2: Human alone (door locked)
      setKnockStage(2);
      cinematicAudio.playDoorKnock2_Human();
      setTimeout(() => setMotionState("idle"), MOTION_TIMING.scene4_knock2TremorMs + 100);
    } else if (knockStage === 2) {
      // Knock 3: Together (door opens!)
      setKnockStage(3);
      cinematicAudio.playDoorKnock3_Together();

      setTimeout(() => {
        setMotionState("follow_through");
      }, MOTION_TIMING.scene4_knock3ImpactMs);

      // Advance to Scene 5 (Welcome RockyOS) after light flood
      setTimeout(() => {
        setMotionState("idle");
        setCurrentIndex(4); // Advance to Scene 5
      }, 1200);
    } else {
      setCurrentIndex(4);
    }
  }, [knockStage]);

  // =========================================================================
  // Continuous Physics Loop via requestAnimationFrame
  // =========================================================================
  const updateHoldPhysics = useCallback(() => {
    if (!isHoldingRef.current) return;
    const elapsed = performance.now() - holdStartTimeRef.current;

    // Scene 1: Non-linear tension accumulation (1.6s)
    if (currentScene.id === 1) {
      const progress = Math.min(elapsed / MOTION_TIMING.scene1_holdDurationMs, 1);
      setPressProgress(progress);
      cinematicAudio.updateTensionSound(progress);

      if (progress >= 1) {
        isHoldingRef.current = false;
        triggerScene1Shatter();
        return;
      }
    }

    // Scene 3: Continuous light rise (1.8s)
    if (currentScene.id === 3) {
      const progress = Math.min(elapsed / MOTION_TIMING.scene3_riseHoldMs, 1);
      setSunProgress(progress);
      cinematicAudio.playSunRiseTone(progress);

      if (progress >= 1) {
        isHoldingRef.current = false;
        setMotionState("follow_through");
        setTimeout(() => {
          setMotionState("idle");
          setCurrentIndex(3); // Advance to Scene 4
        }, MOTION_TIMING.scene3_settleMs);
        return;
      }
    }

    rafIdRef.current = requestAnimationFrame(updateHoldPhysics);
  }, [currentScene.id, triggerScene1Shatter]);

  // Pointer Down (Captures pointer & starts continuous physics)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    cinematicAudio.unlockAudio();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}

    isHoldingRef.current = true;
    holdStartTimeRef.current = performance.now();

    if (currentScene.id === 1 && motionState !== "impact" && motionState !== "follow_through") {
      setMotionState("engaging");
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateHoldPhysics);
    }

    if (currentScene.id === 3) {
      setMotionState("engaging");
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateHoldPhysics);
    }
  };

  // Pointer Up (Damped release if released early)
  const handlePointerUp = () => {
    isHoldingRef.current = false;
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    // Scene 1 early release
    if (currentScene.id === 1 && pressProgress < 1 && motionState === "engaging") {
      setPressProgress(0);
      setMotionState("idle");
      cinematicAudio.stopTensionSound();
    }

    // Scene 3 early release
    if (currentScene.id === 3 && sunProgress < 1) {
      setMotionState("idle");
    }
  };

  // Tap action on stage
  const handleStageClick = () => {
    cinematicAudio.unlockAudio();

    if (currentScene.id === 2) {
      triggerScene2Clasp();
    } else if (currentScene.id === 4) {
      triggerDoorKnock();
    } else if (currentScene.id === 5) {
      handleEnterHomepage();
    }
  };

  // Keyboard controls: Space/Enter/Esc/M/R
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      cinematicAudio.unlockAudio();

      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        if (currentScene.id === 1) triggerScene1Shatter();
        else if (currentScene.id === 2) triggerScene2Clasp();
        else if (currentScene.id === 3) {
          setSunProgress(1);
          setTimeout(() => setCurrentIndex(3), 500);
        } else if (currentScene.id === 4) triggerDoorKnock();
        else if (currentScene.id === 5) handleEnterHomepage();
      } else if (e.code === "Escape") {
        e.preventDefault();
        handleEnterHomepage();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        const muted = cinematicAudio.toggleMute();
        setIsMuted(muted);
      } else if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        setCurrentIndex(0);
        setKnockStage(0);
        setSunProgress(0);
        setPressProgress(0);
        setMotionState("idle");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentScene.id,
    pressProgress,
    triggerScene1Shatter,
    triggerScene2Clasp,
    triggerDoorKnock,
    handleEnterHomepage,
  ]);

  return (
    <div
      onClick={handleStageClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden select-none touch-none cursor-pointer transition-all duration-1000 ${
        motionState === "transitioning" || motionState === "complete"
          ? "opacity-0 scale-105 filter blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          LAYER 1 & 2: DEDICATED MODULAR SCENE STAGES
          ------------------------------------------------------------- */}
      {currentScene.id === 1 && (
        <Scene1RejectionStage
          imageSrc={currentScene.imageSrc}
          motionState={motionState}
          pressProgress={pressProgress}
        />
      )}

      {currentScene.id === 2 && (
        <Scene2HandshakeStage
          imageSrc={currentScene.imageSrc}
          motionState={motionState}
        />
      )}

      {currentScene.id === 3 && (
        <Scene3ApprovalStage
          imageSrc={currentScene.imageSrc}
          motionState={motionState}
          sunProgress={sunProgress}
        />
      )}

      {currentScene.id === 4 && (
        <Scene4DoorStage
          imageSrc={currentScene.imageSrc}
          motionState={motionState}
          knockStage={knockStage}
        />
      )}

      {currentScene.id === 5 && (
        <Scene5WelcomeStage
          imageSrc={currentScene.imageSrc}
          onEnterUniverse={handleEnterHomepage}
          isZh={isZh}
        />
      )}

      {/* -------------------------------------------------------------
          LAYER 3: MINIMAL CLEAN HUD
          ------------------------------------------------------------- */}
      <OpeningHUD
        currentScene={currentScene}
        currentIndex={currentIndex}
        knockStage={knockStage}
        isMuted={isMuted}
        isZh={isZh}
        onToggleMute={handleToggleMute}
        onSkip={handleEnterHomepage}
      />
    </div>
  );
}
