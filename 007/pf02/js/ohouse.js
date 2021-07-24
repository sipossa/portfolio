$(document).ready(function(){
    $(".slider").slick({
        dots:true,
        autoplay:true,
        arrows:false,
        autoplayspeed:1000
    });
    
    $(".menu_icon").on("click",function(){
        $(".menu_text").toggleClass("on");
        $(this).toggleClass("on");
     }); 
    
    $(".event_slider").slick({
        dots:true,
        autoplay:true,
        arrows:false,
        autoplayspeed:1000
    });    
    
    $(".pop-close").on("click",function(){
        $("#popup").slideUp();
    });

    $(".tab-m>li").on("click",function(){
        $(".tab-con>div").hide();
        $(".tab-con>div").eq($(this).index()).show();
        $(".tab-m>li").removeClass("on")
        $(this).addClass("on")
    })    
});