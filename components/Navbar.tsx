'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles, Linkedin, MessageCircle, Mail, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-ink-900/70 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display font-semibold text-white"
          >
            <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 blur-md opacity-50 group-hover:opacity-80 transition" />
            </span>
            <span className="text-sm sm:text-base tracking-tight">
              {profile.shortName}
              <span className="text-white/40">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-2 text-sm transition ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.05]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-1.5">
            <NavSocial href={profile.socials.linkedin} Icon={Linkedin} label="LinkedIn" external />
            <NavSocial href={profile.socials.whatsapp} Icon={MessageCircle} label="WhatsApp" external />
            <NavSocial href={profile.socials.email} Icon={Mail} label="Email" />
            <a
              href="/abhishek-sharma-cv.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-[length:200%_200%] hover:bg-right shadow-glow transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-20 left-4 right-4 glass p-6 flex flex-col gap-1"
            >
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 px-2">
                <NavSocial href={profile.socials.linkedin} Icon={Linkedin} label="LinkedIn" external />
                <NavSocial href={profile.socials.whatsapp} Icon={MessageCircle} label="WhatsApp" external />
                <NavSocial href={profile.socials.email} Icon={Mail} label="Email" />
              </div>
              <a
                href="/abhishek-sharma-cv.pdf"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 justify-center"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavSocial({
  href,
  Icon,
  label,
  external = false,
}: {
  href: string;
  Icon: React.ElementType;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/75 hover:text-white hover:bg-white/10 hover:border-white/20 transition"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
