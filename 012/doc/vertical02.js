$(function(){
// -------------------------------------------------------
$('.main_visual').slick({
    // arrows:false,
    autoplay:true,
    dots:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',
    nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',
});

$('.main_visual figure').eq(1).addClass('on')
$('.main_visual').on('afterChange', function(e,s,c){
    $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
});

$('.mopen').on('click', function(){
    $('#header').toggleClass('on');
});

$('nav>ul>li>a').on('click', function(){
    if ($(window).width() <= 768) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.submenu').stop().slideUp();
    }
});

$(window).on('resize', function(){
    $('.submenu').removeAttr('style');
});







// -------------------------------------------------------
});