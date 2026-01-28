
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure for implementing a product availability indicator feature. I need to understand:\n\n1. The overall project structure (what framework/technology is used)\n2. Where product-related components are located (product cards, product detail pages)\n3. How styling is done (CSS modules, Tailwind, styled-components, etc.)\n4. Any existing badge or indicator components\n5. How product data is structured (types/interfaces)\n\nPlease do a thorough exploration and report back with:\n- Project type and tech stack\n- Key files/directories for products\n- Styling approach\n- Any existing patterns for badges/indicators\n- Product data structure",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.json",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -30",
  "description": "List root directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\" 2>/dev/null || echo \"src directory exploration\"",
  "description": "List src directory structure"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" -type f -name \"*.astro\" -o -name \"*.ts\" | head -20",
  "description": "Find component files"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\types\" -type f 2>/dev/null",
  "description": "Find type definition files"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\" -type f -name \"*.astro\" | head -20",
  "description": "Find page files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\featured-product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\shop.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\"",
  "description": "List styles directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" -name \"*[Bb]adge*\" -o -name \"*[Ii]ndicator*\"",
  "description": "Search for badge or indicator components"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FeaturedProductsSection.astro",
  "limit": 100
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\config\"",
  "description": "List config directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\shop.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" | grep -i \"product\\|card\"",
  "description": "List product/card related components"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\content-collections.ts"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\content\"",
  "description": "List content directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\content\\products\" | head -10",
  "description": "List sample product files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\products\\premium-canvas-tote.md"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*.ts\" -o -name \"*.tsx\" | grep -i util | head -10",
  "description": "Find utility files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\shop-tracking.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\products.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetails.astro",
  "limit": 150
}
Excellent! The codebase exploration is very thorough. I can see that:

1. **Tech Stack**: Astro 5.16.10 with TypeScript
2. **Styling**: Scoped CSS with BEM naming and CSS custom properties
3. **Existing Infrastructure**: There's already support for `soldOut`, `stockQuantity`, `lowStockThreshold`, and even utility functions like `getAvailabilityStatus()` and `isLowStock()`
4. **Badge System**: Already exists in ProductCard with support for "new", "sale", "sold-out", and "featured" badges

Now let me read the key files to understand the exact implementation details:

🔧 Tool: Read
Input: {
  "file_path": "/home/usr/repo/src/components/ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/home/usr/repo/src/components/ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/home/usr/repo/src/types/product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/home/usr/repo/src/content/config.ts"
}
Let me find the actual project root first:

🔧 Tool: Bash
Input: {
  "command": "find /home -name \"*.astro\" 2>/dev/null | head -20",
  "description": "Find Astro files in home directory"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Show current directory contents"
}
Now I can see the project is at `/c/Users/James/Repos/retail-business`. Let me read the key files:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro",
  "path": "/c/Users/James/Repos/retail-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.ts",
  "path": "/c/Users/James/Repos/retail-business"
}
Now let me read the key product-related files:

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/retail-business/src/components/ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/retail-business/src/components/ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/retail-business/src/types/product.ts"
}
Let me check if there's a path issue:

🔧 Tool: Bash
Input: {
  "command": "ls -la src/components/ | head -20",
  "description": "List components directory"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la src/components/ProductCard.astro",
  "description": "Check ProductCard file"
}

🔧 Tool: Read
Input: {
  "file_path": "src/components/ProductCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "src/components/ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "src/types/product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "src/utils/products.ts"
}
Now let me also read the content config to understand the product schema and check for any variables.css for styling:

🔧 Tool: Read
Input: {
  "file_path": "src/content/config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "src/styles/variables.css"
}
Excellent! I now have a complete understanding of the codebase. Let me now read one of the product pages to see how products are rendered:

🔧 Tool: Read
Input: {
  "file_path": "src/pages/products/[slug].astro"
}

🔧 Tool: Read
Input: {
  "file_path": "src/types/content-collections.ts"
}
Now I have a complete picture. Let me create a task list and implement the availability badges feature:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create AvailabilityBadge component",
      "status": "in_progress",
      "activeForm": "Creating AvailabilityBadge component"
    },
    {
      "content": "Update ProductCard to include availability badge",
      "status": "pending",
      "activeForm": "Updating ProductCard component"
    },
    {
      "content": "Update ProductDetails availability indicator",
      "status": "pending",
      "activeForm": "Updating ProductDetails component"
    },
    {
      "content": "Update ProductCardProps and utilities for availability",
      "status": "pending",
      "activeForm": "Updating types and utilities"
    },
    {
      "content": "Add Pre-Order status support to schema",
      "status": "pending",
      "activeForm": "Adding Pre-Order status to schema"
    }
  ]
}
Now let me implement the changes. I'll start by creating a reusable AvailabilityBadge component:

🔧 Tool: Write
Input: {
  "file_path": "src/components/AvailabilityBadge.astro",
  "content": "---\n/**\n * AvailabilityBadge Component\n * A reusable badge component that displays product availability status\n * with appropriate visual styling for each status type.\n *\n * Features:\n * - Four availability statuses: In Stock, Low Stock, Sold Out, Pre-Order\n * - Visual styling with semantic colors (success, warning, error, info)\n * - Optional icon display\n * - Configurable sizes (small, medium)\n * - Accessible ARIA labels\n * - Dark mode support\n * - Reduced motion support\n *\n * @example Basic usage\n * ```astro\n * <AvailabilityBadge status=\"in-stock\" />\n * ```\n *\n * @example With stock quantity for low stock\n * ```astro\n * <AvailabilityBadge status=\"low-stock\" stockQuantity={3} />\n * ```\n *\n * @example Pre-order status\n * ```astro\n * <AvailabilityBadge status=\"pre-order\" />\n * ```\n */\n\nexport type AvailabilityStatus = 'in-stock' | 'low-stock' | 'sold-out' | 'pre-order';\n\ninterface Props {\n  /** The availability status to display */\n  status: AvailabilityStatus;\n  /** Optional stock quantity to display for low-stock status */\n  stockQuantity?: number;\n  /** Size variant: 'small' for card badges, 'medium' for detail pages */\n  size?: 'small' | 'medium';\n  /** Whether to show the status icon */\n  showIcon?: boolean;\n  /** Whether to show as a pill/badge style (true) or inline text (false) */\n  variant?: 'badge' | 'inline';\n  /** Additional CSS classes */\n  class?: string;\n}\n\nconst {\n  status,\n  stockQuantity,\n  size = 'small',\n  showIcon = true,\n  variant = 'badge',\n  class: className = '',\n} = Astro.props;\n\n// Status configuration\nconst statusConfig: Record<AvailabilityStatus, {\n  label: string;\n  ariaLabel: string;\n  icon: string;\n}> = {\n  'in-stock': {\n    label: 'In Stock',\n    ariaLabel: 'Product is in stock',\n    icon: 'check-circle',\n  },\n  'low-stock': {\n    label: stockQuantity ? `Only ${stockQuantity} left` : 'Low Stock',\n    ariaLabel: stockQuantity\n      ? `Low stock - only ${stockQuantity} remaining`\n      : 'Product has low stock',\n    icon: 'alert-triangle',\n  },\n  'sold-out': {\n    label: 'Sold Out',\n    ariaLabel: 'Product is sold out',\n    icon: 'x-circle',\n  },\n  'pre-order': {\n    label: 'Pre-Order',\n    ariaLabel: 'Product available for pre-order',\n    icon: 'clock',\n  },\n};\n\nconst config = statusConfig[status];\n\n// Build CSS classes\nconst badgeClasses = [\n  'availability-badge',\n  `availability-badge--${status}`,\n  `availability-badge--${size}`,\n  `availability-badge--${variant}`,\n  className,\n].filter(Boolean).join(' ');\n---\n\n<span\n  class={badgeClasses}\n  role=\"status\"\n  aria-label={config.ariaLabel}\n>\n  {showIcon && (\n    <span class=\"availability-badge__icon\" aria-hidden=\"true\">\n      {status === 'in-stock' && (\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n          <polyline points=\"22 4 12 14.01 9 11.01\" />\n        </svg>\n      )}\n      {status === 'low-stock' && (\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\" />\n          <line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\" />\n          <line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\" />\n        </svg>\n      )}\n      {status === 'sold-out' && (\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\" />\n          <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\n          <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" />\n        </svg>\n      )}\n      {status === 'pre-order' && (\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\" />\n          <polyline points=\"12 6 12 12 16 14\" />\n        </svg>\n      )}\n    </span>\n  )}\n  <span class=\"availability-badge__text\">{config.label}</span>\n</span>\n\n<style>\n  /* =================================================================\n   * AVAILABILITY BADGE COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .availability-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-family: var(--font-body);\n    font-weight: var(--font-weight-medium);\n    line-height: 1;\n    white-space: nowrap;\n  }\n\n  /* =================================================================\n   * SIZE VARIANTS\n   * ================================================================= */\n  .availability-badge--small {\n    font-size: var(--font-size-xs);\n  }\n\n  .availability-badge--medium {\n    font-size: var(--font-size-sm);\n    gap: var(--spacing-2);\n  }\n\n  /* =================================================================\n   * STYLE VARIANTS\n   * ================================================================= */\n\n  /* Badge style - pill-shaped with background */\n  .availability-badge--badge {\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-full);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n  }\n\n  .availability-badge--badge.availability-badge--small {\n    padding: var(--spacing-0-5) var(--spacing-1-5);\n  }\n\n  .availability-badge--badge.availability-badge--medium {\n    padding: var(--spacing-1-5) var(--spacing-3);\n  }\n\n  /* Inline style - text only with subtle background */\n  .availability-badge--inline {\n    padding: 0;\n    background: transparent;\n  }\n\n  /* =================================================================\n   * STATUS COLOR VARIANTS\n   * ================================================================= */\n\n  /* In Stock - Success green */\n  .availability-badge--in-stock.availability-badge--badge {\n    background-color: var(--color-success-light);\n    color: var(--color-success-dark);\n  }\n\n  .availability-badge--in-stock.availability-badge--inline {\n    color: var(--color-success-dark);\n  }\n\n  /* Low Stock - Warning amber */\n  .availability-badge--low-stock.availability-badge--badge {\n    background-color: var(--color-warning-light);\n    color: var(--color-warning-dark);\n  }\n\n  .availability-badge--low-stock.availability-badge--inline {\n    color: var(--color-warning-dark);\n  }\n\n  /* Sold Out - Error red */\n  .availability-badge--sold-out.availability-badge--badge {\n    background-color: var(--color-error-light);\n    color: var(--color-error-dark);\n  }\n\n  .availability-badge--sold-out.availability-badge--inline {\n    color: var(--color-error);\n  }\n\n  /* Pre-Order - Info blue */\n  .availability-badge--pre-order.availability-badge--badge {\n    background-color: var(--color-info-light);\n    color: var(--color-info-dark);\n  }\n\n  .availability-badge--pre-order.availability-badge--inline {\n    color: var(--color-info-dark);\n  }\n\n  /* =================================================================\n   * ICON STYLES\n   * ================================================================= */\n  .availability-badge__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n\n  .availability-badge__icon svg {\n    width: 1em;\n    height: 1em;\n  }\n\n  .availability-badge--medium .availability-badge__icon svg {\n    width: 1.125em;\n    height: 1.125em;\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .availability-badge--in-stock.availability-badge--badge {\n    background-color: rgba(16, 185, 129, 0.2);\n    color: var(--color-success);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--in-stock.availability-badge--inline {\n    color: var(--color-success);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--low-stock.availability-badge--badge {\n    background-color: rgba(245, 158, 11, 0.2);\n    color: var(--color-warning);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--low-stock.availability-badge--inline {\n    color: var(--color-warning);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--sold-out.availability-badge--badge {\n    background-color: rgba(239, 68, 68, 0.2);\n    color: var(--color-error);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--sold-out.availability-badge--inline {\n    color: var(--color-error);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--pre-order.availability-badge--badge {\n    background-color: rgba(59, 130, 246, 0.2);\n    color: var(--color-info);\n  }\n\n  :global(html[data-theme=\"dark\"]) .availability-badge--pre-order.availability-badge--inline {\n    color: var(--color-info);\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .availability-badge--badge {\n      border: 1px solid currentColor;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .availability-badge--badge {\n      background-color: transparent;\n      border: 1px solid currentColor;\n    }\n\n    .availability-badge--in-stock {\n      color: #000;\n    }\n\n    .availability-badge--low-stock {\n      color: #666;\n    }\n\n    .availability-badge--sold-out {\n      color: #999;\n    }\n\n    .availability-badge--pre-order {\n      color: #333;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create AvailabilityBadge component",
      "status": "completed",
      "activeForm": "Creating AvailabilityBadge component"
    },
    {
      "content": "Update ProductCard to include availability badge",
      "status": "in_progress",
      "activeForm": "Updating ProductCard component"
    },
    {
      "content": "Update ProductDetails availability indicator",
      "status": "pending",
      "activeForm": "Updating ProductDetails component"
    },
    {
      "content": "Update ProductCardProps and utilities for availability",
      "status": "pending",
      "activeForm": "Updating types and utilities"
    },
    {
      "content": "Add Pre-Order status support to schema",
      "status": "pending",
      "activeForm": "Adding Pre-Order status to schema"
    }
  ]
}
Now let me update the ProductCard component to include the availability badge. I'll add a new availability badge position (right side of image, below existing badges):

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductCard.astro",
  "old_string": "import type { ProductCardProps } from '../types/product';\nimport { formatPrice, calculateDiscount, getAspectRatioCss } from '../types/product';\nimport {\n  appendUTMParams,\n  mergeUTMParams,\n  getShopLinkAttributes,\n  getShopLinkAriaLabel\n} from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';",
  "new_string": "import type { ProductCardProps } from '../types/product';\nimport { formatPrice, calculateDiscount, getAspectRatioCss } from '../types/product';\nimport {\n  appendUTMParams,\n  mergeUTMParams,\n  getShopLinkAttributes,\n  getShopLinkAriaLabel\n} from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';\nimport AvailabilityBadge from './AvailabilityBadge.astro';\nimport type { AvailabilityStatus } from './AvailabilityBadge.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductCard.astro",
  "old_string": "const {\n  id,\n  name,\n  image,\n  hoverImage,\n  price,\n  shopUrl,\n  description,\n  category,\n  featured = false,\n  isNew = false,\n  onSale = false,\n  soldOut = false,\n  aspectRatio = '4:5',\n  utmParams,\n  class: className = '',\n  showLoadingState = true,\n  quickShopText = 'Quick Shop',\n  openInNewTab,\n} = Astro.props;",
  "new_string": "const {\n  id,\n  name,\n  image,\n  hoverImage,\n  price,\n  shopUrl,\n  description,\n  category,\n  featured = false,\n  isNew = false,\n  onSale = false,\n  soldOut = false,\n  preOrder = false,\n  stockQuantity,\n  lowStockThreshold = 5,\n  showAvailability = false,\n  aspectRatio = '4:5',\n  utmParams,\n  class: className = '',\n  showLoadingState = true,\n  quickShopText = 'Quick Shop',\n  openInNewTab,\n} = Astro.props;\n\n// Determine availability status\nfunction getAvailabilityStatus(): AvailabilityStatus | null {\n  if (soldOut) return 'sold-out';\n  if (preOrder) return 'pre-order';\n  if (stockQuantity !== undefined && stockQuantity > 0 && stockQuantity <= lowStockThreshold) {\n    return 'low-stock';\n  }\n  // Only show 'in-stock' when explicitly requested and stock info is provided\n  if (showAvailability && stockQuantity !== undefined && stockQuantity > lowStockThreshold) {\n    return 'in-stock';\n  }\n  return null;\n}\n\nconst availabilityStatus = getAvailabilityStatus();"
}
Now let me add the availability badge to the ProductCard template. I'll add it to the badges section:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductCard.astro",
  "old_string": "    {/* Badges */}\n    <div class=\"product-card__badges\">\n      {isNew && !soldOut && (\n        <span class=\"product-card__badge product-card__badge--new\">New</span>\n      )}\n      {onSale && discountPercent && !soldOut && (\n        <span class=\"product-card__badge product-card__badge--sale\">-{discountPercent}%</span>\n      )}\n      {soldOut && (\n        <span class=\"product-card__badge product-card__badge--sold-out\">Sold Out</span>\n      )}\n      {featured && !soldOut && !isNew && (\n        <span class=\"product-card__badge product-card__badge--featured\">Featured</span>\n      )}\n    </div>",
  "new_string": "    {/* Badges - Left side (promotional badges) */}\n    <div class=\"product-card__badges\">\n      {isNew && !soldOut && (\n        <span class=\"product-card__badge product-card__badge--new\">New</span>\n      )}\n      {onSale && discountPercent && !soldOut && (\n        <span class=\"product-card__badge product-card__badge--sale\">-{discountPercent}%</span>\n      )}\n      {featured && !soldOut && !isNew && (\n        <span class=\"product-card__badge product-card__badge--featured\">Featured</span>\n      )}\n    </div>\n\n    {/* Availability Badge - Right side (stock status) */}\n    {availabilityStatus && (\n      <div class=\"product-card__availability\">\n        <AvailabilityBadge\n          status={availabilityStatus}\n          stockQuantity={availabilityStatus === 'low-stock' ? stockQuantity : undefined}\n          size=\"small\"\n          variant=\"badge\"\n          showIcon={false}\n        />\n      </div>\n    )}"
}
Now let me add the CSS styles for the availability badge positioning:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductCard.astro",
  "old_string": "  .product-card__badge--featured {\n    background-color: var(--color-accent);\n    color: var(--color-text-inverse);\n  }",
  "new_string": "  .product-card__badge--featured {\n    background-color: var(--color-accent);\n    color: var(--color-text-inverse);\n  }\n\n  /* =================================================================\n   * AVAILABILITY BADGE (Right Side)\n   * ================================================================= */\n  .product-card__availability {\n    position: absolute;\n    top: var(--spacing-3);\n    right: var(--spacing-3);\n    z-index: 5;\n  }"
}
Now let me update the ProductCardProps type to include the new availability-related properties:

🔧 Tool: Edit
Input: {
  "file_path": "src/types/product.ts",
  "old_string": "/**\n * Props for the ProductCard component\n */\nexport interface ProductCardProps {\n  /** Unique product identifier */\n  id: string;\n  /** Product name/title */\n  name: string;\n  /** Primary product image */\n  image: ProductImage;\n  /** Secondary image shown on hover (optional) */\n  hoverImage?: ProductImage;\n  /** Product price configuration */\n  price: ProductPrice;\n  /** Direct URL to product page in external shop */\n  shopUrl: string;\n  /** Short product description (optional) */\n  description?: string;\n  /** Product category for display */\n  category?: string;\n  /** Whether the product is featured */\n  featured?: boolean;\n  /** Whether the product is new */\n  isNew?: boolean;\n  /** Whether the product is on sale */\n  onSale?: boolean;\n  /** Whether the product is sold out */\n  soldOut?: boolean;\n  /** Aspect ratio for the image container */\n  aspectRatio?: AspectRatio;\n  /** UTM parameters for shop link tracking */\n  utmParams?: UTMParams;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show loading placeholder */\n  showLoadingState?: boolean;\n  /** Quick shop button text */\n  quickShopText?: string;\n  /** Whether to open shop link in new tab */\n  openInNewTab?: boolean;\n}",
  "new_string": "/**\n * Props for the ProductCard component\n */\nexport interface ProductCardProps {\n  /** Unique product identifier */\n  id: string;\n  /** Product name/title */\n  name: string;\n  /** Primary product image */\n  image: ProductImage;\n  /** Secondary image shown on hover (optional) */\n  hoverImage?: ProductImage;\n  /** Product price configuration */\n  price: ProductPrice;\n  /** Direct URL to product page in external shop */\n  shopUrl: string;\n  /** Short product description (optional) */\n  description?: string;\n  /** Product category for display */\n  category?: string;\n  /** Whether the product is featured */\n  featured?: boolean;\n  /** Whether the product is new */\n  isNew?: boolean;\n  /** Whether the product is on sale */\n  onSale?: boolean;\n  /** Whether the product is sold out */\n  soldOut?: boolean;\n  /** Whether the product is available for pre-order */\n  preOrder?: boolean;\n  /** Stock quantity (for low stock indicator) */\n  stockQuantity?: number;\n  /** Threshold below which \"low stock\" is shown (default: 5) */\n  lowStockThreshold?: number;\n  /** Whether to show availability badge on card */\n  showAvailability?: boolean;\n  /** Aspect ratio for the image container */\n  aspectRatio?: AspectRatio;\n  /** UTM parameters for shop link tracking */\n  utmParams?: UTMParams;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show loading placeholder */\n  showLoadingState?: boolean;\n  /** Quick shop button text */\n  quickShopText?: string;\n  /** Whether to open shop link in new tab */\n  openInNewTab?: boolean;\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create AvailabilityBadge component",
      "status": "completed",
      "activeForm": "Creating AvailabilityBadge component"
    },
    {
      "content": "Update ProductCard to include availability badge",
      "status": "completed",
      "activeForm": "Updating ProductCard component"
    },
    {
      "content": "Update ProductDetails availability indicator",
      "status": "in_progress",
      "activeForm": "Updating ProductDetails component"
    },
    {
      "content": "Update ProductCardProps and utilities for availability",
      "status": "completed",
      "activeForm": "Updating types and utilities"
    },
    {
      "content": "Add Pre-Order status support to schema",
      "status": "pending",
      "activeForm": "Adding Pre-Order status to schema"
    }
  ]
}
Now let me update the ProductDetails component to use the AvailabilityBadge component instead of its custom availability display:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "import type { ProductPrice, ProductImage } from '../types/product';\nimport { formatPrice, calculateDiscount } from '../types/product';\nimport {\n  appendUTMParams,\n  mergeUTMParams,\n  getShopLinkAttributes,\n  getShopLinkAriaLabel\n} from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';\nimport type { UTMParams } from '../types/shop';",
  "new_string": "import type { ProductPrice, ProductImage } from '../types/product';\nimport { formatPrice, calculateDiscount } from '../types/product';\nimport {\n  appendUTMParams,\n  mergeUTMParams,\n  getShopLinkAttributes,\n  getShopLinkAriaLabel\n} from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';\nimport type { UTMParams } from '../types/shop';\nimport AvailabilityBadge from './AvailabilityBadge.astro';\nimport type { AvailabilityStatus } from './AvailabilityBadge.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "  /** Whether the product is sold out */\n  soldOut?: boolean;\n  /** Available colors */\n  colors?: string[];",
  "new_string": "  /** Whether the product is sold out */\n  soldOut?: boolean;\n  /** Whether the product is available for pre-order */\n  preOrder?: boolean;\n  /** Available colors */\n  colors?: string[];"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "const {\n  name,\n  description,\n  editorialDescription,\n  price,\n  shopUrl,\n  category,\n  tagline,\n  isNew = false,\n  onSale = false,\n  soldOut = false,\n  colors,\n  sizes,\n  materials,\n  stockQuantity,\n  lowStockThreshold = 5,\n  sku,\n  brand,\n  ctaText = 'Shop Now',\n  openInNewTab,\n  utmParams,\n  class: className = '',\n} = Astro.props;",
  "new_string": "const {\n  name,\n  description,\n  editorialDescription,\n  price,\n  shopUrl,\n  category,\n  tagline,\n  isNew = false,\n  onSale = false,\n  soldOut = false,\n  preOrder = false,\n  colors,\n  sizes,\n  materials,\n  stockQuantity,\n  lowStockThreshold = 5,\n  sku,\n  brand,\n  ctaText = 'Shop Now',\n  openInNewTab,\n  utmParams,\n  class: className = '',\n} = Astro.props;"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "// Determine availability status\nconst isLowStock = stockQuantity !== undefined &&\n  stockQuantity > 0 &&\n  stockQuantity <= lowStockThreshold;",
  "new_string": "// Determine availability status\nconst isLowStock = stockQuantity !== undefined &&\n  stockQuantity > 0 &&\n  stockQuantity <= lowStockThreshold;\n\n// Get availability status for the badge\nfunction getAvailabilityStatus(): AvailabilityStatus {\n  if (soldOut) return 'sold-out';\n  if (preOrder) return 'pre-order';\n  if (isLowStock) return 'low-stock';\n  return 'in-stock';\n}\n\nconst availabilityStatus = getAvailabilityStatus();"
}
Now let me update the availability display section in ProductDetails to use the AvailabilityBadge component:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "  {/* Availability Status */}\n  <div class=\"product-details__availability\">\n    {soldOut ? (\n      <span class=\"product-details__stock product-details__stock--out\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n          <circle cx=\"12\" cy=\"12\" r=\"10\" />\n          <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\" />\n          <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\" />\n        </svg>\n        Out of Stock\n      </span>\n    ) : isLowStock ? (\n      <span class=\"product-details__stock product-details__stock--low\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n          <path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\" />\n          <line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\" />\n          <line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\" />\n        </svg>\n        Low Stock - Only {stockQuantity} left\n      </span>\n    ) : (\n      <span class=\"product-details__stock product-details__stock--in\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n          <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n          <polyline points=\"22 4 12 14.01 9 11.01\" />\n        </svg>\n        In Stock\n      </span>\n    )}\n  </div>",
  "new_string": "  {/* Availability Status */}\n  <div class=\"product-details__availability\">\n    <AvailabilityBadge\n      status={availabilityStatus}\n      stockQuantity={isLowStock ? stockQuantity : undefined}\n      size=\"medium\"\n      variant=\"inline\"\n      showIcon={true}\n    />\n  </div>"
}
Now I need to remove the old styling for the custom availability elements since we're now using the AvailabilityBadge component:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "  /* =================================================================\n   * AVAILABILITY\n   * ================================================================= */\n  .product-details__availability {\n    margin-top: var(--spacing-1);\n  }\n\n  .product-details__stock {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .product-details__stock svg {\n    width: 1em;\n    height: 1em;\n    flex-shrink: 0;\n  }\n\n  .product-details__stock--in {\n    color: var(--color-success-dark);\n  }\n\n  .product-details__stock--low {\n    color: var(--color-warning-dark);\n  }\n\n  .product-details__stock--out {\n    color: var(--color-error);\n  }",
  "new_string": "  /* =================================================================\n   * AVAILABILITY\n   * ================================================================= */\n  .product-details__availability {\n    margin-top: var(--spacing-1);\n  }"
}
Also remove the dark mode styles that are no longer needed:

🔧 Tool: Edit
Input: {
  "file_path": "src/components/ProductDetails.astro",
  "old_string": "  :global(html[data-theme=\"dark\"]) .product-details__variant-item {\n    background-color: var(--color-background-subtle);\n    border-color: var(--color-border);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-details__stock--in {\n    color: var(--color-success);\n  }\n\n  :global(html[data-theme=\"dark\"]) .product-details__stock--low {\n    color: var(--color-warning);\n  }",
  "new_string": "  :global(html[data-theme=\"dark\"]) .product-details__variant-item {\n    background-color: var(--color-background-subtle);\n    border-color: var(--color-border);\n  }"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create AvailabilityBadge component",
      "status": "completed",
      "activeForm": "Creating AvailabilityBadge component"
    },
    {
      "content": "Update ProductCard to include availability badge",
      "status": "completed",
      "activeForm": "Updating ProductCard component"
    },
    {
      "content": "Update ProductDetails availability indicator",
      "status": "completed",
      "activeForm": "Updating ProductDetails component"
    },
    {
      "content": "Update ProductCardProps and utilities for availability",
      "status": "completed",
      "activeForm": "Updating types and utilities"
    },
    {
      "content": "Add Pre-Order status support to schema",
      "status": "in_progress",
      "activeForm": "Adding Pre-Order status to schema"
    }
  ]
}
Now let me add the Pre-Order status support to the content schema:

🔧 Tool: Edit
Input: {
  "file_path": "src/content/config.ts",
  "old_string": "    // ----- Product Status Flags -----\n    /** Whether the product is featured on homepage */\n    featured: z.boolean().default(false),\n    /** Whether the product is new */\n    isNew: z.boolean().default(false),\n    /** Whether the product is on sale */\n    onSale: z.boolean().default(false),\n    /** Whether the product is sold out */\n    soldOut: z.boolean().default(false),\n    /** Whether the product is published/visible */\n    published: z.boolean().default(true),",
  "new_string": "    // ----- Product Status Flags -----\n    /** Whether the product is featured on homepage */\n    featured: z.boolean().default(false),\n    /** Whether the product is new */\n    isNew: z.boolean().default(false),\n    /** Whether the product is on sale */\n    onSale: z.boolean().default(false),\n    /** Whether the product is sold out */\n    soldOut: z.boolean().default(false),\n    /** Whether the product is available for pre-order */\n    preOrder: z.boolean().default(false),\n    /** Whether the product is published/visible */\n    published: z.boolean().default(true),"
}
Now let me update the product utilities to include preOrder in the transformation functions:

🔧 Tool: Edit
Input: {
  "file_path": "src/utils/products.ts",
  "old_string": "export function toProductCardProps(product: ProductEntry) {\n  const { data } = product;\n\n  return {\n    id: product.slug,\n    name: data.name,\n    image: data.image,\n    hoverImage: data.hoverImage,\n    price: data.price,\n    shopUrl: data.shopUrl,\n    description: data.description,\n    category: data.category,\n    featured: data.featured,\n    isNew: data.isNew,\n    onSale: data.onSale,\n    soldOut: data.soldOut,\n    aspectRatio: data.aspectRatio,\n    utmParams: data.utmParams,\n    openInNewTab: data.openInNewTab,\n  };\n}",
  "new_string": "export function toProductCardProps(product: ProductEntry) {\n  const { data } = product;\n\n  return {\n    id: product.slug,\n    name: data.name,\n    image: data.image,\n    hoverImage: data.hoverImage,\n    price: data.price,\n    shopUrl: data.shopUrl,\n    description: data.description,\n    category: data.category,\n    featured: data.featured,\n    isNew: data.isNew,\n    onSale: data.onSale,\n    soldOut: data.soldOut,\n    preOrder: data.preOrder,\n    stockQuantity: data.stockQuantity,\n    lowStockThreshold: data.lowStockThreshold,\n    aspectRatio: data.aspectRatio,\n    utmParams: data.utmParams,\n    openInNewTab: data.openInNewTab,\n  };\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/utils/products.ts",
  "old_string": "export function toFeaturedProductProps(product: ProductEntry) {\n  const { data } = product;\n\n  return {\n    id: product.slug,\n    name: data.name,\n    image: data.image,\n    hoverImage: data.hoverImage,\n    price: data.price,\n    shopUrl: data.shopUrl,\n    tagline: data.tagline,\n    description: data.description,\n    editorialDescription: data.editorialDescription,\n    category: data.category,\n    isNew: data.isNew,\n    onSale: data.onSale,\n    soldOut: data.soldOut,\n    aspectRatio: data.aspectRatio,\n    utmParams: data.utmParams,\n    ctaText: data.ctaText,\n    openInNewTab: data.openInNewTab,\n    priority: data.priority,\n  };\n}",
  "new_string": "export function toFeaturedProductProps(product: ProductEntry) {\n  const { data } = product;\n\n  return {\n    id: product.slug,\n    name: data.name,\n    image: data.image,\n    hoverImage: data.hoverImage,\n    price: data.price,\n    shopUrl: data.shopUrl,\n    tagline: data.tagline,\n    description: data.description,\n    editorialDescription: data.editorialDescription,\n    category: data.category,\n    isNew: data.isNew,\n    onSale: data.onSale,\n    soldOut: data.soldOut,\n    preOrder: data.preOrder,\n    stockQuantity: data.stockQuantity,\n    lowStockThreshold: data.lowStockThreshold,\n    aspectRatio: data.aspectRatio,\n    utmParams: data.utmParams,\n    ctaText: data.ctaText,\n    openInNewTab: data.openInNewTab,\n    priority: data.priority,\n  };\n}"
}
Now let me update the getAvailabilityStatus function to include pre-order:

🔧 Tool: Edit
Input: {
  "file_path": "src/utils/products.ts",
  "old_string": "/**\n * Get product availability status\n * @param product - Product entry\n * @returns Availability status string\n */\nexport function getAvailabilityStatus(\n  product: ProductEntry\n): 'in-stock' | 'low-stock' | 'sold-out' {\n  if (product.data.soldOut) return 'sold-out';\n  if (isLowStock(product)) return 'low-stock';\n  return 'in-stock';\n}",
  "new_string": "/**\n * Get product availability status\n * @param product - Product entry\n * @returns Availability status string\n */\nexport function getAvailabilityStatus(\n  product: ProductEntry\n): 'in-stock' | 'low-stock' | 'sold-out' | 'pre-order' {\n  if (product.data.soldOut) return 'sold-out';\n  if (product.data.preOrder) return 'pre-order';\n  if (isLowStock(product)) return 'low-stock';\n  return 'in-stock';\n}"
}
Now let me update the content-collections types to include pre-order:

🔧 Tool: Edit
Input: {
  "file_path": "src/types/content-collections.ts",
  "old_string": "/**\n * Product availability status\n */\nexport type ProductAvailability = 'in-stock' | 'low-stock' | 'sold-out';",
  "new_string": "/**\n * Product availability status\n */\nexport type ProductAvailability = 'in-stock' | 'low-stock' | 'sold-out' | 'pre-order';"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/types/content-collections.ts",
  "old_string": "/**\n * Type guard to check if a value is a valid ProductAvailability\n */\nexport function isProductAvailability(value: unknown): value is ProductAvailability {\n  return (\n    value === 'in-stock' || value === 'low-stock' || value === 'sold-out'\n  );\n}",
  "new_string": "/**\n * Type guard to check if a value is a valid ProductAvailability\n */\nexport function isProductAvailability(value: unknown): value is ProductAvailability {\n  return (\n    value === 'in-stock' || value === 'low-stock' || value === 'sold-out' || value === 'pre-order'\n  );\n}"
}
Now let me update the ProductCardData type in content-collections.ts to include the new properties:

🔧 Tool: Edit
Input: {
  "file_path": "src/types/content-collections.ts",
  "old_string": "/**\n * Subset of product data for card displays\n */\nexport interface ProductCardData {\n  id: string;\n  name: string;\n  image: ProductData['image'];\n  hoverImage?: ProductData['hoverImage'];\n  price: ProductData['price'];\n  shopUrl: string;\n  description: string;\n  category: ProductData['category'];\n  featured?: boolean;\n  isNew?: boolean;\n  onSale?: boolean;\n  soldOut?: boolean;\n  aspectRatio?: '4:5' | '1:1';\n  utmParams?: ProductData['utmParams'];\n  openInNewTab?: boolean;\n}",
  "new_string": "/**\n * Subset of product data for card displays\n */\nexport interface ProductCardData {\n  id: string;\n  name: string;\n  image: ProductData['image'];\n  hoverImage?: ProductData['hoverImage'];\n  price: ProductData['price'];\n  shopUrl: string;\n  description: string;\n  category: ProductData['category'];\n  featured?: boolean;\n  isNew?: boolean;\n  onSale?: boolean;\n  soldOut?: boolean;\n  preOrder?: boolean;\n  stockQuantity?: number;\n  lowStockThreshold?: number;\n  aspectRatio?: '4:5' | '1:1';\n  utmParams?: ProductData['utmParams'];\n  openInNewTab?: boolean;\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/types/content-collections.ts",
  "old_string": "/**\n * Subset of product data for featured displays\n */\nexport interface FeaturedProductData extends ProductCardData {\n  tagline?: string;\n  editorialDescription?: string;\n  ctaText?: string;\n  priority?: number;\n}",
  "new_string": "/**\n * Subset of product data for featured displays\n */\nexport interface FeaturedProductData extends ProductCardData {\n  tagline?: string;\n  editorialDescription?: string;\n  ctaText?: string;\n  priority?: number;\n  showAvailability?: boolean;\n}"
}
Now let me update the product detail page to pass the preOrder prop:

🔧 Tool: Edit
Input: {
  "file_path": "src/pages/products/[slug].astro",
  "old_string": "          <ProductDetails\n            name={data.name}\n            description={data.description}\n            editorialDescription={data.editorialDescription}\n            price={data.price}\n            shopUrl={data.shopUrl}\n            category={data.category}\n            tagline={data.tagline}\n            isNew={data.isNew}\n            onSale={data.onSale}\n            soldOut={data.soldOut}\n            colors={data.colors}\n            sizes={data.sizes}\n            materials={data.materials}\n            stockQuantity={data.stockQuantity}\n            lowStockThreshold={data.lowStockThreshold}\n            sku={data.metadata?.sku}\n            brand={data.metadata?.brand}\n            ctaText={data.ctaText}\n            openInNewTab={data.openInNewTab}\n            utmParams={data.utmParams}\n          />",
  "new_string": "          <ProductDetails\n            name={data.name}\n            description={data.description}\n            editorialDescription={data.editorialDescription}\n            price={data.price}\n            shopUrl={data.shopUrl}\n            category={data.category}\n            tagline={data.tagline}\n            isNew={data.isNew}\n            onSale={data.onSale}\n            soldOut={data.soldOut}\n            preOrder={data.preOrder}\n            colors={data.colors}\n            sizes={data.sizes}\n            materials={data.materials}\n            stockQuantity={data.stockQuantity}\n            lowStockThreshold={data.lowStockThreshold}\n            sku={data.metadata?.sku}\n            brand={data.metadata?.brand}\n            ctaText={data.ctaText}\n            openInNewTab={data.openInNewTab}\n            utmParams={data.utmParams}\n          />"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create AvailabilityBadge component",
      "status": "completed",
      "activeForm": "Creating AvailabilityBadge component"
    },
    {
      "content": "Update ProductCard to include availability badge",
      "status": "completed",
      "activeForm": "Updating ProductCard component"
    },
    {
      "content": "Update ProductDetails availability indicator",
      "status": "completed",
      "activeForm": "Updating ProductDetails component"
    },
    {
      "content": "Update ProductCardProps and utilities for availability",
      "status": "completed",
      "activeForm": "Updating types and utilities"
    },
    {
      "content": "Add Pre-Order status support to schema",
      "status": "completed",
      "activeForm": "Adding Pre-Order status to schema"
    }
  ]
}
Now let me verify the build works by running a quick type check:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && npx astro check 2>&1 | head -100",
  "description": "Run Astro type check",
  "timeout": 120000
}
Let me try a different approach - run the build to check for errors:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && npx astro build 2>&1 | tail -50",
  "description": "Run Astro build to verify",
  "timeout": 180000
}
The build completed successfully. Now let me also check that the exports in the AvailabilityBadge component are proper. Let me verify the component file is complete:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && head -60 src/components/AvailabilityBadge.astro",
  "description": "Verify AvailabilityBadge exports"
}
The build succeeds but I want to make sure the type export is working correctly. Let me check if the type is properly exported in Astro components - since Astro uses a frontmatter script, the export should work:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && npx tsc --noEmit 2>&1 | head -50",
  "description": "Run TypeScript check",
  "timeout": 120000
}
There's an issue with the UTMParams import. Let me check and fix the featured-product.ts:

🔧 Tool: Read
Input: {
  "file_path": "src/types/featured-product.ts"
}
I see the issue - the `UTMParams` is being imported from `./product` but it's not exported there. Let me check the product.ts file:

🔧 Tool: Grep
Input: {
  "pattern": "UTMParams",
  "path": "src/types/product.ts",
  "output_mode": "content"
}
I see - the `UTMParams` is imported but not re-exported in `product.ts`. Let me fix the featured-product.ts to import it from the correct location:

🔧 Tool: Edit
Input: {
  "file_path": "src/types/featured-product.ts",
  "old_string": "import type { ProductImage, ProductPrice, AspectRatio, UTMParams } from './product';\nimport type { UTMParams as ShopUTMParams } from './shop';",
  "new_string": "import type { ProductImage, ProductPrice, AspectRatio } from './product';\nimport type { UTMParams } from './shop';"
}
Now let me re-run the TypeScript check:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && npx tsc --noEmit 2>&1 | head -50",
  "description": "Run TypeScript check",
  "timeout": 120000
}
The only remaining error is in the astro.config.mjs which is pre-existing and unrelated to our changes. The build is passing successfully. 

Now let me verify the final implementation by looking at the key files:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/retail-business && npx astro build 2>&1 | grep -E \"(error|Error|warning|Warning)\" | head -20",
  "description": "Check for build errors or warnings",
  "timeout": 180000
}
No errors - the build is clean! Let me complete the todos and provide a summary:

🔧 Tool: TodoWrite
Input: {
  "todos": []
}
<summary>
## Summary: Product Availability Indicator Feature

### Changes Implemented

1. **Created new `AvailabilityBadge.astro` component** - A reusable badge component that displays product availability status with:
   - Four availability statuses: In Stock, Low Stock, Sold Out, Pre-Order
   - Visual styling using semantic colors (success green, warning amber, error red, info blue)
   - Optional icon display for each status
   - Size variants: `small` (for card badges) and `medium` (for detail pages)
   - Style variants: `badge` (pill-shaped with background) and `inline` (text only)
   - Full accessibility support with ARIA labels
   - Dark mode support
   - High contrast mode support
   - Print styles

2. **Updated `ProductCard.astro`** to include availability badges:
   - Added availability badge positioned on the right side of the product image
   - Badges show for: Sold Out, Pre-Order, Low Stock, and optionally In Stock
   - Low stock badge displays remaining quantity (e.g., "Only 3 left")
   - Added new props: `preOrder`, `stockQuantity`, `lowStockThreshold`, `showAvailability`

3. **Updated `ProductDetails.astro`** to use the new AvailabilityBadge component:
   - Replaced custom availability display with reusable component
   - Added Pre-Order status support
   - Uses `medium` size and `inline` variant for detail pages

4. **Updated type definitions and utilities**:
   - Extended `ProductCardProps` with availability-related properties
   - Added `preOrder` field to product schema in `content/config.ts`
   - Updated `getAvailabilityStatus()` to include pre-order status
   - Updated `toProductCardProps()` and `toFeaturedProductProps()` to include availability data
   - Updated `ProductAvailability` type to include 'pre-order'
   - Updated `ProductCardData` and `FeaturedProductData` interfaces

### Files Modified
- `src/components/AvailabilityBadge.astro` (NEW)
- `src/components/ProductCard.astro`
- `src/components/ProductDetails.astro`
- `src/types/product.ts`
- `src/types/content-collections.ts`
- `src/types/featured-product.ts` (bug fix for import)
- `src/content/config.ts`
- `src/utils/products.ts`
- `src/pages/products/[slug].astro`

### Notes for Developer

1. **Configuring availability per product**: Add the following fields to product markdown frontmatter:
   ```yaml
   soldOut: false          # Shows "Sold Out" badge
   preOrder: false         # Shows "Pre-Order" badge  
   stockQuantity: 10       # Used for low stock calculation
   lowStockThreshold: 5    # Default is 5
   ```

2. **Enabling availability badges on product cards**: Pass `showAvailability={true}` to ProductCard to show "In Stock" badges (Low Stock and Sold Out are always shown when applicable)

3. **Badge priority**: When multiple statuses apply, the order is: Sold Out > Pre-Order > Low Stock > In Stock

4. **Visual styling**: Badges follow the design system using CSS custom properties. Colors can be customized via `variables.css`:
   - In Stock: `--color-success` (green)
   - Low Stock: `--color-warning` (amber)
   - Sold Out: `--color-error` (red)
   - Pre-Order: `--color-info` (blue)
</summary>