$(function(){
    // 메인슬라이드
    $('.ms-slide01').slick({
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        pauseOnHover:false,
		pauseOnFocus:false,
        asNavFor: '.ms-slide02',
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
    });
    $('.ms-slide02').slick({
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        pauseOnHover:false,
		pauseOnFocus:false,
        asNavFor: '.ms-slide01',
        autoplay:true,
        autoplaySpeed:3000,
        speed:2500,
    });
    $('#main-slide .xi-angle-left-thin').on("click",function(){
        $('.ms-slide01, .ms-slide02').slick('slickPrev');
		
    });
    $('#main-slide .xi-angle-right-thin').on("click",function(){
        $('.ms-slide01, .ms-slide02').slick('slickNext');
        
    });
   
    

    // NEW PRODUCT
    $('.slider01').slick({
        arrows:false,
        
        fade:true,
    });
   
    $('#section05 .slider-text figure').click(function(){
        var idx=$(this).index();
        $('.slider01').slick('slickGoTo',idx,true)
       

    });
    $('.slider-text figure').eq(0).addClass('on')
    $('.slider-text figure').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('#section05 .container ul li').eq(0).addClass("on")
    $('#section05 .container ul li').click(function(){
        var idx=$(this).index();
        $('#section05 .cover>div').css({visibility:"hidden"});
        $('#section05 .cover>div').eq(idx).css({visibility:"visible"});
        $(this).addClass("on").siblings().removeClass("on");
    });

    // #FRITZ HANSEN 
    $('.sns-slider').slick({
        arrows:false,
        slidesToShow: 7,
        slidesToScroll:1,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px',
                autoplay:true,
                autoplaySpeed:2000,
              }
            },
        ]
    });

    $('#section07 .xi-angle-left-thin').on("click",function(){
        $('.sns-slider').slick("slickPrev");
    });
    
    $('#section07 .xi-angle-right-thin').on("click",function(){
        $('.sns-slider').slick("slickNext");
    });


    // menu

    $('.menu>div>ul>li').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        
       
    });
    
    // header
    $('header nav').click(function(){
        $('.menu').addClass('on')
    });

    $('.menu i').click(function(){
        $('.menu').removeClass('on')
    });


})
