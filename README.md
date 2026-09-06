# Student Information
- **Student Name:** Rihad Hussain
- **Student ID:** CIHE 251260

---

# Veloce Systems — Developer Cloud Infrastructure & Serverless Hosting

![HTML5 Markup](https://img.shields.io/badge/HTML5-Semantic%20Markup-orange?style=flat-square&logo=html5)
![CSS3 Layouts](https://img.shields.io/badge/CSS3-Grid%20%26%20Flexbox-blue?style=flat-square&logo=css3)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-yellow?style=flat-square&logo=javascript)
![WCAG Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)

**Veloce Systems** (`Veloce.io`) is a clean, modern, and accessible front-end website prototype built for the **Technology Industry**. It presents a developer-focused cloud hosting and database platform.

The project is built strictly using **100% Vanilla HTML5, CSS3, and Vanilla JavaScript**, strictly adhering to web standards.

---

## 🚀 Selected Industry & Brand Concept

- **Selected Industry:** `Technology`
- **Brand Name:** Veloce Systems Inc. (`Veloce.io`)
- **Core Value Proposition:** Fast developer deployments, serverless API infrastructure, managed PostgreSQL databases, and simple cloud tools built by engineers for engineers.

---

## 📑 Page Structure & Breakdown

The project consists of 4 interconnected HTML5 pages with generous section padding (`80px` desktop / `56px` mobile) and clean whitespace:

| Page | File | Key Sections & Features |
| :--- | :--- | :--- |
| **Home** | [`index.html`](file:///Users/antigravity/Desktop/RIhad/index.html) | Sticky navigation bar, Hero banner with CLI code snippet, Animated performance stats bar, Core platform feature cards, Tech ecosystem integrations, Testimonials grid, Free trial banner, and 4-column Footer. |
| **Products** | [`solutions.html`](file:///Users/antigravity/Desktop/RIhad/solutions.html) | Catalog hero, Interactive category filter chips (*Hosting*, *Databases*, *API Gateways*, *Security*), Live search input, Filterable product cards, Native HTML5 `<dialog>` specification modal, and Pricing Tier comparison table. |
| **About Us** | [`about.html`](file:///Users/antigravity/Desktop/RIhad/about.html) | Company mission statement, Engineering ethos cards, Company history timeline (2021-2026), Core leadership team, and Accessible WAI-ARIA FAQ accordion. |
| **Contact** | [`contact.html`](file:///Users/antigravity/Desktop/RIhad/contact.html) | Technical inquiry form with real-time validation, Inline error announcements (`aria-describedby`), Toast notifications, Direct contact cards, and Regional office hubs. |

---

## ⚡ Interactive Vanilla JavaScript Modules (5 Modules)

1. **Light/Dark Mode Theme Manager (`js/theme.js`)**
   - Clean theme switching using CSS custom variables (`var(--bg-main)`).
   - Saved in `localStorage` key (`veloce-theme`).
   - Respects system preferences (`prefers-color-scheme`).

2. **Accessible Mobile Drawer Menu (`js/app.js`)**
   - Responsive mobile navigation drawer with smooth slide-in animation.
   - Operable via keyboard with `Escape` key close handler and `aria-expanded` toggle states.

3. **Dynamic Catalog Filter & Live Search (`js/catalog.js`)**
   - Filter product cards by category (*All*, *Hosting*, *Databases*, *APIs*, *Security*).
   - Real-time text search filtering by matching titles or descriptions.

4. **Accessible Product Specification Dialog Modal (`js/catalog.js`)**
   - Native HTML5 `<dialog>` element implementation with backdrop blur.
   - Populated dynamically with data attributes (`data-specs`, `data-title`, `data-desc`).
   - ESC key dismissal and backdrop click handler.

5. **Real-time Form Validation & Toast Banners (`js/contact.js` & `js/app.js`)**
   - Validates Full Name, Email format (regex), Subject, Product select, and Message length.
   - Accessible error messages attached via `aria-describedby` and `aria-invalid="true"`.
   - Focuses first error input on submit and displays dynamic feedback toast banners.

6. **WAI-ARIA Compliant FAQ Accordion (`js/accordion.js`)**
   - Expandable/collapsible FAQ items controlling `aria-expanded` and `aria-hidden`.
   - Keyboard arrow key navigation support (Arrow Down, Arrow Up, Home, End).

7. **Animated Metric Counters (`js/app.js`)**
   - Incrementally counts up statistics values using `IntersectionObserver` when scrolled into view.

---

## ♿ Accessibility & UX Features

- **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dialog>`.
- **Keyboard Usability:** Skip to main content link (`.skip-to-content`), focus rings (`:focus-visible`), WAI-ARIA attributes (`aria-expanded`, `aria-describedby`, `aria-invalid`, `aria-controls`, `aria-hidden`, `aria-live`).
- **High-Contrast Design:** WCAG 2.1 AA compliant contrast ratios across both Light and Dark mode themes.

---

## 📁 Repository Directory Layout

```
/Users/Desktop/Veloce/
├── index.html              # Home Page
├── solutions.html          # Products Page
├── about.html              # About Us & Team Page
├── contact.html            # Contact & Support Page
├── README.md               # Repository Documentation
├── css/
│   ├── variables.css       # Color tokens (Light & Dark theme) and typography
│   ├── main.css            # Base reset, typography, header, mobile drawer, footer
│   ├── components.css      # Buttons, cards, form inputs, dialog modal, accordions, toasts
│   └── responsive.css      # Mobile-first breakpoint rules (<768px, 768-1024px, >1024px)
└── js/
    ├── app.js              # Header drawer, active links, stat counters & toast helper
    ├── theme.js            # Light/Dark mode state & localStorage manager
    ├── catalog.js          # Product filtering, live search & dialog modal controller
    ├── accordion.js        # WAI-ARIA FAQ accordion component
    └── contact.js          # Form validation & accessible error messaging
```

---

## 🚀 How to Run Locally

No build tools or external servers required!

1. Clone or download the repository to your computer.
2. Open [`index.html`](file:///Users/admin/index.html) directly in any modern browser (Chrome, Firefox, Safari, Edge).
