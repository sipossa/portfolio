$(document).ready(function(){
    $(".slider01").slick({
        autoplay: true,
        dots:true,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
    });
    $(".mbtn").on("click",function(){
        $("#nav").addClass("on");
    });
    
    $(".mbtn-c").on("click",function(){
        $("#nav").removeClass("on");
    });
    
    $(".tab-m>li").on("click",function(){
        $(".tab-con>div").hide();
        $(".tab-con>div").eq($(this).index()).show();
        $(".tab-m>li").removeClass("on");
        $(this).addClass("on");
        
    });
    $(".lang").on("click",function(){
      $(".lang .lang-li").toggleClass("on");
    });
    
});