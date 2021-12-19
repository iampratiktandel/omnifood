const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

/** Mobile Navigation */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
})