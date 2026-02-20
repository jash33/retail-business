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
  type: 'Florist',
  name: 'HTX Flowers',
  legalName: 'HTX Flowers LLC',
  description: 'Houston\'s premier flower shop offering fresh bouquets, custom arrangements, wedding flowers, and same-day delivery. Family-owned and serving the Energy Corridor and greater Houston area with beautiful blooms for every occasion.',
  slogan: 'Fresh Blooms, Heartfelt Moments',
  url: 'https://htxflowers.com',
  telephone: '+1-832-555-ROSE',
  email: 'hello@htxflowers.com',
  address: {
    streetAddress: '12847 Westheimer Road',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77077',
    addressCountry: 'US',
  },
  geo: {
    latitude: 29.7373,
    longitude: -95.5981,
  },
  areaServed: [
    { type: 'City', name: 'Houston', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
    { type: 'City', name: 'Katy', addressLocality: 'Katy', addressRegion: 'TX', addressCountry: 'US' },
    { type: 'City', name: 'Sugar Land', addressLocality: 'Sugar Land', addressRegion: 'TX', addressCountry: 'US' },
    { type: 'City', name: 'Memorial', addressLocality: 'Memorial', addressRegion: 'TX', addressCountry: 'US' },
  ],
  openingHoursSpecification: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { dayOfWeek: ['Saturday'], opens: '09:00', closes: '17:00' },
    { dayOfWeek: ['Sunday'], opens: '10:00', closes: '14:00' },
  ],
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-14:00'],
  logo: 'https://htxflowers.com/images/logo.png',
  image: ['https://htxflowers.com/images/storefront.jpg'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Apple Pay', 'Google Pay'],
  sameAs: [],
  contactPoint: {
    telephone: '+1-832-555-ROSE',
    email: 'hello@htxflowers.com',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish'],
    areaServed: ['Houston', 'Katy', 'Sugar Land', 'Memorial', 'Energy Corridor'],
  },
  makesOffer: [
    'Fresh Cut Flowers',
    'Custom Bouquets',
    'Wedding Flowers',
    'Funeral Arrangements',
    'Event Florals',
    'Same-Day Delivery',
    'Plant Gifts',
    'Subscription Flowers',
  ],
  knowsAbout: [
    'Floral Design',
    'Wedding Floristry',
    'Sympathy Arrangements',
    'Event Decorations',
    'Seasonal Flowers',
    'Luxury Bouquets',
    'Plant Care',
    'Houston Flower Delivery',
  ],
  knowsLanguage: ['English', 'Spanish'],
};

/**
 * Default SEO configuration for the entire site
 * These values are used as fallbacks when page-specific values are not provided
 */
export const seoConfig: SEOConfig = {
  // Site Identity
  siteName: 'HTX Flowers',
  siteUrl: 'https://htxflowers.com',

  // Title Configuration
  titleTemplate: '%s | HTX Flowers',

  // Default Meta Content
  defaultDescription:
    'Houston\'s favorite flower shop. Fresh bouquets, custom arrangements, wedding flowers, and same-day delivery across the Energy Corridor. Family-owned and dedicated to making every moment bloom.',
  defaultLang: 'en',
  defaultLocale: 'en_US',

  // Default Social Sharing Image
  defaultImage: '/images/og-default.jpg',
  defaultImageAlt: 'HTX Flowers - Fresh Blooms, Heartfelt Moments',

  // Twitter Configuration
  twitterSite: undefined,
  twitterCardType: 'summary_large_image',

  // Open Graph Defaults
  defaultOgType: 'website',

  // Search Engine Directives
  defaultRobots: 'index, follow',

  // Theme
  themeColor: '#e879a0', // Soft rose pink

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
  const cleanBase = baseUrl.replace(/\/$/, '');
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

  if (!props.title) {
    warnings.push('SEO Warning: Title is required for optimal SEO.');
  } else if (props.title.length > SEO_LIMITS.TITLE_MAX_LENGTH) {
    warnings.push(
      `SEO Warning: Title is ${props.title.length} characters (recommended max: ${SEO_LIMITS.TITLE_MAX_LENGTH}).`
    );
  }

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

  if (!props.image) {
    warnings.push('SEO Warning: No social sharing image provided. Using default.');
  }

  return warnings;
}
