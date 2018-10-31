#######################################
Mouse parrallax

$(document).mousemove(function(e) { //seleccionar el punto del mouse del documento

    var posX = e.clienteX / 100; //lo divide para que sea mas lento entre todo el valor de x

    $('#cristiano').css({ "left": 40 + posX / 3 + "%" }); //tome el valor de x su posicion original es de 40 y de ahi hace el movimiento

    $('#messi').css({ "left": 5 - posX / 5 + "%" });

    $('#suarez').css({ "right": 5 - posX / 7 + "%" });

});



#######################################