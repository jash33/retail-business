/**
 * =================================================================
 * COLOR PALETTE CONFIGURATION
 * =================================================================
 *
 * Configuration for the retail color palette system.
 * Defines three distinct palette options that can be switched
 * via environment variables or user preference.
 *
 * Palettes:
 * 1. Light/Airy - Whites, creams, soft grays (clean, minimalist)
 * 2. Bold/Editorial - High-contrast blacks with accent colors (dramatic)
 * 3. Earthy/Organic - Terracotta, sage, warm neutrals (natural, warm)
 *
 * =================================================================
 */

import type {
  ColorPalette,
  ColorPaletteConfig,
  ColorPaletteId,
  PaletteMap,
  DEFAULT_PALETTE,
} from '../types/color-palette';

// =================================================================
// ENVIRONMENT VARIABLES
// =================================================================

/**
 * Read configuration from environment variables
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
// PALETTE DEFINITIONS
// =================================================================

/**
 * Light/Airy Palette
 * Clean, minimalist aesthetic with whites, creams, and soft grays.
 * Perfect for elegant, sophisticated retail brands.
 */
export const LIGHT_AIRY_PALETTE: ColorPalette = {
  metadata: {
    id: 'light-airy',
    name: 'Light & Airy',
    description: 'Clean, minimalist aesthetic with whites, creams, and soft grays',
    keywords: ['clean', 'minimalist', 'elegant', 'sophisticated', 'light'],
    previewColors: {
      primary: '#6B7280',
      secondary: '#F9FAFB',
      accent: '#9CA3AF',
    },
  },
  colors: {
    // Primary - Soft gray-blue
    primary: '#6B7280',
    primaryLight: '#9CA3AF',
    primaryDark: '#4B5563',
    primaryHover: '#4B5563',

    // Backgrounds - Whites and creams
    background: '#FFFFFF',
    backgroundSubtle: '#FAFAFA',
    backgroundMuted: '#F5F5F4',
    backgroundElevated: '#FFFFFF',

    // Text - Soft charcoal tones
    textPrimary: '#1F2937',
    textSecondary: '#4B5563',
    textTertiary: '#6B7280',
    textInverse: '#FFFFFF',

    // Accent - Warm cream/gold
    accent: '#D4AF37',
    accentLight: '#E5C76B',
    accentDark: '#B8960C',
    accentSubtle: '#FDF8E8',

    // Alternative accent - Soft blush
    accentAlt: '#E8B4B8',
    accentAltLight: '#F5D5D8',
    accentAltDark: '#D4929A',

    // Borders - Light grays
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    borderDark: '#D1D5DB',
  },
  darkColors: {
    background: '#111827',
    backgroundSubtle: '#1F2937',
    backgroundMuted: '#374151',
    backgroundElevated: '#1F2937',
    textPrimary: '#F9FAFB',
    textSecondary: '#D1D5DB',
    textTertiary: '#9CA3AF',
    textInverse: '#111827',
    border: '#374151',
    borderLight: '#1F2937',
    borderDark: '#4B5563',
  },
};

/**
 * Bold/Editorial Palette
 * High-contrast dramatic aesthetic with blacks and striking accent colors.
 * Perfect for fashion-forward, editorial retail brands.
 */
export const BOLD_EDITORIAL_PALETTE: ColorPalette = {
  metadata: {
    id: 'bold-editorial',
    name: 'Bold Editorial',
    description: 'High-contrast blacks with striking accent colors for dramatic impact',
    keywords: ['bold', 'dramatic', 'editorial', 'high-contrast', 'modern'],
    previewColors: {
      primary: '#0F0F0F',
      secondary: '#FAFAFA',
      accent: '#EF4444',
    },
  },
  colors: {
    // Primary - Deep black
    primary: '#0F0F0F',
    primaryLight: '#262626',
    primaryDark: '#000000',
    primaryHover: '#171717',

    // Backgrounds - Pure white with subtle grays
    background: '#FAFAFA',
    backgroundSubtle: '#F5F5F5',
    backgroundMuted: '#E5E5E5',
    backgroundElevated: '#FFFFFF',

    // Text - Strong blacks
    textPrimary: '#0F0F0F',
    textSecondary: '#404040',
    textTertiary: '#737373',
    textInverse: '#FAFAFA',

    // Accent - Bold red
    accent: '#EF4444',
    accentLight: '#FCA5A5',
    accentDark: '#DC2626',
    accentSubtle: '#FEE2E2',

    // Alternative accent - Electric blue
    accentAlt: '#3B82F6',
    accentAltLight: '#93C5FD',
    accentAltDark: '#2563EB',

    // Borders - Strong definition
    border: '#D4D4D4',
    borderLight: '#E5E5E5',
    borderDark: '#A3A3A3',
  },
  darkColors: {
    background: '#0A0A0A',
    backgroundSubtle: '#171717',
    backgroundMuted: '#262626',
    backgroundElevated: '#171717',
    textPrimary: '#FAFAFA',
    textSecondary: '#D4D4D4',
    textTertiary: '#A3A3A3',
    textInverse: '#0A0A0A',
    border: '#404040',
    borderLight: '#262626',
    borderDark: '#525252',
  },
};

/**
 * Earthy/Organic Palette
 * Warm, natural aesthetic with terracotta, sage, and warm neutrals.
 * Perfect for sustainable, artisanal, or wellness retail brands.
 */
export const EARTHY_ORGANIC_PALETTE: ColorPalette = {
  metadata: {
    id: 'earthy-organic',
    name: 'Earthy Organic',
    description: 'Terracotta, sage, and warm neutrals for a natural, grounded feel',
    keywords: ['earthy', 'organic', 'natural', 'warm', 'sustainable'],
    previewColors: {
      primary: '#9C6644',
      secondary: '#FAF6F1',
      accent: '#7C9A6E',
    },
  },
  colors: {
    // Primary - Terracotta
    primary: '#9C6644',
    primaryLight: '#C4956E',
    primaryDark: '#7A4F35',
    primaryHover: '#8B5A3C',

    // Backgrounds - Warm cream/linen tones
    background: '#FAF6F1',
    backgroundSubtle: '#F5EFE6',
    backgroundMuted: '#EDE4D8',
    backgroundElevated: '#FFFCF7',

    // Text - Warm browns
    textPrimary: '#3D2B1F',
    textSecondary: '#5D4435',
    textTertiary: '#7D6455',
    textInverse: '#FAF6F1',

    // Accent - Sage green
    accent: '#7C9A6E',
    accentLight: '#A3B899',
    accentDark: '#5B7A4C',
    accentSubtle: '#E8F0E4',

    // Alternative accent - Dusty rose
    accentAlt: '#C9A9A6',
    accentAltLight: '#DEC9C7',
    accentAltDark: '#B08985',

    // Borders - Warm beige tones
    border: '#D9CFC4',
    borderLight: '#EAE4DB',
    borderDark: '#C4B8AA',
  },
  darkColors: {
    background: '#1E1814',
    backgroundSubtle: '#2D251F',
    backgroundMuted: '#3D332A',
    backgroundElevated: '#2D251F',
    textPrimary: '#F5EFE6',
    textSecondary: '#D9CFC4',
    textTertiary: '#A89B8C',
    textInverse: '#1E1814',
    border: '#4D4138',
    borderLight: '#3D332A',
    borderDark: '#5D5145',
  },
};

// =================================================================
// PALETTE MAP
// =================================================================

/**
 * Map of all available palettes indexed by their ID
 */
export const COLOR_PALETTES: PaletteMap = {
  'light-airy': LIGHT_AIRY_PALETTE,
  'bold-editorial': BOLD_EDITORIAL_PALETTE,
  'earthy-organic': EARTHY_ORGANIC_PALETTE,
};

/**
 * Array of all available palette IDs
 */
export const AVAILABLE_PALETTE_IDS: ColorPaletteId[] = [
  'light-airy',
  'bold-editorial',
  'earthy-organic',
];

// =================================================================
// CONFIGURATION
// =================================================================

/**
 * Active palette from environment variable
 * Defaults to 'light-airy' if not set or invalid
 */
const envPalette = getEnvVar('PUBLIC_COLOR_PALETTE', 'light-airy') as ColorPaletteId;
export const ACTIVE_PALETTE_ID: ColorPaletteId = AVAILABLE_PALETTE_IDS.includes(envPalette)
  ? envPalette
  : 'light-airy';

/**
 * Whether palette switching is enabled
 */
export const PALETTE_SWITCHING_ENABLED = getBoolEnvVar('PUBLIC_COLOR_PALETTE_SWITCHING', true);

/**
 * Whether to persist user palette preference
 */
export const PERSIST_PALETTE_PREFERENCE = getBoolEnvVar('PUBLIC_COLOR_PALETTE_PERSIST', true);

/**
 * LocalStorage key for palette preference
 */
export const PALETTE_STORAGE_KEY = 'retail-color-palette';

/**
 * Complete palette configuration object
 */
export const colorPaletteConfig: ColorPaletteConfig = {
  enabled: true,
  activePalette: ACTIVE_PALETTE_ID,
  allowUserSwitch: PALETTE_SWITCHING_ENABLED,
  persistPreference: PERSIST_PALETTE_PREFERENCE,
  availablePalettes: AVAILABLE_PALETTE_IDS,
};

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get a palette by its ID
 */
export function getPalette(id: ColorPaletteId): ColorPalette {
  return COLOR_PALETTES[id] || COLOR_PALETTES['light-airy'];
}

/**
 * Get the active palette based on configuration
 */
export function getActivePalette(): ColorPalette {
  return getPalette(ACTIVE_PALETTE_ID);
}

/**
 * Get all palette metadata for UI display
 */
export function getAllPaletteMetadata() {
  return AVAILABLE_PALETTE_IDS.map((id) => COLOR_PALETTES[id].metadata);
}

/**
 * Check if a palette ID is valid
 */
export function isValidPaletteId(id: string): id is ColorPaletteId {
  return AVAILABLE_PALETTE_IDS.includes(id as ColorPaletteId);
}

/**
 * Get the palette configuration
 */
export function getColorPaletteConfig(): ColorPaletteConfig {
  return { ...colorPaletteConfig };
}
