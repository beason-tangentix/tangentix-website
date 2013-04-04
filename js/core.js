function nav_width() {
	var nav_width = $('#test_section .inner').outerWidth();
	var nav_li = (nav_width / 4) - 1
	var nav_li_first = (nav_width / 4) - 2

	$('#test_section .inner li').css({width: nav_li})
	$('#test_section .inner li.process').css({width: nav_li_first})
}

function tester() {
	var blocked = $('.centered').outerHeight()
	
	if (document.documentElement.clientHeight <= blocked) {
		alert('no')
	}
}

function middle() {
	var windowHeight = $(window).outerHeight();
	var windowWidth = $(window).outerWidth();

	var halfHeight = windowHeight / 2
	var blocker = $('.centered').outerHeight()
	var halfBlocker = blocker / 2
	var margin_top = halfHeight - halfBlocker - 100

}



$(window).load(function() {
	tester()
	nav_width()
	
	

	var processPosition = $('#process').offset().top;
	var portfolioPosition = $('#portfolio').offset().top;
	var publisherPosition = $('#publisher').offset().top;
	var faqPosition = $('#faq').offset().top;

	$('#test_section').waypoint('sticky');
	$('#process').waypoint(function() {$('li.process').toggleClass('selected')}, { offset: 50 });
	$('#process').waypoint(function() {$('li.process').toggleClass('selected')}, {offset: function() {return -($(this).height());}});
	$('#portfolio').waypoint(function() {$('li.portfolio').toggleClass('selected')}, { offset: 50 });
	$('#portfolio').waypoint(function() {$('li.portfolio').toggleClass('selected')}, {offset: function() {return -($(this).height());}});
	$('#publisher').waypoint(function() {$('li.publisher').toggleClass('selected')}, { offset: 50 });
	$('#publisher').waypoint(function() {$('li.publisher').toggleClass('selected')}, {offset: function() {return -($(this).height());}});
	$('#faq').waypoint(function() {$('li.faq').toggleClass('selected')}, { offset: 50 });
	$('#faq').waypoint(function() {$('li.faq').toggleClass('selected')}, {offset: function() {return -($(this).height());}});

	$('li.process').click(function(){$('body, html').animate({scrollTop:processPosition}, 1000);return false});
	$('li.portfolio').click(function(){$('body').animate({scrollTop:portfolioPosition}, 1000);return false});
	$('li.publisher').click(function(){$('body').animate({scrollTop:publisherPosition}, 1000);return false});
	$('li.faq').click(function(){$('body').animate({scrollTop:faqPosition}, 1000);return false});
	
});



$(window).resize(function() {
	nav_width()
	middle()
});



