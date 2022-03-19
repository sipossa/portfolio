$(function(){
//------------------------------------------------------------------

    /*탑배너*/

    $('#top_banner .container i').on('click', function(){
        $(this).parent().parent().slideUp();
    });





   /*메인슬라이드*/

   $('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    dots:true,
});
    


    /*후기 곰돌이 슬라이드*/

    $('.iio').slick({
        arrows:false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2500,
        fade: true,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        cssEase: 'linear'
      });


    $('#content_02 .itm_btn i.xi-angle-left').on('click', function(){  
        $('.iio').slick('slickPrev')
    });
    
    $('#content_02 .itm_btn i.xi-angle-right').on('click', function(){
        $('.iio').slick('slickNext')
    });                                                                           //----->후기버튼





    /*기타카테고리*/
    
    $('news').on('click', function(){
        $(this).hide();
    })
    


    $('.mopen').on('click', function(){
        $('nav').toggleClass('on');
        $('.mopen .xi-bars').toggleClass('on');
    });

    

    $('nav>ul>li>a').on('click', function(){
        if($('nav').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_menu').slideUp();  
        }
    });

    $(window).on('resize', function(){
        $('.sub_menu').removeAttr('style');
        $('#top_banner').removeAttr('style');
    });

//------------------------------------------------------------------
});