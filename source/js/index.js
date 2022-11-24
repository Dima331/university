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

const banners = new Swiper('.banners__slider', {
  navigation: {
    nextEl: '.banners__next',
    prevEl: '.banners__prev'
  },
  keyboard: {
    enabled: false,
    onlyInViewport: false,
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  loopedSlides: "3",
  loop: true,
});

document.addEventListener('mouseenter', event => {
  const el = event.target;
  if (el && el.matches && el.matches('.banners__slider')) {
    el.swiper.autoplay.stop();
    el.classList.add('swiper-paused');

    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
    if (activeNavItem) {
      activeNavItem.style.animationPlayState = "paused";
    }
  }
}, true);

document.addEventListener('mouseleave', event => {
  const el = event.target;
  if (el && el.matches && el.matches('.banners__slider')) {
    el.swiper.autoplay.start();
    el.classList.remove('swiper-paused');

    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

    activeNavItem.classList.remove('swiper-pagination-bullet-active');

    setTimeout(() => {
      activeNavItem.classList.add('swiper-pagination-bullet-active');
    }, 10);
  }
}, true);