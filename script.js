const btnMenu = document.querySelector('.nav__hamburger-menu');
const menuList = document.querySelector('.nav__menu');
btnMenu.addEventListener('click', () => menuList.classList.toggle('nav__menu--active'));

AOS.init();