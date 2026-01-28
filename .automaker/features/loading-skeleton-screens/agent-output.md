
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand the existing structure for implementing skeleton loading states. I need to find:\n\n1. The project structure and framework being used (React, Vue, etc.)\n2. Existing product grid components\n3. Existing product detail page components\n4. Any existing loading states or skeleton components\n5. CSS/styling approach used (CSS modules, styled-components, Tailwind, etc.)\n6. Any existing UI component library being used\n\nPlease provide a comprehensive overview of the relevant files and patterns found.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\"",
  "description": "List root directory contents"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\README.md"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type f -name \"*.astro\" -o -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.jsx\" -o -name \"*.css\" | head -50",
  "description": "Find all source files in src directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{astro,ts,tsx,jsx,css}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductGrid.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\product.ts",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"skeleton\\|loading\\|shimmer\\|placeholder\" \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" --include=\"*.astro\" | head -20",
  "description": "Search for skeleton/loading state mentions"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" | grep -i \"skeleton\\|loading\\|shimmer\"",
  "description": "Check for skeleton/loading component files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\CollectionCard.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"keyframes\\|@keyframes\\|animation\" \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\" | head -30",
  "description": "Find animation keyframes defined"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\performance.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\index.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "limit": 100
}

🔧 Tool: Bash
Input: {
  "command": "tree \"C:\\Users\\James\\Repos\\retail-business\\src\" -L 2 -I \"node_modules\" 2>/dev/null || find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type d | head -30",
  "description": "Show source directory structure"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts\\Layout.astro",
  "limit": 100
}
Now I have a comprehensive understanding of the codebase. Let me read the key files to understand the exact implementation patterns before creating the skeleton components.

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\performance.css"
}
Now let me read the ProductGrid component and variables.css to complete my understanding:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductGrid.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css"
}
Now I have a comprehensive understanding of the codebase. Let me create the skeleton loading components. I'll create:

1. `ProductCardSkeleton.astro` - Skeleton for individual product cards
2. `ProductGridSkeleton.astro` - Skeleton for product grids (multiple cards)
3. `ProductDetailsSkeleton.astro` - Skeleton for product detail pages

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductCardSkeleton component",
      "status": "in_progress",
      "activeForm": "Creating ProductCardSkeleton component"
    },
    {
      "content": "Create ProductGridSkeleton component",
      "status": "pending",
      "activeForm": "Creating ProductGridSkeleton component"
    },
    {
      "content": "Create ProductDetailsSkeleton component",
      "status": "pending",
      "activeForm": "Creating ProductDetailsSkeleton component"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCardSkeleton.astro",
  "content": "---\n/**\n * ProductCardSkeleton Component\n * A skeleton loading placeholder for ProductCard that provides visual feedback\n * during content loading. Improves perceived performance by showing the\n * structure of incoming content.\n *\n * Features:\n * - Shimmer animation matching ProductCard design\n * - Configurable aspect ratio (4:5 or 1:1)\n * - Shows placeholder for image, name, category, and price\n * - Full accessibility support with aria-hidden\n * - Reduced motion support\n * - Dark mode support\n *\n * @example Basic usage\n * ```astro\n * <ProductCardSkeleton />\n * ```\n *\n * @example With custom aspect ratio\n * ```astro\n * <ProductCardSkeleton aspectRatio=\"1:1\" />\n * ```\n *\n * @example With animation disabled\n * ```astro\n * <ProductCardSkeleton animate={false} />\n * ```\n */\n\ninterface Props {\n  /** Aspect ratio for the image placeholder */\n  aspectRatio?: '4:5' | '1:1';\n  /** Whether to show the shimmer animation */\n  animate?: boolean;\n  /** Whether to show the category placeholder */\n  showCategory?: boolean;\n  /** Whether to show the description placeholder */\n  showDescription?: boolean;\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst {\n  aspectRatio = '4:5',\n  animate = true,\n  showCategory = true,\n  showDescription = false,\n  class: className = '',\n} = Astro.props;\n\n// Calculate aspect ratio CSS value\nconst aspectRatioCss = aspectRatio === '4:5' ? '4 / 5' : '1 / 1';\n\n// Build CSS classes\nconst skeletonClasses = [\n  'product-card-skeleton',\n  animate && 'product-card-skeleton--animated',\n  className,\n].filter(Boolean).join(' ');\n---\n\n<article\n  class={skeletonClasses}\n  aria-hidden=\"true\"\n  role=\"presentation\"\n  style={`--skeleton-aspect-ratio: ${aspectRatioCss};`}\n>\n  <!-- Image Placeholder -->\n  <div class=\"product-card-skeleton__image\">\n    <div class=\"product-card-skeleton__shimmer\"></div>\n  </div>\n\n  <!-- Content Placeholder -->\n  <div class=\"product-card-skeleton__content\">\n    <!-- Category -->\n    {showCategory && (\n      <div class=\"product-card-skeleton__category\">\n        <div class=\"product-card-skeleton__shimmer\"></div>\n      </div>\n    )}\n\n    <!-- Name -->\n    <div class=\"product-card-skeleton__name\">\n      <div class=\"product-card-skeleton__shimmer\"></div>\n    </div>\n    <div class=\"product-card-skeleton__name product-card-skeleton__name--short\">\n      <div class=\"product-card-skeleton__shimmer\"></div>\n    </div>\n\n    <!-- Description -->\n    {showDescription && (\n      <div class=\"product-card-skeleton__description\">\n        <div class=\"product-card-skeleton__shimmer\"></div>\n      </div>\n    )}\n\n    <!-- Price -->\n    <div class=\"product-card-skeleton__price\">\n      <div class=\"product-card-skeleton__shimmer\"></div>\n    </div>\n  </div>\n</article>\n\n<style>\n  /* =================================================================\n   * PRODUCT CARD SKELETON STYLES\n   * =================================================================\n   * Skeleton loading placeholder matching ProductCard structure\n   * Uses design system variables for consistency\n   */\n\n  .product-card-skeleton {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n    /* Visual */\n    background-color: var(--color-background-elevated);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n  }\n\n  /* =================================================================\n   * IMAGE PLACEHOLDER\n   * ================================================================= */\n  .product-card-skeleton__image {\n    position: relative;\n    aspect-ratio: var(--skeleton-aspect-ratio, 4 / 5);\n    background-color: var(--color-background-muted);\n    overflow: hidden;\n  }\n\n  /* =================================================================\n   * CONTENT AREA\n   * ================================================================= */\n  .product-card-skeleton__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    padding: var(--spacing-4);\n    flex: 1;\n  }\n\n  /* Category placeholder */\n  .product-card-skeleton__category {\n    width: 40%;\n    height: 0.625rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  /* Name placeholder */\n  .product-card-skeleton__name {\n    width: 100%;\n    height: 1rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-card-skeleton__name--short {\n    width: 70%;\n  }\n\n  /* Description placeholder */\n  .product-card-skeleton__description {\n    width: 90%;\n    height: 0.875rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n    margin-top: var(--spacing-1);\n  }\n\n  /* Price placeholder */\n  .product-card-skeleton__price {\n    width: 30%;\n    height: 1.125rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n    margin-top: auto;\n    padding-top: var(--spacing-2);\n  }\n\n  /* =================================================================\n   * SHIMMER ANIMATION\n   * ================================================================= */\n  .product-card-skeleton__shimmer {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-subtle) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  /* Only animate when animation class is present */\n  .product-card-skeleton--animated .product-card-skeleton__shimmer {\n    animation: skeleton-shimmer 1.5s ease-in-out infinite;\n  }\n\n  @keyframes skeleton-shimmer {\n    0% {\n      background-position: 200% 0;\n    }\n    100% {\n      background-position: -200% 0;\n    }\n  }\n\n  /* Position shimmer in content elements */\n  .product-card-skeleton__category,\n  .product-card-skeleton__name,\n  .product-card-skeleton__description,\n  .product-card-skeleton__price {\n    position: relative;\n    overflow: hidden;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media screen and (max-width: 767px) {\n    .product-card-skeleton__content {\n      padding: var(--spacing-3);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .product-card-skeleton--animated .product-card-skeleton__shimmer {\n      animation: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton {\n    background-color: var(--color-background-elevated);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__image,\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__category,\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__name,\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__description,\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__price {\n    background-color: var(--color-background-muted);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-card-skeleton__shimmer {\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-elevated) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .product-card-skeleton {\n      border: 2px solid currentColor;\n    }\n\n    .product-card-skeleton__shimmer {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductCardSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductCardSkeleton component"
    },
    {
      "content": "Create ProductGridSkeleton component",
      "status": "in_progress",
      "activeForm": "Creating ProductGridSkeleton component"
    },
    {
      "content": "Create ProductDetailsSkeleton component",
      "status": "pending",
      "activeForm": "Creating ProductDetailsSkeleton component"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductGridSkeleton.astro",
  "content": "---\n/**\n * ProductGridSkeleton Component\n * A skeleton loading placeholder for ProductGrid that provides visual feedback\n * during content loading. Shows multiple ProductCardSkeleton components in a grid.\n *\n * Features:\n * - Configurable number of skeleton items\n * - Flexible column layouts (2, 3, or 4 columns)\n * - Responsive breakpoints matching ProductGrid\n * - Optional header skeleton\n * - Stagger animation for sequential reveal\n * - Full accessibility support\n * - Reduced motion support\n * - Dark mode support\n *\n * @example Basic usage (6 items, 3 columns)\n * ```astro\n * <ProductGridSkeleton count={6} columns={3} />\n * ```\n *\n * @example With header\n * ```astro\n * <ProductGridSkeleton\n *   count={8}\n *   columns={4}\n *   showHeader={true}\n * />\n * ```\n *\n * @example Custom responsive columns\n * ```astro\n * <ProductGridSkeleton\n *   count={6}\n *   responsiveColumns={{ mobile: 1, tablet: 2, desktop: 3 }}\n * />\n * ```\n */\n\nimport ProductCardSkeleton from './ProductCardSkeleton.astro';\n\ninterface Props {\n  /** Number of skeleton items to display */\n  count?: number;\n  /** Number of columns (2, 3, or 4) */\n  columns?: 2 | 3 | 4;\n  /** Gap between items */\n  gap?: 'small' | 'medium' | 'large';\n  /** Whether to show header skeleton */\n  showHeader?: boolean;\n  /** Whether to animate the skeletons */\n  animate?: boolean;\n  /** Whether to stagger the animation */\n  stagger?: boolean;\n  /** Aspect ratio for card skeletons */\n  aspectRatio?: '4:5' | '1:1';\n  /** Custom responsive columns */\n  responsiveColumns?: {\n    mobile?: number;\n    tablet?: number;\n    desktop?: number;\n  };\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst {\n  count = 6,\n  columns = 3,\n  gap = 'medium',\n  showHeader = false,\n  animate = true,\n  stagger = true,\n  aspectRatio = '4:5',\n  responsiveColumns,\n  class: className = '',\n} = Astro.props;\n\n// Build CSS classes\nconst gridClasses = [\n  'product-grid-skeleton',\n  `product-grid-skeleton--cols-${columns}`,\n  `product-grid-skeleton--gap-${gap}`,\n  animate && 'product-grid-skeleton--animated',\n  stagger && 'product-grid-skeleton--stagger',\n  className,\n].filter(Boolean).join(' ');\n\n// Get gap CSS value\nconst gapValues: Record<string, string> = {\n  small: 'var(--spacing-4)',\n  medium: 'var(--spacing-6)',\n  large: 'var(--spacing-8)',\n};\n\n// Build responsive column CSS custom properties\nconst responsiveColsStyle = responsiveColumns\n  ? `--grid-cols-mobile: ${responsiveColumns.mobile || 1}; --grid-cols-tablet: ${responsiveColumns.tablet || 2}; --grid-cols-desktop: ${responsiveColumns.desktop || columns};`\n  : '';\n\n// Create array of skeleton items\nconst skeletonItems = Array.from({ length: count }, (_, index) => index);\n---\n\n<section\n  class={gridClasses}\n  aria-hidden=\"true\"\n  role=\"presentation\"\n  aria-label=\"Loading products\"\n  style={`--grid-cols: ${columns}; --grid-gap: ${gapValues[gap]}; ${responsiveColsStyle}`}\n>\n  <div class=\"product-grid-skeleton__container\">\n    <!-- Header Skeleton -->\n    {showHeader && (\n      <header class=\"product-grid-skeleton__header\">\n        <div class=\"product-grid-skeleton__heading\">\n          <div class=\"product-grid-skeleton__shimmer\"></div>\n        </div>\n        <div class=\"product-grid-skeleton__subheading\">\n          <div class=\"product-grid-skeleton__shimmer\"></div>\n        </div>\n      </header>\n    )}\n\n    <!-- Grid Skeleton -->\n    <div class=\"product-grid-skeleton__grid\">\n      {skeletonItems.map((index) => (\n        <div\n          class=\"product-grid-skeleton__item\"\n          style={stagger ? `--stagger-delay: ${Math.min(index, 7) * 100}ms` : ''}\n        >\n          <ProductCardSkeleton\n            aspectRatio={aspectRatio}\n            animate={animate}\n          />\n        </div>\n      ))}\n    </div>\n  </div>\n</section>\n\n<style>\n  /* =================================================================\n   * PRODUCT GRID SKELETON STYLES\n   * =================================================================\n   * Skeleton loading placeholder matching ProductGrid structure\n   * Uses design system variables for consistency\n   */\n\n  .product-grid-skeleton {\n    padding: var(--spacing-8) var(--spacing-4);\n  }\n\n  .product-grid-skeleton__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  /* =================================================================\n   * HEADER SKELETON\n   * ================================================================= */\n  .product-grid-skeleton__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-4);\n  }\n\n  .product-grid-skeleton__heading {\n    position: relative;\n    width: 200px;\n    height: 2.25rem;\n    border-radius: var(--radius-md);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-grid-skeleton__subheading {\n    position: relative;\n    width: 320px;\n    max-width: 90%;\n    height: 1.25rem;\n    border-radius: var(--radius-md);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  /* =================================================================\n   * GRID\n   * ================================================================= */\n  .product-grid-skeleton__grid {\n    display: grid;\n    grid-template-columns: repeat(var(--grid-cols, 3), 1fr);\n    gap: var(--grid-gap, var(--spacing-6));\n  }\n\n  .product-grid-skeleton__item {\n    min-width: 0;\n  }\n\n  /* =================================================================\n   * SHIMMER ANIMATION\n   * ================================================================= */\n  .product-grid-skeleton__shimmer {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-subtle) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  .product-grid-skeleton--animated .product-grid-skeleton__shimmer {\n    animation: skeleton-shimmer 1.5s ease-in-out infinite;\n  }\n\n  @keyframes skeleton-shimmer {\n    0% {\n      background-position: 200% 0;\n    }\n    100% {\n      background-position: -200% 0;\n    }\n  }\n\n  /* =================================================================\n   * STAGGER ANIMATION\n   * ================================================================= */\n  .product-grid-skeleton--stagger .product-grid-skeleton__item {\n    opacity: 0;\n    animation: skeleton-fade-in 0.3s ease-out forwards;\n    animation-delay: var(--stagger-delay, 0ms);\n  }\n\n  @keyframes skeleton-fade-in {\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* =================================================================\n   * GAP VARIANTS\n   * ================================================================= */\n  .product-grid-skeleton--gap-small .product-grid-skeleton__grid {\n    gap: var(--spacing-4);\n  }\n\n  .product-grid-skeleton--gap-medium .product-grid-skeleton__grid {\n    gap: var(--spacing-6);\n  }\n\n  .product-grid-skeleton--gap-large .product-grid-skeleton__grid {\n    gap: var(--spacing-8);\n  }\n\n  /* =================================================================\n   * COLUMN VARIANTS\n   * ================================================================= */\n  .product-grid-skeleton--cols-2 .product-grid-skeleton__grid {\n    --grid-cols: 2;\n  }\n\n  .product-grid-skeleton--cols-3 .product-grid-skeleton__grid {\n    --grid-cols: 3;\n  }\n\n  .product-grid-skeleton--cols-4 .product-grid-skeleton__grid {\n    --grid-cols: 4;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n\n  /* Large Desktop (1280px+) */\n  @media screen and (min-width: 1280px) {\n    .product-grid-skeleton {\n      padding: var(--spacing-12) var(--spacing-8);\n    }\n\n    .product-grid-skeleton__heading {\n      width: 280px;\n      height: 3rem;\n    }\n  }\n\n  /* Desktop (1024px - 1279px) */\n  @media screen and (min-width: 1024px) and (max-width: 1279px) {\n    .product-grid-skeleton__grid {\n      grid-template-columns: repeat(var(--grid-cols-desktop, var(--grid-cols, 3)), 1fr);\n    }\n  }\n\n  /* Tablet (768px - 1023px) */\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    .product-grid-skeleton {\n      padding: var(--spacing-8) var(--spacing-6);\n    }\n\n    .product-grid-skeleton__grid {\n      grid-template-columns: repeat(var(--grid-cols-tablet, 2), 1fr);\n    }\n\n    .product-grid-skeleton__heading {\n      height: 2.25rem;\n    }\n  }\n\n  /* Small Tablet / Large Mobile (480px - 767px) */\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    .product-grid-skeleton {\n      padding: var(--spacing-6) var(--spacing-4);\n    }\n\n    .product-grid-skeleton__grid {\n      grid-template-columns: repeat(var(--grid-cols-tablet, 2), 1fr);\n      gap: var(--spacing-4);\n    }\n\n    .product-grid-skeleton__heading {\n      height: 1.875rem;\n    }\n\n    .product-grid-skeleton__subheading {\n      height: 1rem;\n    }\n  }\n\n  /* Mobile (< 480px) */\n  @media screen and (max-width: 479px) {\n    .product-grid-skeleton {\n      padding: var(--spacing-4) var(--spacing-3);\n    }\n\n    .product-grid-skeleton__header {\n      margin-bottom: var(--spacing-6);\n    }\n\n    .product-grid-skeleton__grid {\n      grid-template-columns: repeat(var(--grid-cols-mobile, 1), 1fr);\n      gap: var(--spacing-4);\n    }\n\n    .product-grid-skeleton__heading {\n      width: 150px;\n      height: 1.5rem;\n    }\n\n    .product-grid-skeleton__subheading {\n      width: 200px;\n      height: 0.875rem;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .product-grid-skeleton--animated .product-grid-skeleton__shimmer {\n      animation: none;\n    }\n\n    .product-grid-skeleton--stagger .product-grid-skeleton__item {\n      opacity: 1;\n      animation: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .product-grid-skeleton__heading,\n  :global(html[data-theme=\"dark\"]) .product-grid-skeleton__subheading {\n    background-color: var(--color-background-muted);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-grid-skeleton__shimmer {\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-elevated) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .product-grid-skeleton__heading,\n    .product-grid-skeleton__subheading {\n      border: 2px solid currentColor;\n    }\n\n    .product-grid-skeleton__shimmer {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductCardSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductCardSkeleton component"
    },
    {
      "content": "Create ProductGridSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductGridSkeleton component"
    },
    {
      "content": "Create ProductDetailsSkeleton component",
      "status": "in_progress",
      "activeForm": "Creating ProductDetailsSkeleton component"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "pending",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetailsSkeleton.astro",
  "content": "---\n/**\n * ProductDetailsSkeleton Component\n * A skeleton loading placeholder for ProductDetails that provides visual feedback\n * during content loading on product detail pages. Improves perceived performance.\n *\n * Features:\n * - Shimmer animation matching ProductDetails design\n * - Placeholder for all major content sections\n * - Breadcrumb, badges, name, price, description, variants, CTA\n * - Full accessibility support with aria-hidden\n * - Reduced motion support\n * - Dark mode support\n *\n * @example Basic usage\n * ```astro\n * <ProductDetailsSkeleton />\n * ```\n *\n * @example With variants hidden\n * ```astro\n * <ProductDetailsSkeleton showVariants={false} />\n * ```\n *\n * @example Without animation\n * ```astro\n * <ProductDetailsSkeleton animate={false} />\n * ```\n */\n\ninterface Props {\n  /** Whether to show the shimmer animation */\n  animate?: boolean;\n  /** Whether to show variant placeholders */\n  showVariants?: boolean;\n  /** Whether to show breadcrumb placeholder */\n  showBreadcrumb?: boolean;\n  /** Whether to show badge placeholders */\n  showBadges?: boolean;\n  /** Whether to show brand placeholder */\n  showBrand?: boolean;\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst {\n  animate = true,\n  showVariants = true,\n  showBreadcrumb = true,\n  showBadges = true,\n  showBrand = false,\n  class: className = '',\n} = Astro.props;\n\n// Build CSS classes\nconst skeletonClasses = [\n  'product-details-skeleton',\n  animate && 'product-details-skeleton--animated',\n  className,\n].filter(Boolean).join(' ');\n---\n\n<div\n  class={skeletonClasses}\n  aria-hidden=\"true\"\n  role=\"presentation\"\n  aria-label=\"Loading product details\"\n>\n  <!-- Breadcrumb Placeholder -->\n  {showBreadcrumb && (\n    <nav class=\"product-details-skeleton__breadcrumb\">\n      <div class=\"product-details-skeleton__breadcrumb-item\">\n        <div class=\"product-details-skeleton__shimmer\"></div>\n      </div>\n      <span class=\"product-details-skeleton__breadcrumb-separator\">/</span>\n      <div class=\"product-details-skeleton__breadcrumb-item\">\n        <div class=\"product-details-skeleton__shimmer\"></div>\n      </div>\n      <span class=\"product-details-skeleton__breadcrumb-separator\">/</span>\n      <div class=\"product-details-skeleton__breadcrumb-item product-details-skeleton__breadcrumb-item--current\">\n        <div class=\"product-details-skeleton__shimmer\"></div>\n      </div>\n    </nav>\n  )}\n\n  <!-- Badges Placeholder -->\n  {showBadges && (\n    <div class=\"product-details-skeleton__badges\">\n      <div class=\"product-details-skeleton__badge\">\n        <div class=\"product-details-skeleton__shimmer\"></div>\n      </div>\n    </div>\n  )}\n\n  <!-- Product Name Placeholder -->\n  <div class=\"product-details-skeleton__name\">\n    <div class=\"product-details-skeleton__shimmer\"></div>\n  </div>\n  <div class=\"product-details-skeleton__name product-details-skeleton__name--short\">\n    <div class=\"product-details-skeleton__shimmer\"></div>\n  </div>\n\n  <!-- Brand Placeholder -->\n  {showBrand && (\n    <div class=\"product-details-skeleton__brand\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n  )}\n\n  <!-- Price Placeholder -->\n  <div class=\"product-details-skeleton__price-container\">\n    <div class=\"product-details-skeleton__price\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n    <div class=\"product-details-skeleton__price product-details-skeleton__price--original\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n  </div>\n\n  <!-- Availability Placeholder -->\n  <div class=\"product-details-skeleton__availability\">\n    <div class=\"product-details-skeleton__stock\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n  </div>\n\n  <!-- Description Placeholder -->\n  <div class=\"product-details-skeleton__description\">\n    <div class=\"product-details-skeleton__description-line\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n    <div class=\"product-details-skeleton__description-line\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n    <div class=\"product-details-skeleton__description-line product-details-skeleton__description-line--short\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n  </div>\n\n  <!-- Variants Placeholder -->\n  {showVariants && (\n    <div class=\"product-details-skeleton__variants\">\n      <!-- Colors -->\n      <div class=\"product-details-skeleton__variant-group\">\n        <div class=\"product-details-skeleton__variant-label\">\n          <div class=\"product-details-skeleton__shimmer\"></div>\n        </div>\n        <div class=\"product-details-skeleton__variant-list\">\n          <div class=\"product-details-skeleton__variant-item\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n          <div class=\"product-details-skeleton__variant-item\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n          <div class=\"product-details-skeleton__variant-item\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Sizes -->\n      <div class=\"product-details-skeleton__variant-group\">\n        <div class=\"product-details-skeleton__variant-label\">\n          <div class=\"product-details-skeleton__shimmer\"></div>\n        </div>\n        <div class=\"product-details-skeleton__variant-list\">\n          <div class=\"product-details-skeleton__variant-item product-details-skeleton__variant-item--small\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n          <div class=\"product-details-skeleton__variant-item product-details-skeleton__variant-item--small\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n          <div class=\"product-details-skeleton__variant-item product-details-skeleton__variant-item--small\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n          <div class=\"product-details-skeleton__variant-item product-details-skeleton__variant-item--small\">\n            <div class=\"product-details-skeleton__shimmer\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )}\n\n  <!-- CTA Button Placeholder -->\n  <div class=\"product-details-skeleton__cta\">\n    <div class=\"product-details-skeleton__button\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n    <div class=\"product-details-skeleton__shop-info\">\n      <div class=\"product-details-skeleton__shimmer\"></div>\n    </div>\n  </div>\n\n  <!-- SKU Placeholder -->\n  <div class=\"product-details-skeleton__sku\">\n    <div class=\"product-details-skeleton__shimmer\"></div>\n  </div>\n</div>\n\n<style>\n  /* =================================================================\n   * PRODUCT DETAILS SKELETON STYLES\n   * =================================================================\n   * Skeleton loading placeholder matching ProductDetails structure\n   * Uses design system variables for consistency\n   */\n\n  .product-details-skeleton {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * SHIMMER BASE\n   * ================================================================= */\n  .product-details-skeleton__shimmer {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-subtle) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  .product-details-skeleton--animated .product-details-skeleton__shimmer {\n    animation: skeleton-shimmer 1.5s ease-in-out infinite;\n  }\n\n  @keyframes skeleton-shimmer {\n    0% {\n      background-position: 200% 0;\n    }\n    100% {\n      background-position: -200% 0;\n    }\n  }\n\n  /* =================================================================\n   * BREADCRUMB\n   * ================================================================= */\n  .product-details-skeleton__breadcrumb {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n  }\n\n  .product-details-skeleton__breadcrumb-item {\n    position: relative;\n    width: 40px;\n    height: 0.875rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__breadcrumb-item--current {\n    width: 60px;\n  }\n\n  .product-details-skeleton__breadcrumb-separator {\n    color: var(--color-border-dark);\n    font-size: var(--font-size-sm);\n  }\n\n  /* =================================================================\n   * BADGES\n   * ================================================================= */\n  .product-details-skeleton__badges {\n    display: flex;\n    gap: var(--spacing-2);\n  }\n\n  .product-details-skeleton__badge {\n    position: relative;\n    width: 80px;\n    height: 1.5rem;\n    border-radius: var(--radius-full);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  /* =================================================================\n   * NAME\n   * ================================================================= */\n  .product-details-skeleton__name {\n    position: relative;\n    width: 80%;\n    height: 2.25rem;\n    border-radius: var(--radius-md);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__name--short {\n    width: 50%;\n    height: 2.25rem;\n    margin-top: var(--spacing-1);\n  }\n\n  /* =================================================================\n   * BRAND\n   * ================================================================= */\n  .product-details-skeleton__brand {\n    position: relative;\n    width: 100px;\n    height: 1rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  /* =================================================================\n   * PRICE\n   * ================================================================= */\n  .product-details-skeleton__price-container {\n    display: flex;\n    align-items: baseline;\n    gap: var(--spacing-3);\n  }\n\n  .product-details-skeleton__price {\n    position: relative;\n    width: 100px;\n    height: 1.875rem;\n    border-radius: var(--radius-md);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__price--original {\n    width: 70px;\n    height: 1.25rem;\n  }\n\n  /* =================================================================\n   * AVAILABILITY\n   * ================================================================= */\n  .product-details-skeleton__availability {\n    margin-top: var(--spacing-1);\n  }\n\n  .product-details-skeleton__stock {\n    position: relative;\n    width: 100px;\n    height: 0.875rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  /* =================================================================\n   * DESCRIPTION\n   * ================================================================= */\n  .product-details-skeleton__description {\n    margin-top: var(--spacing-2);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n  }\n\n  .product-details-skeleton__description-line {\n    position: relative;\n    width: 100%;\n    height: 1rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__description-line--short {\n    width: 75%;\n  }\n\n  /* =================================================================\n   * VARIANTS\n   * ================================================================= */\n  .product-details-skeleton__variants {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border);\n  }\n\n  .product-details-skeleton__variant-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n  }\n\n  .product-details-skeleton__variant-label {\n    position: relative;\n    width: 60px;\n    height: 0.875rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__variant-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-2);\n  }\n\n  .product-details-skeleton__variant-item {\n    position: relative;\n    width: 70px;\n    height: 2rem;\n    border-radius: var(--radius-md);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__variant-item--small {\n    width: 40px;\n  }\n\n  /* =================================================================\n   * CTA\n   * ================================================================= */\n  .product-details-skeleton__cta {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-3);\n    margin-top: var(--spacing-4);\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border);\n  }\n\n  .product-details-skeleton__button {\n    position: relative;\n    width: 100%;\n    height: 3.5rem;\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n  }\n\n  .product-details-skeleton__shop-info {\n    position: relative;\n    width: 150px;\n    height: 0.875rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n    margin: 0 auto;\n  }\n\n  /* =================================================================\n   * SKU\n   * ================================================================= */\n  .product-details-skeleton__sku {\n    position: relative;\n    width: 100px;\n    height: 0.75rem;\n    border-radius: var(--radius-sm);\n    overflow: hidden;\n    background-color: var(--color-background-muted);\n    margin-top: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media screen and (max-width: 767px) {\n    .product-details-skeleton__name {\n      width: 100%;\n      height: 1.875rem;\n    }\n\n    .product-details-skeleton__name--short {\n      width: 60%;\n      height: 1.875rem;\n    }\n\n    .product-details-skeleton__price {\n      height: 1.5rem;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .product-details-skeleton--animated .product-details-skeleton__shimmer {\n      animation: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__breadcrumb-item,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__badge,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__name,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__brand,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__price,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__stock,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__description-line,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__variant-label,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__variant-item,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__button,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__shop-info,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__sku {\n    background-color: var(--color-background-muted);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__shimmer {\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-elevated) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__variants,\n  :global(html[data-theme=\"dark\"]) .product-details-skeleton__cta {\n    border-color: var(--color-border);\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .product-details-skeleton__breadcrumb-item,\n    .product-details-skeleton__badge,\n    .product-details-skeleton__name,\n    .product-details-skeleton__brand,\n    .product-details-skeleton__price,\n    .product-details-skeleton__stock,\n    .product-details-skeleton__description-line,\n    .product-details-skeleton__variant-label,\n    .product-details-skeleton__variant-item,\n    .product-details-skeleton__button,\n    .product-details-skeleton__shop-info,\n    .product-details-skeleton__sku {\n      border: 2px solid currentColor;\n    }\n\n    .product-details-skeleton__shimmer {\n      display: none;\n    }\n  }\n</style>\n"
}
Now let me create an ImageGallerySkeleton component to complete the product detail page skeleton experience:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ImageGallerySkeleton.astro",
  "content": "---\n/**\n * ImageGallerySkeleton Component\n * A skeleton loading placeholder for image galleries on product detail pages.\n * Provides visual feedback during content loading with shimmer animation.\n *\n * Features:\n * - Main image placeholder with shimmer animation\n * - Thumbnail placeholders (optional)\n * - Configurable aspect ratio\n * - Full accessibility support\n * - Reduced motion support\n * - Dark mode support\n *\n * @example Basic usage\n * ```astro\n * <ImageGallerySkeleton />\n * ```\n *\n * @example With custom thumbnail count\n * ```astro\n * <ImageGallerySkeleton thumbnailCount={4} />\n * ```\n *\n * @example Square aspect ratio\n * ```astro\n * <ImageGallerySkeleton aspectRatio=\"1:1\" />\n * ```\n */\n\ninterface Props {\n  /** Aspect ratio for the main image placeholder */\n  aspectRatio?: '4:5' | '1:1' | '3:4' | '16:9';\n  /** Number of thumbnail placeholders to show */\n  thumbnailCount?: number;\n  /** Whether to show thumbnail placeholders */\n  showThumbnails?: boolean;\n  /** Whether to animate the skeleton */\n  animate?: boolean;\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst {\n  aspectRatio = '4:5',\n  thumbnailCount = 4,\n  showThumbnails = true,\n  animate = true,\n  class: className = '',\n} = Astro.props;\n\n// Calculate aspect ratio CSS value\nconst aspectRatioMap: Record<string, string> = {\n  '4:5': '4 / 5',\n  '1:1': '1 / 1',\n  '3:4': '3 / 4',\n  '16:9': '16 / 9',\n};\nconst aspectRatioCss = aspectRatioMap[aspectRatio] || '4 / 5';\n\n// Build CSS classes\nconst skeletonClasses = [\n  'image-gallery-skeleton',\n  animate && 'image-gallery-skeleton--animated',\n  className,\n].filter(Boolean).join(' ');\n\n// Create array for thumbnails\nconst thumbnails = Array.from({ length: thumbnailCount }, (_, index) => index);\n---\n\n<div\n  class={skeletonClasses}\n  aria-hidden=\"true\"\n  role=\"presentation\"\n  aria-label=\"Loading images\"\n  style={`--gallery-aspect-ratio: ${aspectRatioCss};`}\n>\n  <!-- Main Image Placeholder -->\n  <div class=\"image-gallery-skeleton__main\">\n    <div class=\"image-gallery-skeleton__shimmer\"></div>\n  </div>\n\n  <!-- Thumbnails Placeholder -->\n  {showThumbnails && (\n    <div class=\"image-gallery-skeleton__thumbnails\">\n      {thumbnails.map((index) => (\n        <div\n          class=\"image-gallery-skeleton__thumbnail\"\n          style={animate ? `--stagger-delay: ${index * 50}ms` : ''}\n        >\n          <div class=\"image-gallery-skeleton__shimmer\"></div>\n        </div>\n      ))}\n    </div>\n  )}\n</div>\n\n<style>\n  /* =================================================================\n   * IMAGE GALLERY SKELETON STYLES\n   * =================================================================\n   * Skeleton loading placeholder for product image galleries\n   * Uses design system variables for consistency\n   */\n\n  .image-gallery-skeleton {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * MAIN IMAGE\n   * ================================================================= */\n  .image-gallery-skeleton__main {\n    position: relative;\n    aspect-ratio: var(--gallery-aspect-ratio, 4 / 5);\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n  }\n\n  /* =================================================================\n   * THUMBNAILS\n   * ================================================================= */\n  .image-gallery-skeleton__thumbnails {\n    display: flex;\n    gap: var(--spacing-3);\n    overflow-x: auto;\n    padding-bottom: var(--spacing-2);\n  }\n\n  .image-gallery-skeleton__thumbnail {\n    position: relative;\n    flex-shrink: 0;\n    width: 80px;\n    height: 80px;\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-md);\n    overflow: hidden;\n  }\n\n  /* =================================================================\n   * SHIMMER ANIMATION\n   * ================================================================= */\n  .image-gallery-skeleton__shimmer {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-subtle) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  .image-gallery-skeleton--animated .image-gallery-skeleton__shimmer {\n    animation: skeleton-shimmer 1.5s ease-in-out infinite;\n  }\n\n  /* Stagger thumbnails */\n  .image-gallery-skeleton--animated .image-gallery-skeleton__thumbnail {\n    opacity: 0;\n    animation: skeleton-fade-in 0.3s ease-out forwards;\n    animation-delay: var(--stagger-delay, 0ms);\n  }\n\n  @keyframes skeleton-shimmer {\n    0% {\n      background-position: 200% 0;\n    }\n    100% {\n      background-position: -200% 0;\n    }\n  }\n\n  @keyframes skeleton-fade-in {\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media screen and (max-width: 767px) {\n    .image-gallery-skeleton__thumbnails {\n      gap: var(--spacing-2);\n    }\n\n    .image-gallery-skeleton__thumbnail {\n      width: 60px;\n      height: 60px;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .image-gallery-skeleton--animated .image-gallery-skeleton__shimmer {\n      animation: none;\n    }\n\n    .image-gallery-skeleton--animated .image-gallery-skeleton__thumbnail {\n      opacity: 1;\n      animation: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .image-gallery-skeleton__main,\n  :global(html[data-theme=\"dark\"]) .image-gallery-skeleton__thumbnail {\n    background-color: var(--color-background-muted);\n  }\n\n  :global(html[data-theme=\"dark\"]) .image-gallery-skeleton__shimmer {\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--color-background-elevated) 50%,\n      transparent 100%\n    );\n    background-size: 200% 100%;\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .image-gallery-skeleton__main,\n    .image-gallery-skeleton__thumbnail {\n      border: 2px solid currentColor;\n    }\n\n    .image-gallery-skeleton__shimmer {\n      display: none;\n    }\n  }\n</style>\n"
}
Now let me create a demo page to showcase the skeleton components and allow for testing:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\skeleton-loading.astro",
  "content": "---\n/**\n * Skeleton Loading Demo Page\n * Showcases all skeleton loading components for visual testing and documentation.\n */\n\nimport Layout from '../../layouts/Layout.astro';\nimport ProductCardSkeleton from '../../components/ProductCardSkeleton.astro';\nimport ProductGridSkeleton from '../../components/ProductGridSkeleton.astro';\nimport ProductDetailsSkeleton from '../../components/ProductDetailsSkeleton.astro';\nimport ImageGallerySkeleton from '../../components/ImageGallerySkeleton.astro';\n\nconst pageTitle = 'Skeleton Loading States Demo';\nconst pageDescription = 'Demonstration of skeleton loading components for product grids and detail pages.';\n---\n\n<Layout title={pageTitle} description={pageDescription}>\n  <main class=\"skeleton-demo\">\n    <div class=\"skeleton-demo__container\">\n      <header class=\"skeleton-demo__header\">\n        <h1 class=\"skeleton-demo__title\">Skeleton Loading States</h1>\n        <p class=\"skeleton-demo__description\">\n          These skeleton components provide visual feedback during content loading,\n          improving perceived performance and user experience.\n        </p>\n      </header>\n\n      <!-- ProductCardSkeleton Demo -->\n      <section class=\"skeleton-demo__section\" id=\"product-card-skeleton\">\n        <h2 class=\"skeleton-demo__section-title\">ProductCardSkeleton</h2>\n        <p class=\"skeleton-demo__section-description\">\n          Individual product card skeleton with configurable aspect ratio and category display.\n        </p>\n\n        <div class=\"skeleton-demo__examples\">\n          <!-- Default -->\n          <div class=\"skeleton-demo__example\">\n            <h3 class=\"skeleton-demo__example-title\">Default (4:5 aspect ratio)</h3>\n            <div class=\"skeleton-demo__card-wrapper\">\n              <ProductCardSkeleton />\n            </div>\n          </div>\n\n          <!-- Square -->\n          <div class=\"skeleton-demo__example\">\n            <h3 class=\"skeleton-demo__example-title\">Square (1:1 aspect ratio)</h3>\n            <div class=\"skeleton-demo__card-wrapper\">\n              <ProductCardSkeleton aspectRatio=\"1:1\" />\n            </div>\n          </div>\n\n          <!-- Without category -->\n          <div class=\"skeleton-demo__example\">\n            <h3 class=\"skeleton-demo__example-title\">Without category</h3>\n            <div class=\"skeleton-demo__card-wrapper\">\n              <ProductCardSkeleton showCategory={false} />\n            </div>\n          </div>\n\n          <!-- With description -->\n          <div class=\"skeleton-demo__example\">\n            <h3 class=\"skeleton-demo__example-title\">With description</h3>\n            <div class=\"skeleton-demo__card-wrapper\">\n              <ProductCardSkeleton showDescription={true} />\n            </div>\n          </div>\n\n          <!-- Static (no animation) -->\n          <div class=\"skeleton-demo__example\">\n            <h3 class=\"skeleton-demo__example-title\">Static (no animation)</h3>\n            <div class=\"skeleton-demo__card-wrapper\">\n              <ProductCardSkeleton animate={false} />\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- ProductGridSkeleton Demo -->\n      <section class=\"skeleton-demo__section\" id=\"product-grid-skeleton\">\n        <h2 class=\"skeleton-demo__section-title\">ProductGridSkeleton</h2>\n        <p class=\"skeleton-demo__section-description\">\n          Grid of product card skeletons with configurable columns, count, and header.\n        </p>\n\n        <div class=\"skeleton-demo__grid-examples\">\n          <!-- 3 columns with header -->\n          <div class=\"skeleton-demo__grid-example\">\n            <h3 class=\"skeleton-demo__example-title\">3 columns with header</h3>\n            <ProductGridSkeleton\n              count={6}\n              columns={3}\n              showHeader={true}\n            />\n          </div>\n\n          <!-- 4 columns -->\n          <div class=\"skeleton-demo__grid-example\">\n            <h3 class=\"skeleton-demo__example-title\">4 columns, no header</h3>\n            <ProductGridSkeleton\n              count={8}\n              columns={4}\n              showHeader={false}\n            />\n          </div>\n\n          <!-- 2 columns, square -->\n          <div class=\"skeleton-demo__grid-example\">\n            <h3 class=\"skeleton-demo__example-title\">2 columns, square aspect ratio</h3>\n            <ProductGridSkeleton\n              count={4}\n              columns={2}\n              aspectRatio=\"1:1\"\n            />\n          </div>\n        </div>\n      </section>\n\n      <!-- ProductDetailsSkeleton Demo -->\n      <section class=\"skeleton-demo__section\" id=\"product-details-skeleton\">\n        <h2 class=\"skeleton-demo__section-title\">ProductDetailsSkeleton</h2>\n        <p class=\"skeleton-demo__section-description\">\n          Product detail page skeleton with all major content sections.\n        </p>\n\n        <div class=\"skeleton-demo__detail-examples\">\n          <!-- Full skeleton -->\n          <div class=\"skeleton-demo__detail-example\">\n            <h3 class=\"skeleton-demo__example-title\">Full skeleton (all sections)</h3>\n            <div class=\"skeleton-demo__detail-wrapper\">\n              <div class=\"skeleton-demo__gallery-column\">\n                <ImageGallerySkeleton thumbnailCount={4} />\n              </div>\n              <div class=\"skeleton-demo__details-column\">\n                <ProductDetailsSkeleton />\n              </div>\n            </div>\n          </div>\n\n          <!-- Minimal skeleton -->\n          <div class=\"skeleton-demo__detail-example\">\n            <h3 class=\"skeleton-demo__example-title\">Minimal skeleton (no variants)</h3>\n            <div class=\"skeleton-demo__detail-wrapper\">\n              <div class=\"skeleton-demo__gallery-column\">\n                <ImageGallerySkeleton\n                  aspectRatio=\"1:1\"\n                  showThumbnails={false}\n                />\n              </div>\n              <div class=\"skeleton-demo__details-column\">\n                <ProductDetailsSkeleton\n                  showVariants={false}\n                  showBreadcrumb={false}\n                  showBadges={false}\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- ImageGallerySkeleton Demo -->\n      <section class=\"skeleton-demo__section\" id=\"image-gallery-skeleton\">\n        <h2 class=\"skeleton-demo__section-title\">ImageGallerySkeleton</h2>\n        <p class=\"skeleton-demo__section-description\">\n          Image gallery skeleton with configurable aspect ratio and thumbnail count.\n        </p>\n\n        <div class=\"skeleton-demo__gallery-examples\">\n          <!-- Default -->\n          <div class=\"skeleton-demo__gallery-example\">\n            <h3 class=\"skeleton-demo__example-title\">Default (4:5, 4 thumbnails)</h3>\n            <ImageGallerySkeleton />\n          </div>\n\n          <!-- Square -->\n          <div class=\"skeleton-demo__gallery-example\">\n            <h3 class=\"skeleton-demo__example-title\">Square (1:1, 6 thumbnails)</h3>\n            <ImageGallerySkeleton aspectRatio=\"1:1\" thumbnailCount={6} />\n          </div>\n\n          <!-- No thumbnails -->\n          <div class=\"skeleton-demo__gallery-example\">\n            <h3 class=\"skeleton-demo__example-title\">No thumbnails</h3>\n            <ImageGallerySkeleton showThumbnails={false} aspectRatio=\"16:9\" />\n          </div>\n        </div>\n      </section>\n\n      <!-- Usage Examples -->\n      <section class=\"skeleton-demo__section\" id=\"usage\">\n        <h2 class=\"skeleton-demo__section-title\">Usage Examples</h2>\n        <p class=\"skeleton-demo__section-description\">\n          How to use these skeleton components in your Astro pages.\n        </p>\n\n        <div class=\"skeleton-demo__code-examples\">\n          <div class=\"skeleton-demo__code-block\">\n            <h3 class=\"skeleton-demo__example-title\">ProductCardSkeleton</h3>\n            <pre><code>&lt;ProductCardSkeleton\n  aspectRatio=\"4:5\"\n  animate={true}\n  showCategory={true}\n  showDescription={false}\n/&gt;</code></pre>\n          </div>\n\n          <div class=\"skeleton-demo__code-block\">\n            <h3 class=\"skeleton-demo__example-title\">ProductGridSkeleton</h3>\n            <pre><code>&lt;ProductGridSkeleton\n  count={6}\n  columns={3}\n  gap=\"medium\"\n  showHeader={true}\n  animate={true}\n  stagger={true}\n/&gt;</code></pre>\n          </div>\n\n          <div class=\"skeleton-demo__code-block\">\n            <h3 class=\"skeleton-demo__example-title\">ProductDetailsSkeleton</h3>\n            <pre><code>&lt;ProductDetailsSkeleton\n  animate={true}\n  showVariants={true}\n  showBreadcrumb={true}\n  showBadges={true}\n/&gt;</code></pre>\n          </div>\n\n          <div class=\"skeleton-demo__code-block\">\n            <h3 class=\"skeleton-demo__example-title\">ImageGallerySkeleton</h3>\n            <pre><code>&lt;ImageGallerySkeleton\n  aspectRatio=\"4:5\"\n  thumbnailCount={4}\n  showThumbnails={true}\n  animate={true}\n/&gt;</code></pre>\n          </div>\n        </div>\n      </section>\n    </div>\n  </main>\n</Layout>\n\n<style>\n  .skeleton-demo {\n    padding: var(--spacing-8) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .skeleton-demo__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  .skeleton-demo__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .skeleton-demo__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-4xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n  }\n\n  .skeleton-demo__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    max-width: 600px;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .skeleton-demo__section {\n    margin-bottom: var(--spacing-16);\n    padding-bottom: var(--spacing-16);\n    border-bottom: 1px solid var(--color-border);\n  }\n\n  .skeleton-demo__section:last-child {\n    border-bottom: none;\n  }\n\n  .skeleton-demo__section-title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2);\n  }\n\n  .skeleton-demo__section-description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-8);\n  }\n\n  .skeleton-demo__example-title {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-tertiary);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wider);\n    margin: 0 0 var(--spacing-4);\n  }\n\n  /* Card examples grid */\n  .skeleton-demo__examples {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: var(--spacing-8);\n  }\n\n  .skeleton-demo__card-wrapper {\n    max-width: 300px;\n  }\n\n  /* Grid examples */\n  .skeleton-demo__grid-examples {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-12);\n  }\n\n  .skeleton-demo__grid-example {\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    padding: var(--spacing-6);\n  }\n\n  /* Detail examples */\n  .skeleton-demo__detail-examples {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-12);\n  }\n\n  .skeleton-demo__detail-example {\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    padding: var(--spacing-6);\n  }\n\n  .skeleton-demo__detail-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--spacing-8);\n  }\n\n  @media screen and (max-width: 767px) {\n    .skeleton-demo__detail-wrapper {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  /* Gallery examples */\n  .skeleton-demo__gallery-examples {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: var(--spacing-8);\n  }\n\n  .skeleton-demo__gallery-example {\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    padding: var(--spacing-6);\n  }\n\n  /* Code examples */\n  .skeleton-demo__code-examples {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: var(--spacing-6);\n  }\n\n  .skeleton-demo__code-block {\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-lg);\n    padding: var(--spacing-4);\n  }\n\n  .skeleton-demo__code-block pre {\n    margin: 0;\n    overflow-x: auto;\n  }\n\n  .skeleton-demo__code-block code {\n    font-family: var(--font-mono);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* Dark mode */\n  :global(html[data-theme=\"dark\"]) .skeleton-demo__grid-example,\n  :global(html[data-theme=\"dark\"]) .skeleton-demo__detail-example,\n  :global(html[data-theme=\"dark\"]) .skeleton-demo__gallery-example,\n  :global(html[data-theme=\"dark\"]) .skeleton-demo__code-block {\n    background-color: var(--color-background-elevated);\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductCardSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductCardSkeleton component"
    },
    {
      "content": "Create ProductGridSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductGridSkeleton component"
    },
    {
      "content": "Create ProductDetailsSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductDetailsSkeleton component"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}
Now let me verify the implementation with a Playwright test. First, let me check the Playwright configuration:

🔧 Tool: Glob
Input: {
  "pattern": "**/*playwright*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\playwright.config.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "tests/**/*.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\tests\\announcement-bar.spec.ts"
}
Now I'll create a Playwright test to verify the skeleton loading components. First, let me check package.json for the scripts:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}
Let me create the Playwright test file and build the project to run the test:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\tests\\skeleton-loading.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Temporary verification test for Skeleton Loading States feature\n * This file should be deleted after verification\n */\n\ntest.describe('Skeleton Loading States', () => {\n  test('should render the skeleton loading demo page', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Wait for page to load\n    await expect(page.locator('h1')).toContainText('Skeleton Loading States');\n  });\n\n  test('ProductCardSkeleton should render with shimmer animation', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Check that ProductCardSkeleton components are rendered\n    const skeletonCards = page.locator('.product-card-skeleton');\n    await expect(skeletonCards.first()).toBeVisible();\n\n    // Check that the skeleton has the image placeholder\n    const imagePlaceholder = page.locator('.product-card-skeleton__image').first();\n    await expect(imagePlaceholder).toBeVisible();\n\n    // Check that shimmer animation is present\n    const shimmer = page.locator('.product-card-skeleton__shimmer').first();\n    await expect(shimmer).toBeVisible();\n\n    // Check that the animated class is applied\n    const animatedSkeleton = page.locator('.product-card-skeleton--animated').first();\n    await expect(animatedSkeleton).toBeVisible();\n  });\n\n  test('ProductGridSkeleton should render multiple skeleton cards', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Check that ProductGridSkeleton is rendered\n    const gridSkeleton = page.locator('.product-grid-skeleton').first();\n    await expect(gridSkeleton).toBeVisible();\n\n    // Check that the grid has multiple skeleton items\n    const gridItems = gridSkeleton.locator('.product-grid-skeleton__item');\n    const count = await gridItems.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('ProductGridSkeleton with header should show header skeleton', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Find grid skeleton with header (first one in the grid examples section)\n    const headerSkeleton = page.locator('.product-grid-skeleton__header').first();\n    await expect(headerSkeleton).toBeVisible();\n\n    // Check heading placeholder\n    const headingPlaceholder = page.locator('.product-grid-skeleton__heading').first();\n    await expect(headingPlaceholder).toBeVisible();\n  });\n\n  test('ProductDetailsSkeleton should render all content sections', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Check that ProductDetailsSkeleton is rendered\n    const detailsSkeleton = page.locator('.product-details-skeleton').first();\n    await expect(detailsSkeleton).toBeVisible();\n\n    // Check breadcrumb placeholder\n    const breadcrumb = detailsSkeleton.locator('.product-details-skeleton__breadcrumb');\n    await expect(breadcrumb).toBeVisible();\n\n    // Check name placeholder\n    const namePlaceholder = detailsSkeleton.locator('.product-details-skeleton__name').first();\n    await expect(namePlaceholder).toBeVisible();\n\n    // Check price placeholder\n    const pricePlaceholder = detailsSkeleton.locator('.product-details-skeleton__price').first();\n    await expect(pricePlaceholder).toBeVisible();\n\n    // Check description placeholder\n    const descriptionPlaceholder = detailsSkeleton.locator('.product-details-skeleton__description');\n    await expect(descriptionPlaceholder).toBeVisible();\n\n    // Check variants placeholder\n    const variantsPlaceholder = detailsSkeleton.locator('.product-details-skeleton__variants');\n    await expect(variantsPlaceholder).toBeVisible();\n\n    // Check CTA button placeholder\n    const ctaPlaceholder = detailsSkeleton.locator('.product-details-skeleton__button');\n    await expect(ctaPlaceholder).toBeVisible();\n  });\n\n  test('ImageGallerySkeleton should render main image and thumbnails', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Check that ImageGallerySkeleton is rendered\n    const gallerySkeleton = page.locator('.image-gallery-skeleton').first();\n    await expect(gallerySkeleton).toBeVisible();\n\n    // Check main image placeholder\n    const mainImage = gallerySkeleton.locator('.image-gallery-skeleton__main');\n    await expect(mainImage).toBeVisible();\n\n    // Check thumbnails\n    const thumbnails = gallerySkeleton.locator('.image-gallery-skeleton__thumbnail');\n    const count = await thumbnails.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('skeletons should have aria-hidden for accessibility', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // ProductCardSkeleton should have aria-hidden\n    const cardSkeleton = page.locator('.product-card-skeleton').first();\n    await expect(cardSkeleton).toHaveAttribute('aria-hidden', 'true');\n\n    // ProductGridSkeleton should have aria-hidden\n    const gridSkeleton = page.locator('.product-grid-skeleton').first();\n    await expect(gridSkeleton).toHaveAttribute('aria-hidden', 'true');\n\n    // ProductDetailsSkeleton should have aria-hidden\n    const detailsSkeleton = page.locator('.product-details-skeleton').first();\n    await expect(detailsSkeleton).toHaveAttribute('aria-hidden', 'true');\n\n    // ImageGallerySkeleton should have aria-hidden\n    const gallerySkeleton = page.locator('.image-gallery-skeleton').first();\n    await expect(gallerySkeleton).toHaveAttribute('aria-hidden', 'true');\n  });\n\n  test('skeletons should have role=\"presentation\"', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // ProductCardSkeleton should have role presentation\n    const cardSkeleton = page.locator('.product-card-skeleton').first();\n    await expect(cardSkeleton).toHaveAttribute('role', 'presentation');\n\n    // ProductGridSkeleton should have role presentation\n    const gridSkeleton = page.locator('.product-grid-skeleton').first();\n    await expect(gridSkeleton).toHaveAttribute('role', 'presentation');\n  });\n\n  test('ProductCardSkeleton should support different aspect ratios', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Find the skeleton with 1:1 aspect ratio (second example)\n    const squareSkeleton = page.locator('.product-card-skeleton').nth(1);\n    await expect(squareSkeleton).toBeVisible();\n\n    // Check that it has the custom property set\n    const style = await squareSkeleton.getAttribute('style');\n    expect(style).toContain('--skeleton-aspect-ratio');\n  });\n\n  test('ProductCardSkeleton without animation should not have animated class', async ({ page }) => {\n    await page.goto('/demo/skeleton-loading');\n\n    // Find the static skeleton (5th example - \"Static (no animation)\")\n    const staticSkeleton = page.locator('.product-card-skeleton').nth(4);\n    await expect(staticSkeleton).toBeVisible();\n\n    // It should NOT have the animated class\n    const hasAnimatedClass = await staticSkeleton.evaluate(el =>\n      el.classList.contains('product-card-skeleton--animated')\n    );\n    expect(hasAnimatedClass).toBe(false);\n  });\n});\n"
}
Now let me build the project and run the tests:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\retail-business\" && npm run build 2>&1",
  "description": "Build the Astro project",
  "timeout": 120000
}
The build was successful. Now let me start the preview server and run the Playwright tests:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\retail-business\" && npm run preview -- --port 4322 &",
  "description": "Start preview server in background",
  "run_in_background": true
}

🔧 Tool: Bash
Input: {
  "command": "sleep 3 && cd \"C:\\Users\\James\\Repos\\retail-business\" && npx playwright test tests/skeleton-loading.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright tests for skeleton loading",
  "timeout": 120000
}
All 10 tests passed. Now let me clean up by deleting the test file and stopping the server:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\retail-business\\tests\\skeleton-loading.spec.ts\"",
  "description": "Delete temporary test file"
}

🔧 Tool: KillShell
Input: {
  "shell_id": "b36752e"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductCardSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductCardSkeleton component"
    },
    {
      "content": "Create ProductGridSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductGridSkeleton component"
    },
    {
      "content": "Create ProductDetailsSkeleton component",
      "status": "completed",
      "activeForm": "Creating ProductDetailsSkeleton component"
    },
    {
      "content": "Verify implementation with Playwright test",
      "status": "completed",
      "activeForm": "Verifying implementation with Playwright test"
    }
  ]
}
<summary>
## Summary: Skeleton Loading States for Product Grids and Detail Pages

### Changes Implemented
- Created `ProductCardSkeleton.astro` - A skeleton loading placeholder component for individual product cards with shimmer animation, configurable aspect ratio (4:5 or 1:1), optional category and description placeholders
- Created `ProductGridSkeleton.astro` - A grid of skeleton cards with configurable count, columns (2/3/4), gap sizes, optional header skeleton, and stagger animation support
- Created `ProductDetailsSkeleton.astro` - A comprehensive skeleton for product detail pages including placeholders for breadcrumb, badges, name, brand, price, availability, description, variants, CTA button, and SKU
- Created `ImageGallerySkeleton.astro` - A skeleton for image galleries with main image placeholder and configurable thumbnails
- Created `skeleton-loading.astro` demo page showcasing all skeleton components with various configurations

### Files Modified
- `src/components/ProductCardSkeleton.astro` (new)
- `src/components/ProductGridSkeleton.astro` (new)
- `src/components/ProductDetailsSkeleton.astro` (new)
- `src/components/ImageGallerySkeleton.astro` (new)
- `src/pages/demo/skeleton-loading.astro` (new)

### Features
- **Shimmer animation** - Smooth gradient animation that provides visual loading feedback
- **Accessibility** - All components use `aria-hidden="true"` and `role="presentation"` to be properly hidden from screen readers
- **Reduced motion support** - Animations disabled when `prefers-reduced-motion: reduce` is set
- **Dark mode support** - All components adapt to dark theme using CSS custom properties
- **High contrast mode** - Components degrade gracefully with visible borders in forced-colors mode
- **Responsive design** - Grid skeletons adapt to different screen sizes matching ProductGrid behavior
- **Configurable** - All components accept props for customization (aspect ratio, animation toggle, content visibility)

### Verification Status
- Created a Playwright test file with 10 tests covering all skeleton components
- All 10 tests passed successfully verifying:
  - Demo page renders correctly
  - ProductCardSkeleton renders with shimmer animation
  - ProductGridSkeleton renders multiple skeleton cards
  - ProductGridSkeleton header renders when enabled
  - ProductDetailsSkeleton renders all content sections
  - ImageGallerySkeleton renders main image and thumbnails
  - Accessibility attributes (aria-hidden, role) are properly set
  - Aspect ratio configurations work correctly
  - Animation can be disabled
- Test file deleted after successful verification as required

### Notes for Developer
- The skeleton components follow the existing BEM naming convention used throughout the codebase
- All components use CSS custom properties from `variables.css` for consistent theming
- The demo page at `/demo/skeleton-loading` provides a visual reference for all component variations
- To use skeletons during actual loading, conditionally render the skeleton component while data is loading, then replace with the actual component once data is available
</summary>