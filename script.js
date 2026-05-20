/* Prowess static site behaviors
   - Mobile nav toggle
   - Sticky CTA visibility observer (already CSS-driven on product pages)
   - Reveal-on-scroll via IntersectionObserver
   - GA4 CTA click instrumentation stub (reads data-cta-id, data-page, data-stage)
*/
(function () {
  'use strict';

  // 1. Mobile nav toggle
  function initMobileNav() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-mobile-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close mobile nav when a link is clicked
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Reveal-on-scroll
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  // 3. Sticky mobile CTA — CSS-driven via body.has-sticky-cta; we just expose a hide-on-footer-visible
  function initStickyCta() {
    var cta = document.querySelector('.sticky-mobile-cta');
    var footer = document.querySelector('.site-footer');
    if (!cta || !footer || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        cta.style.opacity = e.isIntersecting ? '0' : '1';
        cta.style.pointerEvents = e.isIntersecting ? 'none' : 'auto';
      });
    }, { threshold: 0.05 });
    io.observe(footer);
  }

  // 4. CTA click instrumentation stub (queues for future GA4)
  function initCtaTracking() {
    window.dataLayer = window.dataLayer || [];
    document.addEventListener('click', function (ev) {
      var target = ev.target.closest('[data-cta-id]');
      if (!target) return;
      window.dataLayer.push({
        event: 'cta_click',
        cta_id: target.getAttribute('data-cta-id'),
        page: target.getAttribute('data-page'),
        stage: target.getAttribute('data-stage'),
        href: target.getAttribute('href') || null
      });
    });
  }

  // 5. Current year in footer
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initMobileNav(); initReveal(); initStickyCta(); initCtaTracking(); initYear();
    });
  } else {
    initMobileNav(); initReveal(); initStickyCta(); initCtaTracking(); initYear();
  }
})();
