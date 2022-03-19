$(function(){
// --------------------------


// #top_banner //
$('#top_banner i').on('click',function(){
    $('#top_banner').slideUp();
});


// .mopen //
$('.mopen').on('click',function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
});

// 반응형 메뉴 //
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

// main_visual //
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



// AOS //
AOS.init();



// b_slider //


$('.b_slider').slick({
    arrows:false,
    asNavFor:'.b_slider',
    autoplay:true,

});



$('.brand_name li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
   //  console.log("apfdh");
   let idx=$(this).index();
   // console.log(idx);
   $('.b_slider').slick('slickGoTo', idx);
   
});


$('.b_slider').on('afterChange', function(e,s,c){
   $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
    
})




// pr_slider //


$('.pr_slider01').slick({
    arrows:false,
    slidesToShow:6,
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
   
      ]
});



// intro_slider

$('.intro_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    asNavFor: '.c04_slider',
    responsive: [
    {
        
        autoplaySpeed: 2000,
        breakpoint: 769,
        settings: {
        slidesToShow: 1,
        }
    },

    ]
});




 //   c04_slider //

  $('.c04_slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows:false,
      responsive: [
        {
          
          autoplaySpeed: 2000,
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
          }
        },
   
      ]
  });
  
 



   //content-slider txt slide
   var contentSlider01=$(".content_slider").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:0,
    //pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,
    speed:2000,
    centerMode: true,
    variableWidth: true,
    cssEase:"linear",
});  


// --------------------------
});