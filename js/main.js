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

	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
									social_tools: false,
									theme: 'dark_rounded',
									arrows: true,
	});

	
});