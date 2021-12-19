const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

/** Mobile Navigation */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
})

/** Smooth Scrolling */
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const href = element.getAttribute('href');

    //  scroll back to top
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    // scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // close mobile navigation
    if (element.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })

})