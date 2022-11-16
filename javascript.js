/* USO DE JQUERY: MOSTRAR Y QUITAR CONTENIDO*/
$(function() {
    $('#btn-uno').on('click', function() {
        if ($('.container4').is(":visible")) {
            $('.container4').hide();
            $('#btn-uno').text("Ver más");
        } else {
            $('.container4').show();
            $('#btn-uno').text("Ver menos");
        }
    })
})