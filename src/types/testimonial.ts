/**
 * =================================================================
 * TESTIMONIAL TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for testimonial components with customer quotes,
 * photos, star ratings, and Review schema markup for SEO.
 *
 * =================================================================
 */

// =================================================================
// TESTIMONIAL PROPS
// =================================================================

/**
 * Image configuration for testimonial author photo
 */
export interface TestimonialImage {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
}

/**
 * Configuration for a single testimonial
 */
export interface Testimonial {
  /** Unique testimonial identifier */
  id: string;
  /** The testimonial quote/content */
  content: string;
  /** Author's full name */
  author: string;
  /** Author's job title or role (optional) */
  role?: string;
  /** Author's company or organization (optional) */
  company?: string;
  /** Author's profile photo (optional) */
  image?: TestimonialImage;
  /** Star rating from 1-5 (optional) */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Whether this is a verified review */
  verified?: boolean;
  /** Date of the review (ISO format for schema markup) */
  date?: string;
  /** Location of the reviewer (optional, for local SEO) */
  location?: string;
  /** Display order priority (lower numbers appear first) */
  priority?: number;
}

// =================================================================
// TESTIMONIALS SECTION PROPS
// =================================================================

/**
 * Column configuration for responsive carousel display
 */
export interface TestimonialCarouselColumns {
  /** Number of columns on mobile devices (< 480px) */
  mobile: number;
  /** Number of columns on small screens (480px - 767px) */
  small: number;
  /** Number of columns on tablets (768px - 1023px) */
  tablet: number;
  /** Number of columns on desktop (1024px+) */
  desktop: number;
}

/**
 * Auto-scroll configuration for carousel
 */
export interface TestimonialAutoScroll {
  /** Whether auto-scroll is enabled */
  enabled: boolean;
  /** Interval between slides in milliseconds */
  interval: number;
  /** Pause auto-scroll on hover */
  pauseOnHover: boolean;
  /** Pause auto-scroll on focus */
  pauseOnFocus: boolean;
}

/**
 * Props for the TestimonialsSection component
 */
export interface TestimonialsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of testimonials to display */
  testimonials: Testimonial[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Maximum number of testimonials to display */
  maxTestimonials?: number;
  /** Whether to show star ratings */
  showRatings?: boolean;
  /** Whether to show verified badges */
  showVerified?: boolean;
  /** Responsive column configuration for carousel */
  columns?: TestimonialCarouselColumns;
  /** Gap between items: 'small' | 'medium' | 'large' */
  gap?: 'small' | 'medium' | 'large';
  /** Navigation position: 'inside' | 'outside' | 'bottom' */
  navigationPosition?: 'inside' | 'outside' | 'bottom';
  /** Whether to show pagination indicators */
  showIndicators?: boolean;
  /** Auto-scroll configuration */
  autoScroll?: TestimonialAutoScroll;
  /** Whether carousel is infinite looping */
  infinite?: boolean;
  /** Whether swipe/touch navigation is enabled */
  enableSwipe?: boolean;
  /** Whether keyboard navigation is enabled */
  enableKeyboard?: boolean;
  /** Number of items to scroll at once */
  scrollAmount?: number;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Business name for schema markup */
  businessName?: string;
}

// =================================================================
// TESTIMONIALS CONFIG
// =================================================================

/**
 * Configuration options for the testimonials section
 */
export interface TestimonialsConfig {
  /** Section ID for anchor linking */
  id: string;
  /** Main heading for the section */
  heading: string;
  /** Subheading/description text */
  subheading: string;
  /** Maximum number of testimonials to display */
  maxTestimonials: number;
  /** Whether to show star ratings */
  showRatings: boolean;
  /** Whether to show verified badges */
  showVerified: boolean;
  /** Responsive column configuration */
  columns: TestimonialCarouselColumns;
  /** Gap between items */
  gap: 'small' | 'medium' | 'large';
  /** Navigation position */
  navigationPosition: 'inside' | 'outside' | 'bottom';
  /** Whether to show pagination indicators */
  showIndicators: boolean;
  /** Auto-scroll configuration */
  autoScroll: TestimonialAutoScroll;
  /** Whether carousel is infinite looping */
  infinite: boolean;
  /** Whether swipe/touch navigation is enabled */
  enableSwipe: boolean;
  /** Whether keyboard navigation is enabled */
  enableKeyboard: boolean;
  /** Number of items to scroll at once */
  scrollAmount: number;
  /** Animation duration in milliseconds */
  animationDuration: number;
  /** Business name for schema markup */
  businessName: string;
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Sort testimonials by priority
 * @param testimonials - Array of testimonials
 * @returns Sorted array with lower priority numbers first
 */
export function sortByPriority(testimonials: Testimonial[]): Testimonial[] {
  return [...testimonials].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
}

/**
 * Filter testimonials with ratings
 * @param testimonials - Array of testimonials
 * @returns Array of testimonials that have ratings
 */
export function filterWithRatings(testimonials: Testimonial[]): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.rating !== undefined);
}

/**
 * Calculate average rating from testimonials
 * @param testimonials - Array of testimonials
 * @returns Average rating or null if no ratings
 */
export function calculateAverageRating(testimonials: Testimonial[]): number | null {
  const withRatings = filterWithRatings(testimonials);
  if (withRatings.length === 0) return null;

  const sum = withRatings.reduce((acc, t) => acc + (t.rating || 0), 0);
  return Math.round((sum / withRatings.length) * 10) / 10;
}
