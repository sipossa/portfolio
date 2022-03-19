$(function(){
// ---------------------------------------------
$('.sns').on('click', function(){
    $('.header, .sns ul').toggleClass('active')
}) ;

$('.pr_slider').slick({
    arrows:false,
    dots:true,
    infinite:false,
});

if ($('.pr_slider').find('figure').length == 1) {
    $('#subpage .sc02 .pr_slider .slick-dots').hide();
};

$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});

$('.header .depth01>li>a').on('click', function(){
    if ($(window).width() < 768) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    };
});

$(window).on('resize', function(){
    $('.depth02').removeAttr('style');
});
// ---------------------------------------------
});