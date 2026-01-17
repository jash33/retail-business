# Button Component

A flexible, accessible call-to-action button component designed for driving user conversions and actions across the site.

## Features

- **Two visual variants**: Primary (solid) and Secondary (outlined)
- **Three size options**: Small, Medium, and Large
- **Interactive states**: Default, Hover, Active, Focus, Disabled, and Loading
- **WCAG 2.1 AA compliant**: Visible focus indicators with sufficient contrast
- **Full keyboard support**: Tab navigation, Enter/Space activation
- **Semantic HTML**: Renders as `<a>` for navigation links, `<button>` for actions
- **Icon support**: Leading or trailing icons via slots
- **Loading state**: Spinner animation for async operations
- **Responsive**: Touch-friendly sizing on mobile devices
- **Accessible**: Proper ARIA attributes and screen reader support

## Installation

The Button component is already included in the project. Simply import it:

```astro
---
import Button from '../components/Button.astro';
---
```

## Basic Usage

### Primary Button (Default)

```astro
<Button text="Get Started" href="/contact" />
```

### Secondary Button

```astro
<Button text="Learn More" href="/about" variant="secondary" />
```

### Button with Click Handler

```astro
<Button text="Submit" onClick="handleSubmit()" type="submit" />
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **required** | Button label text content |
| `href` | `string` | - | Navigation URL (renders as `<a>`) |
| `onClick` | `string` | - | Click handler (renders as `<button>`) |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disables interaction |
| `isLoading` | `boolean` | `false` | Shows loading spinner |
| `iconPosition` | `'leading' \| 'trailing'` | `'leading'` | Icon placement |
| `fullWidth` | `boolean` | `false` | Stretches to container width |
| `ariaLabel` | `string` | - | Accessible label for screen readers |
| `ariaDescribedBy` | `string` | - | ID of describing element |
| `openInNewTab` | `boolean` | `false` | Opens link in new tab |
| `class` | `string` | - | Additional CSS classes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `id` | `string` | - | Element ID |
| `name` | `string` | - | Form field name |
| `value` | `string` | - | Form field value |
| `form` | `string` | - | Associated form ID |

## Variants

### Primary Variant

High-emphasis buttons for main actions like CTAs, form submissions, or primary navigation.

```astro
<Button text="Start Free Trial" href="/signup" variant="primary" />
<Button text="Contact Us" href="/contact" variant="primary" size="large" />
```

**Visual characteristics:**
- Solid background using `--color-primary`
- White text for contrast
- Shadow for depth
- Hover: Darkened background, elevated shadow
- Active: Deeper color, pressed shadow

### Secondary Variant

Medium-emphasis buttons for secondary actions, alternative options, or less prominent CTAs.

```astro
<Button text="View Details" href="/details" variant="secondary" />
<Button text="Cancel" onClick="handleCancel()" variant="secondary" />
```

**Visual characteristics:**
- Transparent background with border
- Primary-colored text and border
- Hover: Light background tint
- Active: Darker background tint

## Sizes

### Small (32px height)

Compact size for dense UIs, tables, or inline actions.

```astro
<Button text="Edit" variant="secondary" size="small" />
```

### Medium (40px height) - Default

Standard size for most use cases.

```astro
<Button text="Save Changes" variant="primary" size="medium" />
```

### Large (48px height)

Prominent size for hero sections, landing pages, or important CTAs.

```astro
<Button text="Get Started Now" variant="primary" size="large" />
```

## States

### Disabled State

Prevents interaction and shows visual indication.

```astro
<Button text="Unavailable" variant="primary" disabled />
<Button text="Coming Soon" variant="secondary" disabled />
```

### Loading State

Shows a spinner and prevents interaction during async operations.

```astro
<Button text="Submitting..." variant="primary" isLoading />
<Button text="Processing..." variant="secondary" isLoading />
```

## Icon Support

Icons are passed via the `icon` slot and positioned using `iconPosition`.

### Leading Icon (Default)

```astro
<Button text="Download" variant="primary" iconPosition="leading">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.5l-5-5h3V4h4v6.5h3l-5 5zM5 18h14v2H5v-2z"/>
  </svg>
</Button>
```

### Trailing Icon

```astro
<Button text="Next" variant="primary" iconPosition="trailing">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
  </svg>
</Button>
```

## Full Width

Stretches the button to fill its container width.

```astro
<Button text="Sign Up for Free" variant="primary" fullWidth />
```

## Link Behavior

### Internal Navigation

```astro
<Button text="About Us" href="/about" />
```

### External Link (New Tab)

Automatically adds `rel="noopener noreferrer"` for security.

```astro
<Button text="Visit GitHub" href="https://github.com" openInNewTab />
```

## Form Integration

### Submit Button

```astro
<form>
  <Button text="Submit Form" variant="primary" type="submit" />
</form>
```

### Button Outside Form

```astro
<Button text="Submit" type="submit" form="my-form" />
```

### With Name/Value

```astro
<Button text="Save Draft" type="submit" name="action" value="draft" />
```

## Accessibility

### Keyboard Navigation

- **Tab**: Focus the button
- **Enter** or **Space**: Activate the button
- Focus indicator is visible and meets WCAG 2.1 AA contrast requirements

### Screen Reader Support

Use `ariaLabel` when the button text alone doesn't convey the full meaning:

```astro
<Button
  text="X"
  variant="secondary"
  ariaLabel="Close dialog"
  onClick="closeModal()"
/>
```

Use `ariaDescribedBy` to associate with additional descriptive text:

```astro
<p id="save-hint">All changes will be saved to your account</p>
<Button text="Save" ariaDescribedBy="save-hint" />
```

### Focus Management

The button automatically:
- Shows a visible focus ring on keyboard focus (`:focus-visible`)
- Hides the focus ring for mouse users (`:focus:not(:focus-visible)`)
- Uses high-contrast colors for focus indicators

### Reduced Motion

Animations are disabled when the user prefers reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  /* Transitions and animations are disabled */
}
```

### High Contrast Mode

Styles adapt for Windows High Contrast mode using `forced-colors` media query.

## Design Tokens

The Button component uses the following CSS custom properties from the design system:

### Colors
- `--color-primary`, `--color-primary-hover`, `--color-primary-active`
- `--color-primary-50`, `--color-primary-100`, `--color-primary-disabled`
- `--color-text-inverse`, `--color-text-disabled`
- `--color-background`, `--color-border-dark`

### Typography
- `--font-body`
- `--font-size-sm`, `--font-size-base`, `--font-size-md`
- `--font-weight-semibold`
- `--line-height-none`

### Spacing
- `--spacing-1-5`, `--spacing-2`, `--spacing-2-5`, `--spacing-3`
- `--spacing-4`, `--spacing-5`, `--spacing-6`

### Visual
- `--radius-lg`
- `--shadow-xs`, `--shadow-sm`, `--shadow-md`
- `--border-width-2`

### Animation
- `--duration-150`
- `--ease-in-out`

### Focus
- `--focus-ring-width`, `--focus-ring-offset`, `--focus-ring-color`

## Examples

### Hero Section CTA

```astro
<section class="hero">
  <h1>Welcome to Our Platform</h1>
  <p>Start building amazing things today.</p>
  <div class="hero-actions">
    <Button text="Get Started Free" href="/signup" variant="primary" size="large" />
    <Button text="Watch Demo" href="/demo" variant="secondary" size="large" />
  </div>
</section>
```

### Card Actions

```astro
<div class="card">
  <h3>Premium Plan</h3>
  <p>$29/month</p>
  <Button text="Subscribe" href="/checkout" variant="primary" fullWidth />
</div>
```

### Form with Loading State

```astro
---
const isSubmitting = false;
---
<form>
  <input type="email" placeholder="Enter your email" />
  <Button
    text={isSubmitting ? "Subscribing..." : "Subscribe"}
    variant="primary"
    type="submit"
    isLoading={isSubmitting}
    fullWidth
  />
</form>
```

### Navigation Buttons

```astro
<nav class="pagination">
  <Button text="Previous" variant="secondary" iconPosition="leading">
    <svg slot="icon"><!-- left arrow --></svg>
  </Button>
  <Button text="Next" variant="secondary" iconPosition="trailing">
    <svg slot="icon"><!-- right arrow --></svg>
  </Button>
</nav>
```

## Browser Support

The Button component is tested and supported in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome for Android (latest)

Screen reader testing:
- NVDA (Windows)
- VoiceOver (macOS, iOS)
- JAWS (Windows)

## Customization

### Adding Custom Classes

```astro
<Button text="Custom" class="my-custom-class" />
```

### Overriding Styles

Target the component classes in your CSS:

```css
/* Override primary button color */
.btn--primary {
  background-color: #ff6600;
}

/* Custom hover effect */
.btn--primary:hover:not(.btn--disabled) {
  background-color: #ff8533;
}
```

## TypeScript

Import types for use in your components:

```typescript
import type { ButtonProps, ButtonVariant, ButtonSize } from '../types/button';
```

Or from the central types export:

```typescript
import type { ButtonProps, ButtonVariant, ButtonSize } from '../types';
```
