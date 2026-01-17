/**
 * Hero Section Type Definitions
 * Types for the homepage hero section component
 */

/**
 * CTA button configuration for the hero section
 */
export interface HeroCTA {
  /** Button text */
  text: string;
  /** Button link destination */
  href: string;
  /** Button visual variant */
  variant?: 'primary' | 'secondary';
}

/**
 * Props for the HeroSection component
 */
export interface HeroSectionProps {
  /** Main headline - the primary message (h1) */
  headline: string;
  /** Value proposition - what makes this service unique */
  valueProposition?: string;
  /** Subheadline - supporting text describing services */
  subheadline?: string;
  /** Primary CTA button */
  primaryCTA?: HeroCTA;
  /** Secondary CTA button (optional) */
  secondaryCTA?: HeroCTA;
  /** Section ID for anchoring */
  id?: string;
  /** Additional CSS classes */
  class?: string;
}
