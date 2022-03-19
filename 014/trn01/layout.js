$(function(){
//-----------------------------------------------------------------------

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();        
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on')  /*삼향조건식(if처럼 풀어쓰는거 귀찮아서)*/
        /*if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }*/
    });





    $('.main_slider').slick({
        arrows:false,
        fade:true,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
    });






    /*반응형*/ /*<-반응형땜에 새로만든거*/
    $('.mopen').on('click', function(){
        $('nav').toggleClass('on');
        $('.header .right').toggleClass('on');
    });



//-----------------------------------------------------------------------
});