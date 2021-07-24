$(function(){

    //헤더 스크롤 이벤트
    $(window).on("scroll", function(){
        var sct=$(window).scrollTop();
        sct>0 ? $("header").addClass("on") : $("header").removeClass("on");
    })

    // 메인 슬라이드
    var mSlider=$(".main-wrap").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        centerMode:true,
        centerPadding: '347px',
        slidesToShow:1,
        pauseOnHover:false,
    })
    
    var mSlideron=$(".main-wrap figure.slick-current");
    mSlideron.addClass("on");
    mSlider.on("afterChange", function(e,s,c){
        var mSlideron=$(".main-wrap figure.slick-current");
        mSlideron.addClass("on").siblings().removeClass("on");
    });

    $("#main a").on("click", function(){
        $(this).toggleClass("on");
    });

    $("#main .xi-play").on("click", function(){
        $(".main-wrap").slick("slickPlay")
    });

    $("#main .xi-pause").on("click", function(){    
        $(".main-wrap").slick("slickPause")
    });


    // 헬로 텝메뉴
    $(".hello-menu>li").on("click", function(){
        var idx=$(this).index();
        $(".hello-contents-item").eq(idx).show().siblings().hide();
        $(".hello-menu>li").eq(idx).addClass("on").siblings().removeClass("on")
    })


    // 픽 슬라이드
    $(".pick-wrap").slick({
        arrows:false,
        // dots:true,
        autoplay:true,
        // centerMode:true,
        // centerPadding: '120px',
        slidesToShow:3,
    })

    $(".pick-btn .xi-angle-left-thin").on("click", function(){
        $(".pick-wrap").slick("slickPrev")
    })

    $(".pick-btn .xi-angle-right-thin").on("click", function(){
        $(".pick-wrap").slick("slickNext")
    })


    // 서포터즈 슬라이드
    $(".supporters-box").slick({
        arrows:false,
        autoplay:true,
        slidesToShow:3,
        pauseOnHover:false,
    })

    $(".supporters-btn .xi-angle-left-thin").on("click", function(){
        $(".supporters-box").slick("slickPrev")
    })

    $(".supporters-btn .xi-angle-right-thin").on("click", function(){
        $(".supporters-box").slick("slickNext")
    });


})