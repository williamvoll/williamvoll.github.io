$(function() { //document.ready shorthand
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 0)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});
	$(window).scroll(function() {
		if ($(document).scrollTop() > 300) {
		    $('nav').addClass('shrink');
		} else {
		    $('nav').removeClass('shrink');
            $('.run_once').removeClass('run_once');
		}
	});
	//make nav go away after click on mobile
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});
	//send image src & alt to modal... dynamically load image & alt text in modal
	$("img").click(function () {
		$("#modalImage").attr({"src": $(this).attr("src"), "alt": $(this).attr("alt")});
	});
});

$(function () {
  $('#contact-form').validate();
});

$(function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };
	// JavaScript
  window.sr = ScrollReveal();
  sr.reveal('.mt_right', {...defaultProps,delay: 500,origin: window.innerWidth > 768 ? 'left' : 'bottom'});
  sr.reveal('.big_s', {...defaultProps,delay: 1000,origin: window.innerWidth > 768 ? 'left' : 'bottom'});
	sr.reveal('.portfolio_img.web',{duration:1e3,delay:200},300);
	sr.reveal('.portfolio_img.marketing',{duration:1e3,delay:200},300);
	sr.reveal('.portfolio_img.design',{duration:1e3,delay:200},300);
	sr.reveal('.portfolio_img.reports',{duration:1e3,delay:200},300);
	sr.reveal('.icon',{duration:600,scale:.3,distance:"0px"},300);
	sr.reveal('.icon2',{duration:600,scale:.3,distance:"0px"},300);
	sr.reveal('.icon3',{duration:600,scale:.3,distance:"0px"},300);
	sr.reveal('.sr_about',{duration:600,scale:.3,distance:"0px"},500);
	sr.reveal('.sr_hire',{duration:600,scale:.3,distance:"0px"},300);
});
