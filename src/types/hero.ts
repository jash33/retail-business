/**
 * Hero Section Type Definitions
 * Types for the homepage hero section component
 */

/**
 * CTA button configuration for the hero section
 */
export interface HeroCTA {
  /** Button text */
  text: string;
  /** Button link destination */
  href: string;
  /** Button visual variant */
  variant?: 'primary' | 'secondary';
}

/**
 * Props for the HeroSection component
 */
export interface HeroSectionProps {
  /** Main headline - the primary message (h1) */
  headline: string;
  /** Value proposition - what makes this service unique */
  valueProposition?: string;
  /** Subheadline - supporting text describing services */
  subheadline?: string;
  /** Primary CTA button */
  primaryCTA?: HeroCTA;
  /** Secondary CTA button (optional) */
  secondaryCTA?: HeroCTA;
  /** Section ID for anchoring */
  id?: string;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Video background configuration for editorial hero
 */
export interface HeroVideoConfig {
  /** URL to video file (mp4 recommended) */
  src: string;
  /** Poster image shown before video loads */
  poster?: string;
  /** Whether video should loop (default: true) */
  loop?: boolean;
  /** Playback rate (0.5 = half speed, 1 = normal, 2 = double) */
  playbackRate?: number;
}

/**
 * Parallax configuration for editorial hero
 */
export interface HeroParallaxConfig {
  /** Enable parallax effect (default: true) */
  enabled?: boolean;
  /** Parallax intensity - how much the background moves (0-1, default: 0.3) */
  intensity?: number;
  /** Direction of parallax movement */
  direction?: 'up' | 'down';
}

/**
 * Text overlay position options for editorial hero
 */
export type HeroOverlayPosition =
  | 'center'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right';

/**
 * Props for the HeroEditorial component
 * Minimal, statement hero variant with large lifestyle imagery,
 * subtle headline overlays, and clean single CTA.
 */
export interface HeroEditorialProps {
  /** Main headline - large statement text */
  headline: string;
  /** Optional subheadline - smaller supporting text */
  subheadline?: string;
  /** Single CTA button */
  cta?: HeroCTA;
  /** Background image URL for lifestyle imagery */
  backgroundImage?: string;
  /** Alternative: Video background configuration */
  video?: HeroVideoConfig;
  /** Parallax scroll effect configuration */
  parallax?: HeroParallaxConfig;
  /** Position of the text overlay */
  overlayPosition?: HeroOverlayPosition;
  /** Overlay darkness (0-1, default: 0.4) */
  overlayOpacity?: number;
  /** Section ID for anchoring */
  id?: string;
  /** Additional CSS classes */
  class?: string;
  /** Minimum height of the hero section (default: '100vh') */
  minHeight?: string;
  /** Enable subtle text animation on load */
  animateText?: boolean;
}

/**
 * Overlay gradient type options for VideoHero
 * Controls how the dark overlay is applied over the video
 */
export type VideoHeroGradientType = 'linear' | 'radial' | 'solid';

/**
 * Props for the VideoHero component
 * Cinematic hero section with looping video backgrounds optimized for brand storytelling.
 *
 * Features:
 * - Looping video backgrounds with WebM + MP4 support
 * - Fallback image for loading state and unsupported browsers
 * - Autoplay with user-configurable controls
 * - Reduced-motion alternative (shows static fallback)
 * - Play/pause toggle button
 * - Multiple content positioning options
 * - Configurable overlay gradient styles
 */
export interface VideoHeroProps {
  /** Main headline - large statement text */
  headline: string;
  /** Optional subheadline - supporting brand message */
  subheadline?: string;
  /** Single CTA button */
  cta?: HeroCTA;

  /** Primary video source URL (MP4 format recommended) */
  videoSrc: string;
  /** Optional WebM video source for better compression/quality in supported browsers */
  videoSrcWebm?: string;
  /** Fallback image shown before video loads and for unsupported browsers/reduced motion */
  fallbackImage?: string;
  /** Poster image shown before video plays (uses fallbackImage if not specified) */
  posterImage?: string;

  /** Enable video autoplay (default: true, always muted for autoplay) */
  autoplay?: boolean;
  /** Enable video looping (default: true) */
  loop?: boolean;
  /** Mute video (default: true, required for autoplay in most browsers) */
  muted?: boolean;
  /** Video playback rate (0.5 = half speed, 1 = normal, 2 = double) */
  playbackRate?: number;
  /** Show play/pause toggle button (default: true) */
  showPlayPauseButton?: boolean;

  /** Position of the text overlay (default: 'center') */
  overlayPosition?: HeroOverlayPosition;
  /** Overlay darkness/opacity (0-1, default: 0.5) */
  overlayOpacity?: number;
  /** Overlay gradient style (default: 'linear') */
  overlayGradient?: VideoHeroGradientType;

  /** Section ID for anchoring */
  id?: string;
  /** Additional CSS classes */
  class?: string;
  /** Minimum height of the hero section (default: '100vh') */
  minHeight?: string;
  /** Enable subtle text animation on load */
  animateText?: boolean;
}
