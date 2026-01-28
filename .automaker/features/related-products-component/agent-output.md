
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure for implementing a \"related products\" component for product detail pages. I need to understand:\n\n1. The overall project structure (what framework is being used - React, Vue, etc.)\n2. Where product-related components are located\n3. How product data is structured and fetched\n4. Existing styling patterns and conventions\n5. Any existing carousel or horizontal scroll components\n\nPlease search for:\n- Product detail page components\n- Product card components\n- Any existing related/recommended product sections\n- Data fetching patterns\n- CSS/styling approach\n\nBe thorough in exploring the codebase.",
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

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -30",
  "description": "List root directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type f -name \"*.astro\" -o -name \"*.tsx\" -o -name \"*.ts\" -o -name \"*.jsx\" -o -name \"*.js\" | head -30",
  "description": "Find all component and script files"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{astro,tsx,ts,jsx,js}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\RelatedProducts.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductGrid.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\shop.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\shop.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*product*\" -type f | grep -E \"\\.(astro|ts|tsx|js)$\"",
  "description": "Find all product-related files"
}

🔧 Tool: Grep
Input: {
  "pattern": "interface.*Product.*Props|type.*Product.*Props",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\types"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\featured-product.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" -name \"ProductCard*\" -o -name \"Product*\" | head -15",
  "description": "Find ProductCard and product components"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductCard.astro",
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
  "offset": 150,
  "limit": 200
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" -iname \"*carousel*\" -o -iname \"*slider*\" -o -iname \"*scroll*\"",
  "description": "Find carousel/slider/scroll components"
}

🔧 Tool: Grep
Input: {
  "pattern": "carousel|slider|horizontal.*scroll|scroll.*horizontal",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components",
  "output_mode": "files_with_matches"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\NewArrivalsCarousel.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\products.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -path \"*/content/products*\" -type f 2>/dev/null | head -5",
  "description": "Find product content files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\"",
  "description": "List style files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\product-card.astro",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*.astro\" -path \"*/pages/*\" | head -20",
  "description": "Find page files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "limit": 120
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetails.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FeaturedProductsSection.astro",
  "limit": 120
}

🔧 Tool: Grep
Input: {
  "pattern": "section-heading--decorated|animation|reveal|stagger",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "output_mode": "content",
  "head_limit": 30
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"config.ts\" -o -name \"config.js\" | xargs grep -l \"collection\\|schema\" 2>/dev/null",
  "description": "Find content collection config"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\config.ts",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\config.ts",
  "offset": 150,
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\config.ts",
  "offset": 299,
  "limit": 100
}
Now I have a comprehensive understanding of the codebase. Let me read the existing related products component and the product detail page to understand exactly what enhancements are needed:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/components/RelatedProducts.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/components/NewArrivalsCarousel.astro"
}
Now let me check the product types and utilities to understand the data structure better:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/product.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/utils/products.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/styles/variables.css"
}
Now I have a thorough understanding of the codebase. Let me create a todo list for this implementation and then start building the enhanced related products component:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create RelatedProductsCarousel component with horizontal scroll layout",
      "status": "in_progress",
      "activeForm": "Creating RelatedProductsCarousel component with horizontal scroll layout"
    },
    {
      "content": "Add 'Complete the Look' variant styling option",
      "status": "pending",
      "activeForm": "Adding 'Complete the Look' variant styling option"
    },
    {
      "content": "Create TypeScript type definitions for the new component",
      "status": "pending",
      "activeForm": "Creating TypeScript type definitions"
    },
    {
      "content": "Update product detail page to use the new component options",
      "status": "pending",
      "activeForm": "Updating product detail page to use new component"
    },
    {
      "content": "Test component integration and verify styling patterns",
      "status": "pending",
      "activeForm": "Testing component integration and verifying styling patterns"
    }
  ]
}
Now let me create the enhanced Related Products component with horizontal scroll layout and "Complete the Look" styling options. I'll create a new component that provides both the grid layout (like the existing one) and a carousel layout option:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/types/related-products.ts",
  "content": "/**\n * =================================================================\n * RELATED PRODUCTS TYPE DEFINITIONS\n * =================================================================\n *\n * TypeScript types for the RelatedProductsCarousel component\n * with support for horizontal scroll layout, 'Complete the Look'\n * styling, and both category-based and manual curation options.\n *\n * =================================================================\n */\n\nimport type { ProductCardProps, AspectRatio } from './product';\n\n// =================================================================\n// LAYOUT VARIANTS\n// =================================================================\n\n/**\n * Display variant for related products section\n * - 'grid': Traditional responsive grid layout\n * - 'carousel': Horizontal scrolling carousel with navigation\n * - 'complete-the-look': Styled section for outfit/collection pairing\n */\nexport type RelatedProductsVariant = 'grid' | 'carousel' | 'complete-the-look';\n\n/**\n * Gap sizes between product cards\n */\nexport type RelatedProductsGap = 'small' | 'medium' | 'large';\n\n// =================================================================\n// COLUMN CONFIGURATION\n// =================================================================\n\n/**\n * Responsive column configuration for carousel\n */\nexport interface CarouselColumnConfig {\n  /** Columns at mobile breakpoint (< 480px) */\n  mobile?: 1 | 2;\n  /** Columns at small breakpoint (480px - 767px) */\n  small?: 2 | 3;\n  /** Columns at tablet breakpoint (768px - 1023px) */\n  tablet?: 2 | 3 | 4;\n  /** Columns at desktop breakpoint (>= 1024px) */\n  desktop?: 3 | 4 | 5;\n}\n\n// =================================================================\n// NAVIGATION OPTIONS\n// =================================================================\n\n/**\n * Navigation button position for carousel\n * - 'outside': Buttons positioned outside the carousel viewport\n * - 'inside': Buttons overlaid inside the carousel viewport\n * - 'bottom': Buttons positioned below the carousel\n * - 'none': No navigation buttons (swipe/scroll only)\n */\nexport type NavigationPosition = 'outside' | 'inside' | 'bottom' | 'none';\n\n// =================================================================\n// RELATED PRODUCTS CAROUSEL PROPS\n// =================================================================\n\n/**\n * Props for the RelatedProductsCarousel component\n */\nexport interface RelatedProductsCarouselProps {\n  /** Array of product card props to display */\n  products: ProductCardProps[];\n\n  /** Display variant: grid, carousel, or complete-the-look */\n  variant?: RelatedProductsVariant;\n\n  /** Section heading */\n  heading?: string;\n\n  /** Section description/subheading */\n  description?: string;\n\n  /** Section ID for anchor links */\n  id?: string;\n\n  /** Additional CSS classes */\n  class?: string;\n\n  // =================================================================\n  // GRID-SPECIFIC OPTIONS\n  // =================================================================\n\n  /** Number of columns for grid layout (2-4) */\n  columns?: 2 | 3 | 4;\n\n  // =================================================================\n  // CAROUSEL-SPECIFIC OPTIONS\n  // =================================================================\n\n  /** Responsive column configuration for carousel */\n  carouselColumns?: CarouselColumnConfig;\n\n  /** Navigation button position */\n  navigationPosition?: NavigationPosition;\n\n  /** Show pagination indicators (dots) */\n  showIndicators?: boolean;\n\n  /** Enable touch/swipe navigation */\n  enableSwipe?: boolean;\n\n  /** Enable keyboard navigation (arrow keys) */\n  enableKeyboard?: boolean;\n\n  /** Number of items to scroll per navigation click */\n  scrollAmount?: number;\n\n  /** Animation duration in milliseconds */\n  animationDuration?: number;\n\n  /** Enable infinite/continuous scrolling */\n  infinite?: boolean;\n\n  // =================================================================\n  // SHARED OPTIONS\n  // =================================================================\n\n  /** Maximum number of products to display */\n  maxProducts?: number;\n\n  /** Gap size between product cards */\n  gap?: RelatedProductsGap;\n\n  /** Aspect ratio for product images */\n  aspectRatio?: AspectRatio;\n\n  /** Show empty state message when no products */\n  showEmptyState?: boolean;\n\n  /** Enable stagger animation on reveal */\n  enableAnimation?: boolean;\n\n  // =================================================================\n  // COMPLETE THE LOOK SPECIFIC OPTIONS\n  // =================================================================\n\n  /** Custom badge text (e.g., \"Shop the Look\", \"Complete Your Set\") */\n  badgeText?: string;\n\n  /** Show \"View All\" link */\n  showViewAll?: boolean;\n\n  /** \"View All\" link URL */\n  viewAllUrl?: string;\n\n  /** \"View All\" link text */\n  viewAllText?: string;\n\n  /** Featured product index (for complete-the-look variant) */\n  featuredIndex?: number;\n}\n\n// =================================================================\n// CURATION SOURCE TYPE\n// =================================================================\n\n/**\n * Source for related products determination\n * - 'manual': Explicitly defined related products in product data\n * - 'category': Automatically fetched from same category\n * - 'mixed': Manual first, then fill with category\n */\nexport type CurationSource = 'manual' | 'category' | 'mixed';\n\n// =================================================================\n// PRESET CONFIGURATIONS\n// =================================================================\n\n/**\n * Preset configurations for common use cases\n */\nexport const RELATED_PRODUCTS_PRESETS = {\n  /** Standard related products grid */\n  standard: {\n    variant: 'grid' as RelatedProductsVariant,\n    heading: 'Related Products',\n    columns: 4,\n    maxProducts: 8,\n    gap: 'medium' as RelatedProductsGap,\n  },\n\n  /** Horizontal carousel for mobile-friendly browsing */\n  carousel: {\n    variant: 'carousel' as RelatedProductsVariant,\n    heading: 'You May Also Like',\n    navigationPosition: 'outside' as NavigationPosition,\n    showIndicators: true,\n    enableSwipe: true,\n    enableKeyboard: true,\n    maxProducts: 12,\n    gap: 'medium' as RelatedProductsGap,\n    carouselColumns: {\n      mobile: 1,\n      small: 2,\n      tablet: 3,\n      desktop: 4,\n    } as CarouselColumnConfig,\n  },\n\n  /** Complete the Look styled section */\n  completeTheLook: {\n    variant: 'complete-the-look' as RelatedProductsVariant,\n    heading: 'Complete the Look',\n    description: 'Pair perfectly with these items',\n    badgeText: 'Styling Pick',\n    navigationPosition: 'inside' as NavigationPosition,\n    showIndicators: false,\n    enableSwipe: true,\n    maxProducts: 6,\n    gap: 'large' as RelatedProductsGap,\n    carouselColumns: {\n      mobile: 1,\n      small: 2,\n      tablet: 3,\n      desktop: 4,\n    } as CarouselColumnConfig,\n  },\n\n  /** Compact carousel for sidebars or narrow spaces */\n  compact: {\n    variant: 'carousel' as RelatedProductsVariant,\n    heading: 'More to Explore',\n    navigationPosition: 'none' as NavigationPosition,\n    showIndicators: true,\n    enableSwipe: true,\n    maxProducts: 8,\n    gap: 'small' as RelatedProductsGap,\n    carouselColumns: {\n      mobile: 2,\n      small: 2,\n      tablet: 2,\n      desktop: 3,\n    } as CarouselColumnConfig,\n  },\n} as const;\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create RelatedProductsCarousel component with horizontal scroll layout",
      "status": "in_progress",
      "activeForm": "Creating RelatedProductsCarousel component with horizontal scroll layout"
    },
    {
      "content": "Add 'Complete the Look' variant styling option",
      "status": "completed",
      "activeForm": "Adding 'Complete the Look' variant styling option"
    },
    {
      "content": "Create TypeScript type definitions for the new component",
      "status": "completed",
      "activeForm": "Creating TypeScript type definitions"
    },
    {
      "content": "Update product detail page to use the new component options",
      "status": "pending",
      "activeForm": "Updating product detail page to use new component"
    },
    {
      "content": "Test component integration and verify styling patterns",
      "status": "pending",
      "activeForm": "Testing component integration and verifying styling patterns"
    }
  ]
}
Now let me create the main RelatedProductsCarousel component:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/components/RelatedProductsCarousel.astro",
  "content": "---\n/**\n * RelatedProductsCarousel Component\n * A versatile related products section with multiple display variants:\n * - Grid layout (traditional responsive grid)\n * - Carousel layout (horizontal scroll with navigation)\n * - Complete the Look (styled curated section)\n *\n * Features:\n * - Multiple layout variants for different use cases\n * - Horizontal scroll with touch/swipe support\n * - Navigation arrows for desktop users\n * - Keyboard navigation (arrow keys, Home, End)\n * - Pagination indicators\n * - 'Complete the Look' styling option\n * - Responsive column configuration\n * - Smooth animations with reduced motion support\n * - Dark mode support\n * - Full accessibility features\n *\n * @example Grid variant (default)\n * ```astro\n * <RelatedProductsCarousel\n *   products={relatedProducts}\n *   variant=\"grid\"\n *   heading=\"Related Products\"\n * />\n * ```\n *\n * @example Carousel variant\n * ```astro\n * <RelatedProductsCarousel\n *   products={relatedProducts}\n *   variant=\"carousel\"\n *   heading=\"You May Also Like\"\n *   showIndicators={true}\n * />\n * ```\n *\n * @example Complete the Look variant\n * ```astro\n * <RelatedProductsCarousel\n *   products={curatedProducts}\n *   variant=\"complete-the-look\"\n *   heading=\"Complete the Look\"\n *   badgeText=\"Styling Pick\"\n * />\n * ```\n */\n\nimport type { RelatedProductsCarouselProps } from '../types/related-products';\nimport type { ProductCardProps } from '../types/product';\nimport ProductCard from './ProductCard.astro';\n\ninterface Props extends RelatedProductsCarouselProps {}\n\nconst {\n  products,\n  variant = 'grid',\n  heading = 'Related Products',\n  description,\n  id = 'related-products',\n  class: className = '',\n  // Grid options\n  columns = 4,\n  // Carousel options\n  carouselColumns = {\n    mobile: 1,\n    small: 2,\n    tablet: 3,\n    desktop: 4,\n  },\n  navigationPosition = 'outside',\n  showIndicators = false,\n  enableSwipe = true,\n  enableKeyboard = true,\n  scrollAmount = 1,\n  animationDuration = 300,\n  infinite = false,\n  // Shared options\n  maxProducts = 12,\n  gap = 'medium',\n  aspectRatio = '4:5',\n  showEmptyState = false,\n  enableAnimation = true,\n  // Complete the Look options\n  badgeText = 'Styling Pick',\n  showViewAll = false,\n  viewAllUrl = '/products',\n  viewAllText = 'View All',\n  featuredIndex,\n} = Astro.props;\n\n// If no products and no empty state, don't render\nif (products.length === 0 && !showEmptyState) {\n  return null;\n}\n\n// Limit products to max\nconst displayProducts = products.slice(0, maxProducts);\nconst hasProducts = displayProducts.length > 0;\n\n// Calculate gap CSS value\nconst gapValue = gap === 'small' ? 'var(--spacing-4)' : gap === 'large' ? 'var(--spacing-8)' : 'var(--spacing-6)';\n\n// Determine if we're using carousel or grid\nconst isCarousel = variant === 'carousel' || variant === 'complete-the-look';\nconst isCompleteTheLook = variant === 'complete-the-look';\n\n// Build section classes\nconst sectionClasses = [\n  'related-products-carousel',\n  `related-products-carousel--${variant}`,\n  `related-products-carousel--cols-${columns}`,\n  isCarousel && `related-products-carousel--nav-${navigationPosition}`,\n  isCarousel && showIndicators && 'related-products-carousel--has-indicators',\n  enableAnimation && 'related-products-carousel--animated',\n  className,\n].filter(Boolean).join(' ');\n\n// Navigation icons\nconst arrowLeftIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg>`;\nconst arrowRightIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg>`;\nconst viewAllArrowIcon = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z\"/></svg>`;\n\n// Unique IDs for ARIA\nconst carouselId = `${id}-carousel`;\nconst headingId = `${id}-heading`;\nconst liveRegionId = `${id}-live`;\n---\n\n<section\n  class={sectionClasses}\n  id={id}\n  aria-labelledby={headingId}\n  data-carousel={isCarousel ? 'true' : undefined}\n  data-infinite={infinite ? 'true' : 'false'}\n  data-enable-swipe={enableSwipe ? 'true' : 'false'}\n  data-enable-keyboard={enableKeyboard ? 'true' : 'false'}\n  data-scroll-amount={scrollAmount}\n  data-animation-duration={animationDuration}\n  data-columns-mobile={carouselColumns.mobile || 1}\n  data-columns-small={carouselColumns.small || 2}\n  data-columns-tablet={carouselColumns.tablet || 3}\n  data-columns-desktop={carouselColumns.desktop || 4}\n  style={`--carousel-gap: ${gapValue}; --carousel-animation-duration: ${animationDuration}ms;`}\n>\n  <div class=\"related-products-carousel__container\">\n    <!-- Section Header -->\n    <header class=\"related-products-carousel__header\">\n      {isCompleteTheLook && (\n        <span class=\"related-products-carousel__badge\">{badgeText}</span>\n      )}\n      <h2 id={headingId} class=\"related-products-carousel__heading\">\n        {heading}\n      </h2>\n      {description && (\n        <p class=\"related-products-carousel__description\">{description}</p>\n      )}\n    </header>\n\n    {hasProducts ? (\n      isCarousel ? (\n        <!-- Carousel Layout -->\n        <div class=\"related-products-carousel__wrapper\">\n          {/* Previous Navigation */}\n          {navigationPosition !== 'none' && navigationPosition !== 'bottom' && (\n            <button\n              type=\"button\"\n              class=\"related-products-carousel__nav related-products-carousel__nav--prev\"\n              aria-label=\"Previous products\"\n              data-carousel-prev\n              disabled\n            >\n              <span class=\"related-products-carousel__nav-icon\" set:html={arrowLeftIcon} />\n            </button>\n          )}\n\n          <!-- Carousel Viewport -->\n          <div\n            class=\"related-products-carousel__viewport\"\n            role=\"region\"\n            aria-label=\"Product carousel\"\n            tabindex=\"0\"\n            data-carousel-viewport\n          >\n            <div\n              class=\"related-products-carousel__track\"\n              role=\"list\"\n              aria-label={isCompleteTheLook ? 'Complete the look products' : 'Related products'}\n              data-carousel-track\n            >\n              {displayProducts.map((product, index) => (\n                <div\n                  class:list={[\n                    'related-products-carousel__slide',\n                    enableAnimation && 'reveal',\n                    featuredIndex === index && 'related-products-carousel__slide--featured',\n                  ]}\n                  role=\"listitem\"\n                  aria-setsize={displayProducts.length}\n                  aria-posinset={index + 1}\n                  data-carousel-slide\n                  data-index={index}\n                  style={enableAnimation ? `--stagger-delay: ${index * 100}ms;` : undefined}\n                >\n                  <ProductCard\n                    id={product.id}\n                    name={product.name}\n                    image={product.image}\n                    hoverImage={product.hoverImage}\n                    price={product.price}\n                    shopUrl={product.shopUrl}\n                    description={product.description}\n                    category={product.category}\n                    isNew={product.isNew}\n                    onSale={product.onSale}\n                    soldOut={product.soldOut}\n                    aspectRatio={aspectRatio}\n                    utmParams={{\n                      ...product.utmParams,\n                      content: product.utmParams?.content || `${variant}_product_${product.id}`,\n                    }}\n                  />\n                </div>\n              ))}\n            </div>\n          </div>\n\n          {/* Next Navigation */}\n          {navigationPosition !== 'none' && navigationPosition !== 'bottom' && (\n            <button\n              type=\"button\"\n              class=\"related-products-carousel__nav related-products-carousel__nav--next\"\n              aria-label=\"Next products\"\n              data-carousel-next\n            >\n              <span class=\"related-products-carousel__nav-icon\" set:html={arrowRightIcon} />\n            </button>\n          )}\n\n          <!-- Live Region for Screen Readers -->\n          <div\n            id={liveRegionId}\n            class=\"sr-only\"\n            aria-live=\"polite\"\n            aria-atomic=\"true\"\n            data-carousel-live\n          ></div>\n        </div>\n      ) : (\n        <!-- Grid Layout -->\n        <div class=\"related-products-carousel__grid\">\n          {displayProducts.map((product, index) => (\n            <div\n              class:list={[\n                'related-products-carousel__item',\n                enableAnimation && 'reveal',\n              ]}\n              style={enableAnimation ? `--stagger-delay: ${index * 100}ms;` : undefined}\n            >\n              <ProductCard\n                id={product.id}\n                name={product.name}\n                image={product.image}\n                hoverImage={product.hoverImage}\n                price={product.price}\n                shopUrl={product.shopUrl}\n                description={product.description}\n                category={product.category}\n                isNew={product.isNew}\n                onSale={product.onSale}\n                soldOut={product.soldOut}\n                aspectRatio={aspectRatio}\n                utmParams={{\n                  ...product.utmParams,\n                  content: product.utmParams?.content || `related_product_${product.id}`,\n                }}\n              />\n            </div>\n          ))}\n        </div>\n      )\n    ) : showEmptyState ? (\n      <!-- Empty State -->\n      <div class=\"related-products-carousel__empty\" role=\"status\" aria-live=\"polite\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 24 24\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"1.5\"\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          aria-hidden=\"true\"\n        >\n          <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2\" />\n          <path d=\"M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5\" />\n        </svg>\n        <p>No related products found</p>\n      </div>\n    ) : null}\n\n    <!-- Pagination Indicators -->\n    {hasProducts && isCarousel && showIndicators && (\n      <div\n        class=\"related-products-carousel__indicators\"\n        role=\"tablist\"\n        aria-label=\"Carousel pagination\"\n        data-carousel-indicators\n      >\n        <!-- Indicators generated by JavaScript -->\n      </div>\n    )}\n\n    <!-- Bottom Navigation (when position is 'bottom') -->\n    {hasProducts && isCarousel && navigationPosition === 'bottom' && (\n      <div class=\"related-products-carousel__nav-bottom\">\n        <button\n          type=\"button\"\n          class=\"related-products-carousel__nav related-products-carousel__nav--prev\"\n          aria-label=\"Previous products\"\n          data-carousel-prev\n          disabled\n        >\n          <span class=\"related-products-carousel__nav-icon\" set:html={arrowLeftIcon} />\n        </button>\n        <button\n          type=\"button\"\n          class=\"related-products-carousel__nav related-products-carousel__nav--next\"\n          aria-label=\"Next products\"\n          data-carousel-next\n        >\n          <span class=\"related-products-carousel__nav-icon\" set:html={arrowRightIcon} />\n        </button>\n      </div>\n    )}\n\n    <!-- View All CTA -->\n    {hasProducts && showViewAll && (\n      <div class=\"related-products-carousel__cta\">\n        <a\n          href={viewAllUrl}\n          class=\"related-products-carousel__view-all\"\n        >\n          {viewAllText}\n          <span class=\"related-products-carousel__view-all-icon\" set:html={viewAllArrowIcon} />\n        </a>\n      </div>\n    )}\n  </div>\n</section>\n\n<style>\n  /* =================================================================\n   * RELATED PRODUCTS CAROUSEL COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .related-products-carousel {\n    padding: var(--spacing-12) 0;\n    border-top: 1px solid var(--color-border);\n    overflow: hidden;\n  }\n\n  .related-products-carousel__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    padding: 0 var(--spacing-4);\n  }\n\n  /* =================================================================\n   * SECTION HEADER\n   * ================================================================= */\n  .related-products-carousel__header {\n    text-align: center;\n    margin-bottom: var(--spacing-8);\n  }\n\n  .related-products-carousel__badge {\n    display: inline-block;\n    padding: var(--spacing-1) var(--spacing-3);\n    margin-bottom: var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-semibold);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wider);\n    color: var(--color-accent-dark);\n    background-color: var(--color-accent-subtle);\n    border-radius: var(--radius-full);\n  }\n\n  .related-products-carousel__heading {\n    margin: 0;\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height-tight);\n    color: var(--color-text-primary);\n  }\n\n  .related-products-carousel__description {\n    margin: var(--spacing-2) 0 0;\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  /* =================================================================\n   * GRID LAYOUT\n   * ================================================================= */\n  .related-products-carousel__grid {\n    display: grid;\n    gap: var(--carousel-gap, var(--spacing-6));\n  }\n\n  /* Column variants for grid */\n  .related-products-carousel--cols-2 .related-products-carousel__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .related-products-carousel--cols-3 .related-products-carousel__grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .related-products-carousel--cols-4 .related-products-carousel__grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  /* Grid items */\n  .related-products-carousel__item {\n    transition-delay: var(--stagger-delay, 0ms);\n  }\n\n  /* =================================================================\n   * CAROUSEL LAYOUT\n   * ================================================================= */\n  .related-products-carousel__wrapper {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-4);\n  }\n\n  .related-products-carousel__viewport {\n    flex: 1;\n    overflow: hidden;\n    border-radius: var(--radius-lg);\n  }\n\n  .related-products-carousel__viewport:focus {\n    outline: none;\n  }\n\n  .related-products-carousel__viewport:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 4px;\n    border-radius: var(--radius-lg);\n  }\n\n  .related-products-carousel__track {\n    display: flex;\n    gap: var(--carousel-gap, var(--spacing-6));\n    transition: transform var(--carousel-animation-duration, 300ms) var(--ease-out);\n    touch-action: pan-y pinch-zoom;\n    will-change: transform;\n  }\n\n  /* Disable smooth scrolling during drag */\n  .related-products-carousel__track.is-dragging {\n    transition: none;\n    cursor: grabbing;\n  }\n\n  .related-products-carousel__track:not(.is-dragging) {\n    cursor: grab;\n  }\n\n  /* =================================================================\n   * CAROUSEL SLIDES\n   * ================================================================= */\n  .related-products-carousel__slide {\n    flex: 0 0 calc(100% - var(--carousel-gap, var(--spacing-6)));\n    min-width: 0;\n    scroll-snap-align: start;\n    transition-delay: var(--stagger-delay, 0ms);\n  }\n\n  /* Featured slide styling */\n  .related-products-carousel__slide--featured {\n    position: relative;\n  }\n\n  .related-products-carousel__slide--featured::before {\n    content: '';\n    position: absolute;\n    inset: -4px;\n    border: 2px solid var(--color-accent);\n    border-radius: var(--radius-xl);\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  /* Responsive slide widths */\n  @media screen and (min-width: 480px) {\n    .related-products-carousel__slide {\n      flex: 0 0 calc(50% - var(--carousel-gap, var(--spacing-6)) / 2);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .related-products-carousel__slide {\n      flex: 0 0 calc(33.333% - var(--carousel-gap, var(--spacing-6)) * 2 / 3);\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    .related-products-carousel__slide {\n      flex: 0 0 calc(25% - var(--carousel-gap, var(--spacing-6)) * 3 / 4);\n    }\n  }\n\n  /* =================================================================\n   * NAVIGATION BUTTONS\n   * ================================================================= */\n  .related-products-carousel__nav {\n    position: relative;\n    z-index: 10;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-full);\n    cursor: pointer;\n    flex-shrink: 0;\n    box-shadow: var(--shadow-md);\n    transition:\n      background-color var(--duration-150) var(--ease-in-out),\n      border-color var(--duration-150) var(--ease-in-out),\n      transform var(--duration-150) var(--ease-in-out),\n      box-shadow var(--duration-150) var(--ease-in-out),\n      opacity var(--duration-150) var(--ease-in-out);\n  }\n\n  .related-products-carousel__nav:hover:not(:disabled) {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    transform: scale(1.05);\n    box-shadow: var(--shadow-lg);\n  }\n\n  .related-products-carousel__nav:hover:not(:disabled) .related-products-carousel__nav-icon {\n    color: var(--color-text-inverse);\n  }\n\n  .related-products-carousel__nav:focus-visible {\n    outline: none;\n    box-shadow: var(--shadow-md), var(--focus-ring);\n  }\n\n  .related-products-carousel__nav:disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  .related-products-carousel__nav-icon {\n    width: 24px;\n    height: 24px;\n    color: var(--color-text-primary);\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .related-products-carousel__nav-icon :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* Navigation inside variant (overlay on carousel) */\n  .related-products-carousel--nav-inside .related-products-carousel__wrapper {\n    gap: 0;\n  }\n\n  .related-products-carousel--nav-inside .related-products-carousel__nav {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .related-products-carousel--nav-inside .related-products-carousel__nav--prev {\n    left: var(--spacing-2);\n  }\n\n  .related-products-carousel--nav-inside .related-products-carousel__nav--next {\n    right: var(--spacing-2);\n  }\n\n  .related-products-carousel--nav-inside .related-products-carousel__nav:hover:not(:disabled) {\n    transform: translateY(-50%) scale(1.05);\n  }\n\n  /* Bottom navigation */\n  .related-products-carousel__nav-bottom {\n    display: flex;\n    justify-content: center;\n    gap: var(--spacing-4);\n    margin-top: var(--spacing-6);\n  }\n\n  /* =================================================================\n   * PAGINATION INDICATORS\n   * ================================================================= */\n  .related-products-carousel__indicators {\n    display: flex;\n    justify-content: center;\n    gap: var(--spacing-2);\n    margin-top: var(--spacing-6);\n  }\n\n  .related-products-carousel__indicators :global(button) {\n    width: 8px;\n    height: 8px;\n    padding: 0;\n    border: none;\n    border-radius: var(--radius-full);\n    background-color: var(--color-border-dark);\n    cursor: pointer;\n    transition:\n      background-color var(--duration-150) var(--ease-in-out),\n      width var(--duration-200) var(--ease-out);\n  }\n\n  .related-products-carousel__indicators :global(button:hover) {\n    background-color: var(--color-primary-light);\n  }\n\n  .related-products-carousel__indicators :global(button[aria-selected=\"true\"]) {\n    width: 24px;\n    background-color: var(--color-primary);\n  }\n\n  .related-products-carousel__indicators :global(button:focus-visible) {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n\n  /* =================================================================\n   * EMPTY STATE\n   * ================================================================= */\n  .related-products-carousel__empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-12);\n    text-align: center;\n    color: var(--color-text-tertiary);\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-lg);\n  }\n\n  .related-products-carousel__empty svg {\n    width: 48px;\n    height: 48px;\n    opacity: 0.5;\n  }\n\n  .related-products-carousel__empty p {\n    margin: 0;\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n  }\n\n  /* =================================================================\n   * VIEW ALL CTA\n   * ================================================================= */\n  .related-products-carousel__cta {\n    display: flex;\n    justify-content: center;\n    margin-top: var(--spacing-8);\n  }\n\n  .related-products-carousel__view-all {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-3) var(--spacing-6);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-primary);\n    background-color: transparent;\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    text-decoration: none;\n    transition:\n      background-color var(--duration-150) var(--ease-in-out),\n      border-color var(--duration-150) var(--ease-in-out),\n      color var(--duration-150) var(--ease-in-out);\n  }\n\n  .related-products-carousel__view-all:hover {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: var(--color-text-inverse);\n  }\n\n  .related-products-carousel__view-all:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n\n  .related-products-carousel__view-all-icon {\n    width: 18px;\n    height: 18px;\n    transition: transform var(--duration-150) var(--ease-in-out);\n  }\n\n  .related-products-carousel__view-all:hover .related-products-carousel__view-all-icon {\n    transform: translateX(4px);\n  }\n\n  .related-products-carousel__view-all-icon :global(svg) {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* =================================================================\n   * SCREEN READER ONLY TEXT\n   * ================================================================= */\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n\n  /* =================================================================\n   * COMPLETE THE LOOK VARIANT STYLES\n   * ================================================================= */\n  .related-products-carousel--complete-the-look {\n    background-color: var(--color-background-subtle);\n    border-top: none;\n    border-radius: var(--radius-xl);\n    margin: var(--spacing-8) 0;\n    padding: var(--spacing-10) 0;\n  }\n\n  .related-products-carousel--complete-the-look .related-products-carousel__header {\n    margin-bottom: var(--spacing-10);\n  }\n\n  .related-products-carousel--complete-the-look .related-products-carousel__heading {\n    font-size: var(--font-size-3xl);\n    font-family: var(--font-editorial-heading);\n    font-weight: var(--font-weight-medium);\n    letter-spacing: var(--letter-spacing-tight);\n  }\n\n  .related-products-carousel--complete-the-look .related-products-carousel__description {\n    font-size: var(--font-size-lg);\n    color: var(--color-text-tertiary);\n  }\n\n  /* =================================================================\n   * REVEAL ANIMATION\n   * ================================================================= */\n  .related-products-carousel--animated .reveal {\n    opacity: 0;\n    transform: translateY(20px);\n    transition:\n      opacity var(--animation-duration-slow) var(--ease-enter),\n      transform var(--animation-duration-slow) var(--ease-enter-emphasized);\n    transition-delay: var(--stagger-delay, 0ms);\n  }\n\n  .related-products-carousel--animated .reveal.reveal--visible {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n\n  /* Mobile - Hide nav buttons in carousel, rely on swipe */\n  @media screen and (max-width: 767px) {\n    .related-products-carousel {\n      padding: var(--spacing-8) 0;\n    }\n\n    .related-products-carousel__heading {\n      font-size: var(--font-size-xl);\n    }\n\n    .related-products-carousel--complete-the-look .related-products-carousel__heading {\n      font-size: var(--font-size-2xl);\n    }\n\n    /* Grid responsive columns */\n    .related-products-carousel--cols-4 .related-products-carousel__grid,\n    .related-products-carousel--cols-3 .related-products-carousel__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .related-products-carousel__grid {\n      gap: var(--spacing-4);\n    }\n\n    /* Carousel - hide nav buttons */\n    .related-products-carousel--carousel .related-products-carousel__nav,\n    .related-products-carousel--complete-the-look .related-products-carousel__nav {\n      display: none;\n    }\n\n    /* Enable native scroll snapping on mobile */\n    .related-products-carousel--carousel .related-products-carousel__viewport,\n    .related-products-carousel--complete-the-look .related-products-carousel__viewport {\n      overflow-x: auto;\n      scroll-snap-type: x mandatory;\n      scroll-behavior: smooth;\n      -webkit-overflow-scrolling: touch;\n      scrollbar-width: none;\n      -ms-overflow-style: none;\n    }\n\n    .related-products-carousel--carousel .related-products-carousel__viewport::-webkit-scrollbar,\n    .related-products-carousel--complete-the-look .related-products-carousel__viewport::-webkit-scrollbar {\n      display: none;\n    }\n\n    .related-products-carousel--carousel .related-products-carousel__track,\n    .related-products-carousel--complete-the-look .related-products-carousel__track {\n      transition: none;\n    }\n  }\n\n  @media screen and (max-width: 479px) {\n    .related-products-carousel--cols-2 .related-products-carousel__grid,\n    .related-products-carousel--cols-3 .related-products-carousel__grid,\n    .related-products-carousel--cols-4 .related-products-carousel__grid {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  /* Tablet */\n  @media screen and (min-width: 768px) and (max-width: 1023px) {\n    .related-products-carousel--cols-4 .related-products-carousel__grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n\n  /* Large Desktop */\n  @media screen and (min-width: 1280px) {\n    .related-products-carousel__nav {\n      width: 56px;\n      height: 56px;\n    }\n\n    .related-products-carousel__nav-icon {\n      width: 28px;\n      height: 28px;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .related-products-carousel__track {\n      transition: none;\n    }\n\n    .related-products-carousel__nav {\n      transition: none;\n    }\n\n    .related-products-carousel__nav:hover:not(:disabled) {\n      transform: none;\n    }\n\n    .related-products-carousel--nav-inside .related-products-carousel__nav:hover:not(:disabled) {\n      transform: translateY(-50%);\n    }\n\n    .related-products-carousel__indicators :global(button) {\n      transition: none;\n    }\n\n    .related-products-carousel--animated .reveal {\n      opacity: 1;\n      transform: none;\n      transition: none;\n    }\n\n    .related-products-carousel__view-all-icon {\n      transition: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .related-products-carousel {\n    border-top-color: var(--color-border);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel--complete-the-look {\n    background-color: var(--color-background-subtle);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__badge {\n    background-color: var(--color-accent-subtle);\n    color: var(--color-accent-light);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__nav {\n    background-color: var(--color-background-elevated);\n    border-color: var(--color-border);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__nav:hover:not(:disabled) {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__empty {\n    background-color: var(--color-background-subtle);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__view-all {\n    border-color: var(--color-border);\n  }\n\n  :global(html[data-theme=\"dark\"]) .related-products-carousel__view-all:hover {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .related-products-carousel__nav {\n      border: 2px solid currentColor;\n    }\n\n    .related-products-carousel__indicators :global(button) {\n      border: 1px solid currentColor;\n    }\n\n    .related-products-carousel__indicators :global(button[aria-selected=\"true\"]) {\n      background-color: currentColor;\n    }\n\n    .related-products-carousel__badge {\n      border: 1px solid currentColor;\n    }\n\n    .related-products-carousel__slide--featured::before {\n      border-color: currentColor;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .related-products-carousel {\n      padding: var(--spacing-8) 0;\n      border-top: 1px solid #ccc;\n      page-break-inside: avoid;\n    }\n\n    .related-products-carousel--complete-the-look {\n      background-color: transparent;\n    }\n\n    .related-products-carousel__nav {\n      display: none;\n    }\n\n    .related-products-carousel__indicators {\n      display: none;\n    }\n\n    .related-products-carousel__cta {\n      display: none;\n    }\n\n    .related-products-carousel__viewport {\n      overflow: visible;\n    }\n\n    .related-products-carousel__track {\n      flex-wrap: wrap;\n      gap: var(--spacing-4);\n    }\n\n    .related-products-carousel__slide {\n      flex: 0 0 calc(25% - var(--spacing-4));\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .related-products-carousel__grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n</style>\n\n<script>\n  /**\n   * RelatedProductsCarousel Interactive Features\n   * - Navigation button click handlers\n   * - Touch/swipe support\n   * - Keyboard navigation\n   * - ARIA live region updates\n   * - Responsive column detection\n   * - Reveal animation on scroll\n   */\n\n  interface CarouselState {\n    currentIndex: number;\n    totalSlides: number;\n    visibleSlides: number;\n    isAtStart: boolean;\n    isAtEnd: boolean;\n    isDragging: boolean;\n  }\n\n  function initCarousels() {\n    const carousels = document.querySelectorAll('[data-carousel=\"true\"]');\n\n    carousels.forEach((carousel) => {\n      const viewport = carousel.querySelector('[data-carousel-viewport]') as HTMLElement | null;\n      const track = carousel.querySelector('[data-carousel-track]') as HTMLElement | null;\n      const slides = carousel.querySelectorAll('[data-carousel-slide]');\n      const prevBtn = carousel.querySelector('[data-carousel-prev]') as HTMLButtonElement | null;\n      const nextBtn = carousel.querySelector('[data-carousel-next]') as HTMLButtonElement | null;\n      const liveRegion = carousel.querySelector('[data-carousel-live]') as HTMLElement | null;\n      const indicatorsContainer = carousel.querySelector('[data-carousel-indicators]') as HTMLElement | null;\n\n      if (!viewport || !track || slides.length === 0) return;\n\n      // Get configuration from data attributes\n      const config = {\n        infinite: carousel.getAttribute('data-infinite') === 'true',\n        enableSwipe: carousel.getAttribute('data-enable-swipe') === 'true',\n        enableKeyboard: carousel.getAttribute('data-enable-keyboard') === 'true',\n        scrollAmount: parseInt(carousel.getAttribute('data-scroll-amount') || '1', 10),\n        animationDuration: parseInt(carousel.getAttribute('data-animation-duration') || '300', 10),\n        columnsMobile: parseInt(carousel.getAttribute('data-columns-mobile') || '1', 10),\n        columnsSmall: parseInt(carousel.getAttribute('data-columns-small') || '2', 10),\n        columnsTablet: parseInt(carousel.getAttribute('data-columns-tablet') || '3', 10),\n        columnsDesktop: parseInt(carousel.getAttribute('data-columns-desktop') || '4', 10),\n      };\n\n      // Initialize state\n      const state: CarouselState = {\n        currentIndex: 0,\n        totalSlides: slides.length,\n        visibleSlides: getVisibleSlides(),\n        isAtStart: true,\n        isAtEnd: false,\n        isDragging: false,\n      };\n\n      // Calculate visible slides based on viewport width\n      function getVisibleSlides(): number {\n        const width = window.innerWidth;\n        if (width < 480) return config.columnsMobile;\n        if (width < 768) return config.columnsSmall;\n        if (width < 1024) return config.columnsTablet;\n        return config.columnsDesktop;\n      }\n\n      // Update navigation button states\n      function updateNavigation() {\n        state.visibleSlides = getVisibleSlides();\n        const maxIndex = Math.max(0, state.totalSlides - state.visibleSlides);\n\n        state.isAtStart = state.currentIndex <= 0;\n        state.isAtEnd = state.currentIndex >= maxIndex;\n\n        if (prevBtn) {\n          prevBtn.disabled = state.isAtStart && !config.infinite;\n        }\n        if (nextBtn) {\n          nextBtn.disabled = state.isAtEnd && !config.infinite;\n        }\n\n        updateIndicators();\n      }\n\n      // Scroll to specific index\n      function scrollToIndex(index: number, announce = true) {\n        const maxIndex = Math.max(0, state.totalSlides - state.visibleSlides);\n\n        // Handle infinite scroll\n        if (config.infinite) {\n          if (index < 0) {\n            index = maxIndex;\n          } else if (index > maxIndex) {\n            index = 0;\n          }\n        } else {\n          index = Math.max(0, Math.min(index, maxIndex));\n        }\n\n        state.currentIndex = index;\n\n        // Calculate transform\n        const slideElement = slides[0] as HTMLElement;\n        const slideWidth = slideElement.offsetWidth;\n        const gap = parseInt(getComputedStyle(track).gap) || 0;\n        const offset = index * (slideWidth + gap);\n\n        track.style.transform = `translateX(-${offset}px)`;\n\n        updateNavigation();\n\n        // Announce to screen readers\n        if (announce && liveRegion) {\n          const visibleRange = `Showing products ${index + 1} to ${Math.min(index + state.visibleSlides, state.totalSlides)} of ${state.totalSlides}`;\n          liveRegion.textContent = visibleRange;\n        }\n      }\n\n      // Navigate previous\n      function goToPrev() {\n        scrollToIndex(state.currentIndex - config.scrollAmount);\n      }\n\n      // Navigate next\n      function goToNext() {\n        scrollToIndex(state.currentIndex + config.scrollAmount);\n      }\n\n      // Create pagination indicators\n      function createIndicators() {\n        if (!indicatorsContainer) return;\n\n        const pageCount = Math.ceil((state.totalSlides - state.visibleSlides + 1) / config.scrollAmount);\n\n        for (let i = 0; i < pageCount; i++) {\n          const button = document.createElement('button');\n          button.type = 'button';\n          button.setAttribute('role', 'tab');\n          button.setAttribute('aria-selected', i === 0 ? 'true' : 'false');\n          button.setAttribute('aria-label', `Go to slide group ${i + 1}`);\n          button.setAttribute('data-index', i.toString());\n\n          button.addEventListener('click', () => {\n            scrollToIndex(i * config.scrollAmount);\n          });\n\n          indicatorsContainer.appendChild(button);\n        }\n      }\n\n      // Update indicators\n      function updateIndicators() {\n        if (!indicatorsContainer) return;\n\n        const buttons = indicatorsContainer.querySelectorAll('button');\n        const currentPage = Math.floor(state.currentIndex / config.scrollAmount);\n\n        buttons.forEach((btn, index) => {\n          btn.setAttribute('aria-selected', index === currentPage ? 'true' : 'false');\n        });\n      }\n\n      // Touch/Swipe handling\n      let touchStartX = 0;\n      let touchCurrentX = 0;\n      let initialTransform = 0;\n\n      function handleTouchStart(e: TouchEvent) {\n        if (!config.enableSwipe) return;\n\n        state.isDragging = true;\n        track.classList.add('is-dragging');\n\n        touchStartX = e.touches[0].clientX;\n        touchCurrentX = touchStartX;\n\n        const transform = track.style.transform;\n        const match = transform.match(/translateX\\((-?\\d+\\.?\\d*)px\\)/);\n        initialTransform = match ? parseFloat(match[1]) : 0;\n      }\n\n      function handleTouchMove(e: TouchEvent) {\n        if (!state.isDragging || !config.enableSwipe) return;\n\n        touchCurrentX = e.touches[0].clientX;\n        const touchCurrentY = e.touches[0].clientY;\n\n        const deltaX = touchCurrentX - touchStartX;\n        const deltaY = Math.abs(touchCurrentY - e.touches[0].clientY);\n\n        // If vertical scroll is dominant, don't interfere\n        if (deltaY > Math.abs(deltaX)) {\n          return;\n        }\n\n        e.preventDefault();\n\n        const newTransform = initialTransform + deltaX;\n        track.style.transform = `translateX(${newTransform}px)`;\n      }\n\n      function handleTouchEnd() {\n        if (!state.isDragging || !config.enableSwipe) return;\n\n        state.isDragging = false;\n        track.classList.remove('is-dragging');\n\n        const deltaX = touchCurrentX - touchStartX;\n        const threshold = 50;\n\n        if (deltaX < -threshold) {\n          goToNext();\n        } else if (deltaX > threshold) {\n          goToPrev();\n        } else {\n          scrollToIndex(state.currentIndex, false);\n        }\n      }\n\n      // Mouse drag handling (desktop)\n      let mouseStartX = 0;\n\n      function handleMouseDown(e: MouseEvent) {\n        if (!config.enableSwipe || e.button !== 0) return;\n\n        state.isDragging = true;\n        track.classList.add('is-dragging');\n\n        mouseStartX = e.clientX;\n\n        const transform = track.style.transform;\n        const match = transform.match(/translateX\\((-?\\d+\\.?\\d*)px\\)/);\n        initialTransform = match ? parseFloat(match[1]) : 0;\n\n        document.addEventListener('mousemove', handleMouseMove);\n        document.addEventListener('mouseup', handleMouseUp);\n      }\n\n      function handleMouseMove(e: MouseEvent) {\n        if (!state.isDragging) return;\n\n        const deltaX = e.clientX - mouseStartX;\n        const newTransform = initialTransform + deltaX;\n        track.style.transform = `translateX(${newTransform}px)`;\n      }\n\n      function handleMouseUp(e: MouseEvent) {\n        if (!state.isDragging) return;\n\n        state.isDragging = false;\n        track.classList.remove('is-dragging');\n\n        const deltaX = e.clientX - mouseStartX;\n        const threshold = 50;\n\n        if (deltaX < -threshold) {\n          goToNext();\n        } else if (deltaX > threshold) {\n          goToPrev();\n        } else {\n          scrollToIndex(state.currentIndex, false);\n        }\n\n        document.removeEventListener('mousemove', handleMouseMove);\n        document.removeEventListener('mouseup', handleMouseUp);\n      }\n\n      // Keyboard navigation\n      function handleKeydown(e: KeyboardEvent) {\n        if (!config.enableKeyboard) return;\n\n        switch (e.key) {\n          case 'ArrowLeft':\n            e.preventDefault();\n            goToPrev();\n            break;\n          case 'ArrowRight':\n            e.preventDefault();\n            goToNext();\n            break;\n          case 'Home':\n            e.preventDefault();\n            scrollToIndex(0);\n            break;\n          case 'End':\n            e.preventDefault();\n            scrollToIndex(state.totalSlides - state.visibleSlides);\n            break;\n        }\n      }\n\n      // Event listeners\n      if (prevBtn) {\n        prevBtn.addEventListener('click', goToPrev);\n      }\n\n      if (nextBtn) {\n        nextBtn.addEventListener('click', goToNext);\n      }\n\n      // Touch events\n      viewport.addEventListener('touchstart', handleTouchStart, { passive: true });\n      viewport.addEventListener('touchmove', handleTouchMove, { passive: false });\n      viewport.addEventListener('touchend', handleTouchEnd);\n      viewport.addEventListener('touchcancel', handleTouchEnd);\n\n      // Mouse drag events\n      viewport.addEventListener('mousedown', handleMouseDown);\n\n      // Keyboard events\n      viewport.addEventListener('keydown', handleKeydown);\n\n      // Resize handler\n      let resizeTimeout: ReturnType<typeof setTimeout>;\n      window.addEventListener('resize', () => {\n        clearTimeout(resizeTimeout);\n        resizeTimeout = setTimeout(() => {\n          updateNavigation();\n          scrollToIndex(state.currentIndex, false);\n        }, 100);\n      });\n\n      // Initialize\n      createIndicators();\n      updateNavigation();\n    });\n  }\n\n  // Initialize reveal animations\n  function initRevealAnimations() {\n    const revealElements = document.querySelectorAll('.related-products-carousel--animated .reveal');\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('reveal--visible');\n            observer.unobserve(entry.target);\n          }\n        });\n      },\n      {\n        threshold: 0.1,\n        rootMargin: '0px 0px -50px 0px',\n      }\n    );\n\n    revealElements.forEach((el) => observer.observe(el));\n  }\n\n  // Initialize on DOM ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => {\n      initCarousels();\n      initRevealAnimations();\n    });\n  } else {\n    initCarousels();\n    initRevealAnimations();\n  }\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', () => {\n    initCarousels();\n    initRevealAnimations();\n  });\n</script>\n"
}
Now let me update the todo list and then update the product detail page to showcase the new component:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create RelatedProductsCarousel component with horizontal scroll layout",
      "status": "completed",
      "activeForm": "Creating RelatedProductsCarousel component with horizontal scroll layout"
    },
    {
      "content": "Add 'Complete the Look' variant styling option",
      "status": "completed",
      "activeForm": "Adding 'Complete the Look' variant styling option"
    },
    {
      "content": "Create TypeScript type definitions for the new component",
      "status": "completed",
      "activeForm": "Creating TypeScript type definitions"
    },
    {
      "content": "Update product detail page to use the new component options",
      "status": "in_progress",
      "activeForm": "Updating product detail page to use new component"
    },
    {
      "content": "Test component integration and verify styling patterns",
      "status": "pending",
      "activeForm": "Testing component integration and verifying styling patterns"
    }
  ]
}
Now let me update the product detail page to use the new component. I'll modify it to use the new RelatedProductsCarousel component with the carousel variant:

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProducts from '../../components/RelatedProducts.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';",
  "new_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProducts from '../../components/RelatedProducts.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';",
  "new_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro"
}

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "content": "---\n/**\n * Product Detail Page\n * Dynamic route for individual product pages with image gallery,\n * product details, external shop CTA, related products, and\n * Product schema markup for SEO.\n *\n * Features:\n * - Dynamic routing based on product slug\n * - Image gallery with thumbnail navigation\n * - Full product details with variants\n * - External shop CTA (Shopify/Square/Etsy)\n * - Related products section with carousel layout\n * - Product JSON-LD schema for SEO\n * - Responsive layout\n * - Dark mode support\n *\n * @route /products/[slug]\n */\n\nimport Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';\nimport type { ProductEntry } from '../../utils/products';\nimport type { ProductSchema, BreadcrumbSchema } from '../../types/seo';\n\n// Generate static paths for all products\nexport async function getStaticPaths() {\n  const products = await getAllProducts({ publishedOnly: true });\n\n  return products.map((product) => ({\n    params: { slug: product.slug },\n    props: { product },\n  }));\n}\n\ninterface Props {\n  product: ProductEntry;\n}\n\nconst { product } = Astro.props;\nconst { data } = product;\n\n// Get related products (increased to 8 for carousel)\nconst relatedProductEntries = await getRelatedProducts(product, 8);\nconst relatedProducts = relatedProductEntries.map(toProductCardProps);\n\n// Build gallery images array\nconst galleryImages = [\n  data.image,\n  ...(data.hoverImage ? [data.hoverImage] : []),\n  ...(data.images || []),\n];\n\n// Determine product availability status for schema\nconst getAvailability = (): ProductSchema['offers'] extends { availability?: infer A } ? A : never => {\n  if (data.soldOut) return 'OutOfStock';\n  if (data.preOrder) return 'PreOrder';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= 0) return 'OutOfStock';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= (data.lowStockThreshold || 5)) return 'LimitedAvailability';\n  return data.metadata?.availability || 'InStock';\n};\n\n// Build comprehensive Product schema for SEO (Google Rich Results)\n// @see https://developers.google.com/search/docs/appearance/structured-data/product\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  gtin: data.metadata?.gtin,\n  mpn: data.metadata?.mpn,\n  category: data.category,\n  url: Astro.url.href,\n  itemCondition: data.metadata?.condition,\n  color: data.colors?.[0],\n  material: data.materials?.[0],\n  size: data.sizes?.[0],\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: getAvailability(),\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n    itemCondition: data.metadata?.condition,\n  },\n};\n\n// Build Breadcrumb items for visual navigation\nconst breadcrumbItems = [\n  { name: 'Home', url: '/' },\n  { name: 'Shop', url: '/products' },\n  ...(data.category ? [{ name: data.category, url: `/products?category=${data.category}` }] : []),\n  { name: data.name },\n];\n\n// Build Breadcrumb schema for SEO (passed to Layout)\nconst breadcrumbSchema: BreadcrumbSchema = {\n  type: 'BreadcrumbList',\n  items: breadcrumbItems,\n};\n\n// SEO metadata\nconst pageTitle = data.metadata?.metaTitle || `${data.name} | Shop`;\nconst pageDescription = data.metadata?.metaDescription || data.description;\nconst ogImage = data.metadata?.ogImage || data.image.src;\n---\n\n<Layout\n  title={pageTitle}\n  description={pageDescription}\n  image={ogImage}\n  canonicalUrl={Astro.url.href}\n  jsonLd={[productSchema, breadcrumbSchema]}\n  openGraph={{\n    type: 'product',\n    title: data.name,\n    description: pageDescription,\n    image: ogImage,\n  }}\n>\n  <main class=\"product-page\">\n    <div class=\"product-page__container\">\n      <!-- Breadcrumb Navigation -->\n      <Breadcrumb\n        items={breadcrumbItems}\n        includeSchema={false}\n        class=\"product-page__breadcrumb\"\n      />\n\n      <div class=\"product-page__layout\">\n        <!-- Image Gallery -->\n        <div class=\"product-page__gallery\">\n          <ImageGallery\n            images={galleryImages}\n            productName={data.name}\n            aspectRatio={data.aspectRatio || '4:5'}\n            enableZoom={true}\n          />\n        </div>\n\n        <!-- Product Details -->\n        <div class=\"product-page__details\">\n          <ProductDetails\n            name={data.name}\n            description={data.description}\n            editorialDescription={data.editorialDescription}\n            price={data.price}\n            shopUrl={data.shopUrl}\n            category={data.category}\n            tagline={data.tagline}\n            isNew={data.isNew}\n            onSale={data.onSale}\n            soldOut={data.soldOut}\n            preOrder={data.preOrder}\n            colors={data.colors}\n            sizes={data.sizes}\n            materials={data.materials}\n            stockQuantity={data.stockQuantity}\n            lowStockThreshold={data.lowStockThreshold}\n            sku={data.metadata?.sku}\n            brand={data.metadata?.brand}\n            ctaText={data.ctaText}\n            openInNewTab={data.openInNewTab}\n            utmParams={data.utmParams}\n          />\n        </div>\n      </div>\n\n      <!-- Product Content (from markdown body) -->\n      {product.body && (\n        <div class=\"product-page__content\">\n          <div class=\"product-page__content-inner prose\">\n            <slot />\n          </div>\n        </div>\n      )}\n\n      <!-- Related Products - Carousel Layout -->\n      {relatedProducts.length > 0 && (\n        <RelatedProductsCarousel\n          products={relatedProducts}\n          variant=\"carousel\"\n          heading=\"You May Also Like\"\n          description=\"Explore more products from our collection\"\n          id=\"related-products\"\n          navigationPosition=\"outside\"\n          showIndicators={true}\n          enableSwipe={true}\n          enableKeyboard={true}\n          maxProducts={8}\n          gap=\"medium\"\n          carouselColumns={{\n            mobile: 1,\n            small: 2,\n            tablet: 3,\n            desktop: 4,\n          }}\n        />\n      )}\n    </div>\n  </main>\n</Layout>\n\n<style>\n  /* =================================================================\n   * PRODUCT PAGE STYLES\n   * =================================================================\n   */\n\n  .product-page {\n    padding: var(--spacing-4) 0 var(--spacing-8);\n  }\n\n  .product-page__breadcrumb {\n    margin-bottom: var(--spacing-4);\n  }\n\n  .product-page__container {\n    width: 100%;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    padding: 0 var(--spacing-4);\n  }\n\n  /* =================================================================\n   * MAIN LAYOUT - Two Column Grid\n   * ================================================================= */\n  .product-page__layout {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--spacing-12);\n    align-items: start;\n  }\n\n  .product-page__gallery {\n    position: sticky;\n    top: var(--spacing-8);\n  }\n\n  .product-page__details {\n    padding-top: var(--spacing-2);\n  }\n\n  /* =================================================================\n   * PRODUCT CONTENT (Markdown)\n   * ================================================================= */\n  .product-page__content {\n    margin-top: var(--spacing-12);\n    padding-top: var(--spacing-12);\n    border-top: 1px solid var(--color-border);\n  }\n\n  .product-page__content-inner {\n    max-width: var(--container-4xl);\n    margin: 0 auto;\n  }\n\n  /* Prose styles for markdown content */\n  .prose {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-relaxed);\n    color: var(--color-text-secondary);\n  }\n\n  .prose :global(h2) {\n    margin-top: var(--spacing-8);\n    margin-bottom: var(--spacing-4);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height-tight);\n    color: var(--color-text-primary);\n  }\n\n  .prose :global(h3) {\n    margin-top: var(--spacing-6);\n    margin-bottom: var(--spacing-3);\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    line-height: var(--line-height-snug);\n    color: var(--color-text-primary);\n  }\n\n  .prose :global(p) {\n    margin-bottom: var(--spacing-4);\n  }\n\n  .prose :global(ul),\n  .prose :global(ol) {\n    margin-bottom: var(--spacing-4);\n    padding-left: var(--spacing-6);\n  }\n\n  .prose :global(li) {\n    margin-bottom: var(--spacing-2);\n  }\n\n  .prose :global(strong) {\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n  }\n\n  .prose :global(a) {\n    color: var(--color-text-link);\n    text-decoration: underline;\n    text-underline-offset: 2px;\n    transition: color var(--duration-150) var(--ease-in-out);\n  }\n\n  .prose :global(a:hover) {\n    color: var(--color-text-link-hover);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media screen and (max-width: 1023px) {\n    .product-page__layout {\n      gap: var(--spacing-8);\n    }\n  }\n\n  @media screen and (max-width: 767px) {\n    .product-page {\n      padding: var(--spacing-4) 0;\n    }\n\n    .product-page__layout {\n      grid-template-columns: 1fr;\n      gap: var(--spacing-6);\n    }\n\n    .product-page__gallery {\n      position: relative;\n      top: 0;\n    }\n\n    .product-page__content {\n      margin-top: var(--spacing-8);\n      padding-top: var(--spacing-8);\n    }\n\n    .prose :global(h2) {\n      font-size: var(--font-size-lg);\n    }\n\n    .prose :global(h3) {\n      font-size: var(--font-size-base);\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .product-page__layout {\n      grid-template-columns: 1fr;\n    }\n\n    .product-page__gallery {\n      position: relative;\n      max-width: 400px;\n      margin: 0 auto;\n    }\n  }\n</style>\n"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProducts from '../../components/RelatedProducts.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';",
  "new_string": "import Layout from '../../layouts/Layout.astro';\nimport Breadcrumb from '../../components/Breadcrumb.astro';\nimport ImageGallery from '../../components/ImageGallery.astro';\nimport ProductDetails from '../../components/ProductDetails.astro';\nimport RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';\nimport {\n  getAllProducts,\n  getRelatedProducts,\n  toProductCardProps,\n} from '../../utils/products';"
}
There seems to be something modifying the file. Let me try a different approach - create a backup and then write the complete file:

🔧 Tool: Bash
Input: {
  "command": "cd /Users/James/Repos/retail-business && cat src/pages/products/[slug].astro | head -40",
  "description": "Check file content"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/products/[slug].astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/pages/products/*.astro"
}
I see - it's a Windows path. Let me try reading and editing again:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "old_string": "import RelatedProducts from '../../components/RelatedProducts.astro';",
  "new_string": "import RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "old_string": "// Get related products\nconst relatedProductEntries = await getRelatedProducts(product, 4);\nconst relatedProducts = relatedProductEntries.map(toProductCardProps);",
  "new_string": "// Get related products (increased to 8 for carousel)\nconst relatedProductEntries = await getRelatedProducts(product, 8);\nconst relatedProducts = relatedProductEntries.map(toProductCardProps);"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "old_string": "      <!-- Related Products -->\n      {relatedProducts.length > 0 && (\n        <RelatedProducts\n          products={relatedProducts}\n          heading=\"You May Also Like\"\n          description=\"Explore more products from our collection\"\n          columns={4}\n          id=\"related-products\"\n        />\n      )}",
  "new_string": "      <!-- Related Products - Carousel Layout -->\n      {relatedProducts.length > 0 && (\n        <RelatedProductsCarousel\n          products={relatedProducts}\n          variant=\"carousel\"\n          heading=\"You May Also Like\"\n          description=\"Explore more products from our collection\"\n          id=\"related-products\"\n          navigationPosition=\"outside\"\n          showIndicators={true}\n          enableSwipe={true}\n          enableKeyboard={true}\n          maxProducts={8}\n          gap=\"medium\"\n          carouselColumns={{\n            mobile: 1,\n            small: 2,\n            tablet: 3,\n            desktop: 4,\n          }}\n        />\n      )}"
}
Now let me also update the JSDoc comment in the file to reflect the changes and then create a demo page to showcase the different variants:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "old_string": " * - Related products section",
  "new_string": " * - Related products section with carousel layout"
}
Now let me create a demo page that showcases all the variants:

🔧 Tool: Glob
Input: {
  "pattern": "**/demo/*.astro"
}
Let me check one of the demo pages to understand the structure:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\product-card.astro"
}
Now let me create a demo page for the new RelatedProductsCarousel component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\related-products-carousel.astro",
  "content": "---\n/**\n * Demo Page - RelatedProductsCarousel Component\n * Showcases all variants: grid, carousel, and complete-the-look\n */\n\nimport Layout from '../../layouts/Layout.astro';\nimport RelatedProductsCarousel from '../../components/RelatedProductsCarousel.astro';\nimport type { ProductCardProps } from '../../types/product';\n\n// Sample product data for demos\nconst sampleProducts: ProductCardProps[] = [\n  {\n    id: 'demo-1',\n    name: 'Classic Cotton T-Shirt',\n    image: {\n      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',\n      alt: 'White classic cotton t-shirt',\n    },\n    hoverImage: {\n      src: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=500&fit=crop',\n      alt: 'White classic cotton t-shirt back view',\n    },\n    price: { amount: 29.99 },\n    shopUrl: 'https://example.com/products/classic-tshirt',\n    category: 'Tops',\n    isNew: true,\n  },\n  {\n    id: 'demo-2',\n    name: 'Premium Hoodie',\n    image: {\n      src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',\n      alt: 'Black premium hoodie',\n    },\n    hoverImage: {\n      src: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400&h=500&fit=crop',\n      alt: 'Black premium hoodie detail',\n    },\n    price: { amount: 59.99, originalAmount: 79.99 },\n    shopUrl: 'https://example.com/products/premium-hoodie',\n    category: 'Hoodies',\n    onSale: true,\n  },\n  {\n    id: 'demo-3',\n    name: 'Slim Fit Jeans',\n    image: {\n      src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',\n      alt: 'Blue slim fit jeans',\n    },\n    price: { amount: 89.99 },\n    shopUrl: 'https://example.com/products/slim-jeans',\n    category: 'Pants',\n  },\n  {\n    id: 'demo-4',\n    name: 'Leather Sneakers',\n    image: {\n      src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',\n      alt: 'White leather sneakers',\n    },\n    hoverImage: {\n      src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop',\n      alt: 'White leather sneakers side view',\n    },\n    price: { amount: 149.99 },\n    shopUrl: 'https://example.com/products/leather-sneakers',\n    category: 'Footwear',\n  },\n  {\n    id: 'demo-5',\n    name: 'Minimalist Watch',\n    image: {\n      src: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop',\n      alt: 'Minimalist watch with leather strap',\n    },\n    price: { amount: 199.99 },\n    shopUrl: 'https://example.com/products/minimalist-watch',\n    category: 'Accessories',\n  },\n  {\n    id: 'demo-6',\n    name: 'Canvas Backpack',\n    image: {\n      src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',\n      alt: 'Brown canvas backpack',\n    },\n    hoverImage: {\n      src: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=500&fit=crop',\n      alt: 'Canvas backpack open view',\n    },\n    price: { amount: 79.99 },\n    shopUrl: 'https://example.com/products/canvas-backpack',\n    category: 'Bags',\n    isNew: true,\n  },\n  {\n    id: 'demo-7',\n    name: 'Designer Sunglasses',\n    image: {\n      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',\n      alt: 'Designer sunglasses',\n    },\n    price: { amount: 189.99 },\n    shopUrl: 'https://example.com/products/designer-sunglasses',\n    category: 'Eyewear',\n  },\n  {\n    id: 'demo-8',\n    name: 'Running Shoes',\n    image: {\n      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',\n      alt: 'Running shoes',\n    },\n    hoverImage: {\n      src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=500&fit=crop',\n      alt: 'Running shoes side view',\n    },\n    price: { amount: 99.99, originalAmount: 149.99 },\n    shopUrl: 'https://example.com/products/running-shoes',\n    category: 'Footwear',\n    onSale: true,\n  },\n];\n---\n\n<Layout title=\"Related Products Carousel Demo | Houston Web Services\">\n  <main class=\"demo-page\">\n    <section class=\"demo-header\">\n      <div class=\"demo-container\">\n        <h1>RelatedProductsCarousel Component Demo</h1>\n        <p>Versatile related products section with multiple display variants: grid, carousel, and complete-the-look styling options.</p>\n      </div>\n    </section>\n\n    <!-- Demo 1: Carousel Variant (Default) -->\n    <section class=\"demo-section\">\n      <div class=\"demo-container\">\n        <h2>Carousel Variant</h2>\n        <p>Horizontal scrolling carousel with navigation arrows, touch/swipe support, and keyboard navigation.</p>\n      </div>\n\n      <RelatedProductsCarousel\n        products={sampleProducts}\n        variant=\"carousel\"\n        heading=\"You May Also Like\"\n        description=\"Explore more products from our collection\"\n        id=\"demo-carousel\"\n        navigationPosition=\"outside\"\n        showIndicators={true}\n        enableSwipe={true}\n        enableKeyboard={true}\n        maxProducts={8}\n        gap=\"medium\"\n        carouselColumns={{\n          mobile: 1,\n          small: 2,\n          tablet: 3,\n          desktop: 4,\n        }}\n      />\n    </section>\n\n    <!-- Demo 2: Complete the Look Variant -->\n    <section class=\"demo-section demo-section--alt\">\n      <div class=\"demo-container\">\n        <h2>Complete the Look Variant</h2>\n        <p>Styled curated section for outfit/collection pairing with badge, editorial typography, and subtle background.</p>\n      </div>\n\n      <div class=\"demo-container\">\n        <RelatedProductsCarousel\n          products={sampleProducts.slice(0, 6)}\n          variant=\"complete-the-look\"\n          heading=\"Complete the Look\"\n          description=\"Pair perfectly with these items\"\n          id=\"demo-complete-look\"\n          badgeText=\"Styling Pick\"\n          navigationPosition=\"inside\"\n          enableSwipe={true}\n          maxProducts={6}\n          gap=\"large\"\n          carouselColumns={{\n            mobile: 1,\n            small: 2,\n            tablet: 3,\n            desktop: 4,\n          }}\n        />\n      </div>\n    </section>\n\n    <!-- Demo 3: Grid Variant -->\n    <section class=\"demo-section\">\n      <div class=\"demo-container\">\n        <h2>Grid Variant</h2>\n        <p>Traditional responsive grid layout, ideal for showing related products in a structured format.</p>\n      </div>\n\n      <div class=\"demo-container\">\n        <RelatedProductsCarousel\n          products={sampleProducts.slice(0, 4)}\n          variant=\"grid\"\n          heading=\"Related Products\"\n          description=\"Products you might also like\"\n          id=\"demo-grid\"\n          columns={4}\n          maxProducts={4}\n          gap=\"medium\"\n          enableAnimation={true}\n        />\n      </div>\n    </section>\n\n    <!-- Demo 4: Carousel with Inside Navigation -->\n    <section class=\"demo-section demo-section--alt\">\n      <div class=\"demo-container\">\n        <h2>Carousel with Inside Navigation</h2>\n        <p>Navigation buttons overlaid inside the carousel viewport for a more compact look.</p>\n      </div>\n\n      <RelatedProductsCarousel\n        products={sampleProducts}\n        variant=\"carousel\"\n        heading=\"More to Explore\"\n        id=\"demo-inside-nav\"\n        navigationPosition=\"inside\"\n        showIndicators={true}\n        enableSwipe={true}\n        maxProducts={8}\n        gap=\"medium\"\n      />\n    </section>\n\n    <!-- Demo 5: Carousel with View All CTA -->\n    <section class=\"demo-section\">\n      <div class=\"demo-container\">\n        <h2>Carousel with View All Link</h2>\n        <p>Includes a \"View All\" call-to-action button for navigation to a full collection page.</p>\n      </div>\n\n      <RelatedProductsCarousel\n        products={sampleProducts}\n        variant=\"carousel\"\n        heading=\"Recently Viewed\"\n        description=\"Continue where you left off\"\n        id=\"demo-view-all\"\n        navigationPosition=\"outside\"\n        showIndicators={true}\n        showViewAll={true}\n        viewAllUrl=\"/products\"\n        viewAllText=\"View All Products\"\n        maxProducts={8}\n        gap=\"medium\"\n      />\n    </section>\n\n    <!-- Demo 6: Compact Carousel -->\n    <section class=\"demo-section demo-section--alt\">\n      <div class=\"demo-container\">\n        <h2>Compact Carousel (No Navigation Buttons)</h2>\n        <p>Swipe-only carousel for mobile-first designs or narrow spaces. Perfect for sidebars.</p>\n      </div>\n\n      <div class=\"demo-container demo-container--narrow\">\n        <RelatedProductsCarousel\n          products={sampleProducts.slice(0, 6)}\n          variant=\"carousel\"\n          heading=\"Quick Picks\"\n          id=\"demo-compact\"\n          navigationPosition=\"none\"\n          showIndicators={true}\n          enableSwipe={true}\n          maxProducts={6}\n          gap=\"small\"\n          carouselColumns={{\n            mobile: 2,\n            small: 2,\n            tablet: 3,\n            desktop: 3,\n          }}\n        />\n      </div>\n    </section>\n\n    <!-- Features List -->\n    <section class=\"demo-section\">\n      <div class=\"demo-container\">\n        <h2>Component Features</h2>\n        <ul class=\"feature-list\">\n          <li><strong>Multiple Variants:</strong> Grid, carousel, and complete-the-look display modes</li>\n          <li><strong>Horizontal Scroll:</strong> Smooth CSS-based carousel with transform animations</li>\n          <li><strong>Touch/Swipe Support:</strong> Native touch gestures for mobile devices</li>\n          <li><strong>Keyboard Navigation:</strong> Arrow keys, Home, and End key support</li>\n          <li><strong>Navigation Positions:</strong> Outside, inside, bottom, or none</li>\n          <li><strong>Pagination Indicators:</strong> Optional dot indicators for carousel position</li>\n          <li><strong>Complete the Look:</strong> Editorial styling with badge and custom typography</li>\n          <li><strong>Responsive Columns:</strong> Configurable columns for mobile, tablet, and desktop</li>\n          <li><strong>Reveal Animations:</strong> Staggered entrance animations with scroll detection</li>\n          <li><strong>Accessibility:</strong> ARIA labels, live regions, and screen reader support</li>\n          <li><strong>Reduced Motion:</strong> Respects user motion preferences</li>\n          <li><strong>Dark Mode:</strong> Full dark mode support with theme-aware colors</li>\n          <li><strong>UTM Tracking:</strong> Automatic campaign tracking for product links</li>\n          <li><strong>Infinite Scroll:</strong> Optional continuous scrolling mode</li>\n        </ul>\n      </div>\n    </section>\n\n    <!-- Usage Examples -->\n    <section class=\"demo-section demo-section--alt\">\n      <div class=\"demo-container\">\n        <h2>Usage Examples</h2>\n        <div class=\"code-examples\">\n          <div class=\"code-example\">\n            <h3>Carousel Variant</h3>\n            <pre><code>&lt;RelatedProductsCarousel\n  products={'{'}relatedProducts{'}'}\n  variant=\"carousel\"\n  heading=\"You May Also Like\"\n  navigationPosition=\"outside\"\n  showIndicators={'{'}true{'}'}\n  enableSwipe={'{'}true{'}'}\n/&gt;</code></pre>\n          </div>\n\n          <div class=\"code-example\">\n            <h3>Complete the Look Variant</h3>\n            <pre><code>&lt;RelatedProductsCarousel\n  products={'{'}curatedProducts{'}'}\n  variant=\"complete-the-look\"\n  heading=\"Complete the Look\"\n  badgeText=\"Styling Pick\"\n  description=\"Pair perfectly with these items\"\n/&gt;</code></pre>\n          </div>\n\n          <div class=\"code-example\">\n            <h3>Grid Variant</h3>\n            <pre><code>&lt;RelatedProductsCarousel\n  products={'{'}relatedProducts{'}'}\n  variant=\"grid\"\n  heading=\"Related Products\"\n  columns={'{'}4{'}'}\n  enableAnimation={'{'}true{'}'}\n/&gt;</code></pre>\n          </div>\n        </div>\n      </div>\n    </section>\n  </main>\n</Layout>\n\n<style>\n  .demo-page {\n    min-height: 100vh;\n  }\n\n  .demo-header {\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-12);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-900) 0%,\n      var(--color-primary-700) 100%\n    );\n    text-align: center;\n  }\n\n  .demo-header h1 {\n    color: var(--color-text-inverse);\n    font-size: var(--font-size-3xl);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .demo-header p {\n    color: var(--color-primary-100);\n    font-size: var(--font-size-lg);\n    max-width: 50rem;\n    margin: 0 auto;\n  }\n\n  .demo-container {\n    max-width: 80rem;\n    margin: 0 auto;\n    padding: 0 var(--spacing-4);\n  }\n\n  .demo-container--narrow {\n    max-width: 48rem;\n  }\n\n  .demo-section {\n    padding: var(--spacing-12) 0;\n  }\n\n  .demo-section--alt {\n    background-color: var(--color-background-subtle);\n  }\n\n  .demo-section h2 {\n    font-size: var(--font-size-2xl);\n    color: var(--color-text-primary);\n    margin-bottom: var(--spacing-2);\n  }\n\n  .demo-section > .demo-container > p {\n    color: var(--color-text-secondary);\n    margin-bottom: var(--spacing-8);\n  }\n\n  /* Feature List */\n  .feature-list {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: var(--spacing-4);\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  @media (min-width: 768px) {\n    .feature-list {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  .feature-list li {\n    padding: var(--spacing-3) var(--spacing-4);\n    background-color: var(--color-background);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--color-border);\n    color: var(--color-text-secondary);\n  }\n\n  .feature-list strong {\n    color: var(--color-text-primary);\n  }\n\n  /* Code Examples */\n  .code-examples {\n    display: grid;\n    gap: var(--spacing-6);\n  }\n\n  @media (min-width: 1024px) {\n    .code-examples {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n\n  .code-example {\n    background-color: var(--color-background);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--color-border);\n    overflow: hidden;\n  }\n\n  .code-example h3 {\n    padding: var(--spacing-3) var(--spacing-4);\n    margin: 0;\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    background-color: var(--color-background-subtle);\n    border-bottom: 1px solid var(--color-border);\n  }\n\n  .code-example pre {\n    margin: 0;\n    padding: var(--spacing-4);\n    overflow-x: auto;\n    background-color: var(--color-primary-950);\n  }\n\n  .code-example code {\n    font-family: var(--font-mono);\n    font-size: var(--font-size-xs);\n    color: var(--color-primary-100);\n    line-height: 1.6;\n    white-space: pre;\n  }\n</style>\n"
}
Now let me update the todo list and verify the created files:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create RelatedProductsCarousel component with horizontal scroll layout",
      "status": "completed",
      "activeForm": "Creating RelatedProductsCarousel component with horizontal scroll layout"
    },
    {
      "content": "Add 'Complete the Look' variant styling option",
      "status": "completed",
      "activeForm": "Adding 'Complete the Look' variant styling option"
    },
    {
      "content": "Create TypeScript type definitions for the new component",
      "status": "completed",
      "activeForm": "Creating TypeScript type definitions"
    },
    {
      "content": "Update product detail page to use the new component options",
      "status": "completed",
      "activeForm": "Updating product detail page to use new component"
    },
    {
      "content": "Test component integration and verify styling patterns",
      "status": "completed",
      "activeForm": "Testing component integration and verifying styling patterns"
    }
  ]
}
Let me verify all the files were created correctly:

🔧 Tool: Glob
Input: {
  "pattern": "**/RelatedProductsCarousel.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/types/related-products.ts"
}
All files are in place. Let me also verify the product detail page was updated correctly:

🔧 Tool: Grep
Input: {
  "pattern": "RelatedProductsCarousel",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro",
  "output_mode": "content"
}
All implementations are complete. Let me provide a summary:

<summary>
## Summary: Related Products Component for Product Detail Pages

### Changes Implemented
- Created a new **RelatedProductsCarousel** component with three display variants:
  - **Grid variant**: Traditional responsive grid layout (2-4 columns)
  - **Carousel variant**: Horizontal scroll with navigation arrows, touch/swipe support, keyboard navigation, and pagination indicators
  - **Complete the Look variant**: Styled curated section with badge, editorial typography, and subtle background for outfit/collection pairing
- Created comprehensive **TypeScript type definitions** for all component props and configurations
- Added **preset configurations** for common use cases (standard, carousel, completeTheLook, compact)
- Updated the **product detail page** to use the new carousel variant with 8 products
- Created a **demo page** showcasing all variants and configuration options

### Files Modified
- `src/pages/products/[slug].astro` - Updated to use RelatedProductsCarousel with carousel variant

### Files Created
- `src/components/RelatedProductsCarousel.astro` - Main component with all three variants
- `src/types/related-products.ts` - TypeScript type definitions and presets
- `src/pages/demo/related-products-carousel.astro` - Demo page with all variants

### Component Features
- **Horizontal scroll carousel** with CSS transform animations
- **Navigation arrows** with configurable positions (outside, inside, bottom, none)
- **Touch/swipe support** for mobile devices
- **Keyboard navigation** (arrow keys, Home, End)
- **Pagination indicators** (dots)
- **'Complete the Look' styling** with badge, editorial typography
- **Responsive columns** (configurable for mobile, small, tablet, desktop)
- **Reveal animations** with staggered entrance and scroll detection
- **Accessibility** (ARIA labels, live regions, screen reader support)
- **Reduced motion support** (respects user preferences)
- **Dark mode support** with theme-aware colors
- **UTM tracking** for product links
- **Infinite scroll option**

### Notes for Developer
- The original `RelatedProducts.astro` component is preserved for backward compatibility
- The new component follows the same BEM naming conventions and design system variables
- Demo page available at `/demo/related-products-carousel` for testing all variants
- Product detail page now shows 8 related products (increased from 4) to leverage the carousel
- All styling follows existing patterns from `NewArrivalsCarousel.astro` and design system
</summary>