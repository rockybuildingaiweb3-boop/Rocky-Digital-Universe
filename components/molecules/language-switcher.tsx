"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import type { Locale } from "@/types";
import { Globe, Check } from "lucide-react";

const LANGUAGES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "zh", label: "中文", native: "简体中文" },
  { code: "de", label: "DE", native: "Deutsch" },
  { code: "fr", label: "FR", native: "Français" },
  { code: "ja", label: "日本語", native: "日本語" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Primary Desktop Pill (Quick toggle between EN / 中文, plus dropdown trigger) */}
      <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`px-1.5 py-0.5 rounded transition-colors ${
            locale === "en"
              ? "text-cyan-400 font-bold bg-white/10"
              : "text-slate-400 hover:text-white"
          }`}
          aria-label="Switch to English"
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
          aria-label="切换至简体中文"
        >
          中文
        </button>

        {/* Global Globe Icon Trigger for All 5 Languages */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="ml-1 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
          title="More languages / 更多语言"
          aria-expanded={isOpen}
          aria-label="Select from all 5 languages"
        >
          <Globe className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 5-Language Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/15 bg-slate-900/95 backdrop-blur-md shadow-2xl p-1.5 z-50 font-mono text-xs">
            <div className="px-2.5 py-1.5 text-[10px] text-slate-400 uppercase tracking-wider border-b border-white/10 mb-1">
              Select Language / 语言
            </div>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                  locale === lang.code
                    ? "bg-cyan-500/15 text-cyan-300 font-semibold"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{lang.native}</span>
                {locale === lang.code && (
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
