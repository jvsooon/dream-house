const hamburger = document.querySelector(".hamburger");
const hamburgerExit = document.querySelector(".hamburger-exit");
const navMenu = document.querySelector(".nav__menu");
// const navMenu = document.querySelector(".nav__drawer");


const toggleDrawer = () => {
    hamburger.classList.toggle("hide");
    hamburgerExit.classList.toggle("show");
    navMenu.classList.toggle("show");    
}

hamburger.addEventListener("click", toggleDrawer);
hamburgerExit.addEventListener('click', toggleDrawer)