# NZIC Design System

**Reference site:** https://www.new-zealand-immigration.com/  
**Reverse-engineered:** 2026-11-09  
**Platform:** Webflow (cdn.prod.website-files.com)  
**Purpose:** Document the visual design for the rebuilt NZIC site.

---

## 1. Site Structure & Navigation

### Page Hierarchy

```
Home (/)
├── Visa Service
│   ├── Our Visa Service (/visa/our-visa-service)
│   ├── Eligibility (/visa/are-you-eligible-to-migrate-to-nz)
│   ├── Skilled Migrant Category (/visa/skilled-migrant-category)
│   ├── Green List (/visa/the-green-list)
│   ├── Pathways to Residence (/visa/pathways-to-residence-in-new-zealand)
│   ├── Partnership Visas (/visa/partnership-visas)
│   ├── Retirement (/retirement-in-new-zealand/retirement-in-nz)
│   └── Investor and Business Migration (/investment/investor-and-business-visas)
├── Job Seekers
│   ├── Our Job Search Service (/job-search/our-job-search-service)
│   ├── Hidden Job Market (/job-search/the-hidden-job-market)
│   ├── Job Seeking and the Catch-22 (/job-search/your-job-hunt-and-the-catch-22)
│   ├── Engineers (/job-search/move-to-new-zealand-as-an-engineer)
│   └── Health Professionals (/job-search/move-to-new-zealand-as-a-doctor)
├── Job Portal
│   ├── Browse Jobs (/job-search/browse-jobs)
│   ├── Browse Candidates (/job-search/browse-candidates)
│   └── Accredited Employers (/job-search/accredited-employers)
├── Employers
│   ├── Employ a Migrant
│   ├── Accredited Employer
│   ├── Find a Candidate
│   └── List a Job
└── About
    ├── About NZIC (/about/who-we-are)
    ├── Fusion Service (/about/our-fusion-service)
    ├── Happy Clients (/about/happy-clients)
    ├── Webinar (/our-immigration-and-job-hunt-webinar)
    ├── One-on-One Consultation
    ├── Contact (/about/contact-us)
    └── Immigration News (/news)
```

### Navigation Pattern

**Top announcement bar** — full-width banner strip (1 line) above the header. Used for time-sensitive CTAs (e.g. webinar registration). Background: `var(--dash)` orange.

**Main header** — sticky, white background, full viewport width. Contains:
- Left: NZIC logo SVG (black, `NZIC_Logo_Black_Large.svg`)
- Center: 5 mega-menu nav items (Visa Service, Job Seekers, Job Portal, Employers, About)
- Right: "Free Assessment" primary CTA button

**Mega-menu dropdowns** — each nav item opens a grid of icon-cards. Each card: small illustrated SVG icon + bold title + short descriptor. Group ends with "VIEW ALL +" link. Dropdown background: `#fafafa`.

**Breadcrumbs** — displayed on inner pages below the header. Pattern: Home icon > Section > Page. Font: Montserrat 14px.

**Mobile navigation** — hamburger button (top-right), slides down full-width overlay menu. Font size 16px for links.

### Footer Layout

Two-row footer, minimal:

**Footer top row** — space-between flex: logo left, footer nav links right  
**Footer bottom row** — centred: Privacy Policy · Disclaimer · Contact us · LinkedIn icon · Instagram icon  
**Copyright line** — `Copyright New Zealand Immigration Concepts Ltd 2026`

Footer background: white. Nav links: Montserrat 18px, weight 400, colour `#000`, hover: opacity 0.7. No multi-column "sitemap" footer — very minimal.

---

## 2. Colour Palette

Extracted from `:root` custom properties and computed styles in `nzic.webflow.shared.978e4aeb1.min.css`.

### Primary Brand Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--dash` | `#f88c30` | Primary accent — CTA buttons, borders, icons, highlights (most-used colour) |
| `--visa-assistance-blue` | `#0d4292` | Deep navy blue — section backgrounds, mega-menu, testimonial section |
| `--matapouri-bay` | `var(--visa-assistance-blue)` = `#0d4292` | Alias for the blue, used for borders, accents |
| `--forest-green` | `#059136` | Success, positive indicators, eco/sustainability accents |

### Neutral & Background Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--blackbg` | `#313131` | Dark headings, dark card backgrounds |
| `--text` | `#171520` | Body text (near-black with slight purple cast) |
| `--dim-grey` | `#737373` | Secondary/muted text |
| `--silver` | `#b9b9b9` | Disabled states, placeholder text |
| `--bgdashboard` / `--bgdash` | `#f6fafd` | Page/section backgrounds (pale blue-white) |
| `--mint-cream` | `#f9fafc` | Card backgrounds, subtle alternate rows |
| `--white-bg` | `#fcfdff` | Lightest white background |
| `--borderdashboard` | `#bbc6cf` | Card borders, subtle dividers |

### Secondary & Utility Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--steel-blue` | `#1086db` | Interactive links, hover states |
| `--royal-blue` (alpha) | `#2073ef96` | Semi-transparent blue overlays |
| `--blue-bg` | `#3864a50f` | Very light blue tinted section backgrounds |
| `--ssl3` | `#ca5733` | Rust/terracotta — error states, warnings |
| `--maroon` | `#160b00` | Near-black with warm undertone, used for certain headings |
| `--dropdown` | `#e4e5e6` | Dropdown menus, dividers |

### Approximate Colour Relationships

- **Orange** `#f88c30` — the brand's most dominant colour. Appears on CTA buttons, announcement bars, card accents, FAQ borders, link colours.
- **Deep blue** `#0d4292` — used for the testimonial section background, section borders, mega-menu column headers.
- **Off-white** `#f6fafd` — almost every section background alternates between white and this very pale blue-white.
- Pure black `#000` and white `#fff` are used extensively for text and backgrounds respectively.

---

## 3. Typography

### Font Families

| Font | Weights Used | Role |
|------|-------------|------|
| **Montserrat** | 100–900 (all variants) | Headings, navigation, CTAs, body text in key sections |
| **Inter** | 300, 400, 500, 600, 700 | Body text, card descriptions, form labels |
| **Satoshi / Satoshi Variable** | Loaded (weight range 300–900) | Dashboard/portal sections — appears in job-portal UI |

Montserrat is the dominant brand typeface. Inter is used as the body/reading font on content-heavy pages.

### Heading Scale

| Level | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| Hero H1 | `65px` (desktop) / ~36px (mobile) | 700 | `1` (tight) | Montserrat |
| H1 (page) | `2.89rem` ≈ 46px | 700 | `1.1` | Montserrat |
| H2 (section) | `2.5rem` ≈ 40px | 700 | `1.2` | Montserrat |
| H3 | `1.8rem` ≈ 29px | 700 | `1.2` | Montserrat |
| H4 | `1.4rem` ≈ 22px | 600 | `1.3` | Montserrat |
| Card title | `20px` | 700 | `22px` | Montserrat |
| Tagline/eyebrow | `12px` | 400 | 1.2 | Montserrat, uppercase, letter-spacing 2px, opacity 0.6 |

### Body Text

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Body (default) | `16px` | 400 | `1.5` |
| Lead paragraph | `21px` | 400 | `29px` |
| Body small | `14px` | 300–400 | `1.5` |
| Caption / meta | `12px` | 400 | `15px` |
| Nav links | `16px` | 500 | — |
| Footer links | `18px` | 400 | — |
| CTA button text | `16px` | 500–700 | `26px` |

---

## 4. Spacing & Layout

### Content Width

| Context | Max Width |
|---------|-----------|
| Primary container | `1200px` |
| Standard content block | `940px` |
| Reading text / body copy | `80ch` |
| Hero content wrapper | `1180px` |
| Narrow reading column | `75ch` |

### Section Padding

| Pattern | Value |
|---------|-------|
| Typical section vertical | `80px 30px` (desktop) |
| Compact section | `50px 3%` |
| Wide section | `65px 3% 100px` |
| Hero top padding | `30px` margin-top on content |
| Footer padding | `0 3% 0 5%` |

### Grid System

The site uses CSS Grid and Flexbox. Key grid patterns:

| Grid | Columns | Gap |
|------|---------|-----|
| Default `.w-layout-grid` | `1fr 1fr` | `16px` |
| Service / feature cards | `1fr 1fr 1fr` | `30px` |
| Services grid | `1fr 1fr` | `16px` |
| FAQ grid | `1fr 1fr` | `60px column, 49px row` |
| Hero content | `.75fr 1fr` | `19px` |

### Spacing Scale (most-used values)

`4px · 5px · 8px · 10px · 12px · 15px · 16px · 20px · 24px · 25px · 30px · 40px · 50px · 60px · 80px`

Standard card padding: `24px`. Section gutter: `3%` on small viewports.

### Responsive Breakpoints

| Name | Value |
|------|-------|
| Mobile (small) | `max-width: 479px` |
| Mobile | `max-width: 767px` |
| Tablet | `max-width: 991px` |
| Desktop | `min-width: 1280px` |
| Large desktop | `min-width: 1440px` |
| Wide | `min-width: 1920px` |

---

## 5. Components

### 5.1 Announcement Banner

**Structure:** Full-width single-row strip pinned above the header.  
**Style:** `background-color: var(--dash)` (#f88c30 orange), white text, centred. Font: Montserrat 14px.  
**Behaviour:** Always visible on page load, no dismiss button on the reference site.  
**Content:** Short CTA text + link (e.g. "Register for our free webinar →").

---

### 5.2 Header / Navigation Bar

**Structure:** Sticky header. Logo left, nav centre, CTA right.  
**Logo:** Black SVG, padding-right 20px, height ~40px.  
**Nav links:** `.nav-link` — Montserrat 16px, weight 500, colour `#000`, no underline. Active/hover: colour shifts to `var(--dash)`.  
**Mega-menu dropdown:** `background: #fafafa`, border-radius none, box-shadow. Each dropdown item: SVG icon (24–32px) + bold title + 1-line description. Z-index 25.  
**Primary CTA:** `.primary-cta` pill button — `background: var(--dash)`, border-radius 100px, padding 20px 26px, white text, Montserrat 14px weight 600, box-shadow `0 3px 3px #00000012`.

---

### 5.3 Hero Banner

**Structure:** Split layout — text left (`.75fr`), image grid right (`1fr`).  
**Background:** White (`#fff`).  
**H1:** `.hero-h1` — Montserrat 65px, weight 700, line-height 1, letter-spacing -1px, colour `var(--dashboard)` = `#313131`.  
**Sub-paragraph:** `.hero-paragraph` — Montserrat 21px, weight 400, line-height 29px, colour `#535e74`.  
**CTA row:** Two buttons side by side — primary filled (orange), secondary outlined.  
**Image grid:** `.hero-image-grid` — 3 columns, column-gap 9vw, row-gap 3vw. Images have `border: 2px solid var(--dash)`, border-radius 8px, transform scale(1.3) for a slight bleed effect.  
**Section padding-bottom:** `3em 0% 6em 5%` on `.is--hero`.

---

### 5.4 Service Cards

**Structure:** Grid of 3 cards (Visa Service, Job Seeker Service, Job Portal).  
**Card style:** `.link-card` — background `var(--mint-cream)` (#f9fafc), border 1.3px orange, border-radius 5px, box-shadow `0 2px 5px #bbc6cf`, min-height 12vw, flex column, text-align centre.  
**Card title:** Montserrat 20px, weight 700, colour `#1b2d45`.  
**Card description:** `.card-paragraph` — `.9rem` ≈ 14px, weight 300, line-height 1.5, opacity 0.9.  
**Card icon:** Illustrated SVG, top-centred, ~60–80px.  
**Card CTA:** `.card-button` — `background: var(--dash)`, border-radius 5px, padding 10px 20px, white text 15px weight 500, box-shadow `0 10px 20px -3px #1d01501a`.

---

### 5.5 Feature / Fusion Block

**Structure:** A 3-column grid (`.fusion-grid`) of feature tiles.  
**Tile style:** `.fusion-grid-block` — background `#f9fafb`, border 1.4px transparent (highlighted on hover), border-radius 10px, padding 24px, flex row (icon left, text right). Transition: `all .2s`.  
**Title:** `.fusion-grid-title` — Montserrat 20px, weight 700, line-height 22px, colour `#1b2d45`, margin-bottom 8px.  
**Grid gap:** `30px` column.

---

### 5.6 Team / Quality Pillars

**Structure:** 4-item row (Qualified, Experienced, NZ Focused, Local). Each item: illustrated icon + heading + short paragraph.  
**Icon style:** Custom SVG illustrations, full-colour, ~80px.  
**Heading:** Montserrat ~22px, weight 700.  
**Body:** Inter 16px, weight 400, colour `var(--dim-grey)` (#737373).

---

### 5.7 Client-Segment Cards

**Structure:** 4 cards in a 2×2 grid. Target audiences (Skilled Migrants, Retirees, Investors, Employers).  
**Style:** `.card-block` — white background, border-radius 3px, box-shadow `0 2px 5px #bbc6cf`, flex row, width ~49.1%, min-height auto, padding `4vh` top and bottom. Illustration left, text right.

---

### 5.8 Testimonial Section

**Structure:** `.testimonial-section` — dark blue background `var(--matapouri-bay)` (#0d4292), padding `50px 3%`, flex column centred, `overflow: hidden`.  
**Testimonial wrapper:** `.testimonials-wrapper` — white background, border-radius 8px, max-width 940px, margin auto, padding `40px`, box-shadow `1px 0 26px 3px #c9c9c9`. Contains a Webflow slider.  
**Quote card:** `.quote-card-large` — border 1px `#edeff2`, border-radius 12px, padding 20px, text-align centre, flex column. Transition: `box-shadow .3s, border-color .3s`.  
**Quote text:** Inter 16px, weight 400, colour `#07090d`.  
**Reviewer name:** Montserrat 14px, weight 600, colour `var(--dim-grey)`.  
**Section heading:** White text on dark-blue background, Montserrat 32px, weight 700.  
**Slider navigation:** Webflow's built-in dot navigation, white dots.

---

### 5.9 Process Steps ("How to Start")

**Structure:** Numbered step list, 3 steps stacked vertically or in a row.  
**Step number:** Large display numeral, `var(--dash)` orange, Montserrat ~50px, weight 700.  
**Step title:** Montserrat 22px, weight 700.  
**Step description:** Inter 16px, weight 400, line-height 1.5, max-width ~75ch.

---

### 5.10 CTA Sections

Three button variants are defined:

**Primary CTA (`.primary-cta`):**  
- Background: `var(--dash)` (#f88c30)  
- Border-radius: `100px` (pill shape)  
- Padding: `20px 26px`  
- Text: white, Montserrat 16px, weight 600  
- Box-shadow: `0 3px 3px #00000012`

**Shadow CTA (`.shadow-cta-button`):**  
- Background: `var(--dash)` (#f88c30)  
- Border-radius: `4px`  
- Padding: `16px 35px`  
- Text: white, Montserrat 16px, line-height 26px  
- Transitions: `color .2s, box-shadow .2s, background-color .2s, transform .4s`

**Outline dark (`.btn-outline-dark`):**  
- Background: `rgba(255,255,255,0.1)`  
- Border: `1px solid rgba(255,255,255,0.2)`  
- Same transitions as above

**Outline light (`.btn-outline-light`):**  
- Background: transparent  
- Border: `1px solid rgba(17,18,18,0.05)`  
- Text: `#111212`

---

### 5.11 FAQ / Accordion

**Structure:** `.faq-wrap` — full-width, flex column. Each item has a question bar and collapsible answer.  
**Question bar:** `.faq-question-bar-5` — Montserrat 16px, border `3px solid #ff8c21` (orange), border-radius 20px, padding `10px 25px`, flex row, box-shadow `7px 7px 60px #f2f3f6`. Colour: `#000`.  
**Answer content:** `.faq-content` — overflow hidden (animated expand/collapse). Max-width `80ch`.  
**Two-column layout option:** `.grid-faq` — `1fr 1fr` grid, column-gap 60px, row-gap 49px.

---

### 5.12 Breadcrumbs

Displayed on inner pages. Home icon (SVG) > separator `>` > section > page. Font: Montserrat 14px, colour `var(--dim-grey)`. No background.

---

### 5.13 News / Blog Cards

**Structure:** Card with top image, category tag, title, excerpt, date.  
**Style:** White background, border-radius 10px, box-shadow `0 2px 5px #bbc6cf`.  
**Category tag:** `.news-tag-title` — white text, uppercase, letter-spacing 1.2px, border-radius 5px, padding `4px 10px`, font-size 12px, weight 700.  
**Heading:** `.news-block-heading` — 22px, weight 700, line-height 1.2.

---

### 5.14 Forms

**Input fields:** Standard Webflow inputs — border `1px solid #ccc`, padding ~`8px 12px`, font-size 14px. Focus ring: `0 0 3px 1px #3898ec`.  
**Labels:** `.w-form-label` — weight 400, cursor pointer.  
**Success state:** `.w-form-done` — background `#ddd`, padding 20px, text centred.  
**Error state:** `.w-form-fail` — background `#ffdede`, padding 10px, margin-top 10px.  
**Submit button:** Uses `.shadow-cta-button` or `.primary-cta` styles.

---

## 6. Imagery & Iconography

### Photography Style

- **New Zealand landscape photography** — dramatic, saturated scenics (Abel Tasman, Wellington, Otago). Used as hero backgrounds and section background images.
- **Professional/lifestyle** — people working, meeting, hands on documents. Warm and approachable.
- **Team photos** — professional headshots with branch location tags.
- **Format:** WebP and AVIF used for performance; PNG for illustrations; SVG for icons and logo.
- **Image treatment:** Most photos are full-bleed with no filter overlay. Some hero backgrounds use a subtle dark gradient overlay for text legibility.

### Iconography

- **Style:** Custom illustrated SVG icons. Generally flat with 2–3 colours. Each service (Visa, Job, Investment, Employer) has a dedicated full-colour SVG illustration (~80–120px).
- **Line icons** (smaller, ~24px): Used in mega-menu cards and feature lists. Simple, single-colour.
- **Green tick / checkmark:** `front4greentick.svg` — used as a list bullet for feature lists.
- **Eco/sustainability SVGs** (`ecology-green-svgrepo-com.svg`, `ecology-industry-svgrepo-com.svg`) used in investment section.
- No icon font — all icons are SVG files hosted on Webflow CDN.

---

## 7. Improvements to Recommend

The following issues were observed on the reference site. NZIC's rebuild should address all of them.

### Accessibility

1. **Missing alt text** — many images have empty `alt=""`. Every meaningful image must have descriptive alt text.
2. **Low colour contrast** — `var(--dim-grey)` (#737373) on white fails WCAG AA at small text sizes. Use `#595959` or darker.
3. **Announcement bar has no dismiss control** — users cannot close it. Add an ✕ button with `aria-label="Close announcement"`.
4. **Focus states** — the site's focus ring relies on Webflow's default `:focus` which is often invisible. Add a visible `outline: 2px solid var(--dash)` with `outline-offset: 2px` on all interactive elements.
5. **FAQ accordion** — the expand/collapse should use `aria-expanded` and `aria-controls` on the trigger button.

### Mobile Usability

6. **Mega-menu on touch** — the desktop mega-menu works poorly on mobile. The reference site collapses to a burger menu but the mega-menu hierarchy is deep. Use an accordion-style mobile nav with clear back arrows.
7. **Hero text overflows on small screens** — the 65px H1 must scale down aggressively. Use `clamp(2rem, 6vw, 65px)` instead of fixed px.
8. **Card min-widths break layout** — several cards have `min-width: 750px` or `min-width: 400px` which causes horizontal scroll on mobile. Remove fixed min-widths and use percentage or `min(100%, 400px)`.
9. **Footer links at 18px with generous padding** — good, but social icons are only 55px×55px tap target — keep at ≥44px.

### Content & Trust Signals

10. **No visible phone number** — international migrants want a direct phone number prominently displayed. Add to header on desktop and to footer on all sizes.
11. **No trust badges** — the IAA (Immigration Advisers Authority) licence badge and registration number should appear in the header or footer, not buried in body text.
12. **Statistics not highlighted** — "35+ years experience" and "Since 1995" are mentioned in body copy but never displayed as prominent stat blocks. Surface these as a stat strip (e.g. "35 Years | 1000+ Clients | 4.9★ Rating").
13. **Testimonials lack structure** — reviewer names are initials only (e.g. "K.J"). Full first name + country of origin increases credibility.
14. **No review platform integration** — no visible Google Reviews badge or Trustpilot widget. Add an embedded rating widget near testimonials.

### Design & Patterns

15. **Inconsistent border-radius** — the site uses 3px, 5px, 8px, 10px, 15px, 20px, 100px within similar components. Standardise to 3–4 values: `4px`, `8px`, `16px`, `9999px` (pill).
16. **Button variants are inconsistent** — `.btn`, `.shadow-cta-button`, `.primary-cta`, `.card-button` all look similar but have different padding, radius, and shadow. Define 3 canonical variants (primary, secondary, ghost) and use them everywhere.
17. **Colour token naming** — `--dash`, `--matapouri-bay`, `--bgdashboard`, `--mint-cream` are obscure. Rename tokens to semantic names (`--color-primary`, `--color-surface`, etc.) for maintainability.
18. **No loading/skeleton states** — job board and portal pages load content dynamically but show nothing during load. Add skeleton loaders.
19. **No dark mode** — not strictly required, but modern users expect it. At minimum, ensure no hard-coded background colours block a future dark-mode implementation.
20. **Announcement banner colour is not distinguishable from primary CTA** — both are `#f88c30`. Use a slightly darker shade (`#d97720`) for the banner so the CTA buttons stand out.

---

## 8. Design Tokens — CSS Custom Properties

Ready-to-use CSS custom properties table. These replace the reference site's inconsistently named tokens with semantic names.

```css
/* ============================================================
   NZIC Design Tokens
   Usage: import this block into your :root stylesheet
   ============================================================ */

:root {
  /* --- Brand Colours --- */
  --color-primary:          #f88c30;   /* Orange — main CTAs, highlights */
  --color-primary-dark:     #d97720;   /* Darker orange — hover states, announcement bar */
  --color-primary-light:    #ffa54e;   /* Lighter orange — hover on dark backgrounds */
  --color-primary-subtle:   #ff8c2129; /* 16% alpha orange — tinted backgrounds */

  --color-secondary:        #0d4292;   /* Deep navy blue — testimonial bg, section accents */
  --color-secondary-dark:   #0a3275;   /* Darker navy — hover on blue elements */
  --color-secondary-light:  #2073ef;   /* Medium blue — interactive links */

  --color-success:          #059136;   /* Green — positive indicators */
  --color-error:            #ca5733;   /* Rust/terracotta — errors, warnings */

  /* --- Neutrals --- */
  --color-text:             #171520;   /* Primary body text */
  --color-text-secondary:   #595959;   /* Secondary text (accessible on white, AA compliant) */
  --color-text-muted:       #737373;   /* Muted text — only use at 18px+ or weight 700+ */
  --color-text-disabled:    #b9b9b9;   /* Disabled / placeholder */
  --color-text-inverse:     #ffffff;   /* Text on dark backgrounds */

  --color-heading:          #313131;   /* Dark heading colour */
  --color-heading-dark:     #160b00;   /* Near-black for high-contrast headings */

  /* --- Backgrounds --- */
  --color-bg:               #ffffff;   /* Page background */
  --color-bg-subtle:        #f6fafd;   /* Section alternate background (pale blue-white) */
  --color-bg-muted:         #f9fafc;   /* Card background */
  --color-bg-dark:          #0d4292;   /* Dark section background (blue) */
  --color-bg-darkest:       #313131;   /* Darkest background */

  /* --- Borders --- */
  --color-border:           #bbc6cf;   /* Default border */
  --color-border-subtle:    #e4e5e6;   /* Subtle dividers */
  --color-border-strong:    #d6dbe2;   /* Card/input borders */

  /* --- Overlays --- */
  --color-overlay-dark:     rgba(0, 0, 0, 0.5);
  --color-overlay-light:    rgba(255, 255, 255, 0.1);

  /* ============================================================ */

  /* --- Typography --- */
  --font-heading:           'Montserrat', sans-serif;
  --font-body:              'Inter', sans-serif;
  --font-mono:              'Courier New', Courier, monospace;

  /* --- Font Sizes --- */
  --text-xs:                12px;
  --text-sm:                14px;
  --text-base:              16px;
  --text-lg:                18px;
  --text-xl:                20px;
  --text-2xl:               24px;
  --text-3xl:               30px;
  --text-4xl:               clamp(2rem, 4vw, 40px);
  --text-5xl:               clamp(2.5rem, 5vw, 50px);
  --text-hero:              clamp(2.5rem, 6vw, 65px);

  /* --- Font Weights --- */
  --font-light:             300;
  --font-regular:           400;
  --font-medium:            500;
  --font-semibold:          600;
  --font-bold:              700;
  --font-extrabold:         800;

  /* --- Line Heights --- */
  --leading-tight:          1.1;
  --leading-snug:           1.2;
  --leading-normal:         1.3;
  --leading-relaxed:        1.5;

  /* --- Letter Spacing --- */
  --tracking-tight:         -1px;
  --tracking-normal:        0;
  --tracking-wide:          1px;
  --tracking-wider:         2px;

  /* ============================================================ */

  /* --- Layout --- */
  --max-width:              1200px;    /* Primary container */
  --max-width-content:      940px;     /* Standard content block */
  --max-width-narrow:       80ch;      /* Reading text */
  --max-width-tight:        540px;     /* Modals, narrow forms */

  /* --- Spacing Scale --- */
  --space-1:                4px;
  --space-2:                8px;
  --space-3:                12px;
  --space-4:                16px;
  --space-5:                20px;
  --space-6:                24px;
  --space-8:                32px;
  --space-10:               40px;
  --space-12:               48px;
  --space-16:               64px;
  --space-20:               80px;

  /* --- Section Padding --- */
  --section-padding-y:      80px;
  --section-padding-x:      3%;
  --section-padding:        var(--section-padding-y) var(--section-padding-x);

  /* --- Grid --- */
  --grid-gap:               16px;
  --grid-gap-lg:            30px;
  --grid-gap-xl:            40px;

  /* ============================================================ */

  /* --- Border Radius --- */
  --radius-sm:              4px;
  --radius-md:              8px;
  --radius-lg:              16px;
  --radius-xl:              20px;
  --radius-pill:            9999px;

  /* --- Shadows --- */
  --shadow-sm:              0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md:              0 2px 5px #bbc6cf;
  --shadow-lg:              0 20px 30px -10px rgba(29, 1, 80, 0.1);
  --shadow-card:            0 2px 5px #bbc6cf;
  --shadow-cta:             0 3px 3px rgba(0, 0, 0, 0.07);
  --shadow-elevated:        0 10px 20px -3px rgba(29, 1, 80, 0.1);

  /* --- Transitions --- */
  --transition-fast:        0.2s ease;
  --transition-base:        0.3s ease;
  --transition-slow:        0.4s ease;
  --transition-button:      color 0.2s, box-shadow 0.2s, background-color 0.2s, transform 0.4s;

  /* --- Z-Index Scale --- */
  --z-below:               -1;
  --z-base:                 0;
  --z-raised:               10;
  --z-dropdown:             25;
  --z-sticky:               100;
  --z-modal:                200;
  --z-toast:                300;
}
```

---

## 9. Component Quick Reference

```
Announcement Bar:   full-width · bg --color-primary-dark · white text · 14px · no dismiss
Header:             sticky · white bg · max-width none · z-index 100
  Logo:             SVG black · ~40px height
  Nav link:         Montserrat 16px 500 · #000 · hover --color-primary
  Primary CTA:      pill radius · --color-primary bg · 20px 26px padding · white 16px 600
Hero:               split .75fr/1fr · white bg · H1 clamp(2.5rem,6vw,65px) · --color-heading
Service card:       --color-bg-muted bg · 5px radius · --shadow-card · 24px padding · 3-col grid
Feature tile:       #f9fafb bg · 10px radius · 24px padding · flex row (icon+text) · hover border
Testimonial band:   --color-secondary bg · slider inside white card · max-width 940px
FAQ accordion:      orange border 3px · 20px radius · 25px 10px padding · collapsible
CTA section:        centred · --color-primary button · max-width 940px · 30px 60px padding
Footer:             white bg · 2-row · Montserrat 18px 400 links · minimal
```

---

*Document generated by reverse-engineering https://www.new-zealand-immigration.com/ on 2026-11-09. CSS values extracted directly from `nzic.webflow.shared.978e4aeb1.min.css`. Values marked "(approx)" were estimated from visual inspection.*
