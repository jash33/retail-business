# Planning Outline

1. **Goal**: Configure Astro to automatically generate sitemap.xml and robots.txt files during build for SEO optimization.

2. **Approach**: Install and configure the @astrojs/sitemap integration in the Astro config, add a static robots.txt file in the public folder (or use a dynamic route), and ensure the site URL is properly configured for absolute URLs in the sitemap.

3. **Files to Touch**:
   - `astro.config.mjs` - Add sitemap integration and site URL
   - `public/robots.txt` - Create robots.txt with sitemap reference
   - `package.json` - Add @astrojs/sitemap dependency

4. **Tasks**:
   1. Explore existing Astro config and project structure
   2. Install @astrojs/sitemap package
   3. Configure sitemap integration in astro.config.mjs
   4. Create robots.txt file with appropriate directives
   5. Verify configuration is correct

5. **Risks**:
   - Site URL must be set for sitemap to generate absolute URLs
   - Need to check for any existing sitemap/robots.txt configurations
   - May need to exclude certain routes from sitemap

[PLAN_GENERATED] Planning outline complete.

---

Let me start by exploring the codebase:

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{mjs,ts,js}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/astro.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/robots.txt"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/sitemap*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "public/**/*"
}
Good, I can see the existing structure. Now let me check the source pages to understand the site structure:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*"
}
Now I have a clear picture. This is a fresh Astro project. Let me implement the sitemap and robots.txt configuration:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && npm install @astrojs/sitemap",
  "description": "Install @astrojs/sitemap package"
}
Now let me update the Astro config to add the sitemap integration and site URL:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs",
  "old_string": "// @ts-check\nimport { defineConfig } from 'astro/config';\n\n// https://astro.build/config\nexport default defineConfig({});",
  "new_string": "// @ts-check\nimport { defineConfig } from 'astro/config';\nimport sitemap from '@astrojs/sitemap';\n\n// https://astro.build/config\nexport default defineConfig({\n  // IMPORTANT: Set this to your actual production domain\n  site: 'https://houston-web-services.com',\n  integrations: [\n    sitemap({\n      // Exclude any admin, private, or utility routes if they exist\n      filter: (page) =>\n        !page.includes('/admin') &&\n        !page.includes('/private') &&\n        !page.includes('/api/'),\n      // Customize sitemap entries if needed\n      serialize(item) {\n        // Default priority and changefreq\n        item.changefreq = 'weekly';\n        item.priority = 0.7;\n        // Home page gets higher priority\n        if (item.url.endsWith('/')) {\n          item.priority = 1.0;\n        }\n        return item;\n      },\n    }),\n  ],\n});"
}
Now let me create the robots.txt file in the public folder:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\public\\robots.txt",
  "content": "# robots.txt for houston-web-services.com\n# https://www.robotstxt.org/robotstxt.html\n\n# Allow all crawlers\nUser-agent: *\nAllow: /\n\n# Disallow admin and private routes\nDisallow: /admin/\nDisallow: /private/\nDisallow: /api/\n\n# Sitemap location\nSitemap: https://houston-web-services.com/sitemap-index.xml\n"
}
Now let's verify the build works and generates the files correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && npm run build",
  "description": "Build Astro project to verify sitemap generation",
  "timeout": 120000
}
Excellent! The build succeeded and the sitemap was generated. Let me verify the output files:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && dir dist /b",
  "description": "List build output directory contents"
}
The build output shows all expected files. Let me verify the content of the generated sitemap and robots.txt:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\dist\\sitemap-index.xml"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\dist\\sitemap-0.xml"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\dist\\robots.txt"
}
All files are generated correctly. Let me verify the updated package.json to confirm the dependency was added:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\package.json"
}
Everything is configured correctly. The implementation is complete.

<summary>
## Summary: Sitemap and Robots.txt Generation

### Changes Implemented
- Installed `@astrojs/sitemap` integration package
- Configured sitemap generation in `astro.config.mjs` with:
  - Site URL set to `https://houston-web-services.com` (update this to your actual domain)
  - Filter to exclude `/admin/`, `/private/`, and `/api/` routes from sitemap
  - Custom serialization with `changefreq: 'weekly'` and homepage priority of 1.0
- Created `robots.txt` in public folder with:
  - Allow all crawlers directive
  - Disallow rules for admin, private, and API routes
  - Sitemap reference pointing to `sitemap-index.xml`
- Verified build generates valid XML sitemap files

### Files Modified
- `astro.config.mjs` - Added sitemap integration and site configuration
- `package.json` - Added `@astrojs/sitemap` dependency (^3.7.0)
- `public/robots.txt` - Created new file with crawler directives

### Notes for Developer
- **IMPORTANT**: Update the `site` URL in `astro.config.mjs` to your actual production domain (currently set to `https://houston-web-services.com`)
- Also update the Sitemap URL in `public/robots.txt` to match your domain
- The sitemap generates as `sitemap-index.xml` and `sitemap-0.xml` (index pattern for scalability)
- Both files are accessible at `/robots.txt` and `/sitemap-index.xml` in production
- Add more pages to see them automatically included in the sitemap
- The filter excludes routes containing `/admin`, `/private`, or `/api/` - adjust as needed for your routes
</summary>