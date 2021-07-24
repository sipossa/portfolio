$(document).ready(function(){
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 50) {
            $(".menu").addClass("on");
        }else {
            $(".menu").removeClass("on");
        };
    });

    
    $(".main-slider").slick({
        autoplay:true,
        arrows:false,
    });
    
    
    $(".featured-tab li").eq(0).addClass("active");
    $(".featured-con-item").hide();
    $(".featured-con-item").eq(0).fadeIn().find("figure").animate({right:0},800,"easeOutBounce");

    $(".featured-tab li").on("click",function(){
        $(".featured-tab li").removeClass("active");
        $(this).addClass("active");
        $(".featured-con-item").hide();
        $(".featured-con-item").find("figure").css({right:-1500});
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("#" + activeTab).find("figure").animate({right:0},800,"easeOutBounce");
    });
    
    
    $(".trending-box").on("mouseenter",function(){
        $(this).addClass("on");
        $(this).prev().addClass("on");
        $(this).next().removeClass("on");
    });
    
    $("nav>ul>li>a").on("click",function(){
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
    
    $(".submenu-first").on("click",function(){
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    })
    
    $(".mopen").on("click",function(){
       $(this).toggleClass("on"); 
       $("nav").toggleClass("on"); 
    });
    
});


















