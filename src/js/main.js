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
  // Плавная прокрутка
  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 60,
        },
        800
      );
  });
  // Слайдер Hero
  const heroSwiper = new Swiper(".hero-swiper", {
    modules: [Pagination],
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 500,
    },
    pagination: {
      el: ".hero-swiper__pagination",
      type: "bullets",
      bulletClass: "hero-swiper__bullet",
      bulletActiveClass: "hero-swiper__bullet_active",
      clickable: true,
    },
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
      769: {
        pagination: {
          el: ".swiper-infro-pag",
        },
      },
    },
  });
  // Слайдер SoftWare
  const softwareSwiper = new Swiper(".software-swiper", {
    modules: [Pagination],
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: ".software-swiper__pagination",
      type: "bullets",
      bulletClass: "software-swiper__bullet",
      bulletActiveClass: "software-swiper__bullet_active",
      clickable: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        pagination: false,
      },
    },
  });
});
