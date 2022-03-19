$(function(){
//-------------------------------------------------------------------

//메인슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
});

//메인슬라이드 버튼
$('#main_visual span.left').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual span.right').on('click', function(){
    $('.main_slider').slick('slickNext');
});

//list에 dots기능 넣기
$('#main_visual .list li').on('click', function(){
    var idx=$(this).index();
    console.log(idx);
    $('.main_slider').slick('slickGoTo', idx);
    $(this).addClass('on').siblings().removeClass('on');
});

//slick될때 list bg 이동
var z=1;
$('#main_visual .list li').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    console.log(c);

    $('#main_visual .list li').eq(c).addClass('on').siblings().removeClass('on');
    $('#main_visual .photo').css({transform:'rotate('+120*z+'deg)'})
    z++;
});

//제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    dots:true,
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed:3000,
});

$('.btn i.xi-angle-left-thin').on('click', function(){
    $('.pr_slider').slick('slickPrev')
})
$('.btn i.xi-angle-right-thin').on('click', function(){
    $('.pr_slider').slick('slickNext')
})
//-------------------------------------------------------------------
})