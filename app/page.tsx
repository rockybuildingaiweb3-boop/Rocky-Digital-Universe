import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rocky's Digital Universe // Personal Operating System",
  description: "A 10-year personal operating system to document growth, showcase capabilities, and share knowledge.",
};

const WORLDS = [
  { id: "01", name: "Identity", tagline: "Who I Am", route: "/identity", desc: "Origin story, core values, and life philosophy." },
  { id: "02", name: "Capability", tagline: "What I Can Build", route: "/capability", desc: "Flagship projects, full-stack architecture, and verified execution." },
  { id: "03", name: "Knowledge", tagline: "What I Learn", route: "/knowledge", desc: "Mental models, technical writings, and public knowledge synthesis." },
  { id: "04", name: "Laboratory", tagline: "Where Ideas Play", route: "/laboratory", desc: "AI Studio prompts, autonomous agent experiments, and micro-tools." },
  { id: "05", name: "Connection", tagline: "Human Bridge", route: "/connection", desc: "Direct transmission, WeChat connectivity, and global networks." },
  { id: "06", name: "Growth", tagline: "The 10-Yr Journey", route: "/growth", desc: "Chronological milestones, reflections, and living changelog." },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto">
      {/* Telemetry Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-wider">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>ROCKYOS v1.0 // KERNEL RUNNING</span>
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Not a Portfolio. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
          My Personal Operating System.
        </span>
      </h1>

      {/* Subtitle / Mission */}
      <p className="max-w-xl text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
        The living digital universe of Rocky. Structured into Six Core Systems across a 10-year horizon (2024–2034).
      </p>

      {/* Opening Prologue CTA */}
      <div className="mb-10">
        <Link
          href="/opening"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 text-xs font-mono text-slate-300 transition-all"
        >
          <span>▶ Watch Human-AI Prologue</span>
        </Link>
      </div>

      {/* Six Worlds Navigation Wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full text-left font-mono text-sm">
        {WORLDS.map((world) => (
          <Link
            key={world.id}
            href={world.route}
            className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-cyan-400 text-xs">WORLD {world.id}</span>
              <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">&rarr;</span>
            </div>
            <div className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
              {world.name}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-sans">{world.tagline}</div>
            <div className="text-[11px] text-slate-500 mt-2 font-sans line-clamp-2">{world.desc}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
