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

  // --- Time-of-day greeting ---
  const greetingEl = document.getElementById('greeting');
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';
    greetingEl.textContent = greeting;
  }

  // --- Rotating hero headline (fixed height to prevent layout shift) ---
  const heroStatement = document.getElementById('hero-statement');
  if (heroStatement) {
    const lines = heroStatement.querySelectorAll('.hero__statement-line');
    if (lines.length > 1) {
      // Measure the tallest line and lock the container height
      let maxHeight = 0;
      lines.forEach((line) => {
        line.style.position = 'relative';
        line.style.visibility = 'visible';
        line.style.opacity = '1';
        maxHeight = Math.max(maxHeight, line.offsetHeight);
      });
      heroStatement.style.minHeight = maxHeight + 'px';
      // Reset all lines to absolute, except the active one
      lines.forEach((line) => {
        line.style.position = '';
        line.style.visibility = '';
        line.style.opacity = '';
      });

      let current = 0;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        setInterval(() => {
          lines[current].classList.remove('hero__statement-line--active');
          current = (current + 1) % lines.length;
          lines[current].classList.add('hero__statement-line--active');
        }, 4000);
      }
    }
  }

  // --- Cursor-reactive blobs ---
  const blobs = document.querySelectorAll('.hero__blob');
  if (blobs.length > 0) {
    const depths = [0.03, -0.02, 0.015]; // parallax intensity per blob
    const hero = document.querySelector('.hero');

    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        // Normalize cursor position to -1 … 1 from center
        const nx = (e.clientX - rect.left) / rect.width * 2 - 1;
        const ny = (e.clientY - rect.top) / rect.height * 2 - 1;

        blobs.forEach((blob, i) => {
          const d = depths[i] || 0.02;
          const moveX = nx * rect.width * d;
          const moveY = ny * rect.height * d;
          blob.style.translate = `${moveX}px ${moveY}px`;
        });
      });

      hero.addEventListener('mouseleave', () => {
        blobs.forEach((blob) => {
          blob.style.translate = '0 0';
        });
      });
    }
  }

  // --- Draggable hero tags with spring-back ---
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag) => {
    let isDragging = false;
    let startX, startY, offsetX, offsetY;
    let savedAnimation = '';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    tag.style.pointerEvents = 'auto';
    tag.style.cursor = 'grab';
    tag.style.userSelect = 'none';

    function onStart(e) {
      isDragging = true;
      const point = e.touches ? e.touches[0] : e;
      const rect = tag.getBoundingClientRect();
      startX = rect.left;
      startY = rect.top;
      offsetX = point.clientX - rect.left;
      offsetY = point.clientY - rect.top;

      // Kill animation entirely so inline transform works
      savedAnimation = getComputedStyle(tag).animation;
      tag.style.animation = 'none';
      tag.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out';
      tag.style.cursor = 'grabbing';
      tag.style.zIndex = '10';
      tag.style.transform = 'translate(0, 0) scale(1.08)';
      tag.style.boxShadow = '0 8px 24px oklch(50% 0.01 240 / 0.15)';
    }

    function onMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      const dx = point.clientX - offsetX - startX;
      const dy = point.clientY - offsetY - startY;
      tag.style.transition = 'none';
      tag.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
    }

    function onEnd() {
      if (!isDragging) return;
      isDragging = false;
      // Spring back — soft overshoot, then settle
      tag.style.transition = 'transform 0.7s cubic-bezier(0.22, 1.2, 0.36, 1), box-shadow 0.4s ease-out';
      tag.style.transform = 'translate(0, 0) scale(1)';
      tag.style.boxShadow = '';
      tag.style.cursor = 'grab';

      // Resume drift animation after spring-back completes
      setTimeout(() => {
        tag.style.transform = '';
        tag.style.transition = '';
        tag.style.zIndex = '';
        if (!prefersReducedMotion) {
          tag.style.animation = '';
        }
      }, 750);
    }

    tag.addEventListener('mousedown', onStart);
    tag.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
  });

  // --- Confetti easter egg on monogram click (only on homepage) ---
  const logo = document.querySelector('.nav__logo');
  if (logo) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isHome = currentPage === 'index.html' || currentPage === '' || currentPage === 'portfolio' || currentPage === 'portfolio/';
    if (isHome) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        fireConfetti(logo);
      });
    }
  }

  function fireConfetti(origin) {
    const rect = origin.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = [
      'oklch(55% 0.13 240)',  // primary blue
      'oklch(65% 0.15 260)',  // lighter blue
      'oklch(70% 0.12 200)',  // teal
      'oklch(75% 0.10 280)',  // purple-ish
      'oklch(80% 0.08 60)',   // warm accent
    ];
    const count = 30;
    const pieces = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 6 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const velocity = 60 + Math.random() * 80;
      const spin = (Math.random() - 0.5) * 720;

      Object.assign(el.style, {
        position: 'fixed',
        left: cx + 'px',
        top: cy + 'px',
        width: size + 'px',
        height: size + 'px',
        background: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        pointerEvents: 'none',
        zIndex: '9999',
      });

      document.body.appendChild(el);
      pieces.push({ el, angle, velocity, spin, x: cx, y: cy, vy: 0, life: 1 });
    }

    let start = null;
    const duration = 1200;

    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);

      pieces.forEach((p) => {
        const t = progress;
        const dx = Math.cos(p.angle) * p.velocity * t;
        const dy = Math.sin(p.angle) * p.velocity * t * -1 + 200 * t * t; // gravity
        const fade = 1 - Math.pow(t, 2);

        Object.assign(p.el.style, {
          transform: `translate(${dx}px, ${dy}px) rotate(${p.spin * t}deg)`,
          opacity: fade,
        });
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        pieces.forEach((p) => p.el.remove());
      }
    }

    requestAnimationFrame(animate);
  }

  // --- Table of Contents scroll tracking ---
  const tocLinks = document.querySelectorAll('.toc__link');
  if (tocLinks.length > 0) {
    const tocIds = Array.from(tocLinks).map(link =>
      link.getAttribute('href').replace('#', '')
    );
    const tocSections = tocIds.map(id => document.getElementById(id)).filter(Boolean);

    function getTopOffset(el) {
      return el.getBoundingClientRect().top + window.scrollY;
    }

    function updateActiveToc() {
      const scrollY = window.scrollY + 150;
      let activeId = tocIds[0];

      // Find which section we're in
      for (let i = tocSections.length - 1; i >= 0; i--) {
        if (getTopOffset(tocSections[i]) <= scrollY) {
          activeId = tocSections[i].id;
          break;
        }
      }

      tocLinks.forEach((link) => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('toc__link--active', href === activeId);
      });
    }

    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();

    // Smooth scroll on click
    tocLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          const top = getTopOffset(target) - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // --- Image Lightbox ---
  (function initLightbox() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<div class="lightbox__backdrop"></div><img class="lightbox__img" src="" alt="">';
    document.body.appendChild(lightbox);

    const lbImg = lightbox.querySelector('.lightbox__img');
    const lbBackdrop = lightbox.querySelector('.lightbox__backdrop');

    function openLightbox(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || '';
      // Force reflow so the opening animation plays
      lightbox.offsetHeight;
      lightbox.classList.add('lightbox--active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('lightbox--active');
      document.body.style.overflow = '';
    }

    // Click any project/comparison image to open
    document.querySelectorAll('.project-content img, .comparison__item img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    // Close on backdrop or image click
    lbBackdrop.addEventListener('click', closeLightbox);
    lbImg.addEventListener('click', closeLightbox);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  })();

  // --- Active nav link ---
  const currentPath = window.location.pathname.split('/').pop().replace('.html', '') || '';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop().replace('.html', '');
    const isHome = (currentPath === '' || currentPath === 'index');
    const hrefIsHome = (href === '' || href === './' || href === 'index');
    if ((isHome && hrefIsHome) || (!isHome && href === currentPath)) {
      link.classList.add('nav__link--active');
    }
  });
});
