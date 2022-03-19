$(function(){
//------------------------

$('.sh_best_slider').slick({
    arrows:false,
    autoplay:true,
    speed:3000,
    slidesToShow:4,

    responsive: [{

        breakpoint: 768,
        settings: {
          slidesToShow:3,
          infinite: true
        }
  
      }]
});

$('.arrow_btn .xi-angle-left').on('click', function(){
    $('.sh_best_slider').slick('slickPrev');
});
$('.arrow_btn .xi-angle-right').on('click', function(){
    $('.sh_best_slider').slick('slickNext');
});

$('.category li').on('click', function(){
    $(this).toggleClass('on').siblings().removeClass();
});

$('.page_number ol li').on('click', function(){
    $(this).toggleClass('on').siblings().removeClass();
});

//-------------------------
})