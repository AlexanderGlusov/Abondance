$('.brands-toggle').click(function() {
  $('.hidden-brands').fadeIn('fast');
  $(this).fadeOut('fast');
});

$('.brands-toggle-desktop').click(function() {
  $('.first-page').hide();
  $('.second-page').fadeIn('fast');
});

$(document).ready(function() {
  var rightUIEl = $('.slider-next');

  rightUIEl.click(function() {
  });

  var elementsList = $('.brands__wrapper');

  var pixelsOffset = 315;
  var currentLeftValue = 0;
  var elementsCount = 7;
  var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
  var maximumOffset = 0;

  rightUIEl.click(function() {
    if (currentLeftValue !== minimumOffset) {
      currentLeftValue -= 315;
      elementsList.animate({ left : currentLeftValue + "px"}, 300);
    } else {
      elementsList.animate({ left : 0 + "px"}, 300);
      currentLeftValue -= 315;
    }
  });


});