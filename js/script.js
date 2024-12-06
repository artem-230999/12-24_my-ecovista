document.addEventListener('DOMContentLoaded', function () {
	
  // hero-swiper 
	const swiperHero = new Swiper('.hero-swiper', {
    speed: 1000,
    spaceBetween: 100,
    autoplay: true,
    dots: true,
    navigation: {
      nextEl: '.hero-swiper .swiper-button-next',
      prevEl: '.hero-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true,
    },
  });

}, false);