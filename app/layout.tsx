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

export const metadata: Metadata = {
  title: 'Abhishek Sharma — Sr. Frontend Developer · WordPress',
  description:
    'Sr. Frontend Developer with 5+ years building fast, responsive, conversion-ready WordPress websites — Elementor, Divi, WooCommerce, ACF and CRM integrations.',
  openGraph: {
    title: 'Abhishek Sharma — Sr. Frontend Developer · WordPress',
    description:
      '5+ years of WordPress, Elementor, Divi, WooCommerce, ACF and CRM integrations. 50+ shipped websites for international brands.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
