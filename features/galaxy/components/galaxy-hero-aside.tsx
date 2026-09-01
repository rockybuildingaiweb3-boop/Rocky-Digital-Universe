"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function GalaxyHeroAside() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className="flex flex-col items-start text-left z-20 pointer-events-auto max-w-[320px] sm:max-w-[360px] select-none">
      {/* 1. Small Uppercase Tracking Tag */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-slate-400 uppercase font-medium mb-2.5"
      >
        {isZh ? "欢迎来到 ROCKYOS" : "WELCOME TO ROCKYOS"}
      </motion.div>

      {/* 2. Main Display Headline matching reference */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.12] mb-3.5"
      >
        {isZh ? (
          <>
            你的个人
            <br />
            数字{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              宇宙
            </span>
          </>
        ) : (
          <>
            Your Personal
            <br />
            Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              Universe
            </span>
          </>
        )}
      </motion.h1>

      {/* 3. Elegant Explanatory Paragraph matching reference */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[11px] sm:text-xs text-slate-400 font-sans leading-relaxed mb-6"
      >
        {isZh ? (
          <>
            六大世界。一个系统。无限可能。
            <br />
            探索你的数字宇宙，构筑更卓越的自我。
          </>
        ) : (
          <>
            Six worlds. One system. Infinite possibilities.
            <br />
            Explore your digital universe and build
            <br />
            a better version of yourself.
          </>
        )}
      </motion.p>

      {/* 4. Action Explore Pill CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/identity"
          className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-slate-950/60 hover:bg-slate-900/90 border border-white/20 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)] text-white text-xs font-mono font-medium tracking-wide transition-all backdrop-blur-md active:scale-95"
        >
          <div className="w-4 h-4 rounded-full border border-cyan-400/90 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span className="text-slate-200 group-hover:text-white transition-colors">
            {isZh ? "探索平行世界" : "Explore the Worlds"}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </motion.div>
    </div>
  );
}
