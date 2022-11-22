import Swiper, { Navigation, Pagination, Autoplay, Breakpoints, Keyboard } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Breakpoints, Keyboard]);

const resources = new Swiper('.resources__slider', {
  navigation: {
    nextEl: '.resources__next',
    prevEl: '.resources__prev'
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

const partners = new Swiper('.partners__slider', {
  navigation: {
    nextEl: '.partners__next',
    prevEl: '.partners__prev'
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
      slidesPerView: 6,
      spaceBetween: 20
    }
  },
  loop: true,
});