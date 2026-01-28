/**
 * =================================================================
 * INSTAGRAM FEED CONFIGURATION
 * =================================================================
 *
 * Configuration for Instagram feed integration using Behold or
 * native embed. Supports grid layout, lightbox display, and
 * configurable post count with error handling and loading states.
 *
 * =================================================================
 */

import type { InstagramConfig, InstagramProvider } from '../types/instagram';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Read Instagram configuration from environment variables
 * PUBLIC_ prefixed variables are available in the browser
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

const getNumEnvVar = (key: string, defaultValue: number): number => {
  const value = getEnvVar(key, '');
  if (value === '') return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

// =================================================================
// INSTAGRAM CONFIGURATION
// =================================================================

/**
 * Whether Instagram integration is enabled
 */
export const INSTAGRAM_ENABLED = getBoolEnvVar('PUBLIC_INSTAGRAM_ENABLED', false);

/**
 * Instagram integration provider
 * - 'behold': Use Behold.so service (recommended)
 * - 'native': Use native Instagram embed
 * - 'mock': Use mock data for development/testing
 */
export const INSTAGRAM_PROVIDER = getEnvVar('PUBLIC_INSTAGRAM_PROVIDER', 'behold') as InstagramProvider;

/**
 * Behold feed ID (required when using Behold provider)
 * Get this from your Behold dashboard
 */
export const BEHOLD_FEED_ID = getEnvVar('PUBLIC_BEHOLD_FEED_ID', '');

/**
 * Instagram username for display and native embeds
 */
export const INSTAGRAM_USERNAME = getEnvVar('PUBLIC_INSTAGRAM_USERNAME', '');

/**
 * Maximum number of posts to display (1-20)
 */
export const MAX_POSTS = Math.min(20, Math.max(1, getNumEnvVar('PUBLIC_INSTAGRAM_MAX_POSTS', 9)));

/**
 * Cache duration in seconds (default: 1 hour)
 */
export const CACHE_DURATION = getNumEnvVar('PUBLIC_INSTAGRAM_CACHE_DURATION', 3600);

/**
 * Whether to enable auto-refresh of the feed
 */
export const AUTO_REFRESH = getBoolEnvVar('PUBLIC_INSTAGRAM_AUTO_REFRESH', false);

/**
 * Auto-refresh interval in seconds (default: 5 minutes, min: 60 seconds)
 */
export const REFRESH_INTERVAL = Math.max(60, getNumEnvVar('PUBLIC_INSTAGRAM_REFRESH_INTERVAL', 300));

// =================================================================
// MAIN INSTAGRAM CONFIG OBJECT
// =================================================================

/**
 * Complete Instagram configuration object
 * Used by components and utilities
 */
export const instagramConfig: InstagramConfig = {
  enabled: INSTAGRAM_ENABLED,
  provider: INSTAGRAM_PROVIDER,
  beholdFeedId: BEHOLD_FEED_ID,
  username: INSTAGRAM_USERNAME,
  maxPosts: MAX_POSTS,
  cacheDuration: CACHE_DURATION,
  autoRefresh: AUTO_REFRESH,
  refreshInterval: REFRESH_INTERVAL,
};

// =================================================================
// BEHOLD API CONFIGURATION
// =================================================================

/**
 * Behold API base URL
 */
export const BEHOLD_API_URL = 'https://feeds.behold.so';

/**
 * Build Behold feed URL
 */
export function getBeholdFeedUrl(feedId?: string): string {
  const id = feedId || BEHOLD_FEED_ID;
  if (!id) return '';
  return `${BEHOLD_API_URL}/${id}`;
}

// =================================================================
// INSTAGRAM PROFILE URLS
// =================================================================

/**
 * Get Instagram profile URL
 */
export function getInstagramProfileUrl(username?: string): string {
  const user = username || INSTAGRAM_USERNAME;
  if (!user) return 'https://instagram.com';
  return `https://instagram.com/${user.replace('@', '')}`;
}

/**
 * Get Instagram post URL from permalink or ID
 */
export function getInstagramPostUrl(permalinkOrId: string): string {
  // If it's already a full URL, return it
  if (permalinkOrId.startsWith('http')) {
    return permalinkOrId;
  }
  // Otherwise, construct from post ID
  return `https://instagram.com/p/${permalinkOrId}`;
}

// =================================================================
// VALIDATION
// =================================================================

/**
 * Validate Instagram configuration
 * Returns an array of validation errors (empty if valid)
 */
export function validateInstagramConfig(): string[] {
  const errors: string[] = [];

  if (instagramConfig.enabled) {
    // Validate provider-specific requirements
    if (instagramConfig.provider === 'behold' && !instagramConfig.beholdFeedId) {
      errors.push('Instagram is enabled with Behold provider but PUBLIC_BEHOLD_FEED_ID is not set');
    }

    if (instagramConfig.provider === 'native' && !instagramConfig.username) {
      errors.push('Instagram is enabled with native provider but PUBLIC_INSTAGRAM_USERNAME is not set');
    }

    // Validate max posts range
    if (instagramConfig.maxPosts < 1 || instagramConfig.maxPosts > 20) {
      errors.push('PUBLIC_INSTAGRAM_MAX_POSTS must be between 1 and 20');
    }

    // Validate refresh interval
    if (instagramConfig.autoRefresh && instagramConfig.refreshInterval < 60) {
      errors.push('PUBLIC_INSTAGRAM_REFRESH_INTERVAL must be at least 60 seconds');
    }
  }

  return errors;
}

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Check if Instagram integration is properly configured and enabled
 */
export function isInstagramEnabled(): boolean {
  return instagramConfig.enabled && validateInstagramConfig().length === 0;
}

/**
 * Get Instagram configuration for use in components
 */
export function getInstagramConfig(): InstagramConfig {
  return { ...instagramConfig };
}

/**
 * Check if using Behold provider
 */
export function isUsingBehold(): boolean {
  return instagramConfig.provider === 'behold';
}

/**
 * Check if using mock data (for development/testing)
 */
export function isUsingMockData(): boolean {
  return instagramConfig.provider === 'mock';
}

// =================================================================
// DEFAULT DISPLAY OPTIONS
// =================================================================

/**
 * Default grid display options
 */
export const DEFAULT_GRID_OPTIONS = {
  columns: 3 as const,
  gap: 'medium' as const,
  enableLightbox: true,
  enableAnimation: true,
};

/**
 * Default section display options
 */
export const DEFAULT_SECTION_OPTIONS = {
  heading: 'Follow Us on Instagram',
  subheading: 'See our latest posts and behind-the-scenes content',
  showFollowButton: true,
};
