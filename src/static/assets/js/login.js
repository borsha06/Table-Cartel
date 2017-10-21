    import $ from 'jquery';
    $(document).ready(function(){
    	$(".form_name").focus(function(){
    		$(".logos>img").hide();

    	});
    	$(".form_pass").focus(function(){
    		$(".logos>img").hide();

    	});
    	$("#login-body").focusout(function(){
    		$(".logos>img").show();

    	});
    	// $("body").click(function(){
    	// 	$(".logo-area").show();

    	// });



    });