$(document).ready(function(){
    //제이쿼리 시작
    $(".main-slider").slick({
        dots:true,
        autoplay:true,
        arrows:true,
        prevArrow:"<div class='prev'><i class='xi-angle-left-min'></i></div>",
        nextArrow:"<div class='next'><i class='xi-angle-right-min'></i></div>",
    });    
    $(".tab-m>li").eq(0).addClass("on");
    $(".tab-m>li").on("click",function(){
        $(".tab-i>div").hide();
        $(".tab-i>div").eq($(this).index()).show();
        $(".tab-m>li").removeClass("on")
        $(this).addClass("on");
    });
    
    $(".ru-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        dots:true,
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-angle-left-min'></i></div>",
        nextArrow:"<div class='next'><i class='xi-angle-right-min'></i></div>",
    });
    
    //제이쿼리 끝
});