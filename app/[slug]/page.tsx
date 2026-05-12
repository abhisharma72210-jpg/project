import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LandingPageLayout from '@/components/landing/LandingPageLayout';
import { findLandingPage, landingPages } from '@/data/landingPages';

const SITE_URL = 'https://abisek.site';

/**
 * Statically pre-render every known landing page at build time.
 * Slugs not in this list will 404 via notFound() below.
 */
export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

/**
 * Per-page <title>, <meta description>, canonical, OpenGraph, Twitter card,
 * and keyword hints. Generated at build time from data/landingPages.ts so
 * adding a new page is just a matter of appending to that array.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = findLandingPage(params.slug);
  if (!page) return {};

  const url = `${SITE_URL}/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'Abhishek Sharma — Portfolio',
      title: page.seoTitle,
      description: page.metaDescription,
      images: [
        {
          url: page.ogImage ?? '/og.png',
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.metaDescription,
      images: [page.ogImage ?? '/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const page = findLandingPage(params.slug);
  if (!page) notFound();
  return <LandingPageLayout page={page} />;
}
