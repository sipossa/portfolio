$(function () {
// --------------------------------------------------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    pauseOnHover:false,
    pauseOnFocus:false,
    fade:true,
});

$('#main_visual .btn span.left').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual .btn span.right').on('click', function(){
    $('.main_slider').slick('slickNext');
});


$('.tab_menu>li').on('click', function(){
    var idx= $(this).index();
    let fl= $('.tab_content .tab_slider').eq(idx).find('figure').length
    // console.log(idx);
    console.log(fl);
    $('.tab_content .tab_slider').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
    $('.tab_slider').slick('slickGoTo', 1);

    if (fl > 3) {
        $('.btn').show()
    } else if (fl < 4) {
        $('.btn').hide()
    };
});


$('.tab_slider').slick({
    infinite:false,
    arrows:false,
    slidesToShow:3,
    slidesToScroll:3,
    dots:true,
});



$('.btn .prev').on('click', function(){
    $('.tab_slider').slick('slickPrev');
});
$('.btn .next').on('click', function(){
    $('.tab_slider').slick('slickNext');
});

$('#mv01').YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=_qamvLEoIa8',
    containment:'self',
    autoplay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});





// --------------------------------------------------------
});