var fps = 10,
    drawLoop = false, 
    height = $(window).height();
    light = true;

jQuery(document).ready(function($) {

  draw = function() {
    if (light) {
      $('body').css('background','black');
      light = false;
    } else {
      $('body').css('background','white');
      light = true;
    }
  }

  reset = function(fps) {
    if (drawLoop) clearInterval(drawLoop);
    drawLoop = setInterval(draw,1000/fps);
    $('.fps').html((fps+"").substring(0,4));
  }

  $(window).on("mousewheel", function(e) {
    if (e.originalEvent.wheelDelta > 0) {
      fps *= 1.1;
    } else {
      fps *= 0.9;
    }
    reset(fps);
  })

  $(window).mousemove(function(e) {
    fps = parseInt((e.pageY/height) * 200)
  })

  $(window).click(function() {
    if (drawLoop) {
      clearInterval(drawLoop);
      drawLoop = false;
      $('.fps').html(0);
    } else {
      reset(fps);
    }
  })

  reset(fps);
});
