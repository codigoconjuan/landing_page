$(document).ready(function() {



	var nav = $('.navbar-fixed-top');
	var distancia = $('.navbar-fixed-top').offset();
	if ( distancia.top >= 300) {
		nav.removeClass('normal').addClass('navanimation');
	}




	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 300) {
			nav.removeClass('normal').addClass('navanimation');
		} else {
			nav.removeClass('navanimation').addClass('normal');
		}
	});



	var height = $(window).height(); 
	var breakpoint = 767; 
	if($(document).width() >= breakpoint) {
		$('section#top').css('height', height +'px');
	}




	$('section#screenshots a').on('click',function() {
		$('#modal img').attr('src', $(this).attr('data-image-url') );
	});

	$('section#app .anima1').waypoint(function() {
		$('section#app .anima1').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#app .anima2').waypoint(function() {
		$('section#app .anima2').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#app .anima3').waypoint(function() {
		$('section#app .anima3').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});

	$('section#features #appCentral').waypoint(function() {
		$(this).addClass('animated fadeInDownBig');
	}, {
		offset: '60%'
	});

	$('section#features .anima1').waypoint(function() {
		$(this).addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});
	$('section#features .anima2').waypoint(function() {
		$(this).addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});

	$('section#screenshots .anima1').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
	$('section#screenshots .anima2').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
	$('section#screenshots .anima3').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#download .anima1').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#download .anima2').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#download .anima3').waypoint(function() {
		$(this).addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

// VALIDACIÓN FORMULARIO

   $('#support')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'This field is required and cannot be empty'
                        },
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: 'The Message is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                $('#ok').fadeIn();
                 console.log(result);
            }, 'json');
        });



});

smoothScroll.init({
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});