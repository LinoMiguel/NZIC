---
layout: default
title: Free Assessment
description: Get a free New Zealand immigration assessment from a Licensed Immigration Adviser. No cost, no commitment.
permalink: /free-assessment/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><span aria-current="page">Free Assessment</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Get Your Free Assessment</h1>
    <p class="lead">Tell us about your situation. A Licensed Immigration Adviser reviews every submission and responds personally — at no cost and with no commitment.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <div class="alert alert-info" style="max-width:700px;margin:0 auto 2.5rem;">
      <strong>Free and confidential.</strong> Your assessment is reviewed by a Licensed Immigration Adviser registered with the IAA. We respond within 2–3 business days with an honest picture of your options. If the Skilled Migrant Category looks promising, we may also invite you to our free webinar.
    </div>

    <!-- REQ-315: multi-step form with progress indicator -->
    <form action="https://formspree.io/f/REPLACE_ME" method="POST" enctype="multipart/form-data" style="max-width:760px;margin:0 auto;" novalidate id="assessment-form">

      <!-- Progress bar -->
      <div class="form-progress" role="progressbar" aria-label="Form progress" aria-valuemin="1" aria-valuemax="4" aria-valuenow="1" id="form-progress">
        <div class="form-progress-step active"></div>
        <div class="form-progress-step"></div>
        <div class="form-progress-step"></div>
        <div class="form-progress-step"></div>
      </div>

      <!-- Step 1: About you (REQ-301) -->
      <div class="form-step is-active" id="step-1">
        <h2 class="form-step-title">Step 1 of 4 — About you</h2>
        <p class="form-required-note"><span class="req">*</span> Required field</p>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="fa-name">Full name <span class="req">*</span></label><input class="form-input" type="text" id="fa-name" name="name" required autocomplete="name"></div>
          <div class="form-group"><label class="form-label" for="fa-email">Email <span class="req">*</span></label><input class="form-input" type="email" id="fa-email" name="email" required autocomplete="email"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="fa-age">Age <span class="req">*</span></label><input class="form-input" type="number" id="fa-age" name="age" min="18" max="90" required></div>
          <div class="form-group"><label class="form-label" for="fa-country-birth">Country of birth <span class="req">*</span></label><input class="form-input" type="text" id="fa-country-birth" name="country_birth" required list="countries"></div>
        </div>
        <div class="form-group"><label class="form-label" for="fa-country-res">Country of current residence <span class="req">*</span></label><input class="form-input" type="text" id="fa-country-res" name="country_residence" required list="countries"></div>
        <datalist id="countries"><option value="Australia"><option value="Brazil"><option value="Canada"><option value="China"><option value="Germany"><option value="India"><option value="Japan"><option value="Philippines"><option value="South Africa"><option value="United Kingdom"><option value="United States"></datalist>
        <div class="form-step-nav">
          <span></span>
          <button class="btn btn-primary" type="button" data-next-step>Next: Work &amp; qualifications →</button>
        </div>
      </div>

      <!-- Step 2: Work and qualifications (REQ-302 to REQ-303) -->
      <div class="form-step" id="step-2">
        <h2 class="form-step-title">Step 2 of 4 — Work and qualifications</h2>
        <div class="form-group">
          <label class="form-label" for="fa-qual">Highest qualification <span class="req">*</span></label>
          <select class="form-select" id="fa-qual" name="qualification" required>
            <option value="">— select —</option>
            <option>Doctorate</option>
            <option>Master's</option>
            <option>Postgraduate Diploma / Certificate</option>
            <option>Bachelor's</option>
            <option>Trade Certificate / Apprenticeship</option>
            <option>Other diploma or certificate</option>
            <option>None</option>
          </select>
          <div class="form-error">Please select your qualification level</div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="fa-qual-field">Field of qualification <span class="req">*</span></label><input class="form-input" type="text" id="fa-qual-field" name="qualification_field" required></div>
          <div class="form-group"><label class="form-label" for="fa-exp">Years of work experience <span class="req">*</span></label><input class="form-input" type="number" id="fa-exp" name="experience_years" min="0" max="50" required></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="fa-job-title">Current job title <span class="req">*</span></label><input class="form-input" type="text" id="fa-job-title" name="job_title" required></div>
          <div class="form-group">
            <label class="form-label">NZ job offer?</label>
            <div style="display:flex;gap:16px;margin-top:8px;">
              <label><input type="radio" name="nz_job_offer" value="Yes" data-reveals="job-offer-fields" data-reveals-when="Yes"> Yes</label>
              <label><input type="radio" name="nz_job_offer" value="No" data-reveals="job-offer-fields" data-reveals-when="Yes" checked> No</label>
            </div>
          </div>
        </div>
        <!-- REQ-303: conditional job offer fields -->
        <div class="conditional-fields" id="job-offer-fields" style="border-left:3px solid var(--orange);padding-left:1rem;margin-top:1rem;">
          <div class="form-row">
            <div class="form-group"><label class="form-label" for="fa-offer-title">Job title offered</label><input class="form-input" type="text" id="fa-offer-title" name="offer_title"></div>
            <div class="form-group"><label class="form-label" for="fa-offer-hours">Hours per week</label><input class="form-input" type="number" id="fa-offer-hours" name="offer_hours" min="1" max="80"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label" for="fa-offer-pay">Hourly pay (NZD)</label><input class="form-input" type="number" id="fa-offer-pay" name="offer_pay" min="0"></div>
            <div class="form-group">
              <label class="form-label">Employer accredited?</label>
              <select class="form-select" id="fa-offer-accredited" name="offer_accredited">
                <option value="">— select —</option>
                <option>Yes</option><option>No</option><option>Don't know</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label" for="fa-linkedin">LinkedIn profile URL (optional)</label><input class="form-input" type="url" id="fa-linkedin" name="linkedin" placeholder="https://linkedin.com/in/..."></div>
          <div class="form-group">
            <label class="form-label" for="fa-cv">CV (optional, max 10 MB)</label>
            <input class="form-input" type="file" id="fa-cv" name="cv" accept=".pdf,.doc,.docx" data-max-mb="10">
            <div class="form-error">Max file size is 10 MB</div>
          </div>
        </div>
        <div class="form-step-nav">
          <button class="btn btn-outline" type="button" data-prev-step>← Back</button>
          <button class="btn btn-primary" type="button" data-next-step>Next: English &amp; character →</button>
        </div>
      </div>

      <!-- Step 3: English, health, character (REQ-304 to REQ-306) -->
      <div class="form-step" id="step-3">
        <h2 class="form-step-title">Step 3 of 4 — English, health &amp; character</h2>
        <div class="alert alert-info" style="margin-bottom:1.5rem;">
          <strong>Why we ask this:</strong> Immigration New Zealand assesses health and character for all visa applications. This information helps your adviser give you an accurate picture of your eligibility. It is kept confidential and used only for your assessment.
        </div>
        <div class="form-group">
          <label class="form-label" for="fa-english">English ability</label>
          <select class="form-select" id="fa-english" name="english">
            <option>Native / First language</option>
            <option>Fluent</option>
            <option>Moderate</option>
            <option>Basic</option>
            <option>None</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Any health issues that may affect a visa application?</label>
          <div style="display:flex;gap:16px;margin-top:8px;">
            <label><input type="radio" name="health" value="Yes" data-reveals="health-detail" data-reveals-when="Yes"> Yes</label>
            <label><input type="radio" name="health" value="No" checked> No</label>
          </div>
          <div class="conditional-fields" id="health-detail" style="margin-top:8px;">
            <textarea class="form-textarea" name="health_detail" rows="2" placeholder="Brief details"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Any criminal convictions (anyone included, aged 16 or over)?</label>
          <div style="display:flex;gap:16px;margin-top:8px;">
            <label><input type="radio" name="criminal" value="Yes" data-reveals="criminal-detail" data-reveals-when="Yes"> Yes</label>
            <label><input type="radio" name="criminal" value="No" checked> No</label>
          </div>
          <div class="conditional-fields" id="criminal-detail" style="margin-top:8px;">
            <textarea class="form-textarea" name="criminal_detail" rows="2" placeholder="Brief details"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Any previous visa refusal, denied entry, or deportation from any country?</label>
          <div style="display:flex;gap:16px;margin-top:8px;">
            <label><input type="radio" name="visa_refusal" value="Yes" data-reveals="refusal-detail" data-reveals-when="Yes"> Yes</label>
            <label><input type="radio" name="visa_refusal" value="No" checked> No</label>
          </div>
          <div class="conditional-fields" id="refusal-detail" style="margin-top:8px;">
            <textarea class="form-textarea" name="refusal_detail" rows="2" placeholder="Brief details"></textarea>
          </div>
        </div>
        <!-- Partner and children (REQ-305 to REQ-306) -->
        <div class="form-group">
          <label class="form-checkbox-row"><input class="form-checkbox" type="checkbox" id="fa-partner" name="has_partner" data-reveals="partner-fields"><span>Include a partner in this assessment</span></label>
        </div>
        <div class="conditional-fields" id="partner-fields" style="border-left:3px solid var(--orange);padding-left:1rem;">
          <div class="form-row">
            <div class="form-group"><label class="form-label" for="fa-p-name">Partner's name</label><input class="form-input" type="text" id="fa-p-name" name="partner_name"></div>
            <div class="form-group"><label class="form-label" for="fa-p-age">Partner's age</label><input class="form-input" type="number" id="fa-p-age" name="partner_age" min="18"></div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Partner's highest qualification</label>
              <select class="form-select" name="partner_qualification">
                <option value="">— select —</option>
                <option>Doctorate</option><option>Master's</option><option>Postgraduate Diploma / Certificate</option>
                <option>Bachelor's</option><option>Trade Certificate / Apprenticeship</option>
                <option>Other diploma or certificate</option><option>None</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label" for="fa-p-exp">Partner's years of experience</label><input class="form-input" type="number" id="fa-p-exp" name="partner_experience" min="0"></div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-checkbox-row"><input class="form-checkbox" type="checkbox" id="fa-children" name="has_children" data-reveals="children-fields"><span>Include dependent children</span></label>
        </div>
        <div class="conditional-fields" id="children-fields" style="border-left:3px solid var(--orange);padding-left:1rem;">
          <div class="form-group"><label class="form-label" for="fa-child-ages">Children's ages (comma-separated)</label><input class="form-input" type="text" id="fa-child-ages" name="children_ages" placeholder="e.g. 8, 12, 15"></div>
        </div>
        <div class="form-step-nav">
          <button class="btn btn-outline" type="button" data-prev-step>← Back</button>
          <button class="btn btn-primary" type="button" data-next-step>Next: Plans for NZ →</button>
        </div>
      </div>

      <!-- Step 4: Plans and consent (REQ-307 to REQ-311) -->
      <div class="form-step" id="step-4">
        <h2 class="form-step-title">Step 4 of 4 — Your plans</h2>
        <div class="form-group">
          <fieldset>
            <legend class="form-label">What are you planning to do in New Zealand? <span class="req">*</span></legend>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
              <label><input type="checkbox" name="plans[]" value="live_permanently"> Live permanently</label>
              <label><input type="checkbox" name="plans[]" value="find_a_job"> Find a job</label>
              <label><input type="checkbox" name="plans[]" value="join_family"> Join family or partner</label>
              <label><input type="checkbox" name="plans[]" value="invest"> Invest or run a business</label>
              <label><input type="checkbox" name="plans[]" value="retire"> Retire in NZ</label>
              <label><input type="checkbox" name="plans[]" value="employer"> I am an NZ employer (seeking staff)</label>
            </div>
          </fieldset>
        </div>
        <div class="form-group"><label class="form-label" for="fa-other">Anything else you would like us to know?</label><textarea class="form-textarea" id="fa-other" name="other_info" rows="4"></textarea></div>

        <!-- Consent (REQ-311) -->
        <div class="form-group">
          <div class="form-checkbox-row">
            <input class="form-checkbox" type="checkbox" id="consent-check" name="consent" required>
            <label for="consent-check">I agree that NZIC may use the information I have provided to assess my New Zealand immigration eligibility, in accordance with the <a href="{{ '/privacy-policy' | relative_url }}" target="_blank">Privacy Policy</a>. <span class="req" aria-hidden="true">*</span></label>
          </div>
          <div class="form-error">You must agree to submit the form</div>
        </div>
        <div class="form-step-nav">
          <button class="btn btn-outline" type="button" data-prev-step>← Back</button>
          <button class="btn btn-primary" type="submit" id="form-submit" disabled>Submit Free Assessment</button>
        </div>
      </div>

    </form>
  </div>
</section>
