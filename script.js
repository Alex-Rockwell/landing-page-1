///////////////////////////////
// Burger menu
const burger = document.querySelector('.header__burger')
const navContainer = document.querySelector('.header__nav-container')

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active')
  navContainer.classList.toggle('header__nav-container--active')
})




///////////////////////////////
// Add shadow to header

const header = document.querySelector('.header')

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      header.classList.add('is-scrolled')
    } else {
      header.classList.remove('is-scrolled')
    }  
})

///////////////////////////////
// Lazy loading images

const images = document.querySelectorAll('[data-src]')
const imageOptions = {
  threshold: 0,
  rootMargin: '0px 0px 300px 0px'
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      preloadImg(entry.target)
      imageObserver.unobserve(entry.target)
    }
  })
}, imageOptions)

images.forEach(img => {
  imageObserver.observe(img)
})

function preloadImg(img) {
  const src = img.getAttribute('data-src')
  img.src = src
}