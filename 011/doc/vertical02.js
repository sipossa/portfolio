$(function(){
    $('.main_visual').slick({
        //arrows:false,
        autoplay:true,
        dots:true,
        nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',
        prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',
    });


    $('.main_visual figure').eq(1).addClass('on');
    $('.main_visual').on('afterChange', function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');

    });


    $('.mopen').on('click',function(){
        $('#header').toggleClass('on');
    });

    $('nav>ul>li>a').on('click', function(){
        if($('#header').hasClass('on')){
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.submenu').slideUp();
        }
   
    });

    $(window).on('resize', function(){
        if($(window).width() > 768 ){
            $('#header').removeClass('on');
            $('.submenu').removeAttr('style');
        }  //윈도우일때는 헤더에서 온을 떼버리고 원래스타일로
    });


});