const imgContainers = document.querySelectorAll('.inactive')

imgContainers.forEach(imgContainer => {
    imgContainer.addEventListener('click', () => {
        removeActiveClass();
        imgContainer.classList.add('active')
    })
});

function removeActiveClass(){
    imgContainers.forEach(imgContainer => {
        imgContainer.classList.remove('active')
    });
}