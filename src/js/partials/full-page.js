// $('#full-page').fullpage({
//   sectionSelector: '.fullpage-section',
//   controlArrows: false,
//   anchors: ['intro', 'features', 'brands', 'reviews', 'contacts'],
//   menu: '#menu',
//   css3: true,
//   scrollingSpeed: 1000,
//   navigation: true
// });

// //Отключаем при малой ширине экрана
// function windowSize(){
//   if ($(window).width() < '1024'){
//     $.fn.fullpage.destroy('all');
//   }
// }
// $(window).on('load resize',windowSize);


var doFullpage = document.documentElement.clientWidth;
if (doFullpage > 1023) {
  $('#full-page').fullpage({
    sectionSelector: '.fullpage-section',
    controlArrows: false,
    anchors: ['intro', 'features', 'brands', 'reviews', 'contacts'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1000,
    navigation: true,
    afterLoad: function(link, index) {
      if (link == 'intro') {
        $('.intro .section-topic').animate({'opacity':'1'}, 1000);
        $('.intro .intro__logo').delay(500).animate({'opacity':'1'}, 1000);
        $('.intro .intro__description').delay(1000).animate({'opacity':'1'}, 1000);
        $('.intro .next-section-btn').delay(1500).animate({'opacity':'1'}, 1000);
      } else if (link == 'features') {
        $('.features .section-topic').animate({'opacity':'1'}, 1000);
        $('.features .features__main').delay(500).animate({'opacity':'1'}, 1000);
        $('.features .features__add-description').delay(1000).animate({'opacity':'1'}, 1000);
        $('.features .next-section-btn').delay(1500).animate({'opacity':'1'}, 1000);
      } else if (link == 'brands') {
        $('.brands .section-topic').animate({'opacity':'1'}, 1000);
        $('.brands .brands__wrapper').delay(500).animate({'opacity':'1'}, 1000);
        $('.brands .brands-toggle-desktop').delay(1000).animate({'opacity':'1'}, 1000);
        $('.brands .next-section-btn').delay(1500).animate({'opacity':'1'}, 1000);
      } else if (link == 'reviews') {
        $('.reviews .section-topic').animate({'opacity':'1'}, 1000);
        $('.reviews .reviews__block').delay(500).animate({'opacity':'1'}, 1000);
        $('.reviews .reviews__next-btn').delay(1000).animate({'opacity':'1'}, 1000);
        $('.reviews .next-section-btn').delay(1500).animate({'opacity':'1'}, 1000);
      } else if (link == 'contacts') {
        $('.contacts .section-topic').animate({'opacity':'1'}, 1000);
        $('.contacts .contacts__content').delay(500).animate({'opacity':'1'}, 1000);
        $('.contacts .page-footer').delay(1000).animate({'opacity':'1'}, 1000);
      }
    }
  });
}


