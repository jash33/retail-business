/**
 * Button Component Types
 * Type definitions for the reusable CTA Button component.
 *
 * @example
 * ```typescript
 * import type { ButtonProps } from '../types/button';
 * ```
 */

/**
 * Button visual variant options
 * - 'primary': High-emphasis button for main actions (solid background)
 * - 'secondary': Medium-emphasis button for secondary actions (outlined)
 */
export type ButtonVariant = 'primary' | 'secondary';

/**
 * Button size options
 * - 'small': Compact size for dense UIs (32px height)
 * - 'medium': Default size for most use cases (40px height)
 * - 'large': Prominent size for hero sections (48px height)
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Icon position options
 * - 'leading': Icon appears before the text
 * - 'trailing': Icon appears after the text
 */
export type IconPosition = 'leading' | 'trailing';

/**
 * Button component props interface
 *
 * @example Primary button with link
 * ```astro
 * <Button
 *   text="Get Started"
 *   href="/contact"
 *   variant="primary"
 *   size="large"
 * />
 * ```
 *
 * @example Secondary button with click handler
 * ```astro
 * <Button
 *   text="Learn More"
 *   variant="secondary"
 *   onClick="handleClick"
 * />
 * ```
 *
 * @example Button with icon and loading state
 * ```astro
 * <Button
 *   text="Submit"
 *   variant="primary"
 *   isLoading={isSubmitting}
 *   iconPosition="trailing"
 * >
 *   <svg slot="icon">...</svg>
 * </Button>
 * ```
 */
export interface ButtonProps {
  /**
   * Button label text content
   * @required
   */
  text: string;

  /**
   * Navigation URL - renders button as an anchor element
   * Mutually exclusive with onClick for semantic HTML
   */
  href?: string;

  /**
   * Click handler function name or inline handler
   * When provided without href, renders as a button element
   */
  onClick?: string;

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size variant of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Disables the button interaction
   * Adds visual indication and prevents clicks
   * @default false
   */
  disabled?: boolean;

  /**
   * Position of the icon relative to text
   * @default 'leading'
   */
  iconPosition?: IconPosition;

  /**
   * Makes button full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Shows loading spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;

  /**
   * Accessible label for screen readers
   * Use when button text alone doesn't convey full meaning
   */
  ariaLabel?: string;

  /**
   * ID of element that describes the button
   */
  ariaDescribedBy?: string;

  /**
   * Opens link in new tab (only for href buttons)
   * Automatically adds rel="noopener noreferrer" for security
   * @default false
   */
  openInNewTab?: boolean;

  /**
   * Additional CSS classes to apply
   */
  class?: string;

  /**
   * Button type attribute (only for button elements)
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * ID attribute for the button element
   */
  id?: string;

  /**
   * Name attribute for form submissions
   */
  name?: string;

  /**
   * Value attribute for form submissions
   */
  value?: string;

  /**
   * Form ID to associate with (for buttons outside forms)
   */
  form?: string;
}

/**
 * Button component state type for internal use
 */
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled' | 'loading';
