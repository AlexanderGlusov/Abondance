$(document).ready(function(){$("#header__toggle").click(function(){$("#header__nav").slideToggle("fast")}),$(".owl-carousel").owlCarousel({loop:!0,margin:40,nav:!0,dots:!0,navText:["",'<div class="reviews__next-btn" aria-hidden="true">Next review </div>'],autoplay:!1,smartSpeed:1e3,autoplayTimeout:2e3,items:1})});