'use client';

import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-5 mb-14 ${alignment}`}>
      <motion.span
        className="section-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-soft" />
        {eyebrow}
      </motion.span>
      <motion.h2
        className="heading max-w-3xl"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
