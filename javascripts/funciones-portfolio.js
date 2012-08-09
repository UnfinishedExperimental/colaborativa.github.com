jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for PORFOLIO
	
	*******************************************************************************************************************/
	/*
		ADD class fixed TO div SUBNAV when scroll y > 125 pixels  
		Las propiedades Top, Bottom, Left y Right de subnav no cambian al cambiar el scroll.
		Tenemos que finar un valor del scroll a partir del cual se añade .fixed a subnav.
		EQUATION: limit = var(H2 Top) + H2 Height/2 - SUBNAV top - SUBNAV height 
	*/
var stickyTitle = function(arrayH2, navigationVar, navigationVarElements, subnavTop, subnavHeight, offsetBefore, tempScrollTop, currentScrollTop, limitScroll){ 	
	currentScrollTop = $(window).scrollTop(); 
	if (tempScrollTop > currentScrollTop ) {// Upscroll code
	     /* 1st Remove .fixed to Subnav div class */
	     if(currentScrollTop < limitScroll && ($(navigationVar).hasClass('fixed'))){
			$(navigationVar).removeClass('fixed');
		 }
		/* 2nd Remove .Active to A tag*/
		$(arrayH2).each(function(index, item) {
	 		var limitCurrent = Number($(this).position().top) - Number(subnavTop) - Number(subnavHeight);
			var h2_id = $(this).attr('id');
			if ( index == 0  ){
				// nothing
				if ( (Number(limitCurrent)+Number(offsetBefore) ) < 0){
					$(navigationVarElements).removeClass('activo');
					$(navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
				}
			}else{
				var previousChild = $(arrayH2)[Number(index)-Number(1)];
				var limitPrevious = Number($(previousChild).position().top) - Number(subnavTop) - Number(subnavHeight);
				if ((Number(limitPrevious)+Number(offsetBefore) ) < 0 && (Number(limitCurrent)+Number(offsetBefore) ) < 0){
					$(navigationVarElements).removeClass('activo');
					$(navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
				}
			}
		});
	}else if (tempScrollTop < currentScrollTop ){ // Downscroll code
	     /* 1st Add .fixed to Subnav div class */
	     if(currentScrollTop >= limitScroll && !($(navigationVar).hasClass('fixed'))){
			$(navigationVar).addClass('fixed');
		 }  
		/* 2nd Add .Active to A tag*/
		 $(arrayH2).each(function(index, item) {
			var limit = Number($(this).position().top) + Number($(this).css('height').replace('px',''))/2 - Number(subnavTop) - Number(subnavHeight);
			var h2_id = $(this).attr('id');
			if ((Number(limit) + Number(offsetBefore) ) < 0 && (currentScrollTop < Number($(this).position().top) )){
				$(navigationVarElements).removeClass('activo');
				$(navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
			}
		});
	}
	tempScrollTop = currentScrollTop; 
};
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
	stickyTitle(arrayH2, 
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