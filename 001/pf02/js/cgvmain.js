$(document).ready(function(){
//    제이쿼리 시작
    
    $("section#head>nav>ul>li").hover(function(){     
        $(this).css({color:"#ff671e"}).find("div").stop().slideDown();},function(){$(this).css({color:"#fff"}).find("div").stop().slideUp();
    });
    
    $("section#head .smenu>li").mouseover(function(){
        $(".smenu>li:after").hides();
    });

    var swiper = new Swiper('.swiper-container',{
        loop:true,
        effect:'coverflow',
        centeredSlides:true,
        slidesPerView:'auto',
        coverflowEffect:{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows:true,
      },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
//        autoplay: {
//        delay: 4500,
//        disableOnInteraction: false,
//      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#event").offset().top -500){
            $("#event-img>div>div").addClass("on");
        $("#top-right").addClass("on");}
        else {$("#event-img>div>div").removeClass("on");
             $("#top-right").removeClass("on");}
    });
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#arthouse").offset().top -500){
            $("#arthousesubtmask span").addClass("on");}
        else {$("#arthousesubtmask span").removeClass("on");}
    });
    
    $(".b-right").each(function(){
        var px=$(this);
        $(window).scroll(function(){
            var pS=$(window).scrollTop()/px.data("bgspeed");
            px.css({backgroundPositionY:pS});
        });
    });
    
    $("#premium-img>div").mouseover(function(){
        $(this).addClass("on").stop().css("width","370px").siblings().removeClass("on").css("width","170px").find("h3").addClass("ox"),
        $(this).find("h3").addClass("oo");
    });
    $("#premium-img>div").mouseleave(function(){
        $("#premium-img>div").stop().removeClass("on").css("width","210px").find("h3").removeClass("ox"),
            $(this).find("h3").removeClass("oo");
    });
    
    $("#special #smain-click").hover(function(){
        $(this).addClass("on")},function(){$(this).removeClass("on");  
    });
    
    $("#footer-button").click(function(){
        $("#fotter-family").slideToggle();
        $("#footer-sub").toggleClass("on")
    });
    
    $("#fotter-family>li").hover(function(){
        $(this).addClass("on");},function(){
        $(this).removeClass("on");
    });
    
    $(".bar-menu").mouseenter(function(){
        $(this).addClass("on");
        $("#bar-menu").stop().slideDown();
    });
    $(".bar-menu").mouseleave(function(){
        $(this).removeClass("on");
        $("#bar-menu").stop().slideUp();
    });


//    제이쿼리 끝
            });