import React from "react";
import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/60 backdrop-blur-sm py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
        {/* Left Brand Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-slate-300 font-semibold">
            Rocky&apos;s Digital Universe
          </span>
          <span className="hidden sm:inline text-slate-700">/</span>
          <span>Personal Operating System (2024–2034)</span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <Link href="/opening" className="hover:text-cyan-400 transition-colors">
            Prologue
          </Link>
          <Link href="/growth" className="hover:text-cyan-400 transition-colors">
            Changelog
          </Link>
          <Link href="/connection" className="hover:text-cyan-400 transition-colors">
            WeChat QR
          </Link>
          <a
            href="https://github.com/rockybuildingaiweb3-boop/Rocky-Digital-Universe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-slate-400">Phase 1 Foundation Edition</span>
        </div>
      </div>
    </footer>
  );
}
