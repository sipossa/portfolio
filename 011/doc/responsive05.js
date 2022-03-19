$(function(){
//-----------------------------------
$('.mopen').on('click', function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
});

$('.gnb>ul>li>a').on('click', function(){
    if($('nav').hasClass('on')){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }

});

$(window).on('resize', function(){
    $('.depth02').removeAttr('style');  //윈도우화면일때는 먹히지않게 
});
//-----------------------------------
})