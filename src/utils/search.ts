/**
 * =================================================================
 * PRODUCT SEARCH UTILITIES
 * =================================================================
 *
 * Fuzzy search functionality using Fuse.js for product discovery.
 * Provides autocomplete suggestions, keyboard navigation support,
 * and filtering by name, description, and category.
 *
 * @see https://fusejs.io/ for Fuse.js documentation
 * =================================================================
 */

import Fuse, { type FuseResult, type IFuseOptions } from 'fuse.js';
import type { ProductEntry } from './products';

// =================================================================
// TYPE DEFINITIONS
// =================================================================

/**
 * Searchable product data structure for Fuse.js
 */
export interface SearchableProduct {
  /** Unique identifier (slug) */
  id: string;
  /** Product name - highest search priority */
  name: string;
  /** Short product description */
  description: string;
  /** Longer editorial description */
  editorialDescription?: string;
  /** Product category */
  category: string;
  /** Product tagline */
  tagline?: string;
  /** Original product entry for full data access */
  original: ProductEntry;
}

/**
 * Search result with match information
 */
export interface ProductSearchResult {
  /** The matched product */
  product: SearchableProduct;
  /** Fuse.js score (0 = perfect match, 1 = no match) */
  score: number;
  /** Matched fields and their indices */
  matches?: {
    field: string;
    value: string;
    indices: [number, number][];
  }[];
}

/**
 * Search options for customizing search behavior
 */
export interface SearchOptions {
  /** Maximum number of results to return */
  limit?: number;
  /** Minimum score threshold (0-1, lower is stricter) */
  threshold?: number;
  /** Filter by category */
  category?: string;
  /** Include match information in results */
  includeMatches?: boolean;
}

// =================================================================
// FUSE.JS CONFIGURATION
// =================================================================

/**
 * Default Fuse.js options optimized for product search
 */
const DEFAULT_FUSE_OPTIONS: IFuseOptions<SearchableProduct> = {
  // Search configuration
  isCaseSensitive: false,
  includeScore: true,
  includeMatches: true,

  // Fuzzy matching settings
  threshold: 0.4,           // 0 = exact match, 1 = match anything
  distance: 100,            // How far to search for a match
  minMatchCharLength: 2,    // Minimum characters to start matching

  // Field-specific search with weighted priorities
  keys: [
    { name: 'name', weight: 0.4 },              // Highest priority
    { name: 'category', weight: 0.25 },         // High priority for category filtering
    { name: 'description', weight: 0.2 },       // Medium priority
    { name: 'tagline', weight: 0.1 },           // Lower priority
    { name: 'editorialDescription', weight: 0.05 }, // Lowest priority
  ],

  // Use extended search syntax
  useExtendedSearch: true,

  // Ignore location for better matching
  ignoreLocation: true,
};

// =================================================================
// SEARCH CLASS
// =================================================================

/**
 * ProductSearchEngine - Manages fuzzy search for products
 *
 * @example
 * ```typescript
 * const engine = new ProductSearchEngine(products);
 * const results = engine.search('canvas bag');
 * ```
 */
export class ProductSearchEngine {
  private fuse: Fuse<SearchableProduct>;
  private products: SearchableProduct[];

  /**
   * Initialize the search engine with products
   * @param products - Array of product entries from content collection
   * @param options - Custom Fuse.js options
   */
  constructor(
    products: ProductEntry[],
    options: Partial<IFuseOptions<SearchableProduct>> = {}
  ) {
    this.products = products.map(this.toSearchable);
    this.fuse = new Fuse(this.products, {
      ...DEFAULT_FUSE_OPTIONS,
      ...options,
    });
  }

  /**
   * Transform a ProductEntry to SearchableProduct format
   */
  private toSearchable(product: ProductEntry): SearchableProduct {
    return {
      id: product.slug,
      name: product.data.name,
      description: product.data.description || '',
      editorialDescription: product.data.editorialDescription,
      category: product.data.category || '',
      tagline: product.data.tagline,
      original: product,
    };
  }

  /**
   * Perform a fuzzy search
   * @param query - Search query string
   * @param options - Search options
   * @returns Array of search results sorted by relevance
   */
  search(query: string, options: SearchOptions = {}): ProductSearchResult[] {
    const {
      limit = 10,
      threshold,
      category,
      includeMatches = true,
    } = options;

    // Empty query returns no results (or all products if desired)
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return [];
    }

    // Update threshold if provided
    if (threshold !== undefined) {
      this.fuse.setCollection(this.products);
    }

    // Perform search
    let results: FuseResult<SearchableProduct>[] = this.fuse.search(trimmedQuery, {
      limit: category ? undefined : limit, // Don't limit before category filter
    });

    // Filter by category if specified
    if (category) {
      results = results.filter(
        (result) => result.item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply limit after category filter
    if (limit && results.length > limit) {
      results = results.slice(0, limit);
    }

    // Transform to ProductSearchResult format
    return results.map((result) => ({
      product: result.item,
      score: result.score ?? 0,
      matches: includeMatches && result.matches
        ? result.matches.map((match) => ({
            field: match.key || '',
            value: match.value || '',
            indices: match.indices as [number, number][],
          }))
        : undefined,
    }));
  }

  /**
   * Get autocomplete suggestions as user types
   * @param query - Partial search query
   * @param limit - Maximum number of suggestions
   * @returns Array of product suggestions
   */
  getSuggestions(query: string, limit: number = 6): ProductSearchResult[] {
    return this.search(query, {
      limit,
      threshold: 0.5, // More permissive for autocomplete
      includeMatches: true,
    });
  }

  /**
   * Search within a specific category
   * @param query - Search query
   * @param category - Category to filter by
   * @param limit - Maximum results
   */
  searchInCategory(
    query: string,
    category: string,
    limit: number = 10
  ): ProductSearchResult[] {
    return this.search(query, { limit, category });
  }

  /**
   * Get all products (for fallback or showing all results)
   */
  getAllProducts(): SearchableProduct[] {
    return this.products;
  }

  /**
   * Update the product index (e.g., after filtering)
   * @param products - New array of product entries
   */
  updateIndex(products: ProductEntry[]): void {
    this.products = products.map(this.toSearchable);
    this.fuse.setCollection(this.products);
  }
}

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Highlight matched text in a string
 * @param text - Original text
 * @param indices - Array of [start, end] match indices
 * @returns HTML string with highlighted matches
 */
export function highlightMatches(
  text: string,
  indices: [number, number][]
): string {
  if (!indices || indices.length === 0) {
    return escapeHtml(text);
  }

  // Sort indices by start position
  const sortedIndices = [...indices].sort((a, b) => a[0] - b[0]);

  let result = '';
  let lastIndex = 0;

  for (const [start, end] of sortedIndices) {
    // Add text before match
    result += escapeHtml(text.slice(lastIndex, start));
    // Add highlighted match
    result += `<mark class="search-highlight">${escapeHtml(text.slice(start, end + 1))}</mark>`;
    lastIndex = end + 1;
  }

  // Add remaining text
  result += escapeHtml(text.slice(lastIndex));

  return result;
}

/**
 * Escape HTML special characters
 * @param text - Text to escape
 * @returns Escaped HTML string
 */
export function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
}

/**
 * Create a debounced function for search input
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Get the primary match field from search results
 * @param result - Search result with matches
 * @returns The field name that had the best match
 */
export function getPrimaryMatchField(result: ProductSearchResult): string {
  if (!result.matches || result.matches.length === 0) {
    return 'name';
  }

  // Priority order for display
  const fieldPriority = ['name', 'category', 'description', 'tagline', 'editorialDescription'];

  for (const field of fieldPriority) {
    if (result.matches.some((match) => match.field === field)) {
      return field;
    }
  }

  return result.matches[0].field;
}
