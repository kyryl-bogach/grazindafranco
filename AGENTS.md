# AGENTS.md - Grazinda Franco Project Context

> **Read this file first to understand the aesthetic, technical, and architectural standards of this project.**

## 1. Project Overview
This is a personal brand website for **Grazinda Franco**, a professional Makeup Artist and Dermopharmacy Expert. 
The website is not just a brochure; it is an **editorial experience**. The design philosophy is dubbed **"Ultrathink"** or **"The Canvas"**.

### The "Vibe"
- **Keywords**: Editorial, Artistic, Feminine, Premium, Minimalist but Textured.
- **Metaphor**: The website is a canvas. Elements shouldn't just sit in grids; they should float, overlap, and breathe.
- **Key Visual Signatures**:
  - **Watercolor Textures**: Subtle pink/nude brush strokes (`brush-stroke.png`) as background accents.
  - **Arched Imagery**: Portraits are often masked with rounded tops (Arches) to soften the layout.
  - **Layering**: Always think in 3 layers: Background Texture → Main Content → Foreground Accent (Signature/Graphic).

---

## 2. Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/). 
  - *Note*: Uses the new CSS-first configuration via `@theme inline` in `globals.css`.
- **Language**: TypeScript.
- **Font Optimization**: `next/font/google`.

---

## 3. Design System

### Typography
We use a specific tri-font system. Do not deviate.
| Role | Font Family | Variable | Usage |
|------|------------|----------|-------|
| **Headings** | **Cormorant Garamond** | `var(--font-sans)` | All H1-H6, significant titles. Elegant, high-contrast serif. |
| **Body** | **Lato** | `var(--font-body)` | Paragraphs, UI text, buttons. Clean sans-serif for readability. |
| **Accent** | **Pinyon Script** | `var(--font-pinyon)` | Personal quotes, emphasis words (e.g., *"belleza natural"*), signatures. **Use sparingly.** |

### Color Palette
Defined in `globals.css`:
- **Primary Gold**: `#c9a87c` (`var(--color-primary)`) - Used for buttons, borders, accents.
- **Dark Heading**: `#2d2d2d` - Almost black, soft charcoal. Used for text and Footer background.
- **Text Body**: `#6b6b6b` - Soft gray for paragraphs.
- **Background**: `#ffffff` (White) and `#faf8f5` (Very pale warm gray/bone for alternate sections).

### UI Patterns
1.  **Buttons (`.btn-primary`)**:
    - Solid Gold background, White text.
    - Hover: Transparent background, Gold border, Gold text.
    - Uppercase, tracking wider.
2.  **Service Cards**:
    - White background, minimal shadow by default.
    - **Hover State**: Lift (`-translate-y-1`), Gold Shadow (`shadow-[0_10px_30px_rgba(201,168,124,0.15)]`), Icon Zoom.
3.  **Hero Section**:
    - **Asymmetrical Split**: Text Left / Visual Right (Desktop).
    - **Visual**: Arched Portrait + Floating Watercolor + Signature Overlay.

---

## 4. File Structure & Conventions

### Directory Layout
- `app/` - Routes and Pages. `layout.tsx` holds the global shell (Header/Footer).
- `components/` - Functional React components.
  - `Hero.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`: Section-level components included in `app/page.tsx`.
- `public/images/` - Static assets. **All images must go here.**

### Code Conventions
- **Animations**: Use the global utility classes in globals.css:
  - `.animate-fade-in-up`: For text entrance.
  - `.animate-float`: For background textures (slow infinite float).
- **Images**: Always use `next/image`.
  - Hero images must have `priority`.
  - Decorative backgrounds should have `pointer-events-none select-none`.

---

## 5. Known Issues & "Gotchas"
- **Hydration Warning**: The `<html>` tag in `layout.tsx` has `suppressHydrationWarning`. This is to prevent errors from browser extensions injecting attributes. Do not remove it.
- **Linting**: You may see an `Unknown at rule @theme` warning in `globals.css`. This is a false positive due to tooling lagging behind Tailwind v4. **Ignore it.**
- **Font Variable**: The script font class `.font-script` in CSS references `var(--font-pinyon)` directly. Ensure `Pinyon_Script` is loaded in `layout.tsx` and the variable is passed to `<body>`.

---

## 6. Future Direction
When adding new sections:
1.  Avoid "boxy" layouts. Use negative margins or absolute positioning to break the grid.
2.  Maintain the "Magazine/Editorial" look—lots of whitespace, sophisticated typography.
3.  Keep animations subtle. They should feel like a slow breath, not a jump scare.
