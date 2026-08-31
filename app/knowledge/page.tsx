import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 03: Knowledge // What I Learn — RockyOS",
  description: "Synthesized mental models, engineering deep-dives, and reading vault.",
};

export default function KnowledgePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 03 // KNOWLEDGE SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">What I Learn</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        Mental models, technical writings, and public knowledge synthesis.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
