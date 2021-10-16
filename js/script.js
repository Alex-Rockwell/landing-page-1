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

///////////////////////////////
// Accordion

const titles = document.querySelectorAll('.guides-accordion__title')
const contentBlocks = document.querySelectorAll('.guides-accordion__content')

titles.forEach(title => {

  title.addEventListener('click', function() {

    const block = this.nextElementSibling
    
    contentBlocks.forEach(el => {
      if (el == block) {
        block.classList.toggle('guides-accordion__content--active')
        return
      }

      el.classList.remove('guides-accordion__content--active')
    })
  })
  
})





















// titles.forEach(title => title.addEventListener('click', function() {

//   const item = this.nextElementSibling
  
//   contentBlocks.forEach(block => {
//     if (block === item) {
//       item.classList.toggle('guides-accordion__content--active')
//       return
//     }

//     item.classList.remove('guides-accordion__content--active')
    
//   })
  
// }

// ))

// function toggleAccordion() {


// }






// const titles = document.querySelectorAll('.guides-accordion__title')
// const siblings = document.querySelectorAll('.guides-accordion__content')

// titles.forEach(title => {

//   title.addEventListener('click', function() {
    
//     siblings.forEach(sibling => {
//         sibling.classList.remove('guides-accordion__content--active')
//     })
    
//     if (!this.nextElementSibling.classList.contains('guides-accordion__content--active')) {
//       this.nextElementSibling.classList.add('guides-accordion__content--active')
//     }
//     // if (this.nextElementSibling.classList.contains('guides-accordion__content--active')) {
//     //   this.nextElementSibling.classList.remove('guides-accordion__content--active')
//     // }

//   })

// })