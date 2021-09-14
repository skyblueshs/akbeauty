$(function(){
  $('.tabmenu h2').click(function(){
		event.preventDefault()
		$('.tabmenu h2').removeClass("on");
		$(this).addClass("on");
		$('.tabmenu ul').removeClass("on");
		$(this).next("ul").addClass("on");
	});
});





