$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Cyber Security.", "PC Hardware.", "Web Development."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

    // get position of skills section
    // jQuery syntax - skills section class in div tag index.html

    var skillsTopOffSet = $(".skillsSection").offset().top;
    //console.log(skillsTopOffSet);

    // jQuery Object
    $(window).scroll(function() {
    	// check to see if "skillsTopOffSet" is in view or not. If it is, call "easyPieChart"
    	console.log(window.pageYOffset);
    	if (window.pageYOffset > skillsTopOffSet - $(window).height() + 200) { // if scroll position > offset - scrolled passed it
			// move this code into pageYOffset
			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
    	}
    })
});


