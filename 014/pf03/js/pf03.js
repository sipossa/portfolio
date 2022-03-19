$(function(){
//------------------------------------------------------------------
    $('.popup_close').on('click', function(){
        $(this).parent().hide();
    });




    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        fade:true,
        dots:true,
    });
    
    $('#main_visual .btn i.xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev')
    });
    
    $('#main_visual .btn i.xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext')
    });
    




    AOS.init();





    $('#customer_02 .container').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
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

    $('#customer_02 .btn i.xi-arrow-left').on('click', function(){
        $('#customer_02 .container').slick('slickPrev')
    })
    
    $('#customer_02 .btn i.xi-arrow-right').on('click', function(){
        $('#customer_02 .container').slick('slickNext')
    })






    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/BzfRc45IHbc',
        containment:'self',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    }); 





    $('.sns').on('change', function(){              
        var link=$(this).val(); 
        if(link) {window.open(link)}
    });    








    $('.mopen').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
        $('.mopen .xi-garden').toggleClass('on');
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
        $('#top').removeAttr('style');
    });









    $('#top').on('click', function(){
        $('html, body').animate({scrollTop:0},800);
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        var wd=$(window).width();
        if (wd>768) {
            if(sct>400) {
                $('#top').fadeIn()
            }else{
                $('#top').fadeOut()
            }
        }

    });
    
//------------------------------------------------------------------
});