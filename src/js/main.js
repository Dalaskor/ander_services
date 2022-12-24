import $ from "jquery";
import Swiper, { Navigation, Pagination } from "swiper";

$(document).ready(function () {
  // Бургер меню
  $(".header__burger").click(() => {
    $(".mobile-menu").toggleClass("open-menu");
    $(".header__burger").toggleClass("opened");
    $("html").toggleClass("scroll-lock");
  });
  $(".mobile-menu__link").click(() => {
    $(".mobile-menu").removeClass("open-menu");
    $(".header__burger").removeClass("opened");
    $("html").removeClass("scroll-lock");
  });
  $(".mobile-menu__btn").click(() => {
    $(".mobile-menu").removeClass("open-menu");
    $(".header__burger").removeClass("opened");
    $("html").removeClass("scroll-lock");
  });
  // Слайдер Hero
  const heroSwiper = new Swiper(".hero-swiper", {
    modules: [Pagination],
    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".hero-swiper__pagination",
      type: "bullets",
      bulletClass: "hero-swiper__bullet",
      bulletActiveClass: "hero-swiper__bullet_active",
      clickable: true,
    },
    // autoplay: {
    //   delay: 500,
    // },
    autoplay: true,
  });
  // Слайдер Infrastructure
  const infroSwiper = new Swiper(".swiper-infro", {
    modules: [Pagination, Navigation],
    direction: "horizontal",
    loop: true,
    pagination: {
      // el: ".swiper-infro-pag, .swiper-infro-pag-mob",
      type: "bullets",
      bulletClass: "swiper-infro__bullet",
      bulletActiveClass: "swiper-infro__bullet_active",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-infro-btn_next",
      prevEl: ".swiper-infro-btn_prev",
    },
    breakpoints: {
      320: {
        pagination: {
          el: ".swiper-infro-pag-mob",
        },
      },
      768: {
        pagination: {
          el: ".swiper-infro-pag",
        },
      },
    },
  });
});
