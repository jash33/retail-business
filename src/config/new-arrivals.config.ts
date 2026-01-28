/**
 * =================================================================
 * NEW ARRIVALS CAROUSEL CONFIGURATION
 * =================================================================
 *
 * Configuration for the New Arrivals Carousel section on the homepage.
 * This file defines the settings and product data for the carousel display.
 *
 * To update the carousel:
 * 1. Modify NEW_ARRIVALS_CONFIG for section settings
 * 2. Update NEW_ARRIVALS_PRODUCTS to add/remove products
 *
 * Products are automatically sorted by the `isNew` flag and will be
 * displayed in the carousel with newest items first.
 *
 * =================================================================
 */

import type { NewArrivalsCarouselConfig } from '../types/new-arrivals-carousel';
import type { ProductCardProps } from '../types/product';

// =================================================================
// SECTION CONFIGURATION
// =================================================================

/**
 * New Arrivals Carousel section configuration
 * Customize the section heading, behavior, and display options
 */
export const NEW_ARRIVALS_CONFIG: NewArrivalsCarouselConfig = {
  // Section identity
  id: 'new-arrivals',
  heading: 'New Arrivals',
  subheading: 'Discover the latest additions to our collection, handpicked for you.',

  // Product display
  maxProducts: 12,
  columns: {
    mobile: 1,
    small: 2,
    tablet: 3,
    desktop: 4,
  },
  gap: 'medium',
  aspectRatio: '4:5',

  // Navigation
  navigationPosition: 'outside',
  showIndicators: false,

  // Auto-scroll (disabled by default for better UX)
  autoScroll: {
    enabled: false,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  },

  // View All CTA
  viewAllText: 'View All New Arrivals',
  viewAllHref: '/shop?sort=newest',
  showViewAll: true,

  // Carousel behavior
  infinite: false,
  enableSwipe: true,
  enableKeyboard: true,
  scrollAmount: 1,
  animationDuration: 300,
};

// =================================================================
// PRODUCTS DATA
// =================================================================

/**
 * New Arrivals Products
 *
 * Add new products here to display them in the carousel.
 * Products with `isNew: true` will be prioritized in the sort order.
 *
 * Required fields:
 * - id: Unique identifier
 * - name: Product name
 * - image: Primary product image
 * - price: Product pricing
 * - shopUrl: Link to external shop
 *
 * Optional fields:
 * - hoverImage: Secondary image on hover
 * - description: Short product description
 * - category: Product category
 * - isNew: Flag for new products (prioritizes in sort)
 * - onSale: Flag for sale items
 * - soldOut: Flag for sold out items
 */
export const NEW_ARRIVALS_PRODUCTS: ProductCardProps[] = [
  {
    id: 'organic-cotton-tee-natural',
    name: 'Organic Cotton Tee',
    image: {
      src: '/images/products/organic-cotton-tee-natural.jpg',
      alt: 'Organic cotton t-shirt in natural color',
      width: 800,
      height: 1000,
    },
    hoverImage: {
      src: '/images/products/organic-cotton-tee-natural-back.jpg',
      alt: 'Organic cotton t-shirt back view',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 45.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/organic-cotton-tee-natural',
    description: 'Soft, breathable organic cotton tee in a relaxed fit.',
    category: 'Tops',
    isNew: true,
  },
  {
    id: 'handwoven-basket-large',
    name: 'Handwoven Storage Basket',
    image: {
      src: '/images/products/handwoven-basket-large.jpg',
      alt: 'Large handwoven storage basket',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 78.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/handwoven-basket-large',
    description: 'Artisan-crafted basket perfect for home organization.',
    category: 'Home',
    isNew: true,
  },
  {
    id: 'linen-blend-cardigan',
    name: 'Linen Blend Cardigan',
    image: {
      src: '/images/products/linen-blend-cardigan.jpg',
      alt: 'Lightweight linen blend cardigan',
      width: 800,
      height: 1000,
    },
    hoverImage: {
      src: '/images/products/linen-blend-cardigan-detail.jpg',
      alt: 'Linen blend cardigan texture detail',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 125.00,
      originalAmount: 150.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/linen-blend-cardigan',
    description: 'Lightweight layering piece in a breathable linen blend.',
    category: 'Outerwear',
    isNew: true,
    onSale: true,
  },
  {
    id: 'ceramic-vase-set',
    name: 'Ceramic Vase Set',
    image: {
      src: '/images/products/ceramic-vase-set.jpg',
      alt: 'Set of three ceramic vases in earthy tones',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 95.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/ceramic-vase-set',
    description: 'Handmade ceramic vases in complementary earth tones.',
    category: 'Home',
    isNew: true,
  },
  {
    id: 'relaxed-fit-jeans',
    name: 'Relaxed Fit Jeans',
    image: {
      src: '/images/products/relaxed-fit-jeans.jpg',
      alt: 'Relaxed fit jeans in medium wash',
      width: 800,
      height: 1000,
    },
    hoverImage: {
      src: '/images/products/relaxed-fit-jeans-back.jpg',
      alt: 'Relaxed fit jeans back view',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 98.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/relaxed-fit-jeans',
    description: 'Comfortable everyday denim with a relaxed silhouette.',
    category: 'Bottoms',
    isNew: true,
  },
  {
    id: 'scented-candle-lavender',
    name: 'Lavender Fields Candle',
    image: {
      src: '/images/products/scented-candle-lavender.jpg',
      alt: 'Lavender scented soy candle',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 38.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/scented-candle-lavender',
    description: 'Hand-poured soy candle with calming lavender scent.',
    category: 'Home',
    isNew: true,
  },
  {
    id: 'silk-scarf-botanical',
    name: 'Botanical Silk Scarf',
    image: {
      src: '/images/products/silk-scarf-botanical.jpg',
      alt: 'Silk scarf with botanical print',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 85.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/silk-scarf-botanical',
    description: 'Luxurious silk scarf featuring original botanical artwork.',
    category: 'Accessories',
    isNew: true,
  },
  {
    id: 'merino-wool-sweater',
    name: 'Merino Wool Sweater',
    image: {
      src: '/images/products/merino-wool-sweater.jpg',
      alt: 'Merino wool sweater in cream',
      width: 800,
      height: 1000,
    },
    hoverImage: {
      src: '/images/products/merino-wool-sweater-detail.jpg',
      alt: 'Merino wool sweater knit detail',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 165.00,
      currency: 'USD',
    },
    shopUrl: 'https://shop.example.com/products/merino-wool-sweater',
    description: 'Ultra-soft merino wool sweater for year-round comfort.',
    category: 'Tops',
    isNew: true,
  },
];

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get the configuration and products for the New Arrivals section
 * @returns Object containing config and products
 */
export function getNewArrivalsData() {
  return {
    config: NEW_ARRIVALS_CONFIG,
    products: NEW_ARRIVALS_PRODUCTS,
  };
}

/**
 * Get products sorted by newness (isNew flag first)
 * @param products - Array of products to sort
 * @returns Sorted array with new products first
 */
export function sortByNewest(products: ProductCardProps[]): ProductCardProps[] {
  return [...products].sort((a, b) => {
    // Prioritize products marked as "new"
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
}

/**
 * Filter to only show available (not sold out) products
 * @param products - Array of products to filter
 * @returns Array of available products
 */
export function filterAvailable(products: ProductCardProps[]): ProductCardProps[] {
  return products.filter((product) => !product.soldOut);
}
