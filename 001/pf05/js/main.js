$(document).ready(function(){
//    제이쿼리 시작
    
    $("#bar-button").click(function(){
        $(".nav-div").toggle();
        $(".button").toggleClass("on");
    });
    
    $("nav>ul>li").click(function(){
        $(".s-menu").slideUp();
        $(this).find("ul").stop().slideToggle();
    });

    $(".last").click(function(){
        $(this).toggleClass("on");
    });
    
    $(".para").each(function(){
        var px=$(this);
        $(window).scroll(function(){
            var pS=$(window).scrollTop()/px.data("speed");
            px.css({backgroundPositionY:pS});
        });
    });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop()>$("#sec2-illu").offset().top -300){
            $("#sec2-illu").addClass("on");}
        else {$("#sec2-illu").removeClass("on");}
    });
    
    $(".sec3ul>ul>li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".sec3img>div").hide();
        $(".sec3img>div").eq($(this).index()).show();
    });
    
    $('.sec4slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplayspeed:2500,
        variableWidth: true,
        dots: true,
        prevArrow: '<i class="xi-angle-left-thin"></i>',
		nextArrow: '<i class="xi-angle-right-thin"></i>',
    });
    
//    제이쿼리 끝
});