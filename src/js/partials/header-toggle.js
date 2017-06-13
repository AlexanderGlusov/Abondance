$('#header__toggle').click(function () {
  $('.header__nav-mob').slideToggle('fast');
});

/*$('.go_to').click( function(){
  $('.header__nav-mob').slideUp('fast');
});*/

$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
  if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    var pos = $(scroll_el).offset().top - 79; // опускаем позицию на высоту хедера
    $('html, body').animate({ scrollTop: pos }, 500); // анимируем скроолинг к элементу scroll_el
  }
  return false; // выключаем стандартное действие

});

var doMenuSlide = document.documentElement.clientWidth;
if (doMenuSlide < 768) {
  $('.go_to').click( function(){
    $('.header__nav-mob').slideUp('fast');
  });
}