"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Play, Sparkles, QrCode } from "lucide-react";
import type { WorldNode } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";

export function GalaxyTelemetryHUD({
  activeWorld,
  onOpenWeChat,
}: {
  activeWorld: WorldNode | null;
  onOpenWeChat: () => void;
}) {
  const { locale, t } = useLanguage();

  return (
    <div className="w-full max-w-5xl mx-auto mt-4 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 select-none pointer-events-auto">
      {/* Active Celestial Node Telemetry */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-lg w-full sm:w-auto">
        <Compass className="w-4 h-4 text-cyan-400 animate-[spin_20s_linear_infinite]" />
        <div className="flex flex-col font-mono text-xs">
          <span className="text-white font-bold tracking-wider">
            {activeWorld
              ? `WARP FOCUS: ${activeWorld.name[locale] || activeWorld.name.en} [${activeWorld.order}/06]`
              : "ORBITAL TELEMETRY // 6 PARALLEL WORLDS IN COMPASS"}
          </span>
          <span className="text-[10px] text-slate-400">
            {activeWorld
              ? activeWorld.tagline[locale] || activeWorld.tagline.en
              : "SELECT ANY CELESTIAL REALM TO ENTER"}
          </span>
        </div>
      </div>

      {/* Control Actions (Opening Replay & WeChat Contact) */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <Link
          href="/opening"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-mono text-xs transition-all active:scale-95 shadow-sm"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>{t("hero.ctaPrologue") || "Opening"}</span>
        </Link>

        <button
          type="button"
          onClick={onOpenWeChat}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-slate-900/80 hover:bg-slate-900 text-slate-300 font-mono text-xs transition-all active:scale-95"
        >
          <QrCode className="w-3 h-3 text-emerald-400" />
          <span>{t("hero.ctaWeChat") || "Contact"}</span>
        </button>
      </div>
    </div>
  );
}
