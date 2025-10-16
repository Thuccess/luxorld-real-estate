import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, imageUrl }) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}='${key}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('name', 'description', description);
    
    // Open Graph (for Facebook, LinkedIn, etc.)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);
    if (imageUrl) {
      setMetaTag('property', 'og:image', imageUrl);
    }
    
    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (imageUrl) {
      setMetaTag('name', 'twitter:image', imageUrl);
    }

  }, [title, description, imageUrl]);

  return null; // This component doesn't render anything
};

export default MetaTags;
