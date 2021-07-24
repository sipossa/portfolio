$(document).ready(function(){
//    제이쿼리 시작
    
    $(window).resize(function(){
        $("nav>ul>li").removeAttr("style");
    });
    
    $("nav>ul>li").mouseenter(function(){
        if($(window).width() > 768){
            $(".s-menu").hide();
            $(this).find("ul").stop().slideDown();
        }
    });
    $("nav>ul>li").click(function(){
        if($(window).width() < 769){
        $(".s-menu").hide();
        $(this).find("ul").stop().slideDown();
        }
    });
    
    $("#mobile-menu").click(function(){
        $(this).toggleClass("on");
        $("nav").toggle();
    });

    $("nav>ul>li").mouseleave(function(){
        if($(window).width() > 768){
            $(".s-menu").stop().slideUp();
        }
    });
    
    $(".shop-button>a").hover(function(){
        $(this).addClass("on");},function(){
        $(this).removeClass("on");
    });
    
    $('.slider').slick({
      infinite: true,
        prevArrow: '<div class="slider-left"><img src="img/sec1-arrow-l.png"></div>',
		nextArrow: '<div class="slider-right"><img src="img/sec1-arrow-r.png"></div>',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
    
    $(".slide-button").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on");}},function(){if($(window).width() > 768){
            $(this).removeClass("on");
    }
    });
    
    $(".slide-button").click(function(){
        if($(window).width() < 769){
            $(this).addClass("on");
    }
    });
    
    $(".icon-box").hover(function(){
        $(this).addClass("on",600);},function(){
        $(this).removeClass("on");
    });
    
    if($(window).width() > 768){
    $('.sec2-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
        variableWidth: true,
        prevArrow: '<i class="xi-angle-left-thin"></i>',
		nextArrow: '<i class="xi-angle-right-thin"></i>',
        autoplay: true,
        autoplaySpeed: 3000,
        speed:800,
        cssEase: 'linear'
    });
    }
    
    if($(window).width() < 769){
    $('.sec2-slider').slick({
      infinite: true,
        prevArrow: '<i class="xi-angle-left-thin"></i>',
		nextArrow: '<i class="xi-angle-right-thin"></i>',
        autoplay: true,
        autoplaySpeed: 2500,
        speed:300,
        cssEase: 'linear'
    });
    }
    
     $(".sec2-slideitem").hover(function(){
         if($(window).width() > 768){
            $(this).addClass("on");}},function(){
         if($(window).width() > 768){
            $(this).removeClass("on");
         }
    });
    $(".sec2-slideitem").click(function(){
         if($(window).width() < 769){
          $(this).toggleClass("on");
         }
    });
    
    $('.sec3-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false
    });
    
    $(".s3-btn").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on")}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on")
        }
    });
    
    $(".ban-btn").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on")}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on")
        }
    });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop()>$("#sec5").offset().top -500){
            $(".sec5-img").addClass("on");}
        else {$(".sec5-img").removeClass("on");}
    });
    
    
    $(".sec6-m>span>a").hover(function(){
        if($(window).width() > 768){
            $(this).addClass("on")}},function(){
        if($(window).width() > 768){
            $(this).removeClass("on")
        }
    });
    
    if($(window).width() > 768){
    $('.sec7-slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<i class="xi-angle-left-thin"></i>',
		nextArrow: '<i class="xi-angle-right-thin"></i>',
    });
    }
    
    $("#family").click(function(){
        $(this).toggleClass("on");
        $(".family-site").slideToggle();
    });
    
    $(window).resize(function(){
        $(".s-menu").removeAttr("style");
    });
    
    
    
//    제이쿼리 끝
});