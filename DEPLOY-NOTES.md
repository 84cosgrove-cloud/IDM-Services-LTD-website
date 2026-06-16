# IDM Services NW — deployment notes (June 2026 update)

## Deploy
Drag the whole folder into Netlify (or push to your connected repo) exactly as before.

## Two things to do after deploying

1. **Contact form (Netlify Forms)** — the form now delivers enquiries straight to your
   Netlify dashboard instead of opening the visitor's email app. After the first deploy:
   - Netlify dashboard → your site → **Forms** → confirm the "enquiry" form is detected
   - **Forms → Settings → Form notifications → Add notification → Email** and enter
     info@idmservicesltd.com so every enquiry lands in your inbox
   - Free tier covers 100 submissions/month
   - If a submission ever fails (e.g. previewing the HTML file locally), the form
     falls back to opening the visitor's email app — nothing is lost

2. **When you buy a custom domain** — search-and-replace
   `https://www.idmservicesltd.com` with your new domain in:
   - every .html file (canonical + og:url + JSON-LD)
   - sitemap.xml, robots.txt, llms.txt
   Then submit the sitemap in Google Search Console (free) to get indexed quickly.

## What changed in this update
- Hero redesigned: full-bleed engineer photo with fibre overlay, keyword-bearing H1
- Trust strip (24/7 / Nationwide / Multi-sector / ISO 9001)
- FAQ section on the homepage with FAQPage structured data
- FTTP, PIA, MDU, fibre splicing & OTDR keywords added to copy, titles and metas
- Structured data: LocalBusiness + Services + Breadcrumbs (Google rich results)
- Open Graph / Twitter cards on every page (proper previews when links are shared)
- sitemap.xml, robots.txt, llms.txt (AI-search/GEO), _headers (security + caching)
- Contact form → Netlify Forms with graceful fallback
- Service card links now jump to the right section (#telecoms, #data-centres, etc.)
- Accessibility: skip link, keyboard focus states, aria-expanded menu, reduced-motion support
- Images compressed ~25% and given explicit dimensions (better Core Web Vitals)
