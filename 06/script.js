const boxes = document.querySelectorAll('.content');

window.addEventListener('scroll', entranceAnimtion);

entranceAnimtion();

function entranceAnimtion(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('animate');
            // box.classList.remove('animate');
        }
    })
}