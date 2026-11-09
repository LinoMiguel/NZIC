---
layout: default
title: Request a Consultation
description: Request a one-on-one consultation with Dr. Carsten Hallwass, Principal Licensed Immigration Adviser at NZIC.
permalink: /consultation/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">Home</a></li>
      <li><span aria-current="page">Consultation</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Request a One-on-One Consultation</h1>
    <p class="lead">A private consultation with Dr. Carsten Hallwass, Principal Licensed Immigration Adviser — your questions answered in detail.</p>
  </div>
</div>

<section class="section">
  <div class="container" style="max-width:700px;">

    <p style="margin-bottom:2rem;color:var(--text-light);">Use the form below to contact us and request a meeting with Dr. Carsten Hallwass. We will email you to arrange a time that suits your time zone.</p>

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
        <label class="form-label" for="c-msg">Message <span class="req" aria-hidden="true">*</span></label>
        <textarea class="form-textarea" id="c-msg" name="message" rows="5" required placeholder="Tell us briefly about your situation and what you would like to discuss."></textarea>
        <div class="form-error">Please enter your message</div>
      </div>
      <p class="form-required-note"><span class="req">*</span> Required field</p>
      <button class="btn btn-primary" type="submit">Request Consultation</button>
    </form>

    <div id="form-success" style="display:none;" role="alert">
      <div class="alert alert-info" style="margin-top:1.5rem;">
        Thank you for contacting us to request a meeting. We will email you to arrange a time that suits your time zone.
      </div>
    </div>

  </div>
</section>
