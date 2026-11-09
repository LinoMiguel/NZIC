---
layout: default
title: Contact Us
description: Contact NZIC — New Zealand Immigration Concepts Ltd. Nelson and Wellington offices. Email enquiries welcome.
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><a href="{{ '/about/who-we-are' | relative_url }}">About</a></li>
      <li><span aria-current="page">Contact Us</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Contact Us</h1>
    <p class="lead">We have offices in Nelson and Wellington, New Zealand. Send us a message and we will get back to you.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;">

      <!-- Contact form (REQ-267) -->
      <div>
        <h2 style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--navy);margin-bottom:1.5rem;">Send us a message</h2>
        <form action="https://formspree.io/f/REPLACE_ME" method="POST" novalidate>
          <div class="form-group">
            <label class="form-label" for="c-name">Name <span class="req" aria-hidden="true">*</span></label>
            <input class="form-input" type="text" id="c-name" name="name" required autocomplete="name">
            <div class="form-error">Please enter your name</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="c-email">Email <span class="req" aria-hidden="true">*</span></label>
            <input class="form-input" type="email" id="c-email" name="email" required autocomplete="email">
            <div class="form-error">Please enter a valid email address</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="c-type">Enquiry type <span class="req" aria-hidden="true">*</span></label>
            <select class="form-select" id="c-type" name="enquiry_type" required>
              <option value="">— please select —</option>
              <option value="More information">I need more information</option>
              <option value="Appointment">I want to make an appointment</option>
              <option value="Employer">I am an employer</option>
              <option value="Other">Other</option>
            </select>
            <div class="form-error">Please select an enquiry type</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="c-msg">Message <span class="req" aria-hidden="true">*</span></label>
            <textarea class="form-textarea" id="c-msg" name="message" rows="5" required></textarea>
            <div class="form-error">Please enter your message</div>
          </div>
          <p class="form-required-note"><span class="req">*</span> Required field</p>
          <button class="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>

      <!-- Office details (REQ-265) -->
      <div>
        <h2 style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--navy);margin-bottom:1.5rem;">Our offices</h2>
        <div class="office-cards" style="grid-template-columns:1fr;">
          {% for office in site.data.offices %}
          <div class="office-card">
            <div class="office-name">{{ office.name }}</div>
            <div class="office-address">{{ office.address }}</div>
            <div class="office-hours">
              <strong>Opening hours:</strong><br>
              {{ office.hours }}
            </div>
            <a class="office-map-link" href="{{ office.maps_url }}" target="_blank" rel="noopener noreferrer">
              📍 View on map ↗
            </a>
          </div>
          {% endfor %}
        </div>

        <div class="alert alert-info" style="margin-top:1.5rem;">
          <strong>Time zones:</strong> New Zealand uses NZST (UTC+12) from April to September and NZDT (UTC+13) from September to April. Office hours are shown in NZ time.
        </div>

        <h3 style="font-family:var(--font-heading);font-size:1.1rem;font-weight:700;color:var(--navy);margin:2rem 0 1rem;">Frequently asked questions</h3>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">What are your fees? <span class="faq-chevron" aria-hidden="true">▾</span></button>
            <div class="faq-answer"><div class="faq-answer-inner">Fees vary depending on the complexity of your situation and the services required. We provide a quote after reviewing your free assessment. There is no cost for the initial assessment.</div></div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">Do I need to save anything before coming to NZ? <span class="faq-chevron" aria-hidden="true">▾</span></button>
            <div class="faq-answer"><div class="faq-answer-inner">Yes — INZ requires evidence of sufficient settlement funds for most visa categories. The specific amount depends on your visa type and family size. Your adviser will confirm the current requirement for your situation.</div></div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">Are you licensed? <span class="faq-chevron" aria-hidden="true">▾</span></button>
            <div class="faq-answer"><div class="faq-answer-inner">Yes. Under the Immigration Advisers Licensing Act 2007, all immigration advice in New Zealand must come from a Licensed Immigration Adviser, a lawyer, or a barrister. NZIC's advisers hold current IAA licences — see our <a href="{{ '/about/who-we-are' | relative_url }}">team page</a> for licence numbers.</div></div>
          </div>
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">Can I do this myself? <span class="faq-chevron" aria-hidden="true">▾</span></button>
            <div class="faq-answer"><div class="faq-answer-inner">You can apply for some visas without an adviser, and INZ provides information on its website. However, immigration rules change frequently and mistakes can have serious consequences. For complex applications — especially residence — professional advice significantly reduces risk.</div></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
