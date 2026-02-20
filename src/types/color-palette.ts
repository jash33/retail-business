/**
 * =================================================================
 * COLOR PALETTE TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for the retail color palette system.
 * Supports three distinct palette options: Light/Airy, Bold/Editorial,
 * and Earthy/Organic, each switchable via configuration.
 *
 * =================================================================
 */

// =================================================================
// PALETTE IDENTIFIER TYPES
// =================================================================

/**
 * Available color palette identifiers
 * - floral: Rose pinks and sage greens - romantic and botanical (HTX Flowers default)
 * - light-airy: Whites, creams, soft grays - clean and minimalist
 * - bold-editorial: High-contrast blacks with accent colors - dramatic and modern
 * - earthy-organic: Terracotta, sage, warm neutrals - natural and warm
 */
export type ColorPaletteId = 'floral' | 'light-airy' | 'bold-editorial' | 'earthy-organic';

/**
 * Default palette to use when none is specified
 */
export const DEFAULT_PALETTE: ColorPaletteId = 'floral';

// =================================================================
// COLOR DEFINITION TYPES
// =================================================================

/**
 * Core color values for a palette
 * Each color is defined as a hex string
 */
export interface PaletteColors {
  /** Primary brand color */
  primary: string;
  /** Lighter shade of primary */
  primaryLight: string;
  /** Darker shade of primary */
  primaryDark: string;
  /** Hover state for primary */
  primaryHover: string;

  /** Main background color */
  background: string;
  /** Subtle background variation */
  backgroundSubtle: string;
  /** Muted background variation */
  backgroundMuted: string;
  /** Elevated surface background (cards, modals) */
  backgroundElevated: string;

  /** Primary text color */
  textPrimary: string;
  /** Secondary text color */
  textSecondary: string;
  /** Tertiary/helper text color */
  textTertiary: string;
  /** Inverse text (on dark backgrounds) */
  textInverse: string;

  /** Accent color for highlights */
  accent: string;
  /** Light accent variation */
  accentLight: string;
  /** Dark accent variation */
  accentDark: string;
  /** Subtle accent background */
  accentSubtle: string;

  /** Alternative accent color */
  accentAlt: string;
  /** Light alternative accent */
  accentAltLight: string;
  /** Dark alternative accent */
  accentAltDark: string;

  /** Default border color */
  border: string;
  /** Light border color */
  borderLight: string;
  /** Dark border color */
  borderDark: string;
}

// =================================================================
// PALETTE METADATA TYPES
// =================================================================

/**
 * Metadata describing a color palette
 */
export interface PaletteMetadata {
  /** Unique identifier for the palette */
  id: ColorPaletteId;
  /** Display name for UI */
  name: string;
  /** Short description of the palette aesthetic */
  description: string;
  /** Keywords describing the palette style */
  keywords: string[];
  /** Preview colors for palette selector UI */
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// =================================================================
// COMPLETE PALETTE DEFINITION
// =================================================================

/**
 * Complete color palette definition including colors and metadata
 */
export interface ColorPalette {
  /** Palette metadata */
  metadata: PaletteMetadata;
  /** Light mode colors */
  colors: PaletteColors;
  /** Dark mode color overrides (optional) */
  darkColors?: Partial<PaletteColors>;
}

// =================================================================
// CONFIGURATION TYPES
// =================================================================

/**
 * Color palette system configuration
 */
export interface ColorPaletteConfig {
  /** Whether palette switching is enabled */
  enabled: boolean;
  /** Currently active palette */
  activePalette: ColorPaletteId;
  /** Whether users can switch palettes via UI */
  allowUserSwitch: boolean;
  /** Persist user palette preference in localStorage */
  persistPreference: boolean;
  /** All available palettes */
  availablePalettes: ColorPaletteId[];
}

// =================================================================
// COMPONENT PROP TYPES
// =================================================================

/**
 * Props for the PaletteSelector component
 */
export interface PaletteSelectorProps {
  /** Current active palette */
  currentPalette?: ColorPaletteId;
  /** Callback when palette changes */
  onPaletteChange?: (palette: ColorPaletteId) => void;
  /** Visual variant of the selector */
  variant?: 'dropdown' | 'buttons' | 'cards';
  /** Whether to show palette previews */
  showPreviews?: boolean;
  /** Additional CSS class names */
  class?: string;
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Map of all available palettes by their ID
 */
export type PaletteMap = Record<ColorPaletteId, ColorPalette>;

/**
 * Event dispatched when palette changes
 */
export interface PaletteChangeEvent {
  /** Previous palette ID */
  previousPalette: ColorPaletteId;
  /** New palette ID */
  newPalette: ColorPaletteId;
  /** Whether change was triggered by user */
  userInitiated: boolean;
  /** Timestamp of the change */
  timestamp: number;
}

/**
 * Palette preference stored in localStorage
 */
export interface StoredPalettePreference {
  /** Selected palette ID */
  paletteId: ColorPaletteId;
  /** When the preference was set */
  setAt: number;
  /** Version for future migrations */
  version: number;
}
