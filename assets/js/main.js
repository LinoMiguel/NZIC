/* NZIC main.js — navigation, mega-menu, FAQ accordion, forms */
(function () {
  'use strict';

  /* ── Mega-menu ─────────────────────────────────────────── */
  const navItems = document.querySelectorAll('.nav-item.has-mega');
  let openMenu = null;

  function closeMenu(item) {
    if (!item) return;
    const btn = item.querySelector('.nav-link-btn');
    const panel = item.querySelector('.mega-menu');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (panel) panel.classList.remove('is-open');
    openMenu = null;
  }

  function openMenuFn(item) {
    if (openMenu && openMenu !== item) closeMenu(openMenu);
    const btn = item.querySelector('.nav-link-btn');
    const panel = item.querySelector('.mega-menu');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (panel) panel.classList.add('is-open');
    openMenu = item;
  }

  navItems.forEach(function (item) {
    const btn = item.querySelector('.nav-link-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(item); } else { openMenuFn(item); }
    });

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(item); btn.focus(); }
    });
  });

  document.addEventListener('click', function (e) {
    if (openMenu && !openMenu.contains(e.target)) closeMenu(openMenu);
  });

  /* ── Mobile nav ────────────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── FAQ accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    const id = 'faq-' + Math.random().toString(36).slice(2);
    answer.id = id;
    btn.setAttribute('aria-controls', id);
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  /* ── Filter (jobs / talent pool) ──────────────────────── */
  const filterSelect = document.getElementById('sector-filter');
  const filterClear = document.getElementById('filter-clear');
  const filterCount = document.getElementById('filter-count');
  const filterableItems = document.querySelectorAll('[data-sector]');

  function applyFilter(sector) {
    let visible = 0;
    filterableItems.forEach(function (item) {
      const match = !sector || item.dataset.sector === sector;
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (filterCount) filterCount.textContent = visible + ' result' + (visible !== 1 ? 's' : '');
    const noResults = document.getElementById('no-results');
    if (noResults) noResults.style.display = visible === 0 ? '' : 'none';
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', function () {
      applyFilter(this.value);
    });
  }
  if (filterClear) {
    filterClear.addEventListener('click', function () {
      if (filterSelect) filterSelect.value = '';
      applyFilter('');
    });
  }

  /* ── Multi-step form ───────────────────────────────────── */
  const formSteps = document.querySelectorAll('.form-step');
  const progressSteps = document.querySelectorAll('.form-progress-step');
  let currentStep = 0;

  function showStep(n) {
    formSteps.forEach(function (s, i) {
      s.classList.toggle('is-active', i === n);
    });
    progressSteps.forEach(function (s, i) {
      s.classList.toggle('done', i < n);
      s.classList.toggle('active', i === n);
    });
    currentStep = n;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-next-step]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const step = formSteps[currentStep];
      if (step && !validateStep(step)) return;
      if (currentStep < formSteps.length - 1) showStep(currentStep + 1);
    });
  });

  document.querySelectorAll('[data-prev-step]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (currentStep > 0) showStep(currentStep - 1);
    });
  });

  if (formSteps.length > 0) showStep(0);

  function validateStep(step) {
    let valid = true;
    step.querySelectorAll('[required]').forEach(function (field) {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        if (group) group.classList.add('has-error');
        valid = false;
      } else {
        if (group) group.classList.remove('has-error');
      }
    });
    if (!valid) {
      const first = step.querySelector('.has-error [required]');
      if (first) first.focus();
    }
    return valid;
  }

  /* ── Conditional form fields ──────────────────────────── */
  document.querySelectorAll('[data-reveals]').forEach(function (input) {
    function toggle() {
      const targetId = input.dataset.reveals;
      const target = document.getElementById(targetId);
      if (!target) return;
      const show = input.type === 'checkbox'
        ? input.checked
        : (input.value === input.dataset.revealsWhen);
      target.classList.toggle('is-visible', show);
      target.querySelectorAll('input,select,textarea').forEach(function (f) {
        f.required = show && f.dataset.originalRequired === 'true';
        if (!show) f.value = '';
      });
    }
    input.addEventListener('change', toggle);
    toggle();
  });

  /* ── File size validation ─────────────────────────────── */
  document.querySelectorAll('input[type="file"][data-max-mb]').forEach(function (input) {
    const maxMb = parseFloat(input.dataset.maxMb) || 10;
    input.addEventListener('change', function () {
      const group = input.closest('.form-group');
      const err = group ? group.querySelector('.form-error') : null;
      if (input.files[0] && input.files[0].size > maxMb * 1024 * 1024) {
        if (err) err.textContent = 'Max file size is ' + maxMb + ' MB';
        if (group) group.classList.add('has-error');
        input.value = '';
      } else {
        if (group) group.classList.remove('has-error');
      }
    });
  });

  /* ── Consent checkbox gate ────────────────────────────── */
  const consentCheck = document.getElementById('consent-check');
  const submitBtn = document.getElementById('form-submit');
  if (consentCheck && submitBtn) {
    submitBtn.disabled = true;
    consentCheck.addEventListener('change', function () {
      submitBtn.disabled = !this.checked;
    });
  }

  /* ── Sticky header offset for anchor links ───────────── */
  if (window.location.hash) {
    setTimeout(function () {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  /* ── Hero slideshow ─────────────────────────────────── */
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;
    setInterval(function () {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5000);
  }

})();
