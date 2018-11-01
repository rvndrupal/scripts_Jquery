#######################################
Mouse parrallax

$(document).mousemove(function(e) { //seleccionar el punto del mouse del documento

    var posX = e.clienteX / 100; //lo divide para que sea mas lento entre todo el valor de x

    $('#cristiano').css({ "left": 40 + posX / 3 + "%" }); //tome el valor de x su posicion original es de 40 y de ahi hace el movimiento

    $('#messi').css({ "left": 5 - posX / 5 + "%" });

    $('#suarez').css({ "right": 5 - posX / 7 + "%" });

});



#######################################

#######################################
SCROLL EFECTO PARALLAX

$(window).scroll(function() { //EVENTO DEL SCROLL

    var posY = window.pageYOffset; //TOMA LA POSICION DE Y

    $("#bloque2").css({ "top": -180 - posY / 3 + "px" })
    $("#cristiano").css({ "top": -250 + posY / 5 + "px" })
    $("#grupos").css({ "margin-left": -100 + posY / 3.3 + "%" }) //ENTRA DESDE LA IZQ ESTA FUERA -100 ESTA CHINGON

    if (posY > $("#bloque2").offset().top) { //CUANDO LA ALTURA SEA MAYOR AL BLOQUE YA LO DEJA EN SU LUGAR OFFSET ES LIMITE

        $("#grupos").css({ "margin": "auto" })

    }

    $("#estadios").css({ "margin-left": 200 - posY / 5.7 + "%" })

    if (posY > $("#bloque3").offset().top) {

        $("#estadios").css({ "margin": "auto" })

    }

})

//OJO MUY IMPORTANTE EN LOS CSS PONER 

overflow - x: hidden //para que no aparezca la barra de desplazamiento



#######################################