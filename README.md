# CELEBSO X — Architectural Portfolio & Professional Social Network

An India-first professional social platform and architectural portfolio network for creators, designers, and cultural vanguard.

## 🌐 Site Structure
- `index.html` — Foundation & Home (Profile showcase, live IST clock, platform capabilities, registration CTA)
- `about.html` — Brand Origins & Manifesto (Feed vs. Archive dichotomy, The Four Pillars, Chronology, Leadership)
- `portfolio.html` — Digital Identity & Discovery (Interactive profile cards, multi-modal artifact showcase, AI Score radial meter, AI Card, and talent directory)
- `blog.html` — Perspectives & Editorial (Featured dossier, dynamic category filtering, slide-over reader modal, newsletter)
- `contact.html` — Communications Protocol (Regional bureaus, interactive dossier form with validation, FAQ accordion)
- `404.html` — Custom Cloudflare Pages 404 error page

## 🚀 Cloudflare Pages Deployment

This project is pre-configured and 100% ready for instant deployment on **Cloudflare Pages**.

### Method 1: Cloudflare Dashboard (GitHub Integration)
1. Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select this repository: `veer2580/client-portfolio`.
4. Set Build configuration:
   - **Framework preset**: `None`
   - **Build command**: *(Leave empty)*
   - **Build output directory**: `.` (or leave as root)
5. Click **Save and Deploy**. Your site will be live instantly with global CDN and SSL!

### Method 2: Wrangler CLI
```bash
npx wrangler pages deploy . --project-name=client-portfolio
```

### Pre-configured Cloudflare Files:
- `_redirects`: Enables clean URLs without `.html` extension (e.g. `/portfolio`, `/about`, `/contact`).
- `_headers`: Optimizes cache headers for static media and adds strict security policies.
- `wrangler.toml`: Cloudflare Pages project configuration.
