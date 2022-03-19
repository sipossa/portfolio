$(function(){
    // ---------------------------------

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pausOnFocus:false,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
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
                    



$('#content i.xi-arrow-left').on('click',function(){
    $('.pr_slider').slick('slickPrev')
});

$('#content i.xi-arrow-right').on('click',function(){
    $('.pr_slider').slick('slickNext')
});

$('#header i.xi-bars').on('click',function(){
    $('nav').slideToggle();
});

$(window).on('resize',function(){
    if($(window).window()>768) $('nav').removeAttr("style")
});























    // ---------------------------------
});