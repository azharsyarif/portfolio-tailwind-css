// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixeNav = header.offsetTop;


    if(window.pageYOffset > fixeNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navabar-fixed');
    }
};


// Hamburger
const hamburger =document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});