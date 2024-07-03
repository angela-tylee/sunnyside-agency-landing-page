const mobileMenuBtn = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu nav');

console.log(mobileMenu);

mobileMenuBtn.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('show');
});

