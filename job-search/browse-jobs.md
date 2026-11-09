---
layout: default
title: Browse Jobs
description: Browse New Zealand job vacancies open to migrant workers. Filter by sector and enquire directly through NZIC.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/job-search/job-board' | relative_url }}">Job Portal</a></li>
      <li><span aria-current="page">Browse Jobs</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Browse Jobs</h1>
    <p class="lead">New Zealand vacancies open to migrant workers. Filter by sector and enquire directly — no need to paste the job URL.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <!-- Filter bar (REQ-201) -->
    <div class="filter-bar" role="search" aria-label="Filter jobs by sector">
      <label class="filter-label" for="sector-filter">Filter by sector:</label>
      <select class="filter-select" id="sector-filter" aria-label="Sector filter">
        <option value="">All sectors</option>
        {% for sector in site.data.sectors %}
        <option value="{{ sector }}">{{ sector }}</option>
        {% endfor %}
      </select>
      <button class="filter-clear" id="filter-clear" type="button">Clear filter</button>
      <span class="filter-count" id="filter-count" aria-live="polite" aria-atomic="true"></span>
    </div>

    <!-- No results message (REQ-202) -->
    <div id="no-results" class="alert alert-warning" style="display:none;">
      No jobs match the selected sector. <button class="filter-clear" onclick="document.getElementById('sector-filter').value='';document.getElementById('filter-clear').click();" type="button">Clear filter</button>
    </div>

    <!-- Job listings (REQ-200 to REQ-208) -->
    <div id="jobs-list" style="display:flex;flex-direction:column;gap:16px;">

      {% for job in site.job_listings %}
      <a class="job-card" href="{{ job.url | relative_url }}" data-sector="{{ job.sector }}">
        <div class="job-card-title">{{ job.title }}</div>
        <div class="job-meta">
          <span>🏢 {{ job.employer }}</span>
          <span>📍 {{ job.location }}</span>
          <span class="job-tag">{{ job.sector }}</span>
          {% if job.date_listed %}<span>Listed {{ job.date_listed }}</span>{% endif %}
        </div>
        <div class="job-summary">{{ job.summary }}</div>
      </a>
      {% else %}
      <!-- Sample placeholder listings until real jobs are added -->
      <a class="job-card" href="{{ '/job-search/browse-jobs' | relative_url }}" data-sector="Civil Engineering">
        <div class="job-card-title">Senior Civil Engineer</div>
        <div class="job-meta">
          <span>🏢 Sample Engineering Ltd</span>
          <span>📍 Wellington</span>
          <span class="job-tag">Civil Engineering</span>
          <span>Listed November 2026</span>
        </div>
        <div class="job-summary">We are seeking an experienced Civil Engineer to lead infrastructure projects in the Wellington region. Accredited employer — visa support available for the right candidate.</div>
      </a>
      <a class="job-card" href="{{ '/job-search/browse-jobs' | relative_url }}" data-sector="Health &amp; Medical">
        <div class="job-card-title">Registered Nurse — Medical Ward</div>
        <div class="job-meta">
          <span>🏢 Sample DHB</span>
          <span>📍 Nelson</span>
          <span class="job-tag">Nursing</span>
          <span>Listed November 2026</span>
        </div>
        <div class="job-summary">Seeking experienced Registered Nurses for medical ward roles. Health NZ accredited employer. Relocation support and visa assistance for successful applicants.</div>
      </a>
      <a class="job-card" href="{{ '/job-search/browse-jobs' | relative_url }}" data-sector="ICT &amp; Software">
        <div class="job-card-title">Senior Software Developer (Full Stack)</div>
        <div class="job-meta">
          <span>🏢 Sample Tech Co</span>
          <span>📍 Auckland</span>
          <span class="job-tag">ICT &amp; Software</span>
          <span>Listed November 2026</span>
        </div>
        <div class="job-summary">Join a growing NZ SaaS company. 5+ years' experience with React and Node.js. Open to candidates on AEWV — employer accreditation in progress.</div>
      </a>
      {% endfor %}

    </div>

    <p style="margin-top:2rem;font-size:.88rem;color:var(--text-muted);">
      These listings are updated regularly by NZIC staff. To enquire about a job not shown here, <a href="{{ '/about/contact-us' | relative_url }}">contact us</a>. To list a vacancy, <a href="{{ '/job-search/list-your-job' | relative_url }}">submit it here — it's free</a>.
    </p>

  </div>
</section>
