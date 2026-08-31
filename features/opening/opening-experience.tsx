"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { PROLOGUE_SCENES, type PrologueSceneId } from "./opening-config";
import { SceneIllustrations } from "./scene-illustrations";
import { FastForward, Play, RotateCcw, ArrowRight } from "lucide-react";

export function OpeningExperience() {
  const router = useRouter();
  const { t } = useLanguage();
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [doorKnocks, setDoorKnocks] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isTransitioningHome, setIsTransitioningHome] = useState<boolean>(false);

  const currentConfig = PROLOGUE_SCENES[currentSceneIndex];
  const currentKey = currentConfig.key;

  // Complete and enter homepage
  const handleEnterHomepage = useCallback(() => {
    setIsTransitioningHome(true);
    try {
      localStorage.setItem("rockyos_prologue_seen", "true");
    } catch (e) {
      // Storage access resilience
    }
    setTimeout(() => {
      router.push("/");
    }, 600);
  }, [router]);

  // Handle scene 4 knocks
  useEffect(() => {
    if (currentConfig.id === 4) {
      setDoorKnocks(1);
      const k2 = setTimeout(() => setDoorKnocks(2), 900);
      const k3 = setTimeout(() => setDoorKnocks(3), 1800);
      const k4 = setTimeout(() => setDoorKnocks(4), 2700);
      const autoFinish = setTimeout(() => {
        handleEnterHomepage();
      }, 4600);

      return () => {
        clearTimeout(k2);
        clearTimeout(k3);
        clearTimeout(k4);
        clearTimeout(autoFinish);
      };
    } else {
      setDoorKnocks(0);
    }
  }, [currentConfig.id, handleEnterHomepage]);

  // Step advancement timer
  useEffect(() => {
    if (isPaused || currentConfig.id === 4) return;

    const timer = setTimeout(() => {
      setCurrentSceneIndex((prev) => (prev < 3 ? prev + 1 : prev));
    }, currentConfig.durationMs);

    return () => clearTimeout(timer);
  }, [currentSceneIndex, isPaused, currentConfig.durationMs, currentConfig.id]);

  return (
    <div
      className={`relative flex-1 flex flex-col items-center justify-between p-4 sm:p-8 max-w-4xl mx-auto w-full transition-opacity duration-700 ${
        isTransitioningHome ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Top Controls: Badge, Scene Navigator, Skip Button */}
      <div className="w-full flex items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-300">
          <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
          <span>{t("prologue.badge")}</span>
        </div>

        {/* Step Indicator Bullets */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {PROLOGUE_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => setCurrentSceneIndex(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSceneIndex
                  ? "w-8 sm:w-10 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                  : "w-2 sm:w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              title={`Jump to Scene ${scene.id}`}
              aria-label={`Jump to Scene ${scene.id}`}
            />
          ))}
        </div>

        {/* Skip button directly into Homepage */}
        <button
          type="button"
          onClick={handleEnterHomepage}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
        >
          <span>{t("prologue.skip")}</span>
          <FastForward className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      {/* Center Stage: Hero Illustration & Act Narratives */}
      <div className="my-auto flex flex-col items-center text-center py-6 sm:py-10 max-w-xl">
        {/* Dynamic Scene Visual */}
        <div className="mb-8">
          <SceneIllustrations
            sceneId={currentConfig.id}
            doorProgress={doorKnocks}
          />
        </div>

        {/* Act Identifier Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase"
          style={{
            backgroundColor: `${currentConfig.accentColor}20`,
            color: currentConfig.accentColor,
            border: `1px solid ${currentConfig.accentColor}40`,
          }}
        >
          <span>{t(`prologue.${currentKey}.step`)}</span>
          <span className="text-white/40">/</span>
          <span>{t(`prologue.${currentKey}.title`)}</span>
        </div>

        {/* Primary Story Line */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight font-display">
          {t(`prologue.${currentKey}.line1`)}
        </h2>

        {/* Secondary Story Context */}
        <p className="text-sm sm:text-base text-slate-400 mb-4 leading-relaxed font-sans">
          {t(`prologue.${currentKey}.line2`)}
        </p>

        {/* Sub-action ticker */}
        <div className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          {t(`prologue.${currentKey}.action`)}
        </div>
      </div>

      {/* Bottom Stage Navigation */}
      <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
        <button
          type="button"
          onClick={() => setCurrentSceneIndex(0)}
          className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t("prologue.replay")}</span>
        </button>

        {currentConfig.id === 4 ? (
          <button
            type="button"
            onClick={handleEnterHomepage}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-lg shadow-purple-600/30 animate-pulse"
          >
            <span>{t("prologue.enter")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              setCurrentSceneIndex((prev) => (prev < 3 ? prev + 1 : prev))
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-400 transition-all"
          >
            <span>Next Act</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
