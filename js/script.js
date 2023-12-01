const navEl = document.querySelector('.nav');
navEl.addEventListener('click', () => {
  navEl.classList.toggle('is-active');
});

const headerEl = document.querySelector('.header__container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerEl.classList.add('is-scrolling');
    navEl.classList.remove('is-active');
  } else {
    headerEl.classList.remove('is-scrolling');
  }
});
