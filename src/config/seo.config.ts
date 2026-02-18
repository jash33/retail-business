/**
 * SEO Configuration
 * Default values for SEO metadata across the site
 * Override these values per-page as needed
 */

import type { SEOConfig, LocalBusinessSchema } from '../types/seo';

/**
 * Comprehensive LocalBusiness Schema Configuration
 * Enhanced structured data for Google local search results and rich snippets
 */
export const localBusinessSchema: LocalBusinessSchema = {
  type: 'Store',
  name: 'Main Street Boutique',
  legalName: 'Main Street Boutique LLC',
  description: 'Curated artisan goods and handcrafted products for the modern home. We offer a thoughtfully selected collection of locally sourced ceramics, textiles, and lifestyle accessories.',
  slogan: 'Curated Goods for Thoughtful Living',
  url: 'https://mainstreetboutique.com',
  telephone: '+1-555-123-4567', // TODO: Update with actual phone
  email: 'hello@mainstreetboutique.com', // TODO: Update with actual email
  address: {
    streetAddress: '742 Main Street', // TODO: Update with actual address
    addressLocality: 'Springfield',
    addressRegion: 'IL',
    postalCode: '62704',
    addressCountry: 'US',
  },
  geo: {
    latitude: 39.7817, // TODO: Update with actual coordinates
    longitude: -89.6501,
  },
  areaServed: [
    { type: 'City', name: 'Springfield', addressLocality: 'Springfield', addressRegion: 'IL', addressCountry: 'US' },
  ],
  openingHoursSpecification: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
    { dayOfWeek: ['Saturday'], opens: '10:00', closes: '17:00' },
  ],
  openingHours: ['Mo-Fr 10:00-18:00', 'Sa 10:00-17:00'],
  logo: 'https://mainstreetboutique.com/images/logo.png',
  image: ['https://mainstreetboutique.com/images/storefront.jpg'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Apple Pay', 'Google Pay'],
  sameAs: [],
  contactPoint: {
    telephone: '+1-555-123-4567', // TODO: Update
    email: 'hello@mainstreetboutique.com', // TODO: Update
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: ['Springfield'],
  },
  makesOffer: [
    'Artisan Ceramics',
    'Handcrafted Textiles',
    'Home Décor',
    'Lifestyle Accessories',
    'Gift Collections',
    'Locally Sourced Goods',
    'Seasonal Collections',
    'Custom Gift Wrapping',
  ],
  knowsAbout: [
    'Artisan Goods',
    'Handcrafted Products',
    'Home Décor',
    'Sustainable Retail',
    'Local Artisans',
    'Gift Curation',
    'Interior Styling',
    'Small Batch Products',
    'Retail Boutique',
  ],
  knowsLanguage: ['English'],
};

/**
 * Default SEO configuration for the entire site
 * These values are used as fallbacks when page-specific values are not provided
 */
export const seoConfig: SEOConfig = {
  // Site Identity
  siteName: 'Main Street Boutique',
  siteUrl: 'https://mainstreetboutique.com', // Update with actual domain

  // Title Configuration
  titleTemplate: '%s | Main Street Boutique',

  // Default Meta Content
  defaultDescription:
    'Curated artisan goods, handcrafted home décor, and unique lifestyle accessories. Discover thoughtfully sourced products from local makers and independent artisans.',
  defaultLang: 'en',
  defaultLocale: 'en_US',

  // Default Social Sharing Image
  defaultImage: '/images/og-default.jpg', // Create this image (1200x630 recommended)
  defaultImageAlt: 'Main Street Boutique - Curated Artisan Goods',

  // Twitter Configuration
  twitterSite: undefined, // Add @username when available
  twitterCardType: 'summary_large_image',

  // Open Graph Defaults
  defaultOgType: 'website',

  // Search Engine Directives
  defaultRobots: 'index, follow',

  // Theme
  themeColor: '#1a365d', // Navy blue - update to match brand

  // LocalBusiness Schema (comprehensive, for JSON-LD)
  localBusiness: localBusinessSchema,

  // Legacy organization field (for backward compatibility)
  organization: localBusinessSchema,
};

/**
 * Maximum lengths for meta content (for truncation)
 */
export const SEO_LIMITS = {
  /** Maximum title length (Google typically shows ~60 characters) */
  TITLE_MAX_LENGTH: 60,
  /** Maximum description length (Google typically shows ~160 characters) */
  DESCRIPTION_MAX_LENGTH: 160,
  /** Recommended minimum description length */
  DESCRIPTION_MIN_LENGTH: 50,
  /** Maximum Open Graph title length */
  OG_TITLE_MAX_LENGTH: 95,
  /** Maximum Open Graph description length */
  OG_DESCRIPTION_MAX_LENGTH: 200,
  /** Maximum Twitter title length */
  TWITTER_TITLE_MAX_LENGTH: 70,
  /** Maximum Twitter description length */
  TWITTER_DESCRIPTION_MAX_LENGTH: 200,
} as const;

/**
 * Truncate text to a maximum length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) {
    return text;
  }
  // Find the last space before maxLength to avoid cutting words
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

/**
 * Escape special characters for use in HTML/meta content
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Convert a relative URL to an absolute URL
 * @param url - URL to convert
 * @param baseUrl - Base URL of the site
 * @returns Absolute URL
 */
export function toAbsoluteUrl(url: string | undefined, baseUrl: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Remove trailing slash from base URL
  const cleanBase = baseUrl.replace(/\/$/, '');
  // Ensure relative URL starts with /
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Validate SEO props and log warnings for common issues
 * @param props - SEO props to validate
 * @returns Array of warning messages
 */
export function validateSEOProps(props: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
}): string[] {
  const warnings: string[] = [];

  // Title validation
  if (!props.title) {
    warnings.push('SEO Warning: Title is required for optimal SEO.');
  } else if (props.title.length > SEO_LIMITS.TITLE_MAX_LENGTH) {
    warnings.push(
      `SEO Warning: Title is ${props.title.length} characters (recommended max: ${SEO_LIMITS.TITLE_MAX_LENGTH}).`
    );
  }

  // Description validation
  if (!props.description) {
    warnings.push('SEO Warning: Description is required for optimal SEO.');
  } else {
    if (props.description.length > SEO_LIMITS.DESCRIPTION_MAX_LENGTH) {
      warnings.push(
        `SEO Warning: Description is ${props.description.length} characters (recommended max: ${SEO_LIMITS.DESCRIPTION_MAX_LENGTH}).`
      );
    }
    if (props.description.length < SEO_LIMITS.DESCRIPTION_MIN_LENGTH) {
      warnings.push(
        `SEO Warning: Description is ${props.description.length} characters (recommended min: ${SEO_LIMITS.DESCRIPTION_MIN_LENGTH}).`
      );
    }
  }

  // Image validation
  if (!props.image) {
    warnings.push('SEO Warning: No social sharing image provided. Using default.');
  }

  return warnings;
}
