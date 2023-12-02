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

// scroll Y axis adjustment after clicking nav button
document.querySelectorAll('.nav__button').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = button.getAttribute('data-section');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const offset = 30;

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight - offset,
        behavior: 'smooth',
      });

      const emailField = document.getElementById('schedule');
      if (emailField) {
        emailField.focus();
      }
    }
  });
});
