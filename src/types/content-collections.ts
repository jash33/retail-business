/**
 * =================================================================
 * CONTENT COLLECTION TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types derived from Astro Content Collections schemas.
 * These types provide type safety when working with content collection
 * data throughout the application.
 *
 * NOTE: These types are automatically inferred from the Zod schemas
 * defined in src/content/config.ts. If you need to modify the schema,
 * update the Zod definitions and these types will update accordingly.
 *
 * @see src/content/config.ts for schema definitions
 * @see src/utils/products.ts for collection query utilities
 * =================================================================
 */

import type { CollectionEntry } from 'astro:content';

// =================================================================
// CONTENT ENTRY TYPES
// =================================================================

/**
 * Full product entry including metadata and rendered content
 */
export type ProductEntry = CollectionEntry<'products'>;

/**
 * Product frontmatter data (without rendered content)
 */
export type ProductData = ProductEntry['data'];

/**
 * Product slug type
 */
export type ProductSlug = ProductEntry['slug'];

// =================================================================
// RE-EXPORT SCHEMA TYPES
// =================================================================

// These are re-exported from the content config for convenience
export type {
  ProductImage,
  ProductPrice,
  UTMParams,
  ProductMetadata,
  ProductCategory,
} from '../content/config';

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Subset of product data for card displays
 */
export interface ProductCardData {
  id: string;
  name: string;
  image: ProductData['image'];
  hoverImage?: ProductData['hoverImage'];
  price: ProductData['price'];
  shopUrl: string;
  description: string;
  category: ProductData['category'];
  featured?: boolean;
  isNew?: boolean;
  onSale?: boolean;
  soldOut?: boolean;
  preOrder?: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  aspectRatio?: '4:5' | '1:1';
  utmParams?: ProductData['utmParams'];
  openInNewTab?: boolean;
}

/**
 * Subset of product data for featured displays
 */
export interface FeaturedProductData extends ProductCardData {
  tagline?: string;
  editorialDescription?: string;
  ctaText?: string;
  priority?: number;
  showAvailability?: boolean;
}

/**
 * Product availability status
 */
export type ProductAvailability = 'in-stock' | 'low-stock' | 'sold-out' | 'pre-order';

/**
 * Product sort options
 */
export type ProductSortOption =
  | 'priority'
  | 'name'
  | 'price-asc'
  | 'price-desc'
  | 'date-added'
  | 'date-updated';

/**
 * Product filter options
 */
export interface ProductFilterOptions {
  category?: string;
  featured?: boolean;
  isNew?: boolean;
  onSale?: boolean;
  excludeSoldOut?: boolean;
  publishedOnly?: boolean;
  limit?: number;
}

// =================================================================
// TYPE GUARDS
// =================================================================

/**
 * Type guard to check if a value is a valid ProductCategory
 */
export function isProductCategory(value: unknown): value is ProductData['category'] {
  const validCategories = [
    'Bags',
    'Kitchen',
    'Home',
    'Accessories',
    'Apparel',
    'Art',
    'Jewelry',
    'Stationery',
    'Outdoor',
    'Electronics',
    'Other',
  ];
  return typeof value === 'string' && validCategories.includes(value);
}

/**
 * Type guard to check if a value is a valid ProductSortOption
 */
export function isProductSortOption(value: unknown): value is ProductSortOption {
  const validOptions = [
    'priority',
    'name',
    'price-asc',
    'price-desc',
    'date-added',
    'date-updated',
  ];
  return typeof value === 'string' && validOptions.includes(value);
}

/**
 * Type guard to check if a value is a valid ProductAvailability
 */
export function isProductAvailability(value: unknown): value is ProductAvailability {
  return (
    value === 'in-stock' || value === 'low-stock' || value === 'sold-out' || value === 'pre-order'
  );
}
