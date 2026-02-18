/**
 * Trust Badges Configuration
 *
 * This file contains the configuration for minimal inline trust badges.
 * These are used to display trust indicators like free shipping, gift wrapping,
 * and local artisan messaging in a clean, text-based format.
 *
 * Instructions for updating:
 * 1. To change badges, modify the arrays below
 * 2. Each badge should include id, type, and text
 * 3. Badge types determine the icon: shipping, gift-wrap, artisan, returns, secure, support, quality
 * 4. Optional subtext can provide additional context
 * 5. Optional links can make badges clickable
 */

import type { TrustBadge, TrustBadgesConfig } from '../types/trust-badges';

/**
 * Primary trust badges for product pages
 * These are the main trust indicators displayed near the product details
 */
export const PRODUCT_TRUST_BADGES: TrustBadge[] = [
  {
    id: 'free-shipping',
    type: 'shipping',
    text: 'Free Shipping',
    subtext: 'on orders over $50',
    link: {
      href: '/shipping-returns',
      ariaLabel: 'Learn more about our shipping policy',
    },
  },
  {
    id: 'gift-wrap',
    type: 'gift-wrap',
    text: 'Gift Wrapping Available',
    link: {
      href: '/shipping-returns#gift-wrap',
      ariaLabel: 'Learn more about gift wrapping options',
    },
  },
  {
    id: 'local-artisans',
    type: 'artisan',
    text: 'Handcrafted by Local Artisans',
    link: {
      href: '/about#artisans',
      ariaLabel: 'Meet our local artisans',
    },
  },
];

/**
 * Compact trust badges for cart/checkout
 * Shorter versions for space-constrained areas
 */
export const CART_TRUST_BADGES: TrustBadge[] = [
  {
    id: 'free-shipping-compact',
    type: 'shipping',
    text: 'Free Shipping over $50',
  },
  {
    id: 'easy-returns',
    type: 'returns',
    text: '30-Day Returns',
  },
  {
    id: 'secure-checkout',
    type: 'secure',
    text: 'Secure Checkout',
  },
];

/**
 * Footer trust badges
 * Simple, icon-only or very short trust indicators
 */
export const FOOTER_TRUST_BADGES: TrustBadge[] = [
  {
    id: 'local-artisans-footer',
    type: 'artisan',
    text: 'Supporting Local Artisans',
  },
  {
    id: 'secure-payments-footer',
    type: 'secure',
    text: 'Secure Payments',
  },
  {
    id: 'quality-guaranteed',
    type: 'quality',
    text: 'Quality Guaranteed',
  },
];

/**
 * Extended trust badges with more detail
 * For dedicated trust/about sections
 */
export const DETAILED_TRUST_BADGES: TrustBadge[] = [
  {
    id: 'free-shipping-detailed',
    type: 'shipping',
    text: 'Free Standard Shipping',
    subtext: 'on all orders over $50 within the US',
    link: {
      href: '/shipping-returns',
      ariaLabel: 'View full shipping policy',
    },
  },
  {
    id: 'gift-wrap-detailed',
    type: 'gift-wrap',
    text: 'Complimentary Gift Wrapping',
    subtext: 'elegant packaging for every order',
    link: {
      href: '/shipping-returns#gift-wrap',
      ariaLabel: 'Learn about gift wrapping',
    },
  },
  {
    id: 'local-artisans-detailed',
    type: 'artisan',
    text: 'Handcrafted by Local Artisans',
    subtext: 'supporting Houston-area makers',
    link: {
      href: '/about#artisans',
      ariaLabel: 'Meet our artisan partners',
    },
  },
  {
    id: 'easy-returns-detailed',
    type: 'returns',
    text: 'Easy 30-Day Returns',
    subtext: 'hassle-free return policy',
    link: {
      href: '/shipping-returns#returns',
      ariaLabel: 'View return policy',
    },
  },
  {
    id: 'support-detailed',
    type: 'support',
    text: 'Friendly Customer Support',
    subtext: 'here to help via chat or email',
    link: {
      href: '/contact',
      ariaLabel: 'Contact customer support',
    },
  },
];

/**
 * Default configuration for product page trust badges
 */
export const PRODUCT_TRUST_BADGES_CONFIG: TrustBadgesConfig = {
  badges: PRODUCT_TRUST_BADGES,
  layout: 'horizontal',
  size: 'small',
  showIcons: true,
  separator: '·',
  align: 'left',
};

/**
 * Configuration for cart/checkout trust badges
 */
export const CART_TRUST_BADGES_CONFIG: TrustBadgesConfig = {
  badges: CART_TRUST_BADGES,
  layout: 'horizontal',
  size: 'small',
  showIcons: true,
  separator: '|',
  align: 'center',
};

/**
 * Configuration for footer trust badges
 */
export const FOOTER_TRUST_BADGES_CONFIG: TrustBadgesConfig = {
  badges: FOOTER_TRUST_BADGES,
  layout: 'horizontal',
  size: 'small',
  showIcons: true,
  separator: '·',
  align: 'center',
};

/**
 * Configuration for vertical layout (sidebar, etc.)
 */
export const VERTICAL_TRUST_BADGES_CONFIG: TrustBadgesConfig = {
  badges: PRODUCT_TRUST_BADGES,
  layout: 'vertical',
  size: 'medium',
  showIcons: true,
  align: 'left',
};
