const partnersSlider = new Swiper('.partners-block__content.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 115,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.partners-block__item.swiper-pagination',
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
  }

});
export { partnersSlider };
