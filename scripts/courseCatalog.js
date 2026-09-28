/* ==========================================================================
   ByteSpace Course Catalog Component
   Interactive filtering, searching, and dynamic card generation
   ========================================================================== */

import { coursesData, categoriesData } from './data.js';

export function initCourseCatalog(showToast) {
  const coursesGrid = document.getElementById('coursesGrid');
  const filterTabsContainer = document.getElementById('filterTabsContainer');
  const categoriesGrid = document.getElementById('categoriesGrid');
  const searchInput = document.getElementById('heroSearchInput');
  const searchCategorySelect = document.getElementById('heroCategorySelect');
  const searchForm = document.getElementById('heroSearchForm');

  let activeCategory = 'All';
  let searchQuery = '';

  // Render Category Topic Cards (Figma 6-box Grid)
  if (categoriesGrid) {
    categoriesGrid.innerHTML = categoriesData.map(cat => `
      <div class="category-card" data-category="${cat.title}">
        <div class="category-icon-wrapper">
          ${cat.icon}
        </div>
        <h4 class="category-title">${cat.title}</h4>
        <p class="category-count">${cat.coursesCount}</p>
      </div>
    `).join('');

    // Clicking a category card scrolls and filters
    categoriesGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.category;
        const matchingTab = Array.from(filterTabsContainer.querySelectorAll('.filter-tab-btn'))
          .find(btn => btn.dataset.category.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(btn.dataset.category.toLowerCase()));
        
        if (matchingTab) {
          matchingTab.click();
        } else {
          activeCategory = 'All';
          renderCourses();
        }

        const section = document.getElementById('coursesSection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Render Filter Tab Buttons
  const uniqueCategories = ['All', 'Development', 'UI/UX Design', 'AI & Data Science', 'Cloud & DevOps', 'Business & Marketing'];
  
  if (filterTabsContainer) {
    filterTabsContainer.innerHTML = uniqueCategories.map(cat => `
      <button class="filter-tab-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    filterTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-tab-btn');
      if (!btn) return;

      filterTabsContainer.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderCourses();
    });
  }

  // Filter and Render Courses
  function renderCourses() {
    if (!coursesGrid) return;

    let filtered = coursesData.filter(course => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
      const matchesSearch = !searchQuery || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      coursesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <h3 style="color: var(--color-text-dark); margin-bottom: 0.5rem;">No courses found</h3>
          <p style="color: var(--color-text-muted);">Try adjusting your search query or switching categories.</p>
          <button class="btn btn-primary" id="resetFiltersBtn" style="margin-top: 1.5rem;">View All Courses</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'All';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          const allBtn = filterTabsContainer.querySelector('[data-category="All"]');
          if (allBtn) allBtn.click();
        });
      }
      return;
    }

    coursesGrid.innerHTML = filtered.map(course => `
      <div class="course-card" data-id="${course.id}">
        <div class="course-thumb-box">
          <img src="${course.image}" alt="${course.title}" class="course-thumb-img" loading="lazy">
          <span class="course-tag-badge">${course.categoryTag}</span>
          <span class="course-level-badge">${course.level}</span>
        </div>
        <div class="course-card-body">
          <div class="course-meta-top">
            <div class="course-rating">
              <span class="star-icon">★</span>
              <span>${course.rating}</span>
              <span class="rating-count">(${course.reviewsCount})</span>
            </div>
            <div class="course-duration">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${course.duration}</span>
            </div>
          </div>
          <h3 class="course-card-title">${course.title}</h3>
          
          <div class="course-instructor">
            <img src="${course.instructor.avatar}" alt="${course.instructor.name}" class="instructor-avatar">
            <div class="instructor-info">
              <span class="instructor-name">${course.instructor.name}</span>
              <span class="instructor-title">${course.instructor.role}</span>
            </div>
          </div>

          <div class="course-card-footer">
            <div class="course-pricing">
              <span class="current-price">$${course.price.toFixed(2)}</span>
              <span class="original-price">$${course.originalPrice.toFixed(2)}</span>
            </div>
            <button class="btn btn-enroll-sm btn-enroll-action" data-course-title="${course.title}">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Enroll listeners
    coursesGrid.querySelectorAll('.btn-enroll-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = btn.dataset.courseTitle;
        if (showToast) {
          showToast(`🎉 Enrolled in "${title}"! Check your student portal.`, 'success');
        }
      });
    });
  }

  // Hero Search Form submission & typing
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (searchInput) searchQuery = searchInput.value.trim();
      if (searchCategorySelect && searchCategorySelect.value !== 'all') {
        activeCategory = searchCategorySelect.value;
        const matchingTab = filterTabsContainer ? filterTabsContainer.querySelector(`[data-category="${activeCategory}"]`) : null;
        if (matchingTab) {
          filterTabsContainer.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
          matchingTab.classList.add('active');
        }
      }
      renderCourses();
      const section = document.getElementById('coursesSection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initial render
  renderCourses();
}
