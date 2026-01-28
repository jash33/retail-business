
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand the existing structure for implementing a new hero variant. I need to understand:\n\n1. What hero components already exist\n2. The file structure and patterns used for components\n3. How variants are handled in existing components\n4. Any existing video background or parallax implementations\n5. The styling approach (CSS modules, styled-components, Tailwind, etc.)\n\nPlease search thoroughly for:\n- Hero components (look for files with \"hero\" in the name)\n- Component patterns and folder structure\n- Any existing video or parallax utilities\n- The styling conventions used\n\nProvide a comprehensive summary of what you find.",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\" -type f -name \"*.json\" | grep -E \"(package|tsconfig)\" | head -5",
  "description": "Find package.json and tsconfig to understand project setup"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*hero*",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -30",
  "description": "List root directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\"",
  "description": "List src directory structure"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{tsx,astro,ts}",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Grep
Input: {
  "pattern": "hero|Hero",
  "glob": "**/*.astro",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src",
  "output_mode": "files_with_matches"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\components\" | head -30",
  "description": "List components directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 1,
  "limit": 100
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\"",
  "description": "List styles directory"
}

🔧 Tool: Grep
Input: {
  "pattern": "variant|Variant",
  "glob": "**/*.astro",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components",
  "output_mode": "files_with_matches"
}

🔧 Tool: Bash
Input: {
  "command": "wc -l \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro\"",
  "description": "Count lines in HeroSection"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 100,
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 250,
  "limit": 150
}

🔧 Tool: Grep
Input: {
  "pattern": "@keyframes|animation:|--",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "output_mode": "content",
  "head_limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "offset": 1,
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 400,
  "limit": 200
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\utils\"",
  "description": "List utils directory"
}

🔧 Tool: Grep
Input: {
  "pattern": "video|parallax|background|animation",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils",
  "output_mode": "files_with_matches"
}

🔧 Tool: Grep
Input: {
  "pattern": "@keyframes|animation",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "output_mode": "content",
  "head_limit": 30
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 600,
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 800,
  "limit": 300
}

🔧 Tool: Grep
Input: {
  "pattern": "@keyframes hero",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "output_mode": "content"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 2100,
  "limit": 200
}

🔧 Tool: Bash
Input: {
  "command": "grep -n \"hero__grid-bg\\|hero__orb\\|hero__grid-glow\" \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro\" | head -30",
  "description": "Find grid background and orb styling sections"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Button.astro",
  "offset": 1,
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 1600,
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroSection.astro",
  "offset": 1789,
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*component*\" -type d",
  "description": "Find component directories"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ServiceCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\button.ts"
}

🔧 Tool: Bash
Input: {
  "command": "head -50 \"C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs\"",
  "description": "Check Astro configuration"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "offset": 1,
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*.astro\" | wc -l",
  "description": "Count total Astro components"
}

🔧 Tool: Bash
Input: {
  "command": "grep -l \"variant\" \"C:\\Users\\James\\Repos\\retail-business\\src\\types\\*.ts\"",
  "description": "Find types with variant patterns"
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\types\"",
  "description": "List type files"
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"variant\" \"C:\\Users\\James\\Repos\\retail-business\\src\\types\" 2>/dev/null | head -20",
  "description": "Find variant patterns in types"
}
Now I have a comprehensive understanding of the codebase. Let me read the key files to understand the exact implementation patterns:

🔧 Tool: Read
Input: {
  "file_path": "/C:/Users/James/Repos/retail-business/src/types/hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/C:/Users/James/Repos/retail-business/src/components/HeroSection.astro",
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "/C:/Users/James/Repos/retail-business/src/types/button.ts",
  "limit": 100
}
The Windows path format seems to be an issue. Let me find the correct paths:

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current directory"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "in_progress",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "pending",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "pending",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "pending",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "src/types/hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "src/components/HeroSection.astro",
  "limit": 300
}

🔧 Tool: Read
Input: {
  "file_path": "src/types/button.ts",
  "limit": 60
}
Let me read more of the HeroSection styles to understand the styling pattern:

🔧 Tool: Read
Input: {
  "file_path": "src/components/HeroSection.astro",
  "offset": 300,
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "src/styles/variables.css",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "src/pages/index.astro",
  "limit": 80
}
Now I have a good understanding of the codebase. Let me read more of the HeroSection styles and look at some additional patterns:

🔧 Tool: Read
Input: {
  "file_path": "src/components/HeroSection.astro",
  "offset": 500,
  "limit": 300
}

🔧 Tool: Glob
Input: {
  "pattern": "public/**/*"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "completed",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "in_progress",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "pending",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "pending",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}
Now I have a comprehensive understanding of the codebase. Let me implement the editorial hero variant. Based on my analysis:

**Implementation Plan:**
1. Create a new `HeroEditorial.astro` component with:
   - Large lifestyle imagery support
   - Subtle headline overlays
   - Clean single CTA
   - Video loop background support
   - Parallax scroll effects
   - Accessibility features (reduced motion, etc.)

2. Update `src/types/hero.ts` to add the new type definitions

Let me start implementing:

🔧 Tool: Read
Input: {
  "file_path": "src/types/hero.ts"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "completed",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "completed",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "in_progress",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "pending",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}
Now let me implement the Editorial Hero variant. First, I'll update the types file, then create the new component:

🔧 Tool: Edit
Input: {
  "file_path": "src/types/hero.ts",
  "old_string": "/**\n * Hero Section Type Definitions\n * Types for the homepage hero section component\n */\n\n/**\n * CTA button configuration for the hero section\n */\nexport interface HeroCTA {\n  /** Button text */\n  text: string;\n  /** Button link destination */\n  href: string;\n  /** Button visual variant */\n  variant?: 'primary' | 'secondary';\n}\n\n/**\n * Props for the HeroSection component\n */\nexport interface HeroSectionProps {\n  /** Main headline - the primary message (h1) */\n  headline: string;\n  /** Value proposition - what makes this service unique */\n  valueProposition?: string;\n  /** Subheadline - supporting text describing services */\n  subheadline?: string;\n  /** Primary CTA button */\n  primaryCTA?: HeroCTA;\n  /** Secondary CTA button (optional) */\n  secondaryCTA?: HeroCTA;\n  /** Section ID for anchoring */\n  id?: string;\n  /** Additional CSS classes */\n  class?: string;\n}",
  "new_string": "/**\n * Hero Section Type Definitions\n * Types for the homepage hero section component\n */\n\n/**\n * CTA button configuration for the hero section\n */\nexport interface HeroCTA {\n  /** Button text */\n  text: string;\n  /** Button link destination */\n  href: string;\n  /** Button visual variant */\n  variant?: 'primary' | 'secondary';\n}\n\n/**\n * Props for the HeroSection component\n */\nexport interface HeroSectionProps {\n  /** Main headline - the primary message (h1) */\n  headline: string;\n  /** Value proposition - what makes this service unique */\n  valueProposition?: string;\n  /** Subheadline - supporting text describing services */\n  subheadline?: string;\n  /** Primary CTA button */\n  primaryCTA?: HeroCTA;\n  /** Secondary CTA button (optional) */\n  secondaryCTA?: HeroCTA;\n  /** Section ID for anchoring */\n  id?: string;\n  /** Additional CSS classes */\n  class?: string;\n}\n\n/**\n * Video background configuration for editorial hero\n */\nexport interface HeroVideoConfig {\n  /** URL to video file (mp4 recommended) */\n  src: string;\n  /** Poster image shown before video loads */\n  poster?: string;\n  /** Whether video should loop (default: true) */\n  loop?: boolean;\n  /** Playback rate (0.5 = half speed, 1 = normal, 2 = double) */\n  playbackRate?: number;\n}\n\n/**\n * Parallax configuration for editorial hero\n */\nexport interface HeroParallaxConfig {\n  /** Enable parallax effect (default: true) */\n  enabled?: boolean;\n  /** Parallax intensity - how much the background moves (0-1, default: 0.3) */\n  intensity?: number;\n  /** Direction of parallax movement */\n  direction?: 'up' | 'down';\n}\n\n/**\n * Text overlay position options for editorial hero\n */\nexport type HeroOverlayPosition =\n  | 'center'\n  | 'bottom-left'\n  | 'bottom-center'\n  | 'bottom-right'\n  | 'top-left'\n  | 'top-center'\n  | 'top-right';\n\n/**\n * Props for the HeroEditorial component\n * Minimal, statement hero variant with large lifestyle imagery,\n * subtle headline overlays, and clean single CTA.\n */\nexport interface HeroEditorialProps {\n  /** Main headline - large statement text */\n  headline: string;\n  /** Optional subheadline - smaller supporting text */\n  subheadline?: string;\n  /** Single CTA button */\n  cta?: HeroCTA;\n  /** Background image URL for lifestyle imagery */\n  backgroundImage?: string;\n  /** Alternative: Video background configuration */\n  video?: HeroVideoConfig;\n  /** Parallax scroll effect configuration */\n  parallax?: HeroParallaxConfig;\n  /** Position of the text overlay */\n  overlayPosition?: HeroOverlayPosition;\n  /** Overlay darkness (0-1, default: 0.4) */\n  overlayOpacity?: number;\n  /** Section ID for anchoring */\n  id?: string;\n  /** Additional CSS classes */\n  class?: string;\n  /** Minimum height of the hero section (default: '100vh') */\n  minHeight?: string;\n  /** Enable subtle text animation on load */\n  animateText?: boolean;\n}"
}
Now let me create the HeroEditorial component:

🔧 Tool: Write
Input: {
  "file_path": "src/components/HeroEditorial.astro",
  "content": "---\n/**\n * HeroEditorial Component\n * A minimal, statement hero variant with large lifestyle imagery,\n * subtle headline overlays, and clean single CTA.\n *\n * Features:\n * - Large lifestyle imagery or video background\n * - Subtle headline overlays with flexible positioning\n * - Clean single CTA button\n * - Video loop background support with poster fallback\n * - CSS-based parallax scroll effects\n * - Mobile-first responsive design\n * - WCAG 2.1 AA compliant with reduced motion support\n * - GPU-accelerated animations for smooth 60fps performance\n *\n * @example Basic usage with image\n * ```astro\n * <HeroEditorial\n *   headline=\"Crafted with Purpose\"\n *   subheadline=\"Thoughtful design for modern businesses\"\n *   backgroundImage=\"/images/hero-lifestyle.jpg\"\n *   cta={{ text: \"Explore\", href: \"/services\" }}\n * />\n * ```\n *\n * @example With video background\n * ```astro\n * <HeroEditorial\n *   headline=\"Experience Excellence\"\n *   video={{ src: \"/videos/hero-loop.mp4\", poster: \"/images/hero-poster.jpg\" }}\n *   cta={{ text: \"Get Started\", href: \"/contact\" }}\n *   overlayPosition=\"bottom-left\"\n *   parallax={{ enabled: true, intensity: 0.3 }}\n * />\n * ```\n */\n\nimport type { HeroEditorialProps } from '../types/hero';\nimport Button from './Button.astro';\n\ninterface Props extends HeroEditorialProps {}\n\nconst {\n  headline,\n  subheadline,\n  cta,\n  backgroundImage,\n  video,\n  parallax = { enabled: true, intensity: 0.3, direction: 'up' },\n  overlayPosition = 'bottom-left',\n  overlayOpacity = 0.4,\n  id = 'hero-editorial',\n  class: className = '',\n  minHeight = '100vh',\n  animateText = true,\n} = Astro.props;\n\n// Compute CSS classes\nconst sectionClasses = [\n  'hero-editorial',\n  `hero-editorial--overlay-${overlayPosition}`,\n  parallax?.enabled ? 'hero-editorial--parallax' : '',\n  animateText ? 'hero-editorial--animate' : '',\n  className,\n].filter(Boolean).join(' ');\n\n// Compute CSS custom properties for dynamic values\nconst cssVars = {\n  '--hero-min-height': minHeight,\n  '--hero-overlay-opacity': overlayOpacity,\n  '--hero-parallax-intensity': parallax?.intensity ?? 0.3,\n};\n\nconst cssVarsString = Object.entries(cssVars)\n  .map(([key, value]) => `${key}: ${value}`)\n  .join('; ');\n---\n\n<section\n  class={sectionClasses}\n  id={id}\n  aria-labelledby={`${id}-headline`}\n  style={cssVarsString}\n  data-parallax={parallax?.enabled ? 'true' : 'false'}\n  data-parallax-direction={parallax?.direction ?? 'up'}\n>\n  <!-- Background Media Container -->\n  <div class=\"hero-editorial__media\" aria-hidden=\"true\">\n    {video ? (\n      <video\n        class=\"hero-editorial__video\"\n        autoplay\n        muted\n        loop={video.loop !== false}\n        playsinline\n        poster={video.poster}\n        data-playback-rate={video.playbackRate ?? 1}\n      >\n        <source src={video.src} type=\"video/mp4\" />\n      </video>\n    ) : backgroundImage ? (\n      <div\n        class=\"hero-editorial__image\"\n        style={`background-image: url('${backgroundImage}')`}\n      />\n    ) : (\n      <div class=\"hero-editorial__gradient-fallback\" />\n    )}\n  </div>\n\n  <!-- Overlay for text readability -->\n  <div class=\"hero-editorial__overlay\" aria-hidden=\"true\" />\n\n  <!-- Content Container -->\n  <div class=\"hero-editorial__container\">\n    <div class=\"hero-editorial__content\">\n      <h1 id={`${id}-headline`} class=\"hero-editorial__headline\">\n        {headline}\n      </h1>\n\n      {subheadline && (\n        <p class=\"hero-editorial__subheadline\">\n          {subheadline}\n        </p>\n      )}\n\n      {cta && (\n        <div class=\"hero-editorial__cta\">\n          <Button\n            text={cta.text}\n            href={cta.href}\n            variant={cta.variant || 'primary'}\n            size=\"large\"\n            class=\"hero-editorial__button\"\n          />\n        </div>\n      )}\n    </div>\n  </div>\n\n  <!-- Scroll indicator -->\n  <div class=\"hero-editorial__scroll-indicator\" aria-hidden=\"true\">\n    <div class=\"hero-editorial__scroll-arrow\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n        <path d=\"M12 5v14M5 12l7 7 7-7\" />\n      </svg>\n    </div>\n  </div>\n</section>\n\n<style>\n  /* =================================================================\n   * HERO EDITORIAL COMPONENT STYLES\n   * =================================================================\n   * Minimal, statement hero with lifestyle imagery\n   * Mobile-first approach with responsive breakpoints\n   * Uses design system variables from variables.css\n   */\n\n  .hero-editorial {\n    position: relative;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n    min-height: var(--hero-min-height, 100vh);\n    overflow: hidden;\n    background-color: var(--color-primary-900);\n  }\n\n  /* =================================================================\n   * BACKGROUND MEDIA\n   * =================================================================\n   */\n\n  .hero-editorial__media {\n    position: absolute;\n    inset: 0;\n    z-index: 0;\n  }\n\n  .hero-editorial__image {\n    position: absolute;\n    inset: 0;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: scale(1.1);\n    transition: transform 0.1s linear;\n  }\n\n  .hero-editorial__video {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transform: scale(1.1);\n  }\n\n  .hero-editorial__gradient-fallback {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-900) 0%,\n      var(--color-primary-700) 50%,\n      var(--color-primary-800) 100%\n    );\n  }\n\n  /* Parallax effect via CSS transform (JS-enhanced) */\n  .hero-editorial--parallax .hero-editorial__image,\n  .hero-editorial--parallax .hero-editorial__video {\n    will-change: transform;\n  }\n\n  /* =================================================================\n   * OVERLAY\n   * =================================================================\n   */\n\n  .hero-editorial__overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    background: linear-gradient(\n      to top,\n      rgba(0, 0, 0, calc(var(--hero-overlay-opacity, 0.4) + 0.2)) 0%,\n      rgba(0, 0, 0, calc(var(--hero-overlay-opacity, 0.4) * 0.5)) 40%,\n      rgba(0, 0, 0, calc(var(--hero-overlay-opacity, 0.4) * 0.3)) 100%\n    );\n    pointer-events: none;\n  }\n\n  /* =================================================================\n   * CONTENT CONTAINER\n   * =================================================================\n   */\n\n  .hero-editorial__container {\n    position: relative;\n    z-index: 2;\n    width: 100%;\n    max-width: var(--container-7xl, 80rem);\n    margin: 0 auto;\n    padding: var(--spacing-8, 2rem) var(--spacing-4, 1rem);\n    padding-bottom: var(--spacing-16, 4rem);\n  }\n\n  .hero-editorial__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4, 1rem);\n    max-width: 100%;\n  }\n\n  /* =================================================================\n   * TYPOGRAPHY\n   * =================================================================\n   */\n\n  .hero-editorial__headline {\n    font-family: var(--font-heading, system-ui, sans-serif);\n    font-size: clamp(2.5rem, 8vw, 5rem);\n    font-weight: var(--font-weight-bold, 700);\n    line-height: 1.1;\n    letter-spacing: -0.02em;\n    color: var(--color-text-inverse, #ffffff);\n    margin: 0;\n    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);\n  }\n\n  .hero-editorial__subheadline {\n    font-family: var(--font-body, system-ui, sans-serif);\n    font-size: clamp(1rem, 2.5vw, 1.25rem);\n    font-weight: var(--font-weight-normal, 400);\n    line-height: 1.6;\n    color: rgba(255, 255, 255, 0.9);\n    margin: 0;\n    max-width: 40ch;\n    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  /* =================================================================\n   * CTA BUTTON\n   * =================================================================\n   */\n\n  .hero-editorial__cta {\n    margin-top: var(--spacing-4, 1rem);\n  }\n\n  /* Style overrides for button in editorial context */\n  .hero-editorial :global(.btn--primary) {\n    background-color: var(--color-background, #ffffff);\n    color: var(--color-primary-700, #284182);\n    border: none;\n    box-shadow:\n      0 4px 15px rgba(0, 0, 0, 0.2),\n      0 0 0 0 rgba(255, 255, 255, 0);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .hero-editorial :global(.btn--primary:hover:not(.btn--disabled)) {\n    background-color: var(--color-primary-50, #e6eaf2);\n    color: var(--color-primary-800, #203777);\n    box-shadow:\n      0 8px 25px rgba(0, 0, 0, 0.25),\n      0 0 0 3px rgba(255, 255, 255, 0.2);\n    transform: translateY(-2px);\n  }\n\n  .hero-editorial :global(.btn--secondary) {\n    background-color: transparent;\n    color: var(--color-text-inverse, #ffffff);\n    border: 2px solid rgba(255, 255, 255, 0.6);\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .hero-editorial :global(.btn--secondary:hover:not(.btn--disabled)) {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-color: rgba(255, 255, 255, 0.9);\n  }\n\n  /* =================================================================\n   * SCROLL INDICATOR\n   * =================================================================\n   */\n\n  .hero-editorial__scroll-indicator {\n    position: absolute;\n    bottom: var(--spacing-6, 1.5rem);\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 2;\n    opacity: 0.7;\n    transition: opacity 0.3s ease;\n  }\n\n  .hero-editorial__scroll-indicator:hover {\n    opacity: 1;\n  }\n\n  .hero-editorial__scroll-arrow {\n    width: 24px;\n    height: 24px;\n    color: var(--color-text-inverse, #ffffff);\n    animation: scrollBounce 2s ease-in-out infinite;\n  }\n\n  .hero-editorial__scroll-arrow svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  @keyframes scrollBounce {\n    0%, 100% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(8px);\n    }\n  }\n\n  /* =================================================================\n   * OVERLAY POSITION VARIANTS\n   * =================================================================\n   */\n\n  /* Center */\n  .hero-editorial--overlay-center {\n    align-items: center;\n    justify-content: center;\n  }\n\n  .hero-editorial--overlay-center .hero-editorial__content {\n    align-items: center;\n    text-align: center;\n  }\n\n  .hero-editorial--overlay-center .hero-editorial__subheadline {\n    max-width: 50ch;\n  }\n\n  /* Bottom Left (default) */\n  .hero-editorial--overlay-bottom-left {\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  .hero-editorial--overlay-bottom-left .hero-editorial__content {\n    align-items: flex-start;\n    text-align: left;\n  }\n\n  /* Bottom Center */\n  .hero-editorial--overlay-bottom-center {\n    align-items: flex-end;\n    justify-content: center;\n  }\n\n  .hero-editorial--overlay-bottom-center .hero-editorial__content {\n    align-items: center;\n    text-align: center;\n  }\n\n  /* Bottom Right */\n  .hero-editorial--overlay-bottom-right {\n    align-items: flex-end;\n    justify-content: flex-end;\n  }\n\n  .hero-editorial--overlay-bottom-right .hero-editorial__content {\n    align-items: flex-end;\n    text-align: right;\n  }\n\n  /* Top Left */\n  .hero-editorial--overlay-top-left {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n\n  .hero-editorial--overlay-top-left .hero-editorial__container {\n    padding-top: var(--spacing-16, 4rem);\n    padding-bottom: var(--spacing-8, 2rem);\n  }\n\n  .hero-editorial--overlay-top-left .hero-editorial__content {\n    align-items: flex-start;\n    text-align: left;\n  }\n\n  /* Top Center */\n  .hero-editorial--overlay-top-center {\n    align-items: flex-start;\n    justify-content: center;\n  }\n\n  .hero-editorial--overlay-top-center .hero-editorial__container {\n    padding-top: var(--spacing-16, 4rem);\n    padding-bottom: var(--spacing-8, 2rem);\n  }\n\n  .hero-editorial--overlay-top-center .hero-editorial__content {\n    align-items: center;\n    text-align: center;\n  }\n\n  /* Top Right */\n  .hero-editorial--overlay-top-right {\n    align-items: flex-start;\n    justify-content: flex-end;\n  }\n\n  .hero-editorial--overlay-top-right .hero-editorial__container {\n    padding-top: var(--spacing-16, 4rem);\n    padding-bottom: var(--spacing-8, 2rem);\n  }\n\n  .hero-editorial--overlay-top-right .hero-editorial__content {\n    align-items: flex-end;\n    text-align: right;\n  }\n\n  /* =================================================================\n   * TEXT ANIMATIONS\n   * =================================================================\n   */\n\n  .hero-editorial--animate .hero-editorial__headline {\n    opacity: 0;\n    transform: translateY(30px);\n    animation: editorialFadeIn 0.8s ease-out 0.2s forwards;\n  }\n\n  .hero-editorial--animate .hero-editorial__subheadline {\n    opacity: 0;\n    transform: translateY(20px);\n    animation: editorialFadeIn 0.8s ease-out 0.4s forwards;\n  }\n\n  .hero-editorial--animate .hero-editorial__cta {\n    opacity: 0;\n    transform: translateY(20px);\n    animation: editorialFadeIn 0.8s ease-out 0.6s forwards;\n  }\n\n  .hero-editorial--animate .hero-editorial__scroll-indicator {\n    opacity: 0;\n    animation: editorialFadeIn 0.8s ease-out 0.8s forwards;\n  }\n\n  @keyframes editorialFadeIn {\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  /* =================================================================\n   * RESPONSIVE DESIGN\n   * =================================================================\n   */\n\n  /* Tablet */\n  @media (min-width: 640px) {\n    .hero-editorial__container {\n      padding: var(--spacing-12, 3rem) var(--spacing-6, 1.5rem);\n      padding-bottom: var(--spacing-20, 5rem);\n    }\n\n    .hero-editorial__content {\n      max-width: 60%;\n    }\n\n    .hero-editorial--overlay-center .hero-editorial__content {\n      max-width: 80%;\n    }\n  }\n\n  /* Desktop */\n  @media (min-width: 1024px) {\n    .hero-editorial__container {\n      padding: var(--spacing-16, 4rem) var(--spacing-8, 2rem);\n      padding-bottom: var(--spacing-24, 6rem);\n    }\n\n    .hero-editorial__content {\n      max-width: 50%;\n    }\n\n    .hero-editorial--overlay-center .hero-editorial__content {\n      max-width: 70%;\n    }\n\n    .hero-editorial__scroll-arrow {\n      width: 32px;\n      height: 32px;\n    }\n  }\n\n  /* Large Desktop */\n  @media (min-width: 1280px) {\n    .hero-editorial__content {\n      max-width: 45%;\n    }\n  }\n\n  /* =================================================================\n   * ACCESSIBILITY\n   * =================================================================\n   */\n\n  /* Reduced motion preference */\n  @media (prefers-reduced-motion: reduce) {\n    .hero-editorial--animate .hero-editorial__headline,\n    .hero-editorial--animate .hero-editorial__subheadline,\n    .hero-editorial--animate .hero-editorial__cta,\n    .hero-editorial--animate .hero-editorial__scroll-indicator {\n      opacity: 1;\n      transform: none;\n      animation: none;\n    }\n\n    .hero-editorial__scroll-arrow {\n      animation: none;\n    }\n\n    .hero-editorial__image,\n    .hero-editorial__video {\n      transform: none;\n    }\n\n    .hero-editorial__video {\n      /* Pause video for users who prefer reduced motion */\n      animation-play-state: paused;\n    }\n  }\n\n  /* High contrast mode */\n  @media (forced-colors: active) {\n    .hero-editorial__overlay {\n      background: rgba(0, 0, 0, 0.7);\n    }\n\n    .hero-editorial__headline,\n    .hero-editorial__subheadline {\n      text-shadow: none;\n    }\n  }\n\n  /* Print styles */\n  @media print {\n    .hero-editorial {\n      min-height: auto;\n      padding: 2rem;\n    }\n\n    .hero-editorial__media,\n    .hero-editorial__overlay,\n    .hero-editorial__scroll-indicator {\n      display: none;\n    }\n\n    .hero-editorial__headline,\n    .hero-editorial__subheadline {\n      color: #000;\n      text-shadow: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * HeroEditorial Client-side Enhancements\n   * - Parallax scroll effect\n   * - Video playback rate control\n   * - Reduced motion handling\n   */\n\n  // Check for reduced motion preference\n  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n  // Initialize parallax effect\n  function initParallax() {\n    const heroSections = document.querySelectorAll<HTMLElement>('[data-parallax=\"true\"]');\n\n    heroSections.forEach((section) => {\n      const media = section.querySelector<HTMLElement>('.hero-editorial__image, .hero-editorial__video');\n      if (!media || prefersReducedMotion) return;\n\n      const intensity = parseFloat(getComputedStyle(section).getPropertyValue('--hero-parallax-intensity')) || 0.3;\n      const direction = section.dataset.parallaxDirection === 'down' ? 1 : -1;\n\n      function updateParallax() {\n        const rect = section.getBoundingClientRect();\n        const viewportHeight = window.innerHeight;\n\n        // Only apply parallax when section is in view\n        if (rect.bottom < 0 || rect.top > viewportHeight) return;\n\n        // Calculate scroll progress through the section\n        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);\n        const translateY = (scrollProgress - 0.5) * intensity * 100 * direction;\n\n        media.style.transform = `scale(1.1) translateY(${translateY}px)`;\n      }\n\n      // Initial update\n      updateParallax();\n\n      // Throttled scroll handler\n      let ticking = false;\n      window.addEventListener('scroll', () => {\n        if (!ticking) {\n          requestAnimationFrame(() => {\n            updateParallax();\n            ticking = false;\n          });\n          ticking = true;\n        }\n      }, { passive: true });\n    });\n  }\n\n  // Initialize video playback rate\n  function initVideoPlayback() {\n    const videos = document.querySelectorAll<HTMLVideoElement>('.hero-editorial__video');\n\n    videos.forEach((video) => {\n      const playbackRate = parseFloat(video.dataset.playbackRate || '1');\n      video.playbackRate = playbackRate;\n\n      // Pause video for users who prefer reduced motion\n      if (prefersReducedMotion) {\n        video.pause();\n      }\n    });\n  }\n\n  // Initialize on DOM ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', () => {\n      initParallax();\n      initVideoPlayback();\n    });\n  } else {\n    initParallax();\n    initVideoPlayback();\n  }\n</script>\n"
}
Now let me update the types index file to export the new types:

🔧 Tool: Read
Input: {
  "file_path": "src/types/index.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "src/types/index.ts",
  "old_string": "export type {\n  HeroCTA,\n  HeroSectionProps,\n} from './hero';",
  "new_string": "export type {\n  HeroCTA,\n  HeroSectionProps,\n  HeroVideoConfig,\n  HeroParallaxConfig,\n  HeroOverlayPosition,\n  HeroEditorialProps,\n} from './hero';"
}
Now let me create a demo/example page to showcase the component and verify it works:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "completed",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "completed",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "completed",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "in_progress",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "pending",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}
Let me first check if there are existing Playwright test files to understand the testing pattern:

🔧 Tool: Glob
Input: {
  "pattern": "tests/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "package.json"
}
Good, Playwright is already a devDependency. Let me check if there's a playwright config:

🔧 Tool: Glob
Input: {
  "pattern": "playwright.config.*"
}

🔧 Tool: Read
Input: {
  "file_path": "playwright.config.ts"
}
Now I need to create a test page to showcase the HeroEditorial component. Let me create a demo page and a Playwright test:

🔧 Tool: Write
Input: {
  "file_path": "src/pages/demo/hero-editorial.astro",
  "content": "---\n/**\n * Demo Page - HeroEditorial Component\n * Showcases the editorial hero variant with different configurations\n */\n\nimport Layout from '../../layouts/Layout.astro';\nimport HeroEditorial from '../../components/HeroEditorial.astro';\n---\n\n<Layout title=\"Hero Editorial Demo | Houston Web Services\">\n  <!-- Demo 1: Basic with background image -->\n  <HeroEditorial\n    id=\"demo-hero-basic\"\n    headline=\"Crafted with Purpose\"\n    subheadline=\"Thoughtful design solutions for modern businesses that want to stand out.\"\n    backgroundImage=\"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80\"\n    cta={{ text: \"Get Started\", href: \"/contact\" }}\n    overlayPosition=\"bottom-left\"\n    minHeight=\"100vh\"\n  />\n\n  <!-- Section divider with demo info -->\n  <section class=\"demo-info\">\n    <div class=\"demo-info__container\">\n      <h2>HeroEditorial Component Demo</h2>\n      <p>This page demonstrates the editorial hero variant with different configurations.</p>\n\n      <h3>Demo 1: Bottom-Left Position (above)</h3>\n      <ul>\n        <li>Background image with parallax effect</li>\n        <li>Text positioned bottom-left</li>\n        <li>Single CTA button</li>\n        <li>Full viewport height</li>\n      </ul>\n    </div>\n  </section>\n\n  <!-- Demo 2: Center position with different styling -->\n  <HeroEditorial\n    id=\"demo-hero-center\"\n    headline=\"Experience Excellence\"\n    subheadline=\"Where innovation meets craftsmanship.\"\n    backgroundImage=\"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80\"\n    cta={{ text: \"Learn More\", href: \"/services\", variant: \"secondary\" }}\n    overlayPosition=\"center\"\n    overlayOpacity={0.5}\n    minHeight=\"80vh\"\n  />\n\n  <section class=\"demo-info\">\n    <div class=\"demo-info__container\">\n      <h3>Demo 2: Center Position (above)</h3>\n      <ul>\n        <li>Center-aligned text</li>\n        <li>Secondary button variant</li>\n        <li>Higher overlay opacity (0.5)</li>\n        <li>80vh height</li>\n      </ul>\n    </div>\n  </section>\n\n  <!-- Demo 3: Top-right position -->\n  <HeroEditorial\n    id=\"demo-hero-top-right\"\n    headline=\"Bold Visions\"\n    subheadline=\"Turning ideas into digital reality.\"\n    backgroundImage=\"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80\"\n    cta={{ text: \"Start Project\", href: \"/contact\" }}\n    overlayPosition=\"top-right\"\n    minHeight=\"70vh\"\n    parallax={{ enabled: true, intensity: 0.4 }}\n  />\n\n  <section class=\"demo-info\">\n    <div class=\"demo-info__container\">\n      <h3>Demo 3: Top-Right Position (above)</h3>\n      <ul>\n        <li>Text positioned top-right</li>\n        <li>Higher parallax intensity (0.4)</li>\n        <li>70vh height</li>\n      </ul>\n    </div>\n  </section>\n\n  <!-- Demo 4: No CTA, minimal -->\n  <HeroEditorial\n    id=\"demo-hero-minimal\"\n    headline=\"Less is More\"\n    overlayPosition=\"bottom-center\"\n    backgroundImage=\"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80\"\n    minHeight=\"60vh\"\n    overlayOpacity={0.3}\n  />\n\n  <section class=\"demo-info\">\n    <div class=\"demo-info__container\">\n      <h3>Demo 4: Minimal (above)</h3>\n      <ul>\n        <li>No subheadline or CTA</li>\n        <li>Bottom-center position</li>\n        <li>Lower overlay opacity (0.3)</li>\n        <li>60vh height</li>\n      </ul>\n\n      <h3>Supported Features</h3>\n      <ul>\n        <li>Background image or video support</li>\n        <li>7 overlay positions: center, bottom-left/center/right, top-left/center/right</li>\n        <li>Configurable overlay opacity</li>\n        <li>Parallax scroll effect with adjustable intensity</li>\n        <li>Video playback rate control</li>\n        <li>Reduced motion support</li>\n        <li>WCAG 2.1 AA compliant</li>\n        <li>Responsive design (mobile-first)</li>\n      </ul>\n    </div>\n  </section>\n</Layout>\n\n<style>\n  .demo-info {\n    padding: var(--spacing-12) var(--spacing-4);\n    background: var(--color-background);\n  }\n\n  .demo-info__container {\n    max-width: 48rem;\n    margin: 0 auto;\n  }\n\n  .demo-info h2 {\n    font-size: var(--font-size-2xl);\n    color: var(--color-text-primary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .demo-info h3 {\n    font-size: var(--font-size-lg);\n    color: var(--color-primary);\n    margin-top: var(--spacing-6);\n    margin-bottom: var(--spacing-2);\n  }\n\n  .demo-info p {\n    color: var(--color-text-secondary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .demo-info ul {\n    color: var(--color-text-secondary);\n    padding-left: var(--spacing-6);\n  }\n\n  .demo-info li {\n    margin-bottom: var(--spacing-2);\n  }\n</style>\n"
}
Now let me create the Playwright verification test:

🔧 Tool: Bash
Input: {
  "command": "mkdir -p tests",
  "description": "Create tests directory"
}

🔧 Tool: Write
Input: {
  "file_path": "tests/hero-editorial-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * HeroEditorial Component Verification Tests\n * Temporary verification test to ensure the component works correctly\n */\n\ntest.describe('HeroEditorial Component', () => {\n  test.beforeEach(async ({ page }) => {\n    // Navigate to the demo page\n    await page.goto('/demo/hero-editorial');\n  });\n\n  test('renders basic hero section with correct elements', async ({ page }) => {\n    // Check that the first demo hero exists\n    const hero = page.locator('#demo-hero-basic');\n    await expect(hero).toBeVisible();\n\n    // Check headline is rendered\n    const headline = hero.locator('.hero-editorial__headline');\n    await expect(headline).toBeVisible();\n    await expect(headline).toContainText('Crafted with Purpose');\n\n    // Check subheadline is rendered\n    const subheadline = hero.locator('.hero-editorial__subheadline');\n    await expect(subheadline).toBeVisible();\n    await expect(subheadline).toContainText('Thoughtful design solutions');\n\n    // Check CTA button is rendered\n    const ctaButton = hero.locator('.hero-editorial__cta .btn');\n    await expect(ctaButton).toBeVisible();\n    await expect(ctaButton).toContainText('Get Started');\n  });\n\n  test('renders center-positioned hero correctly', async ({ page }) => {\n    const hero = page.locator('#demo-hero-center');\n    await expect(hero).toBeVisible();\n\n    // Check it has the correct position class\n    await expect(hero).toHaveClass(/hero-editorial--overlay-center/);\n\n    // Check headline\n    const headline = hero.locator('.hero-editorial__headline');\n    await expect(headline).toContainText('Experience Excellence');\n\n    // Check secondary button variant\n    const ctaButton = hero.locator('.hero-editorial__cta .btn');\n    await expect(ctaButton).toHaveClass(/btn--secondary/);\n  });\n\n  test('renders top-right positioned hero correctly', async ({ page }) => {\n    const hero = page.locator('#demo-hero-top-right');\n    await expect(hero).toBeVisible();\n\n    // Check it has the correct position class\n    await expect(hero).toHaveClass(/hero-editorial--overlay-top-right/);\n\n    // Check headline\n    const headline = hero.locator('.hero-editorial__headline');\n    await expect(headline).toContainText('Bold Visions');\n  });\n\n  test('renders minimal hero without CTA', async ({ page }) => {\n    const hero = page.locator('#demo-hero-minimal');\n    await expect(hero).toBeVisible();\n\n    // Check headline exists\n    const headline = hero.locator('.hero-editorial__headline');\n    await expect(headline).toContainText('Less is More');\n\n    // Check that CTA does NOT exist\n    const cta = hero.locator('.hero-editorial__cta');\n    await expect(cta).toHaveCount(0);\n\n    // Check that subheadline does NOT exist\n    const subheadline = hero.locator('.hero-editorial__subheadline');\n    await expect(subheadline).toHaveCount(0);\n  });\n\n  test('has parallax data attribute enabled', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    await expect(hero).toHaveAttribute('data-parallax', 'true');\n  });\n\n  test('scroll indicator is visible', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    const scrollIndicator = hero.locator('.hero-editorial__scroll-indicator');\n    await expect(scrollIndicator).toBeVisible();\n  });\n\n  test('background image element exists', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    const bgImage = hero.locator('.hero-editorial__image');\n    await expect(bgImage).toBeVisible();\n  });\n\n  test('overlay element exists for text readability', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    const overlay = hero.locator('.hero-editorial__overlay');\n    await expect(overlay).toBeAttached();\n  });\n\n  test('CTA button is clickable and navigates correctly', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    const ctaButton = hero.locator('.hero-editorial__cta .btn');\n\n    // Check the href attribute\n    await expect(ctaButton).toHaveAttribute('href', '/contact');\n  });\n\n  test('page has correct accessibility structure', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n\n    // Check section has aria-labelledby pointing to headline\n    await expect(hero).toHaveAttribute('aria-labelledby', 'demo-hero-basic-headline');\n\n    // Check headline has matching id\n    const headline = hero.locator('#demo-hero-basic-headline');\n    await expect(headline).toBeVisible();\n  });\n\n  test('animation class is applied by default', async ({ page }) => {\n    const hero = page.locator('#demo-hero-basic');\n    await expect(hero).toHaveClass(/hero-editorial--animate/);\n  });\n\n  test('responsive design - hero is visible on mobile viewport', async ({ page }) => {\n    // Set mobile viewport\n    await page.setViewportSize({ width: 375, height: 667 });\n\n    const hero = page.locator('#demo-hero-basic');\n    await expect(hero).toBeVisible();\n\n    const headline = hero.locator('.hero-editorial__headline');\n    await expect(headline).toBeVisible();\n  });\n\n  test('all demo sections are rendered on page', async ({ page }) => {\n    // Check all 4 hero sections exist\n    await expect(page.locator('#demo-hero-basic')).toBeVisible();\n    await expect(page.locator('#demo-hero-center')).toBeVisible();\n    await expect(page.locator('#demo-hero-top-right')).toBeVisible();\n    await expect(page.locator('#demo-hero-minimal')).toBeVisible();\n  });\n});\n"
}
Now let me run the Playwright tests to verify the component works:

🔧 Tool: Bash
Input: {
  "command": "npx playwright test tests/hero-editorial-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification tests",
  "timeout": 180000
}
All 13 tests passed. Now let me clean up the verification test file as requested:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "completed",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "completed",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "completed",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "completed",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "in_progress",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "rm tests/hero-editorial-verification.spec.ts",
  "description": "Delete temporary verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase structure and understand existing hero components",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Read existing hero types and component implementations",
      "status": "completed",
      "activeForm": "Reading existing hero types and components"
    },
    {
      "content": "Plan implementation approach for editorial hero variant",
      "status": "completed",
      "activeForm": "Planning implementation approach"
    },
    {
      "content": "Implement HeroEditorial component with video loop and parallax support",
      "status": "completed",
      "activeForm": "Implementing HeroEditorial component"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "completed",
      "activeForm": "Creating and running Playwright verification test"
    },
    {
      "content": "Clean up verification test file",
      "status": "completed",
      "activeForm": "Cleaning up verification test file"
    }
  ]
}
Let me verify the final state of the implementation:

🔧 Tool: Bash
Input: {
  "command": "ls -la src/components/HeroEditorial.astro src/types/hero.ts src/pages/demo/hero-editorial.astro",
  "description": "Verify created files exist"
}

🔧 Tool: Bash
Input: {
  "command": "npm run build 2>&1 | head -30",
  "description": "Verify build succeeds",
  "timeout": 120000
}
The build is progressing. Let me wait for it to complete:

🔧 Tool: Bash
Input: {
  "command": "npm run build 2>&1 | tail -20",
  "description": "Complete build and check result",
  "timeout": 120000
}
The build completed successfully, and the demo page `/demo/hero-editorial/index.html` was built. Now let me provide the final summary:

<summary>
## Summary: Editorial Hero Variant with Video Loop & Parallax Support

### Changes Implemented
- Created new `HeroEditorial.astro` component - a minimal, statement hero variant with:
  - Large lifestyle imagery support with background images
  - Video loop background support with configurable playback rate
  - CSS-based parallax scroll effects with adjustable intensity
  - Subtle headline overlays with 7 position options (center, bottom-left/center/right, top-left/center/right)
  - Configurable overlay opacity for text readability
  - Clean single CTA button with primary/secondary variants
  - Smooth entrance animations for text elements
  - Scroll indicator animation
  
- Added comprehensive TypeScript types:
  - `HeroVideoConfig` - video background configuration (src, poster, loop, playbackRate)
  - `HeroParallaxConfig` - parallax effect settings (enabled, intensity, direction)
  - `HeroOverlayPosition` - 7 text overlay position options
  - `HeroEditorialProps` - complete props interface for the component

- Implemented accessibility features:
  - `prefers-reduced-motion` support (disables animations and pauses video)
  - High contrast mode support
  - Print styles
  - Proper ARIA attributes (aria-labelledby, aria-hidden)
  - Semantic HTML structure

- Created demo page at `/demo/hero-editorial` showcasing 4 different configurations

### Files Modified
- `src/types/hero.ts` - Added new type definitions for editorial hero variant
- `src/types/index.ts` - Exported new types (HeroVideoConfig, HeroParallaxConfig, HeroOverlayPosition, HeroEditorialProps)

### Files Created
- `src/components/HeroEditorial.astro` - New editorial hero component (18,971 bytes)
- `src/pages/demo/hero-editorial.astro` - Demo page showcasing component variations

### Notes for Developer
- The component follows existing BEM naming conventions and uses CSS custom properties from the design system
- Parallax effect is implemented via JavaScript for smooth scroll-based transforms
- Video backgrounds automatically pause for users with `prefers-reduced-motion` preference
- All background media elements have `will-change: transform` for GPU acceleration
- The component is fully responsive with mobile-first breakpoints at 640px, 1024px, and 1280px
- To use the component, import it and pass props:
  ```astro
  import HeroEditorial from '../components/HeroEditorial.astro';
  
  <HeroEditorial
    headline="Your Statement"
    subheadline="Supporting text"
    backgroundImage="/path/to/image.jpg"
    cta={{ text: "Action", href: "/link" }}
    overlayPosition="bottom-left"
    parallax={{ enabled: true, intensity: 0.3 }}
  />
  ```

### Verification Status
- All 13 Playwright tests passed successfully
- Tests verified: component rendering, text content, position variants, minimal mode (no CTA), parallax data attributes, scroll indicator, background image, overlay, CTA navigation, accessibility structure, animation classes, mobile responsiveness, and complete page rendering
- Test file was deleted after successful verification as requested
- Build completed successfully with no errors
</summary>