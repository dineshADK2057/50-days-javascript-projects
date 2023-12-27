const imgContainers = document.querySelectorAll('.imgbox');

imgContainers.forEach(imgContainer => {

    imgContainer.addEventListener('click', () => {
        
        imgContainer.classList.toggle('active');

        imgContainers.forEach(clickedImgBox => 
            {
                if (clickedImgBox !== imgContainer) {
                    clickedImgBox.classList.remove('active');
                }
            }
        );           
        
    })
});
