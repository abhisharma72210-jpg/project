'use client';

import { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, type LucideIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { services } from '@/data/portfolio';

export default function Services() {
  return (
    <section id="services" className="relative">
      <GradientBlob className="top-10 -left-32" color="rgba(236,72,153,0.25)" size={500} />
      <GradientBlob
        className="bottom-10 -right-32"
        color="rgba(34,211,238,0.18)"
        size={460}
        delay={0.3}
      />
      <div className="section">
        <SectionHeader
          eyebrow="What I do"
          title={
            <>
              Areas I <span className="grad-text">specialize in</span>.
            </>
          }
          description="Most projects mix a few of these. Here’s the work I take on most often."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              index={i}
              title={s.title}
              description={s.description}
              icon={s.icon}
              bullets={s.bullets}
              accent={s.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  accent: string;
};

function ServiceCard({
  index,
  title,
  description,
  icon: Icon,
  bullets,
  accent,
}: CardProps) {
  const ref = useRef<HTMLElement>(null);

  /**
   * Cursor-following spotlight — sets --mx / --my CSS variables directly on the
   * DOM node so no React re-render happens on mousemove. The radial-gradient
   * inside the card consumes those variables, making the glow track the cursor
   * regardless of which edge the cursor enters from.
   */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  // Sync position on first enter so the spotlight never flashes from a stale spot.
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      handleMouseMove(e);
    },
    [handleMouseMove],
  );

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.04 * index }}
      whileHover={{ y: -6 }}
      className="group relative glass p-7 sm:p-8 overflow-hidden h-full flex flex-col"
    >
      {/* --------- Decorative layers --------- */}

      {/* Cursor-following spotlight (violet → cyan). */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(440px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.22) 0%, rgba(34, 211, 238, 0.10) 30%, transparent 60%)',
        }}
      />

      {/* Edge-light — only the border glows, where the cursor is. */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.14), transparent 60%)',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Bottom service-color bleed — fades in on hover, anchors the card visually. */}
      <div
        aria-hidden
        className={`absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t ${accent} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none`}
        style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Giant number watermark in the corner — adds depth, very subtle. */}
      <span
        aria-hidden
        className="absolute top-5 right-6 font-display font-bold text-6xl sm:text-7xl tabular-nums text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-500 leading-none select-none"
      >
        {num}
      </span>

      {/* --------- Content (relative so it stacks above the decorations) --------- */}
      <div className="relative flex flex-col flex-grow">
        {/* Icon — bigger, prominent gradient, with a colored glow underneath */}
        <div className="relative inline-flex">
          <div
            aria-hidden
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
          />
          <div
            className={`relative inline-flex w-14 h-14 rounded-2xl items-center justify-center bg-gradient-to-br ${accent} text-white shadow-lg ring-1 ring-white/15 group-hover:scale-105 transition-transform duration-500`}
          >
            <Icon className="w-6 h-6" strokeWidth={2.2} />
          </div>
        </div>

        {/* Title with animated gradient underline */}
        <div className="mt-6">
          <h3 className="font-display font-semibold text-xl text-white leading-snug">
            {title}
          </h3>
          <div
            aria-hidden
            className={`mt-2 h-[2px] w-10 rounded-full bg-gradient-to-r ${accent} group-hover:w-24 transition-all duration-500`}
          />
        </div>

        {/* Description */}
        <p className="mt-4 text-white/70 text-sm leading-relaxed">{description}</p>

        {/* Bullets — accent-colored gradient checkmarks */}
        <ul className="mt-6 space-y-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2.5 text-sm text-white/80"
            >
              <span
                className={`shrink-0 inline-flex w-5 h-5 items-center justify-center rounded-md bg-gradient-to-br ${accent} text-white shadow-sm ring-1 ring-white/10`}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Bottom accent + arrow that slides on hover */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/35 font-medium">
            <span
              aria-hidden
              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${accent}`}
            />
            Service {num}
          </div>
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] text-white/60 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
