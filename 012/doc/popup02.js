$(function(){


//---------------------상단배너------------------------
$('#top_banner .container i').on('click', function(){
    $(this).parent().parent().slideUp();
});

$('#top_banner2 i').on('click', function(){
    $('#top_banner2 .case').toggleClass('on')
    $(this).toggleClass('on')
});

$('#top_banner3 i').on('click', function(){
    $('#top_banner3 .case').slideToggle();
    $(this).toggleClass('on')
});

$('#top_banner4 i').on('click', function(){
    $('#top_banner4 .case').toggleClass('on');
    $(this).toggleClass('on')
});
//-----------------------------------------------------


//---------------------하단배너------------------------
$('#bottom_banner i').on('click', function(){
    $('#bottom_banner .case').slideToggle();
    $(this).toggleClass('on')
});
//-----------------------------------------------------



//------------탑버튼누르면 페이지상단으로---------------
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},200);
});
//-----------------------------------------------------



//----------------탑버튼 페이드인,아웃------------------
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    // console.log(sct)
    
    // if(sct>400) {
    //     $('#toTop').fadeIn()
    // }else{
    //     $('#toTop').fadeOut()
    // }

    sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
});
//-----------------------------------------------------



//----------------따라오는 메뉴(fixed X)---------------
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    
    $('#scroll_banner').css({top:300+sct})
});
//-----------------------------------------------------






//---------------------좌측 배너-----------------------
$('#left_banner i').on('click', function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});
//-----------------------------------------------------



//---------------------우측 배너-----------------------
$('#right_banner i').on('click', function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});
//-----------------------------------------------------










});