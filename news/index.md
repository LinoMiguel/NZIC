---
layout: default
title: Immigration News
description: NZ immigration policy updates, visa changes, and job market news from the NZIC team.
permalink: /news/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="{{ '/' | relative_url }}">🏠 Home</a></li>
      <li><span aria-current="page">Immigration News</span></li>
    </ol>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Immigration News</h1>
    <p class="lead">NZ immigration policy updates, visa category changes, and job market news — written for people considering migrating to New Zealand.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    {% if site.news_posts.size > 0 %}
    <div class="card-grid">
      {% assign sorted_posts = site.news_posts | sort: 'date' | reverse %}
      {% for post in sorted_posts %}
      <a class="news-card" href="{{ post.url | relative_url }}" style="text-decoration:none;color:inherit;">
        <div class="news-card-img" aria-hidden="true">
          <div style="width:100%;height:100%;background:var(--bg-light);display:flex;align-items:center;justify-content:center;font-size:3rem;">📰</div>
        </div>
        <div class="news-card-body">
          {% if post.tags %}<span class="news-tag">{{ post.tags | first }}</span>{% endif %}
          <div class="news-title">{{ post.title }}</div>
          {% if post.date %}<div class="news-date">{{ post.date | date: "%-d %B %Y" }}</div>{% endif %}
          {% if post.excerpt %}<div class="news-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</div>{% endif %}
          <span class="news-read-more">Read more →</span>
        </div>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <div class="alert alert-info" style="max-width:600px;margin:0 auto;">
      News posts are coming soon. To add news articles, create files in the <code>_news_posts/</code> folder with the <code>post</code> layout. Each post should include <code>title</code>, <code>date</code>, and <code>tags</code> in its front matter.
    </div>
    {% endif %}

    <div style="text-align:center;margin-top:3rem;">
      <p style="color:var(--text-muted);margin-bottom:1rem;">Stay up to date with NZ immigration changes — get our insights delivered by email.</p>
      <a class="btn btn-primary" href="{{ '/free-assessment' | relative_url }}">Get your free assessment</a>
    </div>

  </div>
</section>
