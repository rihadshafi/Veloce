/**
 * Veloce Systems — Product Catalog & Detail Modal Controller
 * Category chip filtering, live search, and accessible native <dialog> pop-up handling
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    setupCatalogFilter();
    setupProductModal();
  });

  function setupCatalogFilter() {
    const chips = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('catalogSearch');
    const cards = document.querySelectorAll('.product-card');

    if (!chips.length && !searchInput) return;

    let selectedCategory = 'all';

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        selectedCategory = chip.getAttribute('data-category');
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => applyFilter());
    }

    function applyFilter() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const desc = (card.getAttribute('data-desc') || '').toLowerCase();

        const matchCat = selectedCategory === 'all' || category === selectedCategory;
        const matchSearch = title.includes(query) || desc.includes(query);

        if (matchCat && matchSearch) {
          card.style.display = 'flex';
          card.setAttribute('aria-hidden', 'false');
        } else {
          card.style.display = 'none';
          card.setAttribute('aria-hidden', 'true');
        }
      });
    }
  }

  function setupProductModal() {
    const dialog = document.getElementById('productDialog');
    const closeBtn = document.getElementById('dialogCloseBtn');
    const viewBtns = document.querySelectorAll('.view-spec-btn');

    if (!dialog) return;

    viewBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;

        const title = card.getAttribute('data-title') || 'Product Specifications';
        const desc = card.getAttribute('data-desc') || 'Detailed platform infrastructure specification.';
        const category = card.getAttribute('data-category') || 'Platform';
        const specs = (card.getAttribute('data-specs') || '').split('|');

        document.getElementById('dialogTitle').textContent = title;
        document.getElementById('dialogCategory').textContent = category.toUpperCase();
        document.getElementById('dialogDesc').textContent = desc;

        const specList = document.getElementById('dialogSpecs');
        if (specList) {
          specList.innerHTML = specs.map((s) => `<li>🔹 <strong>${s.trim()}</strong></li>`).join('');
        }

        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          dialog.setAttribute('open', '');
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeDialog());
    }

    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        closeDialog();
      }
    });

    function closeDialog() {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
    }
  }
})();
