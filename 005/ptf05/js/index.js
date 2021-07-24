$(function(){

    //풀페이지
    $('#full-wrap').fullpage({
    //options here
    anchors:['s01', 's02', 's03', 's04', 's05'],
    autoScrolling:true,
    scrollHorizontally: true,
    css3:false,
    afterLoad: function(origin,destination){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $(".top li").eq(destination.index).addClass("on").siblings().removeClass("on");
    },

    });

    //메뉴
    $("header .gnb-bnt").on("click",function(){
        $("nav").toggleClass("on");
    });

    // 메뉴.on
    $(".main-menu-gnb-bnt").on("click",function(){
        $("nav").toggleClass("on");
    });


    // 메인 슬라이드
    $(".main-slider-wrap").slick({
        arrows:false,
        autoplay:true,
        fade:true,
        autoplaySpeed:4000,
        pauseOnHover:false,

    });

    // 오퍼스_1 슬라이드

    $(".offers_1_wrap").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:3,
        pauseOnHover:false,

    });

    $(".offers_1 .xi-angle-right-thin").on("click", function(){
        $(".offers_1_wrap").slick("slickNext")
    })


    // 비지니스 슬라이드
    $(".business1_wrap").slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,

    });
    


});