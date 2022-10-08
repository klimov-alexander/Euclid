let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".how__btn").forEach(function (e) {
    e.addEventListener("click", function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (e) {
        e.classList.remove("tab-content--active");
        document
          .querySelector(`[data-target='${tab}']`)
          .classList.add("tab-content--active");
      });
    });

    e.addEventListener("click", function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll(".how__btn").forEach(function (e) {
        e.classList.remove("how__btn--default");
        document
          .querySelector(`[data-path='${tabDefault}']`)
          .classList.add("how__btn--default");
      });
    });
  });
});


//bruger
let burgerBtn = document.querySelector(".burger");
let menuClose = document.querySelector(".menu-close");
let menuBurger = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  menuBurger.classList.add("burger-active");
});

menuClose.addEventListener("click", () => {
  menuBurger.classList.remove("burger-active");
});


let search = document.querySelector(".search");
let search__close = document.querySelector(".search__close");

search.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("search--active");
});

search__close.addEventListener("click", function () {
  search__close.classList.remove("search--active");
});