$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu').slideToggle(1000);
	});

	 $('.test-popup').magnificPopup({
	 	type:'image'
	 });

	 $('.menu ul li a').click(function(){
	 	var value = $(this).attr('href');
	 	 
	 	$('html, body').animate({
	 		scrollTop:$(value).offset().top
	 	}, 1000);
	 	return false;
	 });

	 $('.uptoscrollbtn').click(function(){
	 	$('html, body').animate({
	 		scrollTop:0
	 	}, 1000);
	 	return false;
	 });

});

$(window).scroll(function(){
	 	var scrollvalue = $(this).scrollTop();
	 	if(scrollvalue>400){
	 		$('.uptoscrollbtn').show();
	 	}else{
	 		$('.uptoscrollbtn').hide();
	 	}

	 	if(scrollvalue>200){
	 		$('.header-top-area').addClass('fixedmenu');
	 	}else{
	 		$('.header-top-area').removeClass('fixedmenu');
	 	}

});