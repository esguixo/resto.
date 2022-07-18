var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//////////////////////////////////

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('header nav');

menu.onclick = () =>
{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}


///////////////////////////////////////////////

var swiper = new Swiper(".swiper-review", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});
/////////////////////////////////////////////////////