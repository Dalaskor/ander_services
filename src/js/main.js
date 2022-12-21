import $ from "jquery";

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
});
