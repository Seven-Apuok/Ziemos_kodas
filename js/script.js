const navEl = document.querySelector('.nav');
navEl.addEventListener('click', () => {
  navEl.classList.toggle('is-active');
});

const headerEl = document.querySelector('.header__container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerEl.classList.add('is-scrolling');
    navEl.classList.remove('is-active');
    if (window.innerWidth > 767) {
      headerEl.classList.remove('is-scrolling');
    }
  } else {
    headerEl.classList.remove('is-scrolling');
  }
});

// scroll Y axis adjustment after clicking nav menu button
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

// const navMenuEl = document.querySelector('.nav__menu');

// const handleDocumentClick = (event) => {
//   if (!navMenuEl.contains(event.target)) {
//     navMenuEl.classList.remove('is-active');
//   }
// };

// document.addEventListener('click', handleDocumentClick);
// document.addEventListener('DOMContentLoaded', () => {
//   const navMenuEl = document.querySelector('.nav__menu');
//   const handleDocumentClick = (event) => {
//     if (!navMenuEl.contains(event.target)) {
//       navMenuEl.classList.remove('is-active');
//     }
//   };

//   document.addEventListener('click', handleDocumentClick);
// });

// const handleDocumentClick = (event) => {
//   console.log('Document Clicked');
//   if (!navMenuEl.contains(event.target)) {
//     navMenuEl.classList.remove('is-active');
//   }
// };
