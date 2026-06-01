// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el carrusel por su ID
    var miCarrusel = document.querySelector('#carouselExampleIndicators');
    
    // Inicializa el carrusel de Bootstrap con opciones de autodesplazamiento
    var carousel = new bootstrap.Carousel(miCarrusel, {
        interval: 3000, // Tiempo en milisegundos entre imágenes (3000ms = 3 segundos)
        ride: 'carousel', // Empieza a moverse automáticamente de inmediato
        wrap: true       // Cuando llegue a la última imagen, vuelve a empezar por la primera
    });
});