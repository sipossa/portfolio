$(function(){
//-------------------------------------

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    Speed:400,
    pauseOnHover:false,
    dots:true,
    fade:true,
});

$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange',function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});


$('.model_slider').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1, //769px 보다 작을때 3개만 표시되도록
          }
        },
    ]
});

$('.model_slider .model').eq(4).addClass('on');
$('.model_slider').on('afterChange', function(e,s,c){ 
    //console.log(c) //c는 숫자가 표시됨, c=1,2,3,...
    $('.model_slider .model').eq(c+4).addClass('on').siblings().removeClass('on'); //c+숫자 숫자는 slidesToShow:에서 몇개가 표시되느냐에 따라 달라짐,
    
});

$('.xi-angle-left-thin').on('click', function(){
    $('.model_slider').slick('slickPrev')
});
$('.xi-angle-right-thin').on('click', function(){
    $('.model_slider').slick('slickNext')
});


$("#content03").YTPlayer({
    videoURL:'https://youtu.be/NhOmeL1Wg1M',
    containment:'#content03 .video_box',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
});

$('#content04 .keyword a').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
});


//-------------------------------------

$('#header .xi-bars').on('click', function(){
    $('#header .container nav').toggleClass('on');
});

$('.mmenu>li>a').on('click', function(){
    if ($(window).width() < 769 ) {

        $(this).next().slideToggle();
        $(this).parents().siblings().find('.sub01').slideUp();

    }
});

$(window).on('resize', function(){
    $('.sub01').removeAttr('style');
});

//-------------------------------------
})