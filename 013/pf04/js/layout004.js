$(function(){
    //-------------메인 동영상--------
    $("#m01").YTPlayer({
        videoURL:'https://youtu.be/NL-0svpubJk', 
        containment:'#main_visual', 
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,  
        quality:'highres',
    });


    $('#section01 .sp').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4, 
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,               
              }
            },    
         ]            
    });

    //-------------
    $('#section01 i.xi-angle-left-thin').on('click', function(){
        $('.sp').slick('slickPrev');
    });
    $('#section01 i.xi-angle-right-thin').on('click', function(){
        $('.sp').slick('slickNext'); 
    });

    $('.insta').slick({
        arrows:false,
        vertical:true,        
        autoplay:false,
        dots:true,
        asNavFor: '.back',
    });
    $('.back').slick({
        arrows:false,
        vertical:false,
        autoplay:false,
        asNavFor: '.insta',
    });

    $('#mobile-menu').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
    });

    $('nav>ul>li>a').on('click',function(){
        if($('nav').hasClass('on')){
            $(this).next().slideToggle();
            $(this).parent().siblings().find('ul').slideUp();
        }

    });

    $(window).on('resize', function(){
        if($(window).width() > 768) {
            $('nav').removeClass('on');
            $('nav>ul>li>ul').removeAttr('style'); 
        } 
    });

 
}); 