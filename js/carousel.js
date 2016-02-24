var main = function() {

	var nextPageF = function () {

		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		var currentDot = $('.active-dot');
		var nextDot = currentDot.parent().next().children('.dot');

		if(nextSlide.length == 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}			

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

	};

	var prefPageF = function () {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();
		var currentDot = $('.active-dot');
		var prevDot = currentDot.parent().prev().children('.dot');

		if(prevSlide.length == 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	};

	$('.slider-dots a').click(function(){
		clearInterval(interval);
		interval = setInterval(nextPageF, 4000);
		$('.slide.active-slide').fadeOut(600).removeClass('active-slide');
		$('.dot.active-dot').removeClass('active-dot');
		$(this).children('.dot').addClass('active-dot');
		$('#'+$(this).attr('data-id')).fadeIn(600).addClass('active-slide');
	});

	var interval = setInterval(nextPageF, 4000);
	$('.arrow-next').click(function(){
		clearInterval(interval);
		interval = setInterval(nextPageF, 4000);
		nextPageF();
	});
	$('.arrow-prev').click(function(){
		clearInterval(interval);
		interval = setInterval(nextPageF, 4000);
		prefPageF();
	});
};


$(document).ready(main);

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});