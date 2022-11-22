import Swiper, { Navigation, Pagination, Autoplay, Breakpoints, Keyboard } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Breakpoints, Keyboard]);

const resources = new Swiper('.slider__container', {
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev'
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    "@0.50": {
      slidesPerView: 4,
      spaceBetween: 20
    },
    "@0.75": {
      slidesPerView: 5,
      spaceBetween: 20
    },
    "@1.00": {
      slidesPerView: 6,
      spaceBetween: 20
    },
    "@1.50": {
      slidesPerView: 7,
      spaceBetween: 20
    }
  },
  loop: true,
});