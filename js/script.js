$(document).ready(function () {
	console.log('Hello world');


	$('.submitButton').click(function formValidation() {
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var form = $('.subscribe-form');

		if ( $.trim(firstname).length == 0 
			|| $.trim(lastname).length == 0
			|| $.trim(email).length == 0) {
			alert('Invalid input in the form, fill all the inputs');
		} else if (!chekcEmailReg(email)) {
			alert('Invalid email address');
		} else {
			alert('Correct');
			form.reset();
		}
	});

	function chekcEmailReg(email) {
		return /\S+@\S+\.\S+/.test(email)
	}

	$(window).resize(function(){
		if($( window ).width() <= 991){
			$('.form-inline').removeClass('form-inline');
		}
	});


	$('.arrow-to-scroll').click(function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});