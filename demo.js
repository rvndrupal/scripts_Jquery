$('.caja').click(function() {
    $('#texto').attr("juan", "carlos");
    $('#texto').addClass('texto2');
});

// $('.caja2').click(function() {
//     $('#texto').removeClass('texto2');
// });

$('.caja2').click(function() {
    $('#texto').html('<div class="demo1">Cambio la p</div>');
});


var val = $('.rodrigo').text();

console.log(val);


// if (val == "rodrigo") {
//     console.log("Exitse rodrigo");
// }