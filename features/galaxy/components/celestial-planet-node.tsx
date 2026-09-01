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

  // World-specific icons matching target reference
  const getIcon = () => {
    switch (node.id) {
      case "identity":
        return <User className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      case "capability":
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      case "knowledge":
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      case "laboratory":
        return <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      case "growth":
        return <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      case "connection":
        return <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
      default:
        return <User className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.8]" />;
    }
  };

  // Specific action label with arrow matching target reference
  const getActionLabel = () => {
    switch (node.id) {
      case "identity":
        return isZh ? "认识自己 →" : "Know Yourself  →";
      case "capability":
        return isZh ? "突破极限 →" : "Do More  →";
      case "knowledge":
        return isZh ? "洞悉深度 →" : "See Deeper  →";
      case "laboratory":
        return isZh ? "自由探索 →" : "Explore Freely  →";
      case "growth":
        return isZh ? "持续进化 →" : "Keep Evolving  →";
      case "connection":
        return isZh ? "携手共创 →" : "Build Together  →";
      default:
        return "Enter  →";
    }
  };

  const isLeftPlacement = node.labelPlacement === "left";
  const depthFactor = (parseInt(node.order, 10) % 3 + 1) * 6;

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
        className={`group relative flex items-center gap-3.5 focus:outline-none ${
          isLeftPlacement ? "flex-row-reverse text-right" : "flex-row text-left"
        }`}
      >
        {/* 1. LUMINOUS PLANETARY SPHERE */}
        <div className="relative flex items-center justify-center">
          {/* Outer Coronal Glow Atmosphere */}
          <motion.div
            animate={{
              scale: isActive ? 1.6 : 1.2,
              opacity: isActive ? 0.95 : 0.55,
            }}
            transition={{ duration: 0.35 }}
            className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: node.accentColor }}
          />

          {/* Rotating Dashed Corona on Hover */}
          <motion.div
            animate={{
              scale: isActive ? 1.3 : 1,
              opacity: isActive ? 0.9 : 0,
              rotate: isActive ? 90 : 0,
            }}
            transition={{ duration: 0.6 }}
            className="absolute w-20 h-20 sm:w-26 sm:h-26 rounded-full border border-dashed pointer-events-none"
            style={{ borderColor: node.accentColor }}
          />

          {/* Spherical Planetary Body */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.94 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: `${node.accentColor}25`,
              borderColor: isActive ? "#ffffff" : node.accentColor,
              boxShadow: isActive
                ? `0 0 45px ${node.accentColor}, inset 0 0 25px ${node.accentColor}`
                : `0 0 25px ${node.accentColor}90, inset 0 0 15px ${node.accentColor}70`,
            }}
          >
            {/* Top-Left Specular Highlight Arc */}
            <div className="absolute top-1 left-2 w-6 h-3 rounded-full bg-white/50 blur-[1px] -rotate-45 pointer-events-none" />
            <div className="relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {getIcon()}
            </div>
          </motion.div>
        </div>

        {/* 2. SPATIAL TYPOGRAPHY BLOCK WITH GEO COORDINATES */}
        <div
          className={`flex flex-col pointer-events-none whitespace-nowrap ${
            isLeftPlacement ? "items-end text-right" : "items-start text-left"
          }`}
        >
          {/* Planet Title */}
          <span
            className="text-sm sm:text-base font-bold tracking-wide transition-colors"
            style={{
              color: isActive ? "#ffffff" : "#f8fafc",
              textShadow: isActive ? `0 0 15px ${node.accentColor}` : "0 2px 10px rgba(0,0,0,0.85)",
            }}
          >
            {node.name[locale] || node.name.en}
          </span>

          {/* Action Tagline */}
          <span
            className="text-[11px] sm:text-xs font-mono tracking-wider transition-colors my-0.5"
            style={{ color: isActive ? "#ffffff" : "#cbd5e1" }}
          >
            {getActionLabel()}
          </span>

          {/* Latitude & Longitude Coordinates */}
          {node.geoCoordinates && (
            <div className="flex flex-col font-mono text-[9px] sm:text-[10px] text-slate-400/90 leading-tight">
              <span>{node.geoCoordinates.lat}</span>
              <span>{node.geoCoordinates.lng}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
