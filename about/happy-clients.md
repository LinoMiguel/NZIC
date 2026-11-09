---
layout: default
title: Happy Clients
description: Read testimonials from people NZIC has helped move to New Zealand — skilled migrants, families, retirees, and employers.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/about/who-we-are' | relative_url }}">About</a></li>
      <li><span aria-current="page">Happy Clients</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Happy Clients</h1>
    <p class="lead">Hear from people who have made New Zealand their home with NZIC's help.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <div class="alert alert-info" style="max-width:700px;margin:0 auto 3rem;">
      Testimonials are shown with the client's permission. Each quote reflects the client's own experience. — <a href="{{ '/about/contact-us' | relative_url }}">Contact us</a> to learn more about our services.
    </div>

    <div class="card-grid">
      {% for t in site.data.testimonials %}
      <div class="quote-card" style="background:#fff;">
        <p class="quote-text">{{ t.quote }}</p>
        <div class="quote-attr">{{ t.attribution }}</div>
        <div class="quote-service">{{ t.service }}</div>
      </div>
      {% endfor %}
    </div>

    <div class="alert alert-warning" style="max-width:600px;margin:3rem auto 0;">
      ⚠️ These are placeholder testimonials. Owner to provide real testimonials with confirmed permissions (OQ-016) before publication.
    </div>

    <div style="text-align:center;margin-top:3rem;">
      <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}">Get your free assessment</a>
    </div>
  </div>
</section>
