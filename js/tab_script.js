// JavaScript Document

$(function(){
  $('.tabmenu>li>h2').click(function(){
	$(this).parent().addClass("active").siblings().removeClass("active");
		return false
	});
});





