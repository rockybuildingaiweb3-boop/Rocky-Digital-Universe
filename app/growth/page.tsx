import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 06: Growth // The 10-Year Journey — RockyOS",
  description: "Chronological milestone timeline and living changelog across 2024–2034.",
};

export default function GrowthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 06 // GROWTH SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">The Journey</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        A decade of compounding growth, milestones, reflections, and version updates.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
