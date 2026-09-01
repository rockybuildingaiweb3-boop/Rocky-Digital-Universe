"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { InteractiveOpeningStage } from "./interactive-opening-stage";
import { cinematicAudio } from "@/lib/cinematic-audio";
import {
  Volume2,
  VolumeX,
  FastForward,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Hand,
} from "lucide-react";

export function OpeningExperience() {
  const router = useRouter();
  const { locale } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [knockStage, setKnockStage] = useState<number>(0);
  const [sunProgress, setSunProgress] = useState<number>(0);
  const [pressProgress, setPressProgress] = useState<number>(0);
  const [isShattering, setIsShattering] = useState<boolean>(false);
  const [isHandshakeShaking, setIsHandshakeShaking] = useState<boolean>(false);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
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
    setIsTransitioning(true);
    cinematicAudio.fadeOutBGM(900);
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {}

    setTimeout(() => {
      router.push("/");
    }, 900);
  }, [router]);

  // Audio mute toggle
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = cinematicAudio.toggleMute();
    setIsMuted(muted);
  };

  // Scene 1: Shatter Action after 1.8s Hold
  const triggerScene1Shatter = useCallback(() => {
    if (isShattering) return;
    cinematicAudio.playRejectionShatter();
    setIsShattering(true);
    setPressProgress(1);

    setTimeout(() => {
      setIsShattering(false);
      setPressProgress(0);
      setCurrentIndex(1);
    }, 700);
  }, [isShattering]);

  // Scene 2: Handshake Clasp Action
  const triggerScene2Clasp = useCallback(() => {
    if (isHandshakeShaking) return;
    cinematicAudio.unlockAudio();
    cinematicAudio.playHandshakeClasp();
    setIsHandshakeShaking(true);

    setTimeout(() => {
      setIsHandshakeShaking(false);
      setCurrentIndex(2);
    }, 800);
  }, [isHandshakeShaking]);

  // Scene 4: 3-Stage Knock Action
  const triggerDoorKnock = useCallback(() => {
    cinematicAudio.unlockAudio();

    if (knockStage === 0) {
      // Knock 1: Robot alone (door locked)
      setKnockStage(1);
      cinematicAudio.playDoorKnock1_Robot();
    } else if (knockStage === 1) {
      // Knock 2: Human alone (door locked)
      setKnockStage(2);
      cinematicAudio.playDoorKnock2_Human();
    } else if (knockStage === 2) {
      // Knock 3: Together (door opens!)
      setKnockStage(3);
      setIsDoorOpen(true);
      cinematicAudio.playDoorKnock3_Together();

      // Automatically transition to Universe Map after epic swell
      setTimeout(() => {
        handleEnterHomepage();
      }, 3400);
    } else {
      handleEnterHomepage();
    }
  }, [knockStage, handleEnterHomepage]);

  // Pointer Down (Handles Scene 1 Hold & Scene 3 Sunrise Hold)
  const handlePointerDown = () => {
    cinematicAudio.unlockAudio();
    isHoldingRef.current = true;

    // Scene 1: Hold to accumulate tension (1.8s)
    if (currentScene.id === 1 && !isShattering) {
      if (holdTimerRef.current) clearInterval(holdTimerRef.current);
      let p = 0;
      holdTimerRef.current = setInterval(() => {
        if (!isHoldingRef.current) {
          clearInterval(holdTimerRef.current!);
          return;
        }
        p += 0.055; // Reaches 1.0 in ~1.8s
        setPressProgress(Math.min(p, 1));
        cinematicAudio.updateTensionSound(p);

        if (p >= 1) {
          clearInterval(holdTimerRef.current!);
          triggerScene1Shatter();
        }
      }, 90);
    }

    // Scene 3: Hold to rise the sun
    if (currentScene.id === 3) {
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
            setTimeout(() => {
              setCurrentIndex(3);
            }, 600);
          }
          return next;
        });
      }, 90);
    }
  };

  // Pointer Up (Cancels hold if released early)
  const handlePointerUp = () => {
    isHoldingRef.current = false;

    // Scene 1 release early
    if (currentScene.id === 1 && pressProgress < 1 && !isShattering) {
      if (holdTimerRef.current) clearInterval(holdTimerRef.current);
      setPressProgress(0);
      cinematicAudio.stopTensionSound();
    }

    // Scene 3 release early
    if (currentScene.id === 3 && sunProgress < 1) {
      if (sunTimerRef.current) clearInterval(sunTimerRef.current);
    }
  };

  // Tap action on stage
  const handleStageClick = () => {
    cinematicAudio.unlockAudio();

    if (currentScene.id === 2) {
      triggerScene2Clasp();
    } else if (currentScene.id === 4) {
      triggerDoorKnock();
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
          setTimeout(() => setCurrentIndex(3), 600);
        } else if (currentScene.id === 4) triggerDoorKnock();
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
        setIsDoorOpen(false);
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
        subEn: "Robot knocks alone. The gateway remains silent and sealed.",
        subZh: "机器独行敲击，大门纹丝不动。需要人类的参与。",
        ctaEn: "Human, tap to knock (2/3)",
        ctaZh: "人类加入 · 敲击第二声 (2/3)",
      };
    } else if (knockStage === 2) {
      return {
        lineEn: "I learned to work with AI.",
        lineZh: "我学会了与 AI 合作。",
        subEn: "Human knocks alone. The lock still resists without synergy.",
        subZh: "人类独自敲击，大门依然锁死。唯有双方合力方能解锁。",
        ctaEn: "Knock together to open portal (3/3)",
        ctaZh: "双方合力 · 敲击开启大门 (3/3)",
      };
    } else {
      return {
        lineEn: "Welcome to RockyOS",
        lineZh: "欢迎来到 RockyOS",
        subEn: "The gateway unlocks. Step into the personal digital universe.",
        subZh: "极光漫灌，门扉大开。欢迎踏入我的个人数字宇宙。",
        ctaEn: "Enter Universe Map",
        ctaZh: "踏入星系主页",
      };
    }
  };

  const scene4Resolved = getScene4State();

  const activeLineEn =
    currentScene.id === 4 ? scene4Resolved.lineEn : currentScene.lineEn;
  const activeLineZh =
    currentScene.id === 4 ? scene4Resolved.lineZh : currentScene.lineZh;
  const activeSub =
    currentScene.id === 4
      ? isZh
        ? scene4Resolved.subZh
        : scene4Resolved.subEn
      : isZh
      ? currentScene.subZh
      : currentScene.subEn;

  return (
    <div
      onClick={handleStageClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={`fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden select-none touch-none cursor-pointer transition-all duration-1000 ${
        isTransitioning
          ? "opacity-0 scale-105 filter blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          FULLSCREEN HIGH-DEFINITION STAGE (1920x1080 Native Render)
          ------------------------------------------------------------- */}
      <InteractiveOpeningStage
        scene={currentScene}
        knockStage={knockStage}
        sunProgress={sunProgress}
        pressProgress={pressProgress}
        isShattering={isShattering}
        isHandshakeShaking={isHandshakeShaking}
        isDoorOpen={isDoorOpen}
        isZh={isZh}
      />

      {/* -------------------------------------------------------------
          TOP BAR: ACT NUMBER, SCENE INDICATORS, MUTE & SKIP
          ------------------------------------------------------------- */}
      <div
        className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-center justify-between z-30 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Act Badge */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-400 font-bold flex items-center gap-2 shadow-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentScene.actBadge}</span>
            <span className="text-white/30">·</span>
            <span className="text-slate-200">
              {isZh ? currentScene.actTitleZh : currentScene.actTitleEn}
            </span>
          </div>
        </div>

        {/* Scene Navigation Pills */}
        <div className="hidden sm:flex items-center gap-2">
          {CINEMA_SCENES.map((scene, idx) => (
            <div
              key={scene.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? "w-10 bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.95)]"
                  : idx < currentIndex
                  ? "w-4 bg-white/70"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Top Controls: Audio + Skip */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Mute/Unmute Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className="p-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-all active:scale-95 shadow-xl"
            title={isMuted ? "Unmute Audio (BGM & SFX)" : "Mute Audio (BGM & SFX)"}
            aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            )}
          </button>

          {/* Skip Button */}
          <button
            type="button"
            onClick={handleEnterHomepage}
            className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200 hover:text-white hover:border-white/40 transition-all flex items-center gap-2 active:scale-95 shadow-xl"
          >
            <span>{isZh ? "跳过 (SKIP)" : "SKIP"}</span>
            <FastForward className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM STAGE: BILINGUAL SUBTITLES & PHYSICAL ACTION PILL
          ------------------------------------------------------------- */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-12 flex flex-col items-center text-center z-30 pointer-events-none">
        {/* Primary Narrative Title (English) */}
        <h1
          key={`title-en-${currentIndex}-${knockStage}`}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 font-display drop-shadow-[0_4px_30px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-4xl"
        >
          {activeLineEn}
        </h1>

        {/* Secondary Native Subtitle (Chinese) */}
        <p
          key={`title-zh-${currentIndex}-${knockStage}`}
          className="text-lg sm:text-2xl text-slate-100 font-sans font-semibold mb-3 drop-shadow-[0_2px_16px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-3xl"
        >
          {activeLineZh}
        </p>

        {/* Narrative Context Note */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans mb-6 hidden sm:block drop-shadow-lg">
          {activeSub}
        </p>

        {/* Physical Action Button Indicator */}
        <div className="pointer-events-auto mt-1">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-black/85 backdrop-blur-2xl border border-amber-400/50 text-xs sm:text-sm font-mono text-amber-300 font-bold shadow-[0_0_35px_rgba(245,158,11,0.35)] animate-pulse hover:bg-black/95 transition-all active:scale-95">
            <Hand className="w-4 h-4 text-amber-400" />
            <span>
              {currentScene.id === 1
                ? isZh
                  ? "按住屏幕 · 蓄压碎裂破冰 (Hold 1.8s)"
                  : "Press & Hold Screen to Shatter (1.8s)"
                : currentScene.id === 4
                ? isZh
                  ? scene4Resolved.ctaZh
                  : scene4Resolved.ctaEn
                : isZh
                ? currentScene.actionPromptZh
                : currentScene.actionPromptEn}
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
              [SPACE / ENTER]
            </span>
          </div>
        </div>

        {/* Bottom System Identity */}
        <div className="mt-8 flex items-center justify-between w-full max-w-5xl text-[10px] font-mono text-slate-400 border-t border-white/10 pt-3">
          <span>ROCKYOS PROLOGUE // 2024 — 2034</span>
          <span>PRESS ESC TO SKIP · M TO MUTE · R TO REPLAY</span>
        </div>
      </div>
    </div>
  );
}
