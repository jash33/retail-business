/**
 * =================================================================
 * PRODUCT CARD TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for product card components with gallery-style
 * display, hover effects, quick shop functionality, and e-commerce
 * integration.
 *
 * =================================================================
 */

import type { UTMParams } from './shop';

// =================================================================
// PRODUCT IMAGE TYPES
// =================================================================

/**
 * Image configuration for product cards with WebP support and LQIP
 */
export interface ProductImage {
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
  /** Low-resolution placeholder for blur-up effect (base64 data URL) */
  placeholder?: string;
  /** Dominant color for placeholder background (used when LQIP not available) */
  placeholderColor?: string;
  /** Whether this is a priority/LCP image (disables lazy loading) */
  priority?: boolean;
}

// =================================================================
// PRODUCT PRICE TYPES
// =================================================================

/**
 * Currency codes for price formatting
 */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | string;

/**
 * Price configuration for products
 */
export interface ProductPrice {
  /** Current selling price */
  amount: number;
  /** Original price (for showing discounts) */
  originalAmount?: number;
  /** Currency code (default: USD) */
  currency?: CurrencyCode;
  /** Whether to show decimal places */
  showDecimals?: boolean;
}

// =================================================================
// ASPECT RATIO TYPES
// =================================================================

/**
 * Supported aspect ratios for product card images
 */
export type AspectRatio = '4:5' | '1:1';

// =================================================================
// PRODUCT CARD PROPS
// =================================================================

/**
 * Props for the ProductCard component
 */
export interface ProductCardProps {
  /** Unique product identifier */
  id: string;
  /** Product name/title */
  name: string;
  /** Primary product image */
  image: ProductImage;
  /** Secondary image shown on hover (optional) */
  hoverImage?: ProductImage;
  /** Product price configuration */
  price: ProductPrice;
  /** Direct URL to product page in external shop */
  shopUrl: string;
  /** Short product description (optional) */
  description?: string;
  /** Product category for display */
  category?: string;
  /** Whether the product is featured */
  featured?: boolean;
  /** Whether the product is new */
  isNew?: boolean;
  /** Whether the product is on sale */
  onSale?: boolean;
  /** Whether the product is sold out */
  soldOut?: boolean;
  /** Whether the product is available for pre-order */
  preOrder?: boolean;
  /** Stock quantity (for low stock indicator) */
  stockQuantity?: number;
  /** Threshold below which "low stock" is shown (default: 5) */
  lowStockThreshold?: number;
  /** Whether to show availability badge on card */
  showAvailability?: boolean;
  /** Aspect ratio for the image container */
  aspectRatio?: AspectRatio;
  /** UTM parameters for shop link tracking */
  utmParams?: UTMParams;
  /** Additional CSS class names */
  class?: string;
  /** Whether to show loading placeholder */
  showLoadingState?: boolean;
  /** Quick shop button text */
  quickShopText?: string;
  /** Whether to open shop link in new tab */
  openInNewTab?: boolean;
  /** Whether to show quick view button */
  showQuickView?: boolean;
  /** Quick view button text */
  quickViewText?: string;
}

// =================================================================
// PRODUCT GRID PROPS
// =================================================================

/**
 * Grid layout variants for different display styles
 */
export type GridLayout =
  | 'standard'           // Even grid layout
  | 'featured-first'     // First item spans 2 columns
  | 'featured-left'      // Left item is larger (asymmetric)
  | 'featured-right'     // Right item is larger (asymmetric)
  | 'masonry';           // Pinterest-style masonry layout

/**
 * Featured product placement configuration
 */
export interface FeaturedPlacement {
  /** Index of the product to feature (0-based) */
  index: number;
  /** Number of columns the featured product spans */
  colSpan?: 1 | 2;
  /** Number of rows the featured product spans */
  rowSpan?: 1 | 2;
}

/**
 * Props for ProductGrid component (flexible grid wrapper)
 */
export interface ProductGridProps {
  /** Array of products to display */
  products: ProductCardProps[];
  /** Number of columns (2-4) at desktop size */
  columns?: 2 | 3 | 4;
  /** Gap between cards */
  gap?: 'small' | 'medium' | 'large';
  /** Grid layout variant */
  layout?: GridLayout;
  /** Custom featured product placements for asymmetric layouts */
  featuredPlacements?: FeaturedPlacement[];
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Section description (alias for subheading) */
  description?: string;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Enable stagger animation for items */
  enableAnimation?: boolean;
  /** Maximum stagger delay items (for performance) */
  maxStaggerItems?: number;
  /** Responsive column overrides */
  responsiveColumns?: {
    /** Columns at mobile breakpoint (< 480px) */
    mobile?: 1 | 2;
    /** Columns at tablet breakpoint (480px - 767px) */
    tablet?: 1 | 2 | 3;
    /** Columns at desktop breakpoint (768px - 1023px) */
    desktop?: 2 | 3 | 4;
  };
  /** Whether to show quick view button on product cards */
  showQuickView?: boolean;
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Format a price for display
 * @param price - Price configuration object
 * @returns Formatted price string (e.g., "$29.99")
 */
export function formatPrice(price: ProductPrice): string {
  const { amount, currency = 'USD', showDecimals = true } = price;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  });

  return formatter.format(amount);
}

/**
 * Calculate discount percentage
 * @param price - Price configuration object
 * @returns Discount percentage or null if no discount
 */
export function calculateDiscount(price: ProductPrice): number | null {
  if (!price.originalAmount || price.originalAmount <= price.amount) {
    return null;
  }

  const discount = ((price.originalAmount - price.amount) / price.originalAmount) * 100;
  return Math.round(discount);
}

/**
 * Get aspect ratio as a CSS-compatible string
 * @param ratio - Aspect ratio type
 * @returns CSS aspect-ratio value (e.g., "4 / 5")
 */
export function getAspectRatioCss(ratio: AspectRatio): string {
  switch (ratio) {
    case '4:5':
      return '4 / 5';
    case '1:1':
      return '1 / 1';
    default:
      return '4 / 5';
  }
}
