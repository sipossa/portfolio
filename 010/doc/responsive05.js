$(function(){


    $('.mopen').on('click',function(){

        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });

    $('.gnb>ul>li>a').on('click',function(){
        if($('nav').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
        }
        
    });

    $(window).on('resize', function(){
        $('.sub').removeAttr('style')
    });



})