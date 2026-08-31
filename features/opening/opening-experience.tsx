"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { CinematicFrame } from "./cinematic-frame";
import { FastForward, Play, RotateCcw, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function OpeningExperience() {
  const router = useRouter();
  const { locale } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [knockCount, setKnockCount] = useState<number>(0);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentScene: CinematicSceneConfig = CINEMA_SCENES[currentIndex];
  const isZh = locale === "zh";

  // Transition into Universe Map
  const handleEnterHomepage = useCallback(() => {
    setIsTransitioning(true);
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {
      // Storage resilience
    }
    setTimeout(() => {
      router.push("/");
    }, 800);
  }, [router]);

  // Handle Scene 4: 4 knocks sequence with progressive text evolution
  useEffect(() => {
    if (currentScene.id !== 4) {
      setKnockCount(0);
      setIsDoorOpen(false);
      return;
    }

    // Knock 1: immediate
    setKnockCount(1);

    // Knock 2: at 1100ms
    const t2 = setTimeout(() => setKnockCount(2), 1100);

    // Knock 3: at 2200ms
    const t3 = setTimeout(() => setKnockCount(3), 2200);

    // Knock 4: at 3300ms (Door opens, volumetric light spills)
    const t4 = setTimeout(() => {
      setKnockCount(4);
      setIsDoorOpen(true);
    }, 3300);

    // Auto transition to homepage at 5400ms
    const tFinish = setTimeout(() => {
      handleEnterHomepage();
    }, 5400);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tFinish);
    };
  }, [currentScene.id, handleEnterHomepage]);

  // Scene advance timer for Scene 1 ~ 3
  useEffect(() => {
    if (currentScene.id === 4) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev < 3 ? prev + 1 : prev));
    }, currentScene.durationMs);

    return () => clearTimeout(timer);
  }, [currentIndex, currentScene.durationMs, currentScene.id]);

  // Dynamic Scene 4 text resolution per knock
  const getScene4Text = () => {
    if (knockCount <= 1) {
      return {
        lineEn: "I questioned AI.",
        lineZh: "我曾质疑 AI。",
        step: "KNOCK 1 / 4",
      };
    } else if (knockCount === 2) {
      return {
        lineEn: "I learned to work with AI.",
        lineZh: "我学会了与 AI 合作。",
        step: "KNOCK 2 / 4",
      };
    } else if (knockCount === 3) {
      return {
        lineEn: "I began to see what we could become together.",
        lineZh: "我开始看到我们共同走向的未来。",
        step: "KNOCK 3 / 4",
      };
    } else {
      return {
        lineEn: "Welcome to RockyOS",
        lineZh: "欢迎来到 RockyOS",
        step: "WELCOME TO ROCKYOS",
      };
    }
  };

  const scene4Resolved = getScene4Text();

  const activeLine =
    currentScene.id === 4
      ? isZh
        ? scene4Resolved.lineZh
        : scene4Resolved.lineEn
      : isZh
      ? currentScene.lineZh
      : currentScene.lineEn;

  const activeSub = isZh ? currentScene.subZh : currentScene.subEn;

  return (
    <div
      className={`relative flex-1 flex flex-col items-center justify-between px-4 sm:px-8 py-6 max-w-5xl mx-auto w-full transition-all duration-1000 select-none ${
        isTransitioning
          ? "opacity-0 scale-105 filter blur-md"
          : "opacity-100 scale-100"
      }`}
    >
      {/* -------------------------------------------------------------
          TOP BAR: ACT BADGE, SCENE PROGRESSION, SKIP
          ------------------------------------------------------------- */}
      <header className="w-full flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Act Identifier */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-cyan-400 font-bold">{currentScene.actBadge}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 font-semibold tracking-wider uppercase">
            {isZh ? currentScene.actTitleZh : currentScene.actTitleEn}
          </span>
        </div>

        {/* Scene Navigation Pills */}
        <nav className="flex items-center gap-2" aria-label="Scene Navigator">
          {CINEMA_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? "w-8 sm:w-12 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)]"
                  : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              title={`Jump to Act ${scene.id}`}
              aria-label={`Jump to Act ${scene.id}`}
            />
          ))}
        </nav>

        {/* Skip Action */}
        <button
          type="button"
          onClick={handleEnterHomepage}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <span>{isZh ? "跳过 (SKIP)" : "SKIP"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* -------------------------------------------------------------
          CENTER STAGE: CINEMATIC WIDESCREEN FRAME & DUAL SUBTITLES
          ------------------------------------------------------------- */}
      <main className="my-auto flex flex-col items-center text-center py-4 w-full">
        {/* The Master Visual Frame */}
        <div className="mb-6 w-full flex justify-center">
          <CinematicFrame
            scene={currentScene}
            knockIndex={knockCount}
            isDoorOpen={isDoorOpen}
            isZh={isZh}
          />
        </div>

        {/* Primary Narrative Title (English) */}
        <h2
          key={`headline-${currentIndex}-${knockCount}`}
          className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-1.5 font-display animate-in fade-in duration-700 max-w-2xl"
        >
          {currentScene.id === 4 ? scene4Resolved.lineEn : currentScene.lineEn}
        </h2>

        {/* Secondary Native Subtitle (Chinese) */}
        <p
          key={`sub-${currentIndex}-${knockCount}`}
          className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed animate-in fade-in duration-700 mb-2"
        >
          {currentScene.id === 4 ? scene4Resolved.lineZh : currentScene.lineZh}
        </p>

        {/* Detailed Philosophical Context */}
        <p className="text-xs text-slate-500 max-w-lg font-sans">
          {activeSub}
        </p>
      </main>

      {/* -------------------------------------------------------------
          BOTTOM CONTROLS: REPLAY, BRAND IDENTIFIER, ENTER PORTAL
          ------------------------------------------------------------- */}
      <footer className="w-full flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
        {/* Replay Button */}
        <button
          type="button"
          onClick={() => {
            setCurrentIndex(0);
            setKnockCount(0);
            setIsDoorOpen(false);
          }}
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{isZh ? "重播前言" : "Replay"}</span>
        </button>

        {/* Brand Core */}
        <span className="text-[11px] font-mono tracking-widest text-slate-500">
          ROCKYOS // DIGITAL UNIVERSE
        </span>

        {/* Enter Portal Button */}
        {currentScene.id === 4 ? (
          <button
            type="button"
            onClick={handleEnterHomepage}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-pulse active:scale-95"
          >
            <span>{isZh ? "进入星系 (Enter Universe)" : "Enter Universe"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev < 3 ? prev + 1 : prev))}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-400 transition-all active:scale-95"
          >
            <span>{isZh ? "下一幕" : "Next Act"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </footer>
    </div>
  );
}
