/**
 * =================================================================
 * INSTAGRAM FEED INTEGRATION TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for Instagram feed integration using Behold
 * or native embed. Supports grid layout, lightbox display,
 * loading states, and error handling.
 *
 * =================================================================
 */

// =================================================================
// INSTAGRAM POST TYPES
// =================================================================

/**
 * Instagram media types supported by the API
 */
export type InstagramMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

/**
 * Instagram post data structure
 * Compatible with Instagram Basic Display API and Behold
 */
export interface InstagramPost {
  /** Unique post identifier */
  id: string;
  /** Post caption text */
  caption?: string;
  /** Type of media (image, video, or carousel) */
  mediaType: InstagramMediaType;
  /** URL to the media file */
  mediaUrl: string;
  /** Permalink to the Instagram post */
  permalink: string;
  /** Timestamp when post was created (ISO 8601 format) */
  timestamp: string;
  /** Thumbnail URL for videos */
  thumbnailUrl?: string;
  /** Alt text for accessibility */
  altText?: string;
  /** Username of the poster */
  username?: string;
  /** Number of likes (if available) */
  likeCount?: number;
  /** Number of comments (if available) */
  commentsCount?: number;
}

/**
 * Carousel child media for CAROUSEL_ALBUM posts
 */
export interface InstagramCarouselChild {
  /** Child media identifier */
  id: string;
  /** Type of media */
  mediaType: 'IMAGE' | 'VIDEO';
  /** URL to the media file */
  mediaUrl: string;
}

// =================================================================
// CONFIGURATION TYPES
// =================================================================

/**
 * Integration provider for Instagram feed
 */
export type InstagramProvider = 'behold' | 'native' | 'mock';

/**
 * Main Instagram feed configuration
 */
export interface InstagramConfig {
  /** Whether Instagram integration is enabled */
  enabled: boolean;
  /** Integration provider (behold, native, or mock for testing) */
  provider: InstagramProvider;
  /** Behold feed ID (required for Behold provider) */
  beholdFeedId?: string;
  /** Instagram username for display */
  username?: string;
  /** Maximum number of posts to display */
  maxPosts: number;
  /** Cache duration in seconds */
  cacheDuration: number;
  /** Whether to auto-refresh the feed */
  autoRefresh: boolean;
  /** Auto-refresh interval in seconds */
  refreshInterval: number;
}

// =================================================================
// COMPONENT PROP TYPES
// =================================================================

/**
 * Props for the InstagramGrid component
 */
export interface InstagramGridProps {
  /** Array of Instagram posts to display */
  posts: InstagramPost[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Gap size between items */
  gap?: 'small' | 'medium' | 'large';
  /** Enable lightbox on click */
  enableLightbox?: boolean;
  /** Enable stagger animations */
  enableAnimation?: boolean;
  /** Show loading state */
  isLoading?: boolean;
  /** Error message to display */
  error?: string;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Props for the InstagramCard component
 */
export interface InstagramCardProps {
  /** Instagram post data */
  post: InstagramPost;
  /** Card size variant */
  size?: 'small' | 'medium' | 'large';
  /** Show caption overlay */
  showCaption?: boolean;
  /** Show engagement metrics */
  showMetrics?: boolean;
  /** Enable click to open lightbox */
  onClick?: () => void;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Props for the InstagramLightbox component
 */
export interface InstagramLightboxProps {
  /** Instagram post to display */
  post: InstagramPost | null;
  /** Whether lightbox is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Navigate to next post */
  onNext?: () => void;
  /** Navigate to previous post */
  onPrevious?: () => void;
  /** Whether there's a next post */
  hasNext?: boolean;
  /** Whether there's a previous post */
  hasPrevious?: boolean;
}

/**
 * Props for the InstagramFeed section component
 */
export interface InstagramFeedProps {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Number of posts to display (overrides config) */
  postCount?: number;
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Gap size */
  gap?: 'small' | 'medium' | 'large';
  /** Enable lightbox */
  enableLightbox?: boolean;
  /** Show follow button */
  showFollowButton?: boolean;
  /** Custom Instagram profile URL */
  profileUrl?: string;
  /** Component ID for accessibility */
  id?: string;
  /** Additional CSS classes */
  class?: string;
}

// =================================================================
// STATE TYPES
// =================================================================

/**
 * Feed loading state
 */
export type InstagramFeedState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Complete feed data with state
 */
export interface InstagramFeedData {
  /** Current feed state */
  state: InstagramFeedState;
  /** Array of posts */
  posts: InstagramPost[];
  /** Error message if state is 'error' */
  error?: string;
  /** Timestamp of last successful fetch */
  lastFetched?: string;
}

// =================================================================
// API RESPONSE TYPES
// =================================================================

/**
 * Behold API response structure
 */
export interface BeholdFeedResponse {
  /** Array of media items */
  media: BeholdMediaItem[];
  /** Feed metadata */
  meta?: {
    username?: string;
    followersCount?: number;
  };
}

/**
 * Behold media item structure
 */
export interface BeholdMediaItem {
  id: string;
  caption?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  permalink: string;
  timestamp: string;
  thumbnailUrl?: string;
}

/**
 * Error response structure
 */
export interface InstagramFeedError {
  /** Error code */
  code: string;
  /** Human-readable error message */
  message: string;
  /** Additional error details */
  details?: Record<string, unknown>;
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Options for fetching Instagram feed
 */
export interface FetchInstagramFeedOptions {
  /** Maximum number of posts to fetch */
  maxPosts?: number;
  /** Force refresh, ignoring cache */
  forceRefresh?: boolean;
}

/**
 * Transform options for normalizing API data
 */
export interface TransformOptions {
  /** Add default alt text based on caption */
  generateAltText?: boolean;
  /** Truncate captions to max length */
  maxCaptionLength?: number;
}
