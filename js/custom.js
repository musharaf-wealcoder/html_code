
// Stricky Header
$(window).scroll(function() {
    if ($(this).scrollTop() > 0){  
        $('#header-main').addClass("fixed");
    }
    else{
        $('#header-main').removeClass("fixed");
    }
});


// Accordation
$(document).ready(function() {
	$('.menu-btn').click(function() {
	$('.menu-btn').removeClass('active');
	$('.nav-bar').slideUp('normal');
	if($(this).next().is(':hidden') == true) {
	$(this).addClass('active');
	$(this).next().slideDown('normal');
	} 
	});
	
	$('.menu-btn').mouseover(function() {
	$(this).addClass('over');
	}).mouseout(function() {
	$(this).removeClass('over');										
	});
});


// Accordation
$(document).ready(function() {
	$('.accord-link').click(function() {
	$('.accord-link').removeClass('active');
	$('.accord-cont').slideUp('normal');
	if($(this).next().is(':hidden') == true) {
	$(this).addClass('active');
	$(this).next().slideDown('normal');
	} 
	});

	$('.accord-link').mouseover(function() {
	$(this).addClass('over');
	}).mouseout(function() {
	$(this).removeClass('over');										
	});
});


//Owl Slider Control
$(document).ready(function() {
	$('#owl-partners').owlCarousel({
		loop: false,
		items: 1,
		margin: 0,
		nav: false, 
		dots: false,
		autoplay: false,
		responsive:{
			0:{
				items: 1,
			},
			
			480:{
				items: 2,
				margin: 20,
			},
			
			768:{
				items: 3,
				margin: 30,
			},
			
			992:{
				items: 4,
				margin: 30,
			}
		}
	})
	
	$('#owl-testimonials').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: false, 
		dots: true,
		autoplay: false,
		autoWidth: false
	})
});



// Box Equalheight
equalheight = function(container){
	var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
	$(container).each(function() {
	
	$el = $(this);
	$($el).height('auto')
	topPostion = $el.position().top;
	
	if (currentRowStart != topPostion) {
	for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	rowDivs[currentDiv].height(currentTallest);
	}
	rowDivs.length = 0; // empty the array
	currentRowStart = topPostion;
	currentTallest = $el.height();
	rowDivs.push($el);
	} else {
	rowDivs.push($el);
	currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	}
	for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	rowDivs[currentDiv].height(currentTallest);
	}
	});
}

$(window).load(function() {
	equalheight('.eq');
});

$(window).resize(function(){
	equalheight('.eq');
});

$(window).load(function() {
	equalheight('.feature-list .article');
});

$(window).resize(function(){
	equalheight('.feature-list .article');
});

$(window).load(function() {
	equalheight('.why-choose-us2 .article .box');
});

$(window).resize(function(){
	equalheight('.why-choose-us2 .article .box');
});

$(window).load(function() {
	equalheight('.feature-services .article .box');
});

$(window).resize(function(){
	equalheight('.feature-services .article .box');
});


$(window).load(function() {
	equalheight('.reasons .article .box');
});

$(window).resize(function(){
	equalheight('.reasons .article .box');
});

