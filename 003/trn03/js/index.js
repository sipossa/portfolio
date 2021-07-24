$(function(){
    $('.main-slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        dots:true
    });
    var sct=$(window).scrollTop();
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        sct>0 ? $('header').addClass('on') : $('header').removeClass('on');
    });

    $('.mopen').on('click',function(){
        $(this).toggleClass('ox');
        $('header').toggleClass('ox')
    })
})