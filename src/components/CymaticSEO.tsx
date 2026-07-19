/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CymaticSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, any>;
}

interface RouteSEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  pageName: string;
}

const SEO_ROUTING_MATRIX: Record<string, RouteSEOConfig> = {
  '/': {
    pageName: 'Home',
    title: 'Isabirye Latif | Solo Architect & Premium Website Templates',
    description: 'Official portfolio and systems hub of Isabirye Latif (Latty Adams). Discover premium website templates, institutional digital infrastructure, Cymatic Study, and robust web architecture designed for scale.',
    keywords: 'Website Templates, Premium Web Design, Isabirye Latif, Latty Adams, Cymatic Study, Solo Architect, Resonance Engineer, Web Architecture, Kampala, Uganda',
  },
  '/manifesto': {
    pageName: 'Origin & Manifesto',
    title: 'Origin & Manifesto | Isabirye Latif',
    description: 'The monumental manifesto and foundational architecture guide of Isabirye Latif. Explore the deep philosophical roots, technical origins, and the visionary roadmap behind the Cymatic Evolution digital infrastructure.',
    keywords: 'Manifesto, Origin, Solo Architect, Cymatic Evolution Philosophy, Isabirye Latif Manifesto',
  },
  '/projects': {
    pageName: 'Projects',
    title: 'Projects & Architecture | Isabirye Latif',
    description: 'Proof of work, core systems architecture, PDF Engine, and technical solutions built for high-performance scale, optimized for modern browsers and institutional-grade deployments.',
    keywords: 'Software Engineering, Projects, Kampala Tech, PDF Engine, Sci-Matic, Proof of Work',
  },
  '/showcase': {
    pageName: 'Template Showcase',
    title: 'Website Templates | Isabirye Latif Design Portfolio & Gallery',
    description: 'Explore a premium gallery of professional website templates and interactive client showcase previews designed by Solo Architect Isabirye Latif. High-performance, scalable web architecture for business, education, portfolios, and enterprise needs.',
    keywords: 'Website Templates, Design Portfolio, Simulator, Nextjs, React, Tailwind, School Template, Business Template, Isabirye Latif, Solo Architect, Web Design, Web Architecture, Enterprise Solutions, High Performance Web',
  },
  '/resonance': {
    pageName: 'Cymatic Resonance',
    title: 'Cymatic Resonance | Real-Time Attendance & Orchestration',
    description: 'Experience Cymatic Resonance - the institutional heartbeat. Precision-engineered for live team coordination and attendance tracking. Download the official Cymatic Resonance App.',
    keywords: 'Cymatic Resonance, Attendance Tracker, Live Orchestration, APK Download, Enterprise Sync, resonance.cymatichub.xyz',
  },
  '/study': {
    pageName: 'Cymatic Study Portal',
    title: 'Cymatic Study | Educational Synchronization Dashboard',
    description: 'Access the Cymatic Study operational dashboard. PBL project tracking, AI-tutored study guides, and real-time school system charts designed for high-performing educational institutions.',
    keywords: 'Cymatic Study, PBL Tracking, AI Tutor, Education Dashboard, Study Monitor, Kampala EdTech',
  },
  '/learning': {
    pageName: 'Learning & Mastery',
    title: 'Continuous Learning & Mastery | Isabirye Latif',
    description: 'The continuous evolution of professional skills across counseling, psychology, organizational human resources, and technical engineering. Dedicated to perpetual learning and mastery.',
    keywords: 'Counselling, Human Resources, Continuous Education, Skill Matrix, Professional Mastery',
  },
  '/creatives': {
    pageName: 'Creative Execution',
    title: 'Creative Execution Labs | Isabirye Latif',
    description: 'Where sonic reggae-soul frequencies, nocturnal low-light imagery, and tactical spatial biometrics converge with production-ready software development and creative artistic expression.',
    keywords: 'Ghetto Anthem, Creative Lab, Reggae Soul, Low-light Photography, Spatial Biometrics, Kampala Music',
  },
  '/creative': {
    pageName: 'Interactive Sonic Lab',
    title: 'Interactive Sonic Lab | Cymatic Resonance Simulator',
    description: 'Interact with the real-time sonic frequency wave generator and live telemetry feed calibrated for Ghetto Anthem. Designed for exploring production-ready interactive sonic experiences.',
    keywords: 'Wave Simulator, Sonic Lab, Frequency Modulation, Telemetry, Web Audio',
  },
  '/socials': {
    pageName: 'Uplink Gateway',
    title: 'Uplink Gateway & Contact | Isabirye Latif',
    description: 'Direct communication pipelines to Isabirye Latif\'s secure WhatsApp, YouTube production streams, and TikTok channels. Get connected and explore the evolution of the digital architecture.',
    keywords: 'Contact, Social Links, WhatsApp, YouTube, TikTok, Uplink, Connect',
  },
  '/stack': {
    pageName: 'Stack Audit',
    title: 'Stack Audit & Technology Ledger | Cymatic Evolution',
    description: 'Deep structural audit of the modern, ultra-resilient tech stack powering cymatichub.xyz. Built with React 19, TypeScript, and Tailwind CSS for unparalleled performance and scale.',
    keywords: 'Tech Stack, React 19, Tailwind, Audit, Vite, Architecture, Software Systems',
  },
  '/legal': {
    pageName: 'Compliance Protocol',
    title: 'Compliance Protocol & Trust | Cymatic Evolution',
    description: 'Learn about our client-bound local-storage privacy model, absolute data sovereignty, and security integrity, ensuring all user data is protected, secure, and fully private at all times.',
    keywords: 'Privacy Policy, Data Sovereignty, Local Storage, Compliance, GDPR, Uganda Privacy',
  },
  '/transparency': {
    pageName: 'System Transparency',
    title: 'System Transparency & Live Telemetry | Cymatic Evolution',
    description: 'Real-time system health logs, sync-pulse rates, and live operational status metrics of the Cymatic Evolution network. Transparent, open, and deeply optimized for high performance.',
    keywords: 'Telemetry, Live Logs, Network Status, System Health, Node Status, Transparency',
  },
  '/for-schools': {
    pageName: 'For Schools',
    title: 'Cymatic Study for Schools | Educational Ecosystems',
    description: 'Empower your institution with Cymatic Study, transforming educational delivery into synchronized learning ecosystems designed for compliance, performance, and institutional success at scale.',
    keywords: 'Cymatic Study, Schools, EdTech, Learning Ecosystem, School Sync',
  },
  '/for-teams': {
    pageName: 'For Teams',
    title: 'Cymatic Study for Teams | Organizational Synchronization',
    description: 'Precision-engineered orchestration for agile teams. Coordinate projects, track progress, and foster seamless collaboration with Cymatic Study, designed for high-output teams.',
    keywords: 'Cymatic Study, Teams, Organizational Sync, Coordination, Project Tracking',
  },
  '/how-it-works': {
    pageName: 'How It Works',
    title: 'How It Works | Cymatic Evolution Architecture',
    description: 'Understanding the operational mechanics of Cymatic Study and Resonance, showcasing how high-performance architecture bridges the gap between complex challenges and elegant software.',
    keywords: 'How It Works, Architecture, Mechanics, Cymatic Study, Resonance',
  },
  '/twin-engines': {
    pageName: 'Twin Engines',
    title: 'Twin Engines | Cymatic Study & Resonance Orchestration',
    description: 'Orchestrating education and organizational telemetry with Twin Engines: Cymatic Study and Resonance. A combined technical approach to building cohesive, high-performance digital environments.',
    keywords: 'Twin Engines, Cymatic Study, Resonance, Orchestration, Telemetry',
  },
};

export const CymaticSEO: React.FC<CymaticSEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  jsonLd,
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  const siteName = "Cymatic Evolution";
  const fullName = "Isabirye Latif (Latty Adams)";
  const jobTitle = "Solo Architect & Resonance Engineer";
  const baseUrl = "https://cymatichub.xyz";
  const defaultImageUrl = `${baseUrl}/media/photo3.png`;

  // Determine current metadata from route configuration or default to general homepage
  const routeConfig = SEO_ROUTING_MATRIX[pathname] || SEO_ROUTING_MATRIX['/'];

  const finalTitle = title || routeConfig.title;
  const finalDescription = description || routeConfig.description;
  const finalKeywords = keywords || `${routeConfig.keywords}, ${siteName}, ${fullName}`;
  const finalOgImage = ogImage || defaultImageUrl;
  const finalOgType = ogType || routeConfig.ogType || 'website';
  const finalCanonicalUrl = `${baseUrl}${pathname}`;

  // Structured Data (JSON-LD) Breadcrumbs & Person Profile Graph
  const breadcrumbElement: Record<string, any>[] = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl,
    },
  ];

  if (pathname !== '/') {
    breadcrumbElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": routeConfig.pageName,
      "item": finalCanonicalUrl,
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#founder`,
        "name": "Isabirye Latif",
        "alternateName": "Latty Adams",
        "jobTitle": jobTitle,
        "url": baseUrl,
        "sameAs": [
          "https://github.com/servicespash",
          "https://youtube.com/#",
          "https://tiktok.com/#"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Cymatic Evolution",
          "url": baseUrl
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#organization`,
        "name": "Cymatic Evolution",
        "url": baseUrl,
        "description": "Architecting high-performance web templates, systems, and institutional digital infrastructure.",
        "founder": {
          "@id": `${baseUrl}/#founder`
        },
        "sameAs": [
          "https://github.com/servicespash"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbElement
      },
      // Merge page-specific Custom JSON-LD if provided
      ...(jsonLd ? [jsonLd] : [])
    ]
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{finalTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="en" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="es" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="sw" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="de" href={finalCanonicalUrl} />
      
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content={siteName} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      <meta name="author" content={fullName} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

