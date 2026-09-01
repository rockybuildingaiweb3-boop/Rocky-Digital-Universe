"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorldNode } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";

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
  const nodeName = node.name[locale] || node.name.en;
  const nodeTagline = node.tagline[locale] || node.tagline.en;

  // Distinct depth multipliers for each world node to create true 3D orbital parallax
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
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
      onMouseEnter={() => onHover(node)}
      onMouseLeave={onLeave}
    >
      <Link
        href={node.route}
        className="group relative flex flex-col items-center focus:outline-none"
      >
        {/* 1. Celestial Gravitational Corona Halo */}
        <motion.div
          animate={{
            scale: isActive ? 1.45 : 1,
            opacity: isActive ? 0.75 : 0.25,
          }}
          transition={{ duration: 0.4 }}
          className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: node.accentColor }}
        />

        {/* 2. Outer Orbital Gyroscope Ring on Hover */}
        <motion.div
          animate={{
            scale: isActive ? 1.25 : 1,
            opacity: isActive ? 1 : 0,
            rotate: isActive ? 180 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed pointer-events-none"
          style={{ borderColor: node.accentColor }}
        />

        {/* 3. Celestial Planet Portal Core Body */}
        <motion.div
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 flex flex-col items-center justify-center transition-colors shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "#070b14",
            borderColor: isActive ? node.accentColor : "rgba(255,255,255,0.18)",
            boxShadow: isActive
              ? `0 0 35px ${node.accentColor}90, inset 0 0 15px ${node.accentColor}40`
              : "0 8px 24px rgba(0,0,0,0.7)",
          }}
        >
          <span
            className="font-mono text-xs sm:text-sm font-bold tracking-wider"
            style={{ color: node.accentColor }}
          >
            {node.order}
          </span>
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
            REALM
          </span>
        </motion.div>

        {/* 4. Spatial Floating Tooltip Pill */}
        <motion.div
          animate={{
            y: isActive ? 0 : 2,
            opacity: isActive ? 1 : 0.85,
          }}
          className="mt-2.5 flex flex-col items-center pointer-events-none"
        >
          <span
            className="px-3 py-1 rounded-xl bg-slate-950/90 border text-xs font-mono font-bold text-white shadow-xl whitespace-nowrap transition-colors"
            style={{
              borderColor: isActive ? `${node.accentColor}80` : "rgba(255,255,255,0.12)",
              color: isActive ? "#ffffff" : "#cbd5e1",
            }}
          >
            {nodeName}
          </span>
          <span className="text-[10px] font-sans text-slate-400 opacity-80 mt-0.5 whitespace-nowrap hidden sm:block">
            {nodeTagline}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
