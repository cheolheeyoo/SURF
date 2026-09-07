/* The entire website is readable without JavaScript. This enhances mobile navigation. */
(() => {
  'use strict';
  const button = document.querySelector('.menu-button');
  const navigation = document.querySelector('#primary-nav');
  if (!button || !navigation) return;
  const mobile = window.matchMedia('(max-width: 800px)');
  const close = () => {
    navigation.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Menu';
  };
  const sync = () => { button.hidden = !mobile.matches; close(); };
  sync();
  document.documentElement.classList.add('js');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close(); button.focus();
    }
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  if (mobile.addEventListener) mobile.addEventListener('change', sync);
  else mobile.addListener(sync);
})();
