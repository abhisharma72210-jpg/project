'use client';

import { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { services } from '@/data/portfolio';

export default function Services() {
  return (
    <section id="services" className="relative">
      <GradientBlob className="top-10 -left-32" color="rgba(236,72,153,0.25)" size={500} />
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
};

function ServiceCard({ index, title, description, icon: Icon, bullets }: CardProps) {
  const ref = useRef<HTMLElement>(null);

  /**
   * Cursor-tracking spotlight.
   * We read mouse coordinates from the native event and write them straight to CSS
   * custom properties on the card element. No React state → no re-renders → no jank.
   * The radial-gradient inside the card consumes --mx / --my so it follows the cursor
   * exactly, no matter which edge the cursor entered from.
   */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  /**
   * When the cursor first enters, sync position synchronously too — otherwise the
   * spotlight would flash briefly from its last known location (or from 0,0) before
   * the first mousemove fires.
   */
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

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
      className="group relative glass p-7 overflow-hidden"
    >
      {/* Layer 1 — cursor-following spotlight (soft violet → cyan).
          Sits above the card background, beneath the content. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.22) 0%, rgba(34, 211, 238, 0.10) 30%, transparent 60%)',
        }}
      />

      {/* Layer 2 — fine animated border that lights up where the cursor is.
          Uses the same --mx / --my variables so the highlight follows the cursor. */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 60%)',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Layer 3 — content (relative so it stacks above the gradients). */}
      <div className="relative">
        <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-white">
          <Icon className="w-5 h-5" />
        </span>

        <h3 className="mt-5 font-display font-semibold text-xl text-white">
          {title}
        </h3>
        <p className="mt-2 text-white/70 text-sm leading-relaxed">{description}</p>

        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-white/75">
              <span className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 text-white">
                <Check className="w-3 h-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
