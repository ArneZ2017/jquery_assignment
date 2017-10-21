$(document).ready(function () {

	console.log("Ready");

	$(".readmore").click(function() {

		console.log("Readmore clicked");

		event.preventDefault();

		$("#show-this-on-click").slideDown(function() {
		
		});

		$(".readless").show(function() {
		
		});

		$(".readmore").hide(function() {

		});

	});

	$(".readless").click(function() {

		console.log("readless clicked");
		event.preventDefault();

		$("#show-this-on-click").slideUp(function() {
			
		});

		$(".readless").hide(function() {
			
		});

		$(".readmore").show(function() {

		});

	});

	$(".learnmore").click(function() {

		console.log("learnmore clicked");
		event.preventDefault();
	
		$("#learnmoretext").slideDown(function() {

		});

		$(".learnmore").hide(function() {

		});

	});

})