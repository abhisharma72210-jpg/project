'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { testimonials, type Testimonial } from '@/data/portfolio';

const AUTO_MS = 6500;

export default function Testimonials() {
  const count = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const next = () => setActive((i) => (i + 1) % count);
  const prev = () => setActive((i) => (i - 1 + count) % count);

  // Compute signed offset (-N…+N) for each card relative to the active one,
  // so we can show the left + center + right cards in a 3D carousel.
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <section id="testimonials" className="relative">
      <GradientBlob className="top-10 -right-32" color="rgba(139,92,246,0.32)" size={520} />
      <GradientBlob className="bottom-10 -left-20" color="rgba(34,211,238,0.24)" size={420} delay={0.3} />

      <div className="section">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What clients say after <span className="grad-text">we ship</span>.
            </>
          }
          description="Recent words from founders, CEOs and authors I’ve had the privilege to work with."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Stage */}
          <div
            className="relative mx-auto h-[460px] sm:h-[440px] flex items-center justify-center"
            style={{ perspective: '1400px' }}
          >
            {testimonials.map((t, i) => {
              const off = offsetOf(i);
              const visible = Math.abs(off) <= 1;
              const isCenter = off === 0;

              return (
                <motion.div
                  key={t.name}
                  className="absolute will-change-transform"
                  initial={false}
                  animate={{
                    x: off * 280,
                    scale: isCenter ? 1 : 0.82,
                    rotateY: off * -22,
                    opacity: visible ? (isCenter ? 1 : 0.55) : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(1px)',
                    zIndex: 10 - Math.abs(off),
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  aria-hidden={!isCenter}
                >
                  <Card t={t} active={isCenter} />
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 hover:border-white/25 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-10 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 hover:border-white/25 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <article
      className={`relative w-[300px] sm:w-[360px] md:w-[400px] glass-strong px-6 pt-16 pb-7 text-center transition-shadow ${
        active ? 'shadow-glow' : ''
      }`}
    >
      {/* Accent gradient ring at top */}
      <div
        aria-hidden
        className={`absolute -top-px inset-x-10 h-px bg-gradient-to-r ${t.accent} opacity-70`}
      />

      {/* Avatar — circular, overlapping the top edge */}
      <div className="absolute left-1/2 -top-10 -translate-x-1/2">
        <div className={`p-[2px] rounded-full bg-gradient-to-br ${t.accent} shadow-glow`}>
          <div className="w-[72px] h-[72px] rounded-full bg-ink-900 flex items-center justify-center text-white font-display font-semibold text-xl">
            {t.initials}
          </div>
        </div>
      </div>

      {/* Decorative open quote */}
      <Quote
        aria-hidden
        className="absolute top-5 left-5 w-6 h-6 text-white/15"
      />

      {/* The quote */}
      <p className="font-display text-white/90 text-[15px] leading-relaxed line-clamp-7 min-h-[150px]">
        “{t.quote}”
      </p>

      {/* Decorative close quote */}
      <Quote
        aria-hidden
        className="absolute bottom-24 right-5 w-6 h-6 text-white/15 rotate-180"
      />

      {/* Stars */}
      <div className="mt-5 flex items-center justify-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>

      {/* Name + meta */}
      <div className="mt-4">
        <p className="text-white font-semibold text-sm">{t.name}</p>
        <p className="text-white/55 text-xs mt-0.5">
          {t.title} · {t.company}
        </p>
      </div>
    </article>
  );
}
