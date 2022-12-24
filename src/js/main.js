import $ from "jquery";
import Swiper, { Pagination } from "swiper";

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
  // Hero Слайдер
  const heroSwiper = new Swiper(".hero-swiper", {
    modules: [Pagination],
    // slidesPerView: 1,
    direction: "horizontal",
    loop: false,
    // wrapperClass: "hero-swiper__wrapper",
    // slideClass: "hero-swiper__slide",
    pagination: {
      el: ".hero-swiper__pagination",
      type: "bullets",
      bulletClass: "hero-swiper__bullet",
      bulletActiveClass: "hero-swiper__bullet_active",
      clickable: true,
    },
  });
});
