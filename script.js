$(document).ready(function() {
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
