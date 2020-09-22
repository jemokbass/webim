// HEADER MENU BURGER
function hamburgerMenu() {
   const navLinks = document.querySelector('.header-navigation__list'),
      hamburger = document.querySelector('.header-navigation__hamburger')

   if (hamburger) {
      hamburger.addEventListener('click', () => {
         navLinks.classList.toggle('active');
         hamburger.classList.toggle('active');
         if (hamburger.classList.contains('active')) {
            document.body.style.overflow = 'hidden'
         } else { document.body.style.overflow = '' }
      });
   }
}
