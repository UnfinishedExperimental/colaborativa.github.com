(function ($) {
jQuery(document).ready(function () {
// La variable "botonInicial" se actualiza con el Tab inicial según el caso
$(botonInicial).find('a').trigger('click');
/* Configuramos el plugin jquery "cycle" para que no exista un efecto en la transición entre
   imágenes. En su lugar cambiamos la clase de las imágenes cada 4 segundos. 
   https://github.com/malsup/cycle
   Date: 11-07-2012
*/
/*
Aún no funciona del todo bien conflicto con el H1 dentro de imagenes proyecto
$('.imagenesProyecto').cycle({
	fx: 'none',
	before: function(el, next_el) {
    	$(el).removeClass('activo');
    	$(next_el).addClass('activo');
		/* Activar el Botón "selectorImagenes" que corresponda
		var n_el = $(el).attr('id').split('imagen').pop();
		var n_next_el= $(next_el).attr('id').split('imagen').pop();
		$('.selectorImagenes li a[href=#'+n_el+']').parent().removeClass('activo');
		$('.captionImagenes div[id=caption'+n_el+']').removeClass('activo');
		$('.selectorImagenes li a[href=#'+n_next_el+']').parent().addClass('activo');
		$('.captionImagenes div[id=caption'+n_next_el+']').addClass('activo');
		},
	timeout: 4000
});
$('.imagenesProyecto').cycle('pause'); // Valor inicial PAUSE
if (botonInicial == "#imagenes"){
	$('.imagenesProyecto').cycle('resume'); // Valor inicial RESUME
}
*/
/*  
	Esta función actualiza la imagén de fondo al hacer click en el botón "selectorImagenes"
*/
$('.selectorImagenes li').live('click',function(){
	/*$('.imagenesProyecto').cycle('pause');*/
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
	A continuación se van a desarrollar las funciones que habilitan las vistas de los proyectos: 
	imágenes, descripción y reacciones.
	1- Al hacer click en el botón imágenes, descripción o reacciones añadir  
		style="display:none" a aquella información que debe permanecer oculta.
	2- Cambiar estilo de botón al hacer click en él:
		class="activo"
	Date: 25-06-2012
*/
$('.switcher.ewf a').live('click',function(){
	$('.switcher a').removeClass('activo');
	$(this).addClass('activo');
    var id = $(this).attr('href').split('#').pop();
    $('body').attr('class', id); // Cambio la clase del Body
    /*
    /* if imagenes then resume slideshow otherwise pause
	if(id == "imagenes"){
		$('.imagenesProyecto').cycle('resume'); 
	}else{
		$('.imagenesProyecto').cycle('pause');
	}
	*/
	return false;
});
	/*	Funciones de Javi			*/
	/*-----------------------------------------------------------------------------------*/
	/*  Slides Navigation Effect
	/*-----------------------------------------------------------------------------------*/

	if (jQuery().slides) {
		jQuery("#slides").hover( function() {
			jQuery('.prev').fadeIn(200);
			jQuery('.next').fadeIn(200);
		}, function () {
			jQuery('.prev').fadeOut(200);
			jQuery('.next').fadeOut(200);
		});
	}

	$('.colaboradorIcono').live('click', function() {
		if($(this).parent().children('.subcategoryPopUp').css('display') == 'none'){
			$('.subcategoryPopUp').fadeOut('fast'); // To transparent
			$(this).parent().children('.subcategoryPopUp').fadeIn('fast'); // To opaque
		}else{
			$(this).parent().children('.subcategoryPopUp').fadeOut('fast'); // To transparent
		}
		return false;
	});
	$('.reaccionesIcono').live('click', function() {
		if($(this).parent().children('.subcategoryPopUp2').css('display') == 'none'){
			$('.subcategoryPopUp2').fadeOut('fast'); // to transparent
			$(this).parent().children('.subcategoryPopUp2').fadeIn('fast'); // to opaque
		}else{
			$(this).parent().children('.subcategoryPopUp2').fadeOut('fast'); // to transparent
		}
		return false;
	});
	// Apaño para colocar el titulo de la pagina correcto cuando filtro por terminos en la pagina de proyectos
});
})(jQuery);


!function ($) {
	$(function(){
		// fix sub nav on scroll
		var $win = $(window)
		, $nav = $('.subnav')
		, navTop = $('.subnav').length && $('.subnav').offset().top - 40
		, isFixed = 0
		processScroll()
		// hack sad times - holdover until rewrite for 2.1
		$nav.on('click', function () {
			if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
		})
		$win.on('scroll', processScroll)
		function processScroll() {
			var i, scrollTop = $win.scrollTop()
			if (scrollTop >= navTop && !isFixed) {
				isFixed = 1
				$nav.addClass('subnav-fixed')
			} else if (scrollTop <= navTop && isFixed) {
				isFixed = 0
				$nav.removeClass('subnav-fixed')
			}
		}
	})
}(window.jQuery)