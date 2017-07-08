/*
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});
*/

/*
Color: https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value

*/

$(document).ready(function() {
	/*Funciones que cambian el contenido de h4*/
	$(".nav li:nth-child(1)").click(function(){
		//alert('click home');
		$(".col-sm-9 h4").text('Home'); 
		// Actualizando una pagina determinada
		//$(".embed-container").html(appendText());
		//$(".embed-container").load("http://www.google.com");
		$(".embed-container > p").text(appendText()); // Aca voy

	});

	$(".nav li:nth-child(2)").click(function(){
		$(".col-sm-9 h4").text('Articulos');
	});

	$(".nav li:nth-child(3)").click(function(){
  		$(".col-sm-9 h4").text('Detalles');   
    });

    $(".nav li:nth-child(4)").click(function(){
  		$(".col-sm-9 h4").text('Estadisticas');        
    });
});


function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Create text with DOM
    $("body").append(txt1, txt2, txt3);     // Append new elements
}



/*
ancestor descendant::nth-child()
*/