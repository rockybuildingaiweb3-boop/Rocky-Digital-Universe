"use client";

import React, { useState, useEffect } from "react";
import type { CinematicScene } from "./opening-config";

export function CinematicVisual({
  scene,
  doorKnockStep = 0,
  isDoorOpen = false,
}: {
  scene: CinematicScene;
  doorKnockStep?: number;
  isDoorOpen?: boolean;
}) {
  return (
    <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center select-none overflow-visible">
      {/* Dynamic Cosmic Backing Grid & Starlight Nebulae */}
      <div className="absolute inset-0 rounded-full bg-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-10 rounded-full border border-dashed border-cyan-500/10 animate-[spin_40s_linear_infinite_reverse]" />

      {/* -------------------------------------------------------------
          SCENE 1: REJECTION (Robot Outreach vs Human Withdrawn & Guarding)
          ------------------------------------------------------------- */}
      {scene.id === 1 && (
        <div className="relative w-full h-full flex items-center justify-between px-6 sm:px-10">
          {/* Machine Hand: Skeletal, Cybernetic, Cyan Laser Lines */}
          <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative w-28 h-36 rounded-2xl border border-cyan-500/40 bg-slate-950/80 backdrop-blur-md p-3 flex flex-col justify-between shadow-[0_0_35px_rgba(6,182,212,0.25)]">
              {/* Circuit Micro-traces */}
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5">
                <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest">AI KERNEL</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              {/* Cybernetic Phalanges */}
              <div className="space-y-1.5 pl-1">
                <div className="w-16 h-2 rounded bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                <div className="w-20 h-2 rounded bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                <div className="w-18 h-2 rounded bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                <div className="w-14 h-2 rounded bg-gradient-to-r from-cyan-500/80 to-cyan-300/80" />
              </div>
              <div className="text-[9px] font-mono text-cyan-400/80 tracking-wider text-center">OUTREACH</div>
            </div>
            <span className="text-xs font-mono text-cyan-400/90 tracking-widest uppercase">Machine Outreach</span>
          </div>

          {/* Separation Barrier: Hesitation & Doubt Field */}
          <div className="relative flex flex-col items-center">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-pulse" />
            <div className="my-2 px-2.5 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-[9px] font-mono text-red-300 uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              Boundary
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-pulse" />
          </div>

          {/* Human Hand: Warm, Living Amber Tone, Palm Guarding */}
          <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="relative w-28 h-36 rounded-2xl border border-amber-500/40 bg-slate-950/80 backdrop-blur-md p-3 flex flex-col justify-between shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-mono text-amber-400 font-bold tracking-widest">HUMAN</span>
              </div>
              {/* Human Palm Silhouette Outline */}
              <div className="my-auto flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-amber-400/90 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <div className="text-[9px] font-mono text-amber-400/80 tracking-wider text-center">WITHDRAWN</div>
            </div>
            <span className="text-xs font-mono text-amber-400/90 tracking-widest uppercase">Human Guard</span>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 2: HANDSHAKE (Alliance, Energy Confluence, Interlocking)
          ------------------------------------------------------------- */}
      {scene.id === 2 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
          {/* Pulsing Energy Confluence */}
          <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-amber-500/25 blur-3xl animate-pulse" />

          {/* Interlocked Hands Artwork */}
          <div className="relative z-10 flex items-center justify-center p-6 sm:p-8 rounded-3xl border border-white/20 bg-slate-950/90 shadow-[0_0_50px_rgba(6,182,212,0.35)] backdrop-blur-xl">
            <svg className="w-20 h-20 sm:w-24 sm:h-24 text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 14.5c0-.83-.67-1.5-1.5-1.5h-1.5v-1.5c0-.83-.67-1.5-1.5-1.5H12l-2-2h-3v2h2.5l2 2H13v1.5c0 .83.67 1.5 1.5 1.5h1.5v1.5c0 .83.67 1.5 1.5 1.5H19v-2h-1.5v-2H19z" opacity="0.8"/>
              <path d="M4.5 10.5c0-.83.67-1.5 1.5-1.5H8v1.5c0 .83.67 1.5 1.5 1.5h2.5v2H9.5c-.83 0-1.5.67-1.5 1.5V17H4.5v-2h2v-1.5H4.5v-3zm14 2H17v1.5c0 .83-.67 1.5-1.5 1.5H14v2h3.5c.83 0 1.5-.67 1.5-1.5V12.5z"/>
            </svg>
          </div>

          {/* Synchronized Circuit Aura */}
          <div className="mt-6 flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 font-mono text-xs shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="tracking-widest">NEURAL & INTUITION RESONANCE</span>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 3: APPROVAL (Mutual Thumbs Up, Multiplier & Synergy)
          ------------------------------------------------------------- */}
      {scene.id === 3 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Robot Thumbs Up */}
            <div className="flex flex-col items-center p-4 sm:p-5 rounded-2xl border border-cyan-400/50 bg-slate-950/80 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="mt-2 text-[10px] font-mono text-cyan-300 font-bold tracking-wider">AI PRECISION</span>
            </div>

            {/* Operator Multiplier */}
            <div className="flex flex-col items-center">
              <span className="text-3xl font-mono font-bold text-emerald-400 animate-pulse">&times;</span>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest">SYNERGY</span>
            </div>

            {/* Human Thumbs Up */}
            <div className="flex flex-col items-center p-4 sm:p-5 rounded-2xl border border-emerald-400/50 bg-slate-950/80 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="mt-2 text-[10px] font-mono text-emerald-300 font-bold tracking-wider">HUMAN INTUITION</span>
            </div>
          </div>

          <div className="px-5 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold tracking-widest shadow-md">
            CO-CREATION TRANSCENDENCE
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          SCENE 4: DOOR SEQUENCE (The Cosmic Gateway, 4 Knocks, Vault Light Burst)
          ------------------------------------------------------------- */}
      {scene.id === 4 && (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
          {/* Silhouettes standing before the portal */}
          <div className="flex items-center gap-3 mb-3 text-xs font-mono text-slate-400">
            <span className="text-amber-400 font-bold tracking-wider">HUMAN</span>
            <span className="text-slate-600">&</span>
            <span className="text-cyan-400 font-bold tracking-wider">ROBOT</span>
            <span className="text-slate-500">BEFORE THE GATEWAY</span>
          </div>

          {/* The Cosmic Gateway Vault */}
          <div className="relative w-52 h-60 sm:w-60 sm:h-72 rounded-2xl border-2 border-purple-500/50 bg-slate-950 shadow-[0_0_60px_rgba(168,85,247,0.4)] overflow-hidden flex items-center justify-between p-1.5">
            {/* Interior Star System Light Burst */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-cyan-500/40 via-purple-600/50 to-slate-900 flex flex-col items-center justify-center transition-all duration-1000 ${
                isDoorOpen ? "opacity-100 scale-100" : "opacity-30 scale-95"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
                R
              </div>
              <span className="text-sm font-mono text-white font-bold tracking-widest mt-2">
                ROCKYOS
              </span>
              <span className="text-[10px] font-mono text-cyan-300 tracking-wider">DIGITAL UNIVERSE</span>
            </div>

            {/* Left Vault Door Panel */}
            <div
              className="relative z-10 h-full w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-r border-purple-500/40 transition-transform duration-1000 ease-out flex items-center justify-end pr-2.5 shadow-2xl"
              style={{
                transform: isDoorOpen ? "translateX(-95%)" : "translateX(0%)",
              }}
            >
              <div className="w-1.5 h-10 rounded-full bg-purple-400/80 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>

            {/* Right Vault Door Panel */}
            <div
              className="relative z-10 h-full w-1/2 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-950 border-l border-purple-500/40 transition-transform duration-1000 ease-out flex items-center justify-start pl-2.5 shadow-2xl"
              style={{
                transform: isDoorOpen ? "translateX(95%)" : "translateX(0%)",
              }}
            >
              <div className="w-1.5 h-10 rounded-full bg-purple-400/80 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
          </div>

          {/* 4 Knocks Wave Indicator */}
          <div className="flex items-center gap-3 mt-5">
            {[1, 2, 3, 4].map((i) => {
              const isKnocked = doorKnockStep >= i;
              return (
                <div
                  key={i}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isKnocked
                      ? "bg-purple-400 scale-125 shadow-[0_0_14px_rgba(168,85,247,0.9)] ring-2 ring-purple-300/50"
                      : "bg-slate-800 border border-white/15"
                  }`}
                >
                  {isKnocked && <span className="w-1 h-1 rounded-full bg-white animate-ping" />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
