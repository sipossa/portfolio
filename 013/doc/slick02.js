$(function(){
//-----------------------

//메인슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,

});

//메인슬라이드 도형 아이콘
$('#main_visual span.left').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual span.right').on('click', function(){
    $('.main_slider').slick('slickNext');
});





//진행 버튼
$('#main_visual .list li').on('click', function(){
    var idx=$(this).index();
    console.log(idx);
    $('.main_slider').slick('slickGoTo',idx);
    $(this).addClass('on').siblings().removeClass('on');
});
var z=1;
$('#main_visual .list li').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    console.log(c);
    
    $('#main_visual .list li').eq(c).addClass('on').siblings().removeClass('on');
    $('#main_visual .photo').css({transform:'rotate('+120*c+'deg)'});
    z++;
});




//제품슬라이드
$('.pr_slider').slick({
    /*arrow:false가 자동으로 생성된 버튼 없애는거*/ 
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    dots:true,
});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});

//------------------------------------- 
})