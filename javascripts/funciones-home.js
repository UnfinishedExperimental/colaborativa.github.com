jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for HOME
	
	*******************************************************************************************************************/
	var homeDelay = 3000;
	var slideShowHomeInterval;  // variable for clearing interval
	var n_home = $('.contenedorPoster').find('div.posterProyecto').length;  // number of images in VISTA HOME
	// Implementar un ciclo automatico que cambia la clase .activo del div .posterProyecto y del div .selectorProyectos>li . 
	// La diferencia con respecto a la implementacion en vista proyecto es que también hay que cambiar la clase .light o .dark que afecta al body, 
	// este valor se toma del cada div .posterProyecto que tienen u atributo llamado template.
	// Pause cuando el puntero esta encima del div.selectorProyectos. Play cuando salgamos del div.selectorProyectos
	var slideShowHome = function() {
		var el, el_id; 			 // Activo Proyecto
		var next_el, next_el_id; // Next Activo Proyecto
	    el = $('.contenedorPoster').find('div.posterProyecto.activo'); // Current Image
	    console.log(el);
		el_id = (el).attr('id').split('proyecto').pop(); // me da el número de imagen
		if( el_id < n_home){
			next_el_id = Number(el_id) + Number(1);
		}else{
			next_el_id = Number(1);
		}
		next_el= $('.contenedorPoster').children('div[id=proyecto'+next_el_id+']'); // Next Image
	    (next_el).addClass("activo");	
		$('.selectorProyectos ul li a[href=#'+next_el_id+']').parent().addClass('activo');
		(el).removeClass("activo");
		$('.selectorProyectos ul li a[href=#'+el_id+']').parent().removeClass('activo');
	};
	slideShowHomeInterval = setInterval(slideShowHome,homeDelay);
	/*
		Stop SlideShow in HOME when cursor over selectorProyectos 
	*/
	$('.selectorProyectos').hover(
		  function () { // Mouse pointer enters the element.
			clearInterval(slideShowHomeInterval);
		  },
		  function () { // Mouse pointer leaves the element.
			slideShowHomeInterval= setInterval(slideShowHome,homeDelay);
		  }
	);
	/* 
	Seleccionar imagen de fondo asociada a la vista IMAGENES.
	*/
	$('.selectorProyectos ul li').live('click',function(){
		// Selector button
		$('.selectorProyectos ul li').removeClass('activo');
		$(this).addClass('activo');
		var id = $(this).find('a').attr('href').split('#').pop();
		// Project
		$('.contenedorPoster div').removeClass('activo');
		$('.contenedorPoster').children('div[id=proyecto'+id+']').addClass('activo');
		return false;
	});
});