var menuHamburgerBtn = document.querySelector(".menuButton i");
var menuList = document.querySelector(".menus");
menuHamburgerBtn.addEventListener("click",()=>{
    closeMenu()
})

function closeMenu(){
    let width = window.innerWidth;
    console.log(width);
    if(width <=600){
        menuHamburgerBtn.classList.toggle("fa-xmark")
        menuHamburgerBtn.classList.toggle("fa-bars")
        menuList.classList.toggle("show");
    }
}