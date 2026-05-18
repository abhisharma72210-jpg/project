'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import ThemeToggle from './ThemeToggle';

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
          scrolled
            ? 'backdrop-blur-xl bg-glass border-b border-theme'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display font-semibold text-fg"
          >
            <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow">
              <span className="relative z-10 font-display font-bold text-white text-base leading-none">
                A
              </span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 blur-md opacity-50 group-hover:opacity-80 transition" />
            </span>
            <span className="text-sm sm:text-base tracking-tight">Abhishek</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-2 text-sm transition ${
                    isActive ? 'text-fg' : 'text-fg-subtle hover:text-fg'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-theme bg-glass"
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
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-theme bg-glass text-fg"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
              className="absolute inset-0 bg-surface/80 backdrop-blur-xl"
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
                  className="px-4 py-3 rounded-xl text-fg-muted hover:text-fg hover:bg-glass"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-theme flex items-center gap-2 px-2">
                <NavSocial href={profile.socials.linkedin} Icon={Linkedin} label="LinkedIn" external />
                <NavSocial href={profile.socials.whatsapp} Icon={MessageCircle} label="WhatsApp" external />
                <NavSocial href={profile.socials.email} Icon={Mail} label="Email" />
              </div>
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
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-theme bg-glass text-fg-subtle hover:text-fg hover:bg-glass-strong hover:border-theme-strong transition"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
