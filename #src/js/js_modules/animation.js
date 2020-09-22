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
