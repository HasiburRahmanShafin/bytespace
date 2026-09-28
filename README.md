# ByteSpace - Modern E-Learning & Tech Skills Platform

ByteSpace is a high-performance, modern e-learning platform web application built to mirror the Figma design specifications.

## 🚀 Live Demo & Features

### 1. Complete Landing Page (Required)
- **Hero Section**: Distinct electric/royal blue theme (`#1657ff`) with Memphis-style geometric accents, neon lime highlights (`#ccff00` / `#d4f83a`), live search bar with category filters, hero student visual with floating interactive statistics pills (`4.9 Rating`, `500+ Courses`, `25k+ Active Learners`).
- **Partner Trust Bar**: Global technology partners and universities.
- **Popular Best Courses**: Filterable course directory by category (All, Development, Design, AI & Data Science, Cloud & DevOps, Mobile), course cards with pricing, duration, ratings, and instructor details.
- **Topic Exploration**: 6 interactive topic cards with neon lime icon badges, course counts, and smooth hover micro-interactions.
- **Career Growth Feature**: Value proposition showcasing learning paths, accredited certifications, and career transition statistics.
- **Community & Mentorship**: Interactive community feature showcasing peer reviews, live mentoring, and discord collaboration with floating notification badges.
- **Call-to-Action (CTA) Banner**: Engaging conversion section with Memphis geometric shapes and quick signup.
- **Student Testimonials**: Verified student success stories from industry professionals at Stripe, Figma, and Amazon.
- **Comprehensive Footer**: Navigation links, program categories, social channels, system status indicator, and interactive newsletter subscription.

### 2. Login & Sign Up Pages (Bonus Extra Credit)
- **Login Page (`login.html`)**: Split-screen design with branded blue background, dashboard interface mockup on the left, and authentication form on the right (Google/GitHub social auth, remember me, password visibility toggle, responsive validation).
- **Sign Up Page (`signup.html`)**: Matching split-screen design with new account onboarding form, password strength meter, terms acceptance, and seamless switching to login.
- **Interactive Auth Modal**: Built-in modal available directly on the landing page for quick access without page reload.

---

## 🛠️ Technology Stack & Architecture

- **HTML5**: Clean, semantic, accessible structure (ARIA attributes, heading hierarchy, SEO meta tags).
- **Vanilla CSS3**: Design system tokens (CSS custom properties), glassmorphism, responsive CSS Grid and Flexbox, keyframe animations, smooth micro-interactions.
- **Modern JavaScript (ES6+)**: Modular components, stateful course filtering, live search, testimonial carousel, modal state management, toast notifications, form validation.
- **Zero Heavy Dependencies**: Blazing fast load times, zero build friction, 100% responsive across mobile, tablet, and desktop viewports.

---

## 💻 Getting Started Locally

### Option 1: Direct in Browser
Open `index.html`, `login.html`, or `signup.html` in any modern web browser or use VS Code Live Server.

### Option 2: Using Node Dev Server
```bash
# Serve with any static server, e.g.:
npx serve .
# Or run with Vite:
npm install
npm run dev
```

---

## 🌿 Git Branching & Workflow

This project adheres to strict Git branching conventions:
- **`main`**: Production-ready base branch.
- **`feature/landing-and-auth-pages`**: Development branch containing the implementation of the landing page, login page, signup page, and modular design system.
