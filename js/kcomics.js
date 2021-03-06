$(document).ready(function() {
	//공유 버튼
	$(".sh_icon, .sh_sns .close").click(function(){
		$('.sh_sns').slideToggle('fast');
	});

	$(".fam_open").click(function(){
		$('.family_site').toggleClass('on');
	});


	//pc 전체 메뉴
	var $nav_exp = $('.nav').clone();
	var nav_clone = $('.nav_clone');
	nav_clone.append($nav_exp);

	$("#nav .hv").mouseenter(function(){
		$(".nav_clone").show();
	});

	$(".ham a").click(function(){
		$(".nav_clone").toggle();
	});


	$("#nav .hv").mouseleave(function(){
		$(".nav_clone").mouseenter(function(){
			$(".nav_clone").show();
		});
		$(".nav_clone").hide();
	});

	$(".nav_clone").mouseleave(function(){
		$(".nav_clone").hide();
	});


	//모바일용 메뉴들
	$('.nav_mobile_wrap').append('<div id="side_bgc"></div>');

	$("#mw_ham, #mw_ham2").click(function(){
		$("#mw_side_nav").animate({"left": "0"}, {duration: 300});
		$('html').addClass('expand');
	});

	$(".btn_side_close, #side_bgc").click(function(){
		$("#mw_side_nav").animate({"left": "-100%"}, {duration: 300});
		$('html').removeClass('expand');
	});


	$("#mw_my, #mw_my2").click(function(){
		$("#my_nav_wrap").animate({"right": "0"}, {duration: 300});
		$('html').addClass('expand');
	});

	$(".btn_my_close, #side_bgc").click(function(){
		$("#my_nav_wrap").animate({"right": "-100%"}, {duration: 300});
		$('html').removeClass('expand');
	});


	$(".nms").click(function(){
		$(this).toggleClass('on');
		$(this).next('.nms_list').slideToggle('fast');
	});

	$(".nms_close").click(function(){
		$('.nms_list').slideUp('fast');
		$('.nms').removeClass('on');
	});



	//모바일용 왼쪽 nav
	var $nav_exp_mov = $('#nav .nav_list').clone();

	$(".left_navi").append($nav_exp_mov);

	$('.left_navi a').each(function( index ) {
		crtIndex = $(this).attr('data_sub');
		if( crtIndex == 'yes' ){
			$(this).attr("href","#none");
		};
		if( crtIndex == 'no' ){
			$(this).parents('li').removeClass('hv');
		};
	});

	$(".left_navi li.hv").click(function(){
		$(this).siblings().removeClass("on");
		$(this).siblings().children("ul").slideUp('fast');
		$(this).children("ul").slideToggle('fast');
		$(this).toggleClass('on');
	});




	// ************/

	//파일명 추출
	function getFilename(url) {
		var filename = url.substring(url.lastIndexOf('/')+1);
		var filename = filename.split("."); 
		var filename_o = filename[0];
		return filename_o === null ? "" : filename_o;
	};

	var sUrl = document.location.pathname+document.location.search;

	$('.snb a').each(function( index ) {
		uIndex = getFilename(sUrl);	
		myIndex = getFilename( $(this).attr('href'));

		if( uIndex == myIndex ){
			$(this).addClass('active');
		};
	});

	var ftxt = getFilename(sUrl);	
	var first_txt = ftxt.substring(0,2);
	var first_txt4 = ftxt.substring(0,4);

	if (first_txt =='1_') {
		$("#snb1, #snb_mob1").show();
	}

	if (first_txt =='3_') {
		$("#snb2, #snb_mob2").show();
	}

	if (first_txt =='5_' || first_txt =='6_') {
		$("#snb3, #snb_mob3").show();
	}

	if (first_txt =='7_') {
		$("#snb4, #snb_mob4").show();
	}

	if (first_txt =='8_') {
		$("#snb5, #snb_mob5").show();
	}

	if (first_txt =='9_') {
		$("#snb6, #snb_mob6").show();
	}

	if (first_txt =='10') {
		$("#snb10, #snb_mob10").show();
	}

	/*
	if (first_txt4 =='10_1' || first_txt4 =='10_2' || first_txt4 =='10_3') {
		$("#snb10a").show();
	}

	if (first_txt4 =='10_4' || first_txt4 =='10_5' || first_txt4 =='10_6' || first_txt4 =='10_7') {
		$("#snb10b").show();
	}
	*/

	if (first_txt =='11') {
		$("#snb11, #snb_mob11").show();
	}



});