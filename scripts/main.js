/* ==========================================================================
   ByteSpace Master Application Script
   Orchestrates navigation, animations, toast alerts, and components
   ========================================================================== */

import { initCourseCatalog } from './courseCatalog.js';
import { initAuthModal } from './authModal.js';
import { testimonialsData } from './data.js';

// Global Toast Notification Manager
export function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const removeToast = () => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', removeToast);
  setTimeout(removeToast, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Elevation on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close when clicking nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Render Testimonials
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = testimonialsData.map(test => `
      <div class="testimonial-card">
        <div class="testimonial-quote-icon">“</div>
        <p class="testimonial-text">${test.quote}</p>
        <div>
          <div class="testimonial-stars">
            ${'★'.repeat(test.stars)}
          </div>
          <div class="testimonial-author">
            <img src="${test.avatar}" alt="${test.name}" class="author-avatar" loading="lazy">
            <div class="author-info">
              <h4>${test.name}</h4>
              <p>${test.role}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Newsletter Subscription Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput?.value.trim();
      if (email) {
        showToast(`🎉 Thanks for subscribing! Weekly tech digests sent to ${email}`, 'success');
        newsletterForm.reset();
      }
    });
  }

  // 5. Initialize Components
  initCourseCatalog(showToast);
  initAuthModal(showToast);
});
