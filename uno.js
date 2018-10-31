#######################################
$("#caja").click(function() {
    $('#caja').css({ "background": "red", "width": "400px" });

});#######################################


#######################################
Seleccion THIS son dos cajas

$(".cajas").click(function() {

    $(this).css({ "color": "white" });
    //es decir a la que le doy click
});


#######################################


#######################################
Seleccion por Atributo una caja de texto y un boton

$("#boton").click(function() {
    $("[type='text']").css("backgorund": "red"); //al campo tipo text

});

#######################################

#######################################
MOSTRAR ATRIBUTOS

var usuario = "";
var pass = "";

$("#boton").click(function() {

    usuario = $("[type='text']").val();
    pass = $("[type='password']").val();

    console.log(usaurio + " " + pass)

});

#######################################

#######################################
Agregar atributo a un elemento

    .caja
$("#boton").click(function() {

    $('.caja').attr("juan", "cero");

    $('.caja').click(function() {
        $('#texto').attr("juan", "carlos");
        $('#texto').addClass('texto2');
    });

    $('.caja2').click(function() {
        $('#texto').removeClass('texto2');
    });



});


#######################################

#######################################
Crear HTML

$("#boton").click(function() {
    $('.contenedor').html('<div id="contenido">Cambio el contenido</div>');
});

Agregar contenido es decir crea una nueva caja

$("#boton").click(function() {
    $('.contenedor').append('<div id="contenido">Cambio el contenido</div>');
});


Agregar antes de la caja seleccionada

$("#boton").click(function() {
    $('.contenedor').before('<div id="contenido">Cambio el contenido</div>'); //antes del contenedor
});


Agregar despues de la caja seleccionada

$("#boton").click(function() {
    $('.contenedor').after('<div id="contenido">Cambio el contenido</div>'); //antes del contenedor
});

Agregar texto nuevo antes del texto ya escrito

$("#boton").click(function() {
    $('.contenedor').prepend('Esto es el nuevo texto'); //antes del contenedor
});


Reemplazar con texto nuevo el texto ya escrito

$("#boton").click(function() {
    $('.contenedor').text('Esto es el nuevo texto'); //antes del contenedor
});


#######################################


#######################################
Un boton que ejecuta dos acciones

    .caja1-- > display: none

$("#boton").click(function() {
    $('.caja1').toggle('fast'); //lo pasa a display:block  y viceversa fast slow o  3000
});

#######################################