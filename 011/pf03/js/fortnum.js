$(function(){
//-----------------------------------------

$("#utc").YTPlayer({
    videoURL:'https://www.youtube.com/embed/qScWdIOjV3k',
    containment:'#main_visual',
    autoPlay: true,
    mute:true,
    useOnMobile: true,
    loop: true,
    startAt:0, 
    opacity:1,
    showControls:false,

}); 




//베스트제품슬라이드

$('.best_item01').slick({
    autoplay:true,
    autoplaySpeed:2200,
    arrows:false,
    fade:true,
    speed:500,
    pauseOnHover:false,
    asNavFor: '.best_sr'

});
$('.best_sr').slick({
    arrows:false,    
    pauseOnHover:false,
    asNavFor: '.best_item01',
    slidesToShow:1,
});

//버튼
$('#content02 .bt i.xi-angle-left-thin').on('click', function(){
    $('.best_sr').slick('slickPrev')
});
$('#content02 .bt i.xi-angle-right-thin').on('click', function(){
    $('.best_sr').slick('slickNext')
});





//티종류
$('.pr_slider01').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px"
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
});
AOS.init();

$('#content03 i.xi-angle-left-thin').on('click', function(){
    $('.pr_slider01').slick('slickPrev');
});
$('#content03 i.xi-angle-right-thin').on('click', function(){
    $('.pr_slider01').slick('slickNext');
});




//크리스마스에디션
$('.pr_slider02').slick({
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
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
});

$('#product04 i.xi-angle-left-thin').on('click', function(){
    $('.pr_slider02').slick('slickPrev');
});
$('#product04 i.xi-angle-right-thin').on('click', function(){
    $('.pr_slider02').slick('slickNext');
});






//클릭시 탑
    
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},900)
});

$(window).on('scroll', function(){
var sct=$(window).scrollTop();
 if(sct>2800) {
    $('#toTop').fadeIn()
}else{
    $('#toTop').fadeOut()
}
});
    



//반응형 컨트롤


$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});



$('.depth01>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
    
});



$(window).on('resize', function(){
    $('.depth02').removeAttr('style')
})


//-----------------------------------------
})