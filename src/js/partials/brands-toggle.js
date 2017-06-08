$('.brands-toggle').click(function() {
  $('.hidden-element').fadeIn('fast');
  $(this).fadeOut('fast');
});


$('.brands-toggle-desktop').click(function() {
  $('.first-page').hide();
  $('.hidden-element').fadeIn('fast');
})