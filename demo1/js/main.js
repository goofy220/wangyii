$(function(){
	var $mainNav = $('#mainNav');
	$mainNav.find('li').hover(function(){
		$(this).addClass('current');
	}, function(){
		$(this).removeClass('current');
	})
})