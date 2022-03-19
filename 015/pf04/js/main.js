$(function () {
  //메인비주얼슬라이드
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  });

  $('.main_slider figure').eq(1).addClass('on');
  $('.main_slider').on('afterChange', function (e, s, c) {
    var idx = c + 1; 
    $('.main_slider figure').eq(c + 1).addClass('on').siblings().removeClass('on');
    $('.main_visual .control span').text(`${idx} / 3`);
  });

  $('i.xi-angle-left-thin').on('click', function () {
    $('.main_slider').slick('slickPrev');
  });
  $('i.xi-angle-right-thin').on('click', function () {
    $('.main_slider').slick('slickNext');
  });

  var stop = false;
  $('.main_visual .stop').on('click', function () {
    if (!stop) {
      $('.main_slider').slick('slickPause');
      $('.main_visual .stop').html(`<i class="xi-play"></i>`);
      stop = true;
    } else {
      $('.main_slider').slick('slickPlay');
      $('.main_visual .stop').html(`<i class="xi-pause"></i>`);
      stop = false;
    }
  });
 // 주요사업 슬라이드
	$('.pr_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		centerMode:false,
		dots:false,
		arrows:false, 
	}); 
  $('.pr_slider figure').eq(4).addClass('on');
  $('.pr_slider').on('afterChange', function(e,s,c){
      $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
  });

});
const header = document.querySelector('.header');
const logo = document.querySelector('.header .logo a figure');
const headerHeight = header.getBoundingClientRect().height;

//  스크롤시 헤더변경
window.addEventListener('scroll', () => {
  if (window.innerWidth>768 && window.scrollY > headerHeight) {
    header.classList.add('fixed');
  }else {
    header.classList.remove('fixed');
  }
});

const scrollTop = document.querySelector('.btn_top');
scrollTop.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
})

 