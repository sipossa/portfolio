$(function(){

    let MainSlider=$(".slider-container").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,

    });

    let slideDots=$(".slide-option li");
    let slideItem=$(".visual-slider figure");

    slideDots.eq(0).addClass("on");

    MainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
    });

    let slidePrev=$("#main-slider i.xi-angle-left-thin");
    let slideNext=$("#main-slider i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        MainSlider.slick("slickPrev")
    });
    slideNext.on("click", function(){
        MainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        let idx=$(this).index();
        MainSlider.slick("slickGoTo", idx)
    });


    $(".slide-container02").slick({
        arrows:false,
        //dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        vertical:true,
        verticalSwiping:true,
        responsive:[

            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical:false,
                    verticalSwiping:false,
                }
    
    
            }
        ]

    });

    let contentSlider01=$('.menu-choice').slick({

        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        

      });
    
      let contentItem=$(".menu-choice figure");
      contentItem.eq(4).addClass("on")
      contentSlider01.on("afterChange", function(event,slick,current){
          contentItem.eq(current+4).addClass("on").siblings().removeClass("on");
      });

    $("#menu-ch .xi-angle-left").on("click", function(){
        contentSlider01.slick("slickPrev")
    });
    $("#menu-ch .xi-angle-right").on("click", function(){
        contentSlider01.slick("slickNext")
    });


    $("#tea-exp figure").on("click", function(){
        $(".slide-container02").slick("slickNext");
    });

    $(".tab-menu li").on("click", tabM01)
    function tabM01(){
        var idx=$(this).index();
        $(".tab-itme01").hide();
        $(".tab-itme01").eq(idx).show();
        $(this).addClass("on").siblings().removeClass("on");
    }

    
    $(".tab-itme01").hide();
    $(".tab-itme01:first").show();

    $(".sns-slider").slick({
        arrows:false,
        autoplaySpeed:2000,
       pauseOnHover:false,
       pauseOnFocus:false,
       slidesToShow:8,
       responsive:[

        {
            breakpoint:768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }


        }
    ]
    });

    $(".sns-slider").on("mousemove",moMove);
    function moMove(e){

        if(e.pageX < $(this).width()/2){
            $(".sns-slider").slick("slickPrev");
        }else{
            $(".sns-slider").slick("slickNext");
        }


    }

    $(".open").on("click", function(){
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
        $(".menu-b").removeAttr("style");
    })
    
});
    