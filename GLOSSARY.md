# NibNab Site - Code Glossary

Quick reference for the NibNab marketing website (Deno Fresh).

## Routes

**index.tsx** - Main landing page
`routes/index.tsx` - Full marketing page layout

**greet/[name].tsx** - Dynamic greeting route (demo)
`routes/greet/[name].tsx` - Example dynamic route

**api/joke.ts** - API endpoint (demo)
`routes/api/joke.ts` - Example API route

**_app.tsx** - Root layout wrapper
`routes/_app.tsx` - Global styles, metadata

**_404.tsx** - Not found page
`routes/_404.tsx` - 404 error handler

## Components

**Hero** - Main header section
`components/Hero.tsx` - App intro, tagline, download CTA

**Features** - Feature grid
`components/Features.tsx` - Key features with icons

**Benefits** - Why use NibNab section
`components/Benefits.tsx` - Problem/solution messaging

**WhyNibNab** - Value proposition
`components/WhyNibNab.tsx` - Unique selling points

**Download** - Download section
`components/Download.tsx` - macOS download CTA

**Footer** - Site footer
`components/Footer.tsx` - Links, copyright

**Button** - Reusable button component
`components/Button.tsx` - Primary/secondary button styles

**Divider** - Section separator
`components/Divider.tsx` - Visual break between sections

## Islands (Interactive Components)

**Counter** - Example interactive component
`islands/Counter.tsx` - Demo island (likely unused)

## Configuration

**fresh.config.ts** - Fresh framework config
`fresh.config.ts` - Plugins, dev settings

**tailwind.config.ts** - Tailwind CSS config
`tailwind.config.ts` - Neon color palette, custom utilities

**deno.json** - Deno project config
`deno.json` - Tasks, imports, compiler options

## Core Concepts

**Brand Colors** - Neon highlighter theme
- Yellow: #FFEB3B
- Orange: #f68717
- Pink: #f60474
- Purple: #8717f6
- Dark backgrounds with high contrast

**Design System**
- Neo-brutal aesthetic: chunky borders, hard shadows
- Purple (#8717f6) shadow on hover
- Clean white backgrounds with color accents
- Bold fonts (Fredoka, Space Grotesk Black)

**CSS Utilities**
- `neo-shadow` - 6px hard shadow, purple glow on hover
- `neo-border` - 6px black border, 16px radius
- `neo-border-thin` - 4px black border, 8px radius
- `animate-blob` - Floating bubble animation (15s)
- `animate-float` - Vertical float (6s)

**Typography Hierarchy**
- **Fredoka Bold** - Main headers (H1, hero)
- **Space Grotesk Black** - Subheaders (H2, H3)
- **Quicksand Bold** - Body copy, descriptions
- **JetBrains Mono** - Code snippets

**Voice DNA**
- "Your clipboard deserves better than Cmd+V into Notes.app"
- "A highlighter for your digital life 🎨"
- "Three steps. That's it."
- "No cloud BS" (not "No cloud sync")
- "Free forever" (not "Free to use")
- "Built right. Stays fast."

**Anti-Scale Philosophy**
- Checklist: ❌ A pricing page, ❌ A login screen, ❌ Analytics, etc.
- "Too complicated? Too simple? Too corporate?"
- "Does less. Does it better."

**Target Audience**
- Writers, Developers, Designers, Students
- "Everyone else" - if you copy things
- Privacy-conscious power users
- People tired of complex clipboard managers
