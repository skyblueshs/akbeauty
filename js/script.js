$(function(){		//시작
	// $("a").click(function(){
	// 	event.preventDefault();
	// });
//탭메뉴 시작
  $('.tabmenu h2').click(function(){		
		event.preventDefault();
		$('.tabmenu h2').removeClass("on");
		$(this).addClass("on");
		$('.tabmenu ul').removeClass("on");
		$(this).next("ul").addClass("on");
	});		
//탭메뉴 끝

//스와이퍼 시작
	var swiper = new Swiper(".mySwiper", {		
		loop:true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".right_arrow",
			prevEl: ".left_arrow",
		},
	});		
	//스와이퍼 끝


	//모달레이어 팝업 시작
	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
	
	$("#glayLayer, #overLayer, .close").click(function(){
		event.preventDefault();
		$("#glayLayer").hide();
		$("#overLayer").hide().empty();
	})

	$(".newproduct .np_img a").click(function(){
		$("#glayLayer").show();
		$("#overLayer").show().html("<iframe width='100%' height='100%' src='https://www.youtube.com/embed/YLz3QNoI-Ak?amp;autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe /><a href='#' class='close'>X</a>");
		return false;
	});
	//모달레이어 팝업 끝

});		//끝




