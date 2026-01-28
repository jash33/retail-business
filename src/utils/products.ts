/**
 * =================================================================
 * PRODUCT COLLECTION UTILITIES
 * =================================================================
 *
 * Utility functions for querying and manipulating the products
 * content collection. Provides type-safe access to product data
 * with filtering, sorting, and transformation helpers.
 *
 * @see src/content/config.ts for schema definitions
 * =================================================================
 */

import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// =================================================================
// TYPE DEFINITIONS
// =================================================================

/**
 * Product entry type from the content collection
 */
export type ProductEntry = CollectionEntry<'products'>;

/**
 * Product data (frontmatter) from the content collection
 */
export type ProductData = ProductEntry['data'];

/**
 * Filter options for querying products
 */
export interface ProductFilterOptions {
  /** Filter by category */
  category?: string;
  /** Only show featured products */
  featured?: boolean;
  /** Only show new products */
  isNew?: boolean;
  /** Only show products on sale */
  onSale?: boolean;
  /** Exclude sold out products */
  excludeSoldOut?: boolean;
  /** Only show published products */
  publishedOnly?: boolean;
  /** Maximum number of products to return */
  limit?: number;
}

/**
 * Sort options for product lists
 */
export type ProductSortOption =
  | 'priority'
  | 'name'
  | 'price-asc'
  | 'price-desc'
  | 'date-added'
  | 'date-updated';

// =================================================================
// QUERY FUNCTIONS
// =================================================================

/**
 * Get all products from the content collection
 * @param options - Filter options
 * @returns Array of product entries
 */
export async function getAllProducts(
  options: ProductFilterOptions = {}
): Promise<ProductEntry[]> {
  const {
    category,
    featured,
    isNew,
    onSale,
    excludeSoldOut = false,
    publishedOnly = true,
    limit,
  } = options;

  let products = await getCollection('products', ({ data }) => {
    // Filter by published status
    if (publishedOnly && !data.published) return false;

    // Filter by category
    if (category && data.category !== category) return false;

    // Filter by featured status
    if (featured !== undefined && data.featured !== featured) return false;

    // Filter by new status
    if (isNew !== undefined && data.isNew !== isNew) return false;

    // Filter by sale status
    if (onSale !== undefined && data.onSale !== onSale) return false;

    // Exclude sold out products
    if (excludeSoldOut && data.soldOut) return false;

    return true;
  });

  // Apply limit if specified
  if (limit && limit > 0) {
    products = products.slice(0, limit);
  }

  return products;
}

/**
 * Get a single product by its slug
 * @param slug - Product slug (filename without extension)
 * @returns Product entry or undefined
 */
export async function getProductBySlug(
  slug: string
): Promise<ProductEntry | undefined> {
  return await getEntry('products', slug);
}

/**
 * Get featured products sorted by priority
 * @param limit - Maximum number of products to return
 * @returns Array of featured product entries
 */
export async function getFeaturedProducts(
  limit?: number
): Promise<ProductEntry[]> {
  const products = await getAllProducts({
    featured: true,
    excludeSoldOut: false,
    limit,
  });

  return sortProducts(products, 'priority');
}

/**
 * Get products by category
 * @param category - Category to filter by
 * @param options - Additional filter options
 * @returns Array of product entries in the category
 */
export async function getProductsByCategory(
  category: string,
  options: Omit<ProductFilterOptions, 'category'> = {}
): Promise<ProductEntry[]> {
  return getAllProducts({ ...options, category });
}

/**
 * Get related products for a given product
 * @param product - The source product entry
 * @param limit - Maximum number of related products
 * @returns Array of related product entries
 */
export async function getRelatedProducts(
  product: ProductEntry,
  limit: number = 4
): Promise<ProductEntry[]> {
  const relatedSlugs = product.data.relatedProducts || [];
  const relatedProducts: ProductEntry[] = [];

  // First, get explicitly related products
  for (const slug of relatedSlugs) {
    const related = await getProductBySlug(slug);
    if (related && related.id !== product.id && related.data.published) {
      relatedProducts.push(related);
    }
    if (relatedProducts.length >= limit) break;
  }

  // If we need more, fill with products from the same category
  if (relatedProducts.length < limit && product.data.category) {
    const categoryProducts = await getProductsByCategory(product.data.category, {
      excludeSoldOut: true,
    });

    for (const categoryProduct of categoryProducts) {
      if (
        categoryProduct.id !== product.id &&
        !relatedProducts.some((p) => p.id === categoryProduct.id)
      ) {
        relatedProducts.push(categoryProduct);
      }
      if (relatedProducts.length >= limit) break;
    }
  }

  return relatedProducts;
}

/**
 * Get all unique product categories
 * @returns Array of category names
 */
export async function getAllCategories(): Promise<string[]> {
  const products = await getAllProducts({ publishedOnly: true });
  const categories = new Set<string>();

  for (const product of products) {
    if (product.data.category) {
      categories.add(product.data.category);
    }
  }

  return Array.from(categories).sort();
}

/**
 * Get products that are on sale
 * @param limit - Maximum number of products to return
 * @returns Array of on-sale product entries
 */
export async function getSaleProducts(limit?: number): Promise<ProductEntry[]> {
  const products = await getAllProducts({
    onSale: true,
    excludeSoldOut: true,
    limit,
  });

  return sortProducts(products, 'priority');
}

/**
 * Get new arrivals
 * @param limit - Maximum number of products to return
 * @returns Array of new product entries
 */
export async function getNewArrivals(limit?: number): Promise<ProductEntry[]> {
  const products = await getAllProducts({
    isNew: true,
    excludeSoldOut: true,
    limit,
  });

  return sortProducts(products, 'date-added');
}

// =================================================================
// SORTING FUNCTIONS
// =================================================================

/**
 * Sort products by the specified option
 * @param products - Array of product entries
 * @param sortBy - Sort option
 * @returns Sorted array of products
 */
export function sortProducts(
  products: ProductEntry[],
  sortBy: ProductSortOption = 'priority'
): ProductEntry[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'priority':
      return sorted.sort(
        (a, b) => (a.data.priority ?? 999) - (b.data.priority ?? 999)
      );

    case 'name':
      return sorted.sort((a, b) => a.data.name.localeCompare(b.data.name));

    case 'price-asc':
      return sorted.sort((a, b) => a.data.price.amount - b.data.price.amount);

    case 'price-desc':
      return sorted.sort((a, b) => b.data.price.amount - a.data.price.amount);

    case 'date-added':
      return sorted.sort((a, b) => {
        const dateA = a.data.dateAdded?.getTime() ?? 0;
        const dateB = b.data.dateAdded?.getTime() ?? 0;
        return dateB - dateA; // Newest first
      });

    case 'date-updated':
      return sorted.sort((a, b) => {
        const dateA = a.data.dateUpdated?.getTime() ?? a.data.dateAdded?.getTime() ?? 0;
        const dateB = b.data.dateUpdated?.getTime() ?? b.data.dateAdded?.getTime() ?? 0;
        return dateB - dateA; // Most recently updated first
      });

    default:
      return sorted;
  }
}

// =================================================================
// TRANSFORMATION FUNCTIONS
// =================================================================

/**
 * Transform a product entry to ProductCardProps format
 * Compatible with the existing ProductCard component
 * @param product - Product entry from content collection
 * @returns Object compatible with ProductCardProps
 */
export function toProductCardProps(product: ProductEntry) {
  const { data } = product;

  return {
    id: product.slug,
    name: data.name,
    image: data.image,
    hoverImage: data.hoverImage,
    price: data.price,
    shopUrl: data.shopUrl,
    description: data.description,
    category: data.category,
    featured: data.featured,
    isNew: data.isNew,
    onSale: data.onSale,
    soldOut: data.soldOut,
    preOrder: data.preOrder,
    stockQuantity: data.stockQuantity,
    lowStockThreshold: data.lowStockThreshold,
    aspectRatio: data.aspectRatio,
    utmParams: data.utmParams,
    openInNewTab: data.openInNewTab,
  };
}

/**
 * Transform a product entry to FeaturedProduct format
 * Compatible with the existing FeaturedProductsSection component
 * @param product - Product entry from content collection
 * @returns Object compatible with FeaturedProduct interface
 */
export function toFeaturedProductProps(product: ProductEntry) {
  const { data } = product;

  return {
    id: product.slug,
    name: data.name,
    image: data.image,
    hoverImage: data.hoverImage,
    price: data.price,
    shopUrl: data.shopUrl,
    tagline: data.tagline,
    description: data.description,
    editorialDescription: data.editorialDescription,
    category: data.category,
    isNew: data.isNew,
    onSale: data.onSale,
    soldOut: data.soldOut,
    preOrder: data.preOrder,
    stockQuantity: data.stockQuantity,
    lowStockThreshold: data.lowStockThreshold,
    aspectRatio: data.aspectRatio,
    utmParams: data.utmParams,
    ctaText: data.ctaText,
    openInNewTab: data.openInNewTab,
    priority: data.priority,
  };
}

/**
 * Transform multiple product entries to ProductCardProps
 * @param products - Array of product entries
 * @returns Array of ProductCardProps-compatible objects
 */
export function toProductCardPropsArray(products: ProductEntry[]) {
  return products.map(toProductCardProps);
}

/**
 * Transform multiple product entries to FeaturedProduct format
 * @param products - Array of product entries
 * @returns Array of FeaturedProduct-compatible objects
 */
export function toFeaturedProductPropsArray(products: ProductEntry[]) {
  return products.map(toFeaturedProductProps);
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Calculate discount percentage for a product
 * @param product - Product entry
 * @returns Discount percentage or null if not on sale
 */
export function getProductDiscount(product: ProductEntry): number | null {
  const { amount, originalAmount } = product.data.price;

  if (!originalAmount || originalAmount <= amount) {
    return null;
  }

  return Math.round(((originalAmount - amount) / originalAmount) * 100);
}

/**
 * Check if a product has low stock
 * @param product - Product entry
 * @returns True if stock is below threshold
 */
export function isLowStock(product: ProductEntry): boolean {
  const { stockQuantity, lowStockThreshold } = product.data;

  if (stockQuantity === undefined) return false;

  return stockQuantity > 0 && stockQuantity <= lowStockThreshold;
}

/**
 * Get product availability status
 * @param product - Product entry
 * @returns Availability status string
 */
export function getAvailabilityStatus(
  product: ProductEntry
): 'in-stock' | 'low-stock' | 'sold-out' | 'pre-order' {
  if (product.data.soldOut) return 'sold-out';
  if (product.data.preOrder) return 'pre-order';
  if (isLowStock(product)) return 'low-stock';
  return 'in-stock';
}

/**
 * Search products by name and description
 * @param query - Search query
 * @param options - Filter options to apply after search
 * @returns Array of matching product entries
 */
export async function searchProducts(
  query: string,
  options: ProductFilterOptions = {}
): Promise<ProductEntry[]> {
  const products = await getAllProducts(options);
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return products;

  return products.filter((product) => {
    const { name, description, editorialDescription, category, tagline } =
      product.data;

    return (
      name.toLowerCase().includes(lowerQuery) ||
      description?.toLowerCase().includes(lowerQuery) ||
      editorialDescription?.toLowerCase().includes(lowerQuery) ||
      category?.toLowerCase().includes(lowerQuery) ||
      tagline?.toLowerCase().includes(lowerQuery)
    );
  });
}
