'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import ProjectArtwork from './ProjectArtwork';
import ProjectModal from './ProjectModal';
import { projects, type Project } from '@/data/portfolio';

const INITIAL = 6;

export default function Projects() {
  const [visible, setVisible] = useState(INITIAL);
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <section id="projects" className="relative">
      <GradientBlob className="-top-40 left-10" color="rgba(139,92,246,0.35)" size={520} />
      <GradientBlob
        className="bottom-0 right-0"
        color="rgba(34,211,238,0.25)"
        size={460}
        delay={0.4}
      />
      <div className="section">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Projects I’m <span className="grad-text">proud of</span>.
            </>
          }
          description="A snapshot of recent builds across SaaS, e-commerce, fintech and coaching. Click a card for the full case study."
        />

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((p, i) => (
              <motion.button
                key={p.slug}
                layout
                type="button"
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: 0.04 * (i % INITIAL) }}
                whileHover={{ y: -6 }}
                className="group text-left relative glass overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <ProjectArtwork
                    title={p.title}
                    accent={p.accent}
                    category={p.category}
                    seed={p.slug}
                    imageUrl={`/projects/${p.slug}.jpg`}
                    className="!rounded-none !border-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute right-3 top-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display font-semibold text-white text-lg leading-snug">
                      {p.title}
                    </h3>
                    <span className="chip shrink-0 hidden sm:inline-flex">{p.category}</span>
                  </div>
                  <p className="mt-2 text-white/65 text-sm leading-relaxed line-clamp-2">
                    {p.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/55">
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <motion.button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + 3, projects.length))}
              whileHover={{ y: -2 }}
              className="btn-ghost"
            >
              <Plus className="w-4 h-4" />
              Load more projects
              <span className="text-white/40 text-xs">
                {Math.min(visible, projects.length)} / {projects.length}
              </span>
            </motion.button>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
