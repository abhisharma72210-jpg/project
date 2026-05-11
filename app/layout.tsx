import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const SITE_URL = 'https://abisek.site';
const TITLE =
  'Abhishek Sharma - WordPress, Elementor & Custom Web Developer | abisek.site';
const DESCRIPTION =
  'Hire Abhishek Sharma - a Sr. Frontend Developer with 5+ years and 50+ shipped websites. WordPress, Elementor, Divi, WooCommerce, GoHighLevel, HubSpot, Showit and custom-coded builds for international brands. Performance, SEO and CRM integrations included.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Abhishek Sharma',
  },
  description: DESCRIPTION,
  applicationName: 'Abhishek Sharma - Portfolio',
  authors: [{ name: 'Abhishek Sharma', url: SITE_URL }],
  creator: 'Abhishek Sharma',
  publisher: 'Abhishek Sharma',
  keywords: [
    'WordPress Developer',
    'Sr. Frontend Developer',
    'Elementor Expert',
    'Divi Developer',
    'WooCommerce Developer',
    'GoHighLevel Funnel Builder',
    'HubSpot CMS Developer',
    'Custom WordPress Developer',
    'ACF Custom Post Types',
    'Landing Page Developer',
    'Website Speed Optimization',
    'SEO Optimization Specialist',
    'CRM Integration',
    'Workflow Automation',
    'Zapier · Make · n8n',
    'Abhishek Sharma',
    'Freelance WordPress Developer India',
  ],
  category: 'Web Development',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Abhishek Sharma - Portfolio',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Abhishek Sharma - Sr. Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@abhisharma72210',
    images: ['/og.png'],
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
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
    shortcut: ['/icon.svg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Inline script that runs SYNCHRONOUSLY before React hydrates, so the correct
 * theme class is on <html> at first paint — no flash of the wrong theme.
 * Falls back to the user's system preference when no choice is persisted.
 */
const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      var theme = stored ? stored : (prefersLight ? 'light' : 'dark');
      var root = document.documentElement;
      if (theme === 'light') {
        root.classList.add('light');
        root.classList.remove('dark');
      } else {
        root.classList.add('dark');
        root.classList.remove('light');
      }
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

// JSON-LD structured data - boosts SEO with rich Person + WebSite schema.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Abhishek Sharma',
      url: SITE_URL,
      jobTitle: 'Sr. Frontend Developer - WordPress',
      worksFor: {
        '@type': 'Organization',
        name: 'Epic Businesses',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Jaipur National University',
      },
      knowsAbout: [
        'WordPress',
        'Elementor',
        'Divi',
        'WooCommerce',
        'ACF',
        'GoHighLevel',
        'HubSpot',
        'Showit',
        'JavaScript',
        'SEO',
        'Core Web Vitals',
      ],
      email: 'mailto:abhisharma72210@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/abhishek-sharma-023581163/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Abhishek Sharma - Portfolio',
      description: DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Abhishek Sharma - WordPress & Custom Web Development',
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: ['US', 'GB', 'AE', 'IN', 'EU', 'AU'],
      serviceType: [
        'WordPress Development',
        'WooCommerce Development',
        'Landing Page Design',
        'Website Speed Optimization',
        'CRM Integration',
        'Workflow Automation',
        'API Integration',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No-FOUC theme bootstrap — runs before React */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
