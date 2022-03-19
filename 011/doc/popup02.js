$(function(){
//--------------------------------------------------
// $('#popup01 span').on('click', function(){
//     $('#popup01').hide();
// })

//$('.popup_close').on('click', function(){
//     $(this).parent().hide();
// });
$('#top_banner .container i').on('click', function(){
    //$(this).parent().hide() 클릭시 부모를 숨김
    $(this).parent().parent().slideUp(); //천천히 슬라이드식으로 닫힘
});
$('#top_banner2 i').on('click', function(){
   $('#top_banner2 .case').toggleClass('on');
   $(this).toggleClass('on');
});
$('#top_banner3 i').on('click', function(){
    $('#top_banner3 .case').slideToggle(); //slideToggle(1000)>1초동안닫힘, 숫자 400이기본
    $(this).toggleClass('on');
});
$('#top_banner4 i').on('click', function(){
    $('#top_banner4 .case').slideToggle(); 
    $(this).toggleClass('on');
});

$('#bottom_banner i').on('click', function(){
    $('#bottom_banner .case').slideToggle(); 
    $(this).toggleClass('on');
});

$('#toTop').on('click', function(){
     $('html, body').animate({scrollTop:0},600) //누르면 밑에서 위로,600은 시간(2초동안 올라감)
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
     if(sct>400) {
        $('#toTop').fadeIn()
    }else{
        $('#toTop').fadeOut()
    }

    // sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();같은 방법이지만 위에것을 추천
    $('#scroll_banner').css({top:300+sct});


$('#left_banner i').on('click', function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});

$('#right_banner i').on('click', function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});

 
 })





//--------------------------------------------------

});