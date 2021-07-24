$(function(){

    // 메인 슬라이드
    $(".main-slide-wrap").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
    })

    // 콘텐츠 텝메뉴 
    $("#main .notice-menu>ul>li").on("click", function(){
        var idx=$(this).index();
        $("#main .notice-contents ul").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    })



    $("#main .book-menu>ul>li").on("click", function(){
        var idx=$(this).index();
        $("#main .book-contents-wrap").eq(idx).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    })


    // 서브 슬라이드
    $(".sub-slider").slick({
        arrows:false,
        // dots:true,
        autoplay:true,
        autoplaySpeed:2000,
    })

    // 서브 슬라이드 버튼
    $(".xi-angle-left-thin").on("click", function(){
        $(".sub-slider").slick("slickPrev")
    })

    $(".xi-angle-right-thin").on("click", function(){
        $(".sub-slider").slick("slickNext")
    })


    // -------------------------- 반응형

    $(".m-btn").on("click", function(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    })

    $("nav>ul>li").on("click", function(){
        // var idx=$(this).index();
        // $(this).toggleClass("on").siblings().removeClass("on");
        $("nav>ul>li .sub-menu").stop().slideUp();
        $(this).find(".sub-menu").stop().slideDown();
    })

})