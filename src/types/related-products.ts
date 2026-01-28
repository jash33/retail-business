/**
 * =================================================================
 * RELATED PRODUCTS TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for the RelatedProductsCarousel component
 * with support for horizontal scroll layout, 'Complete the Look'
 * styling, and both category-based and manual curation options.
 *
 * =================================================================
 */

import type { ProductCardProps, AspectRatio } from './product';

// =================================================================
// LAYOUT VARIANTS
// =================================================================

/**
 * Display variant for related products section
 * - 'grid': Traditional responsive grid layout
 * - 'carousel': Horizontal scrolling carousel with navigation
 * - 'complete-the-look': Styled section for outfit/collection pairing
 */
export type RelatedProductsVariant = 'grid' | 'carousel' | 'complete-the-look';

/**
 * Gap sizes between product cards
 */
export type RelatedProductsGap = 'small' | 'medium' | 'large';

// =================================================================
// COLUMN CONFIGURATION
// =================================================================

/**
 * Responsive column configuration for carousel
 */
export interface CarouselColumnConfig {
  /** Columns at mobile breakpoint (< 480px) */
  mobile?: 1 | 2;
  /** Columns at small breakpoint (480px - 767px) */
  small?: 2 | 3;
  /** Columns at tablet breakpoint (768px - 1023px) */
  tablet?: 2 | 3 | 4;
  /** Columns at desktop breakpoint (>= 1024px) */
  desktop?: 3 | 4 | 5;
}

// =================================================================
// NAVIGATION OPTIONS
// =================================================================

/**
 * Navigation button position for carousel
 * - 'outside': Buttons positioned outside the carousel viewport
 * - 'inside': Buttons overlaid inside the carousel viewport
 * - 'bottom': Buttons positioned below the carousel
 * - 'none': No navigation buttons (swipe/scroll only)
 */
export type NavigationPosition = 'outside' | 'inside' | 'bottom' | 'none';

// =================================================================
// RELATED PRODUCTS CAROUSEL PROPS
// =================================================================

/**
 * Props for the RelatedProductsCarousel component
 */
export interface RelatedProductsCarouselProps {
  /** Array of product card props to display */
  products: ProductCardProps[];

  /** Display variant: grid, carousel, or complete-the-look */
  variant?: RelatedProductsVariant;

  /** Section heading */
  heading?: string;

  /** Section description/subheading */
  description?: string;

  /** Section ID for anchor links */
  id?: string;

  /** Additional CSS classes */
  class?: string;

  // =================================================================
  // GRID-SPECIFIC OPTIONS
  // =================================================================

  /** Number of columns for grid layout (2-4) */
  columns?: 2 | 3 | 4;

  // =================================================================
  // CAROUSEL-SPECIFIC OPTIONS
  // =================================================================

  /** Responsive column configuration for carousel */
  carouselColumns?: CarouselColumnConfig;

  /** Navigation button position */
  navigationPosition?: NavigationPosition;

  /** Show pagination indicators (dots) */
  showIndicators?: boolean;

  /** Enable touch/swipe navigation */
  enableSwipe?: boolean;

  /** Enable keyboard navigation (arrow keys) */
  enableKeyboard?: boolean;

  /** Number of items to scroll per navigation click */
  scrollAmount?: number;

  /** Animation duration in milliseconds */
  animationDuration?: number;

  /** Enable infinite/continuous scrolling */
  infinite?: boolean;

  // =================================================================
  // SHARED OPTIONS
  // =================================================================

  /** Maximum number of products to display */
  maxProducts?: number;

  /** Gap size between product cards */
  gap?: RelatedProductsGap;

  /** Aspect ratio for product images */
  aspectRatio?: AspectRatio;

  /** Show empty state message when no products */
  showEmptyState?: boolean;

  /** Enable stagger animation on reveal */
  enableAnimation?: boolean;

  // =================================================================
  // COMPLETE THE LOOK SPECIFIC OPTIONS
  // =================================================================

  /** Custom badge text (e.g., "Shop the Look", "Complete Your Set") */
  badgeText?: string;

  /** Show "View All" link */
  showViewAll?: boolean;

  /** "View All" link URL */
  viewAllUrl?: string;

  /** "View All" link text */
  viewAllText?: string;

  /** Featured product index (for complete-the-look variant) */
  featuredIndex?: number;
}

// =================================================================
// CURATION SOURCE TYPE
// =================================================================

/**
 * Source for related products determination
 * - 'manual': Explicitly defined related products in product data
 * - 'category': Automatically fetched from same category
 * - 'mixed': Manual first, then fill with category
 */
export type CurationSource = 'manual' | 'category' | 'mixed';

// =================================================================
// PRESET CONFIGURATIONS
// =================================================================

/**
 * Preset configurations for common use cases
 */
export const RELATED_PRODUCTS_PRESETS = {
  /** Standard related products grid */
  standard: {
    variant: 'grid' as RelatedProductsVariant,
    heading: 'Related Products',
    columns: 4,
    maxProducts: 8,
    gap: 'medium' as RelatedProductsGap,
  },

  /** Horizontal carousel for mobile-friendly browsing */
  carousel: {
    variant: 'carousel' as RelatedProductsVariant,
    heading: 'You May Also Like',
    navigationPosition: 'outside' as NavigationPosition,
    showIndicators: true,
    enableSwipe: true,
    enableKeyboard: true,
    maxProducts: 12,
    gap: 'medium' as RelatedProductsGap,
    carouselColumns: {
      mobile: 1,
      small: 2,
      tablet: 3,
      desktop: 4,
    } as CarouselColumnConfig,
  },

  /** Complete the Look styled section */
  completeTheLook: {
    variant: 'complete-the-look' as RelatedProductsVariant,
    heading: 'Complete the Look',
    description: 'Pair perfectly with these items',
    badgeText: 'Styling Pick',
    navigationPosition: 'inside' as NavigationPosition,
    showIndicators: false,
    enableSwipe: true,
    maxProducts: 6,
    gap: 'large' as RelatedProductsGap,
    carouselColumns: {
      mobile: 1,
      small: 2,
      tablet: 3,
      desktop: 4,
    } as CarouselColumnConfig,
  },

  /** Compact carousel for sidebars or narrow spaces */
  compact: {
    variant: 'carousel' as RelatedProductsVariant,
    heading: 'More to Explore',
    navigationPosition: 'none' as NavigationPosition,
    showIndicators: true,
    enableSwipe: true,
    maxProducts: 8,
    gap: 'small' as RelatedProductsGap,
    carouselColumns: {
      mobile: 2,
      small: 2,
      tablet: 2,
      desktop: 3,
    } as CarouselColumnConfig,
  },
} as const;
