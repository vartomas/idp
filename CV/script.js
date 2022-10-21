window.addEventListener('scroll', () => {
  document.querySelector('header').style.backgroundColor = window.scrollY > 550 ? 'green' : 'unset';
});

[...document.querySelectorAll('.mobile-btn')].forEach((btn) =>
  btn.addEventListener('click', () => {
    document.querySelector('#mobile-menu-toggler').checked = false;
  })
);
