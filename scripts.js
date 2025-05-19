// Smooth redirect for 'Enter the Zone' button on homepage
document.addEventListener('DOMContentLoaded', () => {
  const ctaBtn = document.querySelector('.cta-button');
  if(ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }

  // Simple welcome alert on dashboard
  if(window.location.pathname.endsWith('dashboard.html')) {
    alert('Welcome back, Trader. Stay sharp.');
  }
});