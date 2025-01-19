import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm';


//Inicialización de la galeria

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#galeria',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    
    });
    lightbox.init();
    