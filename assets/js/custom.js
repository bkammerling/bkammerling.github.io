
$(document).ready(function(){


  $('.video-selector i').click(function() {
    var src = $(this).data('video');
    $('video').attr('src', src);
  })


});
