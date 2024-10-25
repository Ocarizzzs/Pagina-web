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

