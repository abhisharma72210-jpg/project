'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  accent: string; // tailwind gradient classes (e.g. "from-violet-500 via-indigo-500 to-cyan-400")
  category: string;
  /** Cosmetic seed used to vary the artwork between cards. */
  seed?: string;
  className?: string;
  compact?: boolean;
  /** Live URL of the project. When provided, a real website screenshot is rendered. */
  imageUrl?: string;
};

/**
 * Project artwork. When `imageUrl` is provided, renders an auto-generated
 * screenshot of the live site (via thum.io) on top of the brand gradient
 * - so if the screenshot ever fails to load, the gradient shows through.
 * Without `imageUrl`, falls back to a stylized gradient browser mock.
 */
export default function ProjectArtwork({
  title,
  accent,
  category,
  seed = 'a',
  className = '',
  compact = false,
  imageUrl,
}: Props) {
  if (imageUrl) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden rounded-2xl border border-theme ${className}`}
      >
        {/* Gradient fallback - visible if the screenshot fails to load */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-95`} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Subtle bottom vignette only - no top sheen so the image is flush with the card top */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 100%)',
          }}
        />
      </div>
    );
  }

  const code = (seed.charCodeAt(0) + seed.charCodeAt(seed.length - 1)) % 5;

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl border border-theme ${className}`}
    >
      {/* Animated gradient backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`}
        style={{ backgroundSize: '200% 200%' }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.18), transparent 35%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Browser chrome */}
      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-glass-strong backdrop-blur-sm border border-theme" />
        </div>

        <div className="mt-4 flex-1 grid grid-cols-12 grid-rows-6 gap-2">
          {/* Hero block */}
          <div className="col-span-7 row-span-3 rounded-xl bg-black/20 backdrop-blur-md border border-theme-strong p-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="h-2 w-1/3 rounded-full bg-white/40" />
              <div className="h-3 w-3/4 rounded-full bg-white/70" />
              <div className="h-3 w-2/3 rounded-full bg-white/50" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-5 w-16 rounded-full bg-white/80" />
              <div className="h-5 w-12 rounded-full border border-white/40" />
            </div>
          </div>

          {/* Side card */}
          <div className="col-span-5 row-span-3 rounded-xl bg-white/15 backdrop-blur-md border border-theme-strong p-3 flex flex-col gap-1.5">
            <div className="h-2 w-1/2 rounded-full bg-white/60" />
            <div className="h-1.5 w-full rounded-full bg-white/40" />
            <div className="h-1.5 w-5/6 rounded-full bg-white/30" />
            <div className="mt-auto h-10 rounded-md bg-gradient-to-tr from-white/30 to-white/10" />
          </div>

          {/* Stats / cards row */}
          {[0, 1, 2, 3].map((i) => {
            const variant = (i + code) % 4;
            return (
              <div
                key={i}
                className={`col-span-3 row-span-3 rounded-xl border border-theme-strong p-2 flex flex-col gap-1.5 ${
                  variant === 0
                    ? 'bg-glass-strong backdrop-blur-md'
                    : variant === 1
                    ? 'bg-black/20 backdrop-blur-md'
                    : variant === 2
                    ? 'bg-white/15 backdrop-blur-md'
                    : 'bg-black/15 backdrop-blur-md'
                }`}
              >
                <div className="h-1.5 w-1/2 rounded-full bg-white/50" />
                <div className="h-2 w-3/4 rounded-full bg-white/70" />
                <div className="mt-auto h-1.5 w-full rounded-full bg-white/30" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
              </div>
            );
          })}
        </div>

        {!compact && (
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-fg-muted">
            <span className="truncate max-w-[60%]">{title}</span>
            <span className="text-fg-muted">{category}</span>
          </div>
        )}
      </div>

      {/* Glow overlay */}
      <div
        aria-hidden
        className="absolute -inset-1 rounded-2xl pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.25) 100%)',
        }}
      />
    </div>
  );
}
