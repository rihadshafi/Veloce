/**
 * Veloce Systems — Form Validation & Error Feedback Module
 * Real-time input checking, accessible ARIA announcements, and submission toast messaging
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
  });

  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
      name: {
        input: document.getElementById('fullName'),
        error: document.getElementById('nameError'),
        check: (val) => val.trim().length >= 2 || 'Please enter your full name (minimum 2 characters).'
      },
      email: {
        input: document.getElementById('emailAddress'),
        error: document.getElementById('emailError'),
        check: (val) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(val.trim()) || 'Please enter a valid work email address (e.g., name@company.com).';
        }
      },
      product: {
        input: document.getElementById('productSelect'),
        error: document.getElementById('productError'),
        check: (val) => val !== '' || 'Please select a primary area of interest.'
      },
      subject: {
        input: document.getElementById('subjectText'),
        error: document.getElementById('subjectError'),
        check: (val) => val.trim().length >= 3 || 'Please provide a brief subject topic.'
      },
      message: {
        input: document.getElementById('messageText'),
        error: document.getElementById('messageError'),
        check: (val) => val.trim().length >= 10 || 'Your message must be at least 10 characters long.'
      }
    };

    // Attach real-time validation listeners
    Object.keys(fields).forEach((key) => {
      const f = fields[key];
      if (!f.input) return;

      f.input.addEventListener('blur', () => validateSingleField(f));
      f.input.addEventListener('input', () => {
        if (f.input.classList.contains('input-invalid')) {
          validateSingleField(f);
        }
      });
    });

    // Form Submit Handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;
      let firstErrorInput = null;

      Object.keys(fields).forEach((key) => {
        const f = fields[key];
        if (f.input) {
          const valid = validateSingleField(f);
          if (valid !== true) {
            isFormValid = false;
            if (!firstErrorInput) firstErrorInput = f.input;
          }
        }
      });

      if (isFormValid) {
        if (window.showToastMessage) {
          window.showToastMessage('Thank you! Your inquiry has been sent to our engineering team. We will get back to you shortly.', 'success');
        }
        form.reset();
        Object.keys(fields).forEach((key) => {
          const f = fields[key];
          if (f.input) {
            f.input.classList.remove('input-valid', 'input-invalid');
          }
        });
      } else if (firstErrorInput) {
        firstErrorInput.focus();
        if (window.showToastMessage) {
          window.showToastMessage('Please fix the highlighted fields in the form before submitting.', 'error');
        }
      }
    });

    function validateSingleField(f) {
      const value = f.input.value;
      const res = f.check(value);

      if (res === true) {
        f.input.classList.remove('input-invalid');
        f.input.classList.add('input-valid');
        f.input.setAttribute('aria-invalid', 'false');
        if (f.error) {
          f.error.classList.remove('visible');
          f.error.textContent = '';
        }
        return true;
      } else {
        f.input.classList.remove('input-valid');
        f.input.classList.add('input-invalid');
        f.input.setAttribute('aria-invalid', 'true');
        if (f.error) {
          f.error.classList.add('visible');
          f.error.textContent = res;
        }
        return res;
      }
    }
  }
})();
