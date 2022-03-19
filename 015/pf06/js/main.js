 const mopen = document.querySelector('.mopen');
 const header = document.querySelector('.header');
 const menu = header.querySelector('.gnb');
 const subMenu = header.querySelector('.gnb_2');
 const selected = document.querySelector('.on');

 window.addEventListener('scroll', () => {
   let sct = window.scrollY;
   sct > 0 ? header.classList.add('on') : header.classList.remove('on');
 })
 mopen.addEventListener('click', () => {
   menu.classList.toggle('on');
   mopen.classList.toggle('on');
 })

 menu.addEventListener('click', (e) => {
   e.target.parentNode.classList.toggle('on');
 });
 const scrollTop = document.querySelector('.to-top');
scrollTop.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
})


 const mainSlider = new Swiper('.main_slider', {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 100,
   autoplay: {
     delay: 10000,
   },
   pagination: {
     el: '.main_visual .page',
   },
   navigation: {
     nextEl: '.main_visual .btn_next',
     prevEl: '.main_visual .btn_prev',
   },
   autoplayDisableOnInteraction: false,

 });

 const conSlider = new Swiper('.service .ser_slider', {
   loop: true,
   breakpoints: {
     320: {
       slidesPerView: 1,
     },
     640: {
       slidesPerView: 3,
     },
   },
   spaceBetween: 30,
   autoplay: {
     delay: 5000,
   },
   pagination: {
     el: '.service .page',
   },
   centeredSlides: true,
   navigation: {
     nextEl: '.service .btn_next',
     prevEl: '.service .btn_prev',
   },
   autoplayDisableOnInteraction: false,
 });
 

 var ww = $(window).width();

 function initSwiper1() {
  let mySwiper = undefined;
   if (ww < 768 && mySwiper == undefined) {
     mySwiper = new Swiper(".cs01 , .cs02", {
       slidesPerView: 1,
       spaceBetween: 100,
       simulateTouch: true,
       centeredSlides: false,
       breakpoints: {
        420: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
       pagination: {
         el: '.cs01 .pagination , .cs02 .pagination',
         clickable: true,
       },
     });
   } else if (ww >= 768 && mySwiper != undefined) {
     mySwiper.destroy();
     mySwiper = undefined;
   }
 } 
 initSwiper1(); 

 $(window).on('resize', function () {
   ww = $(window).width();
   initSwiper1(); 
 });


 $(function () {
   //MAINCONTENT- TAB MENU
   $('.tab_main>li').on('click', function () {
     var $this = $(this);
     var idx = $(this).index();
     $this.addClass('on').siblings().removeClass('on');
     $('.tab_content>ul').eq(idx).addClass('on').siblings().removeClass('on');
   });

   // CONTENT- TAB MENU 
   $('.tab_menu>button').on('click', function () {
     var $this = $(this);
     var idx = $(this).index();
     $this.addClass('on').siblings().removeClass('on');
     $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
   });
   $('.icon_more').on('click', function () {
     $('.tab_menu .sns-icons ').toggleClass('on');
   });
 });