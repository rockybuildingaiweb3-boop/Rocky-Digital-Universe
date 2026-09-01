"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SPRING_CONFIGS } from "../engine/motion-curves";

export function Scene5WelcomeStage({
  imageSrc,
  onEnterUniverse,
  isZh,
}: {
  imageSrc: string;
  onEnterUniverse?: () => void;
  isZh: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden select-none"
    >
      <Image
        src={imageSrc}
        alt="Scene 5: Welcome RockyOS"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Center Interactive Entrance CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-col items-center gap-3.5 pointer-events-auto mt-16 sm:mt-24"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.05, boxShadow: "0 0 45px rgba(6,182,212,0.6)" }}
          whileTap={{ scale: 0.95 }}
          transition={SPRING_CONFIGS.interactiveCTA}
          onClick={onEnterUniverse}
          className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-cyan-500/25 hover:bg-cyan-500/40 text-white font-mono text-sm tracking-wider uppercase backdrop-blur-md border border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-colors"
        >
          <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
          <span>{isZh ? "踏入星系主页" : "Enter Universe"}</span>
          <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        <span className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
          {isZh ? "点击按钮或任意区域进入" : "Click anywhere to explore"}
        </span>
      </motion.div>
    </motion.div>
  );
}
