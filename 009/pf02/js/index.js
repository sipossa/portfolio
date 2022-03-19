$(function(){
    // ------------------------
$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    arrows:false,
    dots:true,
});

$('#main_visual .main_btn i.xi-angle-left-thin').on('click',function(){
    $('.main_slider').slick('slickPrev')
});

$('#main_visual .main_btn i.xi-angle-right-thin').on('click',function(){
    $('.main_slider').slick('slickNext')
});


$('.main_slider figure').eq(1).addClass('on');
$('.main_slider').on('afterChange',function(e,s,c){
// console.log(c);
$('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
});



$('#mv01').YTPlayer({
    videoURL:'https://youtu.be/85sgaiWAnFo',
    containment:'self',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});








    
    //-------------------------
});