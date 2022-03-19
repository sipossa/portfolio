$(function(){
//-----------------------------------------------------
$('.mopen').on('click', function(){
    $('nav').toggleClass('on')
    $('.header .right').toggleClass('on')
})





$(window).on("scroll", function(){
    var sct=$(window).scrollTop(); //var let const
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');//삼항조건식
    // if ($(window).scrollTop() > 0) {
    //     $('.header').addClass('on')
    // } else {
    //     $('.header').removeClass('on')
    // } 위에랑 같은 거!
});

//-----------------------------------------------------

$('.main_slider').slick({ 
    arrows:false,
    fade:true,
    dots:true, 
    autoplay:true,
    pauseOnHover:false,
    PauseOnFouce:false,    
});

//-----------------------------------------------------



})