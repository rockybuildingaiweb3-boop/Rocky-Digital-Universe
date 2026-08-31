"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/types";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("rockyos_locale") as Locale | null;
    if (saved) {
      setLocaleState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-CN" : saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("rockyos_locale", newLocale);
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : newLocale;
  };

  // Minimal key resolver placeholder
  const t = (key: string) => key;

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
