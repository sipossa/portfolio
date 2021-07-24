$(function(){

    $(window).on("scroll", function(){
        var sct=$(window).scrollTop();
        let h1Img=$("h1 img");
        if(sct>200) {
            $("header").addClass("on");
            h1Img.attr({src:"./img/logo_wh2.png"});
        }else{
            $("header").removeClass("on");
            h1Img.attr({src:"./img/logo.png"});
        }
    });

    $(".slide-container").slick({  
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,

    });
    $("#main-slider .xi-angle-left").on("click", function(){
        $(".slide-container").slick("slickPrev");
    });
    $("#main-slider .xi-angle-right").on("click", function(){
        $(".slide-container").slick("slickNext");
    });

    $("#sub-slider .xi-angle-left").on("click", function(){
        $(".sub-slider-item").slick("slickPrev")
    });
    $("#sub-slider .xi-angle-right").on("click", function(){
        $(".sub-slider-item").slick("slickNext")
    });

    $(".sub-slider-item").slick({  
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:3,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
    
    
            }
        ]

    });
    
    $(".Mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });

    
    $(".menu-top>li>a").on("click", function(){
        if($("nav").hasClass("on")){
            $(this).parent().siblings().find("ul").stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on("resize", function(){
        $(".main-menu").removeAttr("style");
        $(".menu-bot").removeAttr("style");
    })
    
    
});
    