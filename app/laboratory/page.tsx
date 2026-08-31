import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 04: Laboratory // Where Ideas Play — RockyOS",
  description: "AI Studio prompt library, interactive demos, and experimental prototypes.",
};

export default function LaboratoryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 04 // LABORATORY SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">Where Ideas Play</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        AI Studio prompts, autonomous agent experiments, and interactive micro-tools.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
