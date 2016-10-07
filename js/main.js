$(document).ready(function(){
		
    $(window).bind('scroll', function(e){
			parallaxScroll();
		});
		
    $(window).on('touchmove', function(e){
			parallaxScroll();
		});
		
    function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
      console.log(scrolledY);
			$('.fixed-bg').css('top', ((scrolledY*-0.5)) + 'px');
		}
    
});