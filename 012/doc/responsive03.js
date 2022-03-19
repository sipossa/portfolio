$(function(){
// --------------------------------------------------------
$('.main_slider').slick({
    arrows:false,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    dots:true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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

$('.xi-angle-left-thin').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});

$('.xi-angle-right-thin').on('click', function(){
    $('.pr_slider').slick('slickNext');
});

$('#header i.xi-bars').on('click', function(){
    $('nav').slideToggle();
});

$(window).on('resize', function(){
    if($(window).width()>768) $('nav').removeAttr("style");
});

// --------------------------------------------------------
});