"use client";

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { CinematicSceneConfig } from "../opening-config";

export function OpeningHUD({
  currentScene,
  currentIndex,
  knockStage,
  isMuted,
  isZh,
  onToggleMute,
  onSkip,
}: {
  currentScene: CinematicSceneConfig;
  currentIndex: number;
  knockStage: number;
  isMuted: boolean;
  isZh: boolean;
  onToggleMute: (e: React.MouseEvent) => void;
  onSkip: () => void;
}) {
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
    <>
      {/* -------------------------------------------------------------
          TOP BAR: Minimal Act Index + Mute Toggle + Skip Button
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
            onClick={onToggleMute}
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
            onClick={onSkip}
            className="text-xs font-mono text-white/40 hover:text-white tracking-widest uppercase transition-colors"
          >
            {isZh ? "跳过" : "SKIP"}
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM BAR: Cinematic Subtitle & Breath Hint
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
    </>
  );
}
