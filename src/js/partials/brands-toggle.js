$('.brands-toggle').click(function() {
  $('.hidden-brands').fadeIn('fast');
  $(this).fadeOut('fast');
});

var slideNow = 1;
var slideCount = $('#sliderWrapper').children().length - 2;

function slideSwitch() {
  if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#sliderWrapper').css({
      'transform': 'translateX(0)'
    });
    slideNow = 1;
  } else {
      translateWidth = -320 * slideNow;
      $('#sliderWrapper').css({
        'transform': 'translateX(' + translateWidth + 'px)'
      });
      slideNow++;
  }
}

$('.brands-toggle-desktop').click(function() {
  slideSwitch();
});

