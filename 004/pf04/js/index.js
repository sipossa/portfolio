$(function(){


    var mainSlider=$(".slide-container").slick({
        arrows:false,
        autoplay:false,
        //autoplaySpeed:2000,
        fade:true,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    $("#main-slider .xi-angle-left").on("click", function(){
        $(".slide-container").slick("slickPrev");
    });
    $("#main-slider .xi-angle-right").on("click", function(){
        $(".slide-container").slick("slickNext");
    });



    let slideDots=$(".slick-dots li");
    var slideItem=$(".slide-container figure");
    var Slider_img=$(".slide-container figure");

    slideItem.eq(0).addClass("on");
    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current).addClass("on").siblings().removeClass("on");
    });


    

    $(".exp-slider").slick({
        arrows:false,
        autoplay:false,
        //autoplaySpeed:2000,
        fade:true,
        pauseOnHover:false,
        pauseOnFocus:false,

    });
    $("#main-exp .xi-angle-left-thin").on("click", function(){
        $(".exp-slider").slick("slickPrev");
    });
    $("#main-exp .xi-angle-right-thin").on("click", function(){
        $(".exp-slider").slick("slickNext");
    });

    
    $(".tab_content").slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }


            }
        ]
    });


    $(".tab_content").eq(1).slick("slickPlay");
    //슬라이드 탭
    $(".tab-menu li").on("click", function(){
        var idx=$(this).index();
        //console.log(idx);
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_content").eq(idx).addClass("on").siblings().removeClass("on");
        $(".tab_content").eq(idx).slick("slickPlay").siblings().slick("slickPause")
    });

  
    $("#sub-slider-room .xi-angle-left-thin").on("click", function(){
        $(".tab_content").slick("slickPrev");
    });
    $("#sub-slider-room .xi-angle-right-thin").on("click", function(){
        $(".tab_content").slick("slickNext");
    });


    $(".package-slider").slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }


            }
        ]
        
    });
    $("#package-area .xi-angle-left-thin").on("click", function(){
        $(".package-slider").slick("slickPrev");
    });
    $("#package-area .xi-angle-right-thin").on("click", function(){
        $(".package-slider").slick("slickNext");
    });

    $(".convenient-slider").slick({
        arrows:false,
        autoplay:false,
        //autoplaySpeed:2000,
        fade:true,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $("#convenient-area .xi-angle-left-thin").on("click", function(){
        $(".convenient-slider").slick("slickPrev");
    });
    $("#convenient-area .xi-angle-right-thin").on("click", function(){
        $(".convenient-slider").slick("slickNext");
    });

    $(".menu-open").on("click", function(){
        $(this).toggleClass("on");
        $(".menu-bot").toggleClass("on");
    });

    $(".menu>li>a").on("click", function(){
        if($(".menu-bot").hasClass("on")){
            $(this).parent().siblings().find("ul").stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on("resize", function(){
        $(".s-menu").removeAttr("style");
    })



});
    