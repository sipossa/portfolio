$(function(){

    // header
    $(".search-form").on("click", function(){
        $(".top-serch").slideToggle();
    });

    $('.language').on('click',function(){
        $(this).toggleClass('on')
    });
    $('nav ul .gnb-submenu dd').eq(0).addClass('on')
    
    $('nav ul .gnb-submenu dd').hover(function(){
        $(this).addClass('on').siblings().removeClass('on')
    })

    // 메인 슬라이드
    $(".bg-slide").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        vertical:true,
        speed:1000,
    });

    // 일정
    $('#section02>div .calendar-l>div').eq(0).addClass('on')
   
    $('#section02>div .calendar-l>div').hover(function(){
        $(this).addClass('on').siblings().removeClass('on')
    })
    $(".today-slide").slick({
        arrows:false,
        
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
		pauseOnFocus:false,
      
    })

    // 연구성과
    $(".research-text").slick({
        autoplay:true,
        autoplaySpeed:4000,
        asNavFor: '.research-img',
        
        arrows:false,
        fade: true,
        pauseOnHover:false,
		pauseOnFocus:false,  
        draggable: false,
        dots:true,  
    });
    $(".research-img").slick({
        autoplay:true,
        autoplaySpeed:4000,
        asNavFor: '.research-text',
        slidesToShow: 1,
        dots:false,
        arrows:false,
        pauseOnHover:false,
		pauseOnFocus:false,
        draggable: false,
      
    });

    $('.research-img figure').eq(2).addClass('on')
    $('.research-img').on("afterChange", function(slick,event,currnetSlide){
        $('.research-img figure').eq(currnetSlide+2).addClass("on").siblings().removeClass("on");

        
      
    });
    
    // 배너
    $(".banner-slide").slick({
        arrows:false,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
		pauseOnFocus:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
               }
            },
        ]
    });
    $('#section07>div .txt .xi-angle-left').on("click",function(){
        $('.banner-slide').slick('slickPrev');
	});
    $('#section07>div .txt .xi-angle-right').on("click",function(){
        $('.banner-slide').slick('slickNext');
    });

    // 위로가기 버튼
    $(".xi-arrow-top").on("click", function(){
        $("html,body").animate({scrollTop:0},1000);
    });

    // 퀵메뉴
    $('#quick>div .quick-menu>li').eq(0).addClass("on")
    $('#quick>div .quick-menu>li').click(function(){
        var idx=$(this).index();
        $('#quick>div .quick-smenu>dl').css({visibility:"hidden"});
        $('#quick>div .quick-smenu>dl').eq(idx).css({visibility:"visible"});
        $(this).addClass("on").siblings().removeClass("on");
    });
    $('#quick>div .txt').click(function(){
        $(this).parent().parent().toggleClass('on');
        $(this).toggleClass('on');
    });

    // 모바일 버튼
    $('.mopen').on("click", function(){
        $(this).toggleClass("on");
        $('.gnb-menu').toggleClass("on");
    });

    // 모바일 메뉴
    $(".gnb-menu>li>a").on("click", function(){
        if($('nav .gnb-menu').hasClass("on")){
            $(this).toggleClass('on').parent().siblings().children().removeClass('on');
            $(this).siblings().slideToggle();
            $(this).parent().siblings().find("div").slideUp();
        }
    });
    $('.gnb-submenu dd>a').on("click", function(){
        if($('nav .gnb-menu').hasClass("on")){
            $(this).siblings().slideToggle();
            $(this).parent().siblings().find('ul').slideUp();
        }
    });
})