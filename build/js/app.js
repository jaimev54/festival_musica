document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlance(); // ✅ Ahora sí funcionará
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function() {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes = 16;

    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen ${i}`;
        imagen.classList.add('galeria-imagen');

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }

    function mostrarImagen(i) {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');

        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen ${i}`;
        imagen.classList.add('imagen-modal');

        const botonCerrar = document.createElement('BUTTON');
        botonCerrar.textContent = "x";
        botonCerrar.classList.add('boton-cerrar');
        botonCerrar.onclick = modal.remove;

        modal.appendChild(imagen);
        modal.appendChild(botonCerrar);

        modal.onclick = function () {
            modal.classList.add('fadeout');
            setTimeout(() => {
                modal.remove();
            }, 500);

            document.body.classList.remove('no-scroll');
        }

        document.body.appendChild(modal);
        document.body.classList.add('no-scroll');
    }
}

// ✅ Esta función ya está fuera de crearGaleria y ahora sí se puede ejecutar
function resaltarEnlance() {
    document.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navegacion-principal a");

        let actual = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                actual = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + actual) {
                link.classList.add("active");
            }
        });
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            const secctionScroll = e.target.getAttribute('href');
            const seccion = document.querySelector(secctionScroll);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

