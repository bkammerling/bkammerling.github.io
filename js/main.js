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
			
			//while ($('header .white-bg').css('opacity') < 1) {
        $('header .white-bg').css('opacity', (scrolledY*0.001)+0.7);
      //}
			
			
			
		}
    
});