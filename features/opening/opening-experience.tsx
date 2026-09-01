"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { InteractiveOpeningStage } from "./interactive-opening-stage";
import { cinematicAudio } from "@/lib/cinematic-audio";
import { MOTION_TIMING, type MotionState } from "./motion-spec";
import { Volume2, VolumeX } from "lucide-react";

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
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sunTimerRef = useRef<NodeJS.Timeout | null>(null);

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
  // Pointer Down (Handles Scene 1 & 3 Pressing / Anticipation)
  // =========================================================================
  const handlePointerDown = () => {
    cinematicAudio.unlockAudio();
    isHoldingRef.current = true;

    // Scene 1: Anticipation & Pressure Accumulation (1.6s)
    if (currentScene.id === 1 && motionState !== "impact" && motionState !== "follow_through") {
      setMotionState("engaging");
      if (holdTimerRef.current) clearInterval(holdTimerRef.current);
      let p = 0;
      holdTimerRef.current = setInterval(() => {
        if (!isHoldingRef.current) {
          clearInterval(holdTimerRef.current!);
          return;
        }
        p += 0.06;
        setPressProgress(Math.min(p, 1));
        cinematicAudio.updateTensionSound(p);

        if (p >= 1) {
          clearInterval(holdTimerRef.current!);
          triggerScene1Shatter();
        }
      }, 95);
    }

    // Scene 3: Hold to rise the light
    if (currentScene.id === 3) {
      setMotionState("engaging");
      if (sunTimerRef.current) clearInterval(sunTimerRef.current);
      sunTimerRef.current = setInterval(() => {
        if (!isHoldingRef.current) {
          clearInterval(sunTimerRef.current!);
          return;
        }
        setSunProgress((prev) => {
          const next = Math.min(prev + 0.08, 1);
          cinematicAudio.playSunRiseTone(next);
          if (next >= 1) {
            clearInterval(sunTimerRef.current!);
            setMotionState("follow_through");
            setTimeout(() => {
              setMotionState("idle");
              setCurrentIndex(3); // Advance to Scene 4
            }, MOTION_TIMING.scene3_settleMs);
          }
          return next;
        });
      }, 90);
    }
  };

  // Pointer Up (Cancels hold if released early with damping)
  const handlePointerUp = () => {
    isHoldingRef.current = false;

    // Scene 1 release early
    if (currentScene.id === 1 && pressProgress < 1 && motionState === "engaging") {
      if (holdTimerRef.current) clearInterval(holdTimerRef.current);
      setPressProgress(0);
      setMotionState("idle");
      cinematicAudio.stopTensionSound();
    }

    // Scene 3 release early
    if (currentScene.id === 3 && sunProgress < 1) {
      if (sunTimerRef.current) clearInterval(sunTimerRef.current);
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

  // Dynamic Scene 4 narrative state
  const getScene4State = () => {
    if (knockStage <= 1) {
      return {
        lineEn: "I questioned AI.",
        lineZh: "我曾质疑 AI。",
        hintEn: "· robot alone cannot open · tap to assist (2/3) ·",
        hintZh: "· 机器无法独力开门 · 点击协助 (2/3) ·",
      };
    } else if (knockStage === 2) {
      return {
        lineEn: "I learned to work with AI.",
        lineZh: "我学会了与 AI 合作。",
        hintEn: "· human alone cannot open · tap together (3/3) ·",
        hintZh: "· 人类无法独力开启 · 双方合力 (3/3) ·",
      };
    } else {
      return {
        lineEn: "I began to see what we could become together.",
        lineZh: "我开始看到我们共同走向的未来。",
        hintEn: "· door opens into the cosmos ·",
        hintZh: "· 门扉敞开 · 踏入星门 ·",
      };
    }
  };

  const scene4Resolved = getScene4State();

  const activeLineEn =
    currentScene.id === 4 ? scene4Resolved.lineEn : currentScene.lineEn;
  const activeLineZh =
    currentScene.id === 4 ? scene4Resolved.lineZh : currentScene.lineZh;
  const activeHint =
    currentScene.id === 4
      ? isZh
        ? scene4Resolved.hintZh
        : scene4Resolved.hintEn
      : isZh
      ? currentScene.hintZh
      : currentScene.hintEn;

  return (
    <div
      onClick={handleStageClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={`fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden select-none touch-none cursor-pointer transition-all duration-1000 ${
        motionState === "transitioning" || motionState === "complete"
          ? "opacity-0 scale-105 filter blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          LAYER 1 & 2: PURE 1080P CINEMATIC CANVAS & EMOTIONAL LIGHTING
          ------------------------------------------------------------- */}
      <InteractiveOpeningStage
        scene={currentScene}
        motionState={motionState}
        knockStage={knockStage}
        sunProgress={sunProgress}
        pressProgress={pressProgress}
        onEnterUniverse={handleEnterHomepage}
        isZh={isZh}
      />

      {/* -------------------------------------------------------------
          LAYER 3: MINIMAL CLEAN TOP BAR (Subtle Index + Tiny Mute & Skip)
          ------------------------------------------------------------- */}
      <div
        className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-center justify-between z-30 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Minimal Act Index */}
        <div className="font-mono text-xs text-white/50 tracking-widest uppercase">
          {currentScene.actBadge}
        </div>

        {/* Minimal Controls */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Subtle Mute Button */}
          <button
            type="button"
            onClick={handleToggleMute}
            className="p-2 rounded-full text-white/50 hover:text-white transition-colors active:scale-95"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/30" />
            ) : (
              <Volume2 className="w-4 h-4 text-white/70 animate-pulse" />
            )}
          </button>

          {/* Minimal Skip Button */}
          <button
            type="button"
            onClick={handleEnterHomepage}
            className="text-xs font-mono text-white/40 hover:text-white tracking-widest uppercase transition-colors"
          >
            {isZh ? "跳过" : "SKIP"}
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: CINEMATIC POETIC SUBTITLE & DELICATE BREATH HINT
          (Hidden on Scene 5 to keep the cosmic cockpit clean)
          ------------------------------------------------------------- */}
      {currentScene.id !== 5 && (
        <div className="absolute bottom-0 inset-x-0 pb-12 sm:pb-16 flex flex-col items-center text-center z-30 pointer-events-none px-6">
          {/* Primary Cinematic Subtitle Line (English) */}
          <h1
            key={`title-en-${currentIndex}-${knockStage}`}
            className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-sans drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-4xl"
          >
            {activeLineEn}
          </h1>

          {/* Secondary Native Subtitle (Chinese) */}
          <p
            key={`title-zh-${currentIndex}-${knockStage}`}
            className="text-sm sm:text-lg text-slate-300 font-sans font-normal mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-3xl"
          >
            {activeLineZh}
          </p>

          {/* Delicate Breath Hint */}
          <p
            key={`hint-${currentIndex}-${knockStage}`}
            className="text-xs font-mono text-white/40 tracking-widest mt-6 animate-pulse"
          >
            {activeHint}
          </p>
        </div>
      )}
    </div>
  );
}
