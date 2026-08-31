export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
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
      <p className="max-w-xl text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
        The minimal runnable skeleton of Rocky&apos;s Digital Universe. 
        Engineered with Next.js 14, TypeScript, and Tailwind CSS.
      </p>

      {/* Six Worlds Minimal Nodes (Wireframe) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full text-left font-mono text-sm">
        {[
          { id: "01", name: "Identity", desc: "Who I Am" },
          { id: "02", name: "Capability", desc: "What I Can Build" },
          { id: "03", name: "Knowledge", desc: "What I Learn" },
          { id: "04", name: "Laboratory", desc: "Where Ideas Play" },
          { id: "05", name: "Connection", desc: "Human Bridge" },
          { id: "06", name: "Growth", desc: "The Journey" },
        ].map((world) => (
          <div
            key={world.id}
            className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all"
          >
            <div className="text-cyan-400 text-xs mb-1">WORLD {world.id}</div>
            <div className="font-semibold text-slate-200">{world.name}</div>
            <div className="text-xs text-slate-500 mt-1">{world.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
