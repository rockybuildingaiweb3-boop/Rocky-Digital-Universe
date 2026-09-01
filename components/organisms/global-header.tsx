"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { LanguageSwitcher } from "@/components/molecules/language-switcher";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { Search, Orbit, Menu, X } from "lucide-react";

export function GlobalHeader() {
  const pathname = usePathname();
  const { locale, t } = useLanguage();
  const [utcTime, setUtcTime] = useState<string>("06:24");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, "0");
      const mins = String(now.getUTCMinutes()).padStart(2, "0");
      setUtcTime(`${hours}:${mins}`);
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
    { href: "/", label: "Home" },
    { href: "/identity", label: "Worlds" },
    { href: "/connection", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-transparent backdrop-blur-md select-none">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-8 h-15">
        {/* 1. Left: RockyOS Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
            <Orbit className="w-4 h-4 text-cyan-300 animate-[spin_40s_linear_infinite]" />
          </div>
          <span className="font-extrabold text-base tracking-wide text-white">
            Rocky<span className="text-cyan-400">OS</span>
          </span>
        </Link>

        {/* 2. Center: Navigation Links with Active Cyan Indicator */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 text-slate-300 hover:text-white transition-colors group"
              >
                <span className={isActive ? "text-white font-medium" : "text-slate-400"}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Search, Language, Theme, UTC Mission Clock */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Icon */}
          <button
            type="button"
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* UTC Mission Badge */}
          <div className="hidden lg:flex flex-col items-end px-2.5 py-1 rounded-xl border border-white/10 bg-slate-950/60 font-mono text-[10px]">
            <span className="text-cyan-300 font-bold tracking-wider">
              UTC {utcTime}
            </span>
            <span className="text-[9px] text-slate-500">Mission Day 812</span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-4 space-y-2.5 font-mono text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-xl transition-colors ${
                  isActive
                    ? "text-cyan-400 bg-cyan-500/10 font-bold border border-cyan-500/20"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>UTC {utcTime}</span>
            <span className="text-cyan-400">Mission Day 812</span>
          </div>
        </div>
      )}
    </header>
  );
}
