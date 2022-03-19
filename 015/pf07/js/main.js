
 //반응형 mopen
 $(function(){
  $('.gnb .depth01>li').on('click', function(){
      if($('.gnb').hasClass('on')) {
          $(this).addClass('on').siblings().removeClass('on');
          $(this).siblings().find('.depth03').stop().slideUp(); 
      }

  });
  $('.depth02>li').on('click', function(){
      if($('.gnb').hasClass('on')) {
          $('.depth03').stop().slideUp();
          $(this).find('.depth03').stop().slideToggle();
      }
  })
  $(window).on('resize', function(){
      $('.case').removeAttr('style');
      $('.depth03').removeAttr('style');
      $('.gnb').removeClass('on');
  });

  $('.mopen').on('click', function(){
      $(this).toggleClass('on');
      $('.gnb').toggleClass('on');
  })
})

// MAIN VISUAL -----------------------------------------------
const SLIDEBAR = document.querySelector('.slide_bottom .bar');
const mainSlider = new Swiper('.main_visual .main_slider', {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: '.main_visual .page',
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: '.main_visual .btn_next',
    prevEl: '.main_visual .btn_prev',
  },
  autoplayDisableOnInteraction: false,

});

SLIDEBAR.classList.add('on');
mainSlider.on('slideChangeTransitionEnd', ()=>{
    SLIDEBAR.classList.add('on')
});
mainSlider.on('slideChangeTransitionStart', ()=>{
    SLIDEBAR.classList.remove('on')
});


// 달력
$(function () {
  $('#datepicker').datepicker({
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  });
});


// 

const subSlider = new Swiper('.news .pr_slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: '.news .page',
    clickable: true,
    // type: "fraction",
  },
  navigation: {
    nextEl: '.news .btn_next',
    prevEl: '.news .btn_prev',
  },
  autoplayDisableOnInteraction: false,
});

//MAINCONTENT- TAB MENU
// $(function () {
//   $('.tab_menu>button').on('click', function () {
//     var $this = $(this);
//     var idx = $(this).index();
//     $this.addClass('on').siblings().removeClass('on');
//     $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
//   });
// });

const tabBtn =document.querySelector('.tab_menu');
tabBtn.addEventListener('click', (e)=>{ 
  const id = e.target.dataset.id;
  const tabContent = document.querySelector(`.tab_content div[data-id="${id}"]`)
  const parentContent = tabContent.parentNode.childNodes;
  const parentMenu = e.target.parentNode.childNodes;
  console.log(parentMenu);
  parentMenu[1].classList.remove('on');
  parentMenu[3].classList.remove('on');
  e.target.classList.add('on');
  parentContent[1].classList.remove('on');
  parentContent[3].classList.remove('on');
  tabContent.classList.add('on');
 
})



// const tabBoard = document.querySelector('.tab_board-wrap');
// const tabLi = tabBoard.querySelector('ul');
// const tabContent = tabBoard.querySelector('.tab_content');
// tabLi.addEventListener('click', handleClick);
// function handleClick(event) {
//   const li = event.target.parentNode;
//   for (let i = 0; i < li.parentNode.length; i++) {
//     li.parentNode.classList.add('on');
// } 
 
 

// menu.addEventListener('click', (e) => {
//   e.target.parentNode.classList.toggle('on');
// })