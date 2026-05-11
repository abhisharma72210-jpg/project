import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollBackground from '@/components/ScrollBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Abhishek Sharma - WordPress, Elementor & Custom Web Developer | abisek.site',
  description:
    'Hire Abhishek Sharma - a Sr. Frontend Developer with 5+ years and 50+ shipped websites. WordPress, Elementor, Divi, WooCommerce, GoHighLevel, HubSpot, Showit and custom-coded builds for international brands. Performance, SEO and CRM integrations included.',
  alternates: { canonical: 'https://abisek.site' },
};

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <ScrollBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
