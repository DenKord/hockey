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
let eventsBlock = document.querySelector(".header__line-events")
let countriesBlock = document.querySelector(".countries")
let targetBlock = document.querySelector(".target")
let VKIcon = document.querySelector(".VK__icon")
let TGIcon = document.querySelector(".TG__icon")
let langRu = document.querySelector(".lang__ru")
let langEng = document.querySelector(".lang__eng")


wrapperBurger.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    wrapperBurger.classList.toggle("active")
    circle.classList.toggle("active")
    headerLinks.classList.toggle("active")
    search.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("active")
    langRu.classList.toggle("active__color")
    langEng.classList.toggle("active__color")
    logo.classList.toggle("active__color")
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

window.addEventListener('scroll', ()=>{
  let eventsBlockPosition = eventsBlock.getBoundingClientRect()
  let countriesBlockPosition = countriesBlock.getBoundingClientRect()
  let targetBlockPosition = targetBlock.getBoundingClientRect()
  let logoPosition = logo.getBoundingClientRect()
  let burgerPostition = burger.getBoundingClientRect()
  let VKIconPosition = VKIcon.getBoundingClientRect()
  let TGIconPosition = TGIcon.getBoundingClientRect()
  let langRuPosition = langRu.getBoundingClientRect()
  let langEngPosition = langEng.getBoundingClientRect()
  console.log(langRuPosition)
  if (((logoPosition.top >= eventsBlockPosition.top) && (logoPosition.top < eventsBlockPosition.bottom)) || (logoPosition.top >= countriesBlockPosition.top) && (logoPosition.top <= targetBlockPosition.bottom)) {
    logo.classList.add("active")
  } else {
    logo.classList.remove("active")
  }
  if (((burgerPostition.top >= eventsBlockPosition.top) && (burgerPostition.top <= eventsBlockPosition.bottom)) || (burgerPostition.top >= countriesBlockPosition.top) && (burgerPostition.top <= targetBlockPosition.bottom)) {
    burger.classList.add("color")
  } else {
    burger.classList.remove("color")
  }
  if (((VKIconPosition.top >= eventsBlockPosition.top) && (VKIconPosition.top <= eventsBlockPosition.bottom)) || (VKIconPosition.top >= countriesBlockPosition.top) && (VKIconPosition.top <= targetBlockPosition.bottom)) {
    VKIcon.classList.add("color")
  } else {
    VKIcon.classList.remove("color")
  }
  if (((TGIconPosition.top >= eventsBlockPosition.top) && (TGIconPosition.top <= eventsBlockPosition.bottom)) || (TGIconPosition.top >= countriesBlockPosition.top) && (TGIconPosition.top <= targetBlockPosition.bottom)) {
    TGIcon.classList.add("color")
  } else {
    TGIcon.classList.remove("color")
  }
  if (((langRuPosition.top >= eventsBlockPosition.top) && (langRuPosition.top <= eventsBlockPosition.bottom)) || (langRuPosition.top >= countriesBlockPosition.top) && (langRuPosition.top <= targetBlockPosition.bottom)) {
    langRu.classList.add("color")
  } else {
    langRu.classList.remove("color")
  }
  if (((langEngPosition.top >= eventsBlockPosition.top) && (langEngPosition.top <= eventsBlockPosition.bottom)) || (langEngPosition.top >= countriesBlockPosition.top) && (langEngPosition.top <= targetBlockPosition.bottom)) {
    langEng.classList.add("color")
  } else {
    langEng.classList.remove("color")
  }
})
