$(document).ready(function() {

	var iconTimer;

	$('.small-message a').click(function() {
		var formdata = getCodeAndEmail();
		login();
		return false;
	})

	$('#login-main a').click(function() {
		login();
		return false;
	})

	$('.bc-ui.gear, #account-main a').click(function() {
		logout();
		return false;
	})

	$('#code-input').on('input', function() {
		var input = $(this);
		var icon = $('#code-icon');
		if (input.val().length == 9 && input.val()[4] == '-') {
			icon.addClass('loading');

			// simulating successful ajax request:
			iconTimer = setTimeout(function() {
				icon.removeClass('loading').addClass('check');
			}, 500);
		} else {
			clearTimeout(iconTimer);
			clearIcon();
		}
	})

	$('#code-input').focusout(function() {
		var input = $(this);
		var icon = $('#code-icon');
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
		var formdata = getCodeAndEmail();

		console.log(formdata.code, formdata.email);
	})



	function login() {
		$('body').addClass('loggedin');
		clearIcon();
		console.log('logged in');
	}

	function logout() {
		$('body').removeClass('loggedin');
		clearIcon();
		console.log('logged out');
	}

	function clearIcon() {
		$('#code-icon').removeClass('loading times check');
	}

	function getCodeAndEmail() {
		var obj = {};
		var form = $('#redeem-form');
		obj.code = form.find('#code-input').val();

		// both email fields are identical
		obj.email = $(form.find('.email-input')[0]).val();

		obj.code = obj.code == '' ? undefined : obj.code;
		obj.email = obj.email == '' ? undefined : obj.email;

		return obj;
	}

})
