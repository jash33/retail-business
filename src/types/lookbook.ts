/**
 * =================================================================
 * LOOKBOOK GRID TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for lookbook-style grid components with mixed
 * aspect ratios, text overlays, and shoppable product tags. Designed
 * for creating curated seasonal collections or style guides.
 *
 * =================================================================
 */

import type { UTMParams } from './shop';
import type { ProductImage, ProductPrice } from './product';

// =================================================================
// ASPECT RATIO TYPES
// =================================================================

/**
 * Supported aspect ratios for lookbook items
 * Allows for mixed layouts with various image proportions
 */
export type LookbookAspectRatio =
  | '1:1'      // Square - perfect for product shots
  | '4:5'      // Portrait - standard product cards
  | '3:4'      // Taller portrait - editorial style
  | '16:9'     // Landscape - banner style
  | '2:3'      // Tall portrait - magazine style
  | '9:16'     // Vertical/Story - social media inspired
  | '3:2';     // Landscape - photography standard

// =================================================================
// TEXT OVERLAY TYPES
// =================================================================

/**
 * Position options for text overlays on lookbook items
 */
export type OverlayPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Text overlay configuration for lookbook items
 */
export interface LookbookTextOverlay {
  /** Main heading text */
  heading?: string;
  /** Subheading or tagline */
  subheading?: string;
  /** Call-to-action text */
  ctaText?: string;
  /** Position of the overlay */
  position?: OverlayPosition;
  /** Theme variant for text styling */
  theme?: 'light' | 'dark' | 'gradient';
  /** Text alignment */
  alignment?: 'left' | 'center' | 'right';
}

// =================================================================
// PRODUCT TAG TYPES
// =================================================================

/**
 * Shoppable product tag configuration
 * Positioned absolutely on the lookbook item image
 */
export interface ProductTag {
  /** Unique identifier for the tag */
  id: string;
  /** Product name */
  name: string;
  /** Product price */
  price: ProductPrice;
  /** Horizontal position as percentage (0-100) */
  x: number;
  /** Vertical position as percentage (0-100) */
  y: number;
  /** Direct URL to the product page */
  shopUrl: string;
  /** Optional product image for tooltip preview */
  image?: ProductImage;
  /** Optional product description */
  description?: string;
  /** UTM parameters for tracking */
  utmParams?: UTMParams;
  /** Whether to open link in new tab */
  openInNewTab?: boolean;
}

// =================================================================
// LOOKBOOK ITEM TYPES
// =================================================================

/**
 * Size/span configuration for grid items
 */
export interface LookbookItemSize {
  /** Number of columns the item spans */
  colSpan?: 1 | 2 | 3;
  /** Number of rows the item spans */
  rowSpan?: 1 | 2 | 3;
}

/**
 * Individual lookbook item configuration
 */
export interface LookbookItem {
  /** Unique identifier for the item */
  id: string;
  /** Main image for the lookbook item */
  image: ProductImage;
  /** Alt text for the image (required for accessibility) */
  alt?: string;
  /** Aspect ratio for the image */
  aspectRatio?: LookbookAspectRatio;
  /** Size/span in the grid */
  size?: LookbookItemSize;
  /** Whether this is a featured item */
  featured?: boolean;
  /** Text overlay configuration */
  textOverlay?: LookbookTextOverlay;
  /** Shoppable product tags */
  productTags?: ProductTag[];
  /** Optional link for the entire item */
  href?: string;
  /** UTM parameters for tracking */
  utmParams?: UTMParams;
  /** Whether to open link in new tab */
  openInNewTab?: boolean;
  /** Optional category/collection label */
  category?: string;
  /** Optional "new" badge */
  isNew?: boolean;
  /** Additional CSS class names */
  class?: string;
}

// =================================================================
// LOOKBOOK GRID PROPS
// =================================================================

/**
 * Grid layout variants for different display styles
 */
export type LookbookLayout =
  | 'standard'        // Even grid layout
  | 'masonry'         // Pinterest-style staggered grid
  | 'featured-first'  // First item larger
  | 'editorial'       // Magazine-style mixed sizes
  | 'gallery';        // Photo gallery style

/**
 * Props for LookbookGrid component
 */
export interface LookbookGridProps {
  /** Array of lookbook items to display */
  items: LookbookItem[];
  /** Number of columns at desktop size (2-4) */
  columns?: 2 | 3 | 4;
  /** Gap between items */
  gap?: 'small' | 'medium' | 'large' | 'none';
  /** Grid layout variant */
  layout?: LookbookLayout;
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
  /** Maximum items to animate with stagger */
  maxStaggerItems?: number;
  /** Show product tags by default (vs on hover) */
  showTagsByDefault?: boolean;
  /** Enable tag tooltips */
  enableTooltips?: boolean;
  /** Responsive column overrides */
  responsiveColumns?: {
    /** Columns at mobile breakpoint (< 480px) */
    mobile?: 1 | 2;
    /** Columns at tablet breakpoint (480px - 767px) */
    tablet?: 2 | 3;
    /** Columns at desktop breakpoint (768px+) */
    desktop?: 2 | 3 | 4;
  };
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Get aspect ratio as a CSS-compatible string
 * @param ratio - Aspect ratio type
 * @returns CSS aspect-ratio value (e.g., "4 / 5")
 */
export function getLookbookAspectRatioCss(ratio: LookbookAspectRatio): string {
  switch (ratio) {
    case '1:1':
      return '1 / 1';
    case '4:5':
      return '4 / 5';
    case '3:4':
      return '3 / 4';
    case '16:9':
      return '16 / 9';
    case '2:3':
      return '2 / 3';
    case '9:16':
      return '9 / 16';
    case '3:2':
      return '3 / 2';
    default:
      return '4 / 5';
  }
}

/**
 * Get overlay position CSS class suffix
 * @param position - Overlay position
 * @returns CSS class suffix
 */
export function getOverlayPositionClass(position: OverlayPosition): string {
  return position.toLowerCase().replace('-', '-');
}

/**
 * Validate product tag position
 * Ensures x and y are within 0-100 range
 * @param tag - Product tag to validate
 * @returns Validated product tag
 */
export function validateTagPosition(tag: ProductTag): ProductTag {
  return {
    ...tag,
    x: Math.max(0, Math.min(100, tag.x)),
    y: Math.max(0, Math.min(100, tag.y)),
  };
}
