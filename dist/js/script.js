// const { doc } = require("prettier");

// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixeNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');


    if(window.pageYOffset > fixeNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('flex');
        toTop.classList.add('hidden');
    }
};


// Hamburger
const hamburger =document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click',function(e){
    if (e.target !=hamburger && e.target !=navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }   
})


// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// pindah posisi togle dark light sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked= false;
  }