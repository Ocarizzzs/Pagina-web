/*MODAL DE CARGA 2*/
    document.addEventListener("DOMContentLoaded", function () {
        const modalCarga = new bootstrap.Modal(document.getElementById('modal-carga'), {
            backdrop: 'static',
        });

        modalCarga.show();

        setTimeout(() => {
            modalCarga.hide();
        }, 3000);
    });


/*CARRUSEL*/
    const texts2 = [
        { title: 'Trasgu', description: 'Una deliciosa cerveza asturiana que captura la esencia de la región en cada sorbo. Con su nombre inspirado en el mito celta del Trasgu, un ser travieso y alegre, esta cerveza refleja la tradición y el carácter vibrante de Asturias..' },
        { title: 'Cuelebre', description: ' Esta cerveza, elaborada con los mejores ingredientes locales, refleja la fuerza y el carácter de la región. Con un sabor robusto y equilibrado, Cuelebre ofrece una combinación perfecta de amargor y suavidad, con matices de malta y lúpulo que invitan a disfrutar de su frescura en cada sorbo.' },
        { title: 'Xana', description: 'Con una espuma suave y un sabor equilibrado entre el amargor y la dulzura, Xana es ideal para quienes buscan una experiencia refrescante con un toque de misterio. Perfecta para acompañar momentos de tranquilidad o celebraciones, esta cerveza invita a descubrir los secretos de Asturias en cada sorbo..' }
    ];

    const carousel2 = document.getElementById('carouselExample2');
    const titleElement2 = document.getElementById('carousel-text2');
    const descriptionElement2 = document.getElementById('carousel-description2');

    carousel2.addEventListener('slid.bs.carousel', function(event) {
        const activeIndex = event.to;
        titleElement2.textContent = texts2[activeIndex].title;
        descriptionElement2.textContent = texts2[activeIndex].description;
    });