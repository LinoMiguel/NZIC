---
layout: default
title: Request a Consultation
description: Request a one-on-one consultation with a NZIC Licensed Immigration Adviser to discuss your New Zealand visa options in detail.
permalink: /consultation/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><span aria-current="page">Consultation</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Request a One-on-One Consultation</h1>
    <p class="lead">A private session with a Licensed Immigration Adviser — your questions answered in detail, your situation assessed accurately.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;">

      <div>
        <div class="alert alert-info" style="margin-bottom:1.5rem;">
          ⚠️ Consultation fee, format, and duration to be confirmed by owner (OQ-010). The description below is a placeholder.
        </div>

        <!-- REQ-269: session details -->
        <h2 style="font-family:var(--font-heading);font-size:1.4rem;font-weight:700;color:var(--navy);margin-bottom:1rem;">About the consultation</h2>
        <div class="fusion-block" style="margin-bottom:12px;">
          <div class="fusion-icon">👤</div>
          <div><div class="fusion-title">Who you meet with</div><div class="fusion-desc">A Licensed Immigration Adviser registered with the IAA — the same team who reviews your free assessment.</div></div>
        </div>
        <div class="fusion-block" style="margin-bottom:12px;">
          <div class="fusion-icon">💻</div>
          <div><div class="fusion-title">Format</div><div class="fusion-desc">Video call (Zoom or Teams), phone, or in-person at our Nelson or Wellington office. [Format to be confirmed by owner.]</div></div>
        </div>
        <div class="fusion-block" style="margin-bottom:12px;">
          <div class="fusion-icon">⏱️</div>
          <div><div class="fusion-title">Duration</div><div class="fusion-desc">[Duration to be confirmed by owner.]</div></div>
        </div>
        <div class="fusion-block" style="margin-bottom:12px;">
          <div class="fusion-icon">💰</div>
          <div><div class="fusion-title">Fee</div><div class="fusion-desc">[Fee to be confirmed by owner — may be free or paid. OQ-010.]</div></div>
        </div>
      </div>

      <!-- Consultation form (REQ-269 to REQ-270) -->
      <div>
        <h2 style="font-family:var(--font-heading);font-size:1.4rem;font-weight:700;color:var(--navy);margin-bottom:1.5rem;">Request your consultation</h2>
        <form action="https://formspree.io/f/REPLACE_ME" method="POST" novalidate>
          <div class="form-group"><label class="form-label" for="c-name">Name <span class="req">*</span></label><input class="form-input" type="text" id="c-name" name="name" required></div>
          <div class="form-group"><label class="form-label" for="c-email">Email <span class="req">*</span></label><input class="form-input" type="email" id="c-email" name="email" required></div>
          <div class="form-group"><label class="form-label" for="c-msg">What would you like to discuss? <span class="req">*</span></label><textarea class="form-textarea" id="c-msg" name="message" rows="5" required></textarea></div>
          <div class="form-group"><label class="form-label" for="c-tz">Your time zone (optional)</label><input class="form-input" type="text" id="c-tz" name="timezone" placeholder="e.g. GMT+5:30, EST, CEST"></div>
          <p class="form-required-note"><span class="req">*</span> Required field</p>
          <button class="btn btn-primary" type="submit">Request Consultation</button>
          <p style="font-size:.82rem;color:var(--text-muted);margin-top:.75rem;">We will email you within [X] business days to arrange a time. (REQ-270 — timeframe to be confirmed.)</p>
        </form>
      </div>

    </div>
  </div>
</section>
