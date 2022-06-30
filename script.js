// toggle menu
const menuToggle = () => {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navbar = document.querySelector('.navbar');
    toggleMenu.classList.toggle('active');
    navbar.classList.toggle('active');
}


// main
function imgSlider(anything){
    document.querySelector('.unisma').src = anything;
}

function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

