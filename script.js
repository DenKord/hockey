const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
});

const TourneySwiper = new Swiper('.tourney__swiper',{
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.tourney__swiper-button-next',
      prevEl: '.tourney__swiper-button-prev',
    },
  
})

const ProjectsSwiper = new Swiper('.projects__swiper',{
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 40,
  centeredSlides: true,
  centerInsufficientSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

})

const MedicineSwiper = new Swiper('.medicine__swiper',{
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 140,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  scrollbar: {
    el: '.wrapper__scrollbar',
    draggable: true,
    dragSize: 270,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.medicine__swiper-button-next',
    prevEl: '.medicine__swiper-button-prev',
  },

})

let header = document.querySelector(".header")
let logo = document.querySelector(".logo");
let burger = document.querySelector(".burger");
let wrapperBurger = document.querySelector(".wrapper__burger");
let circle = document.querySelector(".circle");
let headerLinks = document.querySelector(".header__links")
let search = document.querySelector(".search")
let nav = document.querySelector(".wrapper__nav")
let body = document.querySelector(".body")
let navLink = document.querySelectorAll(".nav__link")

wrapperBurger.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    wrapperBurger.classList.toggle("active")
    circle.classList.toggle("active")
    headerLinks.classList.toggle("active")
    search.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("active")
})

navLink.forEach(link => {
  link.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    wrapperBurger.classList.toggle("active")
    circle.classList.toggle("active")
    headerLinks.classList.toggle("active")
    search.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("active")
  })
});
