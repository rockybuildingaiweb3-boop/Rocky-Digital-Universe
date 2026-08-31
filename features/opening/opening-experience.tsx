"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { CinematicFullscreenCanvas } from "./cinematic-fullscreen-canvas";
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
  const [knockCount, setKnockCount] = useState<number>(0);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [shakeTrigger, setShakeTrigger] = useState<number>(0);

  const currentScene: CinematicSceneConfig = CINEMA_SCENES[currentIndex];
  const isZh = locale === "zh";

  // Audio mute state init
  useEffect(() => {
    setIsMuted(cinematicAudio.getIsMuted());
  }, []);

  // Enter RockyOS Universe Map
  const handleEnterHomepage = useCallback(() => {
    setIsTransitioning(true);
    cinematicAudio.stopAmbient();
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {}

    setTimeout(() => {
      router.push("/");
    }, 900);
  }, [router]);

  // Audio toggler
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = cinematicAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      cinematicAudio.startAmbient();
    }
  };

  // User interactive advance engine (Click / Touch / Keyboard)
  const handleUserAdvance = useCallback(() => {
    // Start ambient on first interaction
    if (!hasInteracted) {
      setHasInteracted(true);
      cinematicAudio.startAmbient();
    }

    // Trigger visual micro vibration
    setShakeTrigger((prev) => prev + 1);
    setTimeout(() => setShakeTrigger(0), 160);

    // Scene 1 ~ 3: Advance to next scene
    if (currentScene.id < 4) {
      cinematicAudio.playInteractPulse();
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    // Scene 4: Door knocking sequence (Knock 1 -> 2 -> 3 -> 4)
    if (currentScene.id === 4) {
      if (knockCount < 3) {
        const nextKnock = knockCount + 1;
        setKnockCount(nextKnock);
        cinematicAudio.playDoorKnock(nextKnock);
      } else if (knockCount === 3) {
        // Final knock: Door opens
        setKnockCount(4);
        setIsDoorOpen(true);
        cinematicAudio.playDoorKnock(4);
        cinematicAudio.playVaultOpenSwell();

        // Automatically walk into Universe Map after dramatic swell
        setTimeout(() => {
          handleEnterHomepage();
        }, 3200);
      } else {
        // Door already open -> Direct enter
        handleEnterHomepage();
      }
    }
  }, [hasInteracted, currentScene.id, knockCount, handleEnterHomepage]);

  // Keyboard navigation support: Space / Enter / Esc / M / R
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleUserAdvance();
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
        setKnockCount(0);
        setIsDoorOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleUserAdvance, handleEnterHomepage]);

  // Resolve dynamic texts for Scene 4 based on knock progression
  const getScene4Text = () => {
    if (knockCount <= 1) {
      return {
        lineEn: "I questioned AI.",
        lineZh: "我曾质疑 AI。",
        badge: "KNOCK 1 / 4",
        subEn: "Opportunities ahead. The journey begins with questioning.",
        subZh: "心存敬畏与质疑，敲响通往未来的第一声序曲。",
        ctaEn: "Tap to knock again (2/4)",
        ctaZh: "点击大门 · 敲响第二声 (2/4)",
      };
    } else if (knockCount === 2) {
      return {
        lineEn: "I learned to work with AI.",
        lineZh: "我学会了与 AI 合作。",
        badge: "KNOCK 2 / 4",
        subEn: "Opportunities together. Shared purpose unlocks synergy.",
        subZh: "放下偏见，与算力并肩探索心智的无尽可能。",
        ctaEn: "Tap to knock again (3/4)",
        ctaZh: "点击大门 · 敲响第三声 (3/4)",
      };
    } else if (knockCount === 3) {
      return {
        lineEn: "I began to see what we could become together.",
        lineZh: "我开始看到我们共同走向的未来。",
        badge: "KNOCK 3 / 4",
        subEn: "Limitless horizon. The lock turns on the celestial threshold.",
        subZh: "极光漫过门隙，星际引力场锁扣正在解开。",
        ctaEn: "Final knock to open gateway (4/4)",
        ctaZh: "最后轻叩 · 推开终章之门 (4/4)",
      };
    } else {
      return {
        lineEn: "Welcome to RockyOS",
        lineZh: "欢迎来到 RockyOS",
        badge: "PORTAL OPEN",
        subEn: "A future beyond imagination. Step into the digital universe.",
        subZh: "门扉大开，星辰浩瀚。欢迎踏入我的个人数字宇宙。",
        ctaEn: "Enter Universe Map",
        ctaZh: "立即进入星系主页",
      };
    }
  };

  const scene4Resolved = getScene4Text();

  return (
    <div
      onClick={handleUserAdvance}
      className={`fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden select-none cursor-pointer transition-all duration-1000 ${
        isTransitioning
          ? "opacity-0 scale-105 filter blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          BACKGROUND: FULLSCREEN CINEMATIC CANVAS (100vw x 100vh)
          ------------------------------------------------------------- */}
      <CinematicFullscreenCanvas
        scene={currentScene}
        knockIndex={knockCount}
        isDoorOpen={isDoorOpen}
        isZh={isZh}
        shakeTrigger={shakeTrigger}
      />

      {/* -------------------------------------------------------------
          TOP BAR: ACT NUMBER, PROGRESSION PILLS, AUDIO, SKIP
          ------------------------------------------------------------- */}
      <div
        className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-center justify-between z-30 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Act Badge */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentScene.actBadge}</span>
            <span className="text-white/40">·</span>
            <span className="text-slate-200">
              {isZh ? currentScene.actTitleZh : currentScene.actTitleEn}
            </span>
          </div>
        </div>

        {/* Scene Progress Indicators */}
        <div className="hidden sm:flex items-center gap-2">
          {CINEMA_SCENES.map((scene, idx) => (
            <div
              key={scene.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? "w-10 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : idx < currentIndex
                  ? "w-4 bg-white/60"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Action Controls: Audio + Skip */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Audio Mute/Unmute */}
          <button
            type="button"
            onClick={handleToggleMute}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-all active:scale-95"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
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
            className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 active:scale-95"
          >
            <span>{isZh ? "跳过 (SKIP)" : "SKIP"}</span>
            <FastForward className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM STAGE: DUAL-LANGUAGE SUBTITLES & INTERACTION PROMPT
          ------------------------------------------------------------- */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-12 flex flex-col items-center text-center z-30 pointer-events-none">
        {/* Primary Narrative Title (English) */}
        <h1
          key={`narrative-en-${currentIndex}-${knockCount}`}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 font-display drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-4xl"
        >
          {currentScene.id === 4 ? scene4Resolved.lineEn : currentScene.lineEn}
        </h1>

        {/* Secondary Subtitle (Chinese) */}
        <p
          key={`narrative-zh-${currentIndex}-${knockCount}`}
          className="text-lg sm:text-2xl text-slate-200 font-sans font-medium mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-3xl"
        >
          {currentScene.id === 4 ? scene4Resolved.lineZh : currentScene.lineZh}
        </p>

        {/* Philosophical Context Note */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans mb-6 hidden sm:block drop-shadow-md">
          {currentScene.id === 4 ? (isZh ? scene4Resolved.subZh : scene4Resolved.subEn) : isZh ? currentScene.subZh : currentScene.subEn}
        </p>

        {/* Dynamic Interactive Call-to-Action Pill */}
        <div className="pointer-events-auto mt-2">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-mono text-amber-300 font-bold shadow-[0_0_30px_rgba(245,158,11,0.2)] animate-pulse hover:bg-black/90 transition-all active:scale-95">
            <Hand className="w-4 h-4" />
            <span>
              {currentScene.id === 4
                ? isZh
                  ? scene4Resolved.ctaZh
                  : scene4Resolved.ctaEn
                : isZh
                ? currentScene.interactivePromptZh
                : currentScene.interactivePromptEn}
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
              [SPACE / ENTER]
            </span>
          </div>
        </div>

        {/* Bottom System Identity */}
        <div className="mt-8 flex items-center justify-between w-full max-w-5xl text-[10px] font-mono text-slate-500 border-t border-white/10 pt-3">
          <span>ROCKYOS PROLOGUE // 2024 — 2034</span>
          <span>PRESS ESC TO SKIP · M TO MUTE · R TO REPLAY</span>
        </div>
      </div>
    </div>
  );
}
