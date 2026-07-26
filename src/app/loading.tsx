export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        {/* Radial spinner */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-text-secondary animate-pulse">
          Loading Systems
        </span>
      </div>
    </div>
  );
}
