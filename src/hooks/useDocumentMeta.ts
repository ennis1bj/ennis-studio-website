import { useEffect } from 'react';
import { siteConfig } from '../config/site';

interface DocumentMeta {
  title: string;
  description: string;
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:site_name': siteConfig.name,
      'og:url': siteConfig.domain,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description]);
}
