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