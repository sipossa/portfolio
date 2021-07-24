$(document).ready(function(){

    $(".searchBtn").on("click",function(){
        $(".search").toggleClass("on");
    });
    
    
    $(".mainSlider").slick({
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-angle-left-thin'></i></div>",
        nextArrow:"<div class='next'><i class='xi-angle-right-thin'></i></div>",
    });
    
    $(".notice ul li").eq(0).addClass("on");
    $(".tabItem .tabItemBox").eq(0).addClass("on");
    $(".notice ul li").on("click",function(e){
        e.preventDefault();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tabItem .tabItemBox").eq($(this).index()).addClass("on").siblings().removeClass("on");
    });
    
    $("footer .top").on("click",function(){
        $("html,body").animate({scrollTop:0},500);
    });
    

    //모바일메뉴
    $(".mopen").on("click",function(){
        $(this).toggleClass("on");
        $(".mnav").toggleClass("on");
    });
    
    $(".mnav>span").on("click",function(){
        $(".mopen").removeClass("on");
        $(".mnav").removeClass("on");
    });

});





