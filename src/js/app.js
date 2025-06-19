document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes = 16; // Total de imágenes a agregar
    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen ${i}`;
        imagen.classList.add('galeria-imagen');

        // Agregar un evento de clic para mostrar la imagen en grande
        //event handler

        imagen.onclick = function() {
            mostrarImagen(i);
            console.log(`Imagen ${i} clickeada`);
        }

        galeria.appendChild(imagen);
    }

    function mostrarImagen(i){

        //general modal
        const modal = document.createElement('DIV');
        modal.classList.add('modal');

        // Crear la imagen grande
            const imagen = document.createElement('IMG');
            imagen.src = `src/img/gallery/full/${i}.jpg`;
            imagen.alt = `Imagen ${i}`;
            imagen.classList.add('imagen-modal');

            // Agregar la imagen al modal
            modal.appendChild(imagen);

            // Agregar evento para cerrar el modal al hacer clic en el fondo
            modal.onclick = function () {
                modal.remove();
                document.body.classList.remove('no-scroll'); // restaura el scrol
            }

            // Agregar el modal al body
            document.body.appendChild(modal);

            // Evitar scroll en el fondo
            document.body.classList.add('no-scroll');
        }

    


    
    
}

