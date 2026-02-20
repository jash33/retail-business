/**
 * =================================================================
 * NEW ARRIVALS CAROUSEL CONFIGURATION - HTX Flowers
 * =================================================================
 *
 * Configuration for the New Arrivals Carousel section featuring
 * our latest floral arrangements and seasonal offerings.
 * =================================================================
 */

import type { NewArrivalsCarouselConfig } from '../types/new-arrivals-carousel';
import type { ProductCardProps } from '../types/product';

// =================================================================
// SECTION CONFIGURATION
// =================================================================

/**
 * New Arrivals Carousel section configuration
 */
export const NEW_ARRIVALS_CONFIG: NewArrivalsCarouselConfig = {
  // Section identity
  id: 'new-arrivals',
  heading: 'Fresh This Week',
  subheading: 'Just in from our local growers — discover the newest additions to our floral collection.',

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

  // Auto-scroll
  autoScroll: {
    enabled: false,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  },

  // View All CTA
  viewAllText: 'View All Flowers',
  viewAllHref: `${import.meta.env.BASE_URL}products`,
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
 * New Arrivals Products - Fresh floral arrangements
 */
export const NEW_ARRIVALS_PRODUCTS: ProductCardProps[] = [
  {
    id: 'spring-tulip-bundle',
    name: 'Spring Tulip Bundle',
    image: {
      src: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&h=1000&fit=crop',
      alt: 'Fresh spring tulips in soft pink and white',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 45.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'A cheerful bundle of fresh tulips in spring colors.',
    category: 'Seasonal',
    isNew: true,
  },
  {
    id: 'romantic-peony-arrangement',
    name: 'Romantic Peony Arrangement',
    image: {
      src: 'https://images.unsplash.com/photo-1560717799-0d6e8346c6c1?w=800&h=1000&fit=crop',
      alt: 'Lush pink peonies in elegant arrangement',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 95.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Luxurious peonies with delicate fragrance.',
    category: 'Luxury',
    isNew: true,
  },
  {
    id: 'sunshine-sunflower-bouquet',
    name: 'Sunshine Sunflower Bouquet',
    image: {
      src: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=800&h=1000&fit=crop',
      alt: 'Bright sunflower bouquet',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 55.00,
      originalAmount: 65.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Bright sunflowers that bring instant cheer.',
    category: 'Everyday',
    isNew: true,
    onSale: true,
  },
  {
    id: 'garden-rose-medley',
    name: 'Garden Rose Medley',
    image: {
      src: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?w=800&h=1000&fit=crop',
      alt: 'Garden roses in soft pastel colors',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 78.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Fragrant garden roses in romantic hues.',
    category: 'Roses',
    isNew: true,
  },
  {
    id: 'lavender-fields-bundle',
    name: 'Lavender Fields Bundle',
    image: {
      src: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&h=1000&fit=crop',
      alt: 'Fresh lavender bundle with purple blooms',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 35.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Dried lavender with calming fragrance.',
    category: 'Dried Flowers',
    isNew: true,
  },
  {
    id: 'tropical-paradise-bouquet',
    name: 'Tropical Paradise Bouquet',
    image: {
      src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=1000&fit=crop',
      alt: 'Exotic tropical flower arrangement',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 89.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Bold tropical blooms with exotic appeal.',
    category: 'Tropical',
    isNew: true,
  },
  {
    id: 'classic-dozen-roses',
    name: 'Classic Dozen Roses',
    image: {
      src: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&h=1000&fit=crop',
      alt: 'One dozen red roses',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 65.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Timeless elegance — twelve perfect roses.',
    category: 'Roses',
    isNew: true,
  },
  {
    id: 'eucalyptus-greenery-bundle',
    name: 'Eucalyptus Greenery Bundle',
    image: {
      src: 'https://images.unsplash.com/photo-1508006253188-2c7f5a55b57c?w=800&h=1000&fit=crop',
      alt: 'Fresh eucalyptus greenery',
      width: 800,
      height: 1000,
    },
    price: {
      amount: 28.00,
      currency: 'USD',
    },
    shopUrl: '#order',
    description: 'Aromatic eucalyptus for home decor.',
    category: 'Greenery',
    isNew: true,
  },
];

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get the configuration and products for the New Arrivals section
 */
export function getNewArrivalsData() {
  return {
    config: NEW_ARRIVALS_CONFIG,
    products: NEW_ARRIVALS_PRODUCTS,
  };
}

/**
 * Get products sorted by newness
 */
export function sortByNewest(products: ProductCardProps[]): ProductCardProps[] {
  return [...products].sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  });
}

/**
 * Filter to only show available products
 */
export function filterAvailable(products: ProductCardProps[]): ProductCardProps[] {
  return products.filter((product) => !product.soldOut);
}
