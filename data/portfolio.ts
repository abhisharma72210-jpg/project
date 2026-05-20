import {
  Code2,
  Layers,
  Sparkles,
  Gauge,
  Plug2,
  Workflow,
  Globe2,
  Search,
  Bot,
  Briefcase,
  GraduationCap,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Abhishek Sharma',
  shortName: 'Abhishek',
  title: 'Sr. Frontend Developer - WordPress',
  tagline:
    'Sr. Frontend Developer with 5+ years building fast, responsive, conversion-ready WordPress websites for international brands.',
  email: 'sharma.ab6707@gmail.com',
  whatsapp: '+91-9664108250',
  whatsappLink: 'https://wa.me/919664108250',
  location: 'Based in India · working with clients worldwide',
  availability: 'Available for freelance & full-time projects',
  socials: {
    linkedin: 'https://www.linkedin.com/in/abhishek-sharma-023581163/',
    whatsapp: 'https://wa.me/919664108250',
    email: 'mailto:sharma.ab6707@gmail.com',
  },
};

export const stats: { label: string; value: number; suffix?: string }[] = [
  { label: 'Projects completed', value: 50, suffix: '+' },
  { label: 'Happy clients', value: 30, suffix: '+' },
  { label: 'Countries served', value: 10, suffix: '+' },
  { label: 'Years in WordPress dev', value: 5, suffix: '+' },
];

export type Skill = {
  name: string;
  level: number; // 0–100
  category: 'CMS' | 'Frontend' | 'Backend' | 'Tools' | 'Integrations';
  accent: string;
};

export const skills: Skill[] = [
  // Core WordPress
  { name: 'WordPress',           level: 98, category: 'CMS',          accent: 'from-blue-500 to-cyan-400' },
  { name: 'Theme Customization', level: 95, category: 'CMS',          accent: 'from-blue-600 to-indigo-500' },
  { name: 'Plugin Customization',level: 92, category: 'CMS',          accent: 'from-indigo-600 to-purple-500' },
  // WP Foundations
  { name: 'ACF & Custom Post Types', level: 95, category: 'CMS',      accent: 'from-violet-500 to-indigo-400' },
  { name: 'HTML / CSS',          level: 96, category: 'Frontend',     accent: 'from-orange-500 to-pink-400' },
  { name: 'JavaScript / jQuery', level: 90, category: 'Frontend',     accent: 'from-yellow-400 to-amber-300' },
  // Page builders & landing-page tools
  { name: 'Elementor',           level: 96, category: 'CMS',          accent: 'from-pink-500 to-rose-400' },
  { name: 'Divi',                level: 94, category: 'CMS',          accent: 'from-purple-500 to-violet-400' },
  { name: 'Thrive Architect',    level: 92, category: 'CMS',          accent: 'from-emerald-500 to-teal-400' },
  { name: 'Beaver Builder',      level: 90, category: 'CMS',          accent: 'from-orange-500 to-amber-400' },
  { name: 'Oxygen / WPBakery',   level: 88, category: 'CMS',          accent: 'from-indigo-500 to-blue-400' },
  { name: 'Leadpages',           level: 88, category: 'CMS',          accent: 'from-amber-400 to-yellow-500' },
  // E-commerce, carts & courses
  { name: 'WooCommerce',         level: 92, category: 'CMS',          accent: 'from-fuchsia-500 to-purple-400' },
  { name: 'Shopify',             level: 85, category: 'CMS',          accent: 'from-green-500 to-emerald-600' },
  { name: 'ThriveCart',          level: 90, category: 'Integrations', accent: 'from-rose-500 to-pink-600' },
  { name: 'Thinkific',           level: 87, category: 'Integrations', accent: 'from-teal-500 to-cyan-600' },
  // Frontend & blocks
  { name: 'Bootstrap',           level: 93, category: 'Frontend',     accent: 'from-indigo-500 to-violet-400' },
  { name: 'Gutenberg Blocks',    level: 88, category: 'CMS',          accent: 'from-sky-500 to-cyan-400' },
  // CRMs, automations & payments
  { name: 'GoHighLevel',         level: 92, category: 'Integrations', accent: 'from-amber-500 to-orange-400' },
  { name: 'ActiveCampaign',      level: 92, category: 'Integrations', accent: 'from-blue-600 to-indigo-500' },
  { name: 'Zapier / Make',       level: 90, category: 'Integrations', accent: 'from-red-500 to-rose-400' },
  { name: 'Stripe / Payment Integrations', level: 90, category: 'Integrations', accent: 'from-violet-600 to-indigo-600' },
  { name: 'ScoreApp',            level: 85, category: 'Integrations', accent: 'from-purple-600 to-pink-500' },
  // Tools
  { name: 'SEO Optimization',    level: 90, category: 'Tools',        accent: 'from-violet-500 to-indigo-400' },
  { name: 'Core Web Vitals',     level: 90, category: 'Tools',        accent: 'from-cyan-500 to-teal-400' },
  { name: 'Speed Optimization',  level: 93, category: 'Tools',        accent: 'from-lime-400 to-emerald-500' },
  { name: 'AI - Claude, Codex, Cursor', level: 92, category: 'Tools', accent: 'from-purple-500 to-fuchsia-500' },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  /** Tailwind gradient classes used as the service's signature color. */
  accent: string;
};

export const services: Service[] = [
  {
    title: 'WordPress Development',
    description:
      'Custom WordPress websites built with Elementor, Divi, Thrive, Beaver Builder, Oxygen and WPBakery - clean, fast and easy to edit.',
    icon: Code2,
    accent: 'from-violet-500 to-indigo-500',
    bullets: ['Elementor & Divi builds', 'Custom themes', 'ACF + CPT architecture', 'Editor-friendly setups'],
  },
  {
    title: 'WooCommerce & E-commerce',
    description:
      'Online stores built on WooCommerce with custom product layouts, checkout tweaks and payment integrations.',
    icon: Layers,
    accent: 'from-pink-500 to-rose-500',
    bullets: ['WooCommerce stores', 'Custom checkout', 'Product page design', 'Payment integrations'],
  },
  {
    title: 'High-Converting Landing Pages',
    description:
      'Pixel-perfect landing pages designed to convert - clean copy structure, fast load times and tracking baked in.',
    icon: Sparkles,
    accent: 'from-amber-500 to-orange-500',
    bullets: ['Conversion-focused design', 'Funnel-ready', 'Pixel & event tracking', 'A/B-ready structure'],
  },
  {
    title: 'Performance & Speed Optimization',
    description:
      'Core Web Vitals, mobile responsiveness and Lighthouse score improvements that translate into real ranking and conversion gains.',
    icon: Gauge,
    accent: 'from-cyan-400 to-sky-500',
    bullets: ['Core Web Vitals', 'Image optimization', 'Caching strategies', 'Lighthouse 90+'],
  },
  {
    title: 'SEO Optimization',
    description:
      'On-page and technical SEO that helps your site rank and convert - schema, meta, internal linking, content structure and Core Web Vitals tuning.',
    icon: Search,
    accent: 'from-yellow-500 to-amber-500',
    bullets: ['On-page SEO', 'Technical SEO & schema', 'Keyword targeting', 'Yoast / Rank Math setup'],
  },
  {
    title: 'CRM Integrations',
    description:
      'GoHighLevel, ActiveCampaign, HubSpot and Mailchimp - wired into your forms, funnels and automations end-to-end.',
    icon: Plug2,
    accent: 'from-emerald-400 to-teal-500',
    bullets: ['GoHighLevel', 'ActiveCampaign', 'HubSpot', 'Mailchimp'],
  },
  {
    title: 'Workflow Automation',
    description:
      'Zapier and Make automations that connect your tools and remove repetitive ops work for your team.',
    icon: Workflow,
    accent: 'from-fuchsia-500 to-purple-500',
    bullets: ['Zapier flows', 'Make / Integromat', 'Webhook plumbing', 'AI-assisted automations'],
  },
  {
    title: 'API & Chatbot Integration',
    description:
      'REST API integrations and OpenAI-powered chatbots embedded into WordPress for richer, smarter user experiences.',
    icon: Globe2,
    accent: 'from-sky-400 to-blue-500',
    bullets: ['REST API integration', 'OpenAI chatbots', 'Third-party APIs', 'Custom endpoints'],
  },
  {
    title: 'AI Integration & Development',
    description:
      'AI-assisted development with Claude, Codex and Cursor - plus OpenAI / Anthropic API integrations into your WordPress, CRM and automation stack.',
    icon: Bot,
    accent: 'from-purple-500 to-pink-500',
    bullets: ['AI-assisted dev (Claude · Codex · Cursor)', 'OpenAI & Anthropic API integration', 'WordPress AI chatbots', 'AI-powered workflow automation'],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'WordPress Frontend Developer',
    company: 'Epic Businesses',
    period: '2021 - Present',
    description:
      'Building scalable digital solutions for international brands - flagship marketing sites, coaching funnels, event landing pages and CRM-integrated WordPress builds.',
    icon: Rocket,
    highlights: [
      'Developed 50+ responsive WordPress sites with Elementor, Divi, Thrive, Beaver Builder, Oxygen and WPBakery',
      'Built custom functionality with HTML, CSS, Bootstrap, jQuery, ACF and Custom Post Types',
      'Integrated GoHighLevel, ActiveCampaign, Mailchimp and Zapier across funnels',
      'Optimized for speed, SEO and mobile - improving Core Web Vitals and conversions',
      'Leveraged AI tools (ChatGPT, AI assistants) to improve development efficiency',
    ],
  },
  {
    role: 'Web Designer · WordPress Frontend Developer',
    company: 'Raivasa International',
    period: '2020 - 2021',
    description:
      'Built foundational expertise in WordPress and Bootstrap, delivering responsive websites and supporting senior developers on production projects.',
    icon: Briefcase,
    highlights: [
      'Built responsive WordPress + Bootstrap websites',
      'Strengthened skills in HTML, CSS, jQuery and JavaScript',
      'Contributed to small projects and supported senior developers',
      'Learned production best practices for user-friendly web solutions',
    ],
  },
  {
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Jaipur National University',
    period: '2019 - 2022',
    description:
      'Focused on software development, web technologies and computer programming - with hands-on experience building and optimizing real web solutions alongside the degree.',
    icon: GraduationCap,
    highlights: [
      'Software development & web technologies',
      'Built real websites alongside the curriculum',
      'Foundation in programming & problem-solving',
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  cover: string;
  accent: string;
  technologies: string[];
  overview: string;
  myRole: string[];
  link?: string;
};

/* --------------------------------------------------------------------------
   Real client projects from Abhishek's portfolio (CV - Latest Projects).
   Each entry uses a templated case-study built from his actual contributions
   so the modal reads honestly about what he does, with a live link to the
   real site.
   -------------------------------------------------------------------------- */

const COMMON_MY_ROLE = [
  'Owned the full WordPress build end-to-end - every page designed and developed in Elementor, Divi, Thrive Architect or Beaver Builder per the project',
  'Custom layouts and reusable templates powered by ACF and Custom Post Types',
  'Forms, popups and lead capture wired into the client’s CRM (GoHighLevel, ActiveCampaign, Mailchimp) with Zapier / Make automations where needed',
  'On-page and technical SEO - clean heading hierarchy, schema, meta, internal linking and Yoast / Rank Math configuration',
  'Performance & Core Web Vitals optimization - caching, image pipeline, lazy-loading and asset cleanup for sub-2s LCP',
  'Mobile-first responsive design with full cross-browser QA',
  'Bug fixes, migrations and security hardening across the WordPress stack',
  'Editor-friendly CMS handover so the client’s team can update content without touching code',
];

type Seed = {
  slug: string;
  title: string;
  category: string;
  short: string;
  link: string;
  accent: string;
  builder: string;
  overview: string;
  /** Optional explicit tech stack - overrides the default WordPress + builder list. */
  tech?: string[];
};

const SEEDS: Seed[] = [
  {
    slug: 'mindvalley',
    title: 'Mindvalley',
    category: 'Personal Growth Platform',
    short:
      'Contributed to landing pages and campaign builds for a global personal-growth platform with a massive content library.',
    link: 'https://www.mindvalley.com/',
    accent: 'from-violet-500 via-indigo-500 to-cyan-400',
    builder: 'Elementor',
    overview:
      'Mindvalley is one of the largest personal-growth platforms in the world. I contributed to landing pages and campaign builds - delivering fast, on-brand WordPress experiences that hold up at scale.',
  },
  {
    slug: 'breakthrough-weekend',
    title: 'Breakthrough Weekend Immersion',
    category: 'Event · Immersion Funnel',
    short:
      'Event landing page and registration funnel for a high-ticket immersion experience - fully hand-coded.',
    link: 'https://breakthroughweekend.in/immersion/',
    accent: 'from-pink-500 via-rose-400 to-amber-300',
    builder: 'Custom Code',
    tech: ['Custom Code (Claude)'],
    overview:
      'A conversion-focused event funnel for a multi-day immersion experience - fully hand-coded with HTML, CSS and JavaScript (AI-assisted with Claude), with a clear narrative and CRM-driven follow-up automations.',
  },
  {
    slug: 'limitless-immersion',
    title: 'Limitless Immersion',
    category: 'Event · Coaching',
    short:
      'High-ticket coaching event landing page with embedded VSL and CRM-driven booking flow.',
    link: 'https://limitlessimmersion.com/',
    accent: 'from-amber-500 via-orange-400 to-pink-400',
    builder: 'Divi',
    overview:
      'A premium coaching event site built around a video-first hero, social proof and a frictionless application/booking flow wired into the team’s CRM.',
  },
  {
    slug: 'eden-method',
    title: 'Eden Method',
    category: 'Coaching Method',
    short:
      'Brand site for a coaching method - clean storytelling, programs library and sales pages.',
    link: 'https://edenmethod.com/',
    accent: 'from-emerald-500 via-teal-400 to-cyan-400',
    builder: 'Elementor',
    overview:
      'A clean, story-driven brand site for a coaching method. Custom programs library, signature method explainer and CRM-integrated sales pages.',
  },
  {
    slug: 'highest-self-institute',
    title: 'Highest Self Institute',
    category: 'Coaching Institute',
    short:
      'Programs hub and lead funnel for a coaching institute, integrated into a full marketing stack.',
    link: 'https://highestselfinstitute.com/',
    accent: 'from-violet-500 via-purple-500 to-fuchsia-500',
    builder: 'Elementor',
    overview:
      'A full marketing site and programs hub for a coaching institute - content-rich landing pages, application funnels and CRM-driven lead routing.',
  },
  {
    slug: 'i-am-sahara-rose',
    title: 'I Am Sahara Rose',
    category: 'Personal Brand · Author',
    short:
      'Author and podcaster brand site with podcast archive, books, courses and live events.',
    link: 'https://iamsahararose.com/',
    accent: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    builder: 'Elementor',
    overview:
      'A flagship personal brand site for an author/podcaster. Modular page system covering podcast, books, courses and live events with a unified content model.',
  },
  {
    slug: 'neeta-bhushan',
    title: 'Neeta Bhushan',
    category: 'Personal Brand · Coach',
    short:
      'Author and coach brand site featuring books, podcast, speaking and signature programs - built on Showit.',
    link: 'https://neetabhushan.com/',
    accent: 'from-rose-500 via-pink-500 to-fuchsia-500',
    builder: 'Showit',
    tech: ['Showit'],
    overview:
      'A premium personal brand site built on Showit, spanning books, podcast, speaking engagements and signature programs - all with a consistent editorial-grade aesthetic.',
  },
  {
    slug: 'tegenoto',
    title: 'Tegenoto · Trust by Share One',
    category: 'Trust · Web Platform',
    short:
      'Landing experience for a trust/identity product within the Share One ecosystem - built on GoHighLevel.',
    link: 'https://trust.share.one/tegenoto',
    accent: 'from-blue-500 via-indigo-500 to-violet-500',
    builder: 'GoHighLevel',
    tech: ['GoHighLevel'],
    overview:
      'A focused product landing for a trust/identity offering - built on GoHighLevel with custom HTML/CSS, clear value proposition and tight integration with the parent platform.',
  },
  {
    slug: 'epic-businesses',
    title: 'Epic Businesses',
    category: 'Agency · WordPress',
    short:
      'Marketing site for Epic Businesses - the agency I currently ship production work with.',
    link: 'https://gowithepic.com/',
    accent: 'from-amber-500 via-orange-500 to-red-500',
    builder: 'Elementor',
    overview:
      'Flagship marketing site for the agency I work with - service pages, case studies and lead capture flows tuned for conversions.',
  },
  {
    slug: 'soma-breath',
    title: 'SOMA Breath',
    category: 'Wellness · Breathwork',
    short:
      'Global breathwork brand site with courses, certifications and a worldwide community hub.',
    link: 'https://www.somabreath.com/',
    accent: 'from-cyan-400 via-sky-500 to-blue-500',
    builder: 'Divi',
    overview:
      'A global wellness brand spanning courses, instructor certifications and community. Content-heavy WordPress build optimized for global audiences and search.',
  },
  {
    slug: 'belong-festival',
    title: 'The Belong Festival',
    category: 'Festival · Event',
    short:
      'Festival site with lineup, schedule, ticketing flow and sponsor sections.',
    link: 'https://thebelongfestival.com/',
    accent: 'from-orange-500 via-red-500 to-pink-500',
    builder: 'Elementor',
    overview:
      'A festival site covering lineup, schedule, ticketing, FAQ and sponsors - designed to feel alive and convert visitors into ticket buyers.',
  },
  {
    slug: 'ripple-hire',
    title: 'RippleHire',
    category: 'HR Tech · SaaS',
    short:
      'Marketing site for an enterprise referral hiring SaaS - built on HubSpot CMS.',
    link: 'https://www.ripplehire.com/',
    accent: 'from-blue-500 via-cyan-500 to-teal-400',
    builder: 'HubSpot',
    tech: ['HubSpot'],
    overview:
      'Enterprise SaaS marketing site for a referral hiring product - built on HubSpot CMS with modular HubL templates for product, customers, resources and demo requests.',
  },
  {
    slug: 'satori-method',
    title: 'Satori Method',
    category: 'Meditation · Method',
    short:
      'Brand site for a meditation method - story, programs and a clean signup-to-program flow.',
    link: 'https://satorimethod.com/',
    accent: 'from-purple-500 via-fuchsia-500 to-pink-500',
    builder: 'Elementor',
    overview:
      'A brand site for a signature meditation method - calm, intentional design with a clean signup-to-program flow and CRM follow-ups.',
  },
  {
    slug: 'rick-yvanovich',
    title: 'Rick Yvanovich',
    category: 'Personal Brand · Coach',
    short:
      'Coach and speaker personal brand site with programs, podcast and event registrations.',
    link: 'https://rickyvanovich.com/',
    accent: 'from-teal-400 via-emerald-400 to-cyan-400',
    builder: 'Divi',
    overview:
      'A polished personal brand site for a coach/speaker - programs, podcast, speaking page and conversion-focused event registrations.',
  },
  {
    slug: 'coaching-with-sid',
    title: 'Coaching with Sid',
    category: 'Coaching · Personal Brand',
    short:
      'Personal coaching brand site with program landing pages and a booking funnel - fully hand-coded.',
    link: 'https://coachingwithsid.com/',
    accent: 'from-indigo-500 via-violet-500 to-purple-500',
    builder: 'Custom Code',
    tech: ['Custom Code (Claude)'],
    overview:
      'A personal coaching brand site, fully hand-coded with HTML, CSS and JavaScript (AI-assisted with Claude) - program landing pages, testimonials and a CRM-integrated booking funnel.',
  },
  {
    slug: 'naya-life',
    title: 'Naya Life',
    category: 'Lifestyle · Coaching',
    short:
      'Lifestyle and coaching brand site - story-driven design with a clean program structure.',
    link: 'https://nayalife.in/',
    accent: 'from-rose-400 via-amber-400 to-orange-400',
    builder: 'Elementor',
    overview:
      'A lifestyle and coaching brand built around story-driven design, with a clean program structure and lead capture across the funnel.',
  },
  {
    slug: 'happiness-habits',
    title: 'Happiness Habits',
    category: 'Coaching · Wellbeing',
    short:
      'Wellbeing coaching brand with a programs hub and tight CRM-driven lead capture.',
    link: 'https://happinesshabits.in/',
    accent: 'from-yellow-400 via-amber-400 to-orange-500',
    builder: 'Elementor',
    overview:
      'A wellbeing coaching brand with a programs hub, applications flow and CRM-driven lead capture wired into ActiveCampaign / Mailchimp.',
  },
  {
    slug: 'appbay-tech',
    title: 'AppBay Tech',
    category: 'Tech Agency',
    short:
      'Tech agency marketing site featuring services, case studies and lead generation forms.',
    link: 'https://appbaytech.com/',
    accent: 'from-cyan-500 via-blue-500 to-indigo-500',
    builder: 'Elementor',
    overview:
      'A tech agency marketing site featuring services, case studies, technology stack and lead generation forms wired into the team’s CRM.',
  },
  {
    slug: 'the-rich-life',
    title: 'The Rich Life',
    category: 'Personal Brand · Lifestyle',
    short:
      'Lifestyle brand site with content, programs and conversion-focused landing pages.',
    link: 'https://therichlife.com/',
    accent: 'from-emerald-400 via-teal-400 to-lime-300',
    builder: 'Divi',
    overview:
      'A lifestyle and personal brand site combining content, programs and conversion-focused landing pages with a calm, premium aesthetic.',
  },
];

export const projects: Project[] = SEEDS.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  shortDescription: s.short,
  cover: s.slug,
  accent: s.accent,
  technologies: s.tech ?? ['WordPress'],
  overview: s.overview,
  myRole: COMMON_MY_ROLE,
  link: s.link,
}));

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Working with Abhishek was a great experience for our team. He supported us with WordPress development, optimized multiple sales pages, and improved overall website performance. His attention to detail and problem-solving mindset made a real difference for our business. As CEO, I really appreciated his dedication, communication, and ability to deliver quality work on time.',
    name: 'Tristan Truscott',
    title: 'CEO',
    company: 'Satori Method',
    initials: 'TT',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    quote:
      'Abhishek helped us improve our website structure and handled custom WordPress functionality exactly the way we needed. He was proactive, reliable, and always focused on delivering high-quality work. As CEO, I truly valued his professionalism and the consistency he brought to every stage of the project.',
    name: 'Rick Yvanovich',
    title: 'CEO',
    company: 'rickyvanovich.com',
    initials: 'RY',
    accent: 'from-teal-400 to-emerald-400',
  },
  {
    quote:
      'We worked with Abhishek on several website and funnel-related tasks, and he consistently delivered excellent results. From creating custom post types to optimizing pages for better performance and SEO, his contribution was valuable to our business growth. His technical expertise and work ethic made him a reliable part of the project.',
    name: 'Ajit Nawalkha',
    title: 'Founder',
    company: 'Greater Inside · Coach Ajit',
    initials: 'AN',
    accent: 'from-amber-500 to-orange-400',
  },
  {
    quote:
      'Abhishek did an outstanding job supporting our development needs. He optimized our WordPress website, improved loading speed, and helped create a smoother experience for our audience. As CEO, I appreciated how committed he was to delivering clean, efficient, and high-quality work.',
    name: 'Niraj Naik',
    title: 'CEO',
    company: 'SOMA Breath',
    initials: 'NN',
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    quote:
      'Abhishek brought strong technical expertise to our project and helped us with WordPress customization, SEO improvements, and landing page development. His work ethic, communication, and attention to detail were highly appreciated by our entire team. He genuinely cared about helping our business succeed online.',
    name: 'Sahara Rose',
    title: 'Founder & Author',
    company: 'I Am Sahara Rose',
    initials: 'SR',
    accent: 'from-fuchsia-500 to-purple-500',
  },
  {
    quote:
      'Abhishek consistently delivered beyond expectations throughout our collaboration. He supported us with WordPress development, website optimization, and funnel improvements while always maintaining excellent communication and fast turnaround times. His dedication and ability to solve challenges quickly made a significant impact on our business.',
    name: 'Share One',
    title: 'Team',
    company: 'share.one',
    initials: 'SO',
    accent: 'from-blue-500 to-indigo-500',
  },
];

export const navLinks: { label: string; href: string }[] = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Services',     href: '#services' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
];
