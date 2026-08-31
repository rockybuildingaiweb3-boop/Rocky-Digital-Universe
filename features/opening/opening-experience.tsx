"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMA_SCENES, type CinematicSceneConfig } from "./opening-config";
import { CinematicFrame } from "./cinematic-frame";
import { FastForward, Play, RotateCcw, ArrowRight } from "lucide-react";

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

    // Knock 2: at 1000ms
    const t2 = setTimeout(() => setKnockCount(2), 1000);

    // Knock 3: at 2000ms
    const t3 = setTimeout(() => setKnockCount(3), 2000);

    // Knock 4: at 3000ms (Door unlatches, volumetric light spills)
    const t4 = setTimeout(() => {
      setKnockCount(4);
      setIsDoorOpen(true);
    }, 3000);

    // Auto transition to homepage at 4600ms
    const tFinish = setTimeout(() => {
      handleEnterHomepage();
    }, 4600);

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
        line: isZh ? "我曾对 AI 抱有质疑。" : "I questioned AI.",
        step: "KNOCK 1 / 4",
      };
    } else if (knockCount === 2) {
      return {
        line: isZh ? "我开始学会与 AI 并肩作战。" : "I learned to work with AI.",
        step: "KNOCK 2 / 4",
      };
    } else if (knockCount === 3) {
      return {
        line: isZh ? "我看见了我们共同成为的一切。" : "I began to see what we could become together.",
        step: "KNOCK 3 / 4",
      };
    } else {
      return {
        line: isZh ? "欢迎踏入我的数字宇宙。" : "Welcome Home. Step into RockyOS.",
        step: "WELCOME HOME",
      };
    }
  };

  const scene4Resolved = getScene4Text();

  const activeLine =
    currentScene.id === 4
      ? scene4Resolved.line
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
          TOP BAR: PROLOGUE BADGE, SCENE PROGRESSION, SKIP
          ------------------------------------------------------------- */}
      <header className="w-full flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300">
          <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
          <span>{isZh ? "电影序章 // 人机共生觉醒" : "CINEMATIC PROLOGUE // AWAKENING"}</span>
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
                  ? "w-8 sm:w-12 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
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
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
        >
          <span>{isZh ? "跳过前言" : "Skip"}</span>
          <FastForward className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </header>

      {/* -------------------------------------------------------------
          CENTER STAGE: MASTER CINEMATIC FRAME & CINEMA SUBTITLES
          ------------------------------------------------------------- */}
      <main className="my-auto flex flex-col items-center text-center py-4 w-full">
        {/* The Authentic Visual Masterpiece Frame */}
        <div className="mb-6 w-full flex justify-center">
          <CinematicFrame
            scene={currentScene}
            knockIndex={knockCount}
            isDoorOpen={isDoorOpen}
          />
        </div>

        {/* Act Pill Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          <span>ACT 0{currentScene.id}</span>
          <span className="text-white/20">/</span>
          <span className="text-amber-400 font-semibold">
            {currentScene.id === 4 ? scene4Resolved.step : currentScene.tone}
          </span>
        </div>

        {/* Movie Subtitle Primary Headline */}
        <h2
          key={`headline-${currentIndex}-${knockCount}`}
          className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2 font-display animate-in fade-in duration-700 max-w-2xl"
        >
          {activeLine}
        </h2>

        {/* Subtitle Commentary */}
        <p
          key={`sub-${currentIndex}-${knockCount}`}
          className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans leading-relaxed animate-in fade-in duration-700"
        >
          {activeSub}
        </p>
      </main>

      {/* -------------------------------------------------------------
          BOTTOM CONTROLS: REPLAY & ENTER PORTAL
          ------------------------------------------------------------- */}
      <footer className="w-full flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
        {/* Replay */}
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

        {/* Advance or Enter */}
        {currentScene.id === 4 ? (
          <button
            type="button"
            onClick={handleEnterHomepage}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-[0_0_25px_rgba(245,158,11,0.5)] animate-pulse active:scale-95"
          >
            <span>{isZh ? "踏入星系世界" : "Enter Universe Map"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev < 3 ? prev + 1 : prev))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-all active:scale-95"
          >
            <span>{isZh ? "下一幕" : "Next Act"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </footer>
    </div>
  );
}
