
var receta_var ='<a href="#"><div class="receta col-md-3 col-sm-4 col-xs-6">\
						<div class="inner-receta">\
							<img class="img-responsive" src="images/receta.png">\
							<div class="texto-receta">\
								<p class="categoria-receta">Some dummy text<p>\
								<p class="nombre-receta">alubias con chorizo</p>\
								<span class="glyphicon glyphicon-time" aria-hidden="true"></span>\
								<span class="tiempo-receta">%data_time% minutos&nbsp</span>\
								<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>\
								<span class="megusta-receta">%data_like%</span>\
							</div>\
						</div>\
					</div></a>';


function mas_recetas (j) {

	
	for (i=0; i <= j; i++) {
	var me_gusta = Math.floor(Math.random() * (100 - 0)) + 0;
	var tiempo_elab = Math.floor(Math.random() * (60 - 30)) + 30;
	console.log(me_gusta);
	console.log(tiempo_elab);
	temp_receta_var= receta_var.replace("%data_like%", me_gusta).replace("%data_time%", tiempo_elab);
	console.log(receta_var);
	$(".fila-recetas").append(temp_receta_var);
};
};

$(document).ready( function(){

	mas_recetas(20);
});