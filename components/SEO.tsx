import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, lang = 'en', image, type = 'website' }) => {
  const location = useLocation();
  const { lang: paramLang } = useParams<{ lang: string }>();
  const currentLang = paramLang || lang;

  useEffect(() => {
    // Force HTTPS redirect if on HTTP
    if (typeof window !== 'undefined' && window.location.protocol === 'http:') {
      window.location.replace(`https://smartwebkit.net${window.location.pathname}${window.location.search}`);
      return;
    }

    // With BrowserRouter, the path is in location.pathname
    // location.pathname will be like: /pt or /en/password-generator
    let currentPath = location.pathname;
    
    // If no path or root page, set canonical to the default language version
    if (!currentPath || currentPath === '' || currentPath === '/') {
      // For root, canonical should point to the default language
      currentPath = '/en';
    }
    
    // Ensure path starts with /
    if (!currentPath.startsWith('/')) {
      currentPath = `/${currentPath}`;
    }
    
    // Build canonical URL (always HTTPS, without hash, using clean path)
    // This tells Google which URL is the canonical version
    const canonicalUrl = `https://smartwebkit.net${currentPath}`;

    // Remove existing canonical link if any
    let existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and add canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalUrl);
    document.head.appendChild(canonicalLink);

    // Update document title with site name
    if (title) {
      document.title = `${title} | SmartWebKit`;
    } else {
      document.title = 'SmartWebKit - Web Utilities';
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }

    // Ensure robots meta tag allows indexing
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update html lang attribute
    document.documentElement.setAttribute('lang', currentLang);

    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());

    // Add hreflang tags for alternate languages
    const languages = ['pt', 'en', 'es'];
    languages.forEach(l => {
      const hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', l);
      
      // Build alternate URL by replacing language in path
      let altPath = currentPath;
      if (currentPath === '/' || currentPath === '') {
        // Root path - point to language-specific home
        altPath = `/${l}`;
      } else if (currentPath.startsWith(`/${currentLang}/`)) {
        altPath = currentPath.replace(`/${currentLang}/`, `/${l}/`);
      } else if (currentPath === `/${currentLang}`) {
        altPath = `/${l}`;
      } else if (!currentPath.startsWith('/en') && !currentPath.startsWith('/pt') && !currentPath.startsWith('/es')) {
        // Path without language prefix, add language
        altPath = `/${l}${currentPath}`;
      } else {
        // Already has a language prefix, replace it
        altPath = currentPath.replace(/^\/(en|pt|es)/, `/${l}`);
      }
      const altUrl = `https://smartwebkit.net${altPath}`;
      hreflang.setAttribute('href', altUrl);
      document.head.appendChild(hreflang);
    });

    // Add x-default hreflang (defaults to English)
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    let defaultPath = currentPath;
    if (currentPath === '/' || currentPath === '') {
      defaultPath = '/en';
    } else if (currentPath.startsWith(`/${currentLang}/`)) {
      defaultPath = currentPath.replace(`/${currentLang}/`, '/en/');
    } else if (currentPath === `/${currentLang}`) {
      defaultPath = '/en';
    } else if (!currentPath.startsWith('/en') && !currentPath.startsWith('/pt') && !currentPath.startsWith('/es')) {
      defaultPath = `/en${currentPath}`;
    } else {
      defaultPath = currentPath.replace(/^\/(en|pt|es)/, '/en');
    }
    xDefault.setAttribute('href', `https://smartwebkit.net${defaultPath}`);
    document.head.appendChild(xDefault);

    // Remove existing Open Graph tags
    document.querySelectorAll('meta[property^="og:"]').forEach(meta => meta.remove());
    document.querySelectorAll('meta[name^="twitter:"]').forEach(meta => meta.remove());

    // Add Open Graph tags for better social media sharing
    const ogTags = [
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: title || 'SmartWebKit - Web Utilities' },
      { property: 'og:description', content: description || 'Coleção completa de ferramentas web gratuitas e utilitários online' },
      { property: 'og:site_name', content: 'SmartWebKit' },
      { property: 'og:locale', content: currentLang === 'pt' ? 'pt_BR' : currentLang === 'es' ? 'es_ES' : 'en_US' },
      { property: 'og:image', content: image || 'https://smartwebkit.net/og-image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ];

    ogTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title || 'SmartWebKit - Web Utilities' },
      { name: 'twitter:description', content: description || 'Coleção completa de ferramentas web gratuitas e utilitários online' },
      { name: 'twitter:image', content: image || 'https://smartwebkit.net/og-image.png' },
    ];

    twitterTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add viewport meta tag if not exists
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add charset meta tag if not exists
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Remove existing JSON-LD structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());

    // Add JSON-LD structured data for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title || 'SmartWebKit',
      description: description || 'Coleção completa de ferramentas web gratuitas e utilitários online',
      url: canonicalUrl,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      inLanguage: currentLang,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `https://smartwebkit.net/${currentLang}/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add Organization structured data
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SmartWebKit',
      url: 'https://smartwebkit.net',
      logo: 'https://smartwebkit.net/logo.png',
      sameAs: []
    };

    const orgScript = document.createElement('script');
    orgScript.setAttribute('type', 'application/ld+json');
    orgScript.textContent = JSON.stringify(organizationData);
    document.head.appendChild(orgScript);

    // Add BreadcrumbList structured data for better navigation understanding
    const breadcrumbs = [];
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://smartwebkit.net'
    });

    if (currentPath !== '/' && currentPath !== `/${currentLang}`) {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: currentLang.toUpperCase(),
        item: `https://smartwebkit.net/${currentLang}`
      });

      // Extract page name from path
      const pathSegments = currentPath.split('/').filter(Boolean);
      if (pathSegments.length > 1) {
        const pageName = pathSegments[pathSegments.length - 1]
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        breadcrumbs.push({
          '@type': 'ListItem',
          position: 3,
          name: pageName,
          item: canonicalUrl
        });
      }
    }

    if (breadcrumbs.length > 1) {
      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

  }, [location, title, description, currentLang, image, type]);

  return null;
};

