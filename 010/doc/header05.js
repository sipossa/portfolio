$(function(){
    //-----------------------

    //스크롤할 때 헤드 변경//
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct); //console에다 값을 찍어라 (검사하기에서 콘솔 확인 가능)//
    if(sct>0) { //console 값이 0보다 클때 class 'on'붙여라 //
        $('#header').addClass('on');
    }else{
        $('#header').removeClass('on'); //아닐때는 class 'on' 없애라 //
    }
});


    //메인슬라이드
$('.main_slider').slick({
    arrows:false, //버튼이 없어짐//
    autoplay:true,
    pauseOnHover:false,
});


    //제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:3, //몇개씩 보이도록 하는지//
    dots:true, //밑에 점이 나오도록//


});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});

$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});



    //-----------------------------
})