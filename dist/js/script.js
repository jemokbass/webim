//ALL_SCRIPTS
//MODULES
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

//ANIMATION JS
const writeText = () => {
   const writeElement = document.getElementById('write')
   const el = writeElement.innerHTML
   let index = 1
   function writter() {
      writeElement.innerHTML = el.slice(0, index)
      index++
      if (index > el.length) {
         index = 1
      }
   }
   setInterval(writter, 300)
}

const animateTitle = () => {
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + screenLeft }
   }
   const title = document.querySelectorAll('.title')
   if (title.length > 0) {
      window.addEventListener('scroll', animateScroll)
      function animateScroll() {
         title.forEach(i => {
            const animateItem = i,
               animateItemHeight = animateItem.offsetHeight,
               animateItemOffset = offset(animateItem).top,
               animateStart = 5;
            let animateItemPoint = window.innerHeight - animateItemHeight / animateStart;
            if (animateItemHeight > window.innerHeight) {
               animateItemPoint = window.innerHeight - window.innerHeight / animateStart
            }
            if ((pageYOffset > animateItemOffset - animateItemPoint) && pageYOffset < (animateItemOffset + animateItemHeight)) {
               animateItem.classList.add('active')
            } else { animateItem.classList.remove('active') }

         })
      }
   }
   animateScroll()
}


//PLUGINS_JS
//WEBP IMAGE IN WEBSITES
function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});



'use strict'
window.addEventListener('DOMContentLoaded', () => {
   hamburgerMenu();
   writeText();
   animateTitle();
})
