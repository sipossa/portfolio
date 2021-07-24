$(document).ready(function(){
//    제이쿼리 시작
    
//    $('.main').slick({
//        autoplay:true,
//        autoplayspeed:1000
//    });
    
    $("header>nav>ul>li").hover(function(){
        $(this).find("ul").stop().slideDown()},function(){
        $(this).find("ul").stop().hide()
    });
    
    $("#bars").hover(function(){
        $(this).addClass("on"),
        $("#bars-menu").slideDown()},function(){
        $(this).removeClass("on"),
        $("#bars-menu").slideUp()
    });
    
    $("#product-title>div>ul>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".product-con").hide();
        $(".product-con").eq($(this).index()).show();
        
    });
    
    $(".product-main").hover(function(){
        $(".product-main").addClass("on"),
        $(".product-main>div").fadeIn(500),
        $(".product-main>div>div").animate({paddingRight:'400px'},1000)},function(){
        $(".product-main").removeClass("on"),
        $(".product-main>div").fadeOut(500),
        $(".product-main>div>div").animate({paddingRight:'0px'},0);
    });
    
    var swiper = new Swiper('.swiper-container', {
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
//        scrollbar: {
//        el: '.swiper-scrollbar',
//        hide: true,
//        },
        pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        },
        spaceBetween: 30,
        effect: 'fade',
        loop:true,
        grabCursor:true,
        speed:1000,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    
    
    $(".adventure-bt1").hover(function(){
        $(this).addClass("on");
        $(".aimg1").addClass("on");},function(){
            $(this).removeClass("on");
            $(".aimg1").removeClass("on");
    });
    $(".adventure-bt2").hover(function(){
        $(this).addClass("on");
        $(".aimg2").addClass("on");},function(){
            $(this).removeClass("on");
            $(".aimg2").removeClass("on");
    });
    $(".adventure-bt3").hover(function(){
        $(this).addClass("on");
        $(".aimg3").addClass("on");},function(){
            $(this).removeClass("on");
            $(".aimg3").removeClass("on");
    });
    
    $('.village-img').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        autoplay:true,
        autoplayspeed:2000,
        prevArrow: '<i class="xi-angle-left-thin"></i>',
		nextArrow: '<i class="xi-angle-right-thin"></i>',
        dots:true,
        variableWidth: true,
    });
    
    $("#global").hover(function(){
        $(this).addClass("on"),
        $("#global-page").stop().show()},function(){
        $(this).removeClass("on"),
        $("#global-page").hide();
    });
    
    $("#global-page>li").hover(function(){
        $(this).addClass("on")},function(){
        $(this).removeClass("on");
    });
    
    $("#top-button").click(function(){
		$("html,body").animate({scrollTop:0},800);
	});
//    제이쿼리 끝
});