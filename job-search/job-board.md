---
layout: default
title: Job Portal
description: The NZIC Job Portal — browse NZ vacancies, search the talent pool, and list a job for free.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/job-search' | relative_url }}">Job Seekers</a></li>
      <li><span aria-current="page">Job Portal</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>NZIC Job Portal</h1>
    <p class="lead">Browse NZ vacancies open to migrants, search the talent pool of skilled candidates, or list a vacancy for free.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="service-cards">
      <a class="service-card" href="{{ '/job-search/browse-jobs' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">📋</div>
        <h3>Browse Jobs</h3>
        <p>NZ vacancies open to migrant workers. Filter by sector. Enquire directly — no need to paste the job URL into a separate form.</p>
        <span class="card-cta">Browse jobs →</span>
      </a>
      <a class="service-card" href="{{ '/job-search/browse-candidates' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">👤</div>
        <h3>Talent Pool</h3>
        <p>NZ employers can search a pool of skilled migrant candidates by sector and occupation. Profiles show skills and experience, not names.</p>
        <span class="card-cta">Browse candidates →</span>
      </a>
      <a class="service-card" href="{{ '/job-search/list-your-job' | relative_url }}">
        <div class="service-card-icon" aria-hidden="true">➕</div>
        <h3>List Your Job — Free</h3>
        <p>NZ employers can post a vacancy for free. NZIC will advise on the right candidate, accreditation requirements, and the AEWV process.</p>
        <span class="card-cta">List a job →</span>
      </a>
    </div>
  </div>
</section>
