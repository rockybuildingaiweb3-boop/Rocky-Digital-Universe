"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorldNode } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";
import {
  User,
  Zap,
  BookOpen,
  FlaskConical,
  Sprout,
  Share2,
  ArrowRight,
} from "lucide-react";

export function CelestialPlanetNode({
  node,
  isActive,
  onHover,
  onLeave,
  cursorOffset,
}: {
  node: WorldNode;
  isActive: boolean;
  onHover: (node: WorldNode) => void;
  onLeave: () => void;
  cursorOffset: { x: number; y: number };
}) {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  // World specific icons matching master design
  const getIcon = () => {
    switch (node.id) {
      case "identity":
        return <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "capability":
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "knowledge":
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "laboratory":
        return <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "growth":
        return <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case "connection":
        return <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      default:
        return <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
    }
  };

  // Specific subtitle labels matching master mockup
  const getActionLabel = () => {
    switch (node.id) {
      case "identity":
        return isZh ? "认识自己 →" : "Know Yourself →";
      case "capability":
        return isZh ? "突破极限 →" : "Do More →";
      case "knowledge":
        return isZh ? "洞悉深度 →" : "See Deeper →";
      case "laboratory":
        return isZh ? "自由探索 →" : "Explore Freely →";
      case "growth":
        return isZh ? "持续进化 →" : "Keep Evolving →";
      case "connection":
        return isZh ? "携手共创 →" : "Build Together →";
      default:
        return "Enter →";
    }
  };

  // 3D Orbital Parallax Factor
  const depthFactor = (parseInt(node.order, 10) % 3 + 1) * 7;

  return (
    <motion.div
      style={{
        left: `${node.coordinates.x}%`,
        top: `${node.coordinates.y}%`,
      }}
      animate={{
        x: cursorOffset.x * depthFactor,
        y: cursorOffset.y * depthFactor,
      }}
      transition={{ ease: "linear", duration: 0.12 }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 select-none"
      onMouseEnter={() => onHover(node)}
      onMouseLeave={onLeave}
    >
      <Link
        href={node.route}
        className="group relative flex items-center gap-3 focus:outline-none"
      >
        {/* 1. Luminous Energy Orb (Circular Planet Sphere) */}
        <div className="relative flex items-center justify-center">
          {/* Coronal Glow Halo */}
          <motion.div
            animate={{
              scale: isActive ? 1.5 : 1.1,
              opacity: isActive ? 0.85 : 0.45,
            }}
            transition={{ duration: 0.35 }}
            className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-xl pointer-events-none"
            style={{ backgroundColor: node.accentColor }}
          />

          {/* Outer Pulsing Corona Ring on Hover */}
          <motion.div
            animate={{
              scale: isActive ? 1.25 : 1,
              opacity: isActive ? 0.9 : 0,
              rotate: isActive ? 90 : 0,
            }}
            transition={{ duration: 0.6 }}
            className="absolute w-18 h-18 sm:w-24 sm:h-24 rounded-full border border-dashed pointer-events-none"
            style={{ borderColor: node.accentColor }}
          />

          {/* Spherical Glowing Body */}
          <motion.div
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: `${node.accentColor}25`,
              borderColor: isActive ? "#ffffff" : node.accentColor,
              boxShadow: isActive
                ? `0 0 35px ${node.accentColor}, inset 0 0 20px ${node.accentColor}`
                : `0 0 20px ${node.accentColor}80, inset 0 0 12px ${node.accentColor}50`,
            }}
          >
            {/* Specular Highlight Arc */}
            <div className="absolute top-1 left-2 w-5 h-2.5 rounded-full bg-white/40 blur-[1px] -rotate-45 pointer-events-none" />
            <div className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {getIcon()}
            </div>
          </motion.div>
        </div>

        {/* 2. Side Label Typography Pill (Matching Master UI Position) */}
        <div className="flex flex-col text-left pointer-events-none whitespace-nowrap">
          <span
            className="text-xs sm:text-sm font-bold tracking-wide transition-colors"
            style={{
              color: isActive ? "#ffffff" : "#f1f5f9",
              textShadow: isActive ? `0 0 15px ${node.accentColor}` : "none",
            }}
          >
            {node.name[locale] || node.name.en}
          </span>
          <span
            className="text-[10px] sm:text-[11px] font-mono tracking-wider opacity-80 group-hover:opacity-100 transition-opacity"
            style={{ color: node.accentColor }}
          >
            {getActionLabel()}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
