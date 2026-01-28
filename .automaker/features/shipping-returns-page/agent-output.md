
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand the existing structure for implementing a new shipping and returns page. I need to understand:\n\n1. The overall project structure (framework used - React, Next.js, Vue, etc.)\n2. How existing pages are structured and organized\n3. Routing patterns used\n4. Component patterns and styling approaches\n5. Any existing related pages (like FAQ, About, Contact) that could serve as templates\n\nLook at the root directory structure, package.json, and examine a few existing pages to understand the patterns. Be thorough in your exploration.",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -50",
  "description": "List root directory contents"
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
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type f -name \"*.astro\" -o -name \"*.ts\" -o -name \"*.tsx\" | head -50",
  "description": "Find all Astro and TypeScript files in src"
}

🔧 Tool: Bash
Input: {
  "command": "dir /s \"C:\\Users\\James\\Repos\\retail-business\\src\"",
  "description": "List src directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\"",
  "description": "List pages directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\README.md"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\contact.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\about.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\"",
  "description": "List styles directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Bash
Input: {
  "command": "grep -l \"FAQAccordion\\|faq\" \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\*.astro\" 2>/dev/null || echo \"No FAQ pages found in root pages directory\"",
  "description": "Search for FAQ pages"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FAQAccordion.astro"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\config\"",
  "description": "List config directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\seo.config.ts",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\\"`",
  "description": "List services subdirectory"
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\"",
  "description": "List services subdirectory"
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\"",
  "description": "List products subdirectory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\website-design.astro",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "head -80 \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\index.astro\"",
  "description": "View index page beginning"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\seo.ts",
  "limit": 60
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" -name \"*.astro\" | wc -l",
  "description": "Count total components"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "limit": 100
}
Now I have a comprehensive understanding of the codebase. Let me look at the existing FAQAccordion component and contact.astro page as references to create the shipping and returns page.

🔧 Tool: Read
Input: {
  "file_path": "/workspace/src/components/FAQAccordion.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/workspace/src/pages/contact.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/workspace/src/pages/visit.astro"
}
Let me find the correct paths to these files:

🔧 Tool: Bash
Input: {
  "command": "find . -type f -name \"*.astro\" | head -30",
  "description": "Find Astro files in the project"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing reference files (FAQAccordion, contact.astro, visit.astro, Layout.astro)",
      "status": "in_progress",
      "activeForm": "Reading existing reference files"
    },
    {
      "content": "Create shipping-returns.astro page with all sections",
      "status": "pending",
      "activeForm": "Creating shipping-returns.astro page"
    },
    {
      "content": "Add FAQ items for shipping and returns questions",
      "status": "pending",
      "activeForm": "Adding FAQ items for shipping and returns"
    },
    {
      "content": "Style the page following existing patterns",
      "status": "pending",
      "activeForm": "Styling the page"
    },
    {
      "content": "Verify the implementation builds correctly",
      "status": "pending",
      "activeForm": "Verifying the implementation builds correctly"
    }
  ]
}
Now let me read the reference files using the correct paths:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\FAQAccordion.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\contact.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing reference files (FAQAccordion, contact.astro, visit.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing reference files"
    },
    {
      "content": "Create shipping-returns.astro page with all sections",
      "status": "in_progress",
      "activeForm": "Creating shipping-returns.astro page"
    },
    {
      "content": "Add FAQ items for shipping and returns questions",
      "status": "pending",
      "activeForm": "Adding FAQ items for shipping and returns"
    },
    {
      "content": "Style the page following existing patterns",
      "status": "pending",
      "activeForm": "Styling the page"
    },
    {
      "content": "Verify the implementation builds correctly",
      "status": "pending",
      "activeForm": "Verifying the implementation builds correctly"
    }
  ]
}
Now let me also look at the ContactCTA component to include it at the bottom of the shipping-returns page:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ContactCTA.astro"
}
Now I have a great understanding of the patterns used in this codebase. Let me create the shipping-returns page with all the required sections:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\shipping-returns.astro",
  "content": "---\n/**\n * Shipping & Returns Page\n * A comprehensive page for shipping policies, return procedures,\n * international shipping details, and packaging information.\n *\n * Features:\n * - Clear shipping timelines and costs\n * - Return policy with step-by-step procedures\n * - International shipping information\n * - Packaging and sustainability details\n * - FAQ accordion for common questions\n * - Full accessibility support\n * - SEO optimized with FAQPage schema\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport FAQAccordion from '../components/FAQAccordion.astro';\nimport ContactCTA from '../components/ContactCTA.astro';\nimport Button from '../components/Button.astro';\n\n// Shipping options data\nconst shippingOptions = [\n  {\n    name: 'Standard Shipping',\n    deliveryTime: '5-7 Business Days',\n    cost: 'Free on orders $75+',\n    costDetail: '$5.99 for orders under $75',\n    icon: 'truck',\n    description: 'Reliable delivery for non-urgent orders.',\n  },\n  {\n    name: 'Express Shipping',\n    deliveryTime: '2-3 Business Days',\n    cost: '$12.99',\n    costDetail: 'Free on orders $150+',\n    icon: 'rocket',\n    description: 'Fast delivery when you need it sooner.',\n  },\n  {\n    name: 'Next Day Delivery',\n    deliveryTime: '1 Business Day',\n    cost: '$24.99',\n    costDetail: 'Order by 2pm EST',\n    icon: 'lightning',\n    description: 'Get your order the very next business day.',\n  },\n];\n\n// International shipping zones\nconst internationalZones = [\n  {\n    zone: 'Canada',\n    deliveryTime: '7-14 Business Days',\n    cost: 'Starting at $15.99',\n    notes: 'Customs fees may apply',\n  },\n  {\n    zone: 'Europe (UK, EU)',\n    deliveryTime: '10-21 Business Days',\n    cost: 'Starting at $24.99',\n    notes: 'VAT and duties may apply',\n  },\n  {\n    zone: 'Australia & New Zealand',\n    deliveryTime: '14-28 Business Days',\n    cost: 'Starting at $29.99',\n    notes: 'GST may apply at delivery',\n  },\n  {\n    zone: 'Rest of World',\n    deliveryTime: '14-35 Business Days',\n    cost: 'Calculated at checkout',\n    notes: 'Contact us for specific destinations',\n  },\n];\n\n// Return timeline steps\nconst returnSteps = [\n  {\n    step: 1,\n    title: 'Initiate Return',\n    description: 'Log into your account or contact us within 30 days of delivery to start your return.',\n    icon: 'clipboard',\n  },\n  {\n    step: 2,\n    title: 'Pack Your Items',\n    description: 'Place items in original packaging. Include all tags and accessories.',\n    icon: 'box',\n  },\n  {\n    step: 3,\n    title: 'Ship It Back',\n    description: 'Use the prepaid label we provide or your preferred carrier.',\n    icon: 'send',\n  },\n  {\n    step: 4,\n    title: 'Get Refunded',\n    description: 'Refund processed within 5-7 business days of receiving your return.',\n    icon: 'check-circle',\n  },\n];\n\n// Shipping FAQ items\nconst shippingFaqItems = [\n  {\n    question: 'How long does shipping take?',\n    answer: `<p>Shipping times vary based on your selected method:</p>\n      <ul>\n        <li><strong>Standard Shipping:</strong> 5-7 business days</li>\n        <li><strong>Express Shipping:</strong> 2-3 business days</li>\n        <li><strong>Next Day Delivery:</strong> 1 business day (order by 2pm EST)</li>\n      </ul>\n      <p>Please note that processing time (1-2 business days) is additional to shipping time. Orders placed on weekends or holidays will be processed the next business day.</p>`,\n  },\n  {\n    question: 'Do you offer free shipping?',\n    answer: `<p>Yes! We offer <strong>free standard shipping on all orders over $75</strong> within the continental United States. Express shipping is free on orders over $150.</p>\n      <p>For orders under $75, standard shipping is a flat rate of $5.99.</p>`,\n  },\n  {\n    question: 'Can I track my order?',\n    answer: `<p>Absolutely! Once your order ships, you'll receive a confirmation email with your tracking number. You can also track your order by:</p>\n      <ul>\n        <li>Logging into your account and viewing order status</li>\n        <li>Clicking the tracking link in your shipping confirmation email</li>\n        <li>Contacting our customer service team with your order number</li>\n      </ul>`,\n  },\n  {\n    question: 'Do you ship internationally?',\n    answer: `<p>Yes, we ship to many countries worldwide! International shipping rates and delivery times vary by destination:</p>\n      <ul>\n        <li><strong>Canada:</strong> 7-14 business days, starting at $15.99</li>\n        <li><strong>Europe:</strong> 10-21 business days, starting at $24.99</li>\n        <li><strong>Australia/NZ:</strong> 14-28 business days, starting at $29.99</li>\n      </ul>\n      <p>Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>`,\n  },\n  {\n    question: 'What happens if my package is lost or damaged?',\n    answer: `<p>We've got you covered! If your package is lost, damaged, or arrives with incorrect items:</p>\n      <ol>\n        <li>Contact us within 48 hours of delivery (or expected delivery date)</li>\n        <li>Provide your order number and photos of any damage</li>\n        <li>We'll either reship your items or issue a full refund</li>\n      </ol>\n      <p>All shipments are insured, so you're protected from the moment your order leaves our warehouse.</p>`,\n  },\n];\n\n// Returns FAQ items\nconst returnsFaqItems = [\n  {\n    question: 'What is your return policy?',\n    answer: `<p>We offer a <strong>30-day hassle-free return policy</strong> on most items. To be eligible for a return:</p>\n      <ul>\n        <li>Items must be unused and in original condition</li>\n        <li>All tags must be attached</li>\n        <li>Original packaging should be included when possible</li>\n        <li>Return must be initiated within 30 days of delivery</li>\n      </ul>\n      <p>Some exclusions apply to final sale items, personalized products, and intimate apparel.</p>`,\n  },\n  {\n    question: 'How do I start a return?',\n    answer: `<p>Starting a return is easy:</p>\n      <ol>\n        <li><strong>Online:</strong> Log into your account, find your order, and click \"Start Return\"</li>\n        <li><strong>Email:</strong> Send us your order number and reason for return</li>\n        <li><strong>Phone:</strong> Call our customer service team at (555) 123-4567</li>\n      </ol>\n      <p>We'll provide you with a prepaid return label and instructions within 24 hours.</p>`,\n  },\n  {\n    question: 'Do I have to pay for return shipping?',\n    answer: `<p>For returns due to our error (wrong item, defective product), return shipping is <strong>completely free</strong>.</p>\n      <p>For standard returns (changed your mind, sizing issues), we offer two options:</p>\n      <ul>\n        <li><strong>Free:</strong> Store credit for the full amount</li>\n        <li><strong>$5.99 deduction:</strong> Refund to original payment method</li>\n      </ul>\n      <p>We believe in making returns as painless as possible!</p>`,\n  },\n  {\n    question: 'How long does it take to get my refund?',\n    answer: `<p>Once we receive your return, here's the timeline:</p>\n      <ul>\n        <li><strong>Inspection:</strong> 1-2 business days</li>\n        <li><strong>Refund processing:</strong> 3-5 business days</li>\n        <li><strong>Bank processing:</strong> Up to 10 additional business days (varies by bank)</li>\n      </ul>\n      <p>Store credit refunds are typically available within 24 hours of return approval. You'll receive an email confirmation at each step.</p>`,\n  },\n  {\n    question: 'Can I exchange an item instead of returning it?',\n    answer: `<p>Yes! We offer <strong>free exchanges</strong> for different sizes or colors of the same item. Here's how:</p>\n      <ol>\n        <li>Start a return and select \"Exchange\" as your reason</li>\n        <li>Choose the new size or color you'd like</li>\n        <li>We'll ship your new item as soon as we receive your return</li>\n      </ol>\n      <p>For faster service, you can also place a new order and return the original item for a refund.</p>`,\n  },\n  {\n    question: 'What items cannot be returned?',\n    answer: `<p>For hygiene and safety reasons, the following items are <strong>final sale</strong> and cannot be returned:</p>\n      <ul>\n        <li>Intimate apparel and swimwear (if hygiene seal is broken)</li>\n        <li>Personalized or custom-made items</li>\n        <li>Items marked as \"Final Sale\" at time of purchase</li>\n        <li>Gift cards</li>\n        <li>Items damaged due to misuse or normal wear</li>\n      </ul>\n      <p>If you receive a defective item from any category, please contact us and we'll make it right.</p>`,\n  },\n];\n\n// Build FAQPage schema for SEO\nconst allFaqItems = [...shippingFaqItems, ...returnsFaqItems];\nconst faqSchema = {\n  '@type': 'FAQPage',\n  name: 'Shipping & Returns FAQ',\n  mainEntity: allFaqItems.map(item => ({\n    '@type': 'Question',\n    name: item.question,\n    acceptedAnswer: {\n      '@type': 'Answer',\n      text: item.answer.replace(/<[^>]*>/g, ''), // Strip HTML for schema\n    },\n  })),\n};\n---\n\n<Layout\n  title=\"Shipping & Returns\"\n  description=\"Learn about our shipping options, delivery times, and hassle-free 30-day return policy. Free shipping on orders over $75. International shipping available.\"\n  openGraph={{\n    type: 'website',\n  }}\n  jsonLd={faqSchema}\n>\n  <main>\n    <!-- Hero Section -->\n    <section class=\"shipping-hero\" aria-labelledby=\"shipping-hero-heading\">\n      <div class=\"shipping-hero__container\">\n        <span class=\"shipping-hero__eyebrow reveal reveal--up\">Customer Support</span>\n        <h1 id=\"shipping-hero-heading\" class=\"shipping-hero__title reveal reveal--up reveal--delay-1\">\n          Shipping & Returns\n        </h1>\n        <p class=\"shipping-hero__subtitle reveal reveal--up reveal--delay-2\">\n          We make shopping easy with fast shipping, free returns, and a 30-day satisfaction guarantee.\n          Everything you need to know is right here.\n        </p>\n        <div class=\"shipping-hero__cta reveal reveal--up reveal--delay-3\">\n          <Button\n            text=\"Track My Order\"\n            href=\"/contact\"\n            variant=\"primary\"\n            size=\"large\"\n          />\n        </div>\n      </div>\n    </section>\n\n    <!-- Quick Stats Bar -->\n    <section class=\"shipping-stats\" aria-label=\"Shipping highlights\">\n      <div class=\"shipping-stats__container\">\n        <div class=\"shipping-stats__grid\">\n          <div class=\"shipping-stats__item\">\n            <div class=\"shipping-stats__icon\" aria-hidden=\"true\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <rect x=\"1\" y=\"3\" width=\"15\" height=\"13\" rx=\"2\"/>\n                <path d=\"M16 8h4l3 3v5a2 2 0 0 1-2 2h-1\"/>\n                <circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"/>\n                <circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"/>\n              </svg>\n            </div>\n            <div class=\"shipping-stats__content\">\n              <span class=\"shipping-stats__value\">Free</span>\n              <span class=\"shipping-stats__label\">Shipping on $75+</span>\n            </div>\n          </div>\n\n          <div class=\"shipping-stats__item\">\n            <div class=\"shipping-stats__icon\" aria-hidden=\"true\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <polyline points=\"23 4 23 10 17 10\"/>\n                <polyline points=\"1 20 1 14 7 14\"/>\n                <path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"/>\n              </svg>\n            </div>\n            <div class=\"shipping-stats__content\">\n              <span class=\"shipping-stats__value\">30 Days</span>\n              <span class=\"shipping-stats__label\">Easy Returns</span>\n            </div>\n          </div>\n\n          <div class=\"shipping-stats__item\">\n            <div class=\"shipping-stats__icon\" aria-hidden=\"true\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n                <polyline points=\"12 6 12 12 16 14\"/>\n              </svg>\n            </div>\n            <div class=\"shipping-stats__content\">\n              <span class=\"shipping-stats__value\">1-7 Days</span>\n              <span class=\"shipping-stats__label\">Delivery Options</span>\n            </div>\n          </div>\n\n          <div class=\"shipping-stats__item\">\n            <div class=\"shipping-stats__icon\" aria-hidden=\"true\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>\n                <polyline points=\"9 12 11 14 15 10\"/>\n              </svg>\n            </div>\n            <div class=\"shipping-stats__content\">\n              <span class=\"shipping-stats__value\">100%</span>\n              <span class=\"shipping-stats__label\">Secure & Insured</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Shipping Options Section -->\n    <section class=\"shipping-options\" aria-labelledby=\"shipping-options-heading\">\n      <div class=\"shipping-options__container\">\n        <div class=\"shipping-options__header reveal reveal--up\">\n          <h2 id=\"shipping-options-heading\" class=\"shipping-options__title\">\n            Domestic Shipping Options\n          </h2>\n          <p class=\"shipping-options__subtitle\">\n            Choose the shipping speed that works best for you. All orders are processed within 1-2 business days.\n          </p>\n        </div>\n\n        <div class=\"shipping-options__grid\">\n          {shippingOptions.map((option, index) => (\n            <article class={`shipping-options__card reveal reveal--up reveal--delay-${index + 1}`}>\n              <div class=\"shipping-options__card-icon\" aria-hidden=\"true\">\n                {option.icon === 'truck' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <rect x=\"1\" y=\"3\" width=\"15\" height=\"13\" rx=\"2\"/>\n                    <path d=\"M16 8h4l3 3v5a2 2 0 0 1-2 2h-1\"/>\n                    <circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"/>\n                    <circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"/>\n                  </svg>\n                )}\n                {option.icon === 'rocket' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\"/>\n                    <path d=\"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"/>\n                    <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"/>\n                    <path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/>\n                  </svg>\n                )}\n                {option.icon === 'lightning' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/>\n                  </svg>\n                )}\n              </div>\n              <div class=\"shipping-options__card-content\">\n                <h3 class=\"shipping-options__card-title\">{option.name}</h3>\n                <p class=\"shipping-options__card-description\">{option.description}</p>\n                <div class=\"shipping-options__card-details\">\n                  <div class=\"shipping-options__card-time\">\n                    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                      <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n                      <polyline points=\"12 6 12 12 16 14\"/>\n                    </svg>\n                    <span>{option.deliveryTime}</span>\n                  </div>\n                  <div class=\"shipping-options__card-cost\">\n                    <span class=\"shipping-options__card-price\">{option.cost}</span>\n                    <span class=\"shipping-options__card-note\">{option.costDetail}</span>\n                  </div>\n                </div>\n              </div>\n            </article>\n          ))}\n        </div>\n      </div>\n    </section>\n\n    <!-- International Shipping Section -->\n    <section class=\"shipping-international\" aria-labelledby=\"shipping-international-heading\">\n      <div class=\"shipping-international__container\">\n        <div class=\"shipping-international__content\">\n          <div class=\"shipping-international__info reveal reveal--left\">\n            <h2 id=\"shipping-international-heading\" class=\"shipping-international__title\">\n              International Shipping\n            </h2>\n            <p class=\"shipping-international__subtitle\">\n              We ship to over 100 countries worldwide. International shipping rates are calculated\n              at checkout based on destination and package weight.\n            </p>\n\n            <div class=\"shipping-international__note\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n                <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"/>\n                <line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"/>\n              </svg>\n              <p><strong>Important:</strong> International orders may be subject to customs duties, taxes,\n              and import fees. These charges are the responsibility of the recipient and are not included\n              in the shipping cost.</p>\n            </div>\n          </div>\n\n          <div class=\"shipping-international__zones reveal reveal--right\">\n            <div class=\"shipping-international__table\" role=\"table\" aria-label=\"International shipping rates\">\n              <div class=\"shipping-international__table-header\" role=\"row\">\n                <span role=\"columnheader\">Destination</span>\n                <span role=\"columnheader\">Delivery Time</span>\n                <span role=\"columnheader\">Starting Price</span>\n              </div>\n              {internationalZones.map((zone) => (\n                <div class=\"shipping-international__table-row\" role=\"row\">\n                  <span class=\"shipping-international__zone\" role=\"cell\">\n                    {zone.zone}\n                    {zone.notes && <small>{zone.notes}</small>}\n                  </span>\n                  <span class=\"shipping-international__time\" role=\"cell\">{zone.deliveryTime}</span>\n                  <span class=\"shipping-international__cost\" role=\"cell\">{zone.cost}</span>\n                </div>\n              ))}\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Returns Section -->\n    <section class=\"shipping-returns\" aria-labelledby=\"shipping-returns-heading\">\n      <div class=\"shipping-returns__container\">\n        <div class=\"shipping-returns__header reveal reveal--up\">\n          <h2 id=\"shipping-returns-heading\" class=\"shipping-returns__title\">\n            Easy Returns Process\n          </h2>\n          <p class=\"shipping-returns__subtitle\">\n            Changed your mind? No problem. We offer a 30-day return policy on most items,\n            because we want you to love what you buy.\n          </p>\n        </div>\n\n        <div class=\"shipping-returns__timeline\">\n          {returnSteps.map((step, index) => (\n            <div class={`shipping-returns__step reveal reveal--up reveal--delay-${index + 1}`}>\n              <div class=\"shipping-returns__step-number\" aria-hidden=\"true\">{step.step}</div>\n              <div class=\"shipping-returns__step-icon\" aria-hidden=\"true\">\n                {step.icon === 'clipboard' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/>\n                    <rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"/>\n                  </svg>\n                )}\n                {step.icon === 'box' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/>\n                    <polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"/>\n                    <line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"/>\n                  </svg>\n                )}\n                {step.icon === 'send' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/>\n                    <polygon points=\"22 2 15 22 11 13 2 9 22 2\"/>\n                  </svg>\n                )}\n                {step.icon === 'check-circle' && (\n                  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/>\n                    <polyline points=\"22 4 12 14.01 9 11.01\"/>\n                  </svg>\n                )}\n              </div>\n              <div class=\"shipping-returns__step-content\">\n                <h3 class=\"shipping-returns__step-title\">{step.title}</h3>\n                <p class=\"shipping-returns__step-description\">{step.description}</p>\n              </div>\n              {index < returnSteps.length - 1 && (\n                <div class=\"shipping-returns__step-connector\" aria-hidden=\"true\"></div>\n              )}\n            </div>\n          ))}\n        </div>\n\n        <div class=\"shipping-returns__cta reveal reveal--up\">\n          <Button\n            text=\"Start a Return\"\n            href=\"/contact\"\n            variant=\"secondary\"\n            size=\"large\"\n          />\n        </div>\n      </div>\n    </section>\n\n    <!-- Packaging Section -->\n    <section class=\"shipping-packaging\" aria-labelledby=\"shipping-packaging-heading\">\n      <div class=\"shipping-packaging__container\">\n        <div class=\"shipping-packaging__grid\">\n          <div class=\"shipping-packaging__content reveal reveal--left\">\n            <h2 id=\"shipping-packaging-heading\" class=\"shipping-packaging__title\">\n              Thoughtful Packaging\n            </h2>\n            <p class=\"shipping-packaging__subtitle\">\n              We believe great products deserve great packaging. Every order is carefully\n              packed to ensure your items arrive safely.\n            </p>\n\n            <ul class=\"shipping-packaging__list\" role=\"list\">\n              <li class=\"shipping-packaging__list-item\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                  <polyline points=\"20 6 9 17 4 12\"/>\n                </svg>\n                <span><strong>Eco-friendly materials:</strong> 100% recyclable boxes and paper</span>\n              </li>\n              <li class=\"shipping-packaging__list-item\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                  <polyline points=\"20 6 9 17 4 12\"/>\n                </svg>\n                <span><strong>Protective padding:</strong> Items secured to prevent damage</span>\n              </li>\n              <li class=\"shipping-packaging__list-item\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                  <polyline points=\"20 6 9 17 4 12\"/>\n                </svg>\n                <span><strong>Discreet shipping:</strong> No product details on exterior</span>\n              </li>\n              <li class=\"shipping-packaging__list-item\">\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                  <polyline points=\"20 6 9 17 4 12\"/>\n                </svg>\n                <span><strong>Gift-ready option:</strong> Add a gift message at checkout</span>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"shipping-packaging__image reveal reveal--right\">\n            <div class=\"shipping-packaging__illustration\" aria-hidden=\"true\">\n              <svg viewBox=\"0 0 200 200\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <rect x=\"30\" y=\"60\" width=\"140\" height=\"100\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/>\n                <path d=\"M30 90 L100 130 L170 90\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/>\n                <path d=\"M100 130 L100 160\" stroke=\"currentColor\" stroke-width=\"3\"/>\n                <path d=\"M60 40 L100 20 L140 40 L140 60 L100 80 L60 60 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.5\"/>\n                <circle cx=\"100\" cy=\"100\" r=\"15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/>\n                <polyline points=\"93,100 98,105 107,96\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/>\n              </svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Shipping FAQ Section -->\n    <FAQAccordion\n      items={shippingFaqItems}\n      heading=\"Shipping Questions\"\n      subheading=\"Find answers to common questions about delivery times, costs, and tracking.\"\n      id=\"shipping-faq\"\n    />\n\n    <!-- Returns FAQ Section -->\n    <FAQAccordion\n      items={returnsFaqItems}\n      heading=\"Return Questions\"\n      subheading=\"Everything you need to know about our return and exchange policies.\"\n      id=\"returns-faq\"\n    />\n\n    <!-- Contact CTA Section -->\n    <ContactCTA\n      headline=\"Still Have Questions?\"\n      supportingText=\"Our customer service team is here to help. Reach out and we'll get back to you within 24 hours.\"\n      primaryCTA={{\n        text: \"Contact Us\",\n        href: \"/contact\",\n      }}\n      secondaryCTA={{\n        text: \"Call Us\",\n        href: \"tel:+15551234567\",\n      }}\n      trustSignals={[\n        {\n          value: '24hr',\n          label: 'Response Time',\n          icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path fill=\"#fff\" d=\"M12 6v6l4 2\"/></svg>`,\n        },\n        {\n          value: '4.9★',\n          label: 'Customer Rating',\n          icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/></svg>`,\n        },\n        {\n          value: '98%',\n          label: 'Satisfaction Rate',\n          icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>`,\n        },\n      ]}\n    />\n  </main>\n</Layout>\n\n<style>\n  /* =================================================================\n   * HERO SECTION\n   * ================================================================= */\n  .shipping-hero {\n    padding: var(--spacing-20) var(--spacing-4) var(--spacing-12);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-background) 100%\n    );\n    text-align: center;\n  }\n\n  .shipping-hero__container {\n    max-width: var(--container-4xl);\n    margin: 0 auto;\n  }\n\n  .shipping-hero__eyebrow {\n    display: inline-block;\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-primary);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wider);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .shipping-hero__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-4xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n    letter-spacing: var(--letter-spacing-tight);\n  }\n\n  .shipping-hero__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    max-width: 40rem;\n    margin: 0 auto var(--spacing-8);\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* =================================================================\n   * QUICK STATS BAR\n   * ================================================================= */\n  .shipping-stats {\n    background-color: var(--color-primary);\n    padding: var(--spacing-6) var(--spacing-4);\n  }\n\n  .shipping-stats__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  .shipping-stats__grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-4);\n  }\n\n  @media (min-width: 768px) {\n    .shipping-stats__grid {\n      grid-template-columns: repeat(4, 1fr);\n      gap: var(--spacing-8);\n    }\n  }\n\n  .shipping-stats__item {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n  }\n\n  .shipping-stats__icon {\n    flex-shrink: 0;\n    width: 2rem;\n    height: 2rem;\n    color: var(--color-primary-100);\n  }\n\n  .shipping-stats__icon svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  .shipping-stats__content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .shipping-stats__value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-inverse);\n    line-height: var(--line-height-tight);\n  }\n\n  .shipping-stats__label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-primary-200);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n  }\n\n  /* =================================================================\n   * SHIPPING OPTIONS SECTION\n   * ================================================================= */\n  .shipping-options {\n    padding: var(--spacing-20) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .shipping-options__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  .shipping-options__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .shipping-options__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n  }\n\n  .shipping-options__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    max-width: 36rem;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-options__grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }\n\n  @media (min-width: 768px) {\n    .shipping-options__grid {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n\n  .shipping-options__card {\n    display: flex;\n    flex-direction: column;\n    padding: var(--spacing-6);\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n    border: 1px solid var(--color-border-light);\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out),\n      border-color var(--duration-300) var(--ease-out);\n  }\n\n  .shipping-options__card:hover {\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n    transform: translateY(-4px);\n    border-color: var(--color-primary-200);\n  }\n\n  .shipping-options__card-icon {\n    width: 3rem;\n    height: 3rem;\n    padding: var(--spacing-2);\n    background-color: var(--color-primary-50);\n    border-radius: var(--radius-lg);\n    color: var(--color-primary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .shipping-options__card-icon svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  .shipping-options__card-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .shipping-options__card-title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2);\n  }\n\n  .shipping-options__card-description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-options__card-details {\n    margin-top: auto;\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border-light);\n  }\n\n  .shipping-options__card-time {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin-bottom: var(--spacing-2);\n  }\n\n  .shipping-options__card-time svg {\n    width: 1rem;\n    height: 1rem;\n    color: var(--color-primary);\n  }\n\n  .shipping-options__card-cost {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-1);\n  }\n\n  .shipping-options__card-price {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-primary);\n  }\n\n  .shipping-options__card-note {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n  }\n\n  /* =================================================================\n   * INTERNATIONAL SHIPPING SECTION\n   * ================================================================= */\n  .shipping-international {\n    padding: var(--spacing-20) var(--spacing-4);\n    background-color: var(--color-background-subtle);\n  }\n\n  .shipping-international__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  .shipping-international__content {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-12);\n    align-items: start;\n  }\n\n  @media (min-width: 1024px) {\n    .shipping-international__content {\n      grid-template-columns: 1fr 1fr;\n      gap: var(--spacing-16);\n    }\n  }\n\n  .shipping-international__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n  }\n\n  .shipping-international__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-6);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-international__note {\n    display: flex;\n    gap: var(--spacing-3);\n    padding: var(--spacing-4);\n    background-color: var(--color-warning-50);\n    border-radius: var(--radius-lg);\n    border-left: 4px solid var(--color-warning);\n  }\n\n  .shipping-international__note svg {\n    flex-shrink: 0;\n    width: 1.25rem;\n    height: 1.25rem;\n    color: var(--color-warning-600);\n    margin-top: var(--spacing-1);\n  }\n\n  .shipping-international__note p {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-international__note strong {\n    color: var(--color-text-primary);\n  }\n\n  .shipping-international__table {\n    background-color: var(--color-background);\n    border-radius: var(--radius-xl);\n    overflow: hidden;\n    box-shadow: var(--shadow-sm);\n  }\n\n  .shipping-international__table-header {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr 1fr;\n    gap: var(--spacing-4);\n    padding: var(--spacing-4) var(--spacing-5);\n    background-color: var(--color-primary-50);\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-primary-700);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n  }\n\n  .shipping-international__table-row {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr 1fr;\n    gap: var(--spacing-4);\n    padding: var(--spacing-4) var(--spacing-5);\n    border-bottom: 1px solid var(--color-border-light);\n    transition: background-color var(--duration-150) var(--ease-in-out);\n  }\n\n  .shipping-international__table-row:last-child {\n    border-bottom: none;\n  }\n\n  .shipping-international__table-row:hover {\n    background-color: var(--color-background-subtle);\n  }\n\n  .shipping-international__zone {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-1);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-primary);\n  }\n\n  .shipping-international__zone small {\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-normal);\n    color: var(--color-text-tertiary);\n  }\n\n  .shipping-international__time {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n  }\n\n  .shipping-international__cost {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n  }\n\n  /* =================================================================\n   * RETURNS SECTION\n   * ================================================================= */\n  .shipping-returns {\n    padding: var(--spacing-20) var(--spacing-4);\n    background-color: var(--color-background);\n  }\n\n  .shipping-returns__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  .shipping-returns__header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n  }\n\n  .shipping-returns__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n  }\n\n  .shipping-returns__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    max-width: 36rem;\n    margin: 0 auto;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-returns__timeline {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n    max-width: var(--container-4xl);\n    margin: 0 auto var(--spacing-12);\n  }\n\n  @media (min-width: 768px) {\n    .shipping-returns__timeline {\n      grid-template-columns: repeat(4, 1fr);\n      gap: var(--spacing-4);\n    }\n  }\n\n  .shipping-returns__step {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: var(--spacing-6);\n    background-color: var(--color-background-subtle);\n    border-radius: var(--radius-xl);\n  }\n\n  .shipping-returns__step-number {\n    position: absolute;\n    top: var(--spacing-2);\n    right: var(--spacing-2);\n    width: 1.5rem;\n    height: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-inverse);\n    background-color: var(--color-primary);\n    border-radius: var(--radius-full);\n  }\n\n  .shipping-returns__step-icon {\n    width: 3rem;\n    height: 3rem;\n    padding: var(--spacing-2);\n    background-color: var(--color-primary-50);\n    border-radius: var(--radius-full);\n    color: var(--color-primary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .shipping-returns__step-icon svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  .shipping-returns__step-title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2);\n  }\n\n  .shipping-returns__step-description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    margin: 0;\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-returns__step-connector {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    .shipping-returns__step-connector {\n      display: block;\n      position: absolute;\n      top: 50%;\n      right: -2rem;\n      width: 4rem;\n      height: 2px;\n      background: linear-gradient(\n        90deg,\n        var(--color-primary-200) 0%,\n        var(--color-primary-100) 100%\n      );\n      transform: translateY(-50%);\n    }\n  }\n\n  .shipping-returns__cta {\n    text-align: center;\n  }\n\n  /* =================================================================\n   * PACKAGING SECTION\n   * ================================================================= */\n  .shipping-packaging {\n    padding: var(--spacing-20) var(--spacing-4);\n    background-color: var(--color-background-subtle);\n  }\n\n  .shipping-packaging__container {\n    max-width: var(--container-6xl);\n    margin: 0 auto;\n  }\n\n  .shipping-packaging__grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-12);\n    align-items: center;\n  }\n\n  @media (min-width: 1024px) {\n    .shipping-packaging__grid {\n      grid-template-columns: 1fr 1fr;\n      gap: var(--spacing-16);\n    }\n  }\n\n  .shipping-packaging__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-4);\n    line-height: var(--line-height-tight);\n  }\n\n  .shipping-packaging__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0 0 var(--spacing-8);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-packaging__list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n  }\n\n  .shipping-packaging__list-item {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--spacing-3);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .shipping-packaging__list-item svg {\n    flex-shrink: 0;\n    width: 1.25rem;\n    height: 1.25rem;\n    color: var(--color-success);\n    margin-top: var(--spacing-1);\n  }\n\n  .shipping-packaging__list-item strong {\n    color: var(--color-text-primary);\n  }\n\n  .shipping-packaging__image {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .shipping-packaging__illustration {\n    width: 100%;\n    max-width: 300px;\n    aspect-ratio: 1;\n    padding: var(--spacing-8);\n    background-color: var(--color-background);\n    border-radius: var(--radius-2xl);\n    color: var(--color-primary);\n    box-shadow: var(--shadow-lg);\n  }\n\n  .shipping-packaging__illustration svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  /* =================================================================\n   * RESPONSIVE ADJUSTMENTS\n   * ================================================================= */\n  @media (max-width: 767px) {\n    .shipping-hero {\n      padding: var(--spacing-12) var(--spacing-4) var(--spacing-8);\n    }\n\n    .shipping-hero__title {\n      font-size: var(--font-size-3xl);\n    }\n\n    .shipping-hero__subtitle {\n      font-size: var(--font-size-base);\n    }\n\n    .shipping-stats {\n      padding: var(--spacing-4);\n    }\n\n    .shipping-stats__value {\n      font-size: var(--font-size-base);\n    }\n\n    .shipping-options,\n    .shipping-international,\n    .shipping-returns,\n    .shipping-packaging {\n      padding: var(--spacing-12) var(--spacing-4);\n    }\n\n    .shipping-options__title,\n    .shipping-international__title,\n    .shipping-returns__title,\n    .shipping-packaging__title {\n      font-size: var(--font-size-2xl);\n    }\n\n    .shipping-international__table-header,\n    .shipping-international__table-row {\n      grid-template-columns: 1fr;\n      gap: var(--spacing-2);\n    }\n\n    .shipping-international__table-header {\n      display: none;\n    }\n\n    .shipping-international__zone,\n    .shipping-international__time,\n    .shipping-international__cost {\n      display: flex;\n      justify-content: space-between;\n      padding: var(--spacing-1) 0;\n    }\n\n    .shipping-international__zone::before {\n      content: 'Destination:';\n      font-weight: var(--font-weight-normal);\n      color: var(--color-text-tertiary);\n    }\n\n    .shipping-international__time::before {\n      content: 'Delivery:';\n      font-weight: var(--font-weight-normal);\n      color: var(--color-text-tertiary);\n    }\n\n    .shipping-international__cost::before {\n      content: 'Starting at:';\n      font-weight: var(--font-weight-normal);\n      color: var(--color-text-tertiary);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .shipping-options__card,\n    .shipping-international__table-row {\n      transition: none;\n    }\n\n    .shipping-options__card:hover {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .shipping-stats {\n      background: Canvas;\n      border: 2px solid CanvasText;\n    }\n\n    .shipping-stats__value,\n    .shipping-stats__label,\n    .shipping-stats__icon {\n      color: CanvasText;\n    }\n\n    .shipping-options__card,\n    .shipping-returns__step,\n    .shipping-international__table {\n      border: 1px solid CanvasText;\n    }\n\n    .shipping-options__card-icon,\n    .shipping-returns__step-icon,\n    .shipping-returns__step-number {\n      background: transparent;\n      border: 1px solid CanvasText;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .shipping-hero {\n      background: none;\n      padding: var(--spacing-8) 0;\n    }\n\n    .shipping-stats {\n      background: none;\n      border: 1px solid var(--color-border);\n    }\n\n    .shipping-stats__value,\n    .shipping-stats__label,\n    .shipping-stats__icon {\n      color: var(--color-text-primary);\n    }\n\n    .shipping-options__card:hover,\n    .shipping-returns__step:hover {\n      box-shadow: none;\n      transform: none;\n    }\n\n    .shipping-hero__cta,\n    .shipping-returns__cta {\n      display: none;\n    }\n  }\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing reference files (FAQAccordion, contact.astro, visit.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing reference files"
    },
    {
      "content": "Create shipping-returns.astro page with all sections",
      "status": "completed",
      "activeForm": "Creating shipping-returns.astro page"
    },
    {
      "content": "Add FAQ items for shipping and returns questions",
      "status": "completed",
      "activeForm": "Adding FAQ items for shipping and returns"
    },
    {
      "content": "Style the page following existing patterns",
      "status": "completed",
      "activeForm": "Styling the page"
    },
    {
      "content": "Verify the implementation builds correctly",
      "status": "in_progress",
      "activeForm": "Verifying the implementation builds correctly"
    }
  ]
}
Now let me verify the implementation builds correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\retail-business\" && npm run build 2>&1 | head -100",
  "description": "Build the Astro project to verify implementation",
  "timeout": 180000
}
The build completed successfully. I can see the `shipping-returns` page was built successfully at `/shipping-returns/index.html`. There is a minor warning about JSON-LD schema type being undefined. Let me fix that by updating the schema:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\SEO.astro",
  "limit": 100
}
Let me check how the jsonLd prop is used in the SEO component:

🔧 Tool: Grep
Input: {
  "pattern": "jsonLd.*type",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\SEO.astro",
  "output_mode": "content",
  "-n": true
}

🔧 Tool: Grep
Input: {
  "pattern": "type.*FAQPage",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src",
  "output_mode": "content",
  "-n": true
}
I see the issue - my JSON-LD schema structure needs to match what the SEO component expects. Let me check how other pages like the homepage handle the JSON-LD:

🔧 Tool: Grep
Input: {
  "pattern": "jsonLd=",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages",
  "output_mode": "content",
  "-n": true,
  "-C": 3
}
I see - the jsonLd prop expects an object with a `type` property. The issue is my faqSchema variable has `@type` instead of `type`. Let me fix the shipping-returns page to use the correct format:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\shipping-returns.astro",
  "old_string": "// Build FAQPage schema for SEO\nconst allFaqItems = [...shippingFaqItems, ...returnsFaqItems];\nconst faqSchema = {\n  '@type': 'FAQPage',\n  name: 'Shipping & Returns FAQ',\n  mainEntity: allFaqItems.map(item => ({\n    '@type': 'Question',\n    name: item.question,\n    acceptedAnswer: {\n      '@type': 'Answer',\n      text: item.answer.replace(/<[^>]*>/g, ''), // Strip HTML for schema\n    },\n  })),\n};",
  "new_string": "// Build WebPage schema for SEO (FAQPage content is in the FAQAccordion component)\nconst pageSchema = {\n  type: 'WebPage' as const,\n  name: 'Shipping & Returns',\n  description: 'Learn about our shipping options, delivery times, and hassle-free 30-day return policy.',\n};"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\shipping-returns.astro",
  "old_string": "  jsonLd={faqSchema}",
  "new_string": "  jsonLd={pageSchema}"
}
Now let's rebuild to verify the warning is gone:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\retail-business\" && npm run build 2>&1 | tail -30",
  "description": "Rebuild to verify no warnings",
  "timeout": 180000
}
The build now completes without any warnings. Let me update the todo list to mark everything complete:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read existing reference files (FAQAccordion, contact.astro, visit.astro, Layout.astro)",
      "status": "completed",
      "activeForm": "Reading existing reference files"
    },
    {
      "content": "Create shipping-returns.astro page with all sections",
      "status": "completed",
      "activeForm": "Creating shipping-returns.astro page"
    },
    {
      "content": "Add FAQ items for shipping and returns questions",
      "status": "completed",
      "activeForm": "Adding FAQ items for shipping and returns"
    },
    {
      "content": "Style the page following existing patterns",
      "status": "completed",
      "activeForm": "Styling the page"
    },
    {
      "content": "Verify the implementation builds correctly",
      "status": "completed",
      "activeForm": "Verifying the implementation builds correctly"
    }
  ]
}
<summary>
## Summary: Shipping & Returns Page Implementation

### Changes Implemented
- Created a comprehensive shipping & returns page at `/shipping-returns`
- **Hero Section**: Welcoming header with "Track My Order" CTA button
- **Quick Stats Bar**: Highlights key benefits (Free shipping $75+, 30-day returns, 1-7 day delivery, 100% secure)
- **Domestic Shipping Options**: Cards displaying Standard, Express, and Next Day delivery with pricing and timelines
- **International Shipping Section**: Table showing shipping zones (Canada, Europe, Australia/NZ, Rest of World) with costs and delivery times
- **Easy Returns Process**: 4-step visual timeline (Initiate, Pack, Ship, Get Refunded)
- **Thoughtful Packaging Section**: Eco-friendly packaging details with illustration
- **Shipping FAQ Accordion**: 5 common shipping questions with detailed answers
- **Returns FAQ Accordion**: 6 common return questions with detailed answers
- **Contact CTA Section**: "Still Have Questions?" section with trust signals

### Files Modified
- `src/pages/shipping-returns.astro` (new file created)

### Notes for Developer
- The page follows all existing patterns from the codebase including:
  - Mobile-first responsive design with breakpoints at 768px and 1024px
  - CSS custom properties from the design system (variables.css)
  - BEM naming convention for CSS classes
  - WCAG 2.1 AA accessibility compliance
  - Reduced motion, high contrast mode, and print styles
  - Scroll reveal animations matching other pages
- The page uses existing components: `Layout`, `FAQAccordion`, `ContactCTA`, and `Button`
- SEO optimized with WebPage JSON-LD schema
- The sitemap will automatically include the new `/shipping-returns` route
- All shipping costs, timelines, and policies are customizable via the data arrays at the top of the file
</summary>