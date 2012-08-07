jQuery(document).ready(function () {
	/*******************************************************************************************************************
		Functions for PROYECTOS VISTA DETALLE (imagenes, descripción, reacciones)
	
	*******************************************************************************************************************/
	var imagesDelay = 3000; // 2 seconds for slideshow in VISTA imagenes
	var slideShowProyectosInterval;  // variable for clearing interval
	var n_images    = $('.imagenesProyecto').find('div.imagenFullScreen').length; // number of images in VISTA imagenes PROYECTOS
	var slideShowProyectos = function() {
		var el, el_id; 			 // Activo Imagen
		var next_el, next_el_id; // Next Activo Imagen
	    el = $('.imagenesProyecto').find('div.imagenFullScreen.activo'); // Current Image
		el_id = (el).attr('id').split('imagen').pop(); // me da el número de imagen
		if( el_id < n_images){
			next_el_id = Number(el_id) + Number(1);
		}else{
			next_el_id = Number(1);
		}
		next_el= $('.imagenesProyecto').children('div[id=imagen'+next_el_id+']'); // Next Image
	    (next_el).addClass("activo");	
		// Show Next Image and caption
		$('.selectorImagenes li a[href=#'+next_el_id+']').parent().addClass('activo');
		$('.captionImagenes div[id=caption'+next_el_id+']').addClass('activo');
		(el).removeClass("activo");
		// Hide Current Image and caption
		$('.selectorImagenes li a[href=#'+el_id+']').parent().removeClass('activo');
		$('.captionImagenes div[id=caption'+el_id+']').removeClass('activo');
	};
	/* La variable "botonInicial" se actualiza con la vista inicial */
	$(botonInicial).find('a').trigger('click'); 	// hacer click
	$(botonInicial).find('a').addClass('activo'); 	// seleccionar
	if (botonInicial == '#imagenes'){
		slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
	}
	/* 
	Seleccionar imagen de fondo asociada a la vista IMAGENES.
	*/
	$('.selectorImagenes li').live('click',function(){
		$('.selectorImagenes li').removeClass('activo');
		$(this).addClass('activo');
		$('.captionImagenes div').removeClass('activo');
		var id = $(this).find('a').attr('href').split('#').pop();
	    var currentCaption = "#caption"+ id; 
		$('.captionImagenes div').filter(currentCaption).addClass('activo');
		var currentImage = "#imagen"+id;
		$('.imagenesProyecto .imagenFullScreen').removeClass('activo');
		$(currentImage).addClass('activo');
		return false;
	});
	/*
	Mostrar vista IMAGENES, DESCRIPCION o REACCIONES.
		1- Al hacer click en el botón imágenes, descripción o reacciones añadir  
			style="display:none" a aquella información que debe permanecer oculta.
		2- Cambiar estilo de botón al hacer click en él:
			class="activo"
	*/
	$('.switcher.ewf a').live('click',function(){
		var idRemove = $('.switcher.ewf a.activo').attr('href').split('#').pop();
		$('body').removeClass(idRemove); 
		$('.switcher.ewf a.activo').removeClass('activo'); // Eliminar activo de actual 
		//
		$(this).addClass('activo');
	    var idAdd = $(this).attr('href').split('#').pop();
		$('body').addClass(idAdd); // Cambio la clase del Body
		if (idAdd == 'imagenes'){
			clearInterval(slideShowProyectosInterval);
			slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
		}else{
			clearInterval(slideShowProyectosInterval);
		}
		return false;
	});
	/*
		Stop SlideShow in VISTA imágenes when cursor over infoImagenes Proyecto 
	*/
	$('.infoImagenesProyecto').hover(
		  function () { // Mouse pointer enters the element.
			clearInterval(slideShowProyectosInterval);
		  },
		  function () { // Mouse pointer leaves the element.
			slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
		  }
	);
	/*
	
	*/
	$('.resumenProyecto').hover(
		function () { // Mouse pointer enters the element.
			if ($('body').hasClass('imagenes')){
				$('.resumenProyecto').removeClass("fade");
			}
		},
		function () { // Mouse pointer leaves the element.
			if ($('body').hasClass('imagenes')){
				$('.resumenProyecto').addClass("fade");		
			}
		}
	);	
});
