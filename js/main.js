/* ============================================
   Ward de Groot — Portfolio
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded',
        links.classList.contains('nav__links--open'));
    });
    // Close on link click
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.add('reveal--visible');
          }
          if (entry.target.classList.contains('reveal-stagger')) {
            entry.target.classList.add('reveal-stagger--visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  }

  // --- Prompt counter animation ---
  const counter = document.querySelector('.prompt-counter__number');
  if (counter) {
    const target = parseInt(counter.dataset.count, 10);
    let hasAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          let current = 0;
          const duration = 1200;
          const stepTime = Math.max(Math.floor(duration / target), 40);

          const tick = () => {
            current++;
            counter.textContent = current;
            if (current < target) {
              setTimeout(tick, stepTime);
            }
          };
          // Small delay so it feels intentional
          setTimeout(tick, 300);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(counter.closest('.prompt-counter'));
  }

  // --- Active nav link ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath ||
        (currentPath === '' && href === 'index.html') ||
        (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
});
