# Grazinda Franco - Professional Makeup Artist Website

A premium, editorial-style website for Grazinda Franco, a professional makeup artist and dermopharmacy expert based in Orihuela, Alicante. The site embodies an elegant, magazine-quality aesthetic with sophisticated interactions and a focus on visual storytelling.

## 🎨 Design Philosophy

The website follows an **"Editorial Canvas"** approach:
- **Premium First Impressions**: Rich aesthetics with curated color palettes, modern typography, and subtle micro-animations
- **Layered Design**: Background textures → Main content → Foreground accents
- **Breathing Space**: Generous whitespace and asymmetrical layouts that break traditional grids
- **Sophisticated Interactions**: Smooth transitions, hover effects, and carousel navigation

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS 4 (CSS-first configuration)
- **Language**: TypeScript
- **Email**: Nodemailer with server actions
- **Validation**: Zod
- **Fonts**: Cormorant Garamond (headings), Lato (body), Pinyon Script (accents)

## 📁 Project Structure

```
grazindafranco.com/
├── app/
│   ├── actions/          # Server actions (email handling)
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Homepage composition
│   ├── globals.css       # Tailwind config + custom styles
│   ├── sitemap.ts        # Dynamic sitemap generation
│   └── robots.ts         # SEO robots configuration
├── components/
│   ├── Hero.tsx          # Hero section with video background
│   ├── AboutSection.tsx  # About me with portrait
│   ├── ServicesFullSection.tsx  # Service cards + Bridal Pack
│   ├── GallerySection.tsx       # Interactive carousel gallery
│   ├── ReviewsSection.tsx       # Client testimonials
│   ├── ContactSection.tsx       # Contact form + details
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with links
│   └── StructuredData.tsx       # JSON-LD for SEO
├── public/
│   ├── images/           # Optimized images (logo, gallery, icons)
│   └── videos/           # Hero background video
└── design-system/        # Original high-res assets
    ├── branding/         # Logos, brush strokes, color references
    ├── photos/           # Original photography
    └── video/            # Source video files
```

## 🎯 Key Features

### Interactive Gallery Carousel
- Horizontally scrollable with snap points
- Custom gold navigation arrows
- Touch-optimized for mobile
- Lightbox for full-size viewing
- Built with native React hooks (no external libraries)

### Contact Integration
- Server-side email handling with Nodemailer
- Form validation with Zod
- WhatsApp direct link with custom SVG
- Google Maps integration for directions
- Highlighted "Cómo llegar" button

### Service Showcase
- Dynamic pricing cards with hover effects
- Featured Bridal Pack with custom photography
- Duration indicators for all services
- Minimum guest requirements clearly stated

### AI Assistant (New)
- **DeepSeek V3 Integration**: Powered by OpenRouter for intelligent responses.
- **Context-Aware**: Trained on Grazinda's expert knowledge (pharmacy, makeup, services).
- **Smart Fallback**: Directs complex queries to WhatsApp with pre-filled messages.
- **Rich UI**: Markdown support (bold, lists) and strict strict WhatsApp link generation.

### SEO Optimization
- Structured data (JSON-LD) for local business
- Dynamic sitemap and robots.txt
- OpenGraph and Twitter card metadata
- Semantic HTML throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 🔐 Environment Variables

Create a `.env.local` file:

```env
# SMTP Configuration (for contact form)
SMTP_HOST=your_smtp_host
SMTP_PORT=465
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password
CONTACT_EMAIL=grazinda.franco@gmail.com
OPENROUTER_API_KEY=your_deepseek_api_key
```

> **Note**: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#c9a87c` - Buttons, borders, accents
- **Primary Dark**: `#b8956a` - Hover states
- **Dark Charcoal**: `#2d2d2d` - Headings, footer background
- **Body Gray**: `#6b6b6b` - Paragraph text
- **Background**: `#ffffff` (white), `#faf8f5` (warm bone)

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Lato (clean sans-serif)
- **Accent**: Pinyon Script (signature style, use sparingly)

### UI Components
- **Primary Button**: Gold background → Transparent with gold border on hover
- **Service Cards**: Lift on hover with gold shadow
- **Navigation**: Smooth scroll to sections with active state indicators

## 📦 Asset Organization

### Public Assets (`/public`)
- Optimized for web delivery
- Descriptive naming: `logo.png`, `portrait-about.jpg`, `hero-background.mp4`
- Gallery images: `gallery-1.jpg` through `gallery-10.jpg`

### Design System (`/design-system`)
- Original high-resolution files
- Organized by type: `branding/`, `photos/`, `video/`
- Not deployed to production (excluded via `.gitignore`)

## 🚢 Deployment

### Docker Deployment (Recommended)

```bash
# Build the image
docker build -t grazindafranco .

# Run with docker-compose
docker-compose up -d
```

### VPS Deployment

1. Clone the repository:
```bash
git clone https://github.com/kyryl-bogach/grazindafranco.git
cd grazindafranco
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` with production values

4. Build:
```bash
npm run build
```

5. Start with PM2 (recommended):
```bash
pm2 start npm --name "grazindafranco" -- start
pm2 save
```

### Environment-Specific Notes
- Ensure SMTP credentials are valid for production
- Update `CONTACT_EMAIL` to the desired recipient
- Configure reverse proxy (nginx/Apache) if needed

## 📝 Content Management

### Updating Services
Edit `components/ServicesFullSection.tsx`:
- Modify the `services` array for pricing/descriptions
- Update Bridal Pack details in the featured section

### Updating Gallery
Add images to `public/images/gallery/` and update the `galleryImages` array in `components/GallerySection.tsx`.

### Updating Testimonials
Edit the `reviews` array in `components/ReviewsSection.tsx`.

## 🔧 Maintenance

### Adding New Sections
1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Follow the editorial design principles (see `AGENTS.md`)
4. Maintain the layered visual hierarchy

### Updating Contact Information
- Email: `components/ContactSection.tsx` and `components/StructuredData.tsx`
- Phone: `components/ContactSection.tsx` and `components/StructuredData.tsx`
- Address: `components/ContactSection.tsx` and `components/StructuredData.tsx`

## 📚 Additional Documentation

See `AGENTS.md` for:
- Detailed design philosophy
- Code conventions and patterns
- Known issues and gotchas
- Future development guidelines

## 📄 License

Private - All rights reserved © 2025 Grazinda Franco
