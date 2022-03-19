$(function(){
  // ----------------------------

$('#top_banner i').on('click',function(){
    $('#top_banner').slideUp();
});


$('.mopen').on('click',function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
});


$('.depth01>li>a').on('click',function(){
    if($(window).width() < 769) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
});

$(window).on('resize',function(){
    $('.depth02').removeAttr('style');
});




$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3500,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('#main_visual span.left').on('click',function(){
    $('.main_slider').slick('slickPrev');
});

$('#main_visual span.right').on('click',function(){
    $('.main_slider').slick('slickNext');
});


$('.main_slider figure').eq(1).addClass('on');
$('.main_slider').on('afterChange',function(e,s,c){
// console.log(c);
$('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
});


$('.pr_slider01').slick({
    arrows:false,
    slidesToShow:4,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnFocus:false,
    pauseOnHover:false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});




$('#cont01 i.xi-angle-left-thin').on('click',function(){
 $('.pr_slider01').slick('slickPrev')
});

$('#cont01 i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider01').slick('slickNext')
});

   $('.story_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    arrows:false,
    dots:true,
    vertical:true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            dots:true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots:true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});


    
 $('.story_slider figure').eq(1).addClass('on');
 $('.story_slider').on('afterChange',function(e,s,c){
    //console.log(c);
    $('.story_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
});



AOS.init();



$('#to_top').on('click',function(){
  $('html,body').animate({scrollTop:0},600);
});

$(window).on('scroll',function(){
  var sct=$(window).scrollTop();
  if(sct>3000) {$('#to_top').fadeIn()
}else{
  $('#to_top').fadeOut()
}
});


 // ----------------------------
});