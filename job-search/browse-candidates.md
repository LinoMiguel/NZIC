---
layout: default
title: Talent Pool
description: Browse skilled migrant candidates available for work in New Zealand. Filter by sector and register interest.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/job-search/job-board' | relative_url }}">Job Portal</a></li>
      <li><span aria-current="page">Talent Pool</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Talent Pool</h1>
    <p class="lead">Skilled migrant candidates available for work in New Zealand. Profiles show occupation, sector, and experience — no personal identity details without the candidate's consent.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <div class="alert alert-info" style="max-width:700px;margin-bottom:2rem;">
      Candidate profiles show occupation, skills, and experience only. Full names and contact details are not shown without the candidate's written consent (in line with the NZ Privacy Act 2020). To express interest in a candidate, use the form on their profile — NZIC will make the introduction.
    </div>

    <!-- Filter bar (REQ-216) -->
    <div class="filter-bar" role="search" aria-label="Filter candidates by sector">
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

    <div id="no-results" class="alert alert-warning" style="display:none;">
      No candidates match the selected sector. <button class="filter-clear" onclick="document.getElementById('sector-filter').value='';document.getElementById('filter-clear').click();" type="button">Clear filter</button>
    </div>

    <!-- Candidate listings -->
    <div id="candidates-list" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">

      {% for candidate in site.candidates %}
      <a class="candidate-card" href="{{ candidate.url | relative_url }}" data-sector="{{ candidate.sectors | first }}">
        <div class="candidate-title">{{ candidate.occupation }}</div>
        <div class="candidate-tags">
          {% for sector in candidate.sectors %}<span class="candidate-tag">{{ sector }}</span>{% endfor %}
        </div>
        <div class="candidate-meta">{{ candidate.experience_years }} years' experience · {{ candidate.qualifications }}</div>
        <div class="candidate-id">ID: {{ candidate.candidate_id }}</div>
      </a>
      {% else %}
      <!-- Sample placeholder candidates -->
      <a class="candidate-card" href="{{ '/job-search/browse-candidates' | relative_url }}" data-sector="Civil Engineering">
        <div class="candidate-title">Civil Engineer</div>
        <div class="candidate-tags"><span class="candidate-tag">Civil Engineering</span><span class="candidate-tag">Infrastructure</span></div>
        <div class="candidate-meta">8 years' experience · Bachelor of Engineering (Civil)</div>
        <div class="candidate-id">ID: NZIC-2024-CE-001</div>
      </a>
      <a class="candidate-card" href="{{ '/job-search/browse-candidates' | relative_url }}" data-sector="Nursing">
        <div class="candidate-title">Registered Nurse</div>
        <div class="candidate-tags"><span class="candidate-tag">Nursing</span><span class="candidate-tag">Health &amp; Medical</span></div>
        <div class="candidate-meta">5 years' experience · Bachelor of Nursing</div>
        <div class="candidate-id">ID: NZIC-2024-RN-002</div>
      </a>
      <a class="candidate-card" href="{{ '/job-search/browse-candidates' | relative_url }}" data-sector="ICT &amp; Software">
        <div class="candidate-title">Software Developer (Full Stack)</div>
        <div class="candidate-tags"><span class="candidate-tag">ICT &amp; Software</span></div>
        <div class="candidate-meta">6 years' experience · Bachelor of Computer Science</div>
        <div class="candidate-id">ID: NZIC-2024-SD-003</div>
      </a>
      <a class="candidate-card" href="{{ '/job-search/browse-candidates' | relative_url }}" data-sector="Architecture &amp; Design">
        <div class="candidate-title">Registered Architect</div>
        <div class="candidate-tags"><span class="candidate-tag">Architecture &amp; Design</span></div>
        <div class="candidate-meta">12 years' experience · Master of Architecture</div>
        <div class="candidate-id">ID: NZIC-2024-AR-004</div>
      </a>
      {% endfor %}

    </div>

    <p style="margin-top:2rem;font-size:.88rem;color:var(--text-muted);">
      Candidates are added by NZIC staff with the candidate's consent. If you are a skilled professional seeking work in NZ and would like to be in the pool, <a href="{{ '/free-assessment' | relative_url }}">start with a free assessment</a>.
    </p>

  </div>
</section>
