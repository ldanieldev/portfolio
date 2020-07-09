"use strict";

// 2. GalleryFilter
function GalleryFilter () {

	if ($('.image-gallery').length) {
		$('.image-gallery').each(function () {
			var Self = $(this);
			var filterSelector = Self.data('filter-class');
			var showItemOnLoad = Self.data('show-on-load');
			
			if (showItemOnLoad) {
				Self.mixItUp({
					load: {
						filter: '.'+showItemOnLoad
					},
					selectors: {
						filter: '.'+filterSelector
					}
				})	
			};
			Self.mixItUp({
				selectors: {
					filter: '.'+filterSelector
				}
			});
		});
	};
}
// 3. fancyboxInit
function fancyboxInit () {
	var galleryFcb = $('.fancybox');
	if(galleryFcb.length){
		galleryFcb.fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
}
// 5. testimonialCarosule
function testimonialCarosule () {
	if ($('.testimonials-wrap .owl-carousel').length) {
		$('.testimonials-wrap .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    dots: true,
		    items: 2,
		    autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
		});
	}
}
// 7. SmoothMenuScroll
function SmoothMenuScroll () {
	var anchor = $('.scrollToLink');		
	if(anchor.length){
		anchor.children('a').bind('click', function (event) {
			if ($(window).scrollTop() > 10) {
			 	var headerH = '73';
			}else {
			 	var headerH = '73';
			}

			var target = $(this);
			var anchorHeight= target.height();
			$('html, body').stop().animate({
				scrollTop: $(target.attr('href')).offset().top - anchorHeight + 'px'
			}, 1200, 'easeInOutExpo');
			anchor.removeClass('current');
			target.parent().addClass('current');
			event.preventDefault();
		});
	}
}
// 8. OnePageMenuScroll
function OnePageMenuScroll () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
    	var menuWrap = $('.navigation.scroll-menu'); // change as your menu wrap
    	menuWrap.find('.scrollToLink a').each(function (){
    		// grabing section id dynamically
    		var sections = $(this).attr('href');
	        $(sections).each(function() {
	        	// checking is scroll bar are in section
	            if ($(this).offset().top <= windscroll + 100) {
	            	// grabing the dynamic id of section
	        		var Sectionid = $(sections).attr('id');
	        		// removing current class from others
	        		menuWrap.find('li').removeClass('current');
	        		// adding current class to related navigation
	        		menuWrap.find('a[href=#'+Sectionid+']').parent().addClass('current');
	            }
	        });
    	});
    } else {
        $('.mainmenu.one-page-scroll-menu li.current').removeClass('current');
        $('.mainmenu.one-page-scroll-menu li:first').addClass('current');
    }
}
// 10. contactFormValidation
function contactFormValidation () {
	if($('.contact-form').length){
		$('.contact-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				},
				subject: {
					required: true
				}
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				var cForm = $(form);
				$.post(cForm.attr('action'), cForm.serialize(), function (response) {
					cForm.parent('div').append(response);
					cForm.find('input[type="text"]').val('');
					cForm.find('input[type="email"]').val('');
					cForm.find('textarea').val('');
				});
				return false;
			}
		});
	}
}
// 11. videoFancybox
function videoFancybox () {
	if ($('.video-fancybox').length) {
		$('.video-fancybox').on('click', function () {
			var Self = $(this);
			Self.fancybox({
				'padding'	: 0,
				'autoScale'	: false, 
				'transitionIn'	: 'none', 
				'transitionOut'	: 'none', 
				'title'	: this.title, 
				'width'	: 640, 
				'height'	: 385, 
				'href'	: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 
				'type'	: 'swf', 
				'swf'	: { 'wmode'	: 'transparent', 'allowfullscreen'	: 'true' }
			});
			return false;
		})
	};
}
// 13. hiddenBarMenuConfig
function hiddenBarMenuConfig () {
	var menuWrap = $('.hidden-bar .main-menu');
	// condition for small screen 
	if ($(window).width() <= 1024) {
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="fa fa-chevron-down"></i></button>';
		});
		
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			var Self = $(this);
			Self.on('click', function () {
				Self.parent() // return parent of .btn.expander (a) 
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				Self.parent().toggleClass('current');
				// toggling arrow of expander
				Self.find('i').toggleClass('fa-chevron-up fa-chevron-down');
				

				return false;

			});
		});

	};
}
// 14. customScrollBarHiddenSidebar
function customScrollBarHiddenSidebar () {
	if ($('.hidden-bar-wrapper').length) {
		$('.hidden-bar-wrapper').mCustomScrollbar();
	};
}
// 15. hiddenBarToggler
function hiddenBarToggler () {
	if ($('.hidden-bar-closer').length) {
		$('.hidden-bar-closer').on('click', function () {
			$('.hidden-bar.right-align').css({
				'right': '-150%'
			});
			$('.hidden-bar.left-align').css({
				'left': '-150%'
			});
		});
	};
	if ($('.hidden-bar-opener').length) {
		$('.hidden-bar-opener').on('click', function () {
			$('.hidden-bar.right-align').css({
				'right': '0%'
			});
			$('.hidden-bar.left-align').css({
				'left': '0%'
			});
		});
	};
}
// 16. handlePreloader
function handlePreloader() {
	if($('.preloader').length){
		$('.preloader').fadeOut();
	}
}
// 19. progressBarConfig
function progressBarConfig () {
	var progressBar = $('.skills-name li');
	if(progressBar.length) {
		progressBar.each(function () {
			var Self = $(this);
			Self.appear(function () {
				var progressValue = Self.data('value');

				Self.find('.progress-value-bar').animate({
					width:progressValue+'%'						
				}, 2000);

				Self.find('.value').countTo({
					from: 0,
				    to: progressValue,
				    speed: 5000
				});
			});
		})
	}

}
// 20. clientlCarosule
function clientlCarosule () {
	if ($('.client-carousel .owl-carousel').length) {
		$('.client-carousel .owl-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    dots: false,
		    autoWidth: true,
		    autoHeight: true,
		    items: 6,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1,
                    autoWidth: false,
		    		autoHeight: false
                },
                480:{
                    items:2,
                    autoWidth: false,
		    		autoHeight: false
                },
                600:{
                    items:3,
                    autoWidth: false,
		    		autoHeight: false
                },
                1000:{
                    items:6,
                    autoWidth: true,
		    		autoHeight: true
                }
            }
		});
	}
}
// 27. backgroundSlider
function backgroundSlider () {
	if ($('.bg-slider').length) {

		var elmt = $(".bg-slider.banner-one").vegas({
			timer: false,
			transition: [ 'fade2' ],
		    slides: [
		    	{src: 'img/slides/le-andris-daniel.jpg'}
		    ]
		});
	}
}
// 28. typed
function typed () {
	if ($(".typed").length) {
		$(".typed").typed({
	        stringsElement: $('.typed-strings'),
	        typeSpeed: 200,
	        backDelay: 1500,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	        callback: function () { null; },
	        resetCallback: function () { newTyped(); }
	    });
    };
}

// instance of fuction while Document ready event	
jQuery(document).on('ready', function () {
	(function ($) {
		GalleryFilter();
		fancyboxInit();
		testimonialCarosule();
		contactFormValidation();
		videoFancybox();
		hiddenBarMenuConfig();
		hiddenBarToggler();
		clientlCarosule();
		backgroundSlider();
		typed();
	})(jQuery);
});
// instance of fuction while Window Load event
jQuery(window).on('load', function () {
	(function ($) {
		SmoothMenuScroll();
		customScrollBarHiddenSidebar();
		handlePreloader();
		progressBarConfig();		
	})(jQuery);
});
// instance of fuction while Window Scroll event
if(jQuery(".homepage").length > 0){
jQuery(window).on('scroll', function () {
	(function ($) {		
		OnePageMenuScroll();
	})(jQuery);
});
}
// instance of fuction while Window Resize event
jQuery(window).on('resize', function () {
	(function ($) {		
		hiddenBarMenuConfig();
	})(jQuery);
});



