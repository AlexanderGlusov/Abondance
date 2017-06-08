$('.brands-toggle').click(function() {
  $('.second-page').fadeIn('fast');
  $(this).fadeOut('fast');
});

$('.brands-toggle-desktop').click(function() {
  $('.first-page').hide();
  $('.second-page').fadeIn('fast');

});

