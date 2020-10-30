const header = document.querySelector('header');
const hamIcon = document.querySelector('.icon-ham');
const closeIcon = document.querySelector('.icon-x');
const desktopMenu = document.querySelector('#desktop');
const mobileMenu = document.querySelector('#mobile');
const logo = document.querySelector('.logo');


hamIcon.addEventListener('click', (e) => {
    e.preventDefault();
    header.style.background = "hsl(0, 0%, 100%)";
    hamIcon.classList.add('close');
    closeIcon.classList.remove('close');
    closeIcon.classList.add('show');
    mobileMenu.classList.remove('close');
    mobileMenu.classList.add('show');
    logo.style.zIndex = "-1";

});

closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    header.style.background = "transparent";
    hamIcon.classList.remove('close');
    hamIcon.classList.add('show');

    closeIcon.classList.remove('show');
    closeIcon.classList.add('close');
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('close');
    mobileMenu.style.zIndex = "9999";

});

const slides = [
    {
        id: 1,
        img: "images/mobile-image-hero-1.jpg",
        desktopImg: "images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
    {
        id: 2,
        img: "images/mobile-image-hero-2.jpg",
        desktopImg: "images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
    {
        id: 3,
        img: "images/mobile-image-hero-3.jpg",
        desktopImg: "images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const sliderDesktopImg = document.querySelector(".feature-intro .carousel picture source");
const sliderMobileImg = document.querySelector(".feature-intro .carousel picture img");
const sliderTitle = document.querySelector(".feature-desc .container h1");
const sliderDesc = document.querySelector(".feature-desc .container p");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let currentSlide = 0;
window.addEventListener("DOMContentLoaded", () => {
    showSlide();
});

const showSlide = () => {
    const slide = slides[currentSlide];
    sliderDesktopImg.srcset = slide.desktopImg;
    sliderMobileImg.src = slide.img;
    sliderTitle.textContent = slide.title;
    sliderDesc.textContent = slide.desc;
};

//Show next slide.
nextBtn.addEventListener("click", () => {

    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide();
});

//Show prev slide.
prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
});
