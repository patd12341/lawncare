# How to Download Your Website

## Method 1: Download Individual Files (Recommended)

1. **Right-click on each file** in the file explorer on the left
2. **Select "Download"** from the context menu
3. **Save all files** maintaining the folder structure shown below

## Method 2: Build and Download Static Files

If you want just the built website files:

1. Run `npm run build` in the terminal
2. Download all files from the `dist/` folder
3. Upload the `dist/` folder contents to any web hosting service

## Required Folder Structure

```
your-website/
├── public/
│   ├── data-deletion.html
│   ├── faq.html
│   ├── landscaping.html
│   ├── privacy-policy.html
│   ├── sitemap.html
│   └── Patws landscaping.png
├── src/
│   ├── assets/
│   │   ├── about-us.png
│   │   ├── aeration-service.png
│   │   ├── fertilization-service.png
│   │   ├── hero-background.png
│   │   ├── mow-and-trim.png
│   │   ├── patws-logo.png
│   │   ├── seasonal-cleanup.png
│   │   └── snow-removal.avif
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   └── TestimonialsSlider.tsx
│   ├── lib/
│   │   ├── analytics.ts
│   │   └── supabase.ts
│   ├── pages/
│   │   ├── services/
│   │   │   ├── AerationService.tsx
│   │   │   ├── CleanupService.tsx
│   │   │   ├── FertilizationService.tsx
│   │   │   └── MowingService.tsx
│   │   ├── DataDeletion.tsx
│   │   └── PrivacyPolicy.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── supabase/
│   └── migrations/
│       ├── 20250411172835_bright_flame.sql
│       ├── 20250418174621_white_cottage.sql
│       ├── 20250418174642_ancient_garden.sql
│       └── 20250506190455_fading_cake.sql
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Important Files to Download

### Essential Configuration Files:
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `tailwind.config.js` - Styling configuration
- `tsconfig.json` - TypeScript configuration
- `.env` - Environment variables (contains Supabase keys)

### Main Application Files:
- `index.html` - Main HTML file
- `src/App.tsx` - Main React component
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles

### All Component Files:
- Everything in `src/components/`
- Everything in `src/pages/`
- Everything in `src/lib/`

### Static Files:
- Everything in `public/`
- All images in `src/assets/`

## After Downloading

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Build for production**: `npm run build`

## Hosting Options

Once downloaded, you can host on:
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Upload to a GitHub repository
- **Any web hosting service**: Upload `dist/` folder contents

## Environment Variables

Make sure to set up these environment variables on your hosting platform:
- `VITE_SUPABASE_URL=https://jgchufzdtnjvqcuzrjgh.supabase.co`
- `VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnY2h1ZnpkdG5qdnFjdXpyamdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTI0MzAsImV4cCI6MjA1OTk2ODQzMH0.kh7DtwcW38jhJQxya0jNceztGV2qXVbxyTjvRVexj14`