$(function(){
//------------------------------------------------------------------
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        dots:true,
    });


    $('#top').on('click', function(){
        $('html, body').animate({scrollTop:0},900);
    });









//------------------------------------------------------------------
});