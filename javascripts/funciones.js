jQuery(document).ready(function () {
	/* La variable "botonInicial" se actualiza con la vista inicial */
	$(botonInicial).find('a').trigger('click'); 	// hacer click
	$(botonInicial).find('a').addClass('activo'); 	// seleccionar
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
		console.log("Remove from " + idRemove);
		$('body').removeClass(idRemove); 
		$('.switcher.ewf a.activo').removeClass('activo'); // Eliminar activo de actual 
		//
		$(this).addClass('activo');
	    var idAdd = $(this).attr('href').split('#').pop();
	    console.log(idAdd);
		$('body').addClass(idAdd); // Cambio la clase del Body
		return false;
	});
});
