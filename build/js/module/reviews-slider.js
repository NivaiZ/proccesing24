const reviewsSlider = new Swiper('.reviews-block__content.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1140: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-block__button.swiper-button-next',
    prevEl: '.reviews-block__button.swiper-button-prev',
  },

});
export { reviewsSlider };
