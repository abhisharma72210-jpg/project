'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Globe2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Wand2,
  Plug2,
} from 'lucide-react';
import GradientBlob from './GradientBlob';
import { profile } from '@/data/portfolio';

const ROLES = [
  'WordPress Developer',
  'CRM Automation Expert',
  'GoHighLevel Funnel Builder',
  'SEO Optimization Specialist',
  'Custom Website Developer',
  'Landing Page Expert',
  'Website Speed Optimization Expert',
  'Sales Funnel Developer',
  'Frontend Web Developer',
  'Conversion-Focused Developer',
];

function useTypewriter(words: string[], typingMs = 70, pauseMs = 1500) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? typingMs / 2 : typingMs;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingMs, pauseMs]);

  return text;
}

const FLOATERS = [
  { Icon: Code2,    label: 'WP',    x: '6%',  y: '18%', delay: 0,   size: 'w-12 h-12', tone: 'from-blue-500 to-cyan-400' },
  { Icon: Globe2,   label: 'Web',   x: '88%', y: '12%', delay: 0.4, size: 'w-14 h-14', tone: 'from-violet-500 to-indigo-400' },
  { Icon: Database, label: 'API',   x: '4%',  y: '70%', delay: 0.8, size: 'w-12 h-12', tone: 'from-pink-500 to-rose-400' },
  { Icon: Cpu,      label: 'CRM',   x: '90%', y: '62%', delay: 1.2, size: 'w-14 h-14', tone: 'from-amber-500 to-orange-400' },
  { Icon: Layers,   label: 'Stack', x: '14%', y: '46%', delay: 0.2, size: 'w-10 h-10', tone: 'from-emerald-400 to-cyan-400' },
  { Icon: Wand2,    label: 'UX',    x: '82%', y: '44%', delay: 0.6, size: 'w-10 h-10', tone: 'from-fuchsia-500 to-purple-500' },
  { Icon: Plug2,    label: 'Auto',  x: '50%', y: '8%',  delay: 1.0, size: 'w-10 h-10', tone: 'from-sky-500 to-cyan-400' },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-24"
    >
      {/* background grid + blobs */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <GradientBlob className="top-[-160px] left-[-120px]" color="rgba(139,92,246,0.45)" size={520} />
      <GradientBlob className="top-[-120px] right-[-160px]" color="rgba(34,211,238,0.35)" size={520} delay={0.3} />
      <GradientBlob className="bottom-[-200px] left-1/3" color="rgba(99,102,241,0.35)" size={580} delay={0.6} />

      {/* floating tech tiles */}
      {FLOATERS.map(({ Icon, label, x, y, delay, size, tone }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`hidden md:flex absolute ${size} rounded-2xl items-center justify-center glass`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center rounded-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className={`w-full h-full rounded-2xl bg-gradient-to-br ${tone} opacity-20 absolute`}
            />
            <div className="relative flex flex-col items-center gap-0.5 text-fg">
              <Icon className="w-5 h-5" />
              <span className="text-[9px] font-medium tracking-widest uppercase text-fg-muted">
                {label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="section relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display font-semibold tracking-tight text-fg leading-[1.15] sm:leading-[1.02] text-[2rem] sm:text-6xl lg:text-7xl text-balance"
        >
          Hi, I’m {profile.shortName}.
          <br className="hidden sm:block" />
          <span className="grad-text">Premium WordPress</span>{' '}
          <span className="grad-text">& Web Developer.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center gap-3 text-fg-muted"
        >
          <span className="text-sm sm:text-base">I’m a</span>
          <span className="relative inline-flex items-center px-3 py-1.5 rounded-full glass min-w-[260px] sm:min-w-[320px] justify-center">
            <Sparkles className="w-4 h-4 text-cyan-300 mr-2" />
            <span className="font-display text-base sm:text-lg text-fg">
              {typed}
              <span className="ml-0.5 inline-block w-[2px] h-5 align-middle bg-white animate-pulse" />
            </span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 max-w-2xl text-fg-muted text-base sm:text-lg leading-relaxed text-pretty"
        >
          {profile.tagline} Specializing in Elementor, Divi, WooCommerce, ACF and CRM
          integrations - currently shipping production work at Epic Businesses with 50+
          launches behind me.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View my work
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
