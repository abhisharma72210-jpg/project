'use client';

import { ArrowUpRight, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-12 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-white">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow">
                <span className="font-display font-bold text-white text-base leading-none">A</span>
              </span>
              <span className="font-display font-semibold">
                abisek
                <span className="text-white/40">.site</span>
              </span>
            </a>
            <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-sm">
              {profile.title} · building premium WordPress experiences for international
              clients.
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-3">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-white inline-flex items-center gap-1"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-3">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              <FooterLink
                href={profile.socials.linkedin}
                Icon={Linkedin}
                label="LinkedIn"
                external
              />
              <FooterLink
                href={profile.socials.whatsapp}
                Icon={MessageCircle}
                label="WhatsApp"
                external
              />
              <FooterLink
                href={profile.socials.email}
                Icon={Mail}
                label="Email"
              />
            </div>
            <p className="mt-3 text-white/45 text-xs">{profile.email}</p>
            <p className="text-white/45 text-xs">{profile.whatsapp}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-3 text-xs text-white/45">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
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
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
