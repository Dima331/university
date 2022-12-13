import Swiper, { Navigation, Pagination, Autoplay, Breakpoints, Keyboard } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Breakpoints, Keyboard]);

const services = new Swiper('.services__slider', {
  navigation: {
    nextEl: '.services__next',
    prevEl: '.services__prev'
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
});

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

const management = new Swiper('.management__slider', {
  navigation: {
    nextEl: '.management__next',
    prevEl: '.management__prev'
  },
  slidesPerView: 1,
  spaceBetween: 0,
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


const btnTabs = document.querySelectorAll(".news-nav__btn");
const tabs = document.querySelectorAll(".news__list");
const linkAll = document.querySelector(".news-nav__all.link-all .button__line");

for (let btnTab of btnTabs) {
  btnTab.addEventListener("click", function (e) {
    let textBtn = "";
    let tabId = 1;

    btnTabs.forEach(function (btnTab, index) {
      btnTab.classList.remove("active");
      tabs[index].classList.add("visually-hidden");
    });

    if (!e.target.id) {
      textBtn = e.target.parentNode.textContent;
      e.target.parentNode.classList.add("active");
      tabId = e.target.parentNode.id;
    } else {
      textBtn = e.target.textContent;
      e.target.classList.add("active");
      tabId = e.target.id;
    }

    tabs.forEach(function (tab, index) {
      if (tabId[tabId.length - 1] === tab.id[tab.id.length - 1]) {
        tab.classList.remove("visually-hidden");
      }
    })

    if (textBtn && linkAll) {
      textBtn = textBtn.toLowerCase();
      linkAll.innerText = `Все ${textBtn}`;
    }

  });
}


const header = document.getElementById("header");
const logo = document.getElementById("logo");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  if (fromTop > 120 && window.innerWidth > 1024) {
    header.classList.add("header_hide");
  } else if (fromTop <= 120 && window.innerWidth > 1024) {
    header.classList.remove("header_hide");
  } else if (window.innerWidth < 1024) {
    header.classList.remove("header_hide");
  }

  if (window.innerWidth < 1024 && fromTop > 40) {
    logo.classList.add("logo_active");
    logo.classList.remove("logo_notactive");
  } else if (window.innerWidth < 1024 && fromTop < 40) {
    logo.classList.remove("logo_active");
    logo.classList.add("logo_notactive");
  }
});


(function () {
  const nav = document.querySelector(".header__nav");
  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");
  const search = document.querySelector(".header__search");
  const language = document.querySelector(".header__language");

  if (burger) {
    burger.addEventListener('click', function () {
      if (nav.classList.contains("header__nav_active")) {
        nav.classList.remove('header__nav_active');
        body.classList.remove("lock");
        burger.classList.remove("burger_active");

        search.classList.remove("search_hide");
        language.classList.remove("language_show");
        if (window.scrollY < 40) {
          logo.classList.remove("logo_active");
        }

      } else {
        nav.classList.add("header__nav_active");
        body.classList.add("lock");
        burger.classList.add("burger_active");
        logo.classList.add("logo_active");
        search.classList.add("search_hide");
        language.classList.add("language_show");
      }
    });
  }
})();


(function () {
  const navs = document.querySelectorAll(".nav__item");

  for (let nav of navs) {
    nav.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.parentNode.classList.toggle("nav__item_active");
    })
  };
})();

