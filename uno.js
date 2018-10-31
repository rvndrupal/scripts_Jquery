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