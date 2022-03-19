$(function(){
//-------------------------------------------------------

$('.main_slider').slick({
    arrows:false,
});






$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    dots:true, //제품밑슬라이드도트
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3, //아이패드사이즈일때 슬라이드 3개보이기
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1, //폰사이즈일때 슬라이드 1개보이기
            }
          },
      ]

        
    
});





$('#content i.xi-arrow-left').on('click',function(){
    $('.pr_slider').slick('slickPrev')
});
$('#content i.xi-arrow-right').on('click',function(){
    $('.pr_slider').slick('slickNext')
});



//폰 메뉴

$('#header i.xi-bars').on('click',function(){
    $('nav').slideToggle();
});

$(window).on('resize', function(){
    if($(window).width()>768)
    $('nav').removeAttr('style')
})
//-------------------------------------------------------
})