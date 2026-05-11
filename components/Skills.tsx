'use client';

import { useId, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { skills, type Skill } from '@/data/portfolio';

/**
 * Tailwind color shade → hex map. Used to translate the per-skill `accent`
 * class string (e.g. "from-violet-500 to-cyan-400") into actual hex colors
 * for the SVG progress ring's gradient stops.
 */
const TW_HEX: Record<string, string> = {
  'blue-500': '#3b82f6',
  'blue-400': '#60a5fa',
  'cyan-500': '#06b6d4',
  'cyan-400': '#22d3ee',
  'sky-500': '#0ea5e9',
  'sky-400': '#38bdf8',
  'indigo-500': '#6366f1',
  'indigo-400': '#818cf8',
  'violet-500': '#8b5cf6',
  'violet-400': '#a78bfa',
  'purple-500': '#a855f7',
  'purple-400': '#c084fc',
  'fuchsia-500': '#d946ef',
  'fuchsia-400': '#e879f9',
  'pink-500': '#ec4899',
  'pink-400': '#f472b6',
  'rose-500': '#f43f5e',
  'rose-400': '#fb7185',
  'red-500': '#ef4444',
  'orange-500': '#f97316',
  'orange-400': '#fb923c',
  'amber-500': '#f59e0b',
  'amber-400': '#fbbf24',
  'amber-300': '#fcd34d',
  'yellow-400': '#facc15',
  'yellow-300': '#fde047',
  'emerald-500': '#10b981',
  'emerald-400': '#34d399',
  'teal-500': '#14b8a6',
  'teal-400': '#2dd4bf',
};

function parseAccent(accent: string): [string, string] {
  const from = accent.match(/from-([\w-]+)/)?.[1];
  const to = accent.match(/to-([\w-]+)/)?.[1];
  return [TW_HEX[from ?? ''] ?? '#8b5cf6', TW_HEX[to ?? ''] ?? '#22d3ee'];
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <GradientBlob className="-top-32 right-0" color="rgba(34,211,238,0.30)" size={480} />
      <GradientBlob className="bottom-10 -left-20" color="rgba(139,92,246,0.22)" size={420} delay={0.4} />

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

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          style={{ perspective: '1200px' }}
        >
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, '');
  const [colorA, colorB] = parseAccent(skill.accent);

  // Mouse-position motion values — drive both the 3D tilt and the spotlight
  // glow. Springed so the motion feels physical, not snappy.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 220,
    damping: 22,
  });

  // Translate normalized cursor position into CSS variables so the spotlight
  // gradient can pin itself to the cursor inside the card.
  const spotlightX = useTransform(mx, (v) => `${(v + 0.5) * 100}%`);
  const spotlightY = useTransform(my, (v) => `${(v + 0.5) * 100}%`);
  const spotlightBg = useMotionTemplate`radial-gradient(220px circle at ${spotlightX} ${spotlightY}, ${colorA}22, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // SVG ring geometry
  const SIZE = 92;
  const STROKE = 7;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRC = 2 * Math.PI * RADIUS;
  const targetOffset = CIRC - (skill.level / 100) * CIRC;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.04 * index, ease: 'easeOut' }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative glass p-5 sm:p-6 overflow-hidden flex flex-col items-center text-center"
    >
      {/* Cursor-following spotlight tinted with the skill's accent color */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: spotlightBg }}
      />

      {/* Soft halo behind the ring */}
      <div
        aria-hidden
        className={`absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br ${skill.accent} opacity-10 group-hover:opacity-30 blur-2xl transition-opacity duration-500 pointer-events-none`}
      />

      {/* Circular progress ring */}
      <div
        className="relative"
        style={{ width: SIZE, height: SIZE, transform: 'translateZ(20px)' }}
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full h-full -rotate-90"
          aria-hidden
        >
          <defs>
            <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorA} />
              <stop offset="100%" stopColor={colorB} />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="currentColor"
            strokeWidth={STROKE}
            fill="none"
            className="text-fg opacity-10"
          />

          {/* Progress */}
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke={`url(#grad-${id})`}
            strokeWidth={STROKE}
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: CIRC,
              filter: `drop-shadow(0 0 6px ${colorA}55)`,
            }}
            initial={{ strokeDashoffset: CIRC }}
            whileInView={{ strokeDashoffset: targetOffset }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 1.4,
              delay: 0.06 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </svg>

        {/* Mastery percentage in the center of the ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-lg sm:text-xl text-fg leading-none tabular-nums">
            {skill.level}
            <span className="text-fg-faint text-sm sm:text-base font-semibold">%</span>
          </span>
        </div>
      </div>

      {/* Skill name */}
      <h3
        className="mt-4 font-display font-semibold text-fg text-sm sm:text-[15px] leading-snug"
        style={{ transform: 'translateZ(10px)' }}
      >
        {skill.name}
      </h3>

      {/* Category whisper */}
      <span
        className="mt-1 text-[10px] uppercase tracking-[0.18em] text-fg-faint"
        style={{ transform: 'translateZ(5px)' }}
      >
        {skill.category}
      </span>
    </motion.div>
  );
}
