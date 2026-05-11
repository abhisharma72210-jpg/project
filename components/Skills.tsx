'use client';

import { useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { skills, type Skill } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <GradientBlob className="-top-32 right-0" color="rgba(34,211,238,0.30)" size={480} />
      <GradientBlob
        className="bottom-10 -left-20"
        color="rgba(139,92,246,0.22)"
        size={420}
        delay={0.4}
      />

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Mouse spotlight + tilt. We write the cursor position to CSS custom
   * properties on the card so the gradient and tilt update without React
   * re-rendering on every mousemove.
   */
  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const tiltX = ((y / rect.height) - 0.5) * -6;
    const tiltY = ((x / rect.width) - 0.5) * 6;
    el.style.setProperty('--tilt-x', `${tiltX}deg`);
    el.style.setProperty('--tilt-y', `${tiltY}deg`);
  }, []);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }, []);

  // Monogram - first letters of each word, capped at 3 chars
  const monogram = useMemo(
    () =>
      skill.name
        .replace(/[^A-Za-z0-9 /-]/g, '')
        .split(/[\s/]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 3),
    [skill.name],
  );

  // 5-dot mastery visualization (filled / partial / empty)
  const dots = useMemo(() => {
    const total = 5;
    const filled = skill.level / 20;
    return Array.from({ length: total }, (_, i) => {
      const fillRatio = Math.max(0, Math.min(1, filled - i));
      return fillRatio;
    });
  }, [skill.level]);

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: 0.03 * index, ease: 'easeOut' }}
      className="group relative glass overflow-hidden flex items-stretch h-[120px]"
      style={{
        transform:
          'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Cursor-following spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.18), transparent 60%)',
        }}
      />

      {/* LEFT - gradient monogram block */}
      <div
        className={`relative w-[120px] shrink-0 flex items-center justify-center bg-gradient-to-br ${skill.accent} overflow-hidden`}
        style={{ transform: 'translateZ(15px)' }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(120% 60% at 30% 20%, rgba(255,255,255,0.35), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent, rgba(0,0,0,0.18))',
          }}
        />

        <span className="relative font-display font-bold text-white text-3xl tracking-tight drop-shadow-sm">
          {monogram}
        </span>
      </div>

      {/* RIGHT - content */}
      <div
        className="flex-1 min-w-0 p-4 sm:p-5 flex flex-col justify-between"
        style={{ transform: 'translateZ(10px)' }}
      >
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-fg text-base sm:text-[17px] leading-snug truncate">
            {skill.name}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.18em] text-fg-faint mt-1">
            {skill.category}
          </p>
        </div>

        {/* Mastery - 5 dots + percentage */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            {dots.map((fillRatio, i) => (
              <span
                key={i}
                className="relative w-2 h-2 rounded-full bg-fg/15 overflow-hidden"
                aria-hidden
              >
                {fillRatio > 0 && (
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.accent}`}
                    style={{
                      clipPath: `inset(0 ${(1 - fillRatio) * 100}% 0 0)`,
                    }}
                  />
                )}
              </span>
            ))}
          </div>
          <span className="font-display font-bold text-fg text-sm tabular-nums">
            {skill.level}
            <span className="text-fg-faint text-xs font-semibold">%</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
