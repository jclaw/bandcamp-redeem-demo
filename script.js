$(document).ready(function() {

	var iconTimer;

	$('.small-message a, #login-main a').click(function() {
		login();
		return false;
	})

	$('.bc-ui.gear').click(function() {
		logout();
	})

	$('#account-main a').click(function() {
		logout();
		return false;
	})

	$('#code-input').on('input', function() {
		var input = $(this);
		var icon = input.parent().find('.bc-ui.form-icon');
		if (input.val().length == 9 && input.val()[4] == '-') {
			icon.addClass('loading');
			iconTimer = setTimeout(function() {
				icon.removeClass('loading').addClass('check');
			}, 500);
		} else {
			clearTimeout(iconTimer);
			icon.removeClass('loading times check');
		}
	})

	$('#code-input').focusout(function() {
		console.log('here');
		var input = $(this);
		var icon = input.parent().find('.bc-ui.form-icon');
		if (!icon.hasClass('loading') && !icon.hasClass('check')) {
			icon.addClass('times');
		}
	})

	// maintain same value in both email input fields
	// there are two email input fields so that each can have a
	// different placeholder
	$('.email-input').on('input', function() {
		var el = $(this);
		$('.email-input').not(el).val(el.val());
	})

	$('#redeem-form').submit(function(e) {
		e.preventDefault();
		var form = $(this);
		var code = form.find('#code-input').val();
		var emailfields = form.find('.email-input');
		var email;
		if ($(emailfields[0]).val() == '') {
			email = $(emailfields[1]).val();
		} else {
			email = $(emailfields[0]).val();
		}
		console.log(code, email);
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
