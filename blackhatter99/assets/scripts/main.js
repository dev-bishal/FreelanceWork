$('.Ani-Chevro-Accordion .content').click(function () {

    $(this).children('.answer').fadeToggle();
    $(this).children('.answer').css("display", "block");
    /*For Chevro Animation*/
    $(this).children('.Heading').children('.Show').toggleClass('rot180');

    /*For Closing other Option if only one is to be shown*/
    $(this).siblings('.content').children('.answer').fadeOut();
    $(this).siblings('.content').children('.Heading').children('.Show').removeClass('rot180');
});

document.getElementById("year").innerText = new Date().getFullYear();

var serviceButtons = document.querySelectorAll(".serviceBtn");
var seoService = document.querySelector(".seo-service");
var smmService = document.querySelector(".smm-service");
serviceButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
        if (button.innerText == "Improve SEO") {
            seoService.classList.add("translate-x-0");
            seoService.classList.remove("-translate-x-[200%]");

            smmService.classList.add("translate-x-[200%]");
            smmService.classList.remove("translate-x-0");
        }
        else {
            seoService.classList.add("-translate-x-[200%]");
            seoService.classList.remove("translate-x-0");

            smmService.classList.add("translate-x-0");
            smmService.classList.remove("translate-x-[200%]");
        }
    })
});

const swiperEl = document.querySelector('.brands-carousals swiper-container');
Object.assign(swiperEl, {
    loop: "true",
    freeMode: "true",
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    speed: "3500",
    slidesPerView: 6,
    spaceBetween: 30,

    breakpoints: {
        "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

function showMessage(){
    document.querySelector('.cartMessage').classList.toggle("hidden")
}

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to load
    setTimeout(function () {
        // Hide the preloader after 1 second
        document.querySelector('.preloader').classList.add("-translate-y-full");
    }, 2000); // Adjust the time in milliseconds (1s = 1000ms)
});

var menuBtn = document.querySelector(".menuButton");
var lightboxContainer = document.querySelector(".lightbox");
var cartContainer = document.querySelector(".sidebar.Cart");
var responsiveMenuBar = document.querySelector("nav.mobileNav");

menuBtn.addEventListener("click", ()=>{
    menuBtn.children[0].classList.toggle("hidden");
    menuBtn.children[1].classList.toggle("hidden");
    responsiveMenuBar.classList.toggle("translate-x-full");
    responsiveMenuBar.classList.toggle("visible");
    
});

/*For Back to top starts*/
window.addEventListener('scroll', function () {
    mybutton = document.getElementById("BackToTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        mybutton.classList.add("opacity-100");
        mybutton.classList.remove("opacity-0");        
        this.document.querySelector("header").classList.add("bg-[#1f1f3a85]");
    } else {
        mybutton.classList.remove("opacity-100");
        mybutton.classList.add("opacity-0");
        this.document.querySelector("header").classList.remove("bg-[#1f1f3a85]");
    }        
})
/*For Back to top ends*/

function bringToView(sectionElement){
    if(window.innerWidth < 900){
        responsiveMenuBar.classList.add("translate-x-full");
        menuBtn.children[0].classList.remove("hidden");
            menuBtn.children[1].classList.add("hidden");

    }
    element = document.querySelector(sectionElement);
    element.scrollIntoView();
}

function triggerCart(component){
    document.querySelector('.cartMessage').classList.add("hidden")
    cartContainer.classList.toggle("translate-x-full");
}
function triggerLightBox(component){
    lightboxContainer.classList.toggle("hidden");
    lightboxContainer.classList.toggle("flex");

    document.querySelector(".modalContent.form").classList.add("flex");
    document.querySelector(".modalContent.form").classList.remove("hidden");
}

swiperEl.initialize();
AOS.init({
    disable: 'mobile',
});