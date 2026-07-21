import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Casial Global Trading | Premium B2B Import & Export of Fresh Produce & Agricultural Commodities",
  description = "Casial Global Trading is a leading international B2B exporter and importer of fresh onions, garlic, ginger, potatoes, dry red chili, turmeric, lemons, and seasonal vegetables. ISO 22000, APEDA, HACCP, and Halal certified with cold-chain reefer shipping to 35+ countries.",
  keywords = "import export company, B2B fresh produce exporter, red onion exporter India, garlic supplier China, ginger exporter, dry red chili Teja S17, turmeric finger supplier, agricultural commodity trading, reefer container shipping, APEDA certified exporter",
  image = "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop",
  url = "https://casialglobal.com"
}: SEOProps) {

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', 'Casial Global Trading', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Structured Data JSON-LD
    let scriptTag = document.querySelector('#schema-jsonld') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Casial Global Trading",
      "alternateName": "Casial Global B2B Import & Export",
      "url": "https://casialglobal.com",
      "logo": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=500&auto=format&fit=crop",
      "description": description,
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Level 24, Almas Tower, DMCC Free Zone",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Trade Center 2, JNPT Port Road, Belapur",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400614",
          "addressCountry": "IN"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971-50-892-4102",
          "contactType": "International Export Sales",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Arabic", "Hindi"]
        }
      ],
      "knowsAbout": [
        "Fresh Onion Export",
        "Pure White Garlic Sourcing",
        "Elephant Ginger Trading",
        "Lady Rosetta Potato Export",
        "Dry Red Chili Teja S17",
        "High Curcumin Finger Turmeric",
        "Cold Chain Reefer Shipping"
      ]
    };

    scriptTag.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, image, url]);

  return null;
}
