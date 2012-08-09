jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for PORFOLIO
	
	*******************************************************************************************************************/
	/*
		ADD class fixed TO div SUBNAV when scroll y > 125 pixels  
		Las propiedades Top, Bottom, Left y Right de subnav no cambian al cambiar el scroll.
		Tenemos que finar un valor del scroll a partir del cual se añade .fixed a subnav.
	*/
$(window).bind('scroll',function(){
	var arrayH2 = $('.contenedor').find('section');
	var navigationVar = $('.subnav');
	var navigationVarElements = $('.nav li a');
	var offsetBefore = -10;
	var limitScroll = 20;	// Valor del scroll para el cual se añade .fixed
	var subnavTop = $(navigationVar).position().top;
	var subnavHeight = $(navigationVar).css('height').replace('px','');
	$.stickyTitle(arrayH2, 
		navigationVar, 
		navigationVarElements,
		subnavTop,
		subnavHeight,
		offsetBefore, 
		limitScroll);
	});
});