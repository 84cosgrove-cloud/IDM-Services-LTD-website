# IDM Services NW — Website

Static marketing site for IDM Services NW, a specialist telecoms and network
infrastructure engineering company based in the Liverpool region, delivering
nationwide across the UK.

**Live site:** https://dynamic-gelato-354a59.netlify.app

## Stack
Plain HTML, CSS and vanilla JavaScript. No build step — what's in the repo is
what gets served. Hosted on Netlify.

## Structure
```
index.html        Home (hero, services, why-choose, FAQ, contact CTA)
services.html     Full service breakdown
sectors.html      Sectors served
about.html        Company background
contact.html      Enquiry form (Netlify Forms)
404.html          Not-found page
style.css         Shared stylesheet
script.js         Nav, scroll reveal, hero animation
assets/           Logos and photography
robots.txt        Crawler directives
sitemap.xml       Search engine sitemap
llms.txt          Summary for AI search engines (GEO)
_headers          Netlify security + caching headers
```

## Editing
Edit the HTML/CSS/JS files directly and commit. Netlify redeploys automatically
on every push to the main branch once the repo is linked.

## After moving to a custom domain
Find-and-replace `https://dynamic-gelato-354a59.netlify.app` with the new domain
across all .html files, sitemap.xml, robots.txt and llms.txt. Then submit the
sitemap in Google Search Console.

See DEPLOY-NOTES.md for the Netlify Forms setup.
