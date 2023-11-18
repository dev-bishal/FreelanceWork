var menuBtn = document.querySelector(".menuButton");
var responsiveMenu = document.querySelector(".mobileNav");
var lightboxContainer = document.querySelector(".lightbox");
var responsiveMenuBar = document.querySelector(".mobileNav nav");
var listSubMenu = document.querySelectorAll(".withSubMenuResponsive");
listSubMenu.forEach(listSub => {
    listSub.addEventListener("click", ()=>{
        listSub.children[1].classList.toggle("show");
    })
});

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("z-20");
    menuBtn.classList.toggle("z-40");
    responsiveMenu.classList.toggle("visible");
    responsiveMenu.classList.toggle("invisible");
    responsiveMenuBar.classList.toggle("translate-x-full");
    responsiveMenuBar.classList.toggle("visible");
    
});

/*For Back to top starts*/
window.addEventListener('scroll', function () {
    mybutton = document.getElementById("BackToTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        mybutton.classList.add("opacity-100");
        mybutton.classList.remove("opacity-0");
    } else {
        mybutton.classList.remove("opacity-100");
        mybutton.classList.add("opacity-0");
    }
})
/*For Back to top ends*/

function bringToView(sectionElement){
    if(window.innerWidth < 900){
        responsiveMenu.classList.add("invisible");
        responsiveMenuBar.classList.add("translate-x-full");
    }
    element = document.querySelector(sectionElement);
    element.scrollIntoView();
}

function triggerLightBox(component){
    lightboxContainer.classList.toggle("hidden");
    lightboxContainer.classList.toggle("flex");

    document.querySelector(".modalContent.YTvid").children[0].setAttribute("src", "");

    if(component == "YTVid"){
        document.querySelector(".modalContent.YTvid").classList.add("flex");
        document.querySelector(".modalContent.YTvid").classList.remove("hidden");
        
        var videoURL = document.querySelector(".modalContent.YTvid").children[0].getAttribute("data-src");
        document.querySelector(".modalContent.YTvid").children[0].setAttribute("src", videoURL);

        document.querySelector(".modalContent.form").classList.add("hidden");
        document.querySelector(".modalContent.form").classList.remove("flex");
    }
    else
    {
        document.querySelector(".modalContent.form").classList.add("flex");
        document.querySelector(".modalContent.form").classList.remove("hidden");

        document.querySelector(".modalContent.YTvid").classList.add("hidden");
        document.querySelector(".modalContent.YTvid").classList.remove("flex");
    }

}