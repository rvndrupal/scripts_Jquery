var texto = $("#texto");

texto.css("background", "red");
texto.css("color", "blue");
texto.css("with", "50");


#######################################
Selecciones Multiples.

$(".c1 , .c2").text("Esto escribe en las dos");

Seleccion Descendientes
    <
    ul id = "listado" > < li > < /li></ul > ##ul - > li

$('#listado > li').addClass('Nueva_clase'); //solo selecciona a los que estan dentro del ul listado no a todos los li


Seleccionar a todos los elementos de un formulario

$('input[required]').addClass('rojos');

$("input[placeholder='Nombre']").addClass('verde');

#######################################

#######################################
Buscar por Dom Fin()

var resultados = $('#animales').find('.perros');


Solo buscar los descendientes directos

var resultados = $('#animales').children('.perros'); //son los  hijos


Navegando por los distintos resultados

var resultados = $('#animales').children().firts().children('.creature').last();

existe next y previous - >> next();
o prev();


Buscar los Padres

var resultado = $('.cat').parent(); //trai al padre




#######################################


#######################################
EVENTOS

$('#ejemplo').on('click', function() {

    $(this).addClass('color');

});

#######################################