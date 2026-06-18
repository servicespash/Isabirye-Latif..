import React from 'react';
import { Helmet } from 'react-helmet';

export const CymaticSEO: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://cymatichub.xyz/#founder",
        "name": "Isabirye Latif",
        "jobTitle": "Solo Architect",
        "founderOf": { "@id": "https://cymatichub.xyz/#ecosystem" },
        "description": "Founder of the Cymatic Evolution ecosystem."
      },
      {
        "@type": "Organization",
        "@id": "https://cymatichub.xyz/#ecosystem",
        "name": "Cymatic Evolution",
        "founder": { "@id": "https://cymatichub.xyz/#founder" },
        "url": "https://cymatichub.xyz",
        "description": "The Cymatic Evolution ecosystem, high-resilience software systems."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Cymatic Hub",
        "applicationCategory": "DeveloperPlatform",
        "author": { "@id": "https://cymatichub.xyz/#founder" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Cymatic Resonance",
        "applicationCategory": "DesignSystem",
        "author": { "@id": "https://cymatichub.xyz/#founder" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  };

  return (
    <Helmet>
      <title>Cymatic Evolution | Isabirye Latif | Solo Architect</title>
      <meta name="description" content="Cymatic Evolution: High-resilience software systems built by Isabirye Latif. Bridging factory floor experience with AI infrastructure. © 2026 ISABIRYE LATIF | CYMATIC EVOLUTION" />
      <meta name="keywords" content="Isabirye Latif, Cymatic Evolution, Cymatic Hub, Cymatic Resonance, Solo Architect, AI Infrastructure, Institutional Management, High Resilience Software" />
      <meta name="author" content="Isabirye Latif" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {/* © 2026 ISABIRYE LATIF | CYMATIC EVOLUTION */}
    </Helmet>
  );
};

