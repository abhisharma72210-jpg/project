'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <GradientBlob className="top-20 right-0" color="rgba(139,92,246,0.3)" size={520} />
      <div className="section">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Seven years of <span className="grad-text">shipping production work</span>.
            </>
          }
          description="A condensed timeline of the roles, builds and milestones that shaped how I work today."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* center line */}
          <div
            aria-hidden
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />

          <ul className="space-y-10">
            {experience.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.role + item.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.04 * i }}
                  className="relative grid sm:grid-cols-2 gap-6 sm:gap-12"
                >
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-5 sm:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-ink-900 shadow-glow"
                  />

                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 chip">
                      <Icon className="w-3.5 h-3.5 text-cyan-300" />
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display font-semibold text-xl text-fg">
                      {item.role}
                    </h3>
                    <p className="text-fg-subtle text-sm">{item.company}</p>
                  </div>

                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft ? 'sm:col-start-2 sm:pl-10' : 'sm:col-start-1 sm:row-start-1 sm:pr-10'
                    }`}
                  >
                    <div className="glass p-5 text-left">
                      <p className="text-fg-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
