$(function(){
  //-------------

  //메인슬라이드
  $('.main_slider').slick({
    arrows: false,
   //  dots: true,
    // autoplay:true,
    pauseOnHover:false,
  })

  $('.main_slider figure').eq(1).addClass('on');

  $('.main_slider').on('afterChange', function (e, s, c) {
   $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
  })

  
  $('#main_visual span.left').on('click', function(){
    $('.main_slider').slick('slickPrev');
  })
  
  $('#main_visual span.right').on('click', function(){
    $('.main_slider').slick('slickNext');
  })
  
//제품슬라이드
  $('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    // dots:true,
  });

  $('#models .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
  })
  $('#models .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
  })
  //----------
 

  //--------
})

const img = document.querySelector('.pr_slider img');

// function changeImg (e){

// }
// img.addEventListener('mouseover', ()=> {
//   img.setAttribute('src','./img/model_item01_1.jpg')
// })