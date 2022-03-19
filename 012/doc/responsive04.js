$(function(){
// -----------------------------------------------------------------------
$('.main_slider').slick({
    arrows:false,
});

$('.gnb>ul>li>a').on('click', function(e){
    // if($(window).width() < 769) {
    if($('.gnb').hasClass('on')) {
        e.preventDefault();     // 링크가 걸려있을 때 작동 못하게
        // $('.submenu').hide();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.submenu').slideUp();
    }
});

$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $('.sns').fadeToggle();
});

$(window).on('resize', function(){
    $('.submenu').removeAttr('style')
});





// -----------------------------------------------------------------------
});