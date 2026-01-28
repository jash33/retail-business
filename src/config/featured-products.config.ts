/**
 * Featured Products Configuration
 *
 * This file contains the configuration for the featured products displayed
 * on the homepage. Update this file to change which products are featured
 * without modifying component code.
 *
 * Instructions for updating:
 * 1. To change featured products, modify the FEATURED_PRODUCTS array below
 * 2. Each product should include all required fields (id, name, image, price, shopUrl)
 * 3. Recommended: Display 2-3 products for optimal visual balance
 * 4. Images should be placed in the /public/products/ directory
 * 5. Use WebP format for better performance when available
 * 6. Set priority to control display order (lower numbers appear first)
 */

import type { FeaturedProduct, FeaturedProductsConfig } from '../types/featured-product';

/**
 * Featured products to display on the homepage
 * These are a curated selection of products to showcase immediately to visitors
 */
export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'premium-canvas-tote',
    name: 'Premium Canvas Tote',
    tagline: 'Editor\'s Pick',
    description: 'Handcrafted canvas tote bag with genuine leather accents.',
    editorialDescription: 'Our signature canvas tote combines timeless design with everyday functionality. Handcrafted from premium waxed canvas with genuine leather handles, this bag is built to last and only gets better with age. Perfect for work, weekend markets, or daily errands.',
    image: {
      src: '/products/featured-tote.svg',
      alt: 'Premium Canvas Tote Bag in natural tan with leather handles',
      width: 600,
      height: 750,
    },
    price: {
      amount: 89.99,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/premium-canvas-tote',
    category: 'Bags',
    isNew: true,
    ctaText: 'Shop Now',
    openInNewTab: true,
    priority: 1,
  },
  {
    id: 'artisan-ceramic-mug',
    name: 'Artisan Ceramic Mug Set',
    tagline: 'Best Seller',
    description: 'Hand-thrown ceramic mugs in our signature glaze.',
    editorialDescription: 'Each mug in this set of four is individually hand-thrown by local artisans, making every piece unique. The rich, reactive glaze develops beautiful variations during firing, ensuring your morning coffee is always served in style.',
    image: {
      src: '/products/featured-mugs.svg',
      alt: 'Set of four artisan ceramic mugs in earth-tone glazes',
      width: 600,
      height: 750,
    },
    price: {
      amount: 64.00,
      originalAmount: 80.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/artisan-ceramic-mug-set',
    category: 'Kitchen',
    onSale: true,
    ctaText: 'Shop Now',
    openInNewTab: true,
    priority: 2,
  },
  {
    id: 'merino-wool-throw',
    name: 'Merino Wool Throw Blanket',
    tagline: 'Sustainably Made',
    description: 'Luxuriously soft merino wool throw in natural colors.',
    editorialDescription: 'Woven from 100% ethically-sourced merino wool, this generous throw blanket brings warmth and texture to any space. The natural fibers are temperature-regulating and incredibly soft against the skin. Available in a palette of undyed natural hues.',
    image: {
      src: '/products/featured-throw.svg',
      alt: 'Merino wool throw blanket draped over chair in cream color',
      width: 600,
      height: 750,
    },
    price: {
      amount: 145.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/merino-wool-throw',
    category: 'Home',
    ctaText: 'Shop Now',
    openInNewTab: true,
    priority: 3,
  },
];

/**
 * Section configuration for the featured products section
 * Customize the heading, subheading, and CTA text/link
 */
export const FEATURED_PRODUCTS_SECTION_CONFIG: FeaturedProductsConfig = {
  /** Section ID for anchor linking */
  id: 'featured-products',

  /** Main heading for the section */
  heading: 'Featured Products',

  /** Subheading/description text */
  subheading: 'Handpicked favorites from our collection. Each piece is thoughtfully designed and crafted to bring quality and style to your everyday life.',

  /** Text for the "View All" CTA button */
  viewAllText: 'View All Products',

  /** URL for the "View All" CTA button */
  viewAllHref: '/shop',

  /** Whether to show the "View All" button */
  showViewAll: true,

  /** Maximum number of products to display */
  maxProducts: 3,

  /** Number of columns in the grid */
  columns: 3,

  /** Layout variant: 'grid' for equal sizing, 'featured-first' for larger first item */
  layout: 'grid',
};
