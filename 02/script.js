const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circles');


let currentActive = 1;

next.addEventListener('click', () => {

    currentActive++;


    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateCircle();
})


prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    updateCircle();
});

function updateCircle() {

    // changing border color of circles on click
    circles.forEach((circle, index) => {

        if (index < currentActive) {
            circle.classList.add('active');

        }
        else {
            circle.classList.remove('active');
        }

    })

    const actives = document.querySelectorAll('.active')

    // changing width of the line on click
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // enabling previous button
    if (actives.length > 1) {
        prev.disabled = false;
    }
    else{
        prev.disabled = true;
    }

    // changing next into submi

    if (actives.length == circles.length) {
        next.innerHTML = "Submit"
    }
    else{
        next.innerHTML = "Next"

    }


}

