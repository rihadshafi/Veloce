/**
 * Veloce Systems — Theme Manager Module
 * Toggles Light and Dark color themes with localStorage persistence and OS preference detection
 */

(function () {
  'use strict';

  const THEME_KEY = 'veloce-theme';
  const root = document.documentElement;

  // Retrieve theme preference
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to HTML tag
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateButtonsAccessibility(theme);
  }

  function updateButtonsAccessibility(theme) {
    const buttons = document.querySelectorAll('.theme-button');
    const isDark = theme === 'dark';
    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light color theme' : 'Switch to dark color theme');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getInitialTheme();
    applyTheme(currentTheme);

    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const active = root.getAttribute('data-theme');
        const next = active === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
})();
