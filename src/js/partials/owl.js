$('.owl-carousel').owlCarousel({
  loop:true, //Зацикливаем слайдер
  margin:40, //Отступ от элемента справа в 50px
  nav:true, //Отключение навигации
  dots: true,
  navText: ['', '<div class="reviews__next-btn" aria-hidden="true">Next review </div>'],
  autoplay:false, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:2000, //Время смены слайда
  items: 1
});
