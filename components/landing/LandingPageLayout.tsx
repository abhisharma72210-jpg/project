'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Mail, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GradientBlob from '@/components/GradientBlob';
import StickyContactBar from '@/components/StickyContactBar';
import { profile } from '@/data/portfolio';
import type { LandingPage } from '@/data/landingPages';

type Props = { page: LandingPage };

/**
 * Single reusable layout for every SEO landing page. Each route file just
 * imports this and passes the page data — that keeps content (in data/) and
 * presentation (here) cleanly separated.
 */
export default function LandingPageLayout({ page }: Props) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <GradientBlob className="top-[-120px] left-[-100px]" color="rgba(139,92,246,0.35)" size={520} />
        <GradientBlob className="top-[-80px] right-[-120px]" color="rgba(34,211,238,0.25)" size={480} delay={0.3} />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          <Breadcrumbs current={page.breadcrumb} />
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display font-semibold tracking-tight text-fg leading-[1.1] text-[2rem] sm:text-5xl lg:text-6xl text-balance"
          >
            <span className="grad-text">{page.h1}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 lede text-pretty"
          >
            {page.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-primary">
              <MessageCircle className="w-4 h-4" /> WhatsApp me
            </a>
            <a href={profile.socials.email} className="btn-ghost">
              <Mail className="w-4 h-4" /> Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Body sections */}
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        {page.sections.map((section, i) => (
          <motion.section
            key={section.h2}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.04 * i }}
            className="mt-12 first:mt-0"
          >
            <h2 className="font-display font-semibold text-fg text-2xl sm:text-3xl tracking-tight">
              {section.h2}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((para, j) => (
                <p key={j} className="text-fg-muted text-base sm:text-[17px] leading-relaxed">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-fg-muted text-[15px]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.section>
        ))}

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="font-display font-semibold text-fg text-2xl sm:text-3xl tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-3">
            {page.faq.map((item) => (
              <details key={item.q} className="glass p-5 group">
                <summary className="cursor-pointer font-display font-semibold text-fg text-base sm:text-lg flex items-start justify-between gap-4 list-none">
                  <span>{item.q}</span>
                  <ChevronRight className="w-5 h-5 text-fg-subtle shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-fg-muted text-[15px] leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 glass-strong p-8 sm:p-10 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-3xl"
          />
          <h2 className="relative font-display font-semibold text-fg text-2xl sm:text-3xl tracking-tight">
            {page.ctaTitle}
          </h2>
          <p className="relative mt-3 text-fg-muted text-base sm:text-lg max-w-2xl">
            {page.ctaBody}
          </p>
          <div className="relative mt-6 flex flex-wrap items-center gap-3">
            <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-primary">
              <MessageCircle className="w-4 h-4" /> WhatsApp me
            </a>
            <a href={profile.socials.email} className="btn-ghost">
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
          </div>
        </motion.section>

        {/* Related pages — internal linking for SEO */}
        {page.related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display font-semibold text-fg text-xl tracking-tight">
              Related services
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {page.related.map((rel) => (
                <li key={rel.href}>
                  <Link
                    href={rel.href}
                    className="group flex items-center justify-between gap-3 glass px-5 py-4 hover:bg-glass-strong transition"
                  >
                    <span className="text-fg-muted group-hover:text-fg transition">
                      {rel.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-fg-subtle group-hover:text-fg group-hover:translate-x-1 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <Footer />
      <StickyContactBar />

      {/* JSON-LD: per-page Service + FAQPage + BreadcrumbList schema */}
      <PageJsonLd page={page} />
    </main>
  );
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-fg-subtle">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className="hover:text-fg transition">
            Home
          </Link>
        </li>
        <li aria-hidden>›</li>
        <li className="text-fg-muted">{current}</li>
      </ol>
    </nav>
  );
}

function PageJsonLd({ page }: { page: LandingPage }) {
  const SITE = 'https://abisek.site';
  const url = `${SITE}/${page.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        description: page.metaDescription,
        url,
        provider: { '@id': `${SITE}/#person` },
        serviceType: page.serviceCategory,
        areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'EU'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
