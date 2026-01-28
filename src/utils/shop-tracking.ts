/**
 * =================================================================
 * SHOP TRACKING UTILITIES
 * =================================================================
 *
 * Utility functions for UTM parameter management and shop link
 * tracking. Integrates with the analytics system for tracking
 * shop-related interactions.
 *
 * =================================================================
 */

import type { UTMParams, TrackedURL, ShopClickEvent } from '../types/shop';
import { DEFAULT_UTM_PARAMS, shopConfig } from '../config/shop.config';

// =================================================================
// UTM PARAMETER UTILITIES
// =================================================================

/**
 * Build UTM query string from parameters
 * @param params - UTM parameter object
 * @returns Encoded query string (without leading ?)
 */
export function buildUTMQueryString(params: UTMParams): string {
  const utmPairs: string[] = [];

  if (params.source) {
    utmPairs.push(`utm_source=${encodeURIComponent(params.source)}`);
  }
  if (params.medium) {
    utmPairs.push(`utm_medium=${encodeURIComponent(params.medium)}`);
  }
  if (params.campaign) {
    utmPairs.push(`utm_campaign=${encodeURIComponent(params.campaign)}`);
  }
  if (params.term) {
    utmPairs.push(`utm_term=${encodeURIComponent(params.term)}`);
  }
  if (params.content) {
    utmPairs.push(`utm_content=${encodeURIComponent(params.content)}`);
  }

  return utmPairs.join('&');
}

/**
 * Append UTM parameters to a URL
 * @param baseUrl - The base URL to append parameters to
 * @param params - UTM parameters to append
 * @returns Full URL with UTM parameters
 */
export function appendUTMParams(baseUrl: string, params?: UTMParams): string {
  if (!params || !shopConfig.trackingEnabled) {
    return baseUrl;
  }

  const queryString = buildUTMQueryString(params);
  if (!queryString) {
    return baseUrl;
  }

  // Check if URL already has query parameters
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${queryString}`;
}

/**
 * Merge UTM parameters with defaults
 * Override params take precedence over defaults
 * @param overrideParams - Parameters to override defaults
 * @returns Merged UTM parameters
 */
export function mergeUTMParams(overrideParams?: UTMParams): UTMParams {
  if (!overrideParams) {
    return { ...DEFAULT_UTM_PARAMS };
  }

  return {
    source: overrideParams.source ?? DEFAULT_UTM_PARAMS.source,
    medium: overrideParams.medium ?? DEFAULT_UTM_PARAMS.medium,
    campaign: overrideParams.campaign ?? DEFAULT_UTM_PARAMS.campaign,
    term: overrideParams.term ?? DEFAULT_UTM_PARAMS.term,
    content: overrideParams.content ?? DEFAULT_UTM_PARAMS.content,
  };
}

/**
 * Create a tracked URL object with UTM parameters
 * @param baseUrl - The base URL
 * @param params - Optional UTM parameters to merge with defaults
 * @returns TrackedURL object with base, params, and full URL
 */
export function createTrackedUrl(baseUrl: string, params?: UTMParams): TrackedURL {
  const mergedParams = mergeUTMParams(params);
  const fullUrl = appendUTMParams(baseUrl, mergedParams);

  return {
    baseUrl,
    utmParams: mergedParams,
    fullUrl,
  };
}

/**
 * Parse UTM parameters from a URL
 * @param url - URL to parse
 * @returns Extracted UTM parameters
 */
export function parseUTMFromUrl(url: string): UTMParams {
  try {
    const urlObj = new URL(url);
    const params: UTMParams = {};

    const source = urlObj.searchParams.get('utm_source');
    const medium = urlObj.searchParams.get('utm_medium');
    const campaign = urlObj.searchParams.get('utm_campaign');
    const term = urlObj.searchParams.get('utm_term');
    const content = urlObj.searchParams.get('utm_content');

    if (source) params.source = source;
    if (medium) params.medium = medium;
    if (campaign) params.campaign = campaign;
    if (term) params.term = term;
    if (content) params.content = content;

    return params;
  } catch {
    return {};
  }
}

// =================================================================
// SHOP URL BUILDERS
// =================================================================

/**
 * Build a shop product URL with UTM tracking
 * @param productPath - Path to the product (e.g., '/products/item-name')
 * @param params - Optional UTM parameters
 * @returns Full tracked product URL
 */
export function buildProductUrl(productPath: string, params?: UTMParams): string {
  if (!shopConfig.enabled || !shopConfig.shopUrl) {
    return '';
  }

  // Ensure path starts with /
  const normalizedPath = productPath.startsWith('/') ? productPath : `/${productPath}`;
  const baseUrl = `${shopConfig.shopUrl}${normalizedPath}`;

  return appendUTMParams(baseUrl, mergeUTMParams({
    ...params,
    content: params?.content || 'product_link',
  }));
}

/**
 * Build a cart URL with UTM tracking
 * @param params - Optional UTM parameters
 * @returns Full tracked cart URL
 */
export function buildCartUrl(params?: UTMParams): string {
  if (!shopConfig.enabled) {
    return '';
  }

  const baseUrl = shopConfig.cartUrl || `${shopConfig.shopUrl}/cart`;
  return appendUTMParams(baseUrl, mergeUTMParams({
    ...params,
    content: params?.content || 'header_cart_icon',
  }));
}

/**
 * Build a shop link URL with UTM tracking
 * @param path - Optional path to append to shop URL
 * @param params - Optional UTM parameters
 * @returns Full tracked shop URL
 */
export function buildShopUrl(path?: string, params?: UTMParams): string {
  if (!shopConfig.enabled || !shopConfig.shopUrl) {
    return '';
  }

  let baseUrl = shopConfig.shopUrl;
  if (path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    baseUrl = `${shopConfig.shopUrl}${normalizedPath}`;
  }

  return appendUTMParams(baseUrl, mergeUTMParams(params));
}

// =================================================================
// ANALYTICS TRACKING
// =================================================================

/**
 * Create a shop click event for analytics
 * @param eventType - Type of shop interaction
 * @param destinationUrl - Where the link goes
 * @param sourceLocation - Where on the page the click occurred
 * @param productName - Optional product name
 * @returns ShopClickEvent object
 */
export function createShopClickEvent(
  eventType: ShopClickEvent['eventType'],
  destinationUrl: string,
  sourceLocation: string,
  productName?: string
): ShopClickEvent {
  const utmParams = parseUTMFromUrl(destinationUrl);

  return {
    eventType,
    destinationUrl,
    sourceLocation,
    productName,
    campaign: utmParams.campaign,
    timestamp: Date.now(),
  };
}

/**
 * Track a shop link click via the analytics system
 * This function integrates with the existing analytics utility
 * @param event - ShopClickEvent to track
 */
export function trackShopClick(event: ShopClickEvent): void {
  if (!shopConfig.trackingEnabled) {
    return;
  }

  // Check if gtag is available (GA4)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.eventType, {
      destination_url: event.destinationUrl,
      source_location: event.sourceLocation,
      product_name: event.productName,
      utm_campaign: event.campaign,
      timestamp: event.timestamp,
    });
  }
}

// =================================================================
// LINK ATTRIBUTE BUILDERS
// =================================================================

/**
 * Build link attributes for shop links
 * Includes proper target, rel, and tracking attributes
 * @param openInNewTab - Whether to open in new tab
 * @returns Object with HTML attributes
 */
export function getShopLinkAttributes(openInNewTab?: boolean): Record<string, string> {
  const shouldOpenNewTab = openInNewTab ?? shopConfig.openInNewTab;

  if (shouldOpenNewTab) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return {};
}

/**
 * Get aria-label for cart icon
 * @param storeName - Optional store name override
 * @returns Accessible label string
 */
export function getCartAriaLabel(storeName?: string): string {
  const name = storeName || shopConfig.storeName;
  return `Visit ${name} cart`;
}

/**
 * Get aria-label for shop link
 * @param productName - Optional product name
 * @param storeName - Optional store name override
 * @returns Accessible label string
 */
export function getShopLinkAriaLabel(productName?: string, storeName?: string): string {
  const name = storeName || shopConfig.storeName;

  if (productName) {
    return `View ${productName} on ${name}`;
  }

  return `Visit ${name}`;
}
