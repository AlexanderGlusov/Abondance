$('#full-page').fullpage({
  sectionSelector: '.fullpage-section',
  controlArrows: false,
  anchors: ['intro', 'features', 'brands', 'reviews', 'contacts'],
  menu: '#menu',
  css3: true,
  scrollingSpeed: 500
});

//Отключаем при малой ширине экрана
function windowSize(){
  if ($(window).width() <= '1024'){
    $.fn.fullpage.destroy('all');
  }
}
$(window).on('load resize',windowSize);
