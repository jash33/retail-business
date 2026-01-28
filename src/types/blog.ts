/**
 * =================================================================
 * BLOG TYPES
 * =================================================================
 *
 * TypeScript types for the blog content system.
 * Used across blog components and pages.
 *
 * @see src/content/config.ts for Zod schemas
 * =================================================================
 */

import type { CollectionEntry } from 'astro:content';

// =================================================================
// COLLECTION TYPES
// =================================================================

/**
 * Blog post entry from Astro content collection
 */
export type BlogPost = CollectionEntry<'blog'>;

/**
 * Blog post data (frontmatter)
 */
export type BlogPostData = BlogPost['data'];

// =================================================================
// CATEGORY TYPES
// =================================================================

/**
 * Available blog categories
 */
export type BlogCategory =
  | 'Lifestyle'
  | 'Brand Story'
  | 'Behind the Scenes'
  | 'Style Guide'
  | 'Sustainability'
  | 'Tips & Tricks'
  | 'Community'
  | 'Events'
  | 'News'
  | 'Other';

/**
 * Category with post count for filtering UI
 */
export interface CategoryWithCount {
  /** Category name */
  name: BlogCategory;
  /** Number of posts in this category */
  count: number;
  /** URL-friendly slug */
  slug: string;
}

// =================================================================
// COMPONENT PROPS
// =================================================================

/**
 * Props for BlogCard component
 */
export interface BlogCardProps {
  /** Blog post entry */
  post: BlogPost;
  /** Card size variant */
  variant?: 'default' | 'featured' | 'compact';
  /** Whether to show the category badge */
  showCategory?: boolean;
  /** Whether to show the author */
  showAuthor?: boolean;
  /** Whether to show reading time */
  showReadingTime?: boolean;
  /** Whether to show the date */
  showDate?: boolean;
  /** Custom CSS class */
  class?: string;
}

/**
 * Props for BlogGrid component
 */
export interface BlogGridProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Whether to highlight the first post as featured */
  featuredFirst?: boolean;
  /** Custom CSS class */
  class?: string;
}

/**
 * Props for CategoryFilter component
 */
export interface CategoryFilterProps {
  /** Available categories with counts */
  categories: CategoryWithCount[];
  /** Currently selected category */
  activeCategory?: string;
  /** Base URL for category links */
  baseUrl?: string;
  /** Custom CSS class */
  class?: string;
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Blog post with rendered content
 */
export interface RenderedBlogPost {
  /** Original post entry */
  post: BlogPost;
  /** Rendered HTML content */
  Content: Awaited<ReturnType<BlogPost['render']>>['Content'];
  /** Headings extracted from content */
  headings: Awaited<ReturnType<BlogPost['render']>>['headings'];
}

/**
 * Options for fetching blog posts
 */
export interface GetBlogPostsOptions {
  /** Filter by category */
  category?: BlogCategory;
  /** Filter by tag */
  tag?: string;
  /** Only include published posts */
  publishedOnly?: boolean;
  /** Only include featured posts */
  featuredOnly?: boolean;
  /** Maximum number of posts to return */
  limit?: number;
  /** Number of posts to skip */
  offset?: number;
  /** Sort order */
  sortBy?: 'date' | 'priority' | 'title';
  /** Sort direction */
  sortOrder?: 'asc' | 'desc';
}

/**
 * Paginated blog posts result
 */
export interface PaginatedBlogPosts {
  /** Posts for the current page */
  posts: BlogPost[];
  /** Total number of posts */
  total: number;
  /** Current page number */
  page: number;
  /** Total number of pages */
  totalPages: number;
  /** Whether there's a next page */
  hasNextPage: boolean;
  /** Whether there's a previous page */
  hasPrevPage: boolean;
}

// =================================================================
// SEO TYPES
// =================================================================

/**
 * Blog-specific SEO data
 */
export interface BlogSEO {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** Open Graph image */
  ogImage?: string;
  /** Canonical URL */
  canonicalUrl?: string;
  /** Article publication date (ISO string) */
  publishedTime?: string;
  /** Article modification date (ISO string) */
  modifiedTime?: string;
  /** Article author */
  author?: string;
  /** Article section/category */
  section?: string;
  /** Article tags */
  tags?: string[];
}
