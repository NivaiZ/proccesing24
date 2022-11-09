const certificatesSlider = new Swiper('.certificates-block__content.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.certificates-block__button.swiper-button-next',
    prevEl: '.certificates-block__button.swiper-button-prev',
  },

});
export { certificatesSlider };
