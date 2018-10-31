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