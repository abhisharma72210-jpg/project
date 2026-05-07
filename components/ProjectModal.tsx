'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, UserCircle2 } from 'lucide-react';
import ProjectArtwork from './ProjectArtwork';
import type { Project } from '@/data/portfolio';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            className="relative z-10 w-full max-w-4xl mx-4 my-6 max-h-[92vh] overflow-y-auto glass-strong border border-white/10 rounded-3xl"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="sticky top-4 left-full -translate-x-14 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-ink-900/80 text-white hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative -mt-12 px-6 sm:px-10 pb-10">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <ProjectArtwork
                  title={project.title}
                  category={project.category}
                  accent={project.accent}
                  seed={project.slug}
                  compact
                />
              </div>

              <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="chip">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-white text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-white/70 max-w-2xl">{project.shortDescription}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ghost"
                  >
                    Visit live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-display font-semibold text-white text-lg mb-3">
                  Project overview
                </h4>
                <p className="text-white/75 leading-relaxed">{project.overview}</p>
              </div>

              <div className="mt-8 glass p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-cyan-200">
                    <UserCircle2 className="w-5 h-5" />
                  </span>
                  <h4 className="font-display font-semibold text-white text-lg">
                    My role on this project
                  </h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  I handled the full project end-to-end — from creating every page to
                  forms, integrations, SEO and performance — so the client got a
                  polished, fast, editor-friendly site ready to ship.
                </p>
                <ul className="space-y-2.5">
                  {project.myRole.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
