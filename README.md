# SRG Exports website

React + Vite + TypeScript + Tailwind CSS + React Router + Lucide.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check + production build into /dist
    npm run preview    # test the production build

## Test checklist
- Home (/): hero buttons go to /products and /contact; six product cards; CTA opens WhatsApp.
- Products (/products): every card's "Enquire on WhatsApp" opens a message naming that product.
- About (/about): vision, mission, values, 5-step process, "Explore Our Products" button.
- Contact (/contact): submit empty form (errors show); fill it in (WhatsApp opens with your details); Call Now dials +91 9665081181; map loads.
- Resize to phone width: hamburger menu works; floating WhatsApp button is visible everywhere.
- Check the WhatsApp message in the chat box before sending. Number used: 919665081181 (src/utils/whatsapp.ts).

## Before going live
1. Replace the placeholder domain `https://www.your-domain-here.com` in: src/components/Seo.tsx, public/sitemap.xml, public/robots.txt.
2. Images are remote Unsplash URLs (src/data/products.ts). Check each one looks right; broken ones show a branded fallback. For best results, add your own photos to public/images/ and point the paths there.
3. Add an og:image once you have a real 1200x630 PNG.

## Deploy
Vercel: push to GitHub, import the repo at vercel.com, framework "Vite" (build: npm run build, output: dist). vercel.json handles page-refresh routing.
Netlify: import the repo, build command `npm run build`, publish directory `dist`. public/_redirects handles routing.

## Custom domain
Buy a domain, then in Vercel (Project > Settings > Domains) or Netlify (Domain management > Add domain) add it and create the DNS records shown (usually an A record for the root domain and a CNAME for www). HTTPS is issued automatically. Then update the placeholder domain (see above) and redeploy.
