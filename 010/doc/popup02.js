
//$(document).ready(function(){}); = $(function(){});랑 동일//

$(function(){
//--------------------------
//$('#popup01 span').on('click', function(){
    //$('#popup01').hide(); //클릭했을때 팝업창 없어짐//
//})//

$('#top_banner .container i').on('click', function(){
     //$(this).parent().parent().hide(); //버튼 눌리면 사라지게
     $(this).parent().parent().slideUp(); //위로 올라가게 함 (애니메이션처럼)
});


$('#top_banner02 i').on('click', function(){
    $('#top_banner02 .case').toggleClass('on');
    $(this).toggleClass('on');
});

$('#top_banner03 i').on('click', function(){
    $('#top_banner03 .case').slideToggle();
    $(this).toggleClass('on');
});

$('#top_banner04 i').on('click', function(){
    $('#top_banner04 .case').toggleClass('on');
    $(this).toggleClass('on');
});


//하단팝업창
$('#bottom_banner i').on('click', function(){
    $('#bottom_banner .case').slideToggle();
    $(this).toggleClass('on');
});



//화살표 누르면 top으로 가게 하는거
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},2000)
});

$(window).on('scroll', function(){
   var sct=$(window).scrollTop();
    if(sct>400) {
        $('#toTop').fadeIn()}
    else {
       $('#toTop').fadeOut()
    };
    $('#scroll_banner').css({top:300+sct}); //스크롤내리면 따라오는 배너

  //다른방법   sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();

})


//왼쪽 사이드메뉴바
$('#left_banner i').on('click', function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});

//오른쪽 사이드메뉴바
$('#right_banner i').on('click', function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});




//--------------------------
})