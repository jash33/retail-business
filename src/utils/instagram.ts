/**
 * =================================================================
 * INSTAGRAM FEED UTILITY FUNCTIONS
 * =================================================================
 *
 * Utility functions for fetching and transforming Instagram feed data
 * from Behold or other providers. Includes caching, error handling,
 * and mock data generation for testing.
 *
 * =================================================================
 */

import type {
  InstagramPost,
  InstagramFeedData,
  BeholdFeedResponse,
  BeholdMediaItem,
  FetchInstagramFeedOptions,
  TransformOptions,
  InstagramFeedError,
} from '../types/instagram';

import {
  instagramConfig,
  getBeholdFeedUrl,
  isInstagramEnabled,
  isUsingBehold,
  isUsingMockData,
} from '../config/instagram.config';

// =================================================================
// FETCH INSTAGRAM FEED
// =================================================================

/**
 * Fetch Instagram feed data based on configured provider
 * @param options - Fetch options
 * @returns Feed data with posts and state
 */
export async function fetchInstagramFeed(
  options: FetchInstagramFeedOptions = {}
): Promise<InstagramFeedData> {
  const { maxPosts = instagramConfig.maxPosts, forceRefresh = false } = options;

  // Check if Instagram is enabled
  if (!isInstagramEnabled()) {
    return {
      state: 'error',
      posts: [],
      error: 'Instagram integration is not enabled or properly configured',
    };
  }

  try {
    let posts: InstagramPost[] = [];

    if (isUsingMockData()) {
      // Use mock data for development/testing
      posts = generateMockPosts(maxPosts);
    } else if (isUsingBehold()) {
      // Fetch from Behold API
      posts = await fetchFromBehold(maxPosts);
    } else {
      // Native provider - return empty for now (requires client-side embed)
      return {
        state: 'success',
        posts: [],
        lastFetched: new Date().toISOString(),
      };
    }

    return {
      state: 'success',
      posts: posts.slice(0, maxPosts),
      lastFetched: new Date().toISOString(),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch Instagram feed';
    console.error('[Instagram] Fetch error:', errorMessage);

    return {
      state: 'error',
      posts: [],
      error: errorMessage,
    };
  }
}

// =================================================================
// BEHOLD API INTEGRATION
// =================================================================

/**
 * Fetch posts from Behold API
 * @param maxPosts - Maximum number of posts to fetch
 * @returns Array of Instagram posts
 */
async function fetchFromBehold(maxPosts: number): Promise<InstagramPost[]> {
  const feedUrl = getBeholdFeedUrl();

  if (!feedUrl) {
    throw new Error('Behold feed ID is not configured');
  }

  const response = await fetch(feedUrl, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Behold API error: ${response.status} ${response.statusText}`);
  }

  const data: BeholdFeedResponse = await response.json();

  if (!data.media || !Array.isArray(data.media)) {
    throw new Error('Invalid response from Behold API');
  }

  return data.media.slice(0, maxPosts).map(transformBeholdItem);
}

/**
 * Transform Behold media item to InstagramPost
 * @param item - Behold media item
 * @returns Normalized Instagram post
 */
function transformBeholdItem(item: BeholdMediaItem): InstagramPost {
  return {
    id: item.id,
    caption: item.caption || '',
    mediaType: item.mediaType,
    mediaUrl: item.mediaUrl,
    permalink: item.permalink,
    timestamp: item.timestamp,
    thumbnailUrl: item.thumbnailUrl,
    altText: generateAltText(item.caption),
  };
}

// =================================================================
// MOCK DATA GENERATION
// =================================================================

/**
 * Generate mock Instagram posts for development/testing
 * @param count - Number of posts to generate
 * @returns Array of mock Instagram posts
 */
export function generateMockPosts(count: number = 9): InstagramPost[] {
  const mockCaptions = [
    'Beautiful day for creativity! #design #inspiration',
    'Behind the scenes of our latest project',
    'New collection dropping soon! Stay tuned',
    'Thank you for all your support! We appreciate each and every one of you',
    'Work in progress... exciting things coming!',
    'Coffee and creativity - the perfect combination',
    'Another happy customer! Thank you for choosing us',
    'Sneak peek at what we have been working on',
    'Weekend vibes and good vibes only',
    'Details matter. Quality is our priority.',
    'Fresh ideas, fresh start!',
    'Making magic happen one step at a time',
  ];

  const posts: InstagramPost[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);

    posts.push({
      id: `mock-post-${i + 1}`,
      caption: mockCaptions[i % mockCaptions.length],
      mediaType: i % 5 === 0 ? 'VIDEO' : 'IMAGE',
      mediaUrl: `https://picsum.photos/seed/${i + 1}/800/800`,
      permalink: `https://instagram.com/p/mock${i + 1}`,
      timestamp: timestamp.toISOString(),
      thumbnailUrl: i % 5 === 0 ? `https://picsum.photos/seed/${i + 1}/400/400` : undefined,
      altText: `Instagram post ${i + 1}: ${mockCaptions[i % mockCaptions.length].slice(0, 50)}`,
      likeCount: Math.floor(Math.random() * 500) + 50,
      commentsCount: Math.floor(Math.random() * 50) + 5,
    });
  }

  return posts;
}

// =================================================================
// TRANSFORMATION UTILITIES
// =================================================================

/**
 * Generate alt text from caption
 * @param caption - Post caption
 * @returns Generated alt text
 */
export function generateAltText(caption?: string): string {
  if (!caption) {
    return 'Instagram post';
  }

  // Remove hashtags and clean up
  const cleaned = caption
    .replace(/#\w+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Truncate if too long
  if (cleaned.length > 125) {
    return cleaned.slice(0, 122) + '...';
  }

  return cleaned || 'Instagram post';
}

/**
 * Truncate caption to specified length
 * @param caption - Post caption
 * @param maxLength - Maximum length
 * @returns Truncated caption
 */
export function truncateCaption(caption: string, maxLength: number = 150): string {
  if (!caption || caption.length <= maxLength) {
    return caption || '';
  }

  // Find the last space before maxLength to avoid cutting words
  const truncated = caption.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > maxLength * 0.8) {
    return truncated.slice(0, lastSpace) + '...';
  }

  return truncated + '...';
}

/**
 * Format timestamp to relative time string
 * @param timestamp - ISO timestamp
 * @returns Relative time string (e.g., "2 days ago")
 */
export function formatRelativeTime(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffSecs < 60) {
    return 'just now';
  } else if (diffMins < 60) {
    return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
  } else if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
}

/**
 * Format number with K/M suffix
 * @param num - Number to format
 * @returns Formatted string (e.g., "1.2K")
 */
export function formatCount(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

// =================================================================
// ERROR HANDLING
// =================================================================

/**
 * Create a standardized error object
 * @param code - Error code
 * @param message - Error message
 * @param details - Additional details
 * @returns Standardized error object
 */
export function createInstagramError(
  code: string,
  message: string,
  details?: Record<string, unknown>
): InstagramFeedError {
  return {
    code,
    message,
    details,
  };
}

/**
 * Common error codes for Instagram feed
 */
export const InstagramErrorCodes = {
  NOT_CONFIGURED: 'INSTAGRAM_NOT_CONFIGURED',
  FETCH_FAILED: 'INSTAGRAM_FETCH_FAILED',
  INVALID_RESPONSE: 'INSTAGRAM_INVALID_RESPONSE',
  RATE_LIMITED: 'INSTAGRAM_RATE_LIMITED',
  UNAUTHORIZED: 'INSTAGRAM_UNAUTHORIZED',
} as const;

// =================================================================
// VALIDATION UTILITIES
// =================================================================

/**
 * Validate an Instagram post object
 * @param post - Post to validate
 * @returns True if valid
 */
export function isValidPost(post: unknown): post is InstagramPost {
  if (!post || typeof post !== 'object') {
    return false;
  }

  const p = post as Record<string, unknown>;

  return (
    typeof p.id === 'string' &&
    typeof p.mediaUrl === 'string' &&
    typeof p.permalink === 'string' &&
    typeof p.mediaType === 'string' &&
    ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'].includes(p.mediaType as string)
  );
}

/**
 * Sanitize caption for safe display
 * @param caption - Raw caption
 * @returns Sanitized caption
 */
export function sanitizeCaption(caption: string): string {
  return caption
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
