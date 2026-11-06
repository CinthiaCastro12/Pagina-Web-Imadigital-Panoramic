document.addEventListener('DOMContentLoaded', function() {
    alert("JS cargado correctamente");

    const form = document.getElementById('formCita');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Formulario interceptado, no se recarga");
    });
});