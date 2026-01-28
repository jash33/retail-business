/**
 * =================================================================
 * NEW ARRIVALS CAROUSEL TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for the new arrivals carousel component with
 * date-based sorting, navigation controls, touch swipe support,
 * and comprehensive accessibility features.
 *
 * =================================================================
 */

import type { ProductCardProps, AspectRatio } from './product';

// =================================================================
// CAROUSEL NAVIGATION TYPES
// =================================================================

/**
 * Navigation button positions for the carousel
 */
export type NavigationPosition = 'inside' | 'outside' | 'bottom';

/**
 * Auto-scroll behavior configuration
 */
export interface AutoScrollConfig {
  /** Enable automatic scrolling */
  enabled: boolean;
  /** Interval between slides in milliseconds */
  interval?: number;
  /** Pause auto-scroll on hover */
  pauseOnHover?: boolean;
  /** Pause auto-scroll when focused */
  pauseOnFocus?: boolean;
}

// =================================================================
// CAROUSEL DISPLAY TYPES
// =================================================================

/**
 * Responsive column configuration for different breakpoints
 */
export interface ResponsiveColumns {
  /** Columns at mobile breakpoint (< 480px) */
  mobile?: 1 | 2;
  /** Columns at small breakpoint (480px - 767px) */
  small?: 1 | 2 | 3;
  /** Columns at tablet breakpoint (768px - 1023px) */
  tablet?: 2 | 3 | 4;
  /** Columns at desktop breakpoint (>= 1024px) */
  desktop?: 3 | 4 | 5 | 6;
}

/**
 * Gap size between carousel items
 */
export type GapSize = 'small' | 'medium' | 'large';

// =================================================================
// CAROUSEL COMPONENT PROPS
// =================================================================

/**
 * Props for the NewArrivalsCarousel component
 */
export interface NewArrivalsCarouselProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of products to display (will be sorted by date) */
  products?: ProductCardProps[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Maximum number of products to display */
  maxProducts?: number;
  /** Responsive columns configuration */
  columns?: ResponsiveColumns;
  /** Gap between items */
  gap?: GapSize;
  /** Aspect ratio for product images */
  aspectRatio?: AspectRatio;
  /** Navigation button position */
  navigationPosition?: NavigationPosition;
  /** Show navigation dots/indicators */
  showIndicators?: boolean;
  /** Auto-scroll configuration */
  autoScroll?: AutoScrollConfig;
  /** Text for the "View All" CTA button */
  viewAllText?: string;
  /** URL for the "View All" CTA button */
  viewAllHref?: string;
  /** Whether to show the "View All" button */
  showViewAll?: boolean;
  /** Enable infinite loop scrolling */
  infinite?: boolean;
  /** Enable touch/swipe navigation */
  enableSwipe?: boolean;
  /** Enable keyboard navigation */
  enableKeyboard?: boolean;
  /** Number of items to scroll at once */
  scrollAmount?: number;
  /** Animation duration in milliseconds */
  animationDuration?: number;
}

// =================================================================
// CAROUSEL CONFIG TYPE
// =================================================================

/**
 * Configuration options for the new arrivals carousel section
 */
export interface NewArrivalsCarouselConfig {
  /** Section ID for anchor linking */
  id: string;
  /** Main heading for the section */
  heading: string;
  /** Subheading/description text */
  subheading: string;
  /** Maximum number of products to display */
  maxProducts: number;
  /** Responsive columns configuration */
  columns: ResponsiveColumns;
  /** Gap between items */
  gap: GapSize;
  /** Aspect ratio for product images */
  aspectRatio: AspectRatio;
  /** Navigation button position */
  navigationPosition: NavigationPosition;
  /** Show navigation indicators */
  showIndicators: boolean;
  /** Auto-scroll configuration */
  autoScroll: AutoScrollConfig;
  /** Text for the "View All" CTA button */
  viewAllText: string;
  /** URL for the "View All" CTA button */
  viewAllHref: string;
  /** Whether to show the "View All" button */
  showViewAll: boolean;
  /** Enable infinite loop scrolling */
  infinite: boolean;
  /** Enable touch/swipe navigation */
  enableSwipe: boolean;
  /** Enable keyboard navigation */
  enableKeyboard: boolean;
  /** Number of items to scroll at once */
  scrollAmount: number;
  /** Animation duration in milliseconds */
  animationDuration: number;
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Carousel scroll direction
 */
export type ScrollDirection = 'left' | 'right';

/**
 * Carousel state for tracking position and interactions
 */
export interface CarouselState {
  /** Current scroll position index */
  currentIndex: number;
  /** Total number of items */
  totalItems: number;
  /** Number of visible items */
  visibleItems: number;
  /** Whether carousel is at the start */
  isAtStart: boolean;
  /** Whether carousel is at the end */
  isAtEnd: boolean;
  /** Whether auto-scroll is paused */
  isPaused: boolean;
  /** Whether user is currently dragging */
  isDragging: boolean;
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Get CSS gap value from gap size
 * @param gap - Gap size option
 * @returns CSS variable reference
 */
export function getGapCss(gap: GapSize): string {
  switch (gap) {
    case 'small':
      return 'var(--spacing-4)';
    case 'medium':
      return 'var(--spacing-6)';
    case 'large':
      return 'var(--spacing-8)';
    default:
      return 'var(--spacing-6)';
  }
}

/**
 * Calculate the number of visible items based on container width
 * @param containerWidth - Width of the carousel container
 * @param columns - Responsive columns configuration
 * @returns Number of visible items
 */
export function calculateVisibleItems(
  containerWidth: number,
  columns: ResponsiveColumns
): number {
  if (containerWidth < 480) {
    return columns.mobile ?? 1;
  } else if (containerWidth < 768) {
    return columns.small ?? 2;
  } else if (containerWidth < 1024) {
    return columns.tablet ?? 3;
  } else {
    return columns.desktop ?? 4;
  }
}

/**
 * Default responsive columns configuration
 */
export const DEFAULT_COLUMNS: ResponsiveColumns = {
  mobile: 1,
  small: 2,
  tablet: 3,
  desktop: 4,
};

/**
 * Default auto-scroll configuration
 */
export const DEFAULT_AUTO_SCROLL: AutoScrollConfig = {
  enabled: false,
  interval: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
};
