$(function () {
  //-----------------------------------------------------
  let sc = $('.section');
  let sideBar = $('nav li');
  $('#main').fullpage({
    anchors: ['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
    afterLoad: function (origin, destination, direction) {
      let idx = destination.index;
      sc.eq(idx).addClass('on').siblings().removeClass('on');
      sideBar.eq(idx).addClass('on').siblings().removeClass('on');
      //인트로페이지 스크롤 느리게
      if (idx === 0) {
        $.fn.fullpage.setScrollingSpeed(2500);
      } else if (idx === 1) {
        $.fn.fullpage.setScrollingSpeed(900);
      }
    },
    scrollingSpeed: 1000,
    scrollBar: true,
    normalScrollElements: '.modalBox',
  });

  //모달창켜졌을때 풀페이지 스크롤제어
  $(document).on('click', '.turnOff', function () {
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
  });
  $(document).on('click', '.turnOn', function () {
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  });

  //포트폴리오 인덱스메뉴
  $('.cover_btn').on('click', function () {
    $('#cover').slideToggle();
    $('#cover').toggleClass('on');
    $('.cover_btn button').toggleClass('is-active');
  });
  let cloneMenu = $('nav>ul').clone();
  $('#cover').append(cloneMenu);
  // console.log(cloneMenu);
  $('#cover a').on('click', () => {
    $('#cover').slideUp();
    $('#cover').toggleClass('on');
    $('.cover_btn button').toggleClass('is-active');
  })
  $('#cover').on('scroll wheel touch', () => {
    return false;
  })


  // pf 슬라이드
  $('.pf-left').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  // pf 슬라이드 애니메이션
  $(".slick-slide").removeClass("on");
  $(".slick-current").addClass("on");

  //-----------------------------------------------------
});

const modalButton = document.querySelectorAll('.turnOff');
const images = ["styleguide01.jpg", "styleguide02.jpg", "styleguide03.jpg", "styleguide04.jpg"]
const body = document.querySelector('body');
let bg = document.getElementById('bg');
let sun = document.getElementById('sun');
let city = document.getElementById('city');
let sea = document.getElementById('sea');
let boat = document.getElementById('boat');
let text = document.getElementById('text');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  bg.style.top = -value * 0.1 + 'px';
  sun.style.left = value * 0.2 + 'px';
  sun.style.top = value * 0.6 + 'px';
  city.style.top = value * 0.4 + 'px';
  sea.style.top = value * 0.3 + 'px';
  text.style.top = value * 1 + 'px';
  boat.style.top = value * 0.1 + 'px';
})


// 모달창제어 
Array.from(modalButton).forEach(ele => ele.addEventListener("click", openModal));
body.addEventListener('click', (event) => {
  if (event.target.className == 'turnOn' && event.target.tagName == "IMG") {
    hideModal(event);
  }
});

function openModal(event) {
  const id = event.target.dataset.id;
  const modal = document.querySelector(`.modal[data-id="${id}"]`);
  let modalContent = modal;
  modalContent.innerHTML = `<div class="modalBox">
                             <img class="turnOn" src="./lib/base/${images[id]}" alt="">
                           </div>`
  modal.style.display = 'block';
}

function hideModal(event) {
  const modal = event.target.parentNode.parentNode;
  modal.style.display = 'none';
}
 