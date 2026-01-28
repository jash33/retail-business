/**
 * =================================================================
 * COLLECTION CARD TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for collection card components with hero images,
 * overlay titles, item counts, and links to filtered shop views.
 * Designed for showcasing product collections/categories.
 *
 * =================================================================
 */

import type { UTMParams } from './shop';

// =================================================================
// COLLECTION IMAGE TYPES
// =================================================================

/**
 * Image configuration for collection cards with WebP support
 */
export interface CollectionImage {
  /** Main image source URL */
  src: string;
  /** WebP format source for modern browsers */
  srcWebP?: string;
  /** Alt text for accessibility (required) */
  alt: string;
  /** Image width for aspect ratio calculation */
  width?: number;
  /** Image height for aspect ratio calculation */
  height?: number;
  /** Low-resolution placeholder for blur-up effect */
  placeholder?: string;
}

// =================================================================
// ASPECT RATIO TYPES
// =================================================================

/**
 * Supported aspect ratios for collection card images
 */
export type CollectionAspectRatio = '16:9' | '4:3' | '3:2' | '1:1' | '2:3';

// =================================================================
// COLLECTION CARD PROPS
// =================================================================

/**
 * Props for the CollectionCard component
 */
export interface CollectionCardProps {
  /** Unique collection identifier */
  id: string;
  /** Collection name/title */
  name: string;
  /** Hero image for the collection */
  image: CollectionImage;
  /** Number of items in the collection */
  itemCount?: number;
  /** Short collection description (optional) */
  description?: string;
  /** Link to filtered shop/category view */
  href: string;
  /** Whether this is a featured collection */
  featured?: boolean;
  /** Whether this collection is new */
  isNew?: boolean;
  /** Aspect ratio for the image container */
  aspectRatio?: CollectionAspectRatio;
  /** Overlay text position */
  overlayPosition?: CollectionOverlayPosition;
  /** UTM parameters for tracking */
  utmParams?: UTMParams;
  /** Additional CSS class names */
  class?: string;
  /** Whether to show loading placeholder */
  showLoadingState?: boolean;
  /** Custom CTA text (default: "Shop Now") */
  ctaText?: string;
  /** Whether to open link in new tab */
  openInNewTab?: boolean;
}

// =================================================================
// OVERLAY POSITION TYPES
// =================================================================

/**
 * Position options for the collection overlay text
 */
export type CollectionOverlayPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'center'
  | 'top-left'
  | 'top-center'
  | 'top-right';

// =================================================================
// COLLECTION GRID PROPS
// =================================================================

/**
 * Grid layout variants for collection displays
 */
export type CollectionGridLayout =
  | 'standard'           // Even grid layout
  | 'featured-first'     // First item spans 2 columns
  | 'featured-hero'      // First item is larger hero style
  | 'asymmetric';        // Mixed sizing for visual interest

/**
 * Props for CollectionGrid component
 */
export interface CollectionGridProps {
  /** Array of collections to display */
  collections: CollectionCardProps[];
  /** Number of columns (2-4) at desktop size */
  columns?: 2 | 3 | 4;
  /** Gap between cards */
  gap?: 'small' | 'medium' | 'large';
  /** Grid layout variant */
  layout?: CollectionGridLayout;
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Enable stagger animation for items */
  enableAnimation?: boolean;
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Get aspect ratio as a CSS-compatible string
 * @param ratio - Aspect ratio type
 * @returns CSS aspect-ratio value (e.g., "16 / 9")
 */
export function getCollectionAspectRatioCss(ratio: CollectionAspectRatio): string {
  switch (ratio) {
    case '16:9':
      return '16 / 9';
    case '4:3':
      return '4 / 3';
    case '3:2':
      return '3 / 2';
    case '1:1':
      return '1 / 1';
    case '2:3':
      return '2 / 3';
    default:
      return '16 / 9';
  }
}

/**
 * Format item count for display
 * @param count - Number of items
 * @returns Formatted string (e.g., "24 items" or "1 item")
 */
export function formatItemCount(count: number): string {
  if (count === 1) {
    return '1 item';
  }
  return `${count} items`;
}

/**
 * Get overlay position CSS classes
 * @param position - Overlay position type
 * @returns CSS positioning object
 */
export function getOverlayPositionStyles(position: CollectionOverlayPosition): {
  alignItems: string;
  justifyContent: string;
  textAlign: string;
} {
  switch (position) {
    case 'top-left':
      return { alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' };
    case 'top-center':
      return { alignItems: 'flex-start', justifyContent: 'center', textAlign: 'center' };
    case 'top-right':
      return { alignItems: 'flex-start', justifyContent: 'flex-end', textAlign: 'right' };
    case 'center':
      return { alignItems: 'center', justifyContent: 'center', textAlign: 'center' };
    case 'bottom-left':
      return { alignItems: 'flex-end', justifyContent: 'flex-start', textAlign: 'left' };
    case 'bottom-center':
      return { alignItems: 'flex-end', justifyContent: 'center', textAlign: 'center' };
    case 'bottom-right':
      return { alignItems: 'flex-end', justifyContent: 'flex-end', textAlign: 'right' };
    default:
      return { alignItems: 'flex-end', justifyContent: 'flex-start', textAlign: 'left' };
  }
}
