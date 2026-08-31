import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 02: Capability // What I Can Build — RockyOS",
  description: "Flagship engineering projects, full-stack architecture, and skills matrix.",
};

export default function CapabilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 02 // CAPABILITY SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">What I Can Build</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        Flagship projects, technical architectures, and verified engineering execution.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
