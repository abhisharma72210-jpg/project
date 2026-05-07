'use client';

import { motion } from 'framer-motion';

type BlobProps = {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
};

export default function GradientBlob({
  className = '',
  color = 'rgba(139, 92, 246, 0.45)',
  size = 480,
  delay = 0,
  duration = 14,
}: BlobProps) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay }}
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
      }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
