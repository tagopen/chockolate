jQuery(document).ready(function() {
	jQuery('.hamburger').click(function() {
		jQuery('.mobile-nav').toggleClass('show-menu');
	});

	jQuery('.top-content-slider').slick({
									arrows: false,
									dots: true,

	});

	jQuery('.header-slider').slick ({
									arrows: false,
									autoplay: true,
									autoplaySpeed: 10000,
	});

	jQuery('.interior-slider').slick({
									arrows: true,
									dots: true,

	});

});

$('#carousel-girl1, #carousel-girl2, #carousel-girl3, #carousel-girl4, #carousel-girl5, #carousel-girl6').hover(function () { 
  $(this).carousel('pause');
}, function () { 
  $(this).carousel('cycle');
});