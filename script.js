var state;

$('head').ready(function() {
	var width = $(window).width();
	if (width <= 740) {
		state = 'mobile';
		console.log('mobile');
		loadCSS('tralbum_mobile_bundle.css');
		loadCSS('global_phone_bundle.css');

	} else {
		state = 'desktop';
		console.log('desktop');
		loadCSS('tralbum_bundle.css');
		loadCSS('global_bundle.css');
	}

	function loadCSS(href) {
		var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
		$("head").prepend(cssLink);
	};
})

$(document).ready(function() {
	var responsiveData = [
		{
			selector: '#code label',
			desktop: 'Code',
			mobile: 'code:'
		}, {
			selector: '#email label',
			desktop: 'Email <span class="de-emphasized">(optional)</span>',
			mobile: 'email:'
		}, {
			selector: '#email .form-field .textinput',
			desktop: "join the artist's mailing list",
			mobile: 'download link will be sent here'
		}
	];

	// populate html with correct content
	$.each(responsiveData, function(index, obj) {
		var element = $(obj.selector);
		if (element.is('input')) {
			element.attr('placeholder',obj[state]);
		} else {
			element.html(obj[state]);
		}
	})


	$('#log-in').click(function() {
		login();
	})

	$('.bc-ui.gear').click(function() {
		logout();
	})



	function login() {
		$('body').addClass('loggedin');
		console.log('logged in');
	}

	function logout() {
		$('body').removeClass('loggedin');
		console.log('logged out');
	}


})
