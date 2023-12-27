const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circles');


let currentActive = 1;
let width = 0;
next.addEventListener('click', () => {
    
    currentActive++;
    width = width + 33.33;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    
    if (width > 90) {
        width = 100;
        next.innerHTML = "Submit";
    }
    
    updateCircle();
    

    // changing width of line on click
    progress.style.width = width + '%';
    
    // enabling previous button
    prev.disabled = false;
})


prev.addEventListener('click', () => {
    currentActive--;
    
    width = width - 33.33;

    if(currentActive < 1){
        currentActive = 1;
    }
    if (width < 10) {
        width = 0;
        
        // disabling previous button 
        prev.disabled = true;
    }
    updateCircle();
    
    progress.style.width = width + '%';
    next.innerHTML = "Next";

    
    
});

function updateCircle() {
    circles.forEach((circle, index)=>{
        
        if(index < currentActive){
            circle.classList.add('active');
            
        }
        else{
            circle.classList.remove('active');
        }
        
    })
}

