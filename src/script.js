const hamburger = document.querySelector(".hamburger");
const hamburgerExit = document.querySelector(".hamburger-exit");
const navMenu = document.querySelector(".nav__menu__container");

const toggleDrawer = () => {
    navMenu.classList.toggle("active");    
}

hamburger.addEventListener("click", toggleDrawer);
hamburgerExit.addEventListener('click', toggleDrawer)

$('.carousel').flickity({
    initialIndex: 1,
    selectedAttraction: 0.1,
    friction: .75
});