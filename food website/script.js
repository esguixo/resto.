var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 



//////////////////////////////////

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('nav');

menu.onclick = () =>
{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}


///////////////////////////////////////////////

let section = querySelector('section');
let navLinks =querySelector('nav ul li a'); 


window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}



////////////////////////////////////////////////////////

var swiper = new Swiper(".swiper-review", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});