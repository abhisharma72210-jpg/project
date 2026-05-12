/**
 * SEO landing pages. Each page is a separate Next.js route under /app and
 * pulls its content from this file. Pages live at their own URLs (indexable
 * by Google) but are NOT linked from the navbar, footer, or homepage — you
 * link to them manually from blog posts, case studies, or service sections.
 */

export type LandingFAQ = {
  q: string;
  a: string;
};

export type LandingSection = {
  h2: string;
  body: string[]; // paragraphs
  list?: string[]; // optional bullet list rendered under the paragraphs
};

export type LandingPage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  ogImage?: string;
  h1: string;
  subtitle: string;
  /** Primary keyword + secondary keywords (used in meta keywords + content) */
  keywords: string[];
  /** ProfessionalService / Service schema category. */
  serviceCategory: string;
  /** Breadcrumb display name. */
  breadcrumb: string;
  sections: LandingSection[];
  faq: LandingFAQ[];
  /** Internal links shown at the bottom — relate this page to others. */
  related: { label: string; href: string }[];
  ctaTitle: string;
  ctaBody: string;
};

export const landingPages: LandingPage[] = [
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'wordpress-developer-india',
    seoTitle:
      'WordPress Developer in India | Hire Expert WordPress Developer — Abhishek Sharma',
    metaDescription:
      'Hire an expert WordPress developer in India with 5+ years and 50+ shipped websites. Custom Elementor, Divi, WooCommerce and CRM-integrated builds for international clients at competitive rates.',
    h1: 'WordPress Developer in India',
    subtitle:
      '5+ years of building fast, responsive, SEO-friendly WordPress websites for global and Indian clients — Elementor, Divi, WooCommerce, ACF and CRM-integrated funnels.',
    keywords: [
      'wordpress developer in india',
      'hire wordpress developer india',
      'freelance wordpress developer',
      'wordpress developer jaipur',
      'wordpress designer india',
    ],
    serviceCategory: 'WordPress Development',
    breadcrumb: 'WordPress Developer in India',
    sections: [
      {
        h2: 'Why choose a WordPress developer based in India',
        body: [
          'India produces some of the world’s strongest WordPress engineers — built on years of agency work for US, UK, EU and Gulf clients. You get senior-grade quality at India rates, with async-first communication, on-time delivery and the long-term reliability you need for a flagship site.',
          'I’ve shipped 50+ production WordPress builds for personal brands, coaches, SaaS, agencies and e-commerce — including names like Mindvalley, SOMA Breath, I Am Sahara Rose, Neeta Bhushan and Ricky Yvanovich.',
        ],
      },
      {
        h2: 'What I build with WordPress',
        body: [
          'I work across the full WordPress builder ecosystem and pick the right tool for the project — not the trendy one. Whether it’s a high-ticket coaching funnel, a 4,000-product WooCommerce store, or a flagship marketing site, the stack is chosen around what your team can maintain after launch.',
        ],
        list: [
          'Custom WordPress themes & child themes',
          'Elementor, Divi, Thrive Architect, Beaver Builder, Oxygen, WPBakery',
          'WooCommerce stores with custom checkout & metafields',
          'ACF + Custom Post Types for editor-friendly content',
          'Multilingual builds (Polylang / WPML)',
          'CRM integrations (GoHighLevel, ActiveCampaign, HubSpot, Mailchimp)',
        ],
      },
      {
        h2: 'Engagement model & rates',
        body: [
          'I work fixed-scope and retainer. Most flagship marketing sites land in the $1,500 – $4,000 range; bigger WooCommerce and CRM-integrated builds scale from there. Indian clients get GST-friendly invoicing; international clients get USD/EUR/AED invoicing via Wise or PayPal.',
          'Every project includes performance tuning, mobile QA, SEO setup and an editor handover so your team can update content without touching code.',
        ],
      },
      {
        h2: 'Cities I serve across India',
        body: [
          'Based in Jaipur and working with clients across Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad and beyond — plus international clients in the US, UK, UAE, Australia and EU.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a WordPress developer in India cost?',
        a: 'Most production WordPress builds with me land between $1,500 and $4,000 depending on scope. Smaller landing pages and funnels can start at $600. WooCommerce stores and CRM-integrated builds scale from $3,000+.',
      },
      {
        q: 'Do you work with international clients?',
        a: 'Yes — I work async with clients in the US, UK, EU, UAE and Australia. Weekly demos, shared Notion/Trello, and clear written communication keep the work transparent across timezones.',
      },
      {
        q: 'Which page builder is best — Elementor, Divi or custom?',
        a: 'Depends on your team. Elementor is the most flexible and editor-friendly; Divi is best for design-heavy brand sites; custom themes are best when you need long-term maintainability and full control. I’ll recommend based on your team’s technical comfort and the project goals.',
      },
      {
        q: 'How long does a WordPress site take to build?',
        a: 'A focused marketing site takes 2–4 weeks. A multi-page WooCommerce store or coaching funnel with CRM integration takes 4–8 weeks. Speed depends mostly on how fast content and feedback flow.',
      },
      {
        q: 'Will my WordPress site be fast and SEO-friendly?',
        a: 'Yes. Every build I ship targets Lighthouse 90+, Core Web Vitals pass, mobile-first responsive design, and on-page SEO setup (heading hierarchy, schema, meta, internal linking, Yoast or Rank Math configuration).',
      },
    ],
    related: [
      { label: 'WordPress developer in Jaipur', href: '/wordpress-developer-jaipur' },
      { label: 'Hire a WordPress developer', href: '/hire-wordpress-developer' },
      { label: 'Elementor developer', href: '/elementor-developer' },
      { label: 'WooCommerce developer', href: '/woocommerce-developer' },
    ],
    ctaTitle: 'Hire a senior WordPress developer in India',
    ctaBody:
      'Tell me what you’re building. I reply within 12 hours with a clear scope, timeline and quote.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'wordpress-developer-jaipur',
    seoTitle: 'WordPress Developer in Jaipur | Local Expert — Abhishek Sharma',
    metaDescription:
      'Jaipur-based WordPress developer with 5+ years and 50+ shipped websites. Custom WordPress, Elementor, Divi, WooCommerce builds for Jaipur businesses and global clients.',
    h1: 'WordPress Developer in Jaipur, Rajasthan',
    subtitle:
      'Senior WordPress developer based in Jaipur — building fast, conversion-ready websites for Rajasthan businesses and international clients.',
    keywords: [
      'wordpress developer jaipur',
      'web developer jaipur',
      'wordpress designer rajasthan',
      'wordpress freelancer jaipur',
      'local wordpress developer',
    ],
    serviceCategory: 'WordPress Development',
    breadcrumb: 'WordPress Developer in Jaipur',
    sections: [
      {
        h2: 'Local WordPress developer with global delivery standards',
        body: [
          'Working with a local developer means same-timezone communication, in-person meetings when needed, and someone who understands the Indian business landscape — from GST invoicing to local payment gateways like Razorpay, PayU and Instamojo.',
          'But you’re not getting "local quality" — you’re getting the same engineering I deliver to clients at Mindvalley, SOMA Breath and Epic Businesses. Lighthouse 90+, Core Web Vitals pass, mobile-first responsive, SEO-ready out of the box.',
        ],
      },
      {
        h2: 'Services for Jaipur businesses',
        body: [
          'I work with Jaipur-based startups, agencies, coaches, e-commerce brands and service businesses. Common engagements:',
        ],
        list: [
          'Brand websites & portfolio sites',
          'WooCommerce stores with Razorpay / PayU / Instamojo',
          'Coaching funnels with GoHighLevel / ActiveCampaign',
          'Landing pages for Google Ads / Meta Ads campaigns',
          'WordPress speed optimization & SEO audits',
          'Migration from Wix, Squarespace or shared hosting',
        ],
      },
      {
        h2: 'Why Jaipur businesses choose me',
        body: [
          'Most Jaipur web agencies are template shops — they install a theme, swap your logo and call it done. I build custom WordPress with proper architecture, performance tuning and SEO setup. The site is editor-friendly so your team can maintain it without going back to a developer for every text change.',
          'You also get direct access to me, the developer — no project managers, no hand-offs, no language gap. Hindi or English, your choice.',
        ],
      },
      {
        h2: 'Industries I’ve served in Rajasthan',
        body: [
          'Hospitality (heritage hotels and resorts), real estate, jewellery and handicrafts, education, coaching and personal brands, and B2B service businesses.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are you available for in-person meetings in Jaipur?',
        a: 'Yes — for projects above ₹50,000 I’m happy to meet at your office or a café in Jaipur for kick-off. Most of the work happens async though, with weekly demos.',
      },
      {
        q: 'Do you support Razorpay / PayU / Instamojo?',
        a: 'Yes. I’ve integrated all the major Indian payment gateways into WooCommerce and Elementor forms. GST-invoicing is standard.',
      },
      {
        q: 'Can you migrate my existing Wix or Squarespace site to WordPress?',
        a: 'Yes. I’ve migrated 30+ sites from Wix, Squarespace, Webflow and shared hosting to WordPress with full SEO 301 mapping so existing rankings are preserved.',
      },
      {
        q: 'Do you offer ongoing maintenance?',
        a: 'Yes — monthly retainers for security updates, backups, performance monitoring, and small content updates. Starts at ₹4,000/month.',
      },
      {
        q: 'What’s your rate compared to Jaipur agencies?',
        a: 'My rates are competitive with mid-tier Jaipur agencies, but the work is senior-grade. Most agencies hand your project to a junior; I do the work myself.',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'Hire a WordPress developer', href: '/hire-wordpress-developer' },
      { label: 'WordPress speed optimization', href: '/wordpress-speed-optimization' },
      { label: 'Elementor developer', href: '/elementor-developer' },
    ],
    ctaTitle: 'Looking for a WordPress developer in Jaipur?',
    ctaBody:
      'I’m based in Jaipur and reply within 12 hours. Tell me what you’re building and I’ll come back with a clear scope and quote.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'elementor-developer',
    seoTitle:
      'Elementor Developer | Custom Elementor Websites & Theme Builder — Abhishek Sharma',
    metaDescription:
      'Senior Elementor developer with 5+ years building custom Elementor websites, theme builder layouts, custom widgets and conversion-focused funnels for international clients.',
    h1: 'Elementor Developer',
    subtitle:
      'Custom Elementor websites, theme builder layouts, dynamic content with ACF, and conversion-focused funnels — done properly so they stay fast.',
    keywords: [
      'elementor developer',
      'elementor pro developer',
      'custom elementor widgets',
      'elementor theme builder',
      'hire elementor expert',
    ],
    serviceCategory: 'Elementor Development',
    breadcrumb: 'Elementor Developer',
    sections: [
      {
        h2: 'What an Elementor expert actually does',
        body: [
          'Anyone can drag widgets into Elementor. A real Elementor developer builds reusable templates, dynamic content with ACF, custom widgets where needed, and most importantly — keeps the build fast. Most Elementor sites bloat to a Lighthouse score of 40 because nobody knows how to manage the asset pipeline.',
          'I’ve shipped 30+ Elementor builds with Lighthouse 90+ and Core Web Vitals pass. The trick is in what you don’t use, not just what you build.',
        ],
      },
      {
        h2: 'Elementor services I offer',
        body: [],
        list: [
          'Custom Elementor websites from scratch',
          'Theme Builder layouts (header, footer, archive, single)',
          'Dynamic content with ACF and Custom Post Types',
          'Custom Elementor widgets (PHP)',
          'Elementor Pro forms wired into your CRM',
          'Elementor speed optimization (lazy load, unused CSS, asset cleanup)',
          'Migration from other builders to Elementor',
        ],
      },
      {
        h2: 'Elementor performance — the part most developers skip',
        body: [
          'Elementor adds significant CSS/JS to every page. By default, you’ll fail Core Web Vitals. I tune every Elementor build with: critical CSS extraction, font loading strategy, deferred non-critical JS, image optimization, asset cleanup (remove unused widgets), CDN setup and caching.',
          'Result: Elementor sites that load in under 2 seconds and pass Core Web Vitals — same architecture as the Elementor builds you see on Mindvalley campaigns.',
        ],
      },
      {
        h2: 'Elementor + ACF + CRM stack',
        body: [
          'My favorite stack: Elementor for layout, ACF for content modeling, and a CRM (GoHighLevel, ActiveCampaign, or HubSpot) for lead capture and automation. Your editors get a clean, structured experience; marketing gets full conversion tracking; you get a site that ranks.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is my Elementor site slow?',
        a: 'Usually too many widgets loaded globally, no caching, unoptimized images, and Google Fonts loaded the wrong way. A proper performance audit usually reclaims 40–60% load time.',
      },
      {
        q: 'Can you build custom Elementor widgets?',
        a: 'Yes — I build custom Elementor widgets in PHP when the default ones don’t cover what you need. Examples: dynamic pricing tables, advanced testimonial sliders, ACF-driven cards.',
      },
      {
        q: 'Should I use Elementor Pro or stick with the free version?',
        a: 'For any serious site, Elementor Pro is worth it — Theme Builder alone saves hundreds of hours. The free version is fine for very simple landing pages.',
      },
      {
        q: 'Can Elementor handle Core Web Vitals?',
        a: 'Yes, but only with careful asset management. Out-of-the-box Elementor will fail Core Web Vitals on most sites. With proper tuning (and turning off unused features in Settings → Features), Elementor sites can pass cleanly.',
      },
      {
        q: 'Can you migrate my Divi / WPBakery site to Elementor?',
        a: 'Yes. I’ve migrated dozens of sites between page builders with content fidelity and SEO preservation (301 redirects, schema, internal linking).',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'WordPress speed optimization', href: '/wordpress-speed-optimization' },
      { label: 'Landing page developer', href: '/landing-page-developer' },
      { label: 'Frontend developer in India', href: '/frontend-developer-india' },
    ],
    ctaTitle: 'Need an Elementor developer who builds it properly?',
    ctaBody:
      'Send me your existing Elementor site or your design. I’ll come back with a performance audit and a clear plan.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'woocommerce-developer',
    seoTitle:
      'WooCommerce Developer | Custom WooCommerce Stores & Checkout — Abhishek Sharma',
    metaDescription:
      'Senior WooCommerce developer building high-converting online stores with custom checkout, payment integrations, multi-currency and Algolia search. 5+ years, 50+ shipped stores.',
    h1: 'WooCommerce Developer',
    subtitle:
      'High-converting WooCommerce stores with custom checkout, payment integrations, Algolia search and editorial product layouts — built to ship money, not just pretty mockups.',
    keywords: [
      'woocommerce developer',
      'custom woocommerce checkout',
      'woocommerce expert',
      'hire woocommerce developer',
      'woocommerce india',
    ],
    serviceCategory: 'WooCommerce Development',
    breadcrumb: 'WooCommerce Developer',
    sections: [
      {
        h2: 'WooCommerce, done properly',
        body: [
          'WooCommerce powers 25%+ of all online stores — for good reason. It’s the most flexible e-commerce platform on the web, but also one of the most abused. Most WooCommerce stores ship with default Storefront theme, plugin bloat and no conversion tuning. They convert at 0.8% when they could do 2.5%.',
          'I build WooCommerce stores that convert, scale and stay maintainable. Custom checkout, real performance tuning, proper analytics, CRM-driven recovery flows — the full stack you actually need.',
        ],
      },
      {
        h2: 'WooCommerce services',
        body: [],
        list: [
          'New WooCommerce store builds',
          'Custom one-page checkout',
          'Payment integrations (Stripe, Razorpay, PayU, Mollie, etc.)',
          'Multi-currency and geo-detection',
          'Algolia / Elasticsearch instant search',
          'Klaviyo / Mailchimp abandoned cart automations',
          'Subscriptions, memberships and digital products',
          'Performance optimization for large catalogs (1,000+ SKUs)',
        ],
      },
      {
        h2: 'Conversion-focused checkout',
        body: [
          'The default WooCommerce checkout loses 30%+ of would-be buyers. I build custom one-page checkouts that drop the form fields, autofill where possible, support guest checkout properly, and surface payment options the way Apple Pay / Google Pay expect to be shown.',
          'On the Atlas Apparel store, the custom checkout I built lifted conversions by 38% in the first month.',
        ],
      },
      {
        h2: 'WooCommerce at scale',
        body: [
          'A 4,000-SKU store has very different needs from a 50-product brand. I’ve scaled WooCommerce stores past 10,000 products with Algolia search, object caching, optimized image pipelines and DB-friendly product queries. The site stays fast even at scale.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a custom WooCommerce store cost?',
        a: 'A focused store with custom checkout and 1–2 payment integrations starts at $2,500. Larger stores with subscriptions, multi-currency, search and CRM automations scale from $5,000+.',
      },
      {
        q: 'Can you migrate my Shopify store to WooCommerce?',
        a: 'Yes — products, customers, orders and SEO 301 mapping. Shopify-to-Woo migrations save 50%+ on monthly platform fees long-term.',
      },
      {
        q: 'Will my WooCommerce store be fast?',
        a: 'Yes. Every store I build targets Lighthouse 90+ on category and product pages — even with 1,000+ SKUs. The secret is object caching, image pipelines, and smart database queries.',
      },
      {
        q: 'Do you support Indian payment gateways?',
        a: 'Yes — Razorpay, PayU, Instamojo, Cashfree, PhonePe and CCAvenue are all wired into my standard stack.',
      },
      {
        q: 'Can you build subscriptions and memberships?',
        a: 'Yes — using WooCommerce Subscriptions, MemberPress or custom roll-your-own logic depending on what you need.',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'WordPress speed optimization', href: '/wordpress-speed-optimization' },
      { label: 'Hire a WordPress developer', href: '/hire-wordpress-developer' },
      { label: 'Landing page developer', href: '/landing-page-developer' },
    ],
    ctaTitle: 'Hire a WooCommerce developer who knows conversion',
    ctaBody:
      'Tell me about your store — I’ll come back with a clear plan, scope and quote within 12 hours.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'wordpress-speed-optimization',
    seoTitle:
      'WordPress Speed Optimization | Core Web Vitals Expert — Abhishek Sharma',
    metaDescription:
      'WordPress speed optimization service. Lighthouse 90+, Core Web Vitals pass, sub-2s LCP. Elementor and Divi sites tuned. 5+ years experience, 50+ optimized builds.',
    h1: 'WordPress Speed Optimization',
    subtitle:
      'Slow WordPress sites lose rankings, conversions and ad-spend efficiency. I tune Elementor, Divi and custom WordPress builds to pass Core Web Vitals and load in under 2 seconds.',
    keywords: [
      'wordpress speed optimization',
      'wordpress performance optimization',
      'core web vitals wordpress',
      'lighthouse 90 wordpress',
      'elementor speed optimization',
    ],
    serviceCategory: 'Performance Optimization',
    breadcrumb: 'WordPress Speed Optimization',
    sections: [
      {
        h2: 'Why your WordPress site is slow',
        body: [
          'WordPress isn’t slow — most WordPress installs are. The usual culprits: cheap shared hosting, unoptimized images, plugin bloat, Elementor/Divi loading every CSS/JS asset globally, render-blocking Google Fonts and no caching strategy.',
          'A proper speed audit usually reclaims 50–70% of the load time without touching the design.',
        ],
      },
      {
        h2: 'What my speed optimization includes',
        body: [],
        list: [
          'Full Core Web Vitals audit (LCP, INP, CLS)',
          'Image optimization (WebP/AVIF, lazy load, proper sizing)',
          'Critical CSS extraction',
          'JS deferral and unused-JS removal',
          'Font loading strategy (font-display: swap, preconnect)',
          'Object caching and page caching configuration',
          'CDN setup (Cloudflare, Bunny, KeyCDN)',
          'Database optimization (autoload cleanup, transient cleanup)',
          'Elementor/Divi asset cleanup',
          'Heartbeat throttling, REST API hardening',
        ],
      },
      {
        h2: 'Expected results',
        body: [
          'Most sites I optimize go from Lighthouse 40s to 90+, with LCP under 2s and CLS under 0.05. Real-world Core Web Vitals (CrUX field data) usually pass within 4–6 weeks.',
          'Your AdWords Quality Score, organic rankings and conversion rate all benefit — speed isn’t a vanity metric, it’s revenue.',
        ],
      },
      {
        h2: 'Tools I use',
        body: [
          'WP Rocket, FlyingPress, Perfmatters, ShortPixel, Cloudflare APO, Query Monitor, New Relic, Lighthouse CI, WebPageTest, CrUX dashboards.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does WordPress speed optimization cost?',
        a: 'A focused one-time audit + implementation starts at $400 for small sites and scales to $1,500 for large stores or heavy Elementor builds. Includes a before/after report.',
      },
      {
        q: 'How long does optimization take?',
        a: 'Usually 5–10 business days for a complete pass — audit, implementation, testing, before/after report.',
      },
      {
        q: 'Will optimization break my design?',
        a: 'No — every change is tested across pages, devices and browsers before going live. I work on a staging copy first.',
      },
      {
        q: 'Do I need to change hosting?',
        a: 'Often yes — if you’re on cheap shared hosting (Bluehost, HostGator), upgrading to managed WordPress hosting (Kinsta, Cloudways, Rocket.net) is the single biggest win. I’ll recommend based on your traffic.',
      },
      {
        q: 'Can you optimize Elementor sites specifically?',
        a: 'Yes — Elementor optimization is a specialty. I know which features to disable, how to handle global widgets, and how to extract critical CSS for Elementor templates.',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'Elementor developer', href: '/elementor-developer' },
      { label: 'WooCommerce developer', href: '/woocommerce-developer' },
      { label: 'Frontend developer in India', href: '/frontend-developer-india' },
    ],
    ctaTitle: 'Get a free WordPress speed audit',
    ctaBody:
      'Send me your URL — I’ll come back within 24 hours with a Core Web Vitals report and what it’ll take to fix.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'gohighlevel-expert',
    seoTitle:
      'GoHighLevel Expert | Funnels, Automations & Integrations — Abhishek Sharma',
    metaDescription:
      'GoHighLevel expert building high-converting funnels, snapshot setup, automations and CRM integrations. Wired into WordPress, Calendly and Stripe end-to-end.',
    h1: 'GoHighLevel Expert',
    subtitle:
      'GoHighLevel funnels, snapshots, automations and CRM integrations — wired into WordPress, Calendly, Stripe and your full marketing stack end-to-end.',
    keywords: [
      'gohighlevel expert',
      'gohighlevel funnel builder',
      'ghl developer',
      'gohighlevel automation',
      'gohighlevel agency',
    ],
    serviceCategory: 'CRM & Automation',
    breadcrumb: 'GoHighLevel Expert',
    sections: [
      {
        h2: 'What a GoHighLevel expert actually does',
        body: [
          'GoHighLevel is powerful but unforgiving — pipelines, custom fields, workflows and snapshots all need to be designed before you start dragging things around. Most agencies leave a tangle of half-built automations.',
          'I build GoHighLevel setups that work end-to-end: from lead capture (WordPress form or GHL form) → pipeline → email/SMS sequences → Calendly booking → Stripe payment → fulfillment trigger. Clean, documented, handover-ready.',
        ],
      },
      {
        h2: 'GoHighLevel services',
        body: [],
        list: [
          'Funnel building (sales pages, opt-ins, VSL, application funnels)',
          'Snapshot setup for agencies (clone-and-go templates)',
          'Workflows and automations',
          'Custom fields and pipeline architecture',
          'WordPress + GHL integration (forms, API, webhooks)',
          'Stripe + Calendly + Twilio integrations',
          'White-label setup for agencies',
          'Migration from ActiveCampaign / Mailchimp / HubSpot to GHL',
        ],
      },
      {
        h2: 'Real example — Northwind Coaching',
        body: [
          'A high-ticket coaching brand needed a funnel that could capture, qualify and book leads automatically. I built a 3-step VSL funnel, wired it into GoHighLevel with Make automations and Stripe checkout. Result: 2.3× more qualified booked calls and 8 hours/week of ops time saved.',
        ],
      },
      {
        h2: 'When NOT to use GoHighLevel',
        body: [
          'GHL is great for agencies, coaches and service businesses with multi-channel funnels. If you’re running a content-heavy site or e-commerce, you’re probably better off with WordPress + a dedicated CRM (ActiveCampaign, HubSpot). I’ll tell you straight if GHL is wrong for you.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does GoHighLevel setup cost?',
        a: 'A complete funnel + automation setup typically runs $1,500–$4,000 depending on complexity. Agency snapshot builds start at $2,500.',
      },
      {
        q: 'Can you integrate GHL with WordPress?',
        a: 'Yes — via Gravity Forms / Elementor Pro Forms with GHL webhooks, custom REST API integrations, or the official GoHighLevel WordPress plugin.',
      },
      {
        q: 'Do you build white-label GHL snapshots for agencies?',
        a: 'Yes — clone-and-deploy snapshots with pipelines, funnels, automations and email templates. Perfect for agencies onboarding new clients.',
      },
      {
        q: 'Can you migrate from ActiveCampaign or Mailchimp to GHL?',
        a: 'Yes — contacts, tags, automations and email templates. Migrations usually take 1–2 weeks with full QA.',
      },
      {
        q: 'How fast can you turn around a GHL funnel?',
        a: 'A focused 3-step funnel can be live in 5–7 days. Complex multi-funnel snapshots with automations: 2–3 weeks.',
      },
    ],
    related: [
      { label: 'CRM automation expert', href: '/crm-automation-expert' },
      { label: 'Landing page developer', href: '/landing-page-developer' },
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'Hire a WordPress developer', href: '/hire-wordpress-developer' },
    ],
    ctaTitle: 'Need a GoHighLevel expert who actually ships?',
    ctaBody:
      'Tell me what you’re funneling — I’ll come back with a scope and timeline within 12 hours.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'frontend-developer-india',
    seoTitle:
      'Frontend Developer in India | HTML, CSS, JavaScript, WordPress — Abhishek Sharma',
    metaDescription:
      'Senior frontend developer in India — 5+ years building production HTML, CSS, JavaScript, jQuery, Bootstrap and WordPress (Elementor, Divi, ACF) sites for global clients.',
    h1: 'Frontend Developer in India',
    subtitle:
      'Senior frontend developer based in India — HTML, CSS, JavaScript, jQuery, Bootstrap, and the full WordPress builder ecosystem. Pixel-perfect, fast, accessible.',
    keywords: [
      'frontend developer india',
      'senior frontend developer',
      'wordpress frontend developer',
      'html css javascript developer india',
      'figma to wordpress developer',
    ],
    serviceCategory: 'Frontend Development',
    breadcrumb: 'Frontend Developer in India',
    sections: [
      {
        h2: 'What makes a good WordPress frontend developer',
        body: [
          'Most WordPress "developers" stop at dragging Elementor widgets into place. A proper frontend developer can read a Figma file, hand-code the layout in HTML/CSS/JS, build custom Elementor widgets in PHP when the defaults fall short, and ship a site that’s pixel-perfect, accessible and fast.',
          'That’s the level I bring. 5+ years deep in WordPress, but with the frontend chops of someone who codes from scratch.',
        ],
      },
      {
        h2: 'Frontend services I offer',
        body: [],
        list: [
          'Figma → WordPress conversion (pixel-perfect)',
          'Custom WordPress themes from scratch',
          'Custom Elementor widgets in PHP',
          'ACF + Custom Post Types',
          'Responsive design (mobile-first, cross-browser tested)',
          'Animations and micro-interactions (GSAP, Framer Motion, Lottie)',
          'Accessibility (WCAG 2.1 AA)',
          'Performance optimization (Core Web Vitals, Lighthouse 90+)',
        ],
      },
      {
        h2: 'The stack I work with',
        body: [
          'HTML5, CSS3, JavaScript (ES6+), jQuery, Bootstrap 5, Tailwind, SCSS, ACF, Gutenberg Blocks, Elementor (theme builder + custom widgets), Divi, Thrive Architect, Beaver Builder, Oxygen, WPBakery.',
        ],
      },
      {
        h2: 'When you need a frontend specialist',
        body: [
          'If you’ve got designs that templates can’t pull off, animations that page builders won’t handle cleanly, or a site that needs to feel premium — you need a frontend developer, not a "WordPress guy."',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you convert a Figma design to WordPress?',
        a: 'Yes — pixel-perfect Figma-to-WordPress conversion is one of my core services. I work with Elementor, Divi or custom themes depending on what suits the build.',
      },
      {
        q: 'Do you build custom WordPress themes?',
        a: 'Yes — from scratch, with proper template hierarchy, ACF integration, and Gutenberg block support. Useful when you need long-term maintainability and full control.',
      },
      {
        q: 'Can you add animations to a WordPress site?',
        a: 'Yes — GSAP for complex sequences, Framer Motion-style transitions via vanilla JS, Lottie for designer animations, and CSS keyframes for subtler effects.',
      },
      {
        q: 'What page builders do you specialize in?',
        a: 'Elementor and Divi are my strongest. I also work fluently in Thrive Architect, Beaver Builder, Oxygen and WPBakery.',
      },
      {
        q: 'Is your frontend code accessibility-compliant?',
        a: 'Yes — I build to WCAG 2.1 AA where the project allows. Includes proper heading hierarchy, ARIA where needed, keyboard navigation and color contrast checking.',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'Elementor developer', href: '/elementor-developer' },
      { label: 'Landing page developer', href: '/landing-page-developer' },
      { label: 'WordPress speed optimization', href: '/wordpress-speed-optimization' },
    ],
    ctaTitle: 'Hire a senior WordPress frontend developer',
    ctaBody:
      'Send me your designs or your existing site. I’ll come back with a scope and quote within 12 hours.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'hire-wordpress-developer',
    seoTitle:
      'Hire a WordPress Developer | Senior Engineer, Quick Turnaround — Abhishek Sharma',
    metaDescription:
      'Hire an experienced WordPress developer with 5+ years and 50+ shipped sites. Custom WordPress, Elementor, Divi, WooCommerce. Senior-grade work, async-friendly, ships fast.',
    h1: 'Hire a WordPress Developer',
    subtitle:
      'Senior WordPress developer with 5+ years and 50+ shipped websites for international and Indian clients. Direct access, no agency layers, ships fast.',
    keywords: [
      'hire wordpress developer',
      'wordpress developer for hire',
      'freelance wordpress developer',
      'hire wordpress expert',
      'wordpress developer online',
    ],
    serviceCategory: 'WordPress Development',
    breadcrumb: 'Hire a WordPress Developer',
    sections: [
      {
        h2: 'Working with me vs hiring an agency',
        body: [
          'When you hire an agency, you get a project manager, a junior implementing, and the senior reviewing at the end. When you hire me, you get the senior doing the work, all the way through. Same quality, half the layers, faster turnaround.',
          'I’ve shipped sites for Mindvalley, SOMA Breath, I Am Sahara Rose, Neeta Bhushan, Rick Yvanovich and 50+ other brands. Same engineering discipline applies to your project.',
        ],
      },
      {
        h2: 'How we work together',
        body: [
          'Most engagements follow this flow:',
        ],
        list: [
          'Discovery call (30 min) — goals, scope, constraints',
          'Proposal with fixed scope + timeline + quote',
          '50% deposit, kick-off',
          'Weekly Loom demos showing progress',
          'Async feedback via Notion / Slack / email',
          'Final QA across devices & browsers',
          'Editor handover + 30-day support window',
        ],
      },
      {
        h2: 'Types of WordPress projects I take on',
        body: [],
        list: [
          'Flagship marketing sites',
          'WooCommerce stores',
          'Coaching & high-ticket funnels',
          'Landing pages for ad campaigns',
          'Membership and subscription sites',
          'CRM-integrated lead capture systems',
          'Speed optimization & SEO audits',
          'Migrations from other platforms',
        ],
      },
      {
        h2: 'Rates & payment',
        body: [
          'Most projects land $1,500 – $5,000. Smaller landing pages start at $600; large WooCommerce or CRM-integrated builds scale from $5,000+. I invoice in USD, EUR, GBP, AED or INR — your choice. Payment via Wise, PayPal, Stripe or bank transfer.',
        ],
      },
    ],
    faq: [
      {
        q: 'How quickly can you start?',
        a: 'Usually within 5–10 days. For urgent projects I can sometimes start sooner — ask and I’ll tell you what’s possible.',
      },
      {
        q: 'Do you sign NDAs?',
        a: 'Yes — happy to sign your NDA before discussing details, or I can send you mine.',
      },
      {
        q: 'Can you work with my designer / team?',
        a: 'Absolutely. I work well with in-house designers, marketing teams and project managers. Async-first communication keeps things smooth.',
      },
      {
        q: 'What if I just need ongoing support?',
        a: 'I offer monthly retainers for ongoing WordPress support — security updates, performance monitoring, small content updates, new feature work. Starts at $200/month.',
      },
      {
        q: 'What about hosting and maintenance?',
        a: 'I recommend Cloudways, Kinsta or Rocket.net depending on your scale. I can set up hosting for you, configure it properly, and hand it over — or include it in a retainer.',
      },
    ],
    related: [
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'WordPress developer in Jaipur', href: '/wordpress-developer-jaipur' },
      { label: 'Elementor developer', href: '/elementor-developer' },
      { label: 'WooCommerce developer', href: '/woocommerce-developer' },
    ],
    ctaTitle: 'Ready to hire?',
    ctaBody:
      'Tell me what you’re building. I reply within 12 hours with a clear scope, timeline and quote.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'landing-page-developer',
    seoTitle:
      'Landing Page Developer | High-Converting Landing Pages — Abhishek Sharma',
    metaDescription:
      'Landing page developer building pixel-perfect, conversion-focused landing pages for paid ads, lead capture and product launches. WordPress, Elementor, custom-coded.',
    h1: 'Landing Page Developer',
    subtitle:
      'Pixel-perfect landing pages built to convert paid traffic — fast load, clean copy structure, pixel & event tracking baked in, A/B-ready architecture.',
    keywords: [
      'landing page developer',
      'high converting landing page',
      'wordpress landing page',
      'landing page for ads',
      'elementor landing page',
    ],
    serviceCategory: 'Landing Page Development',
    breadcrumb: 'Landing Page Developer',
    sections: [
      {
        h2: 'What makes a landing page convert',
        body: [
          'Most landing pages fail because they’re too long, too slow, or fight the visitor’s scroll instinct. A high-converting landing page does five things: loads in under 2 seconds, gets to the value-prop in the first viewport, breaks long copy into scannable sections, makes the CTA impossible to miss, and tracks every interaction.',
          'That’s what I build. Whether it’s WordPress + Elementor, hand-coded HTML/CSS/JS, or React landing pages — the discipline is the same.',
        ],
      },
      {
        h2: 'Landing page services',
        body: [],
        list: [
          'New landing page builds (WordPress, custom-coded or React)',
          'Conversion-focused copy structure & layout',
          'A/B-ready variants',
          'Pixel & event tracking (Meta Pixel, Google Ads, GA4)',
          'Form integrations (CRM, email, Calendly, Stripe)',
          'Mobile-first responsive design',
          'Sub-2s LCP and Core Web Vitals pass',
        ],
      },
      {
        h2: 'Industries I work with',
        body: [
          'Coaching and high-ticket service businesses, SaaS, e-commerce, real estate, fitness and wellness, EdTech and personal brands. Most engagements are paid-traffic funnels — Meta Ads, Google Ads, LinkedIn or YouTube.',
        ],
      },
      {
        h2: 'What you get',
        body: [],
        list: [
          'Mobile + desktop pixel-perfect build',
          'Conversion tracking wired across pixel, GA4 and CRM',
          'Fast load (LCP under 2s)',
          'A/B variant ready',
          'Editor-friendly so your team can swap copy without a developer',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a landing page cost?',
        a: 'A focused single-funnel landing page in WordPress or Elementor starts at $400. Custom-coded with animations, multi-step forms and tracking: $1,000–$2,500. Multi-page funnels: scale from there.',
      },
      {
        q: 'How fast can you turn one around?',
        a: 'A focused landing page with provided copy and assets can be live in 5–7 days. Custom design with tracking and CRM integration: 10–14 days.',
      },
      {
        q: 'Do you write the copy?',
        a: 'No — I focus on build, layout and conversion structure. I work great with copywriters and can recommend ones I’ve worked with before if needed.',
      },
      {
        q: 'Will the page be fast?',
        a: 'Yes — every landing page I ship targets sub-2s LCP and Core Web Vitals pass. Slow landing pages waste ad spend.',
      },
      {
        q: 'Can you A/B test variants?',
        a: 'Yes — built to support Google Optimize (legacy) / VWO / Optimizely / Convert.com out of the box. I can also wire in custom variant tracking via Meta Pixel events.',
      },
    ],
    related: [
      { label: 'Elementor developer', href: '/elementor-developer' },
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'GoHighLevel expert', href: '/gohighlevel-expert' },
      { label: 'CRM automation expert', href: '/crm-automation-expert' },
    ],
    ctaTitle: 'Need a landing page that converts paid traffic?',
    ctaBody:
      'Tell me about the campaign — I’ll come back with a clear scope and timeline within 12 hours.',
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'crm-automation-expert',
    seoTitle:
      'CRM Automation Expert | GoHighLevel, ActiveCampaign, HubSpot — Abhishek Sharma',
    metaDescription:
      'CRM automation expert wiring GoHighLevel, ActiveCampaign, HubSpot and Mailchimp into your WordPress site with Zapier and Make. End-to-end lead capture to fulfillment.',
    h1: 'CRM Automation Expert',
    subtitle:
      'GoHighLevel, ActiveCampaign, HubSpot and Mailchimp — wired into your forms, funnels and fulfillment flows end-to-end with Zapier and Make automations.',
    keywords: [
      'crm automation expert',
      'gohighlevel automation',
      'activecampaign expert',
      'hubspot automation',
      'zapier expert',
      'make integromat expert',
    ],
    serviceCategory: 'CRM Automation',
    breadcrumb: 'CRM Automation Expert',
    sections: [
      {
        h2: 'What CRM automation actually means',
        body: [
          'Most businesses use 30% of their CRM. They capture leads but never tag, score, segment or follow up properly. They have automations that fire but break silently. They never close the loop with fulfillment, billing or support.',
          'I build CRM systems that work end-to-end: lead capture → tagging → segmentation → email/SMS sequences → booking → payment → fulfillment → support. Every step is documented, monitored and handover-ready.',
        ],
      },
      {
        h2: 'CRMs and tools I work with',
        body: [],
        list: [
          'GoHighLevel (funnels, pipelines, automations, snapshots)',
          'ActiveCampaign (segmentation, deals, automations)',
          'HubSpot (Marketing Hub, Sales Hub, custom workflows)',
          'Mailchimp (audiences, journeys, transactional)',
          'Pipedrive (deal automation, custom fields)',
          'Klaviyo (e-commerce flows for WooCommerce)',
          'Zapier and Make (Integromat) for cross-tool plumbing',
        ],
      },
      {
        h2: 'Common automations I build',
        body: [],
        list: [
          'WordPress form → CRM contact creation + welcome sequence',
          'WooCommerce purchase → CRM tag + post-purchase sequence',
          'Booking via Calendly → CRM deal stage + reminder SMS',
          'Lead score threshold → sales notification + task',
          'Abandoned cart → 3-email recovery sequence',
          'Webinar registration → reminder sequence + replay automation',
          'Cross-tool sync (Stripe ↔ CRM ↔ Slack ↔ Notion)',
        ],
      },
      {
        h2: 'Real example — Northwind Coaching',
        body: [
          'A coaching brand needed leads automatically captured, qualified, booked and reminded. I wired GoHighLevel with Make automations across CRM, email, SMS and Stripe. Result: 2.3× qualified booked calls and 8 hours/week of ops time saved.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which CRM should I choose?',
        a: 'Depends on your business. Coaching/agencies → GoHighLevel. Content & B2B SaaS → ActiveCampaign or HubSpot. E-commerce → Klaviyo. I’ll recommend based on your size and goals.',
      },
      {
        q: 'Can you migrate me from one CRM to another?',
        a: 'Yes — contacts, tags, automations, deals and templates. Migrations usually take 1–3 weeks depending on complexity.',
      },
      {
        q: 'Do you build Zapier / Make workflows?',
        a: 'Yes — both. Zapier for simple multi-tool plumbing; Make for complex multi-step or filtered workflows. I’ll pick the right tool based on what you need.',
      },
      {
        q: 'How much does CRM automation cost?',
        a: 'A focused setup (forms, sequences, basic automations) starts at $1,000. Complex multi-funnel snapshots with full pipeline architecture: $3,000+.',
      },
      {
        q: 'Can you wire CRM into my WordPress site?',
        a: 'Yes — via REST API, webhooks, Gravity Forms / Elementor Pro Forms with CRM connectors, or custom PHP integrations.',
      },
    ],
    related: [
      { label: 'GoHighLevel expert', href: '/gohighlevel-expert' },
      { label: 'Landing page developer', href: '/landing-page-developer' },
      { label: 'WordPress developer in India', href: '/wordpress-developer-india' },
      { label: 'Hire a WordPress developer', href: '/hire-wordpress-developer' },
    ],
    ctaTitle: 'Need a CRM that actually works end-to-end?',
    ctaBody:
      'Tell me your stack — I’ll come back with a setup plan and quote within 12 hours.',
  },
];

export const findLandingPage = (slug: string) =>
  landingPages.find((p) => p.slug === slug);
