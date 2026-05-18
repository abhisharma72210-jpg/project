'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home, MessageCircle, MoveRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GradientBlob from '@/components/GradientBlob';
import StickyContactBar from '@/components/StickyContactBar';
import { profile } from '@/data/portfolio';

/**
 * Custom 404 page. Next.js App Router auto-renders this whenever:
 *   - A URL doesn't match any route
 *   - A route component calls notFound()
 *
 * Note: Metadata is exported from a separate route segment (or layout) when
 * a not-found.tsx uses 'use client'. Since we want client-side animations,
 * we accept Next.js's default <title> here. SEO impact is minimal because
 * 404s should not be indexed anyway.
 */

const POPULAR_LINKS = [
  { label: 'WordPress Developer in India', href: '/wordpress-developer-india' },
  { label: 'Elementor Developer', href: '/elementor-developer' },
  { label: 'WooCommerce Developer', href: '/woocommerce-developer' },
  { label: 'GoHighLevel Expert', href: '/gohighlevel-expert' },
  { label: 'Hire a WordPress Developer', href: '/hire-wordpress-developer' },
  { label: 'WordPress Speed Optimization', href: '/wordpress-speed-optimization' },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative min-h-[88vh] flex items-center pt-28 pb-20">
        {/* Decorative gradient blobs — same vibe as the homepage hero */}
        <GradientBlob
          className="top-[-160px] left-[-120px]"
          color="rgba(139,92,246,0.40)"
          size={520}
        />
        <GradientBlob
          className="top-[-100px] right-[-140px]"
          color="rgba(34,211,238,0.30)"
          size={500}
          delay={0.3}
        />
        <GradientBlob
          className="bottom-[-180px] left-1/3"
          color="rgba(99,102,241,0.30)"
          size={580}
          delay={0.6}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse-soft" />
            Page not found
          </motion.span>

          {/* Big 404 with gradient + float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6"
          >
            <motion.h1
              className="font-display font-black tracking-tighter leading-none grad-text text-[6rem] sm:text-[10rem] lg:text-[12rem] select-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              404
            </motion.h1>
            {/* Soft glow underneath the 404 */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(139,92,246,0.6), rgba(34,211,238,0.3) 50%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Heading + description */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mt-2 font-display font-semibold text-fg text-2xl sm:text-4xl tracking-tight text-balance">
              This page took a wrong turn.
            </h2>
            <p className="mt-5 text-fg-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              The link is broken, the URL is mistyped, or the page was moved.
              Let’s get you somewhere useful.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to home
            </Link>
            <Link href="/#projects" className="btn-ghost">
              View projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

          {/* Popular pages — internal linking helps with SEO + UX */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14"
          >
            <p className="text-fg-faint text-[11px] uppercase tracking-[0.2em] mb-4">
              Or try one of these
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {POPULAR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border border-theme bg-glass text-fg-muted hover:text-fg hover:bg-glass-strong hover:border-theme-strong transition"
                  >
                    {link.label}
                    <MoveRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyContactBar />
    </main>
  );
}
