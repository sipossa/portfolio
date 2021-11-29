$(function(){

$('.mopen').on('click', function(){
    $('nav').toggleClass('on')
    $('.header .right').toggleClass('on')
})

//--------------------------------------------------------------
$(window).on('scroll', function(){
    var sct=$(window).scrollTop(); //var let const 
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on'); // 삼항조건식
    // if(sct > 0) {
    //     $('.header').addClass('on')
    // } else {
    //     $('.header').removeClass('on')  
    // }
});





$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});

//--------------------------------------------------------------
});

