'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { testimonials, type Testimonial } from '@/data/portfolio';

export default function Testimonials() {
  // Split into two rows for opposite-direction marquees
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section id="testimonials" className="relative">
      <GradientBlob className="top-10 -right-32" color="rgba(99,102,241,0.3)" size={520} />
      <GradientBlob className="bottom-10 -left-20" color="rgba(34,211,238,0.22)" size={420} delay={0.3} />
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

        <div className="relative space-y-6">
          {/* Fade masks on left/right edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10"
            style={{
              background:
                'linear-gradient(90deg, var(--bg) 0%, rgba(15,23,42,0.85) 30%, transparent 100%)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10"
            style={{
              background:
                'linear-gradient(270deg, var(--bg) 0%, rgba(15,23,42,0.85) 30%, transparent 100%)',
            }}
          />

          <MarqueeRow items={rowA} direction="left" />
          <MarqueeRow items={rowB} direction="right" />
        </div>

        {/* Star summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 flex items-center justify-center gap-3 text-white/70 text-sm"
        >
          <span className="inline-flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </span>
          <span>
            5.0 average from clients across the US, UK, EU, UAE & India
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
}: {
  items: Testimonial[];
  direction?: 'left' | 'right';
}) {
  // Duplicate items so the loop seams are invisible
  const looped = [...items, ...items];
  const animClass =
    direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div className="group/marquee relative overflow-hidden">
      <div className={`flex w-max gap-5 sm:gap-6 ${animClass} group-hover/marquee:[animation-play-state:paused]`}>
        {looped.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="relative shrink-0 w-[320px] sm:w-[380px] md:w-[440px] glass p-6 sm:p-7 overflow-hidden"
    >
      {/* Subtle accent glow on hover */}
      <div
        aria-hidden
        className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${t.accent} opacity-0 hover:opacity-20 blur-3xl transition-opacity`}
      />

      <div className="flex items-start justify-between">
        <Quote className="w-7 h-7 text-cyan-300/80" />
        <div className="flex items-center gap-0.5 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
      </div>

      <p className="mt-5 text-white/85 text-[15px] leading-relaxed line-clamp-6">
        “{t.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
        <span
          className={`flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br ${t.accent} text-white font-display font-semibold text-sm shrink-0`}
        >
          {t.initials}
        </span>
        <div className="min-w-0">
          <p className="text-white font-medium text-sm truncate">{t.name}</p>
          <p className="text-white/55 text-xs truncate">
            {t.title} · {t.company}
          </p>
        </div>
      </div>
    </article>
  );
}
