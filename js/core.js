function nav_width() {
	var nav_width = $('#nav_section .inner').outerWidth();
	var nav_li = (nav_width / 4) - 1
	var nav_li_first = (nav_width / 4) - 2

	$('#nav_section .inner li').css({width: nav_li})
	$('#nav_section .inner li.process').css({width: nav_li_first})
}


function arrows_position() {

	var wrapper_height = $('#wrapper').outerHeight() 
	var nav_height = $('#nav_section').outerHeight() 
	var wrapper_final = wrapper_height - nav_height
	var half_wrapper = wrapper_final / 2
	var arrows_height = $('.arrow').outerHeight()
	var half_arrows = arrows_height / 2
	var arrows_top = half_wrapper - half_arrows

	$('.arrow').css({top: arrows_top})
	
}


$(window).load(function() {
	nav_width()
	   $("#compression_sec").hide()
	
	
	$(function(){
      $("#slides").slidesjs({
        callback: {
          loaded: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Loaded with slide #' + number);

            // Show start slide in log
            $('#slidesjs-log .slidesjs-slide-number').text(number);
          },
          start: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Start Animation on slide #' + number);
          },
          complete: function(number) {
            // Use your browser console to view log
            console.log('SlidesJS: Animation Complete. Current slide is #' + number);

            // Change slide number on animation complete
            $('#slidesjs-log .slidesjs-slide-number').text(number);
            if (number === 1) {
				$('#demoloaders_sec').removeClass('fade_out').show().addClass('active_sec fade_in')
				$("#compression_sec").removeClass('active_sec fade_in').addClass('fade_out')
				setTimeout(function() {
      				$("#compression_sec").hide()
				}, 500);

            }
            if (number === 2) {
      			$('#compression_sec').removeClass('fade_out').show().addClass('active_sec fade_in')

      			$('#demoloaders_sec').removeClass('active_sec fade_out').addClass('fade_in')
	      		setTimeout(function() {
	      				$("#demoloaders_sec").hide()
					}, 500);
      			}	
          }
        }
  
      });
    });
	arrows_position()

	var processPosition = $('#process').offset().top;
	var portfolioPosition = $('#portfolio').offset().top;
	var publisherPosition = $('#publisher').offset().top;
	var faqPosition = $('#faq').offset().top;

	$('#nav_section').waypoint('sticky');
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
});



