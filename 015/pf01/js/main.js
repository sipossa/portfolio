$(function () {
  // $("#bgvideo").YTPlayer({ 
  //   videoURL:'https://youtu.be/PeYBLpMHyCs',
  //   containment:'#visual',
  //   autoPlay:true,
  //   mute: true,
  //   startAt:0,
  //   opacity:1,
  //   showControls: false,

  // });
  $('.mopen').on('click', function(){
    $('.header').toggleClass('on');
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
  });
  
  $('.gnb>ul>li>a').on('click', function(e){
    if($('.gnb').hasClass('on')) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.submenu').slideUp();

    } 
  });
  
  $(window).on('resize', function(){
    if($(window).width() >768){
      $('.header').removeClass('on');
      $('.submenu').removeAttr('style');
    }
  })
  $('.main_slider').slick({
    arrows: false,
    //  dots: true,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
  });

  //collection slider
  $('.collection .pr_slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  });
  $('.collection .pr_slider').on('afterChange', function (e, s, c) {
    //index: 0--0 3--1 6--2
    // console.log(c) 
   
    if ( $(window).width()<768){
      $('.slider_line ul li').eq(c).addClass('on').siblings().removeClass('on');
    } else {
      $('.slider_line ul li').eq(c/3).addClass('on').siblings().removeClass('on');
    }

  });
  $('.slider_line ul li').on('click', function () {
    var idx = $(this).index();
    $('.collection .pr_slider').slick("slickGoTo", idx)
  });

  //youtube video preview
  $("#mv01").YTPlayer({
    videoURL: 'https://youtu.be/PeYBLpMHyCs',
    containment: 'self',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: false,
    optimizeDisplay: false,
  })
  $("#mv02").YTPlayer({
    videoURL: 'https://youtu.be/A0M718N40_Q',
    containment: 'self',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
  })

  $("#mv03").YTPlayer({
    videoURL: 'https://youtu.be/csR9tvWTXCs',
    containment: 'self',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
  });
  $("#mv04").YTPlayer({
    videoURL: 'https://youtu.be/A4hhGc-j6qc',
    containment: 'self',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
  });

 
});


const header = document.querySelector('.header');
const logo = document.querySelector('.header a');
const headerHeight = header.getBoundingClientRect().height;

// Header background on
window.addEventListener('scroll', () => {
  if (window.innerWidth>768 && window.scrollY > headerHeight) {
    header.setAttribute('style', 'border-bottom:1px solid #666; padding: 5px; background: #fff; color:#000; width:100%');
    logo.innerHTML = `<img class="logo" src="./img/logo.png" alt="">`
  } else if (window.innerWidth>768 && window.scrollY < headerHeight) {
    header.setAttribute('style', 'padding: 0;');
    logo.innerHTML = `<img class="logo" src="./img/logo_w.png" alt="">`
  }
})


// Click favorited icon
const body = document.querySelector('body');
body.addEventListener('click', (e) => {
  if (e.target.tagName == "I" && e.target.classList.contains('fa-heart')) {
    e.target.classList.toggle('fas');
  }
})

const scrollTop = document.querySelector('.btn_top');
scrollTop.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
})