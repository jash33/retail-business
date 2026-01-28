/**
 * =================================================================
 * EXTERNAL SHOP CONFIGURATION
 * =================================================================
 *
 * Configuration for external e-commerce platform integration.
 * Supports Shopify, Square, Etsy, Big Cartel, and custom platforms.
 * Includes cart icon display, product links, and UTM tracking.
 *
 * =================================================================
 */

import type {
  ShopConfig,
  ShopPlatform,
  UTMParams,
  CartIconPosition,
} from '../types/shop';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Read shop configuration from environment variables
 * All PUBLIC_ prefixed variables are available in the browser
 */
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  const envValue = import.meta.env[key];
  return typeof envValue === 'string' ? envValue : defaultValue;
};

const getBoolEnvVar = (key: string, defaultValue: boolean = false): boolean => {
  const value = getEnvVar(key, '');
  if (value === '') return defaultValue;
  return value === 'true' || value === '1';
};

// =================================================================
// SHOP CONFIGURATION
// =================================================================

/**
 * External shop URL (required when shop is enabled)
 * Examples:
 * - Shopify: https://mystore.myshopify.com
 * - Square: https://mystore.square.site
 * - Etsy: https://www.etsy.com/shop/mystore
 * - Big Cartel: https://mystore.bigcartel.com
 */
export const SHOP_URL = getEnvVar('PUBLIC_SHOP_URL', '');

/**
 * Direct cart/checkout URL (optional, defaults to {SHOP_URL}/cart)
 */
export const CART_URL = getEnvVar('PUBLIC_SHOP_CART_URL', '');

/**
 * Store display name
 */
export const STORE_NAME = getEnvVar('PUBLIC_SHOP_STORE_NAME', 'Our Shop');

/**
 * Shop platform type
 */
export const SHOP_PLATFORM = getEnvVar('PUBLIC_SHOP_PLATFORM', 'custom') as ShopPlatform;

/**
 * Whether shop integration is enabled
 */
export const SHOP_ENABLED = getBoolEnvVar('PUBLIC_SHOP_ENABLED', false);

/**
 * Whether to show cart icon in header
 */
export const SHOW_CART_ICON = getBoolEnvVar('PUBLIC_SHOP_SHOW_CART_ICON', true);

/**
 * Cart icon position in header
 */
export const CART_ICON_POSITION = getEnvVar('PUBLIC_SHOP_CART_POSITION', 'header-right') as CartIconPosition;

/**
 * Whether to open shop links in new tab
 */
export const OPEN_IN_NEW_TAB = getBoolEnvVar('PUBLIC_SHOP_OPEN_NEW_TAB', true);

/**
 * Whether UTM tracking is enabled
 */
export const TRACKING_ENABLED = getBoolEnvVar('PUBLIC_SHOP_TRACKING_ENABLED', true);

// =================================================================
// DEFAULT UTM PARAMETERS
// =================================================================

/**
 * Default UTM parameters for all shop links
 * These can be overridden per-link
 */
export const DEFAULT_UTM_PARAMS: UTMParams = {
  source: 'website',
  medium: 'referral',
  campaign: getEnvVar('PUBLIC_SHOP_UTM_CAMPAIGN', 'website'),
};

/**
 * UTM parameters specifically for the header cart icon
 */
export const CART_ICON_UTM_PARAMS: UTMParams = {
  ...DEFAULT_UTM_PARAMS,
  content: 'header_cart_icon',
};

/**
 * UTM parameters for product-level links
 */
export const PRODUCT_LINK_UTM_PARAMS: UTMParams = {
  ...DEFAULT_UTM_PARAMS,
  content: 'product_link',
};

// =================================================================
// MAIN SHOP CONFIG OBJECT
// =================================================================

/**
 * Complete shop configuration object
 * Used by components and utilities
 */
export const shopConfig: ShopConfig = {
  enabled: SHOP_ENABLED && SHOP_URL !== '',
  platform: SHOP_PLATFORM,
  shopUrl: SHOP_URL,
  cartUrl: CART_URL || (SHOP_URL ? `${SHOP_URL}/cart` : ''),
  storeName: STORE_NAME,
  showCartIcon: SHOW_CART_ICON,
  cartIconPosition: CART_ICON_POSITION,
  openInNewTab: OPEN_IN_NEW_TAB,
  defaultUTMParams: DEFAULT_UTM_PARAMS,
  trackingEnabled: TRACKING_ENABLED,
};

// =================================================================
// PLATFORM-SPECIFIC URL BUILDERS
// =================================================================

/**
 * Platform-specific cart URL patterns
 */
export const PLATFORM_CART_PATHS: Record<ShopPlatform, string> = {
  shopify: '/cart',
  square: '/cart',
  etsy: '/cart',
  bigcartel: '/cart',
  custom: '/cart',
};

/**
 * Platform-specific checkout URL patterns
 */
export const PLATFORM_CHECKOUT_PATHS: Record<ShopPlatform, string> = {
  shopify: '/checkout',
  square: '/checkout',
  etsy: '/cart', // Etsy handles checkout from cart
  bigcartel: '/checkout',
  custom: '/checkout',
};

/**
 * Get the cart URL for the configured platform
 */
export function getCartUrl(): string {
  if (!shopConfig.enabled) return '';
  if (shopConfig.cartUrl) return shopConfig.cartUrl;

  const cartPath = PLATFORM_CART_PATHS[shopConfig.platform] || '/cart';
  return `${shopConfig.shopUrl}${cartPath}`;
}

/**
 * Get the checkout URL for the configured platform
 */
export function getCheckoutUrl(): string {
  if (!shopConfig.enabled) return '';

  const checkoutPath = PLATFORM_CHECKOUT_PATHS[shopConfig.platform] || '/checkout';
  return `${shopConfig.shopUrl}${checkoutPath}`;
}

// =================================================================
// VALIDATION
// =================================================================

/**
 * Validate shop configuration
 * Returns an array of validation errors (empty if valid)
 */
export function validateShopConfig(): string[] {
  const errors: string[] = [];

  if (shopConfig.enabled) {
    if (!shopConfig.shopUrl) {
      errors.push('Shop is enabled but PUBLIC_SHOP_URL is not set');
    }

    if (shopConfig.shopUrl && !isValidUrl(shopConfig.shopUrl)) {
      errors.push('PUBLIC_SHOP_URL is not a valid URL');
    }

    if (shopConfig.cartUrl && !isValidUrl(shopConfig.cartUrl)) {
      errors.push('PUBLIC_SHOP_CART_URL is not a valid URL');
    }
  }

  return errors;
}

/**
 * Check if a string is a valid URL
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Check if shop integration is properly configured and enabled
 */
export function isShopEnabled(): boolean {
  return shopConfig.enabled && validateShopConfig().length === 0;
}

/**
 * Get shop configuration for use in components
 */
export function getShopConfig(): ShopConfig {
  return { ...shopConfig };
}
