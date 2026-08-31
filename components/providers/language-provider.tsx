"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/types";
import translations from "@/data/i18n.json";

type TranslationTree = typeof translations;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("rockyos_locale") as Locale | null;
    if (saved && (saved === "en" || saved === "zh" || saved === "de" || saved === "fr" || saved === "ja")) {
      setLocaleState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-CN" : saved === "ja" ? "ja-JP" : saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("rockyos_locale", newLocale);
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : newLocale === "ja" ? "ja-JP" : newLocale;
  };

  /**
   * Safe nested key resolver, e.g. t('nav.universeMap')
   */
  const t = (path: string): string => {
    const parts = path.split(".");
    const currentLangDict = (translations as Record<string, any>)[locale] || translations.en;
    
    let current: any = currentLangDict;
    for (const part of parts) {
      if (current && typeof current === "object" && part in current) {
        current = current[part];
      } else {
        // Fallback to English
        let fallback: any = translations.en;
        for (const fbPart of parts) {
          if (fallback && typeof fallback === "object" && fbPart in fallback) {
            fallback = fallback[fbPart];
          } else {
            return path;
          }
        }
        return typeof fallback === "string" ? fallback : path;
      }
    }
    return typeof current === "string" ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
