/*MODAL DESAPARECER*/
    document.addEventListener('DOMContentLoaded',function(){
        const modal = document.getElementById('modal-edad');
        const botonCerrar = document.getElementById('boton-redondo-si');

        modal.style.display = 'flex';
        botonCerrar.addEventListener('click', function(){
            modal.classList.add('modal-hidden');
            setTimeout(function(){
                modal.style.display = 'none';
            },500);
        });
    });



/*LETRAS ESCRITAS*/
    var typed = new Typed("#typed-text", {
        strings: [
            "La esencia de Asturias en cada cerveza artesanal",
            "Sabor auténtico, sabor tradicional",
        ],
        typeSpeed: 80,
        loop: true,
    });



/*ANIMACIÓN PARA QUE VAYAN APARECIENDO LOS APARTADOS*/
ScrollReveal().reveal(".partes-apareciendo > div", {
    delay: 250,
    distance: "50px",
    interval: 100,
    origin: "bottom",
    scale: 0.9,
    reset: true,
    duration: 600,
});