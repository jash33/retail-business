
🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "in_progress",
      "activeForm": "Exploring existing dark mode setup"
    }
  ]
}
Let me start by exploring the codebase to understand the existing dark mode setup.

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{ts,tsx,js,jsx,css,scss}"
}

🔧 Tool: Grep
Input: {
  "pattern": "dark|theme|mode",
  "-i": true
}
Let me search more specifically in the source code for dark mode related files:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{ts,tsx,js,jsx,css,astro}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\globals.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\variables.css"
}
I found the dark mode preparation section in the variables.css file. Now let me examine the Header component and Layout to understand where to add a toggle:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}
Excellent! Now I have a clear picture of the codebase. Let me update my todo list and start implementing:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "completed",
      "activeForm": "Exploring existing dark mode setup"
    },
    {
      "content": "Uncomment and enhance dark mode CSS variables in variables.css",
      "status": "in_progress",
      "activeForm": "Enabling dark mode CSS variables"
    },
    {
      "content": "Create ThemeToggle component for switching between light/dark modes",
      "status": "pending",
      "activeForm": "Creating ThemeToggle component"
    },
    {
      "content": "Integrate ThemeToggle into Header component",
      "status": "pending",
      "activeForm": "Integrating ThemeToggle into Header"
    },
    {
      "content": "Add dark mode initialization script to Layout to prevent flash",
      "status": "pending",
      "activeForm": "Adding dark mode initialization script"
    }
  ]
}
Now let me implement dark mode. First, I'll update the variables.css file to enable the dark mode variables:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\variables.css",
  "old_string": "/* =================================================================\n * DARK MODE PREPARATION\n * =================================================================\n * Uncomment and customize when implementing dark mode.\n * Variables are structured to allow easy theme switching.\n *\n * Usage: Add class=\"dark\" to html element or use media query\n * =================================================================\n */\n\n/*\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-background: #0f172a;\n    --color-background-subtle: #1e293b;\n    --color-background-muted: #334155;\n    --color-background-elevated: #1e293b;\n\n    --color-text-primary: #f8fafc;\n    --color-text-secondary: #cbd5e1;\n    --color-text-tertiary: #94a3b8;\n    --color-text-disabled: #64748b;\n\n    --color-border: #334155;\n    --color-border-light: #1e293b;\n    --color-border-dark: #475569;\n  }\n}\n*/\n\n/* Alternative: Class-based dark mode */\n/*\n.dark {\n  --color-background: #0f172a;\n  --color-background-subtle: #1e293b;\n  --color-background-muted: #334155;\n  --color-background-elevated: #1e293b;\n\n  --color-text-primary: #f8fafc;\n  --color-text-secondary: #cbd5e1;\n  --color-text-tertiary: #94a3b8;\n  --color-text-disabled: #64748b;\n\n  --color-border: #334155;\n  --color-border-light: #1e293b;\n  --color-border-dark: #475569;\n}\n*/",
  "new_string": "/* =================================================================\n * DARK MODE\n * =================================================================\n * Dark mode is implemented using a class-based approach with\n * localStorage persistence and system preference detection.\n *\n * Theme Priority:\n * 1. User preference (stored in localStorage)\n * 2. System preference (prefers-color-scheme)\n * 3. Default: light mode\n *\n * Usage:\n * - Add data-theme=\"dark\" to html element for dark mode\n * - Use ThemeToggle component to switch themes\n * =================================================================\n */\n\n/* Dark mode styles using data-theme attribute */\nhtml[data-theme=\"dark\"] {\n  /* Background Colors */\n  --color-background: #0f172a;\n  --color-background-subtle: #1e293b;\n  --color-background-muted: #334155;\n  --color-background-elevated: #1e293b;\n  --color-background-overlay: rgba(0, 0, 0, 0.75);\n  --color-background-inverse: #f8fafc;\n\n  /* Text Colors */\n  --color-text-primary: #f8fafc;\n  --color-text-secondary: #cbd5e1;\n  --color-text-tertiary: #94a3b8;\n  --color-text-disabled: #64748b;\n  --color-text-placeholder: #64748b;\n  --color-text-inverse: #0f172a;\n  --color-text-link: var(--color-primary-300);\n  --color-text-link-hover: var(--color-primary-200);\n\n  /* Border Colors */\n  --color-border: #334155;\n  --color-border-light: #1e293b;\n  --color-border-dark: #475569;\n  --color-border-focus: var(--color-primary-400);\n\n  /* Primary Colors - Adjusted for dark mode visibility */\n  --color-primary: var(--color-primary-400);\n  --color-primary-hover: var(--color-primary-300);\n  --color-primary-active: var(--color-primary-500);\n\n  /* Semantic Colors - Adjusted for dark mode */\n  --color-success-light: #064e3b;\n  --color-success-text: #6ee7b7;\n  --color-warning-light: #78350f;\n  --color-warning-text: #fcd34d;\n  --color-error-light: #7f1d1d;\n  --color-error-text: #fca5a5;\n  --color-info-light: #1e3a8a;\n  --color-info-text: #93c5fd;\n\n  /* Shadows - Adjusted for dark mode */\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.15);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.2);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.4);\n  --shadow-primary: 0 4px 14px 0 rgb(84 109 165 / 0.35);\n  --shadow-primary-lg: 0 10px 25px -3px rgb(84 109 165 / 0.4);\n\n  /* Focus ring for dark mode */\n  --focus-ring-color: var(--color-primary-400);\n\n  /* Selection color for dark mode */\n  color-scheme: dark;\n}\n\n/* Selection styling for dark mode */\nhtml[data-theme=\"dark\"] ::selection {\n  background-color: var(--color-primary-700);\n  color: var(--color-primary-100);\n}"
}
Now let me update the todo list and create the ThemeToggle component:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "completed",
      "activeForm": "Exploring existing dark mode setup"
    },
    {
      "content": "Uncomment and enhance dark mode CSS variables in variables.css",
      "status": "completed",
      "activeForm": "Enabling dark mode CSS variables"
    },
    {
      "content": "Create ThemeToggle component for switching between light/dark modes",
      "status": "in_progress",
      "activeForm": "Creating ThemeToggle component"
    },
    {
      "content": "Integrate ThemeToggle into Header component",
      "status": "pending",
      "activeForm": "Integrating ThemeToggle into Header"
    },
    {
      "content": "Add dark mode initialization script to Layout to prevent flash",
      "status": "pending",
      "activeForm": "Adding dark mode initialization script"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\ThemeToggle.astro",
  "content": "---\n/**\n * Theme Toggle Component\n * A button to switch between light and dark themes.\n *\n * Features:\n * - Persists theme preference in localStorage\n * - Respects system preference (prefers-color-scheme) as default\n * - Smooth transition between themes\n * - Accessible with proper ARIA labels\n * - No flash of incorrect theme on page load\n *\n * @example\n * ```astro\n * <ThemeToggle />\n * ```\n */\n\ninterface Props {\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst { class: className } = Astro.props;\n---\n\n<button\n  type=\"button\"\n  class:list={['theme-toggle', className]}\n  id=\"theme-toggle\"\n  aria-label=\"Toggle dark mode\"\n  title=\"Toggle dark mode\"\n>\n  <!-- Sun icon (shown in dark mode, clicking switches to light) -->\n  <svg\n    class=\"theme-toggle__icon theme-toggle__icon--sun\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"20\"\n    height=\"20\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    aria-hidden=\"true\"\n  >\n    <circle cx=\"12\" cy=\"12\" r=\"5\"></circle>\n    <line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line>\n    <line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line>\n    <line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line>\n    <line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line>\n    <line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line>\n    <line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line>\n    <line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line>\n    <line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>\n  </svg>\n\n  <!-- Moon icon (shown in light mode, clicking switches to dark) -->\n  <svg\n    class=\"theme-toggle__icon theme-toggle__icon--moon\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"20\"\n    height=\"20\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    aria-hidden=\"true\"\n  >\n    <path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>\n  </svg>\n</button>\n\n<style>\n  .theme-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 44px;\n    min-height: 44px;\n    padding: var(--spacing-2);\n    background: transparent;\n    border: none;\n    border-radius: var(--radius-md);\n    cursor: pointer;\n    color: var(--color-text-secondary);\n    transition: background-color var(--duration-150) var(--ease-in-out),\n                color var(--duration-150) var(--ease-in-out);\n  }\n\n  .theme-toggle:hover {\n    background-color: var(--color-primary-50);\n    color: var(--color-primary);\n  }\n\n  .theme-toggle:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  /* Dark mode hover state */\n  :global(html[data-theme=\"dark\"]) .theme-toggle:hover {\n    background-color: var(--color-background-muted);\n    color: var(--color-primary-300);\n  }\n\n  .theme-toggle__icon {\n    width: 20px;\n    height: 20px;\n    transition: opacity var(--duration-150) var(--ease-in-out),\n                transform var(--duration-300) var(--ease-in-out);\n  }\n\n  /* By default (light mode): show moon, hide sun */\n  .theme-toggle__icon--sun {\n    display: none;\n    opacity: 0;\n  }\n\n  .theme-toggle__icon--moon {\n    display: block;\n    opacity: 1;\n  }\n\n  /* In dark mode: show sun, hide moon */\n  :global(html[data-theme=\"dark\"]) .theme-toggle__icon--sun {\n    display: block;\n    opacity: 1;\n  }\n\n  :global(html[data-theme=\"dark\"]) .theme-toggle__icon--moon {\n    display: none;\n    opacity: 0;\n  }\n\n  /* Animation on theme change */\n  .theme-toggle__icon--sun {\n    transform: rotate(-90deg);\n  }\n\n  :global(html[data-theme=\"dark\"]) .theme-toggle__icon--sun {\n    transform: rotate(0deg);\n  }\n\n  /* Reduced motion preference */\n  @media (prefers-reduced-motion: reduce) {\n    .theme-toggle__icon {\n      transition: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Theme Toggle Functionality\n   * Handles theme switching with localStorage persistence and system preference detection.\n   */\n  function initThemeToggle() {\n    const THEME_KEY = 'houston-theme';\n    const DARK = 'dark';\n    const LIGHT = 'light';\n\n    const toggle = document.getElementById('theme-toggle');\n    if (!toggle) return;\n\n    /**\n     * Get the current theme from localStorage or system preference\n     */\n    function getPreferredTheme(): string {\n      const stored = localStorage.getItem(THEME_KEY);\n      if (stored) return stored;\n\n      // Check system preference\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        return DARK;\n      }\n      return LIGHT;\n    }\n\n    /**\n     * Apply the theme to the document\n     */\n    function applyTheme(theme: string) {\n      const html = document.documentElement;\n\n      if (theme === DARK) {\n        html.setAttribute('data-theme', DARK);\n        toggle.setAttribute('aria-label', 'Switch to light mode');\n        toggle.setAttribute('title', 'Switch to light mode');\n      } else {\n        html.removeAttribute('data-theme');\n        toggle.setAttribute('aria-label', 'Switch to dark mode');\n        toggle.setAttribute('title', 'Switch to dark mode');\n      }\n    }\n\n    /**\n     * Toggle between light and dark themes\n     */\n    function toggleTheme() {\n      const currentTheme = document.documentElement.getAttribute('data-theme');\n      const newTheme = currentTheme === DARK ? LIGHT : DARK;\n\n      localStorage.setItem(THEME_KEY, newTheme);\n      applyTheme(newTheme);\n    }\n\n    // Apply the initial theme\n    applyTheme(getPreferredTheme());\n\n    // Listen for toggle clicks\n    toggle.addEventListener('click', toggleTheme);\n\n    // Listen for system preference changes\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {\n      // Only update if user hasn't set a preference\n      if (!localStorage.getItem(THEME_KEY)) {\n        applyTheme(e.matches ? DARK : LIGHT);\n      }\n    });\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initThemeToggle);\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initThemeToggle);\n</script>\n"
}
Now let me update the todo list and integrate the ThemeToggle into the Header:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "completed",
      "activeForm": "Exploring existing dark mode setup"
    },
    {
      "content": "Uncomment and enhance dark mode CSS variables in variables.css",
      "status": "completed",
      "activeForm": "Enabling dark mode CSS variables"
    },
    {
      "content": "Create ThemeToggle component for switching between light/dark modes",
      "status": "completed",
      "activeForm": "Creating ThemeToggle component"
    },
    {
      "content": "Integrate ThemeToggle into Header component",
      "status": "in_progress",
      "activeForm": "Integrating ThemeToggle into Header"
    },
    {
      "content": "Add dark mode initialization script to Layout to prevent flash",
      "status": "pending",
      "activeForm": "Adding dark mode initialization script"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "---\n/**\n * Global Header Component\n * Primary navigation header with responsive mobile menu functionality.\n *\n * Features:\n * - Sticky positioning (remains visible during scroll)\n * - Responsive hamburger menu for mobile (≤768px)\n * - Full accessibility support (ARIA labels, keyboard navigation)\n * - Smooth transitions for mobile menu animation\n * - Touch-friendly tap targets (minimum 44x44px)\n *\n * @example\n * ```astro\n * <Header currentPath=\"/\" />\n * ```\n */\n\ninterface Props {\n  /** Current page path for active link styling (e.g., \"/\", \"/about\") */\n  currentPath?: string;\n}\n\nconst { currentPath = '/' } = Astro.props;\n\n// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/services', label: 'Services' },\n  { href: '/portfolio', label: 'Portfolio' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];\n---",
  "new_string": "---\n/**\n * Global Header Component\n * Primary navigation header with responsive mobile menu functionality.\n *\n * Features:\n * - Sticky positioning (remains visible during scroll)\n * - Responsive hamburger menu for mobile (≤768px)\n * - Full accessibility support (ARIA labels, keyboard navigation)\n * - Smooth transitions for mobile menu animation\n * - Touch-friendly tap targets (minimum 44x44px)\n * - Dark mode toggle integration\n *\n * @example\n * ```astro\n * <Header currentPath=\"/\" />\n * ```\n */\n\nimport ThemeToggle from './ThemeToggle.astro';\n\ninterface Props {\n  /** Current page path for active link styling (e.g., \"/\", \"/about\") */\n  currentPath?: string;\n}\n\nconst { currentPath = '/' } = Astro.props;\n\n// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/services', label: 'Services' },\n  { href: '/portfolio', label: 'Portfolio' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];\n---"
}
Now let me add the ThemeToggle to the header navigation area:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "    <!-- Desktop Navigation -->\n    <nav class=\"header__nav\" aria-label=\"Main navigation\">\n      <ul class=\"header__nav-list\" role=\"list\">\n        {navLinks.map((link) => (\n          <li class=\"header__nav-item\">\n            <a\n              href={link.href}\n              class:list={['header__nav-link', { 'header__nav-link--active': currentPath === link.href }]}\n              aria-current={currentPath === link.href ? 'page' : undefined}\n            >\n              {link.label}\n            </a>\n          </li>\n        ))}\n      </ul>\n    </nav>\n\n    <!-- Mobile Menu Button -->",
  "new_string": "    <!-- Desktop Navigation -->\n    <nav class=\"header__nav\" aria-label=\"Main navigation\">\n      <ul class=\"header__nav-list\" role=\"list\">\n        {navLinks.map((link) => (\n          <li class=\"header__nav-item\">\n            <a\n              href={link.href}\n              class:list={['header__nav-link', { 'header__nav-link--active': currentPath === link.href }]}\n              aria-current={currentPath === link.href ? 'page' : undefined}\n            >\n              {link.label}\n            </a>\n          </li>\n        ))}\n      </ul>\n    </nav>\n\n    <!-- Theme Toggle (Desktop) -->\n    <div class=\"header__actions\">\n      <ThemeToggle class=\"header__theme-toggle\" />\n    </div>\n\n    <!-- Mobile Menu Button -->"
}
Now I need to add a theme toggle to the mobile menu as well and add styles for the header actions area. Let me first read the current state of the header to see where the mobile menu ends:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "offset": 80,
  "limit": 50
}
Now let me add a theme toggle in the mobile menu:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "    <!-- Mobile Navigation Menu -->\n    <nav\n      id=\"mobile-menu\"\n      class=\"header__mobile-nav\"\n      aria-label=\"Mobile navigation\"\n      aria-hidden=\"true\"\n    >\n      <ul class=\"header__mobile-nav-list\" role=\"list\">\n        {navLinks.map((link, index) => (\n          <li class=\"header__mobile-nav-item\" style={`--item-index: ${index}`}>\n            <a\n              href={link.href}\n              class:list={['header__mobile-nav-link', { 'header__mobile-nav-link--active': currentPath === link.href }]}\n              aria-current={currentPath === link.href ? 'page' : undefined}\n              tabindex=\"-1\"\n            >\n              {link.label}\n            </a>\n          </li>\n        ))}\n      </ul>\n    </nav>",
  "new_string": "    <!-- Mobile Navigation Menu -->\n    <nav\n      id=\"mobile-menu\"\n      class=\"header__mobile-nav\"\n      aria-label=\"Mobile navigation\"\n      aria-hidden=\"true\"\n    >\n      <ul class=\"header__mobile-nav-list\" role=\"list\">\n        {navLinks.map((link, index) => (\n          <li class=\"header__mobile-nav-item\" style={`--item-index: ${index}`}>\n            <a\n              href={link.href}\n              class:list={['header__mobile-nav-link', { 'header__mobile-nav-link--active': currentPath === link.href }]}\n              aria-current={currentPath === link.href ? 'page' : undefined}\n              tabindex=\"-1\"\n            >\n              {link.label}\n            </a>\n          </li>\n        ))}\n      </ul>\n\n      <!-- Mobile Theme Toggle Section -->\n      <div class=\"header__mobile-actions\" style={`--item-index: ${navLinks.length}`}>\n        <div class=\"header__mobile-theme-toggle\">\n          <span class=\"header__mobile-theme-label\">Theme</span>\n          <ThemeToggle class=\"header__theme-toggle--mobile\" />\n        </div>\n      </div>\n    </nav>"
}
Now I need to add CSS styles for the new header elements. Let me read the styles section of the header to find the right place to add them:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "offset": 380,
  "limit": 80
}
Now let me add the styles for the header actions and mobile theme toggle before the responsive styles:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "  /* Active/Current page link styling for mobile */\n  .header__mobile-nav-link--active {\n    color: var(--color-primary);\n    font-weight: var(--font-weight-semibold);\n    background-color: var(--color-primary-50);\n    border-left: 3px solid var(--color-primary);\n  }\n\n  /* -----------------------------------------------------------------\n   * Responsive Styles\n   * ----------------------------------------------------------------- */",
  "new_string": "  /* Active/Current page link styling for mobile */\n  .header__mobile-nav-link--active {\n    color: var(--color-primary);\n    font-weight: var(--font-weight-semibold);\n    background-color: var(--color-primary-50);\n    border-left: 3px solid var(--color-primary);\n  }\n\n  /* -----------------------------------------------------------------\n   * Header Actions (Theme Toggle, etc.)\n   * ----------------------------------------------------------------- */\n\n  .header__actions {\n    display: none;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  /* Mobile Actions Section */\n  .header__mobile-actions {\n    margin-top: var(--spacing-6);\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border);\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-actions {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-theme-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-2) var(--spacing-4);\n  }\n\n  .header__mobile-theme-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n  }\n\n  /* -----------------------------------------------------------------\n   * Responsive Styles\n   * ----------------------------------------------------------------- */"
}
Now let me update the responsive styles to show the header actions on desktop:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "  /* Tablet and Desktop (>768px) */\n  @media screen and (min-width: 769px) {\n    .header__nav {\n      display: block;\n    }\n\n    .header__menu-toggle {\n      display: none;\n    }\n\n    .header__mobile-nav {\n      display: none;\n    }\n  }",
  "new_string": "  /* Tablet and Desktop (>768px) */\n  @media screen and (min-width: 769px) {\n    .header__nav {\n      display: block;\n    }\n\n    .header__actions {\n      display: flex;\n    }\n\n    .header__menu-toggle {\n      display: none;\n    }\n\n    .header__mobile-nav {\n      display: none;\n    }\n  }"
}
Now I need to add the reduced motion preference for the mobile actions and add the dark mode initialization script to the Layout. Let me update the todo and add the initialization script:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "completed",
      "activeForm": "Exploring existing dark mode setup"
    },
    {
      "content": "Uncomment and enhance dark mode CSS variables in variables.css",
      "status": "completed",
      "activeForm": "Enabling dark mode CSS variables"
    },
    {
      "content": "Create ThemeToggle component for switching between light/dark modes",
      "status": "completed",
      "activeForm": "Creating ThemeToggle component"
    },
    {
      "content": "Integrate ThemeToggle into Header component",
      "status": "completed",
      "activeForm": "Integrating ThemeToggle into Header"
    },
    {
      "content": "Add dark mode initialization script to Layout to prevent flash",
      "status": "in_progress",
      "activeForm": "Adding dark mode initialization script"
    }
  ]
}
Now let me update the reduced motion preference in the Header to include the mobile actions:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "old_string": "  @media (prefers-reduced-motion: reduce) {\n    .header__menu-bar,\n    .header__mobile-nav,\n    .header__mobile-nav-item {\n      transition: none;\n    }\n  }",
  "new_string": "  @media (prefers-reduced-motion: reduce) {\n    .header__menu-bar,\n    .header__mobile-nav,\n    .header__mobile-nav-item,\n    .header__mobile-actions {\n      transition: none;\n    }\n  }"
}
Now let me add the dark mode initialization script to the Layout to prevent flash of incorrect theme on page load:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro",
  "old_string": "<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<!-- Charset must be within first 1024 bytes -->\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />",
  "new_string": "<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<!-- Charset must be within first 1024 bytes -->\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- Dark Mode Initialization - Runs before render to prevent flash -->\n\t\t<script is:inline>\n\t\t\t(function() {\n\t\t\t\tconst THEME_KEY = 'houston-theme';\n\t\t\t\tconst stored = localStorage.getItem(THEME_KEY);\n\t\t\t\tconst prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n\t\t\t\tif (stored === 'dark' || (!stored && prefersDark)) {\n\t\t\t\t\tdocument.documentElement.setAttribute('data-theme', 'dark');\n\t\t\t\t}\n\t\t\t})();\n\t\t</script>"
}
Now let me update the todo list and verify the implementation is complete:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore existing dark mode setup in the codebase",
      "status": "completed",
      "activeForm": "Exploring existing dark mode setup"
    },
    {
      "content": "Uncomment and enhance dark mode CSS variables in variables.css",
      "status": "completed",
      "activeForm": "Enabling dark mode CSS variables"
    },
    {
      "content": "Create ThemeToggle component for switching between light/dark modes",
      "status": "completed",
      "activeForm": "Creating ThemeToggle component"
    },
    {
      "content": "Integrate ThemeToggle into Header component",
      "status": "completed",
      "activeForm": "Integrating ThemeToggle into Header"
    },
    {
      "content": "Add dark mode initialization script to Layout to prevent flash",
      "status": "completed",
      "activeForm": "Adding dark mode initialization script"
    }
  ]
}
Let me read through the full Header component to make sure everything is properly integrated:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro",
  "limit": 120
}
Everything looks good! Let me also verify that dark mode styles need some additional adjustments for some specific components. Let me check if there are any components that might need explicit dark mode styling:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Footer.astro"
}
The footer has a dark background already (using `--color-primary-900`) which works well in both light and dark modes, so it doesn't need modification.

Now let me verify the complete implementation by reading key files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\ThemeToggle.astro"
}
I notice a bug - when there are multiple ThemeToggle components on the page (one in desktop header, one in mobile menu), they'll both have the same id="theme-toggle". Let me fix this by using a class-based selector instead:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\ThemeToggle.astro",
  "old_string": "<button\n  type=\"button\"\n  class:list={['theme-toggle', className]}\n  id=\"theme-toggle\"\n  aria-label=\"Toggle dark mode\"\n  title=\"Toggle dark mode\"\n>",
  "new_string": "<button\n  type=\"button\"\n  class:list={['theme-toggle', className]}\n  data-theme-toggle\n  aria-label=\"Toggle dark mode\"\n  title=\"Toggle dark mode\"\n>"
}
Now let me update the script to work with all toggle buttons:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\ThemeToggle.astro",
  "old_string": "<script>\n  /**\n   * Theme Toggle Functionality\n   * Handles theme switching with localStorage persistence and system preference detection.\n   */\n  function initThemeToggle() {\n    const THEME_KEY = 'houston-theme';\n    const DARK = 'dark';\n    const LIGHT = 'light';\n\n    const toggle = document.getElementById('theme-toggle');\n    if (!toggle) return;\n\n    /**\n     * Get the current theme from localStorage or system preference\n     */\n    function getPreferredTheme(): string {\n      const stored = localStorage.getItem(THEME_KEY);\n      if (stored) return stored;\n\n      // Check system preference\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        return DARK;\n      }\n      return LIGHT;\n    }\n\n    /**\n     * Apply the theme to the document\n     */\n    function applyTheme(theme: string) {\n      const html = document.documentElement;\n\n      if (theme === DARK) {\n        html.setAttribute('data-theme', DARK);\n        toggle.setAttribute('aria-label', 'Switch to light mode');\n        toggle.setAttribute('title', 'Switch to light mode');\n      } else {\n        html.removeAttribute('data-theme');\n        toggle.setAttribute('aria-label', 'Switch to dark mode');\n        toggle.setAttribute('title', 'Switch to dark mode');\n      }\n    }\n\n    /**\n     * Toggle between light and dark themes\n     */\n    function toggleTheme() {\n      const currentTheme = document.documentElement.getAttribute('data-theme');\n      const newTheme = currentTheme === DARK ? LIGHT : DARK;\n\n      localStorage.setItem(THEME_KEY, newTheme);\n      applyTheme(newTheme);\n    }\n\n    // Apply the initial theme\n    applyTheme(getPreferredTheme());\n\n    // Listen for toggle clicks\n    toggle.addEventListener('click', toggleTheme);\n\n    // Listen for system preference changes\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {\n      // Only update if user hasn't set a preference\n      if (!localStorage.getItem(THEME_KEY)) {\n        applyTheme(e.matches ? DARK : LIGHT);\n      }\n    });\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initThemeToggle);\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initThemeToggle);\n</script>",
  "new_string": "<script>\n  /**\n   * Theme Toggle Functionality\n   * Handles theme switching with localStorage persistence and system preference detection.\n   * Supports multiple toggle buttons on the same page (e.g., desktop and mobile).\n   */\n  function initThemeToggle() {\n    const THEME_KEY = 'houston-theme';\n    const DARK = 'dark';\n    const LIGHT = 'light';\n\n    const toggles = document.querySelectorAll('[data-theme-toggle]');\n    if (toggles.length === 0) return;\n\n    /**\n     * Get the current theme from localStorage or system preference\n     */\n    function getPreferredTheme(): string {\n      const stored = localStorage.getItem(THEME_KEY);\n      if (stored) return stored;\n\n      // Check system preference\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        return DARK;\n      }\n      return LIGHT;\n    }\n\n    /**\n     * Update ARIA labels on all toggle buttons\n     */\n    function updateToggleLabels(isDark: boolean) {\n      const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';\n      toggles.forEach((toggle) => {\n        toggle.setAttribute('aria-label', label);\n        toggle.setAttribute('title', label);\n      });\n    }\n\n    /**\n     * Apply the theme to the document\n     */\n    function applyTheme(theme: string) {\n      const html = document.documentElement;\n      const isDark = theme === DARK;\n\n      if (isDark) {\n        html.setAttribute('data-theme', DARK);\n      } else {\n        html.removeAttribute('data-theme');\n      }\n\n      updateToggleLabels(isDark);\n    }\n\n    /**\n     * Toggle between light and dark themes\n     */\n    function toggleTheme() {\n      const currentTheme = document.documentElement.getAttribute('data-theme');\n      const newTheme = currentTheme === DARK ? LIGHT : DARK;\n\n      localStorage.setItem(THEME_KEY, newTheme);\n      applyTheme(newTheme);\n    }\n\n    // Apply the initial theme\n    applyTheme(getPreferredTheme());\n\n    // Listen for toggle clicks on all toggle buttons\n    toggles.forEach((toggle) => {\n      toggle.addEventListener('click', toggleTheme);\n    });\n\n    // Listen for system preference changes\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {\n      // Only update if user hasn't set a preference\n      if (!localStorage.getItem(THEME_KEY)) {\n        applyTheme(e.matches ? DARK : LIGHT);\n      }\n    });\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initThemeToggle);\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initThemeToggle);\n</script>"
}
The implementation is now complete. Let me verify everything looks good by reading the Layout file:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}
Excellent! The implementation is complete. Let me create a summary:

<summary>
## Summary: Make dark mode work and toggleable

### Changes Implemented
- **Enabled dark mode CSS variables** in `variables.css` - Uncommented and enhanced the dark mode color definitions with comprehensive overrides for backgrounds, text, borders, shadows, semantic colors, and selection styles
- **Created ThemeToggle component** (`ThemeToggle.astro`) - A fully accessible button component with:
  - Sun/Moon icons that swap based on current theme
  - LocalStorage persistence of theme preference
  - System preference detection (prefers-color-scheme)
  - Smooth transitions and animations
  - ARIA labels that update dynamically
  - Support for multiple instances on the same page
- **Integrated ThemeToggle into Header** - Added the toggle button in two locations:
  - Desktop: Visible in the header actions area next to navigation
  - Mobile: Added to the mobile navigation menu with a "Theme" label
- **Added dark mode initialization script** to Layout - Inline script that runs before render to prevent flash of incorrect theme (FOUC)

### Files Modified
- `src/styles/variables.css` - Added complete dark mode color system using `html[data-theme="dark"]` selector
- `src/components/ThemeToggle.astro` - **NEW FILE** - Theme toggle button component
- `src/components/Header.astro` - Integrated ThemeToggle component for both desktop and mobile views
- `src/layouts/Layout.astro` - Added inline script for early theme detection

### Notes for Developer
- **Theme persistence**: Theme preference is saved in localStorage under the key `houston-theme`
- **System preference**: If no user preference is saved, the system preference (light/dark) is respected
- **No flash**: The inline script in the Layout head ensures the correct theme is applied before any content renders
- **Accessibility**: Toggle button has proper ARIA labels that update based on current state
- **Multiple toggles**: Both desktop and mobile toggles stay in sync and work independently
- **Transitions**: All theme-related transitions respect `prefers-reduced-motion` preference
</summary>