let burger = document.querySelector(".burger");
let wrapperBurger = document.querySelector(".wrapper__burger");
let circle = document.querySelector(".circle");
let headerLinks = document.querySelector(".header__links")
let search = document.querySelector(".search")
let nav = document.querySelector(".wrapper__nav")
let body = document.querySelector(".body")
let arrowLeft = document.getElementById("arrow__left")
let arrowRight = document.getElementById("arrow__right")
let tabs = document.getElementById("tabs")
let slides = document.querySelectorAll(".slide__events-wrapper")
// let slider = document.querySelector(".frime__events-content")

wrapperBurger.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    wrapperBurger.classList.toggle("active")
    circle.classList.toggle("active")
    headerLinks.classList.toggle("active")
    search.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("active")
})


// let currentSlideIndex = 0;
// const paginationCircles = [];
// const sliderWidth = slider.clientWidth;

// function createPaginationCircle() {
//     const div = document.createElement("div");
//     div.className = "tab";
//     tabs.appendChild(div);
//     paginationCircles.push(div);
// }

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "tab";
    tabs.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        arrowRight.disabled
    } 
    else {
        arrowRight.disabled = false
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        // newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);