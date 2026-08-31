import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 05: Connection // Human Bridge — RockyOS",
  description: "Direct transmission, WeChat QR connection, and global collaboration channels.",
};

export default function ConnectionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 05 // CONNECTION SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">Human Bridge</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        Direct transmission, WeChat connectivity, and global cross-border bridges.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
