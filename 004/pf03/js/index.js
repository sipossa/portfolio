$(function(){

    
    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,


    });

    $(".xi-long-arrow-left").on("click",function(){
        $(".main-slider").slick("slickPrev");
    });
    $(".xi-long-arrow-right").on("click",function(){
        $(".main-slider").slick("slickNext");
    });
    
    $('.news-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,

        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }


            }
        ]


      });

    $(".xi-angle-left-thin").on("click",function(){
        $(".news-slider").slick("slickPrev");
    });
    $(".xi-angle-right-thin").on("click",function(){
        $(".news-slider").slick("slickNext");
    });   

    $(".tab-m01-menu li").on("click", tabM01)
    function tabM01(){
        var idx=$(this).index();
        $(".tab-m01-contents>div").hide();
        $(".tab-m01-contents>div").eq(idx).show();
        $(this).addClass("on").siblings().removeClass("on");
    }

    $(".tab-m01-contents>div").hide();
    $(".tab-m01-contents>div:first").show();


    $(".tab-m02-contents").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,


    });


    $(".xi-angle-left").on("click",function(){
        $(".tab-m02-contents").slick("slickPrev");
    });
    $(".xi-angle-right").on("click",function(){
        $(".tab-m02-contents").slick("slickNext");
    });   

    $(".link_btn a").on("click", linkShow);
    function linkShow(e){
//        e.preventDefault();
        $(".link").toggleClass("on");
        $(this).toggleClass("on");
        return false;
    }

    $(".mopen").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });


    // $(".top-menu>li>a").on("click", function(){
    //     if($("nav").hasClass("on")){
    //         $(this).parent().siblings().find("ul").removeClass("on")
    //         $(this).next().toggleClass("on");
    //     }
    // });
    // $("nav>ul>li").on("click", function(){
    //     if($("nav").hasClass("on")){
    //         $(".menu-bot").hide();
    //         $(this).find(".menu-bot").show();
    //     }
    // });

    // $("nav>ul>li").on("click", function(){
    //     if($("nav").hasClass("on")){
    //         //$("nav>ul>li .menu-wrap").toggleClass("on");
    //         $(".menu-wrap").hide();
    //         $(this).find(".menu-wrap").show();
    //     }
    // });

    // $("nav .top-menu>li>a").on("click", function(){
    //     if($("nav").hasClass("on")){
    //         $(this).siblings().find(".menu-wrap").removeClass("on")
    //         $(this).next().toggleClass("on");
    //     }
    // });

    // $(window).on("resize", function(){
    //     $(".menu-wrap").removeClass("on");
    // })



    $(window).on("resize", function(){
        $("nav").removeClass("on");
        $(".menu-wrap").removeAttr("style")
    });
});

