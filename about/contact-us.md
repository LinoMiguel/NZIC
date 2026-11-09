---
layout: default
title: Contact Us
description: Contact New Zealand Immigration Concepts Ltd — offices in Nelson and Wellington.
permalink: /about/contact-us/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">Home</a></li>
      <li><a href="{{ '/about/who-we-are' | relative_url }}">About</a></li>
      <li><span aria-current="page">Contact Us</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Contact Us</h1>
    <p class="lead">Get in touch with our Nelson or Wellington office. Initial contact is by email — we will arrange a time that suits your time zone.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <div class="card-grid" style="margin-bottom:3rem;">
      {% for office in site.data.offices %}
      <div class="office-card">
        <h2>{{ office.label }}</h2>
        <p><strong>{{ office.address }}</strong></p>
        <p>{{ office.hours }} {{ office.hours_note }}</p>
        {% if office.maps_link %}
        <a href="{{ office.maps_link }}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top:0.75rem;">View on map &#8599;</a>
        {% endif %}
      </div>
      {% endfor %}
    </div>

    <div style="text-align:center;padding:2rem 0;">
      <h2 style="font-family:var(--font-heading);color:var(--navy);margin-bottom:1rem;">Email us</h2>
      <p style="font-size:1.2rem;margin-bottom:1.5rem;"><a href="mailto:info@new-zealand-immigration.com">info@new-zealand-immigration.com</a></p>
      <p class="text-muted">Appointments are arranged by email to suit your time zone. No public phone line — please email to get started.</p>
    </div>

    <div style="text-align:center;padding:2rem 0 1rem;">
      <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}">Get your free assessment</a>
      <a class="btn btn-outline" href="{{ '/consultation' | relative_url }}" style="margin-left:1rem;">Request a consultation</a>
    </div>

  </div>
</section>
