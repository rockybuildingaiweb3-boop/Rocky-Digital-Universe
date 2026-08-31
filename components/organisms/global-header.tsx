"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { Menu, X } from "lucide-react";

export function GlobalHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [utcTime, setUtcTime] = useState<string>("00:00:00 UTC");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setUtcTime(now.toTimeString().split(" ")[0] + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: t("nav.universeMap") },
    { href: "/identity", label: t("nav.identity") },
    { href: "/capability", label: t("nav.capability") },
    { href: "/knowledge", label: t("nav.knowledge") },
    { href: "/laboratory", label: t("nav.laboratory") },
    { href: "/connection", label: t("nav.connection") },
    { href: "/growth", label: t("nav.growth") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Brand Logo & Kernel Tag */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm tracking-wide text-white">
                ROCKY<span className="text-cyan-400">OS</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                DIGITAL UNIVERSE
              </span>
            </div>
          </Link>

          {/* Telemetry Clock Pill (Hidden on Mobile) */}
          <div className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">{t("nav.status")}</span>
            <span className="text-slate-600">/</span>
            <span>{utcTime}</span>
          </div>
        </div>

        {/* Global Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "text-cyan-400 bg-white/10 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions Shell */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/connection"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
          >
            {t("nav.connect")}
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-2 font-mono text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-cyan-400 bg-white/10 font-semibold"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>{utcTime}</span>
            <Link
              href="/connection"
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium"
            >
              {t("nav.connect")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
