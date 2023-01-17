'use strict'
// Selections
const nav__links = document.querySelector('.nav__links')
const heading__logo = document.querySelector('.heading__logo')
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height
const btn__learnMore = document.querySelector('.btn__learn--more')
const section1 = document.querySelector('#section--1')
const featureBtns = document.querySelectorAll('.features__btn')
const featuresBtnContainer = document.querySelector('.features__btn--container')
const leftSide = document.querySelector('.left--side')
const toogleBtn = document.querySelector('.toogle')
// Functions
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    siblings.forEach((sib) => (sib !== link ? (sib.style.opacity = this) : -1))
  }
}
// Global Code

// Passing arguments to the handler function.
// Here this keyword points to the value 0.5 & 1
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// smooth scrolling
// Event delegation

leftSide.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

btn__learnMore.addEventListener('click', function (e) {
  e.preventDefault()
  section1.scrollIntoView({ behavior: 'smooth' })
})
nav__links.addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})
// Sticky Navigation

const navCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
  })
}
const navObserver = new IntersectionObserver(navCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
navObserver.observe(header)

// Tapped buttons features
featuresBtnContainer.addEventListener('click', function (e) {
  const activeBtn = e.target.closest('.features__btn')
  if (!activeBtn) return
  featureBtns.forEach((btn) => {
    btn.classList.remove('features__btn--active')
    activeBtn.classList.add('features__btn--active')
  })
})
// Revealing sections

const allSections = document.querySelectorAll('.section')
const reveal = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.1,
})
allSections.forEach((section) => {
  section.classList.add('section--hidden')
  sectionObserver.observe(section)
})
function solution(str) {
  console.log(
    str.split('').map((s, index, str) => {
      str[index] = str[str.length - index - 1]
    }),
  )
}
// Handling toogle Button

toogleBtn.addEventListener('click', function (e) {
  e.preventDefault()
  nav__links.classList.toggle('show__nav-bar')
  nav.classList.toggle('manage__height')
})
