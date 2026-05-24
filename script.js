
(function () {
  const ready = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  ready(() => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });
      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    setupPublicationFilters();
    setupNewsFilters();
    setupGalleryModal();
  });

  function setupPublicationFilters() {
    const cards = Array.from(document.querySelectorAll('.publication-card'));
    if (!cards.length) return;
    const search = document.getElementById('publication-search');
    const year = document.getElementById('publication-year');
    const theme = document.getElementById('publication-theme');
    const count = document.getElementById('publication-count');

    const apply = () => {
      const q = (search?.value || '').trim().toLowerCase();
      const y = year?.value || 'all';
      const t = theme?.value || 'all';
      let visible = 0;
      cards.forEach((card) => {
        const matchesText = !q || (card.dataset.search || '').includes(q);
        const matchesYear = y === 'all' || card.dataset.year === y;
        const matchesTheme = t === 'all' || card.dataset.theme === t;
        const show = matchesText && matchesYear && matchesTheme;
        card.classList.toggle('is-hidden', !show);
        if (show) visible += 1;
      });
      if (count) {
        count.textContent = visible === cards.length
          ? 'Showing all publications'
          : `Showing ${visible} publication${visible === 1 ? '' : 's'}`;
      }
    };
    [search, year, theme].forEach((el) => el && el.addEventListener('input', apply));
    [year, theme].forEach((el) => el && el.addEventListener('change', apply));
    apply();
  }

  function setupNewsFilters() {
    const cards = Array.from(document.querySelectorAll('.news-card'));
    if (!cards.length) return;
    const chips = Array.from(document.querySelectorAll('[data-news-filter]'));
    const search = document.getElementById('news-search');
    let active = 'all';

    const apply = () => {
      const q = (search?.value || '').trim().toLowerCase();
      cards.forEach((card) => {
        const matchesCategory = active === 'all' || card.dataset.newsCategory === active;
        const matchesText = !q || (card.dataset.title || '').includes(q);
        card.classList.toggle('is-hidden', !(matchesCategory && matchesText));
      });
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        active = chip.dataset.newsFilter || 'all';
        chips.forEach((c) => c.classList.toggle('active', c === chip));
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);
    apply();
  }

  function setupGalleryModal() {
    const modal = document.getElementById('image-modal');
    if (!modal) return;
    const image = document.getElementById('modal-image');
    const title = document.getElementById('modal-title');
    const openers = document.querySelectorAll('[data-modal-image]');
    const closers = document.querySelectorAll('[data-close-modal]');

    const close = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    openers.forEach((button) => {
      button.addEventListener('click', () => {
        if (image) {
          image.src = button.dataset.modalImage || '';
          image.alt = button.dataset.modalTitle || 'Gallery image';
        }
        if (title) title.textContent = button.dataset.modalTitle || 'Gallery image';
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });

    closers.forEach((button) => button.addEventListener('click', close));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) close();
    });
  }
})();
