"use client";

import React from "react";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "en"
            ? "text-cyan-400 font-bold bg-white/10"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "zh"
            ? "text-cyan-400 font-bold bg-white/10"
            : "text-slate-400 hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
}
