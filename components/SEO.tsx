import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, lang = 'en' }) => {
  const location = useLocation();
  const { lang: paramLang } = useParams<{ lang: string }>();
  const currentLang = paramLang || lang;

  useEffect(() => {
    // Force HTTPS redirect if on HTTP
    if (typeof window !== 'undefined' && window.location.protocol === 'http:') {
      window.location.replace(`https://smartwebkit.net${window.location.pathname}${window.location.hash}`);
      return;
    }

    // With HashRouter, the path is in location.hash
    // location.hash will be like: #/pt or #/en/password-generator
    // location.pathname will always be "/" with HashRouter
    let hashPath = location.hash.replace('#', '');
    
    // If no hash path (root page), set canonical to the default language version
    // But also ensure the root URL has a canonical
    if (!hashPath || hashPath === '' || hashPath === '/') {
      // For root, canonical should point to the default language
      hashPath = '/en';
    }
    
    // Ensure path starts with /
    if (!hashPath.startsWith('/')) {
      hashPath = `/${hashPath}`;
    }
    
    // Build canonical URL (always HTTPS, without hash, using clean path)
    // This tells Google which URL is the canonical version
    const canonicalUrl = `https://smartwebkit.net${hashPath}`;

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

    // Update document title
    if (title) {
      document.title = title;
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
      let altPath = hashPath;
      if (hashPath.startsWith(`/${currentLang}/`)) {
        altPath = hashPath.replace(`/${currentLang}/`, `/${l}/`);
      } else if (hashPath === `/${currentLang}`) {
        altPath = `/${l}`;
      } else {
        // For paths without language prefix, add language
        altPath = `/${l}${hashPath}`;
      }
      const altUrl = `https://smartwebkit.net${altPath}`;
      hreflang.setAttribute('href', altUrl);
      document.head.appendChild(hreflang);
    });

    // Add x-default hreflang (defaults to English)
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    let defaultPath = hashPath;
    if (hashPath.startsWith(`/${currentLang}/`)) {
      defaultPath = hashPath.replace(`/${currentLang}/`, '/en/');
    } else if (hashPath === `/${currentLang}`) {
      defaultPath = '/en';
    } else {
      defaultPath = `/en${hashPath}`;
    }
    xDefault.setAttribute('href', `https://smartwebkit.net${defaultPath}`);
    document.head.appendChild(xDefault);

  }, [location, title, description, currentLang]);

  return null;
};

