"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Orbit } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function GalaxyHeroAside() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className="flex flex-col items-start text-left z-20 pointer-events-auto max-w-xs sm:max-w-sm lg:max-w-md select-none">
      {/* 1. Small Uppercase Tracking Tag */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-cyan-400/90 uppercase font-medium mb-3"
      >
        {isZh ? "欢迎来到 ROCKYOS" : "WELCOME TO ROCKYOS"}
      </motion.div>

      {/* 2. Main Display Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4"
      >
        {isZh ? (
          <>
            你的第二大脑。
            <br />
            重构为一座{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              宇宙。
            </span>
          </>
        ) : (
          <>
            Your Second Brain.
            <br />
            Reimagined as a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Universe.
            </span>
          </>
        )}
      </motion.h1>

      {/* 3. Subtitle Row with Highlighted Cyan Words */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs sm:text-sm font-sans tracking-wide mb-3"
      >
        {isZh ? (
          <p>
            <span className="text-cyan-400 font-medium">知识 · 项目 · 成长。</span>{" "}
            <span className="text-slate-200">万物互联。</span>
          </p>
        ) : (
          <p>
            <span className="text-cyan-400 font-medium">Knowledge. Projects. Growth.</span>{" "}
            <span className="text-slate-200">Connected.</span>
          </p>
        )}
      </motion.div>

      {/* 4. Elegant Explanatory Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-xs text-slate-400 font-sans leading-relaxed mb-6 max-w-[320px]"
      >
        {isZh ? (
          <>
            六大平行世界。一个操作系统。无限可能。
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

      {/* 5. Action Explore Pill CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/identity"
          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/40 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-white text-xs font-mono font-medium tracking-wide transition-all active:scale-95"
        >
          <div className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span>{isZh ? "探索平行世界" : "Explore the Worlds"}</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
