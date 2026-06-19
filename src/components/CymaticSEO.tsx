import React from 'react';
import { Helmet } from 'react-helmet';

export const CymaticSEO: React.FC = () => {
  const siteName = "Cymatic Evolution";
  const fullName = "Isabirye Latif (Latty Adams)";
  const jobTitle = "Solo Architect & Resonance Engineer";
  const baseUrl = "https://cymatichub.xyz";
  const imageUrl = `${baseUrl}/media/photo3.png`;

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
        "sameAs": ["https://github.com/servicespash"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Cymatic Hub", "item": `${baseUrl}/hub` },
          { "@type": "ListItem", "position": 2, "name": "Cymatic Resonance", "item": `${baseUrl}/resonance` }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullName} | {jobTitle} | {siteName}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="canonical" href={baseUrl} />
      
      <meta name="description" content={`Official portal of ${fullName}. Solo Architect of the Cymatic Evolution. Engineering Cymatic Hub and Cymatic Resonance for institutional synchronization and project-based learning.`} />
      <meta name="keywords" content="Isabirye Latif, Latty Adams, Cymatic Hub, Cymatic Resonance, Solo Architect, Resonance Engineer, EdTech, Project-Based Learning, Kampala Tech, AI Institutional Systems" />
      
      <meta property="og:title" content={`${fullName} | ${jobTitle}`} />
      <meta property="og:description" content="Engineering high-resilience software systems. Bridging factory-floor grit with global AI infrastructure." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullName} />
      <meta name="twitter:description" content={jobTitle} />
      <meta name="twitter:image" content={imageUrl} />
      
      <meta name="author" content={fullName} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
