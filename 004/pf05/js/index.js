$(function(){

    $("nav .xi-search").on("click", function(){
        $("header .search").slideToggle();
    });   

    $(".main-slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,


    })
    $(".xi-angle-left-thin").on("click",function(){
        $(".main-slider").slick("slickPrev");
    });
    $(".xi-angle-right-thin").on("click",function(){
        $(".main-slider").slick("slickNext");
    });
    
    $(".item-slider").slick({
        arrows:false,
        dots:false,
        autoplay:false,
        slidesToShow: 3,
        autoplaySpeed:3000,
        pauseOnHover:false,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }


            }
        ]


    })

    $(".xi-angle-left").on("click",function(){
        $(".item-slider").slick("slickPrev");
    });
    $(".xi-angle-right").on("click",function(){
        $(".item-slider").slick("slickNext");
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

    $(".sns-slider").slick({
        arrows:false,
        dots:false,
        autoplay:true,
        slidesToShow: 5,
        autoplaySpeed:3000,
        pauseOnHover:false,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }


            }
        ]


    })

    $("#sns-area .xi-angle-left").on("click",function(){
        $(".sns-slider").slick("slickPrev");
    });
    $("#sns-area .xi-angle-right").on("click",function(){
        $(".sns-slider").slick("slickNext");
    });
    $(".exp-img-01").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        vertical:true,
        asNavFor: '.exp-slider-02',
        
    });
    $(".exp-slider-02").slick({
        arrows:false,
        slidesToShow: 1,
        //dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        //vertical:true,
        asNavFor: '.exp-img-01',

    });

    $("#item-exp-area .xi-angle-left-thin").on("click",function(){
        $(".exp-slider01").slick("slickPrev");
    });
    $("#item-exp-area .xi-angle-right-thin").on("click",function(){
        $(".exp-slider01").slick("slickNext");
    });


    $(".open").on("click", function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
        
    });

   

});