/**
 * Featured Products Configuration - HTX Flowers
 *
 * This file contains the configuration for the featured flower arrangements
 * displayed on the homepage.
 */

import type { FeaturedProduct, FeaturedProductsConfig } from '../types/featured-product';

/**
 * Featured flower arrangements to display on the homepage
 */
export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'signature-rose-bouquet',
    name: 'Signature Rose Bouquet',
    tagline: 'Best Seller',
    description: 'Two dozen premium long-stem roses in a stunning arrangement.',
    editorialDescription: 'Our signature arrangement features two dozen hand-selected, long-stem roses in a classic vase presentation. Each rose is carefully chosen at peak bloom for maximum freshness and beauty. Perfect for anniversaries, Valentine\'s Day, or whenever you want to make a lasting impression.',
    image: {
      src: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&h=750&fit=crop',
      alt: 'Elegant bouquet of red roses in a glass vase',
      width: 600,
      height: 750,
    },
    price: {
      amount: 89.99,
      currency: 'USD',
    },
    shopUrl: '#order',
    category: 'Roses',
    isNew: false,
    ctaText: 'Order Now',
    openInNewTab: false,
    priority: 1,
  },
  {
    id: 'seasonal-wildflower-mix',
    name: 'Seasonal Wildflower Mix',
    tagline: 'Staff Favorite',
    description: 'A vibrant medley of seasonal blooms and greenery.',
    editorialDescription: 'This cheerful arrangement celebrates the season\'s best flowers, artfully combined with lush greenery and natural textures. Every bouquet is unique, featuring whatever is freshest and most beautiful from our local growers. A wonderful gift that brings the garden indoors.',
    image: {
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=750&fit=crop',
      alt: 'Colorful wildflower bouquet with mixed seasonal blooms',
      width: 600,
      height: 750,
    },
    price: {
      amount: 64.00,
      originalAmount: 75.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    category: 'Mixed Bouquets',
    onSale: true,
    ctaText: 'Order Now',
    openInNewTab: false,
    priority: 2,
  },
  {
    id: 'elegant-white-collection',
    name: 'Elegant White Collection',
    tagline: 'Luxury',
    description: 'Pristine white blooms for sophisticated occasions.',
    editorialDescription: 'Pure elegance in floral form. This stunning all-white arrangement features premium lilies, roses, and hydrangeas, accented with delicate greenery. Perfect for weddings, sympathy, or creating a serene atmosphere in any space. Each stem is chosen for its pristine beauty.',
    image: {
      src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=750&fit=crop',
      alt: 'Elegant white flower arrangement with lilies and roses',
      width: 600,
      height: 750,
    },
    price: {
      amount: 125.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    category: 'Luxury',
    ctaText: 'Order Now',
    openInNewTab: false,
    priority: 3,
  },
];

/**
 * Section configuration for the featured products section
 */
export const FEATURED_PRODUCTS_SECTION_CONFIG: FeaturedProductsConfig = {
  /** Section ID for anchor linking */
  id: 'featured-arrangements',

  /** Main heading for the section */
  heading: 'Featured Arrangements',

  /** Subheading/description text */
  subheading: 'Our most-loved bouquets, hand-crafted with the freshest seasonal blooms. Each arrangement is designed by our expert florists to create a memorable moment.',

  /** Text for the "View All" CTA button */
  viewAllText: 'View All Arrangements',

  /** URL for the "View All" CTA button */
  viewAllHref: `${import.meta.env.BASE_URL}products`,

  /** Whether to show the "View All" button */
  showViewAll: true,

  /** Maximum number of products to display */
  maxProducts: 3,

  /** Number of columns in the grid */
  columns: 3,

  /** Layout variant: 'grid' for equal sizing, 'featured-first' for larger first item */
  layout: 'grid',
};
