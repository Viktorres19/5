$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	/*Подравниваем столбцы*/
	$(".section_1 .section-content .info-item").equalHeights();
	$(".section_3 .section-content .info-item p").equalHeights();	
	$(".section_3 .section-content .info-item h4").equalHeights();		
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-item span").equalHeights();
	$(".cards .card p").equalHeights();

	/*Script for rotating cards*/
	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});	

	$('.owl-carousel').owlCarousel({
		  	loop: true,
		  	items: 1,
		  	autoplay: true
		  });

});
