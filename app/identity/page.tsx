import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World 01: Identity // Who I Am — RockyOS",
  description: "Biography, origin story, core values, and life philosophy.",
};

export default function IdentityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="text-xs font-mono text-cyan-400 mb-2">WORLD 01 // IDENTITY SYSTEM</div>
      <h1 className="text-3xl font-bold mb-4">Who I Am</h1>
      <p className="max-w-md text-slate-400 text-sm mb-6">
        The origin story, core values, and life philosophy of Rocky.
      </p>
      <a href="/" className="text-xs font-mono text-cyan-400 hover:underline">
        &larr; Back to Universe Map
      </a>
    </main>
  );
}
