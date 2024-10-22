const menuButton = document.getElementById('user-menu-button');
const menu = document.querySelector('[role="menu"]');
const mobileMenuButton = document.getElementById('mobile-menu')
const mobileMenu = document.querySelector('[role="mobile-menu"]')


menuButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
});

mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); 
});

