/**
 * =================================================================
 * IMAGE UTILITIES FOR PROGRESSIVE LOADING
 * =================================================================
 *
 * Utility functions for generating Low-Quality Image Placeholders (LQIP),
 * handling WebP detection and fallbacks, and image optimization helpers.
 *
 * =================================================================
 */

/**
 * Configuration for LQIP generation
 */
export interface LQIPConfig {
  /** Width of the placeholder (default: 20) */
  width?: number;
  /** Height of the placeholder (auto-calculated if not provided) */
  height?: number;
  /** Blur amount in CSS pixels (default: 20) */
  blurAmount?: number;
  /** Quality for placeholder (1-100, default: 20) */
  quality?: number;
}

/**
 * Image source configuration with optional LQIP
 */
export interface ProgressiveImageSource {
  /** Main image source URL */
  src: string;
  /** WebP version source (optional, auto-generated if not provided) */
  srcWebP?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width */
  width: number;
  /** Image height */
  height: number;
  /** LQIP base64 data URL */
  placeholder?: string;
  /** Dominant color for placeholder background */
  placeholderColor?: string;
}

/**
 * Get the WebP version path of an image
 * Assumes WebP files are stored alongside originals with .webp extension
 *
 * @param imageSrc - Original image source path
 * @returns WebP version path or original if already WebP/SVG
 *
 * @example
 * getWebPSrc('/images/hero.jpg') // '/images/hero.webp'
 * getWebPSrc('/images/icon.svg') // '/images/icon.svg'
 * getWebPSrc('/images/photo.webp') // '/images/photo.webp'
 */
export function getWebPSrc(imageSrc: string): string {
  // Don't convert SVG or already WebP
  if (imageSrc.endsWith('.svg') || imageSrc.endsWith('.webp')) {
    return imageSrc;
  }

  const lastDot = imageSrc.lastIndexOf('.');
  if (lastDot === -1) {
    return imageSrc;
  }

  return imageSrc.substring(0, lastDot) + '.webp';
}

/**
 * Check if the current browser supports WebP format
 * Uses a cached result for performance
 *
 * @returns Promise resolving to true if WebP is supported
 */
let webpSupportCached: boolean | null = null;

export async function supportsWebP(): Promise<boolean> {
  if (webpSupportCached !== null) {
    return webpSupportCached;
  }

  if (typeof window === 'undefined') {
    // SSR: assume support, let picture element handle fallback
    return true;
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const dataUrl = canvas.toDataURL('image/webp');
    webpSupportCached = dataUrl.indexOf('data:image/webp') === 0;
    return webpSupportCached;
  } catch {
    webpSupportCached = false;
    return false;
  }
}

/**
 * Synchronously check WebP support (may return null if not yet determined)
 *
 * @returns boolean or null if not yet cached
 */
export function supportsWebPSync(): boolean | null {
  return webpSupportCached;
}

/**
 * Generate a responsive srcset string for an image
 *
 * @param src - Base image source
 * @param widths - Array of width breakpoints
 * @param maxWidth - Maximum width to include (optional)
 * @returns srcset string
 *
 * @example
 * generateSrcSet('/images/hero.jpg', [320, 640, 1024], 1200)
 * // '/images/hero.jpg 320w, /images/hero.jpg 640w, /images/hero.jpg 1024w'
 */
export function generateSrcSet(
  src: string,
  widths: number[] = [320, 480, 640, 768, 1024, 1280, 1536, 1920],
  maxWidth?: number
): string {
  const filteredWidths = maxWidth
    ? widths.filter(w => w <= maxWidth * 2) // Include up to 2x for retina
    : widths;

  return filteredWidths
    .map(w => `${src} ${w}w`)
    .join(', ');
}

/**
 * Generate a default sizes attribute for responsive images
 *
 * @param breakpoints - Optional custom breakpoint configuration
 * @returns CSS sizes attribute string
 */
export function generateSizes(
  breakpoints?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  }
): string {
  const defaults = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  };

  const config = { ...defaults, ...breakpoints };

  return `(max-width: 640px) ${config.mobile}, (max-width: 1024px) ${config.tablet}, ${config.desktop}`;
}

/**
 * Create a tiny placeholder SVG with dominant color
 * This is a fallback when LQIP base64 is not available
 *
 * @param width - Image width
 * @param height - Image height
 * @param color - Dominant/background color (hex or CSS color)
 * @returns Data URL for the SVG placeholder
 *
 * @example
 * createColorPlaceholder(800, 600, '#e5e7eb')
 * // 'data:image/svg+xml,...'
 */
export function createColorPlaceholder(
  width: number,
  height: number,
  color: string = '#e5e7eb'
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect fill="${color}" width="${width}" height="${height}"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Create a shimmer gradient placeholder SVG
 *
 * @param width - Image width
 * @param height - Image height
 * @param baseColor - Base color for gradient
 * @param highlightColor - Highlight color for gradient
 * @returns Data URL for the SVG placeholder
 */
export function createShimmerPlaceholder(
  width: number,
  height: number,
  baseColor: string = '#f3f4f6',
  highlightColor: string = '#e5e7eb'
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:${baseColor}"/>
        <stop offset="50%" style="stop-color:${highlightColor}"/>
        <stop offset="100%" style="stop-color:${baseColor}"/>
      </linearGradient>
    </defs>
    <rect fill="url(#shimmer)" width="${width}" height="${height}"/>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Calculate aspect ratio from dimensions
 *
 * @param width - Image width
 * @param height - Image height
 * @returns Aspect ratio as a number
 */
export function calculateAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * Get CSS aspect-ratio property value
 *
 * @param width - Image width
 * @param height - Image height
 * @returns CSS aspect-ratio string (e.g., "16 / 9")
 */
export function getCssAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  return `${width / divisor} / ${height / divisor}`;
}

/**
 * Preload an image and return a promise
 *
 * @param src - Image source URL
 * @returns Promise that resolves when image loads
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preload multiple images in parallel
 *
 * @param sources - Array of image source URLs
 * @returns Promise that resolves when all images load
 */
export function preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Check if the current connection is slow or data saving is enabled
 *
 * @returns true if connection is slow or save-data is enabled
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const connection = (navigator as any).connection;
  if (!connection) {
    return false;
  }

  // Check for save-data header
  if (connection.saveData) {
    return true;
  }

  // Check for slow effective connection types
  const slowTypes = ['slow-2g', '2g'];
  if (slowTypes.includes(connection.effectiveType)) {
    return true;
  }

  return false;
}

/**
 * Get recommended image quality based on connection
 *
 * @returns Recommended quality (1-100)
 */
export function getRecommendedQuality(): number {
  if (isSlowConnection()) {
    return 50; // Lower quality for slow connections
  }
  return 80; // Standard quality
}

/**
 * Create a progressive image configuration from basic parameters
 *
 * @param src - Image source URL
 * @param alt - Alt text
 * @param width - Image width
 * @param height - Image height
 * @param options - Optional configuration
 * @returns ProgressiveImageSource configuration
 */
export function createProgressiveImage(
  src: string,
  alt: string,
  width: number,
  height: number,
  options?: {
    placeholder?: string;
    placeholderColor?: string;
    srcWebP?: string;
  }
): ProgressiveImageSource {
  return {
    src,
    srcWebP: options?.srcWebP || getWebPSrc(src),
    alt,
    width,
    height,
    placeholder: options?.placeholder,
    placeholderColor: options?.placeholderColor,
  };
}

/**
 * Default LQIP placeholder - a tiny transparent pixel
 * Use this when no LQIP is available
 */
export const TRANSPARENT_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Supported image formats for progressive loading
 */
export const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'] as const;
export type SupportedFormat = typeof SUPPORTED_FORMATS[number];

/**
 * Check if a file extension is a supported image format
 */
export function isSupportedFormat(src: string): boolean {
  const ext = src.split('.').pop()?.toLowerCase();
  return SUPPORTED_FORMATS.includes(ext as SupportedFormat);
}

/**
 * Get the file extension from an image source
 */
export function getImageExtension(src: string): string | null {
  const match = src.match(/\.([^.?#]+)(?:[?#]|$)/);
  return match ? match[1].toLowerCase() : null;
}

/**
 * Check if an image source is an SVG
 */
export function isSVG(src: string): boolean {
  return getImageExtension(src) === 'svg';
}

/**
 * Get the MIME type for an image based on its extension
 */
export function getImageMimeType(src: string): string {
  const ext = getImageExtension(src);
  const mimeTypes: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    gif: 'image/gif',
    svg: 'image/svg+xml',
  };
  return mimeTypes[ext || ''] || 'image/jpeg';
}
