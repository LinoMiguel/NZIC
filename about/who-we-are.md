---
layout: default
title: About NZIC
description: Learn about New Zealand Immigration Concepts Ltd — our history, our licensed advisers, and our team in Nelson and Wellington.
breadcrumb_parent: About
breadcrumb_parent_url: /about/who-we-are
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/about/who-we-are' | relative_url }}">About</a></li>
      <li><span aria-current="page">Who We Are</span></li>
    </ol>
  </div>
</nav>

<!-- Page hero -->
<div class="page-hero">
  <div class="container">
    <h1>About New Zealand Immigration Concepts Ltd</h1>
    <p class="lead">Helping people move to New Zealand since 1995 — with licensed advice, local knowledge, and genuine care.</p>
  </div>
</div>

<!-- IAA badge -->
<section class="section-sm section-bg-light">
  <div class="container">
    <div class="iaa-badge">
      <div class="iaa-badge-icon" aria-hidden="true">🏛️</div>
      <div class="iaa-badge-content">
        <h2>Licensed by the Immigration Advisers Authority</h2>
        <p>Under the Immigration Advisers Licensing Act 2007, all immigration advice in New Zealand must come from a Licensed Immigration Adviser, a lawyer, or a barrister. NZIC's advisers hold current IAA licences.</p>
        <div class="iaa-licence-list">
          <!-- REQ-120 / REQ-122 — owner to provide licence numbers (OQ-012) -->
          {% for member in site.data.team %}
          {% if member.licence_number %}
          <span class="iaa-licence">
            {{ member.name }} — Licence <a href="https://iaa.govt.nz/for-advisers/adviser-tools/licensing-toolkit/register-of-licensed-immigration-advisers" target="_blank" rel="noopener noreferrer">{{ member.licence_number }} ↗</a>
          </span>
          {% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Company history -->
<section class="section" aria-labelledby="history-heading">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;">
      <div>
        <span class="section-eyebrow">Our story</span>
        <h2 class="section-heading" id="history-heading">30+ years helping people call New Zealand home</h2>
        <p style="color:var(--text-light);margin-bottom:1.5rem;">NZIC was founded with a simple belief: good immigration advice should be honest, personal, and grounded in deep knowledge of New Zealand. That belief still drives everything we do.</p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">1995</div>
            <div class="timeline-event">New Zealand Immigration Concepts Ltd established, initially focused on visa services for skilled migrants.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2007</div>
            <div class="timeline-event">Job search service launched — the first step toward the Fusion Service model that addresses the Catch-22 for skilled migrants.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2018</div>
            <div class="timeline-event">Wellington office opened, expanding NZIC's presence to the capital.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2022</div>
            <div class="timeline-event">Job Portal launched — connecting NZ employers directly with migrant candidates through the online job board and talent pool.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">Today</div>
            <div class="timeline-event">Two offices (Nelson &amp; Wellington), a team of Licensed Immigration Advisers and job search consultants, and thousands of successful outcomes.</div>
          </div>
        </div>
      </div>
      <div>
        <div class="alert alert-info" style="margin-bottom:2rem;">
          <strong>Our mission:</strong> To give every client an honest assessment of their New Zealand options and the best possible chance of a successful outcome — through expert advice, genuine support, and transparent process.
        </div>
        <div class="pillars-grid" style="grid-template-columns:1fr 1fr;gap:20px;">
          <div class="fusion-block">
            <div class="fusion-icon" aria-hidden="true">⚖️</div>
            <div>
              <div class="fusion-title">Licensed &amp; accountable</div>
              <div class="fusion-desc">IAA-licensed advisers, bound by the Code of Conduct.</div>
            </div>
          </div>
          <div class="fusion-block">
            <div class="fusion-icon" aria-hidden="true">🎯</div>
            <div>
              <div class="fusion-title">NZ-only focus</div>
              <div class="fusion-desc">We only advise on New Zealand immigration — in-depth expertise, not a generalist service.</div>
            </div>
          </div>
          <div class="fusion-block">
            <div class="fusion-icon" aria-hidden="true">🤝</div>
            <div>
              <div class="fusion-title">Personalised advice</div>
              <div class="fusion-desc">Every client gets a strategy built around their specific circumstances.</div>
            </div>
          </div>
          <div class="fusion-block">
            <div class="fusion-icon" aria-hidden="true">📍</div>
            <div>
              <div class="fusion-title">Local knowledge</div>
              <div class="fusion-desc">Our advisers live and work in NZ — real insight, not textbook answers.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Team -->
<section class="section section-bg-light" aria-labelledby="team-heading">
  <div class="container">
    <div class="text-centre" style="margin-bottom:2.5rem;">
      <span class="section-eyebrow">The people behind NZIC</span>
      <h2 class="section-heading" id="team-heading">Meet our team</h2>
    </div>
    <div class="team-grid">
      {% for member in site.data.team %}
      <div class="team-card">
        <div class="team-avatar" aria-hidden="true">👤</div>
        <div class="team-name">{{ member.name }}</div>
        <div class="team-role">{{ member.role }}</div>
        {% if member.qualifications %}<div class="team-quals">{{ member.qualifications }}</div>{% endif %}
        {% if member.licence_number %}
        <div class="team-licence">
          IAA Licence: <a href="https://iaa.govt.nz/for-advisers/adviser-tools/licensing-toolkit/register-of-licensed-immigration-advisers" target="_blank" rel="noopener noreferrer">{{ member.licence_number }} ↗</a>
        </div>
        {% else %}
        <div class="team-licence" style="color:var(--text-muted);">Job Search Consultant (not a Licensed Immigration Adviser)</div>
        {% endif %}
        {% if member.bio %}<p style="font-size:.85rem;color:var(--text-muted);margin-top:8px;">{{ member.bio }}</p>{% endif %}
      </div>
      {% endfor %}
    </div>
    <div class="alert alert-warning" style="max-width:600px;margin:2rem auto 0;">
      ⚠️ Team profiles are placeholders — names, qualifications and IAA licence numbers must be provided by the business owner before publication.
    </div>
  </div>
</section>

<!-- Testimonials sample -->
<section class="testimonial-section" aria-labelledby="t-heading">
  <div class="container">
    <div class="text-centre">
      <h2 class="section-heading on-dark" id="t-heading">What clients say about NZIC</h2>
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
