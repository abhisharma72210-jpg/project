'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import ProjectArtwork from './ProjectArtwork';
import { projects } from '@/data/portfolio';

const INITIAL = 6;

export default function Projects() {
  const [visible, setVisible] = useState(INITIAL);

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
          description="A snapshot of recent builds across coaching, events, wellness, e-commerce and SaaS. Click ‘Visit Live Project’ to see any one of them in action."
        />

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((p, i) => {
              const category = p.category.split(/[·•|]/)[0].trim();
              const platform = p.technologies[0] ?? 'WordPress';
              return (
                <motion.article
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, delay: 0.04 * (i % INITIAL) }}
                  whileHover={{ y: -6 }}
                  className="group relative glass overflow-hidden flex flex-col h-full"
                >
                  {/* Browser chrome + screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl shrink-0">
                    <ProjectArtwork
                      title={p.title}
                      accent={p.accent}
                      category={p.category}
                      seed={p.slug}
                      imageUrl={`/projects/${p.slug}.jpg`}
                      className="!rounded-none !border-0"
                    />

                    {/* Top browser bar */}
                    <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-3 py-2.5 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-transparent backdrop-blur-[2px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-medium">
                        Live preview
                      </span>
                    </div>

                    {/* Hover lift overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    {/* Two pills — category (outline) + platform (filled) */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 text-[11px] rounded-full border border-white/15 text-white/75">
                        {category}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full text-white shadow-sm bg-gradient-to-r ${p.accent}`}
                      >
                        {platform}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display font-semibold text-white text-xl leading-snug">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-white/65 text-sm leading-relaxed line-clamp-2">
                      {p.shortDescription}
                    </p>

                    {/* Visit Live Project — full-width button at the bottom */}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/btn mt-auto pt-6 block"
                    >
                      <span className="relative w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white font-medium text-sm overflow-hidden transition hover:border-white/25 hover:bg-white/[0.08]">
                        <span
                          aria-hidden
                          className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition bg-gradient-to-r ${p.accent}`}
                          style={{ filter: 'blur(20px)' }}
                        />
                        <span className="relative">Visit Live Project</span>
                        <ExternalLink className="relative w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>
                </motion.article>
              );
            })}
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
    </section>
  );
}
