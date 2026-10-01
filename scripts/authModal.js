/* ==========================================================================
   ByteSpace Interactive Auth Modal (Login / Sign Up)
   Enables seamless auth interaction directly from Landing Page
   ========================================================================== */

export function initAuthModal(showToast) {
  const overlay = document.getElementById('authModalOverlay');
  if (!overlay) return;

  const closeBtn = document.getElementById('modalCloseBtn');
  const triggerLoginBtns = document.querySelectorAll('.trigger-login-modal');
  const triggerSignupBtns = document.querySelectorAll('.trigger-signup-modal');
  
  const loginFormView = document.getElementById('modalLoginFormView');
  const signupFormView = document.getElementById('modalSignupFormView');
  const switchToSignupBtn = document.getElementById('modalSwitchToSignup');
  const switchToLoginBtn = document.getElementById('modalSwitchToLogin');

  function openModal(mode = 'login') {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (mode === 'signup') {
      showSignup();
    } else {
      showLogin();
    }
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showLogin() {
    if (loginFormView && signupFormView) {
      loginFormView.style.display = 'block';
      signupFormView.style.display = 'none';
    }
  }

  function showSignup() {
    if (loginFormView && signupFormView) {
      loginFormView.style.display = 'none';
      signupFormView.style.display = 'block';
    }
  }

  // Event Listeners for triggers
  triggerLoginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('login');
    });
  });

  triggerSignupBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('signup');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (switchToSignupBtn) {
    switchToSignupBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSignup();
    });
  }

  if (switchToLoginBtn) {
    switchToLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showLogin();
    });
  }

  // Modal Login Form submit
  const modalLoginForm = document.getElementById('modalLoginForm');
  if (modalLoginForm) {
    modalLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('modalLoginEmail')?.value;
      closeModal();
      if (showToast) {
        showToast(`Welcome back, ${email || 'Scholar'}! Logged in successfully.`, 'success');
      }
    });
  }

  // Modal Signup Form submit
  const modalSignupForm = document.getElementById('modalSignupForm');
  if (modalSignupForm) {
    modalSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalSignupName')?.value;
      closeModal();
      if (showToast) {
        showToast(`Account created for ${name || 'User'}! Welcome to ByteSpace.`, 'success');
      }
    });
  }

  // Social Login Mock
  overlay.querySelectorAll('.btn-social').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.textContent.trim();
      closeModal();
      if (showToast) {
        showToast(`Authenticated with ${provider}!`, 'success');
      }
    });
  });
}
