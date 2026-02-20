/**
 * =================================================================
 * COLOR PALETTE CONFIGURATION - HTX Flowers
 * =================================================================
 *
 * Configuration for the retail color palette system.
 * Default: Floral palette with soft rose pinks and sage greens.
 *
 * Available Palettes:
 * 1. Floral - Rose pinks, sage greens (default for HTX Flowers)
 * 2. Light/Airy - Whites, creams, soft grays
 * 3. Bold/Editorial - High-contrast blacks with accent colors
 * 4. Earthy/Organic - Terracotta, sage, warm neutrals
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
 * Floral/Rose Palette (HTX Flowers Default)
 * Romantic, elegant aesthetic with soft rose pinks and sage greens.
 * Perfect for florists, wedding vendors, and botanical brands.
 */
export const FLORAL_PALETTE: ColorPalette = {
  metadata: {
    id: 'floral',
    name: 'Floral Rose',
    description: 'Romantic rose pinks and sage greens for a botanical, elegant feel',
    keywords: ['floral', 'romantic', 'botanical', 'elegant', 'rose', 'wedding'],
    previewColors: {
      primary: '#E8527A',
      secondary: '#FFFBFC',
      accent: '#7D9B76',
    },
  },
  colors: {
    // Primary - Soft Rose Pink
    primary: '#E8527A',
    primaryLight: '#F8A4B5',
    primaryDark: '#B42D54',
    primaryHover: '#D63B66',

    // Backgrounds - Soft cream with blush tint
    background: '#FFFBFC',
    backgroundSubtle: '#FEF7F8',
    backgroundMuted: '#FCF0F2',
    backgroundElevated: '#FFFFFF',

    // Text - Soft charcoal with warm undertone
    textPrimary: '#2D2528',
    textSecondary: '#5C4F53',
    textTertiary: '#847579',
    textInverse: '#FFFBFC',

    // Accent - Sage Green
    accent: '#7D9B76',
    accentLight: '#A4BDA0',
    accentDark: '#5D7B56',
    accentSubtle: '#EDF3EC',

    // Alternative accent - Lavender
    accentAlt: '#9B8EB8',
    accentAltLight: '#C4BBDA',
    accentAltDark: '#7A6B9A',

    // Borders - Soft rose-tinted neutrals
    border: '#E8DDE0',
    borderLight: '#F5EFF1',
    borderDark: '#D4C5CA',
  },
  darkColors: {
    background: '#1A1517',
    backgroundSubtle: '#251E21',
    backgroundMuted: '#32282C',
    backgroundElevated: '#251E21',
    textPrimary: '#FDF2F4',
    textSecondary: '#E8DDE0',
    textTertiary: '#B5A3A8',
    textInverse: '#1A1517',
    border: '#3D3336',
    borderLight: '#32282C',
    borderDark: '#4D4145',
  },
};

/**
 * Light/Airy Palette
 * Clean, minimalist aesthetic with whites, creams, and soft grays.
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
    primary: '#6B7280',
    primaryLight: '#9CA3AF',
    primaryDark: '#4B5563',
    primaryHover: '#4B5563',
    background: '#FFFFFF',
    backgroundSubtle: '#FAFAFA',
    backgroundMuted: '#F5F5F4',
    backgroundElevated: '#FFFFFF',
    textPrimary: '#1F2937',
    textSecondary: '#4B5563',
    textTertiary: '#6B7280',
    textInverse: '#FFFFFF',
    accent: '#D4AF37',
    accentLight: '#E5C76B',
    accentDark: '#B8960C',
    accentSubtle: '#FDF8E8',
    accentAlt: '#E8B4B8',
    accentAltLight: '#F5D5D8',
    accentAltDark: '#D4929A',
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
    primary: '#0F0F0F',
    primaryLight: '#262626',
    primaryDark: '#000000',
    primaryHover: '#171717',
    background: '#FAFAFA',
    backgroundSubtle: '#F5F5F5',
    backgroundMuted: '#E5E5E5',
    backgroundElevated: '#FFFFFF',
    textPrimary: '#0F0F0F',
    textSecondary: '#404040',
    textTertiary: '#737373',
    textInverse: '#FAFAFA',
    accent: '#EF4444',
    accentLight: '#FCA5A5',
    accentDark: '#DC2626',
    accentSubtle: '#FEE2E2',
    accentAlt: '#3B82F6',
    accentAltLight: '#93C5FD',
    accentAltDark: '#2563EB',
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
    primary: '#9C6644',
    primaryLight: '#C4956E',
    primaryDark: '#7A4F35',
    primaryHover: '#8B5A3C',
    background: '#FAF6F1',
    backgroundSubtle: '#F5EFE6',
    backgroundMuted: '#EDE4D8',
    backgroundElevated: '#FFFCF7',
    textPrimary: '#3D2B1F',
    textSecondary: '#5D4435',
    textTertiary: '#7D6455',
    textInverse: '#FAF6F1',
    accent: '#7C9A6E',
    accentLight: '#A3B899',
    accentDark: '#5B7A4C',
    accentSubtle: '#E8F0E4',
    accentAlt: '#C9A9A6',
    accentAltLight: '#DEC9C7',
    accentAltDark: '#B08985',
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
  'floral': FLORAL_PALETTE,
  'light-airy': LIGHT_AIRY_PALETTE,
  'bold-editorial': BOLD_EDITORIAL_PALETTE,
  'earthy-organic': EARTHY_ORGANIC_PALETTE,
};

/**
 * Array of all available palette IDs
 */
export const AVAILABLE_PALETTE_IDS: ColorPaletteId[] = [
  'floral',
  'light-airy',
  'bold-editorial',
  'earthy-organic',
];

// =================================================================
// CONFIGURATION
// =================================================================

/**
 * Active palette - defaults to 'floral' for HTX Flowers
 */
const envPalette = getEnvVar('PUBLIC_COLOR_PALETTE', 'floral') as ColorPaletteId;
export const ACTIVE_PALETTE_ID: ColorPaletteId = AVAILABLE_PALETTE_IDS.includes(envPalette)
  ? envPalette
  : 'floral';

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

export function getPalette(id: ColorPaletteId): ColorPalette {
  return COLOR_PALETTES[id] || COLOR_PALETTES['floral'];
}

export function getActivePalette(): ColorPalette {
  return getPalette(ACTIVE_PALETTE_ID);
}

export function getAllPaletteMetadata() {
  return AVAILABLE_PALETTE_IDS.map((id) => COLOR_PALETTES[id].metadata);
}

export function isValidPaletteId(id: string): id is ColorPaletteId {
  return AVAILABLE_PALETTE_IDS.includes(id as ColorPaletteId);
}

export function getColorPaletteConfig(): ColorPaletteConfig {
  return { ...colorPaletteConfig };
}
