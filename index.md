---
layout: default
title: Home
description: Expert New Zealand immigration advice and visa services since 1995. Licensed Immigration Advisers helping skilled migrants, families, retirees and investors.
show_breadcrumbs: false
---

<!-- Hero -->
<section class="hero" aria-labelledby="hero-heading">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-content">
        <span class="section-eyebrow">Bespoke Immigration Services since 1995</span>
        <h1 class="hero-h1" id="hero-heading">
          Kia Ora,<br>
          <span style="font-size:0.75em;font-weight:400;">Welcome to New Zealand Immigration Concepts.</span>
        </h1>
        <p class="hero-sub">
          Bespoke Immigration Services since 1995
        </p>
        <div class="hero-cta-row">
          <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}">GET YOUR FREE ASSESSMENT</a>
          <a class="btn btn-outline" href="{{ '/job-search/our-job-search-service' | relative_url }}">FIND A JOB IN NEW ZEALAND</a>
        </div>
      </div>
      <div class="hero-slideshow" aria-hidden="true">
        <div class="hero-slide active" style="background-image:url('{{ '/assets/images/hero-1.webp' | relative_url }}')"></div>
        <div class="hero-slide" style="background-image:url('{{ '/assets/images/hero-2.webp' | relative_url }}')"></div>
        <div class="hero-slide" style="background-image:url('{{ '/assets/images/hero-3.jpg' | relative_url }}')"></div>
        <div class="hero-slide" style="background-image:url('{{ '/assets/images/hero-4.webp' | relative_url }}')"></div>
        <div class="hero-slide" style="background-image:url('{{ '/assets/images/hero-5.webp' | relative_url }}')"></div>
      </div>
    </div>
  </div>
</section>

<!-- IAA Badge -->
<section class="section-sm" style="background:var(--bg-light);border-bottom:1px solid var(--border);">
  <div class="container">
    <div class="iaa-badge">
      <img class="iaa-badge-img" src="{{ '/assets/images/iaa-badge.webp' | relative_url }}" alt="Immigration Advisers Authority licensed badge" width="80" height="80" loading="lazy">
      <div class="iaa-badge-content">
        <h2>Licensed by the Immigration Advisers Authority</h2>
        <p>All immigration advice at NZIC is given by Licensed Immigration Advisers registered with the IAA. This is a legal requirement under the Immigration Advisers Licensing Act 2007.</p>
        <div class="iaa-licence-list">
          {% for member in site.data.team %}
          {% if member.licence_number %}
          <span class="iaa-licence">{{ member.name }} — Licence <a href="https://iaa.govt.nz/for-advisers/adviser-tools/licensing-toolkit/register-of-licensed-immigration-advisers" target="_blank" rel="noopener noreferrer">{{ member.licence_number }} &#8599;</a></span>
          {% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 1: Unparalleled Level -->
<section class="section" aria-labelledby="services-heading">
  <div class="container">
    <div class="text-centre" style="margin-bottom:2.5rem;">
      <h2 class="section-heading" id="services-heading">Unparalleled Level of Immigration Assistance to New Zealand</h2>
      <p class="section-lead" style="margin-left:auto;margin-right:auto;">We are Licensed Immigration Advisers and Job Search Strategists.</p>
    </div>
    <div class="service-cards">
      <a class="service-card" href="{{ '/visa/our-visa-service' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">&#128706;</div>
        <h3>Visa Service</h3>
        <p>End-to-end visa strategy and application support from Licensed Immigration Advisers — skilled migrant, family, investor, and retirement visas.</p>
        <span class="card-cta">Learn more</span>
      </a>
      <a class="service-card" href="{{ '/job-search/our-job-search-service' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">&#128188;</div>
        <h3>Job Seeker Service</h3>
        <p>Personalised job-hunt strategy for internationally trained professionals — including access to the hidden NZ job market (70–75% of roles never advertised).</p>
        <span class="card-cta">Learn more</span>
      </a>
      <a class="service-card" href="{{ '/job-search/job-board' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">&#128449;</div>
        <h3>Job Portal</h3>
        <p>Browse NZ vacancies open to migrants. Employers can search the talent pool and list a vacancy for free. Connections made by NZIC specialists.</p>
        <span class="card-cta">Browse jobs</span>
      </a>
    </div>
  </div>
</section>

<!-- Fusion / Catch-22 -->
<section class="section section-bg-light" aria-labelledby="fusion-heading">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
      <div>
        <span class="section-eyebrow">The Catch-22 — and how we solve it</span>
        <h2 class="section-heading" id="fusion-heading">No visa without a job. No job without a visa.</h2>
        <p style="font-size:1.05rem;color:var(--text-light);margin-bottom:1.5rem;line-height:1.65;">
          Many skilled migrants face New Zealand's immigration Catch-22: employers want a work-ready candidate, but a visa requires a job offer. NZIC's <strong>Fusion Service</strong> tackles both sides at once — your Licensed Immigration Adviser manages the visa pathway while your Job Search Consultant opens doors to the hidden job market.
        </p>
        <a class="btn btn-primary" href="{{ '/about/fusion-service' | relative_url }}">About the Fusion Service</a>
      </div>
      <div>
        <div class="fusion-block">
          <div class="fusion-icon" aria-hidden="true">&#128706;</div>
          <div>
            <div class="fusion-title">Visa strategy</div>
            <div class="fusion-desc">Your Licensed Immigration Adviser assesses your pathway, prepares your documents, and manages submission and processing.</div>
          </div>
        </div>
        <div class="fusion-block" style="margin-top:16px;">
          <div class="fusion-icon" aria-hidden="true">&#128269;</div>
          <div>
            <div class="fusion-title">Job search strategy</div>
            <div class="fusion-desc">Your Job Search Consultant builds your personal job-hunt plan, coaches you on NZ employer culture, and introduces you to the unadvertised market.</div>
          </div>
        </div>
        <div class="fusion-block" style="margin-top:16px;">
          <div class="fusion-icon" aria-hidden="true">&#129309;</div>
          <div>
            <div class="fusion-title">Coordinated outcome</div>
            <div class="fusion-desc">Both streams talk to each other. When you get a job offer, the visa team is ready to move immediately.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quality Pillars -->
<section class="section" aria-labelledby="pillars-heading">
  <div class="container">
    <div class="text-centre" style="margin-bottom:2.5rem;">
      <h2 class="section-heading" id="pillars-heading">Why choose NZIC</h2>
    </div>
    <div class="pillars-grid">
      <div class="pillar">
        <div class="pillar-icon" aria-hidden="true">&#127963;</div>
        <h3>Qualified</h3>
        <p>All immigration advice is given by IAA-Licensed Immigration Advisers — your legal protection under NZ law.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon" aria-hidden="true">&#128197;</div>
        <h3>Experienced</h3>
        <p>More than 30 years of experience in New Zealand immigration and job search, with thousands of successful cases.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon" aria-hidden="true">&#128506;</div>
        <h3>NZ Focused</h3>
        <p>We work exclusively on New Zealand immigration — in-depth, up-to-date knowledge of INZ policy.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon" aria-hidden="true">&#128205;</div>
        <h3>Local</h3>
        <p>Offices in Nelson and Wellington, with advisers who live and work in the communities our clients move to.</p>
      </div>
    </div>
  </div>
</section>

<!-- Stats -->
<section class="section-sm section-bg-navy" aria-label="Key statistics">
  <div class="container">
    <div class="stat-row">
      <div class="stat">
        <div class="stat-number">1994</div>
        <div class="stat-label">Year founded</div>
      </div>
      <div class="stat">
        <div class="stat-number">30+</div>
        <div class="stat-label">Years of experience</div>
      </div>
      <div class="stat">
        <div class="stat-number">2</div>
        <div class="stat-label">NZ offices</div>
      </div>
      <div class="stat">
        <div class="stat-number">1000s</div>
        <div class="stat-label">Successful clients</div>
      </div>
    </div>
  </div>
</section>

<!-- Client Types -->
<section class="section" aria-labelledby="clients-heading">
  <div class="container">
    <div class="text-centre" style="margin-bottom:2.5rem;">
      <span class="section-eyebrow">Who we help</span>
      <h2 class="section-heading" id="clients-heading">Who are our clients?</h2>
    </div>
    <div class="client-cards">
      <a class="client-card" href="{{ '/visa/skilled-migrant-category' | relative_url }}">
        <div class="client-card-icon" aria-hidden="true">&#128105;&#8205;&#128188;</div>
        <div>
          <h3>Skilled Migrants &amp; Professionals</h3>
          <p>Engineers, health professionals, teachers, IT specialists and other internationally trained workers seeking residence through the Skilled Migrant Category or Green List.</p>
        </div>
      </a>
      <a class="client-card" href="{{ '/investment' | relative_url }}">
        <div class="client-card-icon" aria-hidden="true">&#128176;</div>
        <div>
          <h3>Investors &amp; Retirees</h3>
          <p>High-net-worth individuals considering the Active Investor Plus, Business Investor, or Retirement visa options, with NZD thresholds from $750k upwards.</p>
        </div>
      </a>
      <a class="client-card" href="{{ '/visa/partnership-visas' | relative_url }}">
        <div class="client-card-icon" aria-hidden="true">&#128106;</div>
        <div>
          <h3>Partnership &amp; Family</h3>
          <p>People joining a partner, adult child or other family member who is already a New Zealand citizen or resident.</p>
        </div>
      </a>
      <a class="client-card" href="{{ '/job-search/accredited-employers' | relative_url }}">
        <div class="client-card-icon" aria-hidden="true">&#127970;</div>
        <div>
          <h3>NZ Employers</h3>
          <p>Businesses needing to hire overseas talent, seek Accredited Employer status, navigate the Job Check process, or find a specific candidate in the talent pool.</p>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="testimonial-section" aria-labelledby="testimonials-heading">
  <div class="container">
    <div class="text-centre">
      <h2 class="section-heading on-dark" id="testimonials-heading">Don't just take our word for it</h2>
      <p class="section-lead on-dark" style="margin-left:auto;margin-right:auto;">Real experiences from people we have helped move to New Zealand.</p>
    </div>
    <div class="testimonial-wrapper">
      <div class="testimonials-grid">
        {% for t in site.data.testimonials limit:3 %}
        <div class="quote-card">
          <p class="quote-text">{{ t.quote }}</p>
          <div class="quote-attr">{{ t.attribution }}</div>
          <div class="quote-service">{{ t.service }}</div>
        </div>
        {% endfor %}
      </div>
      <div style="text-align:center;margin-top:2rem;">
        <a class="btn btn-outline" href="{{ '/about/happy-clients' | relative_url }}">Read all testimonials</a>
      </div>
    </div>
  </div>
</section>

<!-- How to Start -->
<section class="section section-bg-light" aria-labelledby="start-heading">
  <div class="container">
    <div class="text-centre" style="margin-bottom:2.5rem;">
      <span class="section-eyebrow">Your first step</span>
      <h2 class="section-heading" id="start-heading">How to get started</h2>
    </div>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-number">1</div>
        <h3 class="step-title">Free Assessment</h3>
        <p class="step-desc">Fill in the form; our advisers will give you an honest opinion of your eligibility.</p>
        <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}" style="margin-top:1.5rem;">Get assessed &#8594;</a>
      </div>
      <div class="process-step">
        <div class="step-number">2</div>
        <h3 class="step-title">Free Immigration and Job Hunt Webinar</h3>
        <p class="step-desc">If the Skilled Migrant Category fits your profile, we will invite you to our live webinar.</p>
        <a class="btn btn-outline" href="{{ '/our-immigration-and-job-hunt-webinar' | relative_url }}" style="margin-top:1.5rem;">Learn about the webinar &#8594;</a>
      </div>
      <div class="process-step">
        <div class="step-number">3</div>
        <h3 class="step-title">No Strings Attached</h3>
        <p class="step-desc">The whole process is free and without any obligation.</p>
        <a class="btn btn-outline" href="{{ '/consultation' | relative_url }}" style="margin-top:1.5rem;">Request consultation &#8594;</a>
      </div>
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section class="cta-section section-bg-navy" aria-labelledby="cta-heading">
  <div class="container">
    <h2 class="section-heading on-dark" id="cta-heading">Do you want to migrate to New Zealand?</h2>
    <p class="section-lead on-dark" style="margin-left:auto;margin-right:auto;">Start with a free assessment — there is no cost and no commitment. A licensed adviser will review your situation and respond personally.</p>
    <div class="cta-btn-row">
      <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}">Get your free assessment</a>
      <a class="btn btn-outline-white" href="{{ '/about/contact-us' | relative_url }}">Contact us</a>
    </div>
  </div>
</section>

<!-- Employer job-posting form -->
<section class="section-sm" style="background:var(--bg-light);">
  <div class="container" style="max-width:700px;">
    <h2 style="font-family:var(--font-heading);color:var(--navy);text-align:center;margin-bottom:0.5rem;">Post your requirement</h2>
    <p style="text-align:center;color:var(--text-muted);margin-bottom:2rem;">Looking to hire a skilled migrant? Post your role here and we'll be in touch.</p>
    <form action="REPLACE_ME" method="POST">
      <div class="form-group"><label for="hp-role">Role / Designation</label><input type="text" id="hp-role" name="role" required></div>
      <div class="form-group"><label for="hp-company">Company Name</label><input type="text" id="hp-company" name="company" required></div>
      <div class="form-group"><label for="hp-summary">Job Summary</label><input type="text" id="hp-summary" name="summary"></div>
      <div class="form-group"><label for="hp-desc">Job Description</label><textarea id="hp-desc" name="description" rows="4"></textarea></div>
      <div class="form-group"><label for="hp-location">Location</label><input type="text" id="hp-location" name="location"></div>
      <button type="submit" class="btn btn-primary" style="width:100%;">Submit requirement</button>
    </form>
  </div>
</section>
