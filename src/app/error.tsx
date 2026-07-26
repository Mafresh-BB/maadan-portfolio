'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root Boundary Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full flex flex-col gap-6">
        <div className="flex items-center justify-center gap-2 text-rose-500 font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          Runtime Exception
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter uppercase text-[#fafafa]">
          Something Went <span className="text-[#a1a1aa]">Wrong.</span>
        </h1>
        <p className="text-[#a1a1aa] font-mono text-xs max-w-sm mx-auto leading-relaxed border border-white/5 bg-white/2 p-3 rounded-lg break-all">
          {error.message || 'An unexpected error occurred in the system core.'}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 self-center px-6 py-2.5 rounded-xl bg-white text-[#050505] font-mono text-[10px] font-semibold tracking-wider uppercase hover:opacity-90 transition-all duration-300"
        >
          Reset Application State
        </button>
      </div>
    </div>
  );
}
