/* ============================================
   Ward de Groot — Portfolio
   Shared Components (Nav + Footer)
   ============================================ */

(function () {
  // Detect if we're in a subdirectory (e.g. /projects/)
  const depth = window.location.pathname.includes('/projects/') ? '../' : '';

  // --- Navigation ---
  function renderNav() {
    const target = document.getElementById('site-nav');
    if (!target) return;

    target.outerHTML = `
    <nav class="nav" role="navigation" aria-label="Main navigation">
      <div class="nav__inner">
        <a href="${depth}index.html" class="nav__logo">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="10" fill="#1a5a8a"/>
            <text x="18" y="24" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="system-ui">W</text>
          </svg>
        </a>
        <ul class="nav__links">
          <li><a href="${depth}index.html" class="nav__link">Home</a></li>
          <li><a href="${depth}projects.html" class="nav__link">My work</a></li>
          <li><a href="${depth}about.html" class="nav__link">About me</a></li>
          <li><a href="${depth}cv.html" class="nav__link">CV</a></li>
        </ul>
        <a href="https://www.linkedin.com/in/warddegroot96/" target="_blank" rel="noopener" class="nav__cta">Get in touch</a>
        <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
  }

  // --- Footer ---
  function renderFooter() {
    const target = document.getElementById('site-footer');
    if (!target) return;

    target.outerHTML = `
    <footer class="footer">
      <div class="prompt-counter">
        <span class="prompt-counter__number" data-count="15">0</span>
        <span class="prompt-counter__label">prompts built<br>this portfolio</span>
      </div>
      <ul class="footer__links">
        <li><a href="https://www.linkedin.com/in/warddegroot96/" class="footer__link" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="${depth}cv.html" class="footer__link">CV</a></li>
      </ul>
      <p class="footer__updated">Last updated: March 2026</p>
      <p class="footer__copy">&copy; 2026 Ward de Groot. All rights reserved.</p>
    </footer>`;
  }

  renderNav();
  renderFooter();
})();
