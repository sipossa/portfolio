$(document).ready(function(){
   
    //메인슬라이더
    $(".main").slick({
        autoplay:true,
        arrows:false,
    });
    //모바일메인슬라이더
    $(".m-main").slick({
        autoplay:true,
        arrows:false,
    });
    
    //news-slider
    $(".news-slider").slick({
        autoplay:false,
        prevArrow:"<div class='prev'><i class='xi-long-arrow-left'></i></div>",
        nextArrow:"<div class='next'><i class='xi-long-arrow-right'></i></div>",
    });
    
    //notice tab
    $("#i01").show();
    $(".tab li").eq(0).addClass("on");
    $(".tab li").on("mouseover",function(){
        var tabItem = $(this).attr("rel");
        $("#" + tabItem).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    });
    
    //mobile notice tab
    $("#i01").show();
    $(".tab li").eq(0).addClass("on");
    $(".tab li").on("click",function(){
        var tabItem = $(this).attr("rel");
        $("#" + tabItem).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    });
    
    //knu num
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 1850) {
            $(".knu-box div ul").addClass("on")
        }else {
            $(".knu-box div ul").removeClass("on")
        };
    });
    
    //mopen
    $(".mopen").on("click",function(){
        $("nav").toggleClass("on");
    });
    
    //mobile menu
    $("nav>ul>li>a").on("click",function(){
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
    
    
    $(".all-menu>ul>li").on("click",function(){
        $(this).toggleClass("on").siblings().removeClass("on");
    });

    
});





