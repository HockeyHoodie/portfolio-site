document.addEventListener('DOMContentLoaded', function() {

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox-content';
    
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    
    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    
    lightboxContent.appendChild(closeButton);
    lightboxContent.appendChild(lightboxImage);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);
    
    //Parāda attēlu
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightbox.style.display = 'flex';
        });
    });
    
    //Aizvēršanas poga
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    //Aizvēršana
    function closeLightbox() {
        lightbox.style.display = 'none';
    }
});

