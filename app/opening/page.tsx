import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prologue // The Awakening — Rocky's Digital Universe",
  description: "A 4-scene narrative on human and artificial intelligence collaboration.",
};

export default function OpeningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">PROLOGUE // SCENE STATE</div>
      <h1 className="text-3xl font-bold mb-4">Human & AI Collaboration</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        &ldquo;From questioning, to understanding, to transcending together.&rdquo;
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
