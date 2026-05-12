'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MessageCircle, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

/**
 * Floating WhatsApp + Email pill that appears after the visitor has scrolled
 * past the first viewport. Pure conversion lift — one tap to message, one tap
 * to email. Dismissable within the session.
 *
 * Position: bottom-right on desktop, full-width-bottom on mobile.
 */
export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('contact-bar-dismissed') === '1') {
      setDismissed(true);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem('contact-bar-dismissed', '1');
    } catch {
      /* sessionStorage unavailable — ignore */
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5"
        >
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Chat on WhatsApp ${profile.whatsapp}`}
            className="group relative inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white shadow-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:-translate-y-0.5 hover:shadow-2xl transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            href={profile.socials.email}
            aria-label="Email Abhishek Sharma"
            className="group inline-flex items-center justify-center w-11 h-11 rounded-full border border-theme bg-glass-strong text-fg shadow-xl hover:-translate-y-0.5 hover:bg-glass transition"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            aria-label="Hide contact bar"
            onClick={dismiss}
            className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-theme bg-glass text-fg-subtle hover:text-fg transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
