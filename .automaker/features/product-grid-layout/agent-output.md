
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand its structure. I need to implement a product grid system feature. Please:\n\n1. Look at the top-level directory structure\n2. Find any existing grid, layout, or product components\n3. Identify the styling approach (CSS, SCSS, Tailwind, styled-components, etc.)\n4. Find any existing responsive/breakpoint utilities\n5. Look for any existing patterns for creating reusable components\n\nProvide a comprehensive summary of:\n- The project structure and tech stack\n- Existing component patterns\n- Styling conventions\n- Any existing grid or layout systems I should be aware of",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -50",
  "description": "List top-level directory structure"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.config.*",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/package.json",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\"",
  "description": "List src directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\components\"",
  "description": "List components directory"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\"",
  "description": "List styles directory"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\"",
  "description": "List pages directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FeaturedProductsSection.astro",
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "grep -n \"grid\\|flex\\|layout\\|--cols\\|responsive\" \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css\" | head -40",
  "description": "Search for grid/layout patterns in globals CSS"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro",
  "limit": 300,
  "offset": 90
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\types\"",
  "description": "List types directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\product.ts"
}

🔧 Tool: Grep
Input: {
  "pattern": "\\.featured-products-section__grid|display:\\s*grid|grid-template|--cols",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"grid\\|--cols\\|@media\" \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\FeaturedProductsSection.astro\" | head -50",
  "description": "Search for grid and responsive styles in FeaturedProductsSection"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FeaturedProductsSection.astro",
  "limit": 600,
  "offset": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\products.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\layouts\"",
  "description": "List layouts directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro",
  "limit": 100,
  "offset": 380
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\index.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\index.astro",
  "limit": 200,
  "offset": 150
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"@media\\|grid-template\\|flex-wrap\\|gap:\" \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css\" | head -30",
  "description": "Search for spacing and layout variables"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\" -name \"*.astro\" -type f",
  "description": "Find demo pages for reference patterns"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\products-collection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 200,
  "offset": 200
}

🔧 Tool: Bash
Input: {
  "command": "grep -n \"container\\|--cols\\|gap\" \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css\" | grep -i \"container\\|gap\"",
  "description": "Search for container and gap utilities"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 100,
  "offset": 900
}

🔧 Tool: Bash
Input: {
  "command": "grep -n \"container-\" \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css\"",
  "description": "Search for container variables"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\README.md"
}
Now I have a comprehensive understanding of the codebase. Let me create the flexible product grid system. I'll start by reading the existing type definitions and components to ensure consistency.

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/components/ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/components/FeaturedProductsSection.astro"
}
Now let me read the styles/variables.css to understand the design system variables:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/styles/variables.css",
  "limit": 200
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/products/**/*.astro",
  "path": "/Users/James/Repos/retail-business"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "in_progress",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "pending",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "pending",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "pending",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "pending",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "pending",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "pending",
      "activeForm": "Running verification tests"
    }
  ]
}
Let me check the existing products page and demo page to understand more about the grid patterns:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/index.astro"
}
Now I have a comprehensive understanding of the codebase. Let me create the flexible ProductGrid component. First, let me update the TypeScript types and then create the component:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts"
}
Now I'll create an enhanced type definition and then the ProductGrid component. Let me update the types first:

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts",
  "old_string": "// =================================================================\n// PRODUCT GRID PROPS\n// =================================================================\n\n/**\n * Props for ProductGrid component (optional grid wrapper)\n */\nexport interface ProductGridProps {\n  /** Array of products to display */\n  products: ProductCardProps[];\n  /** Number of columns (2-4) */\n  columns?: 2 | 3 | 4;\n  /** Gap between cards */\n  gap?: 'small' | 'medium' | 'large';\n  /** Section heading */\n  heading?: string;\n  /** Section description */\n  description?: string;\n  /** Section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n}",
  "new_string": "// =================================================================\n// PRODUCT GRID PROPS\n// =================================================================\n\n/**\n * Grid layout variants for different display styles\n */\nexport type GridLayout =\n  | 'standard'           // Even grid layout\n  | 'featured-first'     // First item spans 2 columns\n  | 'featured-left'      // Left item is larger (asymmetric)\n  | 'featured-right'     // Right item is larger (asymmetric)\n  | 'masonry';           // Pinterest-style masonry layout\n\n/**\n * Featured product placement configuration\n */\nexport interface FeaturedPlacement {\n  /** Index of the product to feature (0-based) */\n  index: number;\n  /** Number of columns the featured product spans */\n  colSpan?: 1 | 2;\n  /** Number of rows the featured product spans */\n  rowSpan?: 1 | 2;\n}\n\n/**\n * Props for ProductGrid component (flexible grid wrapper)\n */\nexport interface ProductGridProps {\n  /** Array of products to display */\n  products: ProductCardProps[];\n  /** Number of columns (2-4) at desktop size */\n  columns?: 2 | 3 | 4;\n  /** Gap between cards */\n  gap?: 'small' | 'medium' | 'large';\n  /** Grid layout variant */\n  layout?: GridLayout;\n  /** Custom featured product placements for asymmetric layouts */\n  featuredPlacements?: FeaturedPlacement[];\n  /** Section heading */\n  heading?: string;\n  /** Section subheading/description */\n  subheading?: string;\n  /** Section description (alias for subheading) */\n  description?: string;\n  /** Section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n  /** Enable stagger animation for items */\n  enableAnimation?: boolean;\n  /** Maximum stagger delay items (for performance) */\n  maxStaggerItems?: number;\n  /** Responsive column overrides */\n  responsiveColumns?: {\n    /** Columns at mobile breakpoint (< 480px) */\n    mobile?: 1 | 2;\n    /** Columns at tablet breakpoint (480px - 767px) */\n    tablet?: 1 | 2 | 3;\n    /** Columns at desktop breakpoint (768px - 1023px) */\n    desktop?: 2 | 3 | 4;\n  };\n}"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts",
  "old_string": "// =================================================================\n// PRODUCT GRID PROPS\n// =================================================================\n\n/**\n * Props for ProductGrid component (optional grid wrapper)\n */\nexport interface ProductGridProps {\n  /** Array of products to display */\n  products: ProductCardProps[];\n  /** Number of columns (2-4) */\n  columns?: 2 | 3 | 4;\n  /** Gap between cards */\n  gap?: 'small' | 'medium' | 'large';\n  /** Section heading */\n  heading?: string;\n  /** Section description */\n  description?: string;\n  /** Section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n}",
  "new_string": "// =================================================================\n// PRODUCT GRID PROPS\n// =================================================================\n\n/**\n * Grid layout variants for different display styles\n */\nexport type GridLayout =\n  | 'standard'           // Even grid layout\n  | 'featured-first'     // First item spans 2 columns\n  | 'featured-left'      // Left item is larger (asymmetric)\n  | 'featured-right'     // Right item is larger (asymmetric)\n  | 'masonry';           // Pinterest-style masonry layout\n\n/**\n * Featured product placement configuration\n */\nexport interface FeaturedPlacement {\n  /** Index of the product to feature (0-based) */\n  index: number;\n  /** Number of columns the featured product spans */\n  colSpan?: 1 | 2;\n  /** Number of rows the featured product spans */\n  rowSpan?: 1 | 2;\n}\n\n/**\n * Props for ProductGrid component (flexible grid wrapper)\n */\nexport interface ProductGridProps {\n  /** Array of products to display */\n  products: ProductCardProps[];\n  /** Number of columns (2-4) at desktop size */\n  columns?: 2 | 3 | 4;\n  /** Gap between cards */\n  gap?: 'small' | 'medium' | 'large';\n  /** Grid layout variant */\n  layout?: GridLayout;\n  /** Custom featured product placements for asymmetric layouts */\n  featuredPlacements?: FeaturedPlacement[];\n  /** Section heading */\n  heading?: string;\n  /** Section subheading/description */\n  subheading?: string;\n  /** Section description (alias for subheading) */\n  description?: string;\n  /** Section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n  /** Enable stagger animation for items */\n  enableAnimation?: boolean;\n  /** Maximum stagger delay items (for performance) */\n  maxStaggerItems?: number;\n  /** Responsive column overrides */\n  responsiveColumns?: {\n    /** Columns at mobile breakpoint (< 480px) */\n    mobile?: 1 | 2;\n    /** Columns at tablet breakpoint (480px - 767px) */\n    tablet?: 1 | 2 | 3;\n    /** Columns at desktop breakpoint (768px - 1023px) */\n    desktop?: 2 | 3 | 4;\n  };\n}"
}

🔧 Tool: Bash
Input: {
  "command": "cat /Users/James/Repos/retail-business/src/types/product.ts",
  "description": "Read product types file content"
}

🔧 Tool: Bash
Input: {
  "command": "cd /Users/James/Repos/retail-business && pwd && ls -la src/types/",
  "description": "Check project directory and types folder"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current working directory"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la src/types/",
  "description": "List types directory"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/retail-business/src/types/product.ts"
}

🔧 Tool: Bash
Input: {
  "command": "realpath src/types/product.ts",
  "description": "Get the absolute path of the product.ts file"
}

🔧 Tool: Bash
Input: {
  "command": "cat src/types/product.ts",
  "description": "Read product types file"
}
Now I understand there's a path issue. Let me write the file with the correct relative path:

🔧 Tool: Write
Input: {
  "file_path": "src/types/product.ts",
  "content": "/**\n * =================================================================\n * PRODUCT CARD TYPE DEFINITIONS\n * =================================================================\n *\n * TypeScript types for product card components with gallery-style\n * display, hover effects, quick shop functionality, and e-commerce\n * integration.\n *\n * =================================================================\n */\n\nimport type { UTMParams } from './shop';\n\n// =================================================================\n// PRODUCT IMAGE TYPES\n// =================================================================\n\n/**\n * Image configuration for product cards with WebP support\n */\nexport interface ProductImage {\n  /** Main image source URL */\n  src: string;\n  /** WebP format source for modern browsers */\n  srcWebP?: string;\n  /** Alt text for accessibility (required) */\n  alt: string;\n  /** Image width for aspect ratio calculation */\n  width?: number;\n  /** Image height for aspect ratio calculation */\n  height?: number;\n  /** Low-resolution placeholder for blur-up effect */\n  placeholder?: string;\n}\n\n// =================================================================\n// PRODUCT PRICE TYPES\n// =================================================================\n\n/**\n * Currency codes for price formatting\n */\nexport type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | string;\n\n/**\n * Price configuration for products\n */\nexport interface ProductPrice {\n  /** Current selling price */\n  amount: number;\n  /** Original price (for showing discounts) */\n  originalAmount?: number;\n  /** Currency code (default: USD) */\n  currency?: CurrencyCode;\n  /** Whether to show decimal places */\n  showDecimals?: boolean;\n}\n\n// =================================================================\n// ASPECT RATIO TYPES\n// =================================================================\n\n/**\n * Supported aspect ratios for product card images\n */\nexport type AspectRatio = '4:5' | '1:1';\n\n// =================================================================\n// PRODUCT CARD PROPS\n// =================================================================\n\n/**\n * Props for the ProductCard component\n */\nexport interface ProductCardProps {\n  /** Unique product identifier */\n  id: string;\n  /** Product name/title */\n  name: string;\n  /** Primary product image */\n  image: ProductImage;\n  /** Secondary image shown on hover (optional) */\n  hoverImage?: ProductImage;\n  /** Product price configuration */\n  price: ProductPrice;\n  /** Direct URL to product page in external shop */\n  shopUrl: string;\n  /** Short product description (optional) */\n  description?: string;\n  /** Product category for display */\n  category?: string;\n  /** Whether the product is featured */\n  featured?: boolean;\n  /** Whether the product is new */\n  isNew?: boolean;\n  /** Whether the product is on sale */\n  onSale?: boolean;\n  /** Whether the product is sold out */\n  soldOut?: boolean;\n  /** Aspect ratio for the image container */\n  aspectRatio?: AspectRatio;\n  /** UTM parameters for shop link tracking */\n  utmParams?: UTMParams;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show loading placeholder */\n  showLoadingState?: boolean;\n  /** Quick shop button text */\n  quickShopText?: string;\n  /** Whether to open shop link in new tab */\n  openInNewTab?: boolean;\n}\n\n// =================================================================\n// PRODUCT GRID PROPS\n// =================================================================\n\n/**\n * Grid layout variants for different display styles\n */\nexport type GridLayout =\n  | 'standard'           // Even grid layout\n  | 'featured-first'     // First item spans 2 columns\n  | 'featured-left'      // Left item is larger (asymmetric)\n  | 'featured-right'     // Right item is larger (asymmetric)\n  | 'masonry';           // Pinterest-style masonry layout\n\n/**\n * Featured product placement configuration\n */\nexport interface FeaturedPlacement {\n  /** Index of the product to feature (0-based) */\n  index: number;\n  /** Number of columns the featured product spans */\n  colSpan?: 1 | 2;\n  /** Number of rows the featured product spans */\n  rowSpan?: 1 | 2;\n}\n\n/**\n * Props for ProductGrid component (flexible grid wrapper)\n */\nexport interface ProductGridProps {\n  /** Array of products to display */\n  products: ProductCardProps[];\n  /** Number of columns (2-4) at desktop size */\n  columns?: 2 | 3 | 4;\n  /** Gap between cards */\n  gap?: 'small' | 'medium' | 'large';\n  /** Grid layout variant */\n  layout?: GridLayout;\n  /** Custom featured product placements for asymmetric layouts */\n  featuredPlacements?: FeaturedPlacement[];\n  /** Section heading */\n  heading?: string;\n  /** Section subheading/description */\n  subheading?: string;\n  /** Section description (alias for subheading) */\n  description?: string;\n  /** Section ID for anchor links */\n  id?: string;\n  /** Additional CSS class names */\n  class?: string;\n  /** Enable stagger animation for items */\n  enableAnimation?: boolean;\n  /** Maximum stagger delay items (for performance) */\n  maxStaggerItems?: number;\n  /** Responsive column overrides */\n  responsiveColumns?: {\n    /** Columns at mobile breakpoint (< 480px) */\n    mobile?: 1 | 2;\n    /** Columns at tablet breakpoint (480px - 767px) */\n    tablet?: 1 | 2 | 3;\n    /** Columns at desktop breakpoint (768px - 1023px) */\n    desktop?: 2 | 3 | 4;\n  };\n}\n\n// =================================================================\n// UTILITY FUNCTIONS\n// =================================================================\n\n/**\n * Format a price for display\n * @param price - Price configuration object\n * @returns Formatted price string (e.g., \"$29.99\")\n */\nexport function formatPrice(price: ProductPrice): string {\n  const { amount, currency = 'USD', showDecimals = true } = price;\n\n  const formatter = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency,\n    minimumFractionDigits: showDecimals ? 2 : 0,\n    maximumFractionDigits: showDecimals ? 2 : 0,\n  });\n\n  return formatter.format(amount);\n}\n\n/**\n * Calculate discount percentage\n * @param price - Price configuration object\n * @returns Discount percentage or null if no discount\n */\nexport function calculateDiscount(price: ProductPrice): number | null {\n  if (!price.originalAmount || price.originalAmount <= price.amount) {\n    return null;\n  }\n\n  const discount = ((price.originalAmount - price.amount) / price.originalAmount) * 100;\n  return Math.round(discount);\n}\n\n/**\n * Get aspect ratio as a CSS-compatible string\n * @param ratio - Aspect ratio type\n * @returns CSS aspect-ratio value (e.g., \"4 / 5\")\n */\nexport function getAspectRatioCss(ratio: AspectRatio): string {\n  switch (ratio) {\n    case '4:5':\n      return '4 / 5';\n    case '1:1':\n      return '1 / 1';\n    default:\n      return '4 / 5';\n  }\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "in_progress",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "in_progress",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "in_progress",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "in_progress",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "pending",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "pending",
      "activeForm": "Running verification tests"
    }
  ]
}
Now let me create the ProductGrid component:

🔧 Tool: Write
Input: {
  "file_path": "src/components/ProductGrid.astro",
  "content": "---\n/**\n * ProductGrid Component\n * A flexible product grid system supporting 2, 3, or 4 columns with optional\n * asymmetric featured product placements. Includes responsive breakpoints\n * and masonry-style options for editorial layouts.\n *\n * Features:\n * - Flexible column layouts (2, 3, or 4 columns)\n * - Responsive breakpoints (mobile → tablet → desktop)\n * - Asymmetric featured product placements\n * - Masonry-style layout for editorial content\n * - Stagger animation support\n * - Full accessibility support (WCAG 2.1 AA)\n * - Reduced motion support\n * - Dark mode support\n *\n * @example Basic usage (3 columns)\n * ```astro\n * <ProductGrid\n *   products={products}\n *   columns={3}\n * />\n * ```\n *\n * @example Featured first layout\n * ```astro\n * <ProductGrid\n *   products={products}\n *   columns={3}\n *   layout=\"featured-first\"\n *   heading=\"Our Collection\"\n *   subheading=\"Discover curated products\"\n * />\n * ```\n *\n * @example Masonry layout for editorial\n * ```astro\n * <ProductGrid\n *   products={products}\n *   columns={3}\n *   layout=\"masonry\"\n *   enableAnimation={true}\n * />\n * ```\n *\n * @example Asymmetric with custom placements\n * ```astro\n * <ProductGrid\n *   products={products}\n *   columns={4}\n *   layout=\"featured-left\"\n *   featuredPlacements={[{ index: 0, colSpan: 2, rowSpan: 2 }]}\n * />\n * ```\n */\n\nimport type { ProductGridProps, FeaturedPlacement, GridLayout } from '../types/product';\nimport ProductCard from './ProductCard.astro';\n\ninterface Props extends ProductGridProps {}\n\nconst {\n  products = [],\n  columns = 3,\n  gap = 'medium',\n  layout = 'standard',\n  featuredPlacements = [],\n  heading,\n  subheading,\n  description,\n  id = 'product-grid',\n  class: className = '',\n  enableAnimation = true,\n  maxStaggerItems = 8,\n  responsiveColumns,\n} = Astro.props;\n\n// Use description as fallback for subheading\nconst displaySubheading = subheading || description;\n\n// Build CSS classes\nconst sectionClasses = [\n  'product-grid',\n  `product-grid--cols-${columns}`,\n  `product-grid--gap-${gap}`,\n  `product-grid--layout-${layout}`,\n  enableAnimation && 'product-grid--animated',\n  className,\n].filter(Boolean).join(' ');\n\n// Get gap CSS value\nconst gapValues: Record<string, string> = {\n  small: 'var(--spacing-4)',\n  medium: 'var(--spacing-6)',\n  large: 'var(--spacing-8)',\n};\n\n// Build responsive column CSS custom properties\nconst responsiveColsStyle = responsiveColumns\n  ? `--grid-cols-mobile: ${responsiveColumns.mobile || 1}; --grid-cols-tablet: ${responsiveColumns.tablet || 2}; --grid-cols-desktop: ${responsiveColumns.desktop || columns};`\n  : '';\n\n// Helper function to get featured placement for an item\nfunction getFeaturedPlacement(index: number): FeaturedPlacement | undefined {\n  return featuredPlacements.find(p => p.index === index);\n}\n\n// Helper function to check if item should be featured based on layout\nfunction isItemFeatured(index: number, layout: GridLayout): boolean {\n  if (layout === 'featured-first' && index === 0) return true;\n  if (layout === 'featured-left' && index === 0) return true;\n  if (layout === 'featured-right' && index === 0) return true;\n  return featuredPlacements.some(p => p.index === index);\n}\n\n// Helper function to get item style for grid placement\nfunction getItemStyle(index: number, layout: GridLayout): string {\n  const placement = getFeaturedPlacement(index);\n  const styles: string[] = [];\n\n  // Apply stagger animation delay\n  if (enableAnimation) {\n    const staggerIndex = Math.min(index, maxStaggerItems - 1);\n    styles.push(`--stagger-delay: ${staggerIndex * 100}ms`);\n  }\n\n  // Apply custom placement spans\n  if (placement) {\n    if (placement.colSpan && placement.colSpan > 1) {\n      styles.push(`grid-column: span ${placement.colSpan}`);\n    }\n    if (placement.rowSpan && placement.rowSpan > 1) {\n      styles.push(`grid-row: span ${placement.rowSpan}`);\n    }\n    return styles.join('; ');\n  }\n\n  // Apply default featured spans based on layout\n  if (layout === 'featured-first' && index === 0) {\n    styles.push('grid-column: span 2');\n    return styles.join('; ');\n  }\n\n  if (layout === 'featured-left' && index === 0) {\n    styles.push('grid-column: span 2');\n    styles.push('grid-row: span 2');\n    return styles.join('; ');\n  }\n\n  if (layout === 'featured-right' && index === 0) {\n    styles.push('grid-column: -3 / -1'); // Last 2 columns\n    styles.push('grid-row: span 2');\n    return styles.join('; ');\n  }\n\n  return styles.join('; ');\n}\n\n// Check if we have products to display\nconst hasProducts = products && products.length > 0;\n---\n\n<section\n  class={sectionClasses}\n  id={id}\n  aria-labelledby={heading ? `${id}-heading` : undefined}\n  style={`--grid-cols: ${columns}; --grid-gap: ${gapValues[gap]}; ${responsiveColsStyle}`}\n  data-layout={layout}\n>\n  <div class=\"product-grid__container\">\n    <!-- Section Header -->\n    {(heading || displaySubheading) && (\n      <header class=\"product-grid__header section-heading--decorated\">\n        {heading && (\n          <h2 id={`${id}-heading`} class=\"product-grid__heading\">{heading}</h2>\n        )}\n        {displaySubheading && (\n          <p class=\"product-grid__subheading\">{displaySubheading}</p>\n        )}\n      </header>\n    )}\n\n    <!-- Products Grid -->\n    {hasProducts ? (\n      <div\n        class=\"product-grid__grid\"\n        role=\"list\"\n        aria-label=\"Products\"\n      >\n        {products.map((product, index) => {\n          const isFeatured = isItemFeatured(index, layout);\n          const itemStyle = getItemStyle(index, layout);\n\n          return (\n            <div\n              class={`product-grid__item ${isFeatured ? 'product-grid__item--featured' : ''} ${enableAnimation ? 'product-grid__item--animated' : ''}`}\n              role=\"listitem\"\n              style={itemStyle}\n              data-index={index}\n            >\n              <ProductCard\n                {...product}\n                class={isFeatured ? 'product-card--grid-featured' : ''}\n                utmParams={{\n                  ...product.utmParams,\n                  content: `product_grid_${product.id}`,\n                }}\n              />\n            </div>\n          );\n        })}\n      </div>\n    ) : (\n      <!-- Empty State -->\n      <div class=\"product-grid__empty\" role=\"status\" aria-live=\"polite\">\n        <div class=\"product-grid__empty-icon\" aria-hidden=\"true\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 12H4V9h16v10zM9 3h6v2H9zM9 10h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM9 14h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z\" fill=\"currentColor\"/>\n          </svg>\n        </div>\n        <p class=\"product-grid__empty-text\">No products to display.</p>\n      </div>\n    )}\n  </div>\n</section>\n\n<style>\n  /* =================================================================\n   * PRODUCT GRID COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .product-grid {\n    padding: var(--spacing-8) var(--spacing-4);\n  }\n\n  .product-grid__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  /* =================================================================\n   * SECTION HEADER\n   * ================================================================= */\n  .product-grid__header {\n    text-align: center;\n    margin-bottom: var(--spacing-10);\n  }\n\n  .product-grid__heading {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n  }\n\n  .product-grid__subheading {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    margin: 0;\n    max-width: 42rem;\n    margin-left: auto;\n    margin-right: auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* =================================================================\n   * PRODUCTS GRID - Base Styles\n   * ================================================================= */\n  .product-grid__grid {\n    display: grid;\n    grid-template-columns: repeat(var(--grid-cols, 3), 1fr);\n    gap: var(--grid-gap, var(--spacing-6));\n  }\n\n  .product-grid__item {\n    min-width: 0; /* Prevent grid blowout */\n  }\n\n  /* =================================================================\n   * FEATURED ITEM STYLES\n   * ================================================================= */\n  .product-grid__item--featured {\n    /* Featured items have special styling */\n  }\n\n  .product-grid__item--featured :global(.product-card) {\n    height: 100%;\n  }\n\n  .product-grid__item--featured :global(.product-card__image-container) {\n    aspect-ratio: auto;\n    height: 100%;\n    min-height: 300px;\n  }\n\n  /* =================================================================\n   * LAYOUT VARIANTS\n   * ================================================================= */\n\n  /* Standard Grid - No special treatment */\n  .product-grid--layout-standard .product-grid__grid {\n    /* Default grid behavior */\n  }\n\n  /* Featured First - First item spans 2 columns */\n  .product-grid--layout-featured-first .product-grid__grid {\n    grid-auto-flow: dense;\n  }\n\n  /* Featured Left - First item is larger on left */\n  .product-grid--layout-featured-left .product-grid__grid {\n    grid-auto-flow: dense;\n  }\n\n  /* Featured Right - First item is larger on right */\n  .product-grid--layout-featured-right .product-grid__grid {\n    grid-auto-flow: dense;\n  }\n\n  /* Masonry Layout - Pinterest-style staggered grid */\n  .product-grid--layout-masonry .product-grid__grid {\n    grid-template-rows: masonry;\n    align-items: start;\n  }\n\n  /* Fallback for browsers without masonry support */\n  @supports not (grid-template-rows: masonry) {\n    .product-grid--layout-masonry .product-grid__grid {\n      grid-auto-rows: min-content;\n    }\n\n    .product-grid--layout-masonry .product-grid__item:nth-child(3n+1) {\n      /* Stagger odd items */\n    }\n\n    .product-grid--layout-masonry .product-grid__item:nth-child(3n+2) :global(.product-card__image-container) {\n      aspect-ratio: 1 / 1;\n    }\n\n    .product-grid--layout-masonry .product-grid__item:nth-child(3n) :global(.product-card__image-container) {\n      aspect-ratio: 3 / 4;\n    }\n  }\n\n  /* =================================================================\n   * GAP VARIANTS\n   * ================================================================= */\n  .product-grid--gap-small .product-grid__grid {\n    gap: var(--spacing-4);\n  }\n\n  .product-grid--gap-medium .product-grid__grid {\n    gap: var(--spacing-6);\n  }\n\n  .product-grid--gap-large .product-grid__grid {\n    gap: var(--spacing-8);\n  }\n\n  /* =================================================================\n   * COLUMN VARIANTS\n   * ================================================================= */\n  .product-grid--cols-2 .product-grid__grid {\n    --grid-cols: 2;\n  }\n\n  .product-grid--cols-3 .product-grid__grid {\n    --grid-cols: 3;\n  }\n\n  .product-grid--cols-4 .product-grid__grid {\n    --grid-cols: 4;\n  }\n\n  /* =================================================================\n   * ANIMATION STYLES\n   * ================================================================= */\n  .product-grid__item--animated {\n    opacity: 0;\n    transform: translateY(20px);\n    transition:\n      opacity var(--duration-500) var(--ease-out),\n      transform var(--duration-500) var(--ease-out);\n    transition-delay: var(--stagger-delay, 0ms);\n  }\n\n  .product-grid--animated .product-grid__item--animated.product-grid__item--visible {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  /* Immediate visibility for non-animated grids */\n  .product-grid:not(.product-grid--animated) .product-grid__item--animated {\n    opacity: 1;\n    transform: none;\n    transition: none;\n  }\n\n  /* =================================================================\n   * EMPTY STATE\n   * ================================================================= */\n  .product-grid__empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-16) var(--spacing-8);\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-xl);\n    border: 2px dashed var(--color-border);\n  }\n\n  .product-grid__empty-icon {\n    width: var(--spacing-16);\n    height: var(--spacing-16);\n    color: var(--color-text-tertiary);\n  }\n\n  .product-grid__empty-icon svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  .product-grid__empty-text {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-tertiary);\n    margin: 0;\n    text-align: center;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n\n  /* Large Desktop (1280px+) */\n  @media screen and (min-width: 1280px) {\n    .product-grid {\n      padding: var(--spacing-12) var(--spacing-8);\n    }\n\n    .product-grid__heading {\n      font-size: var(--font-size-4xl);\n    }\n  }\n\n  /* Desktop (1024px - 1279px) */\n  @media screen and (min-width: 1024px) and (max-width: 1279px) {\n    .product-grid__grid {\n      grid-template-columns: repeat(var(--grid-cols-desktop, var(--grid-cols, 3)), 1fr);\n    }\n  }\n\n  /* Tablet (768px - 1023px) */\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    .product-grid {\n      padding: var(--spacing-8) var(--spacing-6);\n    }\n\n    .product-grid__grid {\n      grid-template-columns: repeat(var(--grid-cols-tablet, 2), 1fr);\n    }\n\n    /* Adjust featured items on tablet */\n    .product-grid--layout-featured-first .product-grid__item--featured,\n    .product-grid--layout-featured-left .product-grid__item--featured,\n    .product-grid--layout-featured-right .product-grid__item--featured {\n      grid-column: span 2;\n      grid-row: span 1;\n    }\n\n    .product-grid__heading {\n      font-size: var(--font-size-3xl);\n    }\n  }\n\n  /* Small Tablet / Large Mobile (480px - 767px) */\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    .product-grid {\n      padding: var(--spacing-6) var(--spacing-4);\n    }\n\n    .product-grid__grid {\n      grid-template-columns: repeat(var(--grid-cols-tablet, 2), 1fr);\n      gap: var(--spacing-4);\n    }\n\n    /* Reset featured items on smaller screens */\n    .product-grid--layout-featured-first .product-grid__item--featured,\n    .product-grid--layout-featured-left .product-grid__item--featured,\n    .product-grid--layout-featured-right .product-grid__item--featured {\n      grid-column: span 1;\n      grid-row: span 1;\n    }\n\n    .product-grid__heading {\n      font-size: var(--font-size-2xl);\n    }\n\n    .product-grid__subheading {\n      font-size: var(--font-size-base);\n    }\n  }\n\n  /* Mobile (< 480px) */\n  @media screen and (max-width: 479px) {\n    .product-grid {\n      padding: var(--spacing-4) var(--spacing-3);\n    }\n\n    .product-grid__header {\n      margin-bottom: var(--spacing-6);\n    }\n\n    .product-grid__grid {\n      grid-template-columns: repeat(var(--grid-cols-mobile, 1), 1fr);\n      gap: var(--spacing-4);\n    }\n\n    /* All items single column on mobile */\n    .product-grid__item,\n    .product-grid__item--featured {\n      grid-column: span 1 !important;\n      grid-row: span 1 !important;\n    }\n\n    .product-grid__heading {\n      font-size: var(--font-size-xl);\n    }\n\n    .product-grid__subheading {\n      font-size: var(--font-size-sm);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .product-grid__item--animated {\n      opacity: 1;\n      transform: none;\n      transition: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .product-grid {\n    background-color: var(--color-background);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-grid__empty {\n    background-color: var(--color-background-elevated);\n    border-color: var(--color-border-dark);\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .product-grid__empty {\n      border: 2px solid currentColor;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .product-grid {\n      padding: var(--spacing-4) 0;\n    }\n\n    .product-grid__grid {\n      grid-template-columns: repeat(2, 1fr);\n      gap: var(--spacing-4);\n    }\n\n    .product-grid__item--animated {\n      opacity: 1;\n      transform: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * ProductGrid Interactive Features\n   * - Intersection Observer for stagger animation reveal\n   * - Handles visibility on scroll\n   */\n  function initProductGrid() {\n    const grids = document.querySelectorAll('.product-grid--animated');\n\n    grids.forEach((grid) => {\n      const items = grid.querySelectorAll('.product-grid__item--animated');\n\n      // Use Intersection Observer for scroll-triggered animations\n      if ('IntersectionObserver' in window) {\n        const observer = new IntersectionObserver(\n          (entries) => {\n            entries.forEach((entry) => {\n              if (entry.isIntersecting) {\n                entry.target.classList.add('product-grid__item--visible');\n                observer.unobserve(entry.target);\n              }\n            });\n          },\n          {\n            root: null,\n            rootMargin: '0px 0px -50px 0px',\n            threshold: 0.1,\n          }\n        );\n\n        items.forEach((item) => {\n          observer.observe(item);\n        });\n      } else {\n        // Fallback: show all items immediately\n        items.forEach((item) => {\n          item.classList.add('product-grid__item--visible');\n        });\n      }\n    });\n  }\n\n  // Initialize on DOM ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initProductGrid);\n  } else {\n    initProductGrid();\n  }\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', initProductGrid);\n</script>\n"
}
Now let me update the todo list and create a demo page to showcase the component:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "completed",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "completed",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "completed",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "completed",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create demo page to showcase component",
      "status": "in_progress",
      "activeForm": "Creating demo page"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "pending",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "pending",
      "activeForm": "Running verification tests"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "ls -la src/pages/demo/",
  "description": "List demo pages directory"
}

🔧 Tool: Write
Input: {
  "file_path": "src/pages/demo/product-grid.astro",
  "content": "---\n/**\n * Product Grid Demo Page\n * Showcases the flexible ProductGrid component with various configurations.\n *\n * Demonstrates:\n * - 2, 3, and 4 column layouts\n * - Featured-first layout with first item spanning 2 columns\n * - Featured-left asymmetric layout\n * - Featured-right asymmetric layout\n * - Masonry-style editorial layout\n * - Different gap sizes\n * - Responsive behavior\n *\n * @route /demo/product-grid\n */\n\nimport Layout from '../../layouts/Layout.astro';\nimport ProductGrid from '../../components/ProductGrid.astro';\nimport type { ProductCardProps } from '../../types/product';\n\n// Demo products data\nconst demoProducts: ProductCardProps[] = [\n  {\n    id: 'product-1',\n    name: 'Premium Wireless Headphones',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Premium Wireless Headphones'\n    },\n    price: { amount: 299.99 },\n    shopUrl: 'https://shop.example.com/headphones',\n    category: 'Electronics',\n    isNew: true,\n    description: 'High-fidelity audio with active noise cancellation'\n  },\n  {\n    id: 'product-2',\n    name: 'Leather Weekend Bag',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Leather Weekend Bag'\n    },\n    price: { amount: 249.99, originalAmount: 349.99 },\n    shopUrl: 'https://shop.example.com/bag',\n    category: 'Accessories',\n    onSale: true,\n    description: 'Handcrafted genuine leather with brass hardware'\n  },\n  {\n    id: 'product-3',\n    name: 'Minimalist Watch',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Minimalist Watch'\n    },\n    price: { amount: 189.99 },\n    shopUrl: 'https://shop.example.com/watch',\n    category: 'Accessories',\n    description: 'Swiss movement with sapphire crystal'\n  },\n  {\n    id: 'product-4',\n    name: 'Ceramic Plant Pot Set',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Ceramic Plant Pot Set'\n    },\n    price: { amount: 79.99 },\n    shopUrl: 'https://shop.example.com/planters',\n    category: 'Home',\n    featured: true,\n    description: 'Set of 3 modern ceramic planters'\n  },\n  {\n    id: 'product-5',\n    name: 'Organic Cotton T-Shirt',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Organic Cotton T-Shirt'\n    },\n    price: { amount: 45.00 },\n    shopUrl: 'https://shop.example.com/tshirt',\n    category: 'Apparel',\n    description: '100% organic cotton, ethically sourced'\n  },\n  {\n    id: 'product-6',\n    name: 'Smart Home Hub',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Smart Home Hub'\n    },\n    price: { amount: 149.99 },\n    shopUrl: 'https://shop.example.com/smarthub',\n    category: 'Electronics',\n    isNew: true,\n    description: 'Control your entire home from one device'\n  },\n  {\n    id: 'product-7',\n    name: 'Artisan Coffee Beans',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Artisan Coffee Beans'\n    },\n    price: { amount: 24.99 },\n    shopUrl: 'https://shop.example.com/coffee',\n    category: 'Food & Drink',\n    description: 'Single-origin, small batch roasted'\n  },\n  {\n    id: 'product-8',\n    name: 'Yoga Mat Premium',\n    image: {\n      src: '/images/products/product-placeholder.svg',\n      alt: 'Yoga Mat Premium'\n    },\n    price: { amount: 89.99, originalAmount: 119.99 },\n    shopUrl: 'https://shop.example.com/yogamat',\n    category: 'Fitness',\n    onSale: true,\n    description: 'Extra thick, non-slip surface'\n  },\n];\n\n// Different product sets for various demos\nconst products4 = demoProducts.slice(0, 4);\nconst products6 = demoProducts.slice(0, 6);\nconst products8 = demoProducts;\n---\n\n<Layout\n  title=\"Product Grid Demo\"\n  description=\"Demo page showcasing the flexible ProductGrid component with various layout options.\"\n>\n  <main class=\"demo-page\">\n    <div class=\"demo-page__container\">\n      <!-- Page Header -->\n      <header class=\"demo-page__header\">\n        <h1 class=\"demo-page__title\">Product Grid Component</h1>\n        <p class=\"demo-page__description\">\n          A flexible product grid system supporting 2, 3, or 4 columns with optional\n          asymmetric featured product placements and masonry-style layouts.\n        </p>\n      </header>\n\n      <!-- Demo Sections -->\n      <div class=\"demo-page__sections\">\n\n        <!-- Standard 4-Column Grid -->\n        <section class=\"demo-section\" data-testid=\"grid-4-columns\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">4-Column Standard Grid</h2>\n            <p class=\"demo-section__description\">Default even grid with 4 columns on desktop</p>\n            <code class=\"demo-section__code\">columns={4} layout=\"standard\"</code>\n          </div>\n          <ProductGrid\n            products={products8}\n            columns={4}\n            layout=\"standard\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-4-col\"\n          />\n        </section>\n\n        <!-- Standard 3-Column Grid -->\n        <section class=\"demo-section\" data-testid=\"grid-3-columns\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">3-Column Standard Grid</h2>\n            <p class=\"demo-section__description\">Standard 3-column grid layout</p>\n            <code class=\"demo-section__code\">columns={3} layout=\"standard\"</code>\n          </div>\n          <ProductGrid\n            products={products6}\n            columns={3}\n            layout=\"standard\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-3-col\"\n          />\n        </section>\n\n        <!-- Standard 2-Column Grid -->\n        <section class=\"demo-section\" data-testid=\"grid-2-columns\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">2-Column Standard Grid</h2>\n            <p class=\"demo-section__description\">Simple 2-column grid layout</p>\n            <code class=\"demo-section__code\">columns={2} layout=\"standard\"</code>\n          </div>\n          <ProductGrid\n            products={products4}\n            columns={2}\n            layout=\"standard\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-2-col\"\n          />\n        </section>\n\n        <!-- Featured First Layout -->\n        <section class=\"demo-section\" data-testid=\"grid-featured-first\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Featured First Layout</h2>\n            <p class=\"demo-section__description\">First product spans 2 columns for emphasis</p>\n            <code class=\"demo-section__code\">columns={3} layout=\"featured-first\"</code>\n          </div>\n          <ProductGrid\n            products={products6}\n            columns={3}\n            layout=\"featured-first\"\n            heading=\"Featured Collection\"\n            subheading=\"Our most popular items this season\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-featured-first\"\n          />\n        </section>\n\n        <!-- Featured Left Layout -->\n        <section class=\"demo-section\" data-testid=\"grid-featured-left\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Featured Left (Asymmetric)</h2>\n            <p class=\"demo-section__description\">Large featured product on the left spanning 2 columns and 2 rows</p>\n            <code class=\"demo-section__code\">columns={3} layout=\"featured-left\"</code>\n          </div>\n          <ProductGrid\n            products={products6}\n            columns={3}\n            layout=\"featured-left\"\n            heading=\"Editor's Picks\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-featured-left\"\n          />\n        </section>\n\n        <!-- Featured Right Layout -->\n        <section class=\"demo-section\" data-testid=\"grid-featured-right\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Featured Right (Asymmetric)</h2>\n            <p class=\"demo-section__description\">Large featured product on the right</p>\n            <code class=\"demo-section__code\">columns={3} layout=\"featured-right\"</code>\n          </div>\n          <ProductGrid\n            products={products6}\n            columns={3}\n            layout=\"featured-right\"\n            heading=\"Trending Now\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-featured-right\"\n          />\n        </section>\n\n        <!-- Masonry Layout -->\n        <section class=\"demo-section\" data-testid=\"grid-masonry\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Masonry Layout</h2>\n            <p class=\"demo-section__description\">Pinterest-style staggered grid for editorial content</p>\n            <code class=\"demo-section__code\">columns={3} layout=\"masonry\"</code>\n          </div>\n          <ProductGrid\n            products={products6}\n            columns={3}\n            layout=\"masonry\"\n            heading=\"Editorial Selection\"\n            subheading=\"Curated picks with varied visual rhythm\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-masonry\"\n          />\n        </section>\n\n        <!-- Custom Featured Placements -->\n        <section class=\"demo-section\" data-testid=\"grid-custom-placements\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Custom Featured Placements</h2>\n            <p class=\"demo-section__description\">Multiple featured items with custom span configurations</p>\n            <code class=\"demo-section__code\">featuredPlacements=[&#123;index: 0, colSpan: 2&#125;, &#123;index: 3, colSpan: 2&#125;]</code>\n          </div>\n          <ProductGrid\n            products={products8}\n            columns={4}\n            layout=\"standard\"\n            featuredPlacements={[\n              { index: 0, colSpan: 2 },\n              { index: 5, colSpan: 2 }\n            ]}\n            heading=\"Mix & Match\"\n            gap=\"medium\"\n            enableAnimation={false}\n            id=\"grid-custom-placements\"\n          />\n        </section>\n\n        <!-- Different Gap Sizes -->\n        <section class=\"demo-section\" data-testid=\"grid-gap-sizes\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Gap Size Variations</h2>\n            <p class=\"demo-section__description\">Small, medium, and large gap options</p>\n          </div>\n\n          <div class=\"demo-subsection\">\n            <h3 class=\"demo-subsection__title\">Small Gap</h3>\n            <code class=\"demo-section__code\">gap=\"small\"</code>\n            <ProductGrid\n              products={products4}\n              columns={4}\n              gap=\"small\"\n              enableAnimation={false}\n              id=\"grid-gap-small\"\n            />\n          </div>\n\n          <div class=\"demo-subsection\">\n            <h3 class=\"demo-subsection__title\">Medium Gap (Default)</h3>\n            <code class=\"demo-section__code\">gap=\"medium\"</code>\n            <ProductGrid\n              products={products4}\n              columns={4}\n              gap=\"medium\"\n              enableAnimation={false}\n              id=\"grid-gap-medium\"\n            />\n          </div>\n\n          <div class=\"demo-subsection\">\n            <h3 class=\"demo-subsection__title\">Large Gap</h3>\n            <code class=\"demo-section__code\">gap=\"large\"</code>\n            <ProductGrid\n              products={products4}\n              columns={4}\n              gap=\"large\"\n              enableAnimation={false}\n              id=\"grid-gap-large\"\n            />\n          </div>\n        </section>\n\n        <!-- With Animation -->\n        <section class=\"demo-section\" data-testid=\"grid-animated\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Animated Grid (Scroll)</h2>\n            <p class=\"demo-section__description\">Stagger animation on scroll with Intersection Observer</p>\n            <code class=\"demo-section__code\">enableAnimation={true} maxStaggerItems={8}</code>\n          </div>\n          <ProductGrid\n            products={products8}\n            columns={4}\n            layout=\"standard\"\n            heading=\"Scroll to Reveal\"\n            subheading=\"Products animate in as you scroll\"\n            gap=\"medium\"\n            enableAnimation={true}\n            maxStaggerItems={8}\n            id=\"grid-animated\"\n          />\n        </section>\n\n        <!-- Responsive Custom Columns -->\n        <section class=\"demo-section\" data-testid=\"grid-responsive-custom\">\n          <div class=\"demo-section__header\">\n            <h2 class=\"demo-section__title\">Custom Responsive Breakpoints</h2>\n            <p class=\"demo-section__description\">Override default responsive column counts</p>\n            <code class=\"demo-section__code\">responsiveColumns=&#123;mobile: 2, tablet: 3, desktop: 4&#125;</code>\n          </div>\n          <ProductGrid\n            products={products8}\n            columns={4}\n            layout=\"standard\"\n            gap=\"medium\"\n            enableAnimation={false}\n            responsiveColumns={{\n              mobile: 2,\n              tablet: 3,\n              desktop: 4\n            }}\n            id=\"grid-responsive-custom\"\n          />\n        </section>\n\n      </div>\n    </div>\n  </main>\n</Layout>\n\n<style>\n  /* =================================================================\n   * DEMO PAGE STYLES\n   * ================================================================= */\n\n  .demo-page {\n    padding: var(--spacing-8) 0 var(--spacing-16);\n    background-color: var(--color-background);\n  }\n\n  .demo-page__container {\n    width: 100%;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    padding: 0 var(--spacing-4);\n  }\n\n  /* =================================================================\n   * HEADER\n   * ================================================================= */\n  .demo-page__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n    padding-bottom: var(--spacing-8);\n    border-bottom: 1px solid var(--color-border);\n  }\n\n  .demo-page__title {\n    margin: 0 0 var(--spacing-4);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-4xl);\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height-tight);\n    color: var(--color-text-primary);\n  }\n\n  .demo-page__description {\n    margin: 0 auto;\n    max-width: 600px;\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* =================================================================\n   * DEMO SECTIONS\n   * ================================================================= */\n  .demo-page__sections {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-16);\n  }\n\n  .demo-section {\n    padding: var(--spacing-8) 0;\n    border-bottom: 1px solid var(--color-border-light);\n  }\n\n  .demo-section:last-child {\n    border-bottom: none;\n  }\n\n  .demo-section__header {\n    text-align: center;\n    margin-bottom: var(--spacing-8);\n  }\n\n  .demo-section__title {\n    margin: 0 0 var(--spacing-2);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n  }\n\n  .demo-section__description {\n    margin: 0 0 var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n  }\n\n  .demo-section__code {\n    display: inline-block;\n    padding: var(--spacing-1) var(--spacing-3);\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-md);\n    font-family: var(--font-mono);\n    font-size: var(--font-size-sm);\n    color: var(--color-primary);\n  }\n\n  /* =================================================================\n   * DEMO SUBSECTIONS\n   * ================================================================= */\n  .demo-subsection {\n    margin-top: var(--spacing-8);\n    padding-top: var(--spacing-6);\n    border-top: 1px dashed var(--color-border-light);\n  }\n\n  .demo-subsection:first-of-type {\n    border-top: none;\n    padding-top: 0;\n    margin-top: 0;\n  }\n\n  .demo-subsection__title {\n    margin: 0 0 var(--spacing-2);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    text-align: center;\n  }\n\n  .demo-subsection .demo-section__code {\n    display: block;\n    text-align: center;\n    margin-bottom: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media screen and (max-width: 767px) {\n    .demo-page {\n      padding: var(--spacing-4) 0 var(--spacing-12);\n    }\n\n    .demo-page__title {\n      font-size: var(--font-size-2xl);\n    }\n\n    .demo-page__description {\n      font-size: var(--font-size-base);\n    }\n\n    .demo-section__title {\n      font-size: var(--font-size-xl);\n    }\n\n    .demo-page__sections {\n      gap: var(--spacing-10);\n    }\n  }\n</style>\n"
}
Now let me check if there's a product placeholder image and create one if needed:

🔧 Tool: Bash
Input: {
  "command": "ls -la public/images/products/ 2>/dev/null || mkdir -p public/images/products && ls -la public/images/",
  "description": "Check for product images directory"
}

🔧 Tool: Write
Input: {
  "file_path": "public/images/products/product-placeholder.svg",
  "content": "<svg width=\"400\" height=\"500\" viewBox=\"0 0 400 500\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"400\" height=\"500\" fill=\"#F1F5F9\"/>\n  <rect x=\"140\" y=\"190\" width=\"120\" height=\"120\" rx=\"8\" fill=\"#E2E8F0\"/>\n  <path d=\"M176 230L200 270L224 230H176Z\" fill=\"#94A3B8\"/>\n  <circle cx=\"200\" cy=\"215\" r=\"15\" fill=\"#94A3B8\"/>\n  <rect x=\"170\" y=\"290\" width=\"60\" height=\"8\" rx=\"4\" fill=\"#CBD5E1\"/>\n  <rect x=\"180\" y=\"306\" width=\"40\" height=\"6\" rx=\"3\" fill=\"#CBD5E1\"/>\n</svg>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "completed",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "completed",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "completed",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "completed",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create demo page to showcase component",
      "status": "completed",
      "activeForm": "Creating demo page"
    },
    {
      "content": "Build project and verify no TypeScript errors",
      "status": "in_progress",
      "activeForm": "Building project"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "pending",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "pending",
      "activeForm": "Running verification tests"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "npm run build 2>&1 | head -100",
  "description": "Build project to verify no errors",
  "timeout": 120000
}
The build completed successfully. Now let me create the Playwright verification test:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "completed",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "completed",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "completed",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "completed",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create demo page to showcase component",
      "status": "completed",
      "activeForm": "Creating demo page"
    },
    {
      "content": "Build project and verify no TypeScript errors",
      "status": "completed",
      "activeForm": "Building project"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "in_progress",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "pending",
      "activeForm": "Running verification tests"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "playwright.config.ts"
}

🔧 Tool: Write
Input: {
  "file_path": "tests/product-grid-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Product Grid Component Verification Tests\n *\n * These tests verify the ProductGrid component works correctly with:\n * - 2, 3, and 4 column layouts\n * - Featured-first, featured-left, and featured-right asymmetric layouts\n * - Masonry layout\n * - Responsive behavior\n * - Custom featured placements\n *\n * NOTE: This is a temporary verification test file.\n */\n\ntest.describe('Product Grid Component', () => {\n  test.beforeEach(async ({ page }) => {\n    await page.goto('/demo/product-grid');\n  });\n\n  test('page loads successfully', async ({ page }) => {\n    await expect(page).toHaveTitle(/Product Grid Demo/);\n  });\n\n  test('4-column grid renders with correct structure', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-4-columns\"]');\n    await expect(section).toBeVisible();\n\n    // Check grid container exists\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toBeVisible();\n\n    // Check that products are rendered\n    const items = section.locator('.product-grid__item');\n    const count = await items.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('3-column grid renders correctly', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-3-columns\"]');\n    await expect(section).toBeVisible();\n\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toBeVisible();\n\n    const items = section.locator('.product-grid__item');\n    const count = await items.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('2-column grid renders correctly', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-2-columns\"]');\n    await expect(section).toBeVisible();\n\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toBeVisible();\n  });\n\n  test('featured-first layout has featured item', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-featured-first\"]');\n    await expect(section).toBeVisible();\n\n    // Check for featured item class\n    const featuredItem = section.locator('.product-grid__item--featured');\n    await expect(featuredItem.first()).toBeVisible();\n\n    // Check heading is rendered\n    const heading = section.locator('.product-grid__heading');\n    await expect(heading).toHaveText('Featured Collection');\n  });\n\n  test('featured-left layout renders asymmetric grid', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-featured-left\"]');\n    await expect(section).toBeVisible();\n\n    // Check the grid has the correct layout class\n    const gridWrapper = section.locator('.product-grid--layout-featured-left');\n    await expect(gridWrapper).toBeVisible();\n\n    // Check featured item exists\n    const featuredItem = section.locator('.product-grid__item--featured');\n    await expect(featuredItem.first()).toBeVisible();\n  });\n\n  test('featured-right layout renders correctly', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-featured-right\"]');\n    await expect(section).toBeVisible();\n\n    const gridWrapper = section.locator('.product-grid--layout-featured-right');\n    await expect(gridWrapper).toBeVisible();\n  });\n\n  test('masonry layout renders correctly', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-masonry\"]');\n    await expect(section).toBeVisible();\n\n    const gridWrapper = section.locator('.product-grid--layout-masonry');\n    await expect(gridWrapper).toBeVisible();\n  });\n\n  test('custom featured placements work', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-custom-placements\"]');\n    await expect(section).toBeVisible();\n\n    // Check multiple featured items exist\n    const featuredItems = section.locator('.product-grid__item--featured');\n    const count = await featuredItems.count();\n    expect(count).toBeGreaterThanOrEqual(1);\n  });\n\n  test('gap size variations render correctly', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-gap-sizes\"]');\n    await expect(section).toBeVisible();\n\n    // Check small gap grid\n    const smallGapGrid = section.locator('#grid-gap-small');\n    await expect(smallGapGrid).toBeVisible();\n\n    // Check medium gap grid\n    const mediumGapGrid = section.locator('#grid-gap-medium');\n    await expect(mediumGapGrid).toBeVisible();\n\n    // Check large gap grid\n    const largeGapGrid = section.locator('#grid-gap-large');\n    await expect(largeGapGrid).toBeVisible();\n  });\n\n  test('animated grid has animation classes', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-animated\"]');\n    await expect(section).toBeVisible();\n\n    // Check for animated class on grid\n    const animatedGrid = section.locator('.product-grid--animated');\n    await expect(animatedGrid).toBeVisible();\n\n    // Check items have animation classes\n    const animatedItems = section.locator('.product-grid__item--animated');\n    const count = await animatedItems.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('product cards render with required elements', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-4-columns\"]');\n\n    // Check first product card has required elements\n    const firstCard = section.locator('.product-card').first();\n    await expect(firstCard).toBeVisible();\n\n    // Check image container\n    const imageContainer = firstCard.locator('.product-card__image-container');\n    await expect(imageContainer).toBeVisible();\n\n    // Check product name\n    const productName = firstCard.locator('.product-card__name');\n    await expect(productName).toBeVisible();\n\n    // Check price\n    const price = firstCard.locator('.product-card__price');\n    await expect(price).toBeVisible();\n  });\n\n  test('responsive columns custom override is applied', async ({ page }) => {\n    const section = page.locator('[data-testid=\"grid-responsive-custom\"]');\n    await expect(section).toBeVisible();\n\n    // Check the grid has CSS custom properties set\n    const grid = section.locator('.product-grid');\n    await expect(grid).toBeVisible();\n  });\n});\n\ntest.describe('Product Grid Responsive Behavior', () => {\n  test('grid adapts to mobile viewport', async ({ page }) => {\n    // Set mobile viewport\n    await page.setViewportSize({ width: 375, height: 667 });\n    await page.goto('/demo/product-grid');\n\n    const section = page.locator('[data-testid=\"grid-4-columns\"]');\n    await expect(section).toBeVisible();\n\n    // Grid should still render correctly on mobile\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toBeVisible();\n\n    const items = section.locator('.product-grid__item');\n    const count = await items.count();\n    expect(count).toBeGreaterThan(0);\n  });\n\n  test('grid adapts to tablet viewport', async ({ page }) => {\n    // Set tablet viewport\n    await page.setViewportSize({ width: 768, height: 1024 });\n    await page.goto('/demo/product-grid');\n\n    const section = page.locator('[data-testid=\"grid-4-columns\"]');\n    await expect(section).toBeVisible();\n\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toBeVisible();\n  });\n});\n\ntest.describe('Product Grid Accessibility', () => {\n  test('grid has proper ARIA attributes', async ({ page }) => {\n    await page.goto('/demo/product-grid');\n\n    const section = page.locator('[data-testid=\"grid-featured-first\"]');\n\n    // Check grid has role=\"list\"\n    const grid = section.locator('.product-grid__grid');\n    await expect(grid).toHaveAttribute('role', 'list');\n\n    // Check items have role=\"listitem\"\n    const firstItem = section.locator('.product-grid__item').first();\n    await expect(firstItem).toHaveAttribute('role', 'listitem');\n  });\n\n  test('heading has proper ID for aria-labelledby', async ({ page }) => {\n    await page.goto('/demo/product-grid');\n\n    const section = page.locator('[data-testid=\"grid-featured-first\"]');\n    const heading = section.locator('.product-grid__heading');\n\n    // Check heading has an ID\n    const headingId = await heading.getAttribute('id');\n    expect(headingId).toBeTruthy();\n\n    // Check section references the heading\n    const sectionElement = section.locator('.product-grid');\n    const ariaLabelledBy = await sectionElement.getAttribute('aria-labelledby');\n    expect(ariaLabelledBy).toBe(headingId);\n  });\n});\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "completed",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "completed",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "completed",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "completed",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create demo page to showcase component",
      "status": "completed",
      "activeForm": "Creating demo page"
    },
    {
      "content": "Build project and verify no TypeScript errors",
      "status": "completed",
      "activeForm": "Building project"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "completed",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "in_progress",
      "activeForm": "Running verification tests"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "npx playwright test tests/product-grid-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification tests",
  "timeout": 180000
}
All 17 tests passed. Now let me delete the test file as instructed and update the final todo status:

🔧 Tool: Bash
Input: {
  "command": "rm tests/product-grid-verification.spec.ts",
  "description": "Remove temporary verification test"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create ProductGrid.astro component with 2/3/4 column support",
      "status": "completed",
      "activeForm": "Creating ProductGrid component"
    },
    {
      "content": "Add responsive breakpoints for mobile/tablet/desktop",
      "status": "completed",
      "activeForm": "Adding responsive breakpoints"
    },
    {
      "content": "Implement asymmetric featured product placements",
      "status": "completed",
      "activeForm": "Implementing featured placements"
    },
    {
      "content": "Add masonry-style layout option for editorial layouts",
      "status": "completed",
      "activeForm": "Adding masonry layout"
    },
    {
      "content": "Update TypeScript types for new grid options",
      "status": "completed",
      "activeForm": "Updating TypeScript types"
    },
    {
      "content": "Create demo page to showcase component",
      "status": "completed",
      "activeForm": "Creating demo page"
    },
    {
      "content": "Build project and verify no TypeScript errors",
      "status": "completed",
      "activeForm": "Building project"
    },
    {
      "content": "Create verification test with Playwright",
      "status": "completed",
      "activeForm": "Creating verification test"
    },
    {
      "content": "Run tests and verify feature works",
      "status": "completed",
      "activeForm": "Running verification tests"
    }
  ]
}
<summary>
## Summary: Create flexible product grid system supporting 2, 3, or 4 columns

### Changes Implemented
- Created new `ProductGrid.astro` component with flexible column layouts (2, 3, or 4 columns)
- Added 5 layout variants: `standard`, `featured-first`, `featured-left`, `featured-right`, and `masonry`
- Implemented asymmetric featured product placements with custom `colSpan` and `rowSpan` options
- Added responsive breakpoints with automatic column adjustment for mobile, tablet, and desktop
- Added masonry-style layout support for editorial content (with CSS Grid masonry + fallback)
- Included stagger animation support with Intersection Observer for scroll-triggered reveals
- Added full accessibility support (ARIA roles, labels, reduced motion preference)
- Created comprehensive demo page at `/demo/product-grid` showcasing all layout options
- Extended TypeScript types with `GridLayout`, `FeaturedPlacement`, and enhanced `ProductGridProps`

### Files Modified
- `src/types/product.ts` - Added new types: `GridLayout`, `FeaturedPlacement`, extended `ProductGridProps`

### Files Created
- `src/components/ProductGrid.astro` - New flexible product grid component
- `src/pages/demo/product-grid.astro` - Demo page showcasing all grid layouts
- `public/images/products/product-placeholder.svg` - Placeholder image for demo products

### Notes for Developer
- The component follows existing BEM naming conventions and design system variables
- Responsive breakpoints: 
  - Mobile (< 480px): 1 column default
  - Small Tablet (480-767px): 2 columns default
  - Tablet (768-1023px): 2-3 columns default
  - Desktop (1024px+): Full column count
- Custom responsive columns can be overridden via `responsiveColumns` prop
- Animation is enabled by default with stagger delays; use `enableAnimation={false}` to disable
- Masonry layout uses native CSS Grid masonry with a fallback for unsupported browsers
- All layouts respect `prefers-reduced-motion` user preference

### Verification Status
- 17 Playwright tests created and executed successfully, covering:
  - All column variations (2, 3, 4 columns)
  - All layout variants (standard, featured-first, featured-left, featured-right, masonry)
  - Gap size variations (small, medium, large)
  - Responsive behavior (mobile and tablet viewports)
  - Accessibility requirements (ARIA attributes)
  - Animation functionality
- Test file deleted after successful verification as per instructions
</summary>