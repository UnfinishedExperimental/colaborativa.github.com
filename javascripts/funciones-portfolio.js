jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for PORFOLIO
	
	*******************************************************************************************************************/
	/*
		ADD class fixed TO div SUBNAV when scroll y > 125 pixels  
		Las propiedades Top, Bottom, Left y Right de subnav no cambian al cambiar el scroll.
		Tenemos que finar un valor del scroll a partir del cual se añade .fixed a subnav.
	*/
	var tempScrollTop, currentScrollTop = 0; // for getting the scroll direction
	var limitScroll = 20;	// Valor del scroll para el cual se añade .fixed
	$(window).bind('scroll', function(){ // check only for vertical scroll
		currentScrollTop = $(window).scrollTop(); 
		console.log("Scroll: " + currentScrollTop +" "+ $('.subnav').position().top);
		if (tempScrollTop > currentScrollTop ) {
		     // Upscroll code
		     /* 1st Remove .fixed to Subnav div class */
		     if(currentScrollTop < limitScroll && ($('.subnav').hasClass('fixed'))){
				$('.subnav').removeClass('fixed');
			 }
			/* 2nd Remove .Active to A tag*/
			  $('.descripcion').find('h2').each(function(index, item) {
			 	var subnavTop = $('.subnav').position().top; // Remove 'px'
			 	var subnavHeight = $('.subnav').css('height').replace('px',''); // Remove 'px'
			 	var limitCurrent = Number($(this).position().top) - Number(subnavTop) - Number(subnavHeight);
				var h2_id = $(this).attr('id');
				/* limit = var(H2 Top) + H2 Height/2 - SUBNAV top - SUBNAV height */
			 	//console.log("upscroll-- "+ subnavTop+ "--" +subnavHeight +"--"+ Number($(this).position().top)+" "+limitCurrent + "< "+ currentScrollTop);
				if ( index == 0  ){
					// nothing
					if (limitCurrent < 0){
							console.log("Add class activo"+h2_id + " " + $('.nav li a'));
						$('.nav li a').removeClass('activo');
						$('.nav li a[href=#'+h2_id+']').addClass('activo');
					}
				}else{
					var previousChild = $('.descripcion').children('h2')[Number(index)-Number(1)];
					var limitPrevious = Number($(previousChild).position().top) - Number(subnavTop) - Number(subnavHeight);
					if (limitPrevious < 0 && limitCurrent < 0){
						//console.log("Add class activo"+h2_id + " " + $('.nav li a'));
						$('.nav li a').removeClass('activo');
						$('.nav li a[href=#'+h2_id+']').addClass('activo');
					}
				}
			});
		}else if (tempScrollTop < currentScrollTop ){
		      // Downscroll code
		     /* 1st Add .fixed to Subnav div class */
		     if(currentScrollTop >= limitScroll && !($('.subnav').hasClass('fixed'))){
				$('.subnav').addClass('fixed');
			 }  
			/* 2nd Add .Active to A tag*/
			 $('.descripcion').find('h2').each(function(index, item) {
			 	var subnavTop = $('.subnav').position().top; // Remove 'px'
			 	var subnavHeight = $('.subnav').css('height').replace('px',''); // Remove 'px'
			 	var limit = Number($(this).position().top) + Number($(this).css('height').replace('px',''))/2 - Number(subnavTop) - Number(subnavHeight);
				/* limit = var(H2 Top) + H2 Height/2 - SUBNAV top - SUBNAV height */
			 	//console.log("donwscroll-- "+ subnavTop+ "--" +subnavHeight +"--"+ Number($(this).position().top)+" "+limit + "< "+ currentScrollTop);
				var h2_id = $(this).attr('id');
				if (limit < 0 && (currentScrollTop < Number($(this).position().top) )){
					console.log("Add class activo"+h2_id + " " + $('.nav li a'));
					$('.nav li a').removeClass('activo');
					$('.nav li a[href=#'+h2_id+']').addClass('activo');
				}
			});
		}
		tempScrollTop = currentScrollTop; 
	});
});