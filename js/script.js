$(document).ready(function(){
	//Переключатель в блоке с классом "if_army"
 
   
   $(".if_a-btn_left").click(function(){
	   $(".if_a-btn_right").addClass("if_a-right");
	   $(".if_a-btn_right").removeClass("if_a-right_active");
	   
	   $(".if_a-btn_right-icon").addClass("if_a-right-icon");
	   $(".if_a-btn_right-icon").removeClass("if_a-right_active-icon");
	   $(".if_a-btn_left-icon").addClass("if_a-left_active-icon");
	   $(".if_a-btn_left-icon").removeClass("if_a-left-icon");

	   $(this).addClass("if_a-left_active");
	   $(this).removeClass("if_a-left");

	   $(".offer-btn_left").removeClass("block-none");
	   $(".offer-btn_right").addClass("block-none")
   });
   
   $(".if_a-btn_right").click(function(){
	   $(".if_a-btn_left").addClass("if_a-left");
	   $(".if_a-btn_left").removeClass("if_a-left_active");
	   
	   $(".if_a-btn_left-icon").addClass("if_a-left-icon");
	   $(".if_a-btn_left-icon").removeClass("if_a-left_active-icon");
	   $(".if_a-btn_right-icon").addClass("if_a-right_active-icon");
	   $(".if_a-btn_right-icon").removeClass("if_a-right-icon");

	   $(this).addClass("if_a-right_active");
	   $(this).removeClass("if_a-right");

	   $(".offer-btn_right").removeClass("block-none");
	   $(".offer-btn_left").addClass("block-none");
   });
   
   
	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.menu-sidebar .sidebar-menu-arrow');
        //$menuParentItem = $('.menu-sidebar .menu-item-has-children');

	// Hamburger button
	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	$("#fb-tel").mask("+7 (999) 999-9999");
	$("#m-tel").mask("+7 (999) 999-9999");

});
   
