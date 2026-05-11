'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Full-page animated background. Three large blurred blobs drift across the
 * viewport and cycle through the brand palette as the visitor scrolls — so the
 * page never feels "static." Position and color are bound to scrollYProgress
 * (0 at the top of the page, 1 at the bottom) through a spring for smoothness.
 *
 * The component sits at `z-index: -1` inside the main element's isolated
 * stacking context, behind every section but above the body background.
 * It's purely decorative — pointer-events-none.
 */
export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Spring-smoothed progress so the motion never feels jittery.
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // ── Blob 1 — top-left starting position, drifts down-right
  const b1X = useTransform(progress, [0, 1], ['-8vw', '55vw']);
  const b1Y = useTransform(progress, [0, 1], ['-10vh', '80vh']);
  const b1Color = useTransform(
    progress,
    [0, 0.33, 0.66, 1],
    [
      'rgba(139, 92, 246, 0.55)', // violet
      'rgba(34, 211, 238, 0.45)', // cyan
      'rgba(236, 72, 153, 0.45)', // pink
      'rgba(139, 92, 246, 0.55)', // back to violet (loop-friendly)
    ],
  );

  // ── Blob 2 — top-right, drifts to mid-left
  const b2X = useTransform(progress, [0, 1], ['80vw', '10vw']);
  const b2Y = useTransform(progress, [0, 1], ['0vh', '65vh']);
  const b2Color = useTransform(
    progress,
    [0, 0.5, 1],
    [
      'rgba(34, 211, 238, 0.45)', // cyan
      'rgba(245, 158, 11, 0.32)', // amber
      'rgba(99, 102, 241, 0.45)', // indigo
    ],
  );

  // ── Blob 3 — starts off-screen bottom, drifts upward
  const b3X = useTransform(progress, [0, 1], ['35vw', '70vw']);
  const b3Y = useTransform(progress, [0, 1], ['95vh', '20vh']);
  const b3Color = useTransform(
    progress,
    [0, 0.5, 1],
    [
      'rgba(99, 102, 241, 0.48)', // indigo
      'rgba(168, 85, 247, 0.36)', // purple
      'rgba(34, 211, 238, 0.45)', // cyan
    ],
  );

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <motion.div
        className="absolute w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          x: b1X,
          y: b1Y,
          background: b1Color,
          filter: 'blur(110px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[640px] max-h-[640px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          x: b2X,
          y: b2Y,
          background: b2Color,
          filter: 'blur(110px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          x: b3X,
          y: b3Y,
          background: b3Color,
          filter: 'blur(130px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
