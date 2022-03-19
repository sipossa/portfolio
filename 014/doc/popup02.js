$(function(){
//---------------------------------------------
// $('#popup01 span').on('click', function(){
//     $('#popup01').hide();
// });

// $('.popup_close').on('click', function(){
//     $(this).parent().hide();
// });


//배너만들기//
$('#top_banner .container i').on('click', function(){
    $(this).parent().parent().slideUp();
});


$('#top_banner2 i').on('click', function(){
    $('#top_banner2 .case').toggleClass('on');
    $(this).toggleClass('on');
});


$('#top_banner3 i').on('click', function(){
    $('#top_banner3 .case').slideToggle(300);
    $(this).toggleClass('on');
});


$('#top_banner4 i').on('click', function(){
    $('#top_banner4 .case').toggleClass('on');
    $(this).toggleClass('on');
});


$('#bottom_banner i').on('click', function(){
    $('#bottom_banner .case').slideToggle(300);
    $(this).toggleClass('on');
});


$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},600);
});


$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    if(sct>400) {
        $('#toTop').fadeIn()
    }else{
        $('#toTop').fadeOut()
    }
    $('#scroll_banner').css({top:300+sct})
});
 //혹은 sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeout(); 이렇게 써도 됨.//


$('#left_banner i').on('click', function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});


$('#right_banner i').on('click', function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});







//---------------------------------------------
});