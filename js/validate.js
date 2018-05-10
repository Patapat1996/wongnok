$(function () {
    $('#mainform').submit(function (event) {
    var form = $('#mainform')[0];
    if (form.checkValidity() === false) {
    event.preventDefault();
    }
    $(this).addClass('was-validated');
    });
    });

    $(document).ready( function() {
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});

		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 	
	});

	var password = document.getElementById("password")
	, confirm_password = document.getElementById("confirm_password");
  
  function validatePassword(){
	if(password.value != confirm_password.value) {
	  confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
	  confirm_password.setCustomValidity('');
	}
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;