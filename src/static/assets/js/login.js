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
        $(".reserve_background reserved_side").click(function(){
            $(".cuisine_footer_carousel").show();

        });

    	// $("body").click(function(){
    	// 	$(".logo-area").show();

    	// });
        $("input[placeholder]").each(function () {
            $(this).attr("data-placeholder", this.placeholder);

            $(this).bind("focus", function () {
                this.placeholder = '';
            });
            $(this).bind("blur", function () {
                this.placeholder = $(this).attr("data-placeholder");
            });
        });





    });