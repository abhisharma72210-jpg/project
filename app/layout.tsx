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
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Inline script that runs SYNCHRONOUSLY before React hydrates, so the correct
 * theme class is on <html> at first paint - no flash of the wrong theme.
 *
 * Default theme: LIGHT. The visitor's choice (once they click the toggle) is
 * persisted to localStorage and respected on subsequent visits.
 */
const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored ? stored : 'light';
      var root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    } catch (e) {
      document.documentElement.classList.add('light');
    }
  })();
`;

// JSON-LD structured data — Person + WebSite + ProfessionalService + LocalBusiness.
// Search engines stitch this graph together via the `@id` references.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Abhishek Sharma',
      url: SITE_URL,
      jobTitle: 'Sr. Frontend Developer - WordPress',
      image: `${SITE_URL}/icon.svg`,
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
        'TypeScript',
        'Next.js',
        'SEO',
        'Core Web Vitals',
        'Speed Optimization',
        'CRM Automation',
        'Zapier',
        'Make',
      ],
      email: 'mailto:sharma.ab6707@gmail.com',
      telephone: '+91-9664108250',
      sameAs: [
        'https://www.linkedin.com/in/abhishek-sharma-023581163/',
        'https://wa.me/919664108250',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
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
        'Elementor Development',
        'WooCommerce Development',
        'Landing Page Design',
        'Website Speed Optimization',
        'SEO Optimization',
        'CRM Integration',
        'GoHighLevel Setup',
        'Workflow Automation',
        'API Integration',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'Abhishek Sharma — WordPress & Web Developer',
      image: `${SITE_URL}/icon.svg`,
      url: SITE_URL,
      telephone: '+91-9664108250',
      email: 'sharma.ab6707@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.9124,
        longitude: 75.7873,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Australia' },
      ],
      sameAs: [
        'https://www.linkedin.com/in/abhishek-sharma-023581163/',
        'https://wa.me/919664108250',
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
