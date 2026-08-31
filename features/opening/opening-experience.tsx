"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { CINEMATIC_TIMELINE, type CinematicScene } from "./opening-config";
import { CinematicVisual } from "./scene-illustrations";
import { FastForward, Play, RotateCcw, ArrowRight } from "lucide-react";

export function OpeningExperience() {
  const router = useRouter();
  const { locale, t } = useLanguage();

  // State Machine States
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [doorKnockCount, setDoorKnockCount] = useState<number>(0);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentScene: CinematicScene = CINEMATIC_TIMELINE[currentStepIndex];

  // Local storage save and transition to homepage
  const handleCompleteAndEnter = useCallback(() => {
    setIsTransitioning(true);
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {
      // Storage access resilience
    }
    setTimeout(() => {
      router.push("/");
    }, 750);
  }, [router]);

  // Handle Scene 4: The 4 Knocks and progressive text evolution
  useEffect(() => {
    if (currentScene.id !== 4) {
      setDoorKnockCount(0);
      setIsDoorOpen(false);
      return;
    }

    // Knock 1: immediate
    setDoorKnockCount(1);

    // Knock 2: at 900ms
    const timerK2 = setTimeout(() => {
      setDoorKnockCount(2);
    }, 900);

    // Knock 3: at 1800ms
    const timerK3 = setTimeout(() => {
      setDoorKnockCount(3);
    }, 1800);

    // Knock 4: at 2700ms - Door unlocks and opens
    const timerK4 = setTimeout(() => {
      setDoorKnockCount(4);
      setIsDoorOpen(true);
    }, 2700);

    // Final scene complete -> transition into homepage
    const timerFinish = setTimeout(() => {
      handleCompleteAndEnter();
    }, 4200);

    return () => {
      clearTimeout(timerK2);
      clearTimeout(timerK3);
      clearTimeout(timerK4);
      clearTimeout(timerFinish);
    };
  }, [currentScene.id, handleCompleteAndEnter]);

  // Timeline step advancement for Scenes 1 to 3
  useEffect(() => {
    if (currentScene.id === 4) return;

    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => (prev < 3 ? prev + 1 : prev));
    }, currentScene.durationMs);

    return () => clearTimeout(timer);
  }, [currentStepIndex, currentScene.durationMs, currentScene.id]);

  // Resolve dynamic line for Scene 4 door sequence
  const getScene4Text = () => {
    if (doorKnockCount <= 1) {
      return {
        line1: locale === "zh" ? "我曾对 AI 抱有质疑。" : "I questioned AI.",
        knockLabel: "KNOCK 1 / 4",
      };
    } else if (doorKnockCount === 2) {
      return {
        line1: locale === "zh" ? "我开始学会与 AI 并肩作战。" : "I learned to work with AI.",
        knockLabel: "KNOCK 2 / 4",
      };
    } else {
      return {
        line1: locale === "zh" ? "我看见了我们共同成为的一切。" : "I began to see what we could become together.",
        knockLabel: doorKnockCount >= 4 ? "GATEWAY UNLOCKED" : "KNOCK 3 / 4",
      };
    }
  };

  const scene4Text = getScene4Text();

  // Resolved titles based on current act
  const currentLine =
    currentScene.id === 4
      ? scene4Text.line1
      : currentScene.id === 1
      ? locale === "zh"
        ? "我曾对 AI 抱有质疑。"
        : "I questioned AI."
      : currentScene.id === 2
      ? locale === "zh"
        ? "我开始学会与 AI 并肩作战。"
        : "I learned to work with AI."
      : locale === "zh"
      ? "携手同行，我们创造出彼此独自无法企及的可能。"
      : "Together, we built more than either of us could alone.";

  const currentSubtitle =
    currentScene.id === 4
      ? locale === "zh"
        ? "门扉轻启，极光破晓。欢迎踏入我的数字宇宙。"
        : "The door unlocks. Step into my digital universe."
      : currentScene.id === 1
      ? locale === "zh"
        ? "怀疑捷径，捍卫人类的独创技艺与心智防线。"
        : "Skeptical of shortcuts. Guarding human craft."
      : currentScene.id === 2
      ? locale === "zh"
        ? "不是替代，而是拓宽认知边界的心智放大器。"
        : "Not as a replacement, but as an intellectual amplifier."
      : locale === "zh"
      ? "以人类直觉为罗盘，以机器极致精度为引擎。"
      : "Human intuition multiplied by machine precision.";

  return (
    <div
      className={`relative flex-1 flex flex-col items-center justify-between p-4 sm:p-8 max-w-4xl mx-auto w-full transition-all duration-700 ${
        isTransitioning
          ? "opacity-0 scale-105 filter blur-sm"
          : "opacity-100 scale-100"
      }`}
      role="region"
      aria-label="Opening Narrative Prologue"
    >
      {/* Top Header: Badge, Scene Bullets, Skip Button */}
      <header className="w-full flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        {/* Prologue Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300">
          <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
          <span>{locale === "zh" ? "前言剧场 // 人机演进" : "PROLOGUE // THE AWAKENING"}</span>
        </div>

        {/* Step Indicator Bullets */}
        <nav className="flex items-center gap-2" aria-label="Prologue Act Selector">
          {CINEMATIC_TIMELINE.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setCurrentStepIndex(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                idx === currentStepIndex
                  ? "w-8 sm:w-10 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              title={`Jump to Act ${step.id}`}
              aria-label={`Jump to Act ${step.id}`}
            />
          ))}
        </nav>

        {/* Skip to Universe Map */}
        <button
          type="button"
          onClick={handleCompleteAndEnter}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
          aria-label="Skip prologue and enter universe map"
        >
          <span>{locale === "zh" ? "跳过前言" : "Skip"}</span>
          <FastForward className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </header>

      {/* Center Stage: Cinematic Graphic & Narrative Text */}
      <main className="my-auto flex flex-col items-center text-center py-6 sm:py-8 max-w-2xl">
        {/* Dynamic Graphic Container */}
        <div className="mb-6">
          <CinematicVisual
            scene={currentScene}
            doorKnockStep={doorKnockCount}
            isDoorOpen={isDoorOpen}
          />
        </div>

        {/* Act Number & Title Tag */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase transition-colors"
          style={{
            backgroundColor: `${currentScene.accentColor}20`,
            color: currentScene.accentColor,
            border: `1px solid ${currentScene.accentColor}40`,
          }}
        >
          <span>ACT 0{currentScene.id}</span>
          <span className="text-white/30">/</span>
          <span>
            {currentScene.id === 1
              ? locale === "zh"
                ? "审视与隔阂"
                : "REJECTION"
              : currentScene.id === 2
              ? locale === "zh"
                ? "理解与交融"
                : "HANDSHAKE"
              : currentScene.id === 3
              ? locale === "zh"
                ? "共生与超越"
                : "APPROVAL"
              : scene4Text.knockLabel}
          </span>
        </div>

        {/* Primary Story Text */}
        <h2
          key={`line1-${currentStepIndex}-${doorKnockCount}`}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight font-display animate-in fade-in duration-500"
          aria-live="polite"
        >
          {currentLine}
        </h2>

        {/* Subtitle Description */}
        <p
          key={`line2-${currentStepIndex}-${doorKnockCount}`}
          className="text-sm sm:text-base text-slate-400 mb-6 max-w-xl leading-relaxed font-sans animate-in fade-in duration-500"
        >
          {currentSubtitle}
        </p>
      </main>

      {/* Bottom Stage Navigation Controls */}
      <footer className="w-full flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
        {/* Replay Button */}
        <button
          type="button"
          onClick={() => {
            setCurrentStepIndex(0);
            setDoorKnockCount(0);
            setIsDoorOpen(false);
          }}
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-200 transition-colors"
          aria-label="Replay from beginning"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{locale === "zh" ? "重播前言" : "Replay"}</span>
        </button>

        {/* Enter / Next Button */}
        {currentScene.id === 4 ? (
          <button
            type="button"
            onClick={handleCompleteAndEnter}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-lg shadow-purple-600/40 animate-pulse active:scale-95"
            aria-label="Enter RockyOS Universe Map"
          >
            <span>{locale === "zh" ? "踏入星系世界" : "Enter Universe Map"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              setCurrentStepIndex((prev) => (prev < 3 ? prev + 1 : prev))
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-all active:scale-95"
            aria-label="Advance to next act"
          >
            <span>{locale === "zh" ? "下一幕" : "Next Act"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </footer>
    </div>
  );
}
