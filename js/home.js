
function middle() {
	var windowHeight = window.innerHeight

	var halfHeight = windowHeight / 2
	var blocker = $('#wrapper').outerHeight()
	var halfBlocker = blocker / 2
	var margin_top = halfHeight - halfBlocker 

	if (windowHeight >= blocker) {
		$('#wrapper').css({marginTop: margin_top });
	} else {
		
	}

	

}


$(window).load(function() {
	middle()

	
	

	
	
});



$(window).resize(function() {
	
	middle()
});



