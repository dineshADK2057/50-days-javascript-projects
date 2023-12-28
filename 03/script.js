const buttons = document.querySelectorAll('.btn');
const circle = document.querySelector('#circle');
const main = document.querySelector('#mainBody');
const navMenu = document.querySelector('#navMenu');


buttons.forEach((button, index) => {
    button.addEventListener('click', ()=>{

        circle.classList.toggle('open');
        circle.classList.toggle('close');

        main.classList.toggle('showNav');
        
        navMenu.classList.toggle('showNavMenu');
        navMenu.classList.toggle('hideNavMenu');
        
         
    })
})