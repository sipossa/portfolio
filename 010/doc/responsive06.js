$(function(){

$('.mopen').on('click',function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});

$('.depth01>li>a').on('click', function(){
    if ($(window).width() < 769 ) { //769px보다 작을때부터 반응형으로 작동해라

        $(this).next().slideToggle();
        $(this).parents().siblings().find('.depth02').slideUp();

    }
    
});

$(window).on('resize', function(){

    $('.depth02').removeAttr('style'); //반응형시 메뉴가 펼쳐져있어도 전체화면하면 다시 접히도록
});




})