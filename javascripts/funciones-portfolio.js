jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for PORFOLIO
	
	*******************************************************************************************************************/
	/*
		ADD class fixed TO div SUBNAV when scroll y > 125 pixels  
		Las propiedades Top, Bottom, Left y Right de subnav no cambian al cambiar el scroll.
		Tenemos que finar un valor del scroll a partir del cual se añade .fixed a subnav.
	*/
var tempScrollTop=0;
var currentScrollTop = 0; // for getting the scroll direction
$(window).bind('scroll',function(){
	var arrayH2 = $('.descripcion').find('h2');
	var navigationVar = $('.subnav');
	var navigationVarElements = $('.nav li a');
	var subnavTop = $('.subnav').position().top;
	var subnavHeight = $('.subnav').css('height').replace('px','');
	var offsetBefore = -10;
	var limitScroll = 20;	// Valor del scroll para el cual se añade .fixed
	$.stickyTitle(arrayH2, 
		navigationVar, 
		navigationVarElements,
		subnavTop, 
		subnavHeight, 
		offsetBefore, 
		tempScrollTop, 
		currentScrollTop, 
		limitScroll);
	});
});