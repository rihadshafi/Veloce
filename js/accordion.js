/**
 * Veloce Systems — WAI-ARIA Accessible Accordion Component
 * Expandable FAQ items with keyboard arrow navigation
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initAccordions();
  });

  function initAccordions() {
    const wrappers = document.querySelectorAll('.accordion-wrapper');

    wrappers.forEach((wrapper) => {
      const triggers = Array.from(wrapper.querySelectorAll('.accordion-trigger'));

      triggers.forEach((btn, idx) => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        if (!panel) return;

        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';

          btn.setAttribute('aria-expanded', !expanded);
          panel.classList.toggle('active', !expanded);
          panel.setAttribute('aria-hidden', expanded);
        });

        // WAI-ARIA Keyboard Navigation
        btn.addEventListener('keydown', (e) => {
          let nextIdx = null;

          switch (e.key) {
            case 'ArrowDown':
              nextIdx = (idx + 1) % triggers.length;
              break;
            case 'ArrowUp':
              nextIdx = (idx - 1 + triggers.length) % triggers.length;
              break;
            case 'Home':
              nextIdx = 0;
              break;
            case 'End':
              nextIdx = triggers.length - 1;
              break;
            default:
              return;
          }

          e.preventDefault();
          triggers[nextIdx].focus();
        });
      });
    });
  }
})();
