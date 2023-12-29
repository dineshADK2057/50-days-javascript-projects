const icon = document.getElementById('icon');
const main = document.getElementById('main');
const search = document.getElementById('search');



icon.addEventListener('click', ()=>{

    main.classList.toggle('open');
    search.classList.toggle('show');

})