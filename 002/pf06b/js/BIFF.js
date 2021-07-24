$(document).ready(function(){
    //제이쿼리시작
    
    $("nav>ul>li").on("mouseenter",function(){
        $(".mbg").addClass("on");
    });
    $("nav>ul>li").on("mouseleave",function(){
        $(".mbg").removeClass("on");
    });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 200) {
            $(".snav").css({"display":"none"});
            $("header .mbg").css({"top":"90px"});
        }else {
            $(".snav").css({"display":"block"});
            $("header .mbg").css({"top":"130px"});
        }
    })
    
    $("#main").slick({
        dots:false,
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-trending-flat'></i></div>",
        nextArrow:"<div class='next'><i class='xi-trending-flat'></i></div>"
    });
    
        $(".program-slider").slick({
        dots:false,
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-trending-flat'></i></div>",
        nextArrow:"<div class='next'><i class='xi-trending-flat'></i></div>"
    });
    
    $(".biff-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots:false,
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-trending-flat'></i></div>",
        nextArrow:"<div class='next'><i class='xi-trending-flat'></i></div>"
    });
    
    $("#biff .top").on("click",function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},500);
    });

    //제이쿼리끝
});