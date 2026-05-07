'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              whileHover={{ y: -6 }}
              className="group relative glass p-7 overflow-hidden"
            >
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />

              <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-white">
                <s.icon className="w-5 h-5" />
              </span>

              <h3 className="mt-5 font-display font-semibold text-xl text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.description}</p>

              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/75"
                  >
                    <span className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 text-white">
                      <Check className="w-3 h-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
