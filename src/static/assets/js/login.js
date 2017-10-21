    import $ from 'jquery';
    $(document).ready(function(){
    	$(".form_name").focus(function(){
    		$(".logo-area").hide();

    	});
    	$(".form_pass").focus(function(){
    		$(".logo-area").hide();

    	});
    	$("#login-body").focusout(function(){
    		$(".logo-area").show();

    	});
    	// $("body").click(function(){
    	// 	$(".logo-area").show();

    	// });



    });