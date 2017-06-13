$('.brands-toggle').click(function() {
  $('.hidden-brands').fadeIn('fast');
  $(this).fadeOut('fast');
});

$('.brands-toggle-desktop').click(function() {
  $('.first-page').hide();
  $('.second-page').fadeIn('fast');

});

