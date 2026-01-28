/**
 * =================================================================
 * FEATURED PRODUCT TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for featured product components with larger cards,
 * editorial descriptions, and prominent CTAs for homepage showcasing.
 *
 * =================================================================
 */

import type { ProductImage, ProductPrice, AspectRatio } from './product';
import type { UTMParams } from './shop';

// =================================================================
// FEATURED PRODUCT PROPS
// =================================================================

/**
 * Configuration for a featured product with editorial content
 * Extends base product data with richer descriptions and styling options
 */
export interface FeaturedProduct {
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
  /** Short product tagline (appears above title) */
  tagline?: string;
  /** Brief product description for standard display */
  description?: string;
  /** Extended editorial description for featured display */
  editorialDescription?: string;
  /** Product category for display */
  category?: string;
  /** Whether the product is new */
  isNew?: boolean;
  /** Whether the product is on sale */
  onSale?: boolean;
  /** Whether the product is sold out */
  soldOut?: boolean;
  /** Aspect ratio for the image container */
  aspectRatio?: AspectRatio;
  /** UTM parameters for shop link tracking */
  utmParams?: UTMParams;
  /** Custom CTA button text (default: "Shop Now") */
  ctaText?: string;
  /** Whether to open shop link in new tab */
  openInNewTab?: boolean;
  /** Display order priority (lower numbers appear first) */
  priority?: number;
}

// =================================================================
// FEATURED PRODUCTS SECTION PROPS
// =================================================================

/**
 * Props for the FeaturedProductsSection component
 */
export interface FeaturedProductsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of featured products to display */
  products: FeaturedProduct[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Text for the "View All" CTA button */
  viewAllText?: string;
  /** URL for the "View All" CTA button */
  viewAllHref?: string;
  /** Whether to show the "View All" button */
  showViewAll?: boolean;
  /** Maximum number of products to display */
  maxProducts?: number;
  /** Number of columns in the grid (1-3) */
  columns?: 1 | 2 | 3;
  /** Layout variant */
  layout?: 'grid' | 'featured-first';
}

// =================================================================
// FEATURED PRODUCTS CONFIG
// =================================================================

/**
 * Configuration options for the featured products section
 */
export interface FeaturedProductsConfig {
  /** Section ID for anchor linking */
  id: string;
  /** Main heading for the section */
  heading: string;
  /** Subheading/description text */
  subheading: string;
  /** Text for the "View All" CTA button */
  viewAllText: string;
  /** URL for the "View All" CTA button */
  viewAllHref: string;
  /** Whether to show the "View All" button */
  showViewAll: boolean;
  /** Maximum number of products to display */
  maxProducts: number;
  /** Number of columns in the grid */
  columns: 1 | 2 | 3;
  /** Layout variant */
  layout: 'grid' | 'featured-first';
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Sort featured products by priority
 * @param products - Array of featured products
 * @returns Sorted array with lower priority numbers first
 */
export function sortByPriority(products: FeaturedProduct[]): FeaturedProduct[] {
  return [...products].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
}

/**
 * Filter available products (not sold out)
 * @param products - Array of featured products
 * @returns Array of products that are not sold out
 */
export function filterAvailable(products: FeaturedProduct[]): FeaturedProduct[] {
  return products.filter(product => !product.soldOut);
}
