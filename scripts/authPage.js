/* ==========================================================================
   ByteSpace Standalone Auth Pages Script (Login & Sign Up)
   Handles form validation, password show/hide, simulated auth, redirects
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Password Visibility Toggle
  const toggleBtns = document.querySelectorAll('.btn-toggle-password');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;

      if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;
      } else {
        input.type = 'password';
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
      }
    });
  });

  // Login Form Submission
  const loginForm = document.getElementById('standaloneLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value.trim();
      const submitBtn = loginForm.querySelector('.btn-auth-submit');
      
      if (submitBtn) {
        submitBtn.textContent = 'Signing in...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        alert(`Welcome back to ByteSpace, ${email}! Redirecting to student dashboard...`);
        window.location.href = 'index.html';
      }, 1000);
    });
  }

  // Signup Form Submission
  const signupForm = document.getElementById('standaloneSignupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName')?.value.trim();
      const password = document.getElementById('signupPassword')?.value;
      const confirmPassword = document.getElementById('signupConfirmPassword')?.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match! Please check your input.');
        return;
      }

      const submitBtn = signupForm.querySelector('.btn-auth-submit');
      if (submitBtn) {
        submitBtn.textContent = 'Creating Account...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        alert(`Account created successfully for ${name}! Welcome to ByteSpace.`);
        window.location.href = 'index.html';
      }, 1000);
    });
  }

  // Social Auth Buttons Click
  const socialBtns = document.querySelectorAll('.btn-social');
  socialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.textContent.trim();
      alert(`Connecting with ${provider}... Redirecting to dashboard.`);
      window.location.href = 'index.html';
    });
  });
});
