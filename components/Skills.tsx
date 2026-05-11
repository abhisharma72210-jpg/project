'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <GradientBlob className="-top-32 right-0" color="rgba(34,211,238,0.3)" size={480} />
      <div className="section">
        <SectionHeader
          eyebrow="Skills & Stack"
          title={
            <>
              The toolbox I ship <span className="grad-text">production work</span> with.
            </>
          }
          description="Battle-tested across 50+ live builds. I pick the simplest tool that solves your problem, not the trendiest one."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.03 * i }}
              whileHover={{ y: -4 }}
              className="group relative glass p-5 overflow-hidden"
            >
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 blur-2xl group-hover:opacity-30 transition`}
                aria-hidden
              />

              <div className="flex items-start justify-between gap-3">
                <p className="font-display font-semibold text-white text-base leading-snug">
                  {s.name}
                </p>
                <span
                  className={`shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-[11px] font-semibold text-white/95 shadow-lg`}
                >
                  {s.name.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-[11px] text-white/55 mb-1.5">
                  <span>Mastery</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, delay: 0.05 * i, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${s.accent}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
