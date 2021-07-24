$(document).ready(function(){
//    제이쿼리 시작
    
    $("header>nav>ul>li").mouseenter(function(){
        $(this).addClass("on");
        $(".s-menu").eq($(this).index()).stop().show(300);
    });
    $("header>nav>ul>li").mouseleave(function(){
        $(this).removeClass("on");
        $(".s-menu").stop().hide();
    });
    
    $("#right-button").click(function(){
        $("#bar-menu").toggle();
        $(this).toggleClass("on");
        $("#right-button>a").toggleClass("on");
    });
    
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination'
        },
        speed:500,
        loop:true,
        infinite: true,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: 'fade',
    });
    
    var s3Slider=$('.business-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop:true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<div class="prevArrow"></div>',
		nextArrow: '<div class="nextArrow"></div>',
        variableWidth: true,
//        autoplay: true,
//        autoplaySpeed: 2000,
    });
    
    s3Slider.on("beforeChange", function(event, slick, currentSlide, nextSlide){
                $(".b-slide").removeClass("on");
            });
    s3Slider.on("afterChange", function(event, slick, currentSlide, nextSlide){
                $(".b-slide").eq(currentSlide +3).addClass("on");
            });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop()>$("#vision").offset().top -300){
            $("#vision>#vision-content").addClass("on");}
        else {$("#vision>#vision-content").removeClass("on");}
    });

    $("#tab-menu>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab-con").hide();
        $(".tab-con").eq($(this).index()).show();
    });
    
    $("#footer-right>div").click(function(){
        $("#family-site").slideToggle();
    });
    
    
    $("#family-site>li").hover(function(){
        $(this).find("a").addClass("on")},function(){
        $(this).find("a").removeClass("on")
    });
    
    $("footer>span").click(function(){
        $("html,body").animate({scrollTop:0},800);
    });
    
    $("#bar-menu>div>div>ul>li").click(function(){
        $("#bar-menu").hide();
        $("#right-button").removeClass("on");
    });
    
//    제이쿼리 끝
});