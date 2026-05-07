'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(t);
  }, [paused]);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative">
      <GradientBlob className="top-10 -right-32" color="rgba(99,102,241,0.3)" size={520} />
      <div className="section">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What clients say after <span className="grad-text">we ship</span>.
            </>
          }
          description="A handful of recent words from founders and teams I’ve had the privilege to work with."
        />

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="glass-strong p-8 sm:p-12 text-center"
            >
              <Quote className="w-8 h-8 text-cyan-300 mx-auto opacity-70" />
              <blockquote className="mt-6 text-white text-lg sm:text-xl leading-relaxed font-display font-medium text-balance">
                “{current.quote}”
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <figcaption className="mt-6 flex items-center justify-center gap-4">
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${current.accent} text-white font-display font-semibold`}
                >
                  {current.initials}
                </span>
                <div className="text-left">
                  <p className="text-white font-medium">{current.name}</p>
                  <p className="text-white/55 text-sm">
                    {current.title} · {current.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
