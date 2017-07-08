$(document).ready(function() {
    var link;
	/*Funciones que cambian el contenido de h4*/
    $(".embed-container").load("home.html")
	$(".nav li:nth-child(1)").click(function(){
		//alert('click home');
		$(".col-sm-9 h4").text('Home'); 
		// Obteniendo el enlace para home
        link = $(this).children().attr('href');
        $(".embed-container").load(link);	

	});

	$(".nav li:nth-child(2)").click(function(){
		$(".col-sm-9 h4").text('Articulos');
        // Obteniendo el enlace para articulos
        var link = $(this).children().attr('href');
        $(".embed-container").load(link);
	});

	$(".nav li:nth-child(3)").click(function(){
  		$(".col-sm-9 h4").text('Detalles'); 
        // Obteniendo el enlace para detalles
        var link = $(this).children().attr('href');
        $(".embed-container").load(link);  
    });

    $(".nav li:nth-child(4)").click(function(){
  		$(".col-sm-9 h4").text('Estadisticas'); 
        // Obteniendo el enlace para estadisticas
        var link = $(this).children().attr('href');
        $(".embed-container").load(link);      
    });
});


$('li a').click(function(){
    //var page=$(this).attr('href');
    alert('algo');
    //alert(page);
});
