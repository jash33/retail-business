/**
 * =================================================================
 * EXTERNAL SHOP INTEGRATION TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for external e-commerce platform integrations
 * including Shopify, Square, Etsy, and Big Cartel. Supports cart
 * icon in header, product-level shop links, and UTM tracking.
 *
 * =================================================================
 */

// =================================================================
// SHOP PLATFORM TYPES
// =================================================================

/**
 * Supported external e-commerce platforms
 */
export type ShopPlatform = 'shopify' | 'square' | 'etsy' | 'bigcartel' | 'custom';

/**
 * Cart icon display position in the header
 */
export type CartIconPosition = 'header-left' | 'header-right';

/**
 * UTM source identifiers for tracking
 */
export type UTMSource = 'website' | 'landing-page' | 'blog' | 'email' | 'social';

/**
 * UTM medium identifiers for tracking
 */
export type UTMMedium = 'referral' | 'cpc' | 'organic' | 'direct' | 'banner';

// =================================================================
// CONFIGURATION TYPES
// =================================================================

/**
 * UTM parameter configuration for tracking shop link clicks
 */
export interface UTMParams {
  /** Campaign source (e.g., 'website', 'newsletter') */
  source?: UTMSource | string;
  /** Campaign medium (e.g., 'referral', 'banner') */
  medium?: UTMMedium | string;
  /** Campaign name (e.g., 'spring_sale', 'header_cart') */
  campaign?: string;
  /** Campaign term (for paid search) */
  term?: string;
  /** Campaign content (for A/B testing) */
  content?: string;
}

/**
 * Main shop configuration object
 */
export interface ShopConfig {
  /** Whether the external shop integration is enabled */
  enabled: boolean;
  /** The e-commerce platform being used */
  platform: ShopPlatform;
  /** Base URL of the external shop (e.g., 'https://myshop.shopify.com') */
  shopUrl: string;
  /** Direct link to the cart/checkout page */
  cartUrl?: string;
  /** Store display name (shown in tooltips/aria labels) */
  storeName: string;
  /** Whether to show the cart icon in the header */
  showCartIcon: boolean;
  /** Position of the cart icon in the header */
  cartIconPosition: CartIconPosition;
  /** Whether to open shop links in a new tab */
  openInNewTab: boolean;
  /** Default UTM parameters for all shop links */
  defaultUTMParams?: UTMParams;
  /** Whether UTM tracking is enabled */
  trackingEnabled: boolean;
}

/**
 * Product-level shop link configuration
 */
export interface ProductShopLink {
  /** Product identifier in the external shop */
  productId?: string;
  /** Direct URL to the product page */
  productUrl: string;
  /** Product name for accessibility */
  productName: string;
  /** Link text to display */
  linkText?: string;
  /** Override default UTM params for this product */
  utmParams?: UTMParams;
  /** Whether to open in new tab (overrides config default) */
  openInNewTab?: boolean;
}

// =================================================================
// COMPONENT PROP TYPES
// =================================================================

/**
 * Props for the CartIcon component
 */
export interface CartIconProps {
  /** External shop/cart URL */
  href: string;
  /** Accessible label for the cart link */
  ariaLabel?: string;
  /** Whether to open in a new tab */
  openInNewTab?: boolean;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the ShopLink component
 */
export interface ShopLinkProps {
  /** Shop or product URL */
  href: string;
  /** Link text content */
  text: string;
  /** Accessible label (defaults to text) */
  ariaLabel?: string;
  /** Whether to open in new tab */
  openInNewTab?: boolean;
  /** Visual variant */
  variant?: 'button' | 'link' | 'inline';
  /** Button size (when variant is 'button') */
  size?: 'small' | 'medium' | 'large';
  /** UTM parameters to append */
  utmParams?: UTMParams;
  /** Additional CSS class names */
  class?: string;
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * URL with optional UTM parameters
 */
export interface TrackedURL {
  /** Base URL */
  baseUrl: string;
  /** UTM parameters */
  utmParams?: UTMParams;
  /** Full URL with UTM params appended */
  fullUrl: string;
}

/**
 * Analytics event for shop link clicks
 */
export interface ShopClickEvent {
  /** Type of shop interaction */
  eventType: 'cart_click' | 'product_click' | 'shop_link_click';
  /** Destination URL */
  destinationUrl: string;
  /** Source location on the page */
  sourceLocation: string;
  /** Product name if applicable */
  productName?: string;
  /** UTM campaign if set */
  campaign?: string;
  /** Timestamp */
  timestamp: number;
}

// =================================================================
// PLATFORM-SPECIFIC TYPES
// =================================================================

/**
 * Shopify-specific configuration options
 */
export interface ShopifyConfig extends ShopConfig {
  platform: 'shopify';
  /** Shopify store subdomain (e.g., 'mystore' for mystore.myshopify.com) */
  storeSubdomain?: string;
}

/**
 * Square-specific configuration options
 */
export interface SquareConfig extends ShopConfig {
  platform: 'square';
  /** Square site slug */
  siteSlug?: string;
}

/**
 * Etsy-specific configuration options
 */
export interface EtsyConfig extends ShopConfig {
  platform: 'etsy';
  /** Etsy shop name */
  etsyShopName?: string;
}

/**
 * Big Cartel-specific configuration options
 */
export interface BigCartelConfig extends ShopConfig {
  platform: 'bigcartel';
  /** Big Cartel subdomain */
  subdomain?: string;
}

/**
 * Union type for all platform-specific configs
 */
export type PlatformConfig =
  | ShopifyConfig
  | SquareConfig
  | EtsyConfig
  | BigCartelConfig
  | ShopConfig;
