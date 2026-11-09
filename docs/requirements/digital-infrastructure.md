# Digital Infrastructure Setup

**Status:** draft
**Last updated:** 2026-11-09

## Goal

Establish the foundational technical infrastructure for the NZIC website so that all subsequent feature development begins on a stable, maintainable, and scalable base. Once this work is complete, any developer can clone the repository, run a single command to get a local environment, open a pull request, and have that change automatically reviewed and deployed — with DNS, analytics, privacy compliance, and SEO foundations already in place.

## Users

**Primary user of this infrastructure:** The NZIC development team (initially likely a solo developer or small team). They need to be able to build, preview, and ship pages without friction.

**End users whose experience this infrastructure shapes:** People outside New Zealand researching migration options — primarily skilled workers, families, and retirees. They arrive via Google search, expect fast load times on mobile, and must be able to submit contact/assessment forms reliably.

## In scope

- Framework and site-architecture decision (static site generator, meta-framework, or CMS-driven)
- Hosting platform selection and initial project deployment
- Custom domain purchase/transfer and DNS configuration
- TLS/HTTPS certificate provisioning and enforcement
- CI/CD pipeline: automated build, lint, and deploy on every pull request and merge to main
- Preview deployments per pull request (so stakeholders can review changes before they go live)
- Environment variable management (dev / staging / production)
- SEO foundations: sitemap.xml, robots.txt, canonical URLs, Open Graph tags, structured data scaffold
- Web analytics setup (privacy-respecting, with cookie consent flow meeting NZ Privacy Act 2020 and GDPR-equivalent obligations)
- Cookie consent banner implementation
- Privacy Policy and Terms of Use placeholder pages
- Contact / free-assessment form backend (submission delivery and spam protection)
- Repository structure, branch strategy, and contribution guidelines documented in CLAUDE.md / README.md
- Favicon, default social share image, and brand colour/font tokens wired into the build

## Out of scope

The following are explicitly deferred to later feature sprints. Infrastructure choices must accommodate them, but they will not be built now.

- Full visual design system or component library
- All page content (copy, images, real data)
- Visa service pages and eligibility tools
- Job seeker portal and job board
- Employer-facing candidate search
- Webinars / booking / calendar integrations
- Blog / news / SEO content pages
- Payment processing
- User accounts or login
- Multilingual / i18n support
- Any integration with New Zealand immigration authority APIs
- Accessibility audit beyond the baseline structural setup done here

## User stories

- As a developer, I want a single `npm run dev` command that starts a local preview so that I can iterate without manual steps.
- As a developer, I want every pull request to trigger a build and deploy a preview URL so that a stakeholder can review changes before they merge.
- As a developer, I want secrets (API keys, form endpoints) stored outside the repository so that credentials are never committed to git.
- As a site visitor, I want pages to load over HTTPS with no mixed-content warnings so that my browser does not flag the site as insecure.
- As a site visitor on mobile, I want the site to load in under 3 seconds on a 4G connection so that I do not abandon it before reading.
- As a site visitor, I want to be informed about cookie use and give or decline consent before any tracking fires so that my privacy is respected.
- As the NZIC business owner, I want a contact/assessment form submission to arrive in my inbox reliably so that I do not miss leads.
- As the NZIC business owner, I want to see page-level traffic data in an analytics dashboard so that I can understand what content users engage with.
- As a search engine crawler, I want a valid sitemap.xml and robots.txt so that pages are indexed efficiently.

## Acceptance criteria

- **REQ-001** — Given the repository is cloned on a machine with Node.js installed, when `npm install && npm run dev` is run, then a working local preview is accessible at `localhost` within 60 seconds with no manual configuration steps.

- **REQ-002** — Given a pull request is opened against the main branch, when the CI pipeline runs, then a unique preview URL is posted as a PR comment within 5 minutes and the URL resolves to the built site.

- **REQ-003** — Given a commit is merged to the main branch, when the CI pipeline runs, then the production site is updated within 10 minutes with no manual intervention.

- **REQ-004** — Given any HTTP request to the production domain, when the response is received, then the connection is HTTPS, the HTTP Strict-Transport-Security header is present, and no browser security warning is shown.

- **REQ-005** — Given the production domain is loaded on a mid-range Android device over a simulated 4G connection (Lighthouse throttling), when Lighthouse is run, then the Performance score is 80 or above and Largest Contentful Paint is under 3.0 s.

- **REQ-006** — Given a first-time visitor lands on any page, when the page loads, then a cookie consent banner is displayed before any analytics or third-party tracking scripts execute, and the visitor can accept or decline.

- **REQ-007** — Given a visitor declines cookie consent, when they browse the site, then no analytics events are sent and no non-essential cookies are set for the duration of that session.

- **REQ-008** — Given a visitor submits the contact/assessment form with valid inputs, when the form is submitted, then a confirmation message is shown to the visitor within 5 seconds and the submission is delivered to the designated NZIC email address within 2 minutes.

- **REQ-009** — Given a bot or spam submission is made to the contact form, when the submission is processed, then it is blocked or filtered before reaching the NZIC inbox (e.g. honeypot field or CAPTCHA mechanism in place).

- **REQ-010** — Given a search engine crawler requests `https://<domain>/sitemap.xml`, when it is served, then a valid XML sitemap listing all published pages is returned with HTTP 200.

- **REQ-011** — Given a search engine crawler requests `https://<domain>/robots.txt`, when it is served, then a valid robots.txt is returned that permits crawling of public pages and references the sitemap URL.

- **REQ-012** — Given any page on the production site, when its HTML `<head>` is inspected, then it contains a unique `<title>`, a `<meta name="description">`, a canonical `<link>`, and Open Graph `og:title` / `og:description` / `og:image` tags.

- **REQ-013** — Given the repository, when it is inspected, then no secrets, API keys, or credentials appear in any committed file; all such values are loaded from environment variables.

- **REQ-014** — Given the production site, when it is scanned with an automated tool (e.g. axe-core or Lighthouse), then there are zero "critical" or "serious" accessibility violations in the baseline page structure (HTML landmarks, heading hierarchy, image alt attributes on decorative/informational images).

- **REQ-015** — Given the production site, when it is inspected, then a Privacy Policy page and a Terms of Use page both exist at stable URLs, are linked from the site footer, and each contains at minimum a placeholder paragraph identifying NZIC as the data controller and a contact address for privacy enquiries.

## Non-functional requirements

- **Performance:** Lighthouse Performance score >= 80 on mobile (simulated 4G). LCP < 3.0 s. Total initial page weight < 200 KB transferred (before images). Images served in modern formats (WebP or AVIF) with responsive `srcset`.
- **Accessibility:** WCAG 2.2 Level AA as the target for all infrastructure-generated scaffolding (navigation, skip links, landmark regions, focus management). Full audit deferred to content build phase.
- **Browsers/devices:** Latest 2 versions of Chrome, Firefox, Safari, and Edge on desktop. Safari on iOS 16+. Chrome on Android 10+.
- **SEO:** Every page indexable by default. Canonical URLs enforced. No duplicate content from trailing-slash variants. Structured data scaffold (Organization schema) on the homepage.
- **Privacy/compliance:** NZ Privacy Act 2020 applies as the primary framework. If the site targets EU/UK residents (likely given the audience), GDPR/UK GDPR cookie consent rules apply. No personal data from form submissions stored client-side. Form submissions transmitted over TLS. Consent preferences stored in a first-party cookie, not shared with third parties.
- **Uptime/reliability:** Hosting platform must offer >= 99.9% uptime SLA. CDN-backed asset delivery required.
- **Security:** HTTP security headers set: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`. Dependency vulnerability scanning enabled in CI (e.g. `npm audit` or Dependabot).

## Content and data

| Item | Purpose | Owner | Available? |
|---|---|---|---|
| Domain name | Production URL | Client (NZIC) | Open question — see OQ-001 |
| Brand colours and typography | Design tokens for CSS | Client / designer | Open question — see OQ-002 |
| Logo / favicon source file | Site identity | Client | Not yet provided |
| Default social share image | OG image fallback | Client / designer | Not yet provided |
| Contact/form destination email | Form submission delivery | Client | Open question — see OQ-003 |
| Analytics account | Traffic data ownership | Client | Open question — see OQ-004 |
| Privacy Policy text | Legal compliance | Client / solicitor | Placeholder acceptable at launch; final text needed before public launch |
| Terms of Use text | Legal compliance | Client / solicitor | Placeholder acceptable at launch |

## Open questions

1. **OQ-001 — Domain name:** ✅ RESOLVED — Site will be hosted at `https://linomiguel.github.io/NZIC/` via GitHub Pages. No custom domain purchase required at this stage.

2. **OQ-002 — Brand identity:** Is there an existing brand guide (colours, fonts, logo)? If not, is a designer engaged, or will the reference site's visual style be used as a starting point? Decision needed before design tokens can be committed.

3. **OQ-003 — Form delivery email:** ✅ RESOLVED — Form submissions to be delivered to `lino.d.r.miguel@gmail.com`.

4. **OQ-004 — Analytics platform:** Is Google Analytics 4 acceptable, or does the client prefer a privacy-first alternative (e.g. Plausible, Fathom) to simplify cookie consent obligations? Decision needed from client. Note: a privacy-first tool may avoid the need for explicit cookie consent for analytics, reducing friction.

5. **OQ-005 — Hosting platform:** ✅ RESOLVED — GitHub Pages (`linomiguel.github.io/NZIC`). Static files only — no serverless functions. Form backend must use a third-party service (see updated stack recommendation).

6. **OQ-006 — Framework preference:** ✅ RESOLVED — Astro confirmed. Note: Astro must be configured with a `base: '/NZIC'` path prefix and `output: 'static'` for GitHub Pages compatibility.

7. **OQ-007 — Staging environment:** Is a separate staging branch/URL required in addition to the production `gh-pages` branch, or are draft PRs sufficient for review?

8. **OQ-008 — GDPR scope:** Will the site explicitly target EU or UK residents (e.g. via Google Ads geotargeted to those regions)? If yes, full GDPR/UK GDPR compliance — including a Consent Management Platform — is mandatory, not optional.

9. **OQ-009 — Form backend:** ✅ RESOLVED (by OQ-005) — GitHub Pages is static, so a third-party form service is required. Recommended: Formspree (free tier, delivers to Gmail, spam filtering, no backend code needed).

10. **OQ-010 — Immigration adviser licence display:** The reference site prominently displays Immigration Advisers Authority licensing. What is the NZIC adviser's licence number and what credential badges or seals need to appear on the site?

---

## Future scope (full site features)

The infrastructure must be chosen with these eventual features in mind. None of these will be built during the infrastructure phase.

| Area | Description |
|---|---|
| Visa information pages | Detailed guides for Skilled Migrant, Partner, Retirement, Investor, and Green List visas |
| Free assessment form | Multi-step intake form capturing personal and professional details, with email auto-response |
| Job seeker portal | Candidate profile creation, CV upload, job-match service |
| Job board | Live listings browsable by international candidates |
| Employer portal | Accredited employer registration, candidate search, job posting |
| Consultation booking | Calendar integration (e.g. Calendly) for one-on-one sessions |
| Webinar registration | Event listing and registration flow |
| Blog / resources | SEO-driven content pages, regularly updated |
| Testimonials | Structured client success stories, possibly pulling from Google Reviews |
| Team / about pages | Adviser credentials, IAA licence display, company history |
| Multilingual support | Not confirmed, but likely given the international audience |
| Payment processing | If paid consultations or services are sold online |

---

## Recommended infrastructure stack (assumptions — to be confirmed via open questions)

The following is a working recommendation based on the project context. It is an assumption until confirmed through the open questions above.

| Concern | Recommended choice | Rationale |
|---|---|---|
| Framework | Astro (`output: 'static'`, `base: '/NZIC'`) | Zero-JS by default, excellent Lighthouse scores, file-based routing, supports Markdown/MDX for content |
| Hosting | GitHub Pages (`linomiguel.github.io/NZIC`) | ✅ Confirmed. Free, integrates directly with the repo, HTTPS automatic |
| CI/CD | GitHub Actions | Build Astro on push to `main`, deploy to `gh-pages` branch automatically |
| Domain | `linomiguel.github.io/NZIC` | ✅ Confirmed. No registrar or DNS config needed at this stage |
| Analytics | Plausible (privacy-first) | No cookies required → no consent banner needed for analytics; GDPR-compliant |
| Cookie consent | Only needed if GA4 or other cookie-setting scripts are added | Plausible avoids this requirement |
| Form backend | Formspree (free tier) | Static-compatible, delivers to `lino.d.r.miguel@gmail.com`, built-in spam filtering, no backend code |
| Spam protection | Formspree built-in + honeypot field | No CAPTCHA friction for users |
| Secret management | GitHub Actions secrets | Formspree endpoint ID stored as a secret, never hard-coded |
| Dependency scanning | Dependabot (GitHub) | Automated PRs for vulnerable dependencies |

---

## Changelog

- 2026-11-09 — Initial draft created. Reference site (new-zealand-immigration.com, Webflow-based) reviewed. Infrastructure scope defined. Full site features documented as future scope.
- 2026-11-09 — OQ-001, OQ-003, OQ-005, OQ-006 resolved. Stack updated: GitHub Pages hosting, Astro framework, Formspree for forms, Plausible for analytics. Vercel removed.
