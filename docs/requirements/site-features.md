# Site Features and Content

**Status:** draft
**Last updated:** 2026-11-09

> Companion to `docs/requirements/digital-infrastructure.md` (REQ-001 to REQ-015). That document owns hosting, CI/CD, HTTPS, analytics, cookie consent, sitemap/robots, base meta tags, and form *delivery* plumbing. This document owns what pages exist, what they say, and what visitors can do on them. Where the two overlap, this document references the infrastructure REQ rather than restating it.
>
> **Source of this spec:** a reverse-engineering pass over https://www.new-zealand-immigration.com/ on 2026-11-09 (homepage plus about 25 interior pages sampled). Anything marked **[Proposed]** is an improvement suggested by the requirements agent. It is an assumption until the owner agrees to it (see "What is the user's and what is assumed" at the end).

## Goal

Someone outside New Zealand who is thinking about migrating can find out which visa pathway might fit them, understand the job-hunting reality (the "Catch-22": no visa without a job, no job without a visa), and take a low-commitment next step: a free assessment, a webinar, or a consultation. New Zealand employers can find migrant candidates and get help with accreditation. NZIC's site should offer everything the reference site does. It should also fix the reference site's defects: placeholder text, broken links, inconsistent facts, weak licence display, and thin privacy disclosures. Content should be easier to trust and easier to keep current.

## Users

**Primary user:** an internationally trained professional (often an engineer, health professional, or teacher, roughly 25 to 55 years old) living outside NZ who wants residence through the Skilled Migrant Category and needs both visa advice and job-search help. They usually arrive from Google, mostly on mobile, and are in a different time zone.

Secondary users:
- **Partners and family migrants** who want to join a partner or adult child in NZ.
- **Retirees and investors** with significant capital (NZD 750k to 15M+) who want Temporary Retirement, Parent Retirement, Active Investor Plus, or Business Investor visas.
- **NZ employers and recruiters** who want to hire a migrant, find a candidate, list a job, or become accredited.
- **NZIC staff** who maintain listings, testimonials, news, and policy content.

## Reference site audit (2026-11-09)

### Site map

| Area | Reference URL(s) | Purpose and features observed |
|---|---|---|
| Global header | all pages | Webinar announcement banner. Top nav: Visa Service, Job Seekers, Job Portal, Employers, About, plus a placeholder "Link" pointing to `#`. Mega-menus for Visas, Jobs, Invest, Employ, About, each with "VIEW ALL". "Free Assessment" button. |
| Global footer | all pages | Logo, Privacy Policy, Disclaimer, Contact us, LinkedIn, Instagram, copyright line. |
| Homepage | `/` | Hero ("Kia Ora", "Bespoke Immigration Services since 1995") with an auto slideshow and two CTAs (Free Assessment, Find a Job). Three service cards (Visa Service with IAA badge and one adviser's licence, Job Seeker Service, Job Portal). Fusion/Catch-22 block. Four value tiles (Qualified, Experienced 35+ yrs, NZ Focused, Local). Four client-type cards. Seven testimonials. "How to start" (Assessment, Webinar, No strings attached). Closing CTA. |
| Free Assessment | `/free-assessment` | Long single-page intake form (fields listed under REQ-300 onward). Optional CV upload of 10 MB or less. Privacy statement. No consent checkbox, no required-field markers. |
| Consultation request | `/request-a-consultation-with-our-principal-licensed-immigration-adviser-dr-carsten-hallwass` | Form with Name, Email, Message. NZIC emails back to arrange a time. No price, duration, or calendar. |
| Webinar | `/our-immigration-and-job-hunt-webinar` | Describes two sessions a week across time zones (no dates shown), agenda, presenters, a 9-question FAQ, and testimonials. The "register" button goes to Free Assessment. |
| Contact | `/about/contact-us` | Email only (mailto links with prefilled subjects). Nelson and Wellington offices with addresses and hours, labelled "NZDT". FAQ (fees, savings, licensing, DIY). Testimonials. No form, map, or public phone. |
| About: Who we are | `/about/who-we-are` | History (founded 1994, job search 2007, job portal 2022, Wellington 2018), mission, strengths, 11 team profiles (3 or 4 with IAA licence numbers), value tiles, testimonials, FAQ. |
| About: Fusion service | `/about/our-fusion-service` | Explains the Catch-22 and the combined visa plus job-search service and its responsibilities. |
| About: Happy clients | `/about/happy-clients` | 100+ text testimonials, many duplicated, with inconsistent attribution formats. No filtering. |
| About index | `/about/about` | "View all" hub. |
| Visa hub | `/visa/visa` | About 30 linked visa articles, grouped Resident / Temporary / FAQ (Character, Health, Citizenship, Rights). Icon cards. No search. |
| Visa service | `/visa/our-visa-service` | Licence statement. "What is your plan?" selector (Work, Business + Invest, Retire, Join Family, Join Partner). 8-step process. Principal's quote. Testimonials. About 15 blocks of leftover placeholder text. |
| Visa policy pages | `/visa/skilled-migrant-category`, `/visa/the-green-list`, `/visa/pathways-to-residence-in-new-zealand`, `/visa/skilled-migrant-residence-pathway`, `/visa/partnership-visas`, `/visa/parent-resident-visa`, `/visa/your-visa-and-catch-22`, `/visa/visa-types`, `/visa/accredited-employer-work-visa-aewv`, `/visas/*` (about 20 articles) | Long-form guides. The SMC page has a static points table (no calculator) and states the age limit three different ways. |
| Processing times | `/visa/processing-times` | Static table of 8 visa types "as of late 2025/early 2026". No source link, no update date. |
| Visa FAQs | `/visa/visa-faqs` | Accordion with tabs Visas / Pricing / Hosting / Visa Types. Pricing and Hosting contain lorem ipsum. |
| Retirement | `/retirement-in-new-zealand/retirement-in-nz` | 7 visa options with NZD thresholds table. |
| Jobs hub | `/job-search/job-search` | About 22 articles and 12 FAQ articles. URLs are split between `/job-search/` and `/jobs-search/`. |
| Job seeker service | `/job-search/our-job-search-service` | Long-form service description, job-market facts (70 to 75% of roles unadvertised), testimonials, an AI section. |
| Profession pages | `/job-search/move-to-new-zealand-as-an-engineer`, `/job-search/move-to-new-zealand-as-a-doctor` | Profession-specific job search content. |
| Job portal overview | `/job-search/job-board` | Explains the Job Board and Talent Pool. |
| Job board | `/job-search/browse-jobs`, `/jobs/<slug>` | 10 per page, Next link and "Show more". Card shows title (location sometimes embedded), sector, summary, employer. Filter by about 40 sectors. The detail page has no apply flow: a popup sends visitors to Free Assessment, and an "Enquire" form takes name, email, CV, and message. Leftover "Enquire about Dental Jobs" label. |
| Talent pool | `/job-search/browse-candidates`, `/job-seeker/<slug>` | 10 per page. Card shows sector tags, occupation, years of experience. Filter by about 45 sectors. The profile shows the candidate's **full name**. An "Interested in this candidate?" form takes name, company, role, email, phone, candidate ID, accredited (Y/N), and message. |
| List your job | `/job-search/list-your-job` | Free. Multi-section employer form (quick listing via URL, about you, role, business (industry, size, accredited), JD upload of 10 MB or less, interest in a specific candidate ID). |
| Employers | `/job-search/accredited-employers` | Services for employers. Three-step process (Accreditation, Job Check, AEWV). Links to Talent Pool and List a Job. |
| Invest | `/investment/investment`, `/investment/investor-and-business-visas`, `/investment/businesses-and-investments-in-new-zealand`, `/investment/acceptable-investments`, `/investment/why-invest-in-nz` | AIP and Business Investor pathways. Two "curated opportunity" listings. A disclaimer saying NZIC is not a real-estate agent and gives no investment advice. |
| News | `/news`, `/news/<slug>`, `/news-tags/<tag>` | 4 posts plus a featured post. Tags. Dates shown without year. "Under construction" notice. No newsletter. |
| Legal | `/privacy-policy`, `/disclaimer` | Privacy policy updated Jan 2026, with no retention period, rights, privacy officer, or named tools. Disclaimer says "general information, not advice" and has no IAA or complaints content. |

### Defects and inconsistencies on the reference site (the basis for "improve")

1. Leftover template text: "This is some text inside of a div block." (visa service page, visa FAQ) and lorem ipsum (FAQ Pricing/Hosting tabs).
2. Broken or wrong navigation: a "Link" item points to `#`. The Employ menu's "VIEW ALL" goes to the Invest index.
3. URL hygiene: mixed `/job-search/` and `/jobs-search/`, the slug `vistor-visa`, the breadcrumb "Self Asessment", random candidate slugs (`teacher-uuq8k`), and three overlapping Green List pages.
4. Contradictory facts: founded "1994" (About) vs "since 1995" (hero). The SMC age limit is given as "55 or younger", "under 56", and "56 or older has reached the limit".
5. Office hours labelled "NZDT" year-round, although NZ is on NZST from April to September.
6. The IAA badge on the homepage names only one adviser, while the About page lists three or four licensed advisers. IAA guidance says the names and licence numbers of licensed advisers must appear next to the trade mark (see Sources).
7. Testimonials duplicated many times. Several different testimonials link to the same two Google Maps URLs.
8. Free Assessment: no consent checkbox, no required-field markers, a stray "Another option" in the qualification list, and different qualification lists for applicant and partner.
9. Job detail pages: no structured location, salary, posted date, or closing date. Applicants must paste the job URL into a separate form.
10. Talent pool shows candidates' full names with no visible consent statement. One profile has an empty "Industry" field.
11. Webinar page lists no dates or times, and its "register" button goes to the Free Assessment.
12. Consultation page gives no fee, duration, or format.
13. News shows dates without the year and displays an "Under construction" notice.
14. Processing times and policy thresholds give no source link or "last reviewed" date.
15. Privacy policy omits retention, access and correction rights, a privacy officer, and named third-party tools.

## In scope

Everything below is a page or feature the reference site has, unless it is marked **[Proposed]**.

- Global header (announcement banner, mega-menu nav, Free Assessment CTA), footer, breadcrumbs, 404 page
- Homepage
- Free Assessment form
- Consultation request page and form
- Webinar information page
- Contact page
- About section: Who we are (history, team, licences), Fusion service, Happy clients (testimonials), About index
- Visa section: hub, Visa service page, policy guides (SMC, Green List, pathways, partnership, parent, AEWV, visa types, `/visas/*` articles), processing times, visa FAQs
- Retirement page
- Jobs section: hub, Job seeker service, profession pages (engineers, health), job-search articles and FAQs
- Job portal: overview, Job Board (list, sector filter, detail, enquiry form), Talent Pool (list, sector filter, profile, employer interest form), List-your-job form
- Employers page
- Invest section: hub, investor and business visas, curated opportunities (list and detail), acceptable investments, why invest
- News: list, post, tag pages
- Privacy Policy and Disclaimer *content* (page existence and footer links are infrastructure REQ-015)
- IAA licence display across the site
- **[Proposed]** "Last reviewed" dates and official-source links on policy pages
- **[Proposed]** Consent capture on forms that collect personal data

## Out of scope

- User accounts, logins, or candidate/employer self-service dashboards (the reference site has none; listings are curated by NZIC staff)
- Online payment for consultations or services (pending OQ-010)
- Multilingual content (already deferred in the infrastructure doc)
- Any integration with Immigration New Zealand, NZQA, or IAA systems beyond plain hyperlinks
- An interactive visa-eligibility quiz or SMC points calculator, until OQ-011 is decided. The points guide stays a static table.
- Live chat or AI chatbot
- Applicant tracking or CRM functionality. Form submissions go to email (infrastructure REQ-008).
- Hosting webinars (the site only describes them and routes people to registration)
- Writing new long-form policy articles beyond those the reference site has (pending OQ-017)
- Infrastructure concerns: hosting, CI, analytics, cookie banner, sitemap, base SEO tags (see `digital-infrastructure.md`)

## User stories

- As a skilled professional abroad, I want to submit my details once and hear from a licensed adviser whether I might qualify, so that I don't pay for advice before knowing if migration is realistic.
- As a skilled professional abroad, I want to read the SMC points rules and see when they were last checked, so that I can trust the figures.
- As a job seeker, I want to browse NZ roles in my sector and enquire about one without retyping the job details, so that I can show interest quickly.
- As a prospective client, I want to confirm that the adviser is genuinely licensed, so that I'm not dealing with an unlicensed operator.
- As a prospective client in another time zone, I want to see when the webinar runs and when the office is open in my local time, so that I can attend or call at the right time.
- As a retiree or investor, I want the financial thresholds for each visa in one place, so that I can see which options are within reach.
- As an NZ employer, I want to filter candidates by sector and register interest in one by ID, so that NZIC can introduce us.
- As an NZ employer, I want to list a vacancy for free and say whether I'm accredited, so that NZIC can advise on next steps.
- As a job-seeking client in the Talent Pool, I want my profile to show my skills but not my identity unless I agree, so that my current employer doesn't find out.
- As NZIC staff, I want to add or remove a job, candidate, testimonial, or news post without editing page layouts, so that listings stay current.

## Acceptance criteria

Numbering starts at REQ-100 to avoid clashing with the infrastructure doc (REQ-001 to REQ-015). Gaps between blocks leave room for additions.

### Global navigation and layout (REQ-100 to REQ-119)

- **REQ-100** — Given any page, when it loads, then the header shows top-level navigation for Visas, Jobs, Invest, Employers, and About, plus a "Free Assessment" button linking to the Free Assessment page.
- **REQ-101** — Given any navigation menu (header, mega-menu, mobile menu, footer), when every link in it is followed, then each link opens a real page on the site or a named external profile. No link points to `#` or returns a 404.
- **REQ-102** — Given the Employers mega-menu, when its "View all" link is followed, then it opens an employer-focused page, not the Invest index.
- **REQ-103** — Given a desktop browser and keyboard only, when the user tabs to a top-level menu item and presses Enter or Space, then its sub-menu opens. Pressing Escape closes it and returns focus to the menu item.
- **REQ-104** — Given a viewport 360 px wide, when the user opens the mobile menu, then every link in the desktop mega-menus can be reached without horizontal scrolling.
- **REQ-105** — Given any page, when it loads, then a site-wide announcement banner is shown whose text and link destination NZIC staff can change without editing page templates. At launch it promotes the webinar, as on the reference site.
- **REQ-106** — Given any page other than the homepage, when it loads, then a breadcrumb trail shows the path from Home to the current page, and every breadcrumb label is spelled correctly.
- **REQ-107** — Given any page, when the footer is inspected, then it contains links to the Disclaimer, Contact page, LinkedIn, and Instagram, plus a copyright line showing the current calendar year. (Privacy Policy and Terms links are covered by infrastructure REQ-015.)
- **REQ-108** — Given every published page, when its visible text is searched, then the strings "lorem ipsum", "This is some text inside of a div block", and "Under construction" do not appear.
- **REQ-109** — Given a URL that does not exist on the site, when it is requested, then a custom "page not found" page is shown with links to the homepage, Free Assessment, and Contact.
- **REQ-110** — Given any two pages that state the same fact (founding year, years of experience, SMC age limit, number of offices), when they are compared, then the fact is stated identically. Content checklist in "Content and data".
- **REQ-111** — Given all published page URLs, when they are listed, then each section uses a single path prefix (for example, no mix of `/job-search/` and `/jobs-search/`), and no slug contains a spelling error or a random suffix.

### IAA licensing and trust (REQ-120 to REQ-129)

- **REQ-120** — Given any place where the IAA "Licensed by Immigration Advisers Authority" trade mark appears, when the surrounding area is inspected, then the full name and licence number of every licensed adviser at NZIC appear immediately next to it.
- **REQ-121** — Given any displayed adviser licence number, when it is activated, then it opens that adviser's entry (or a search for it) on the IAA public register in a new tab.
- **REQ-122** — Given the About / Team page, when a visitor reads each staff profile, then the profile states whether that person is a Licensed Immigration Adviser (with licence number) or not. Staff who are not licensed are not described with wording that implies they give immigration advice.
- **REQ-123** — Given any page that names a person's role as "Licensed Immigration Adviser", when it is compared with the IAA public register on the day of review, then that person appears on the register with a current licence.

### Homepage (REQ-130 to REQ-149)

- **REQ-130** — Given the homepage, when it loads, then the first screen shows a main heading, a one-line value statement, and two buttons: "Get your free assessment" (to Free Assessment) and "Find a job in New Zealand" (to the Job Seeker Service page).
- **REQ-131** — Given the homepage hero, if it contains images that change automatically, then a visible pause control stops the movement and the images stop on their own within 5 seconds. **[Proposed: WCAG 2.2.2]**
- **REQ-132** — Given the homepage, when the services section is viewed, then it shows three cards (Visa Service, Job Seeker Service, Job Portal), each linking to its page.
- **REQ-133** — Given the homepage, when the Fusion section is viewed, then it explains the Catch-22 in one or two sentences and links to the Fusion Service page.
- **REQ-134** — Given the homepage, when the "Our Team" section is viewed, then it shows four value statements: Qualified, Experienced, NZ-focused, Local.
- **REQ-135** — Given the homepage, when the "Our Clients" section is viewed, then it shows four cards (Skilled Migrants & Professionals, Investor & Retirement, Partnership & Family, NZ Employers), each linking to the matching page.
- **REQ-136** — Given the homepage, when the testimonials section is viewed, then at least three testimonials are shown, each with an attribution (name or initials) and country, and a link to the full testimonials page.
- **REQ-137** — Given the homepage, when the "How to start" section is viewed, then it offers three routes: Free Assessment, Webinar, and Consultation request, each linking to its page.

### Visa section (REQ-150 to REQ-179)

- **REQ-150** — Given the Visa hub page, when it loads, then it lists every published visa article, grouped under at least "Resident visas", "Temporary visas", and "Guides & FAQs", each with a title linking to the article.
- **REQ-151** — Given the Visa Service page, when the "What is your plan for New Zealand?" selector is viewed, then it offers Work, Business & Invest, Retire, Join Family, and Join Partner, and each opens the most relevant pathway page.
- **REQ-152** — Given the Visa Service page, when the process section is viewed, then the steps appear as an ordered list in this sequence: Immigration strategy; Documents and guidelines; International Qualification Assessment; The Catch-22; Solving the Catch-22; Submission; Processing; Visa outcome.
- **REQ-153** — Given the Skilled Migrant Category page, when the points guide is viewed, then the points table appears as an HTML table with column headers, not as an image.
- **REQ-154** — Given the Skilled Migrant Category page, when the age requirement is searched for, then exactly one age limit is stated, in one consistent form of words.
- **REQ-155** — Given any visa policy, processing-times, retirement, or investor page, when it loads, then it displays a "Last reviewed: <date>" line near the top. **[Proposed]**
- **REQ-156** — Given any page that states a figure set by Immigration New Zealand (points, thresholds, wage rates, processing times, age limits), when the figure is viewed, then a link to the official INZ source for that figure appears in the same section. **[Proposed]**
- **REQ-157** — Given the Processing Times page, when it loads, then it shows a table of visa types and estimated durations, the date the figures were taken, and a link to INZ's official processing-times page.
- **REQ-158** — Given the Visa FAQ page, when a question is activated by mouse, touch, or keyboard (Enter or Space), then its answer expands, and the control's expanded or collapsed state is announced to screen readers.
- **REQ-159** — Given the Visa FAQ page, when its category tabs or headings are listed, then every category contains at least one question with a real answer. No "Hosting" category exists.
- **REQ-160** — Given the reference site's set of visa topics (SMC, Green List, Pathways to Residence, Professionals pathways, Partnership, Parent Resident, AEWV, Visa types, Visitor, Work visas, Residence from Work, Business & Investor residence, Family residence, Relocating Business, Citizenship, Police certificate, Medical waiver, Declined visas, Volunteering, Rights of migrants), when the Visa hub is checked, then each topic NZIC chooses to cover (OQ-017) has exactly one page. There are no duplicate pages for the same topic, such as the Green List.
- **REQ-161** — Given the Retirement page, when it loads, then it shows a table listing each retirement-relevant visa with its investment, settlement-funds, income, and age thresholds in NZD.

### Jobs content (REQ-180 to REQ-199)

- **REQ-180** — Given the Jobs hub, when it loads, then it lists every published job-search article and job-search FAQ, each linking to its page, with no article listed twice.
- **REQ-181** — Given the Job Seeker Service page, when it loads, then it describes the service components (one-on-one strategy sessions, webinars, Job Portal access, Fusion service) and ends with a Free Assessment CTA.
- **REQ-182** — Given the Jobs mega-menu, when it is opened, then it links to profession pages for Engineers and Health Professionals.

### Job Portal: Job Board (REQ-200 to REQ-214)

- **REQ-200** — Given the Job Board page, when it loads, then each job card shows the job title, sector, location (as its own field), employer name, a one-line summary, and a link to the job's detail page.
- **REQ-201** — Given the Job Board page, when a visitor selects a sector filter, then only jobs in that sector are listed, and a "Clear filters" control restores the full list.
- **REQ-202** — Given a sector filter that matches no jobs, when it is applied, then a message states that no jobs match and offers "Clear filters".
- **REQ-203** — Given more than 10 jobs, when the Job Board loads, then 10 are shown, and a control loads or navigates to the next set.
- **REQ-204** — Given a job detail page, when it loads, then it shows title, sector, employer, location, date listed, and full description as separately labelled items.
- **REQ-205** — Given a job detail page, when the visitor opens "Enquire about this job", then a form asks for name, email, an optional CV file, and a message. The job's title or reference is already included in the submission, so the visitor does not have to type or paste it.
- **REQ-206** — Given the job enquiry form, when a CV file larger than 10 MB is selected, then a message next to the field states the 10 MB limit and the form does not submit.
- **REQ-207** — Given a job detail page, when its visible text is read, then no text refers to a different job or sector (for example, no leftover "Enquire about Dental Jobs" on a GIS role).
- **REQ-208** — Given a job NZIC has marked as filled or expired, when the Job Board is viewed, then that job is not listed. **[Proposed; see OQ-005]**

### Job Portal: Talent Pool (REQ-215 to REQ-229)

- **REQ-215** — Given the Talent Pool page, when it loads, then each candidate card shows sector tags, occupation title, years of experience, a candidate ID, and a link to the profile.
- **REQ-216** — Given the Talent Pool page, when a sector filter is selected, then only candidates in that sector are listed, and "Clear filters" restores the full list.
- **REQ-217** — Given a candidate profile, when it loads, then it shows occupation, sector, years of experience, qualifications, and a candidate ID. Every labelled field has a value, or the label is not shown.
- **REQ-218** — Given a candidate profile, when it is viewed by the public, then it does not show the candidate's full name, photo, email, phone, or current employer, unless NZIC has recorded that candidate's written consent to show them. **[Proposed; see OQ-008]**
- **REQ-219** — Given a candidate profile, when an employer opens "Interested in this candidate?", then a form asks for name, company, role, email, phone, "Are you an accredited employer?" (Yes/No), and a message. The candidate ID is pre-filled.
- **REQ-220** — Given the employer-interest form is submitted successfully, when the confirmation appears, then it says a Job Search Specialist will contact the employer about next steps.

### Job Portal: List your job and Employers (REQ-230 to REQ-249)

- **REQ-230** — Given the List-your-job page, when it loads, then it states that listing a job is free.
- **REQ-231** — Given the List-your-job page, when the visitor chooses the quick option ("my job is already advertised online"), then only the job URL, name, business name and role, email, and phone are required.
- **REQ-232** — Given the List-your-job page, when the visitor chooses the full option, then the form collects: name, business name and role, email, phone, job title, description and responsibilities, required qualifications, years of experience and special skills, industry (dropdown), business size (1-5, 6-10, 11-20, 21-50, 50+), accredited employer (Yes/No), optional job description file (10 MB or less), and optional free-text notes.
- **REQ-233** — Given the List-your-job page, when the visitor indicates interest in a specific candidate, then a candidate ID field and a "why this candidate fits" field are shown.
- **REQ-234** — Given the Employers page, when it loads, then it shows the three-step process (Accreditation, Job Check, Accredited Employer Work Visa) in order, and links to the Talent Pool, List-your-job page, and AEWV page.
- **REQ-235** — Given the industry dropdowns on List-your-job, Job Board filter, and Talent Pool filter, when their options are compared, then they use the same list of sectors.

### Invest (REQ-250 to REQ-259)

- **REQ-250** — Given the Investor and Business Visas page, when it loads, then it describes Active Investor Plus (Growth and Balanced) and Business Investor pathways, with the minimum investment for each in NZD.
- **REQ-251** — Given the Curated Opportunities page, when it loads, then each opportunity card shows a title, the visa pathway it aligns with, a short description, and a link to a detail page.
- **REQ-252** — Given the Curated Opportunities list page or any opportunity detail page, when it loads, then a disclaimer is visible without expanding anything. It states that NZIC gives immigration advice only, is not a licensed real-estate agent or financial adviser, does not give investment advice, and recommends independent legal and financial advice.
- **REQ-253** — Given an opportunity detail page, when the visitor wants to enquire, then a link or form leads to a consultation request, with the opportunity's title included automatically.

### About, testimonials, contact, consultation, webinar, news (REQ-260 to REQ-299)

- **REQ-260** — Given the Who We Are page, when it loads, then it shows the company history as dated milestones, the mission, and a profile for each current team member (name, role, qualifications).
- **REQ-261** — Given the Fusion Service page, when it loads, then it explains the Catch-22 and lists, separately, what the Licensed Immigration Adviser does and what the Job Search Consultant does.
- **REQ-262** — Given the Happy Clients page, when all testimonials are compared, then no testimonial text appears more than once.
- **REQ-263** — Given any testimonial, when it is displayed, then it shows the quote, an attribution in one consistent format (for example, "First name + last initial (Country)"), and the service it relates to (Visa, Job Search, Fusion, Employer, Investor, Webinar). **[Proposed: service tag]**
- **REQ-264** — Given any testimonial that links to an external review, when the link is followed, then the linked page contains that testimonial's text or reviewer. Testimonials with no specific source have no link.
- **REQ-265** — Given the Contact page, when it loads, then it shows the general email address, and for each office: name, street address, and opening hours labelled "NZ time" (not "NZDT").
- **REQ-266** — Given the Contact page, when a visitor's browser time zone is not New Zealand, then the office hours are also shown converted to the visitor's local time. **[Proposed]**
- **REQ-267** — Given the Contact page, when a visitor uses the contact form, then it asks for name, email, enquiry type ("I need more information" / "I want to make an appointment"), and message. **[Proposed: replaces mailto-only contact; delivery per infrastructure REQ-008]**
- **REQ-268** — Given each office address on the Contact page, when it is activated, then it opens that address in a map service in a new tab. **[Proposed]**
- **REQ-269** — Given the Consultation Request page, when it loads, then it names the adviser(s) the visitor will meet, the format (video, phone, or in person), the length of the session, and the fee or the fact that it is free. Content depends on OQ-010.
- **REQ-270** — Given the Consultation Request page, when the form is submitted successfully, then a message says NZIC will email within a stated number of business days to arrange a time.
- **REQ-271** — Given the Webinar page, when it loads, then it states how often sessions run, the next scheduled session date(s) and time(s) in NZ time, and who presents. **[Proposed: reference shows no dates]**
- **REQ-272** — Given the Webinar page, when the visitor reads the registration section, then it states exactly how to get a place (direct registration, or invitation after the Free Assessment) and what happens next. Mechanism depends on OQ-009.
- **REQ-273** — Given the Webinar page, when the FAQ is viewed, then it answers at least the nine questions on the reference page (AI applications, qualifying without the Green List, no employer responses, interview difficulty, six points and job offers, English tests, NZQA assessment, travel to NZ, why employers pick migrants), or NZIC's agreed replacements.
- **REQ-274** — Given the News list page, when it loads, then each post card shows category, full date (day, month, and year), title, and summary, newest first.
- **REQ-275** — Given a news tag, when it is selected, then only posts with that tag are listed.
- **REQ-276** — Given the News list has more than 10 posts, when it loads, then 10 are shown with a control to see older posts.

### Free Assessment form (REQ-300 to REQ-329)

- **REQ-300** — Given the Free Assessment page, when it loads, then above the form it explains that the assessment is free, who reviews it (Licensed Immigration Advisers), and what the visitor will get back.
- **REQ-301** — Given the Free Assessment form, when the "About you" section is viewed, then it asks for name, email, age, country of birth (list), and country of current residence (list).
- **REQ-302** — Given the Free Assessment form, when the "Work and qualifications" section is viewed, then it asks for highest qualification (Doctorate; Master's; Postgraduate Diploma/Certificate; Bachelor's; Trade Certificate/Apprenticeship; Other diploma or certificate; None), field of qualification, years of experience, current job title, NZ job offer (Yes/No), LinkedIn profile URL (optional), and CV upload (optional).
- **REQ-303** — Given the visitor answers Yes to "NZ job offer", when the answer is selected, then fields for job title, hours per week, hourly pay, employer accredited (Yes/No/Don't know), and current visa type and expiry appear. When No is selected, those fields are hidden and not submitted.
- **REQ-304** — Given the "English, health and character" section, when it is viewed, then it asks for English ability (None, Basic, Moderate, Fluent, Native) and Yes/No questions on health issues, criminal convictions (anyone included aged 16 or over), and previous visa refusal, denied entry, or deportation. Each Yes reveals a details field.
- **REQ-305** — Given the visitor answers Yes to "partner", when the answer is selected, then fields appear for partner's name, age, NZ citizen or resident status, English ability, highest qualification (same list as REQ-302), qualification name, years of experience, current role, NZ job offer (with the same follow-up fields as REQ-303), and visa type and expiry.
- **REQ-306** — Given the visitor answers Yes to "children included", when the answer is selected, then a field for the children's ages appears.
- **REQ-307** — Given the "Plans for New Zealand" question, when it is viewed, then the visitor can select one or more of: Live permanently; Find a job; Join family or partner; Invest or run a business; Retire in NZ; I am an NZ employer.
- **REQ-308** — Given the form, when it is viewed, then every required field is marked as required in its visible label, and a note explains the marker.
- **REQ-309** — Given a required field is empty or an email is malformed, when the visitor submits, then the form does not submit, an error message naming the problem appears next to each invalid field, and focus moves to the first invalid field.
- **REQ-310** — Given a CV larger than 10 MB, when it is selected, then the message "Max file size is 10 MB" appears next to the upload field and the file is not attached.
- **REQ-311** — Given the form, when the visitor reaches the submit button, then an unticked checkbox asks them to agree that NZIC may use the information to assess their eligibility under the Privacy Policy (linked). The form cannot be submitted until it is ticked. **[Proposed]**
- **REQ-312** — Given the health and criminal-conviction questions, when they are viewed, then a short note explains why the information is asked for and who will see it. **[Proposed]**
- **REQ-313** — Given a successful submission, when the confirmation appears, then it thanks the visitor and states the expected response time and what happens next (for example, a webinar invitation if SMC fits). Content depends on OQ-009.
- **REQ-314** — Given a submission fails (network or service error), when the error appears, then everything the visitor entered is still in the form, so they can retry without retyping.
- **REQ-315** — Given the form is long, when it is displayed, then it is split into labelled steps or sections with a progress indicator showing the current step and total steps. **[Proposed; infrastructure doc future-scope note mentions multi-step]**
- **REQ-316** — Given a successful submission, when two minutes have passed, then the visitor receives an acknowledgement email at the address they entered. **[Proposed; see OQ-006]**

### Legal content (REQ-330 to REQ-339)

- **REQ-330** — Given the Disclaimer page, when it is read, then it states that site content is general information, not immigration advice; that immigration rules change; and that NZIC acts for a person only after a written agreement is signed by both parties.
- **REQ-331** — Given the Privacy Policy, when it is read, then it states what personal information each form collects, why, who it is shared with (including the named form-processing and analytics providers), and in which country those providers store data.
- **REQ-332** — Given the Privacy Policy, when it is read, then it states how long assessment and enquiry submissions are kept.
- **REQ-333** — Given the Privacy Policy, when it is read, then it explains how a person can ask to access or correct their personal information, and names the privacy officer or role with a contact address.
- **REQ-334** — Given the Privacy Policy, when it loads, then a "Last updated" date is shown at the top.
- **REQ-335** — Given the site, when a visitor looks for how to complain about an adviser, then a page or section (reachable from the footer or Contact page) explains NZIC's complaints process and mentions that a complaint can also be made to the IAA. **[Proposed; see OQ-012]**

## Non-functional requirements

Infrastructure-level performance, browser support, HTTPS, analytics, and baseline SEO tags are defined in `digital-infrastructure.md`. Only content- and feature-specific requirements are listed here.

- **Performance:** Inherits infrastructure REQ-005. In addition, the Job Board and Talent Pool sector filters update the list within 300 ms of selection on a mid-range Android phone. **[Proposed]** No page loads a third-party embed (map, video, review widget) until the visitor interacts with it. **[Proposed]**
- **Accessibility:** WCAG 2.2 Level AA for all pages and forms. Specifically: all form fields have visible labels; error messages are linked to their fields and announced; conditional fields (REQ-303 to REQ-306) are announced when revealed; accordions and mega-menus are keyboard-operable; moving content can be paused (REQ-131); text contrast is at least 4.5:1; tables (points, processing times, thresholds) use proper header cells.
- **Browsers/devices:** As infrastructure doc. All forms must be completable on a 360 px-wide phone.
- **SEO (content-specific):** Each policy article has a unique H1 that matches its topic. FAQ pages carry FAQ structured data. Office locations carry LocalBusiness structured data with addresses. News posts carry Article structured data with the published date. JobPosting structured data only if OQ-019 confirms listings meet Google's requirements.
- **Privacy/compliance:**
  - The Free Assessment collects sensitive information (health, criminal history, family details). It must only be sent over HTTPS and only to the destination agreed in OQ-007.
  - Any provider that stores submissions outside NZ must be disclosed in the Privacy Policy (NZ Privacy Act 2020, IPP 12, cross-border disclosure).
  - Talent Pool profiles must not identify candidates without recorded consent (REQ-218).
  - Investment content must carry the disclaimer (REQ-252).
  - IAA trade mark use must follow REQ-120.
- **Content accuracy:** Every page quoting INZ rules has a named NZIC owner and a review date (REQ-155). **[Proposed]** Review cadence: OQ-020.
- **Maintainability:** Jobs, candidates, opportunities, testimonials, news posts, team members, and the announcement banner are each stored as structured content entries (one file or record per item). Staff can add or remove an item without editing layout code. **[Proposed; mechanism depends on OQ-005 and OQ-014]**

## Content and data

| Item | Needed for | Supplier | Status |
|---|---|---|---|
| Business name, logo, brand | Everywhere | Owner | **Blocked by OQ-001 and OQ-002** |
| Licensed advisers' names and IAA licence numbers | REQ-120 to REQ-123 | Owner | Not provided (infrastructure OQ-010) |
| IAA trade mark artwork and permission to use it | REQ-120 | Owner (from IAA) | Not provided |
| Team profiles (name, role, qualifications, photo) | REQ-260 | Owner | Not provided |
| Company history milestones and founding year | REQ-260, REQ-110 | Owner | Not provided (reference site contradicts itself: 1994 vs 1995) |
| Office addresses and hours | REQ-265 | Owner | Not provided |
| Visa policy articles (about 30) | REQ-150 to REQ-161 | Owner / licensed adviser | ✅ May be reused (OQ-001 resolved). Every figure needs re-checking against INZ. |
| Job-search articles (about 22) and FAQs (about 12) | REQ-180 | Owner / job search team | ✅ May be reused (OQ-001 resolved) |
| Job listings | REQ-200 onward | NZIC staff | Ongoing; process undecided (OQ-005) |
| Candidate profiles and consent records | REQ-215 onward | NZIC staff with candidate consent | Undecided (OQ-008) |
| Investment opportunities | REQ-251 onward | Owner | Undecided; legal review advised (OQ-018) |
| Testimonials, with permission to publish | REQ-136, REQ-262 to REQ-264 | Owner | Not provided (OQ-016) |
| Webinar schedule and presenter bios | REQ-271 to REQ-273 | Owner | Not provided (OQ-009) |
| Consultation fee, duration, format | REQ-269 | Owner | Not provided (OQ-010) |
| Sector/industry list (single source) | REQ-235 | Owner | Reference has about 40 to 45 sectors; needs consolidating |
| Privacy Policy, Disclaimer, complaints text | REQ-330 to REQ-335 | Owner / solicitor | Placeholder allowed at launch per infrastructure doc; final text needed |
| News posts | REQ-274 onward | Owner | Not provided |

**Facts that must be stated consistently (REQ-110):** founding year; years of experience; SMC age limit; number and names of offices; number of licensed advisers.

## Open questions

1. **OQ-001 — Relationship to the reference site.** ✅ RESOLVED — This is a rebuild of New Zealand Immigration Concepts Ltd's own site. Existing text, testimonials, team profiles, adviser licence numbers, and other content may be reused with the owner's sign-off. Old URLs should redirect where possible (see OQ-015 for the GitHub Pages redirect constraint).
2. **OQ-002 — Trading name.** Which exact legal or trading name goes in the header, footer, copyright line, and Privacy Policy? **Decision: business owner.**
3. **OQ-003 — Release scope.** Should the first public release include the full site, or a smaller first release (for example: homepage, Free Assessment, visa service, about/team, contact, legal), with the Job Portal, Invest, and News following later? **Decision: business owner.**
4. **OQ-004 — Framework conflict with infrastructure doc.** The latest commit (`703568f`, "Scale back to plain HTML hello world, remove Astro") contradicts infrastructure OQ-006 ("Astro confirmed"). Plain HTML makes about 70 content pages and structured listings (jobs, candidates, news) hard to maintain. Which is current? **Decision: developer / owner. The infrastructure doc should be updated either way.**
5. **OQ-005 — Listing maintenance.** On static GitHub Pages hosting, who adds or removes jobs, candidates, and opportunities, and how (editing files in the repo, a git-based CMS, or a hosted listings service)? How long does a job stay listed? **Decision: owner + developer.**
6. **OQ-006 — Form capabilities.** The Free Assessment, job enquiry, and List-your-job forms need file uploads up to 10 MB and (if REQ-316 is kept) auto-reply emails. Please confirm the chosen form service's plan supports file uploads, the size limit, and auto-responses. **Decision: developer, with owner approval if a paid plan is needed.**
7. **OQ-007 — Sensitive data destination.** Assessment submissions include health and criminal-history details. Is it acceptable for them to pass through a third-party form service (likely US-hosted) and arrive in a personal Gmail inbox (`lino.d.r.miguel@gmail.com`, per infrastructure OQ-003)? Or do they need a business mailbox and an NZ/AU-hosted processor? **Decision: owner, ideally with privacy advice.**
8. **OQ-008 — Talent Pool identity.** Should candidate profiles be anonymised (ID plus skills only), as proposed in REQ-218? Or will candidates give written consent for their names to be shown, as on the reference site? **Decision: owner.**
9. **OQ-009 — Webinar registration.** Is the webinar open registration (if so, which platform: Zoom, Teams, an events tool?) or by invitation after the Free Assessment, as the reference site implies? What are the regular session times? **Decision: owner.**
10. **OQ-010 — Consultation terms.** Is the one-on-one consultation paid? If so, what fee, how long, which format, and is online booking and payment wanted (currently out of scope)? **Decision: owner.**
11. **OQ-011 — Interactive SMC points or eligibility checker.** Should the site have one? It would make the site more useful, but it goes stale whenever INZ changes the rules and could be read as giving immigration advice. **Decision: owner / licensed adviser.**
12. **OQ-012 — IAA obligations on the website.** A licensed adviser should confirm what the Licensed Immigration Advisers Code of Conduct and the IAA Trade Mark Licence Agreement require on the site: trade mark placement, listing of all advisers, and complaints-process wording (REQ-120, REQ-335). **Decision: licensed adviser.**
13. **OQ-013 — Terms of Use vs Disclaimer.** Infrastructure REQ-015 requires a "Terms of Use" page. The reference site has a "Disclaimer" instead. Should there be one page or both? **Decision: owner / solicitor.**
14. **OQ-014 — Content editing by non-developers.** Will non-technical staff edit content? If so, a git-based CMS (for example Decap or TinaCMS) may be needed. That is new scope for the infrastructure doc. **Decision: owner.**
15. **OQ-015 — URL redirects.** Only applies if OQ-001 says this is the same business and the domain will move: must old reference-site URLs redirect to new ones? GitHub Pages cannot do server-side 301 redirects. **Decision: owner + developer.**
16. **OQ-016 — Testimonial permissions.** Do we have permission to publish each testimonial, and should they be linked to Google reviews? **Decision: owner.**
17. **OQ-017 — Article coverage.** Which of the roughly 30 visa articles and 34 job-search articles and FAQs on the reference site should NZIC carry? Who writes or updates them? **Decision: owner / licensed adviser.**
18. **OQ-018 — Investment listings legal review.** Should a solicitor review the curated investment opportunities and disclaimer before publication, given the financial-advice and real-estate rules the reference site disclaims? **Decision: owner.**
19. **OQ-019 — Job listings in Google for Jobs.** Should job listings carry JobPosting structured data? That requires real employer, location, date posted, and closing date data and a genuine application route. **Decision: owner.**
20. **OQ-020 — Content review cadence.** How often must policy pages be re-checked against INZ (for example, quarterly and after every INZ announcement), and who owns each page? **Decision: owner / licensed adviser.**
21. **OQ-021 — Public phone number.** The reference site shows none. Should NZIC publish one (and WhatsApp)? **Decision: owner.**

## What is the user's and what is assumed

- **From the brief:** rebuild and improve on the reference site; the target audiences (skilled workers, families, retirees, investors); REQ numbering from REQ-100; no duplication of the infrastructure doc; open questions on content ownership and IAA licence display.
- **Observed on the reference site (fact, as of 2026-11-09):** the site map, page features, form fields, and defects listed in the audit section.
- **Requirements agent's assumptions (all marked [Proposed] or tied to an OQ):** last-reviewed dates and INZ source links; consent checkbox and sensitive-data notes; multi-step form and auto-reply; anonymised Talent Pool; contact form, map links, and local-time conversion; webinar schedule display; consultation terms display; testimonial service tags; complaints page; expired-job removal; structured-content maintainability; the 300 ms filter target.
- **Not invented:** pricing, fee amounts, adviser names for NZIC, schedules, and brand. These are left as open questions.

## Sources

- Reference site, pages fetched 2026-11-09: https://www.new-zealand-immigration.com/ (homepage, free-assessment, about/contact-us, about/who-we-are, about/our-fusion-service, about/happy-clients, request-a-consultation…, our-immigration-and-job-hunt-webinar, visa/visa, visa/our-visa-service, visa/skilled-migrant-category, visa/are-you-eligible-to-migrate-to-nz, visa/visa-faqs, visa/processing-times, retirement-in-new-zealand/retirement-in-nz, job-search/job-search, job-search/our-job-search-service, job-search/job-board, job-search/browse-jobs, job-search/browse-candidates, job-search/list-your-job, job-search/accredited-employers, jobs/senior-gis-specialist, job-seeker/civil-engineering, investment/businesses-and-investments-in-new-zealand, news, privacy-policy, disclaimer)
- IAA trade mark guidance: https://www.iaa.govt.nz/for-advisers/adviser-tools/code-of-conduct-toolkit/misrepresentation/trade-mark
- IAA, working with a licensed adviser: https://iaa.govt.nz/for-migrants/working-with-a-licensed-immigration-adviser/
- IAA public register: https://iaa.govt.nz/for-advisers/adviser-tools/licensing-toolkit/register-of-licensed-immigration-advisers

## Changelog

- 2026-11-09 — Initial draft. Reverse-engineered from new-zealand-immigration.com (about 28 pages sampled). REQ-100 to REQ-335 defined. 21 open questions raised.
- 2026-11-09 — OQ-001 resolved: confirmed this is a rebuild of New Zealand Immigration Concepts Ltd's own site. Existing content may be reused.
