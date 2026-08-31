"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function GrowthPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono">
        <TrendingUp className="w-3.5 h-3.5" />
        <span>WORLD 06 // GROWTH SYSTEM</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
        {t("nav.growth")}
      </h1>
      <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
        {t("subpage.underConstruction")}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-all"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t("subpage.backHome")}</span>
      </Link>
    </main>
  );
}
