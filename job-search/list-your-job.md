---
layout: default
title: List Your Job — Free
description: NZ employers can list a vacancy on the NZIC Job Board for free. Quick listing or full details — your choice.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/job-search/job-board' | relative_url }}">Job Portal</a></li>
      <li><span aria-current="page">List Your Job</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>List Your Job — Free</h1>
    <p class="lead">Post a vacancy on the NZIC Job Board at no cost. NZIC will advise on the right candidate, accreditation requirements, and the AEWV process.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <div class="alert alert-success" style="max-width:700px;margin:0 auto 2.5rem;">
      ✅ <strong>Listing is completely free.</strong> NZIC charges no fee to employers for listing a vacancy on the Job Board.
    </div>

    <form action="https://formspree.io/f/REPLACE_ME" method="POST" enctype="multipart/form-data" style="max-width:760px;margin:0 auto;" novalidate id="list-job-form">

      <p class="form-required-note"><span class="req">*</span> Required field</p>

      <!-- Option selector (REQ-231) -->
      <div class="form-group">
        <fieldset>
          <legend class="form-label">How would you like to list? <span class="req" aria-hidden="true">*</span></legend>
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:8px;">
            <label style="display:flex;gap:10px;align-items:flex-start;cursor:pointer;">
              <input type="radio" name="listing_type" value="quick" data-reveals="full-fields" data-reveals-when="full" checked>
              <span><strong>Quick listing</strong> — my job is already advertised online, I just want to link it</span>
            </label>
            <label style="display:flex;gap:10px;align-items:flex-start;cursor:pointer;">
              <input type="radio" name="listing_type" value="full" data-reveals="full-fields" data-reveals-when="full">
              <span><strong>Full listing</strong> — I want to describe the role in detail</span>
            </label>
          </div>
        </fieldset>
      </div>

      <!-- Always shown -->
      <fieldset style="border:none;padding:0;margin-bottom:2rem;">
        <legend class="form-step-title">About you</legend>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="lj-name">Your name <span class="req">*</span></label><input class="form-input" type="text" id="lj-name" name="name" required></div>
          <div class="form-group"><label class="form-label" for="lj-company">Business name <span class="req">*</span></label><input class="form-input" type="text" id="lj-company" name="company" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="lj-role">Your role at the company <span class="req">*</span></label><input class="form-input" type="text" id="lj-role" name="your_role" required></div>
          <div class="form-group"><label class="form-label" for="lj-email">Email <span class="req">*</span></label><input class="form-input" type="email" id="lj-email" name="email" required></div>
        </div>
        <div class="form-group"><label class="form-label" for="lj-phone">Phone</label><input class="form-input" type="tel" id="lj-phone" name="phone"></div>
      </fieldset>

      <!-- Quick option extras -->
      <fieldset style="border:none;padding:0;margin-bottom:2rem;">
        <legend class="form-step-title">The role</legend>
        <div class="form-group"><label class="form-label" for="lj-job-title">Job title <span class="req">*</span></label><input class="form-input" type="text" id="lj-job-title" name="job_title" required></div>
        <div class="form-group"><label class="form-label" for="lj-job-url">Link to the online listing (if already advertised)</label><input class="form-input" type="url" id="lj-job-url" name="job_url" placeholder="https://..."></div>
      </fieldset>

      <!-- Full listing extras (REQ-232) -->
      <div class="conditional-fields" id="full-fields">
        <fieldset style="border:none;padding:0;margin-bottom:2rem;">
          <legend class="form-step-title">Role details</legend>
          <div class="form-group"><label class="form-label" for="lj-desc">Description and responsibilities <span class="req">*</span></label><textarea class="form-textarea" id="lj-desc" name="description" rows="5" data-original-required="true"></textarea></div>
          <div class="form-group"><label class="form-label" for="lj-quals">Required qualifications</label><textarea class="form-textarea" id="lj-quals" name="qualifications" rows="3"></textarea></div>
          <div class="form-row">
            <div class="form-group"><label class="form-label" for="lj-exp">Years of experience required</label><input class="form-input" type="text" id="lj-exp" name="experience"></div>
            <div class="form-group"><label class="form-label" for="lj-industry">Industry <span class="req">*</span></label>
              <select class="form-select" id="lj-industry" name="industry" data-original-required="true">
                <option value="">— select —</option>
                {% for sector in site.data.sectors %}<option value="{{ sector }}">{{ sector }}</option>{% endfor %}
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="lj-size">Business size</label>
              <select class="form-select" id="lj-size" name="business_size">
                <option value="">— select —</option>
                <option>1–5</option><option>6–10</option><option>11–20</option><option>21–50</option><option>50+</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Accredited employer?</label>
              <div style="display:flex;gap:16px;margin-top:8px;">
                <label><input type="radio" name="accredited" value="Yes"> Yes</label>
                <label><input type="radio" name="accredited" value="No"> No</label>
                <label><input type="radio" name="accredited" value="Not sure"> Not sure</label>
              </div>
            </div>
          </div>
          <div class="form-group"><label class="form-label" for="lj-jd">Job description file (optional, max 10 MB)</label><input class="form-input" type="file" id="lj-jd" name="jd_file" accept=".pdf,.doc,.docx" data-max-mb="10"><div class="form-error">Max file size is 10 MB</div></div>
        </fieldset>
      </div>

      <!-- Specific candidate interest (REQ-233) -->
      <div class="form-group">
        <label class="form-checkbox-row">
          <input class="form-checkbox" type="checkbox" id="lj-candidate-check" data-reveals="candidate-fields">
          <span>I am interested in a specific candidate from the Talent Pool</span>
        </label>
      </div>
      <div class="conditional-fields" id="candidate-fields">
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="lj-cid">Candidate ID</label><input class="form-input" type="text" id="lj-cid" name="candidate_id" placeholder="e.g. NZIC-2024-CE-001"></div>
          <div class="form-group"><label class="form-label" for="lj-why">Why this candidate fits your role</label><textarea class="form-textarea" id="lj-why" name="candidate_reason" rows="3"></textarea></div>
        </div>
      </div>

      <div class="form-group"><label class="form-label" for="lj-notes">Any other notes for NZIC?</label><textarea class="form-textarea" id="lj-notes" name="notes" rows="3"></textarea></div>

      <div class="form-submit-row">
        <button class="btn btn-primary" type="submit">Submit Listing</button>
      </div>

    </form>
  </div>
</section>
