'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Code2, GraduationCap, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GradientBlob from './GradientBlob';
import { stats } from '@/data/portfolio';

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-semibold text-4xl sm:text-5xl text-white">
      {count}
      {suffix}
    </span>
  );
}

const PILLS = [
  { Icon: Rocket,         label: '50+ WordPress sites shipped' },
  { Icon: Code2,          label: 'Currently @ Epic Businesses' },
  { Icon: GraduationCap,  label: 'BCA · Jaipur National University' },
  { Icon: ShieldCheck,    label: 'Async-first · reliable delivery' },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <GradientBlob className="-top-20 -left-32" color="rgba(99,102,241,0.35)" size={520} />
      <div className="section">
        <SectionHeader
          eyebrow="About me"
          title={
            <>
              A WordPress developer who cares about{' '}
              <span className="grad-text">speed, polish and SEO</span>.
            </>
          }
          description="I’m a Sr. Frontend Developer with 5+ years of experience designing, developing and optimizing WordPress websites for performance, responsiveness and SEO."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass p-8 sm:p-10"
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Strong expertise in <span className="text-white">HTML, CSS, JavaScript,
              jQuery and Bootstrap</span>, combined with proven ability to deliver
              modern, user-friendly interfaces. Experienced with the full WordPress
              builder ecosystem —{' '}
              <span className="text-white">Elementor, Divi, Thrive, Beaver Builder,
              Oxygen and WPBakery</span> — as well as custom development using ACF and
              Custom Post Types.
            </p>
            <p className="mt-5 text-white/70 text-base leading-relaxed">
              Skilled in mobile-first design, cross-browser compatibility, site speed
              optimization and technical SEO — making sure websites not only look great
              but perform exceptionally. Currently contributing at{' '}
              <span className="text-white">Epic Businesses</span>, building scalable
              digital solutions that drive business growth for international clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {PILLS.map(({ Icon, label }) => (
                <span key={label} className="chip">
                  <Icon className="w-3.5 h-3.5 text-cyan-300" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="glass grad-border p-6 flex flex-col gap-2 hover:-translate-y-1 transition-transform"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <span className="text-white/60 text-sm">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
