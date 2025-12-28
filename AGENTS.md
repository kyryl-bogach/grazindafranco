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
- **Email**: Nodemailer (server actions in `app/actions/send-email.ts`).
- **Validation**: Zod for form validation.

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
- **Primary Dark**: `#b8956a` (`var(--color-primary-dark)`) - Hover states.
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
    - **Video Background**: Subtle, looping hero video with poster image fallback.

---

## 4. Component Architecture

### Core Sections (in order of appearance)

#### `Hero.tsx`
- **Purpose**: First impression with video background, headline, and dual CTAs.
- **Key Features**:
  - Looping background video (`hero-background.mp4`) with poster image
  - Brush stroke overlay for artistic flair
  - Two primary CTAs: "Reserva tu cita" (→ `#contacto`) and "Ver Trabajos" (→ `#galeria`)
- **Design Notes**: Asymmetrical layout with text on left, visual on right (desktop).

#### `AboutSection.tsx`
- **Purpose**: Personal introduction with portrait.
- **Key Features**:
  - Condensed, impactful copy (~30% shorter than original)
  - Portrait image with subtle border
  - "Leer más" expansion for full bio
- **Content**: Emphasizes expertise in dermopharmacy and personalized approach.

#### `ServicesFullSection.tsx`
- **Purpose**: Service offerings with pricing.
- **Structure**:
  - Grid of 4 service cards: Maquillaje Social, Maquillaje a Domicilio, Curso Automaquillaje Individual, Curso Automaquillaje Grupal
  - Featured "Pack Novia Completo" section with custom photography
- **Recent Updates**:
  - All services now include duration indicators (1h or 3h)
  - "Pestañas postizas individuales" clarification
  - Bridal Pack minimum 1 guest requirement
  - High-quality material mentions for courses
  - Custom bridal pack photo (`bridal-pack.jpg`)

#### `GallerySection.tsx` ⭐ **Recently Upgraded**
- **Purpose**: Showcase portfolio work.
- **Implementation**: Horizontal carousel (not grid).
- **Key Features**:
  - Smooth horizontal scrolling with snap points (`scroll-snap-type`)
  - Custom gold navigation arrows (disabled states when at edges)
  - Touch-optimized for mobile swipe
  - Lightbox modal for full-size viewing
  - Built with React `useRef` and `useEffect` (no external carousel library)
- **Technical Details**:
  - `scrollContainerRef` manages scroll position
  - `checkScroll()` updates arrow states dynamically
  - Hidden scrollbar for clean aesthetic (`.scrollbar-hide`)
  - Images: `gallery-1.jpg` through `gallery-10.jpg`

#### `ReviewsSection.tsx`
- **Purpose**: Display client testimonials.
- **Content**: 6 curated Google reviews (dates removed for timeless feel).
- **Design**: Card-based layout with star ratings and "Dejar una reseña" CTA.
- **Heading**: "Lo que dicen mis clientas" (gender-specific).

#### `ContactSection.tsx` ⭐ **Recently Enhanced**
- **Purpose**: Contact form + business details.
- **Key Features**:
  - Server-side email handling via `app/actions/send-email.ts`
  - Form validation with Zod
  - **WhatsApp Link**: Direct link with custom SVG icon (styled in brand colors, not green)
  - **"Cómo llegar" Button**: Highlighted outline button linking to Google Maps
  - Contact details: Phone, WhatsApp, Email (`grazinda.franco@gmail.com`), Address
- **Recent Updates**:
  - Email changed from `hola@grazindafranco.com` to `grazinda.franco@gmail.com`
  - WhatsApp integration with custom icon
  - "Cómo llegar" button with gold outline and hover fill

#### `Header.tsx`
- **Purpose**: Site navigation.
- **Features**:
  - Logo (currently using gold preview version: `logo-gold-preview.png`)
  - Navigation links: Inicio, Sobre mí, Servicios, Galería, Testimonios, Contacto
  - Smooth scroll to sections
  - Mobile hamburger menu

#### `Footer.tsx`
- **Purpose**: Footer with links and social.
- **Content**: Duplicate navigation + Instagram link.

#### `StructuredData.tsx`
- **Purpose**: SEO-optimized JSON-LD for local business.
- **Data**: Business name, address, phone, email, opening hours, services.

#### `ChatWidget.tsx` ⭐ **New AI Component**
- **Purpose**: Intelligent assistant for customer inquiries.
- **Tech**: ReactMarkdown + Custom OpenRouter Stream.
- **Key Features**:
  - **Floating UI**: Non-intrusive bubble.
  - **Manual Streaming**: Custom `ReadableStream` implementation for robust data flow.
  - **Strict Logic**: System-prompt enforced WhatsApp URL generation (`https://wa.me/...`).
  - **Visuals**: Clean, light-themed UI matching the site's aesthetic.

---

## 5. File Structure & Conventions

### Directory Layout
- `app/` - Routes and Pages. `layout.tsx` holds the global shell (Header/Footer).
- `app/actions/` - Server actions (e.g., `send-email.ts`).
- `components/` - Functional React components.
  - `Hero.tsx`, `AboutSection.tsx`, `ServicesFullSection.tsx`, `GallerySection.tsx`, `ReviewsSection.tsx`, `ContactSection.tsx`: Section-level components included in `app/page.tsx`.
- `public/images/` - Optimized static assets for web delivery.
  - `gallery/` - Portfolio images
  - `logo.png`, `portrait-about.jpg`, `hero-poster.jpg`, `bridal-pack.jpg`, etc.
- `public/videos/` - Video assets (`hero-background.mp4`).
- `design-system/` - **Original high-res assets** (not deployed):
  - `branding/` - Logos, brush strokes, color references
  - `photos/` - Original photography (including `pack-novias-foto.jpeg`)
  - `video/` - Source video files

### Code Conventions
- **Animations**: Use the global utility classes in `globals.css`:
  - `.animate-fade-in-up`: For text entrance.
  - `.animate-float`: For background textures (slow infinite float).
- **Images**: Always use `next/image`.
  - Hero images must have `priority`.
  - Decorative backgrounds should have `pointer-events-none select-none`.
- **Server Actions**: Email handling is done server-side in `app/actions/send-email.ts` using Nodemailer.
- **Form Validation**: Use Zod schemas for all form inputs.

---

## 6. Asset Management

### Naming Conventions
All assets follow descriptive, lowercase-kebab-case naming:
- **Logos**: `logo.png`, `logo-gold-preview.png`
- **Hero**: `hero-poster.jpg`, `hero-brush-stroke.png`, `hero-background.mp4`
- **About**: `portrait-about.jpg`
- **Services**: `icon-makeup.png`, `icon-skincare.png`, `icon-routines.png`, `icon-treatment.png`, `icon-separator.png`, `bridal-pack.jpg`
- **Gallery**: `gallery-1.jpg` through `gallery-10.jpg`
- **SEO**: `og-image.png`

### Design System Organization
- **Originals** live in `design-system/` and are excluded from deployment (`.gitignore`).
- **Optimized versions** live in `public/` for web delivery.
- When adding new assets:
  1. Save high-res original to `design-system/photos/` or `design-system/branding/`
  2. Optimize for web (resize, compress)
  3. Save to `public/images/` with descriptive name
  4. Update component references

---

## 7. Recent Major Changes

### Gallery Carousel (December 2025)
- **Before**: Static 2x3 grid layout
- **After**: Horizontal scrollable carousel with custom navigation
- **Why**: More engaging, showcases more work without overwhelming the page, premium feel
- **Implementation**: Native React hooks (`useRef`, `useEffect`), CSS scroll-snap, no external libraries

### Contact Enhancements (December 2025)
- Added WhatsApp direct link with custom SVG (brand-colored, not default green)
- Highlighted "Cómo llegar" button with outline style and hover fill
- Updated primary email to `grazinda.franco@gmail.com`

### Services Refinement (December 2025)
- Added duration indicators (1h for makeup services, 3h for courses)
- Updated pricing: Home Makeup to 120€, Individual Course to 150€, Group Course to 100€/person
- Clarified "Pestañas postizas individuales" (individual lashes)
- Bridal Pack now requires minimum 1 additional guest
- Emphasized "Material de alta calidad incluido" for courses
- Updated Bridal Pack featured photo to `bridal-pack.jpg`

### Testimonials (December 2025)
- Curated 6 best Google reviews
- Removed dates for timeless feel
- Changed heading to "Lo que dicen mis clientas" (gender-specific)

---

## 8. Known Issues & "Gotchas"
- **Hydration Warning**: The `<html>` tag in `layout.tsx` has `suppressHydrationWarning`. This is to prevent errors from browser extensions injecting attributes. Do not remove it.
- **Linting**: You may see an `Unknown at rule @theme` warning in `globals.css`. This is a false positive due to tooling lagging behind Tailwind v4. **Ignore it.**
- **Font Variable**: The script font class `.font-script` in CSS references `var(--font-pinyon)` directly. Ensure `Pinyon_Script` is loaded in `layout.tsx` and the variable is passed to `<body>`.
- **Git Push**: First push may take time due to large binary files (images, videos). This is normal.

---

## 9. Deployment

### Docker (Recommended)
- `Dockerfile` and `docker-compose.yml` are included
- Build: `docker build -t grazindafranco .`
- Run: `docker-compose up -d`

### VPS (Manual)
1. Clone repo: `git clone https://github.com/kyryl-bogach/grazindafranco.git`
2. Install: `npm install`
3. Create `.env.local` with SMTP credentials
4. Build: `npm run build`
5. Start: `pm2 start npm --name "grazindafranco" -- start`

### Environment Variables (Production)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password  # Use Gmail App Password, not regular password
CONTACT_EMAIL=grazinda.franco@gmail.com
```

---

## 10. Future Direction
When adding new sections:
1.  Avoid "boxy" layouts. Use negative margins or absolute positioning to break the grid.
2.  Maintain the "Magazine/Editorial" look—lots of whitespace, sophisticated typography.
3.  Keep animations subtle. They should feel like a slow breath, not a jump scare.
4.  Always consider mobile-first, but design for desktop elegance.
5.  Use the carousel pattern for any content that benefits from horizontal scrolling (testimonials, services, etc.).
6.  Maintain the three-layer visual hierarchy: Background → Content → Accent.

---

## 11. Content Updates

### Updating Services
- Edit `components/ServicesFullSection.tsx`
- Modify the `services` array for pricing/descriptions
- Update Bridal Pack section for featured content

### Updating Gallery
- Add optimized images to `public/images/gallery/`
- Update `galleryImages` array in `components/GallerySection.tsx`
- Maintain naming convention: `gallery-N.jpg`

### Updating Testimonials
- Edit `reviews` array in `components/ReviewsSection.tsx`
- Keep to 6 reviews for optimal layout
- No dates (timeless feel)

### Updating Contact Info
- **Email**: `ContactSection.tsx` + `StructuredData.tsx`
- **Phone**: `ContactSection.tsx` + `StructuredData.tsx`
- **Address**: `ContactSection.tsx` + `StructuredData.tsx`
- **WhatsApp**: `ContactSection.tsx` (update href and phone number)

---

## 12. Performance Considerations
- **Images**: All use `next/image` for automatic optimization
- **Videos**: Hero video is compressed and has poster image fallback
- **Fonts**: Loaded via `next/font/google` for optimal performance
- **Carousel**: Uses native CSS scroll-snap (no heavy JS libraries)
- **Email**: Server-side handling prevents client-side exposure of SMTP credentials

---

## 13. SEO & Metadata
- **Structured Data**: JSON-LD in `StructuredData.tsx` for local business
- **Sitemap**: Dynamic generation in `app/sitemap.ts`
- **Robots**: Configured in `app/robots.ts`
- **Meta Tags**: OpenGraph and Twitter cards in `app/layout.tsx`
- **Alt Text**: All images have descriptive alt attributes
- **Semantic HTML**: Proper heading hierarchy (H1 → H2 → H3)

---

**Last Updated**: December 27, 2025
**Project Status**: Production-ready, pending VPS deployment
