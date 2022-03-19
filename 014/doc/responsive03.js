$(function(){
/*-------------------------------------------------------------------------------*/
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
});


$('.pr_slider').slick({                            /*<--섹션01 슬라이드임.class에 이름두개!*/
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    dots:true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },



      ]
      
});



$('#content i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});





/*밑에부터 반응형*/

$('#header i.xi-bars').on('click', function(){
    $('nav').slideToggle();
});

$(window).on('resize', function(){
    if($(window).width()>768) $('nav').removeAttr("style")
});




/*-------------------------------------------------------------------------------*/
});