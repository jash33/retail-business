

I'll start by exploring the codebase to understand the structure before creating the plan.

🔧 Tool: Bash
Input: {
  "command": "find . -type f -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.js\" -o -name \"*.jsx\" | head -80",
  "description": "List project files"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/routes/**/*"
}

🔧 Tool: Grep
Input: {
  "pattern": "services",
  "glob": "**/route*\"",
  "-i": true
}

🔧 Tool: Bash
Input: {
  "command": "find . -path ./node_modules -prune -o -path ./dist -prune -o -type f \\( -name \"*.astro\" -o -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.js\" -o -name \"*.jsx\" \\) -print | sort",
  "description": "List source files excluding deps"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*"
}

🔧 Tool: Grep
Input: {
  "pattern": "services|ServiceCard|ServicesSection",
  "path": "src/pages",
  "output_mode": "content",
  "-i": true
}

🔧 Tool: Grep
Input: {
  "pattern": "services|ServiceCard|ServicesSection",
  "path": "src/components/Header.astro",
  "output_mode": "content",
  "-i": true
}

🔧 Tool: Grep
Input: {
  "pattern": "services|ServiceCard|ServicesSection",
  "path": "src/components/Footer.astro",
  "output_mode": "content",
  "-i": true
}

🔧 Tool: Grep
Input: {
  "pattern": "ServiceCard|ServicesSection|service",
  "path": "src/pages/index.astro",
  "output_mode": "content"
}
Now let me check which components are exclusively used by the services route and understand the full scope of references.

🔧 Tool: Task
Input: {
  "subagent_type": "Explore",
  "description": "Find services-exclusive components",
  "prompt": "I need to find which components/types are EXCLUSIVELY used by the services route. Check if these files are imported/referenced anywhere OUTSIDE of the services pages:\n\n1. src/components/ServiceCard.astro - search for \"ServiceCard\" across all files\n2. src/components/AddonsTable.astro - search for \"AddonsTable\" across all files\n3. src/components/PricingCard.astro - search for \"PricingCard\" across all files\n4. src/components/ProcessTimeline.astro - search for \"ProcessTimeline\" across all files\n5. src/types/service.ts - search for imports from this file across all files\n6. src/components/ServicesSection.astro - search for \"ServicesSection\" across all files\n\nFor each, tell me which files reference them. Also check src/components/Header.astro and src/components/Footer.astro for any /services links. Be thorough - search the full src/ directory.",
  "model": "haiku"
}

🔧 Tool: Grep
Input: {
  "pattern": "ServiceCard",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "AddonsTable",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "PricingCard",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "ProcessTimeline",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "from.*service\\.ts|import.*service\\.ts",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "ServicesSection",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Footer.astro"
}

🔧 Tool: Grep
Input: {
  "pattern": "/services",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Grep
Input: {
  "pattern": "from.*[\"'].*service[\"']|import.*[\"'].*service[\"']",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\hosting.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\website-design.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\seo.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\maintenance.astro"
}

🔧 Tool: Grep
Input: {
  "pattern": "import.*Service",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src",
  "output_mode": "content",
  "head_limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\PricingCard.astro",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\AddonsTable.astro",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProcessTimeline.astro",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ServiceCard.astro",
  "limit": 50
}
Now let me check references to `/services` in pages that link to it:

🔧 Tool: Grep
Input: {
  "pattern": "href.*[\\\"']/services[\\\"'#]",
  "path": "src",
  "output_mode": "content"
}
Now I have a complete picture. Let me form the plan and execute.

---

## Planning Outline

1. **Goal**: Delete the `/services` route and all components exclusively used by that route.

2. **Approach**: Delete the services page files (`src/pages/services.astro`, `src/pages/services/*.astro`) and components used exclusively by the services page (`ServiceCard.astro`, `AddonsTable.astro`, `PricingCard.astro`, `ProcessTimeline.astro`). Keep `ServicesSection.astro` and `src/types/service.ts` since they're used on the homepage. Remove `/services` nav link from Header and update other pages that link to `/services`.

3. **Files to Touch**:
   - **DELETE** `src/pages/services.astro` — main services page
   - **DELETE** `src/pages/services/hosting.astro` — redirect sub-page
   - **DELETE** `src/pages/services/maintenance.astro` — redirect sub-page
   - **DELETE** `src/pages/services/seo.astro` — redirect sub-page
   - **DELETE** `src/pages/services/website-design.astro` — redirect sub-page
   - **DELETE** `src/components/ServiceCard.astro` — exclusive to services page
   - **DELETE** `src/components/AddonsTable.astro` — exclusive to services page
   - **DELETE** `src/components/PricingCard.astro` — exclusive to services page
   - **DELETE** `src/components/ProcessTimeline.astro` — exclusive to services page
   - **EDIT** `src/components/Header.astro` — remove Services nav link
   - **EDIT** `src/pages/visit.astro` — update/remove `/services` links
   - **EDIT** `src/pages/portfolio.astro` — update/remove `/services` links
   - **EDIT** `src/pages/demo/hero-editorial.astro` — update `/services` link
   - **EDIT** `src/pages/demo/video-hero.astro` — update `/services` link

4. **Tasks**:
   1. Delete the services page files and sub-pages
   2. Delete exclusively-used components (ServiceCard, AddonsTable, PricingCard, ProcessTimeline)
   3. Remove Services link from Header navigation
   4. Update `/services` links in visit.astro, portfolio.astro, and demo pages
   5. Verify no remaining broken references

5. **Risks**:
   - `ServicesSection.astro` and `types/service.ts` are used on the homepage — must NOT delete these
   - `ServiceCard.astro` is used by `ServicesSection.astro` — need to verify ServicesSection still works without ServiceCard (it imports it)
   - Demo pages have `/services` hrefs in example code

[PLAN_GENERATED] Planning outline complete.

Let me check if ServicesSection imports ServiceCard before proceeding:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ServicesSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro"
}
Important finding: `ServicesSection.astro` imports `ServiceCard.astro`, and `ServicesSection` is used on the homepage. So I **cannot** delete `ServiceCard.astro` or `ServicesSection.astro` — they're needed by the homepage. I also cannot delete `src/types/service.ts` since it's used by both.

Let me now read the pages that reference `/services` to understand the context for updating links:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro",
  "offset": 220,
  "limit": 15
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro",
  "offset": 478,
  "limit": 15
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\portfolio.astro",
  "offset": 330,
  "limit": 15
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\portfolio.astro",
  "offset": 408,
  "limit": 15
}
Now I have the full picture. Let me also check how `index.astro` references services to ensure I handle the `#services` anchor link:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\index.astro",
  "offset": 140,
  "limit": 25
}
Good - the homepage uses `#services` as an anchor ID, not as a link to `/services` page. That's fine - it references its own section.

Now let me proceed with implementation. I'll also check the `types/index.ts` for service re-exports:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}
Now I have the full picture. Let me proceed with implementation:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "in_progress",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "pending",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "pending",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "pending",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "pending",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "pending",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\hosting.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\maintenance.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\seo.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\website-design.astro\" && rmdir \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\"",
  "description": "Delete services pages and directory"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "in_progress",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "pending",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "pending",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "pending",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "pending",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\AddonsTable.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\PricingCard.astro\" && rm \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProcessTimeline.astro\"",
  "description": "Delete services-exclusive components"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "completed",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "in_progress",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "pending",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "pending",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "pending",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "old_string": "  { href: '/services', label: 'Services' },\n  { href: '/gallery', label: 'Gallery' },",
  "new_string": "  { href: '/gallery', label: 'Gallery' },"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "completed",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "completed",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "in_progress",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "pending",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "pending",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}
Now update the `/services` links in visit.astro and portfolio.astro to point to `/products` instead (the most logical replacement for "Shop Online" / "Browse Our Products" / "Shop Collections"):

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro",
  "old_string": "              <Button\n                text=\"Shop Online\"\n                href=\"/services\"\n                variant=\"secondary\"\n              />",
  "new_string": "              <Button\n                text=\"Shop Online\"\n                href=\"/products\"\n                variant=\"secondary\"\n              />"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\visit.astro",
  "old_string": "          <Button\n            text=\"Browse Our Products\"\n            href=\"/services\"\n            variant=\"primary\"\n            size=\"large\"\n          />",
  "new_string": "          <Button\n            text=\"Browse Our Products\"\n            href=\"/products\"\n            variant=\"primary\"\n            size=\"large\"\n          />"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\portfolio.astro",
  "old_string": "            <Button\n              text=\"Shop Collections\"\n              href=\"/services\"\n              variant=\"secondary\"\n              size=\"large\"\n            />",
  "new_string": "            <Button\n              text=\"Shop Collections\"\n              href=\"/products\"\n              variant=\"secondary\"\n              size=\"large\"\n            />"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\portfolio.astro",
  "old_string": "      secondaryCTA={{\n        text: \"View Our Services\",\n        href: \"/services\",\n      }}",
  "new_string": "      secondaryCTA={{\n        text: \"Browse Our Products\",\n        href: \"/products\",\n      }}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "completed",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "completed",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "completed",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "in_progress",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "pending",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}
Now update the demo pages:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\hero-editorial.astro",
  "offset": 40,
  "limit": 10
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\video-hero.astro",
  "offset": 45,
  "limit": 10
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\hero-editorial.astro",
  "old_string": "    cta={{ text: \"Learn More\", href: \"/services\", variant: \"secondary\" }}",
  "new_string": "    cta={{ text: \"Learn More\", href: \"/products\", variant: \"secondary\" }}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\video-hero.astro",
  "old_string": "    cta={{ text: \"Explore\", href: \"/services\", variant: \"secondary\" }}",
  "new_string": "    cta={{ text: \"Explore\", href: \"/products\", variant: \"secondary\" }}"
}
Also update the HeroEditorial component doc comment:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroEditorial.astro",
  "offset": 20,
  "limit": 8
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\HeroEditorial.astro",
  "old_string": " *   cta={{ text: \"Explore\", href: \"/services\" }}",
  "new_string": " *   cta={{ text: \"Explore\", href: \"/products\" }}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "completed",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "completed",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "completed",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "completed",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "in_progress",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}

🔧 Tool: Grep
Input: {
  "pattern": "href.*[\\\"']/services[\\\"'#]",
  "path": "src",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "from.*services\\.astro|import.*AddonsTable|import.*PricingCard|import.*ProcessTimeline",
  "path": "src",
  "output_mode": "content"
}
No remaining broken references. Let me also verify the deleted files are gone and the kept files are intact:

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services.astro\" 2>&1; ls \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\" 2>&1; ls \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\AddonsTable.astro\" 2>&1; ls \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\PricingCard.astro\" 2>&1; ls \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProcessTimeline.astro\" 2>&1",
  "description": "Verify deleted files are gone"
}

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\ServiceCard.astro\" \"C:\\Users\\James\\Repos\\retail-business\\src\\components\\ServicesSection.astro\" \"C:\\Users\\James\\Repos\\retail-business\\src\\types\\service.ts\" 2>&1",
  "description": "Verify kept files still exist"
}
All deleted files confirmed gone, and shared components (ServiceCard, ServicesSection, service types) are preserved.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Delete services page files (services.astro + sub-pages)",
      "status": "completed",
      "activeForm": "Deleting services page files"
    },
    {
      "content": "Delete services-exclusive components (AddonsTable, PricingCard, ProcessTimeline)",
      "status": "completed",
      "activeForm": "Deleting services-exclusive components"
    },
    {
      "content": "Remove Services link from Header navigation",
      "status": "completed",
      "activeForm": "Removing Services link from Header"
    },
    {
      "content": "Update /services links in visit.astro and portfolio.astro",
      "status": "completed",
      "activeForm": "Updating /services links in other pages"
    },
    {
      "content": "Update /services links in demo pages",
      "status": "completed",
      "activeForm": "Updating demo page links"
    },
    {
      "content": "Verify no remaining broken references",
      "status": "completed",
      "activeForm": "Verifying no broken references remain"
    }
  ]
}
<summary>
## Summary: Delete Services Route and Exclusive Components

### Changes Implemented
- Deleted the main services page (`src/pages/services.astro`)
- Deleted all services sub-pages with 301 redirects (`src/pages/services/hosting.astro`, `maintenance.astro`, `seo.astro`, `website-design.astro`)
- Deleted the `src/pages/services/` directory
- Deleted 3 components exclusively used by the services page: `AddonsTable.astro`, `PricingCard.astro`, `ProcessTimeline.astro`
- Removed "Services" link from the Header navigation
- Updated all `/services` links in `visit.astro`, `portfolio.astro`, `demo/hero-editorial.astro`, `demo/video-hero.astro`, and `HeroEditorial.astro` doc comment to point to `/products` instead
- Verified zero remaining broken `/services` references

### Files Deleted
- `src/pages/services.astro`
- `src/pages/services/hosting.astro`
- `src/pages/services/maintenance.astro`
- `src/pages/services/seo.astro`
- `src/pages/services/website-design.astro`
- `src/components/AddonsTable.astro`
- `src/components/PricingCard.astro`
- `src/components/ProcessTimeline.astro`

### Files Modified
- `src/components/Header.astro` — removed Services nav link
- `src/pages/visit.astro` — updated 2 links from `/services` to `/products`
- `src/pages/portfolio.astro` — updated 2 links from `/services` to `/products`
- `src/pages/demo/hero-editorial.astro` — updated CTA href
- `src/pages/demo/video-hero.astro` — updated CTA href
- `src/components/HeroEditorial.astro` — updated doc comment example href

### Notes for Developer
- `ServiceCard.astro`, `ServicesSection.astro`, and `src/types/service.ts` were **intentionally kept** — they are used on the homepage (`index.astro`) for the "Shop by Category" section
- The `types/index.ts` barrel export for service types was also kept since those types are still in use
- All former `/services` links were redirected to `/products` as the most semantically appropriate replacement
</summary>