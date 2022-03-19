$(function(){
// ---------------------------------------
$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});

$('.gnb>ul>li>a').on('click', function(){
    if($('nav').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth-2').slideUp()
    }
});

$(window).on('resize', function(){
    $('.depth-2').removeAttr('style');
});




// ---------------------------------------
});