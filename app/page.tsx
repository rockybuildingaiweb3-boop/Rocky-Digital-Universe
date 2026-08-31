"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { GalaxyConstellation } from "@/features/galaxy/galaxy-constellation";
import { WeChatModal } from "@/features/connection/wechat-modal";
import { QrCode, Play, Sparkles, Compass } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  // Check first-time visitor -> route to prologue
  useEffect(() => {
    try {
      const seen = localStorage.getItem("rockyos_prologue_seen");
      const urlParams = new URLSearchParams(window.location.search);
      if (!seen && !urlParams.get("direct")) {
        router.replace("/opening");
      }
    } catch (e) {
      // Storage resilience
    }
  }, [router]);

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-16 max-w-6xl mx-auto w-full">
      {/* Ambient Deep Space Nebulae */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Header Section */}
      <section className="flex flex-col items-center text-center mb-6 sm:mb-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{t("hero.badge")}</span>
        </div>

        {/* Master Vision Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          {t("hero.titleLine1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
            {t("hero.titleLine2")}
          </span>
        </h1>

        {/* Mission Statement */}
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
          {t("hero.mission")}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs w-full sm:w-auto">
          <Link
            href="/opening"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t("hero.ctaPrologue")}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsWeChatOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-emerald-500/50 text-slate-200 transition-all active:scale-95"
          >
            <QrCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("hero.ctaWeChat")}</span>
          </button>
        </div>
      </section>

      {/* Universe Map: Celestial Constellation Canvas */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white tracking-wider">UNIVERSE MAP // THE SIX PARALLEL WORLDS</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            INTERACTIVE CELESTIAL GRAPH
          </span>
        </div>

        <GalaxyConstellation />
      </section>

      {/* Interactive WeChat Modal */}
      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
      />
    </div>
  );
}
