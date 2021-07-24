$(document).ready(function(){
//    제이쿼리 시작
    
//    풀페이지 시작
    var page=$(".content");
    var nli=$("nav li");
    var logo=$("header>h1");
    page.eq(0).addClass("on");
    nli.eq(0).addClass("on");

    page.each(function(index){
        var $this=$(this);
        var $this_top=$this.offset().top;	
        $(window).on("scroll",function(e){
        e.preventDefault();
        var wc=$(window).scrollTop();		
            if(wc > $this.offset().top - 100){
                $this.addClass("on").siblings().removeClass("on");
                nli.eq($this.index()-1).addClass("on").siblings().removeClass("on");
                nli.eq($this.index()).addClass("oo").siblings().removeClass("oo");
                
                
//                index==1||index==3 ? logo.css({color:"#ddd"}) : logo.css({color:"#333"});
            }		
        });
    });
    
    page.on("mousewheel",function(e){
        e.preventDefault();
        console.log(event.wheelDelta);
        event.wheelDelta<0 ? delTa=$(this).next().offset().top : delTa=$(this).prev().offset().top;
        function delta() {$("html,body").stop().animate({scrollTop:delTa},500,"easeInExpo");}
        setTimeout(delta,300,"easeInExpo");
    });
    
//    메인 바 버튼    
    $("#bars").click(function(){
        $(this).toggleClass("on");
        $("#p1-main").addClass("on");
        $("#bar-menu").toggle();
        $("#bm-line1").addClass("on");
        $("#bm-line2").addClass("on");
        $("#bm-line3").addClass("on");
    });
    
    $("#bar-menu").mouseenter(function(){
        $(this).addClass("on");
    });
    $("#bmenu-bt").click(function(){
        $("#bar-menu").hide();
        $("#bars").removeClass("on");
    });
    $("#bar-menu ul>li").click(function(){
        $("#bar-menu").hide();
        $("#bars").removeClass("on");
    });
    
//    바메뉴 호버
    $("#bar-menu ul>li").mouseenter(function(){
        $("#bar-menu ul>li").removeClass("on");
        $(this).addClass("on");
    });
    $("#bar-menu ul>li").mouseleave(function(){
        $(this).removeClass("on");
    });
    
//    pf 슬라이드 쇼
    $('.pf-right').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
//    pf1 스크롤이벤트
    $(window).on("scroll",function(){
                if($(window).scrollTop() > $("section#pf1").offset().top -100){
                    $("#p1-balls").addClass("on");}
                else {$("#p1-balls").removeClass("on");}
            });
    
//    pf2 스크롤이벤트
    $(window).on("scroll",function(){
                if($(window).scrollTop() > $("section#pf2").offset().top -100){
                    $("#p2-balls").addClass("on");}
                else {$("#p2-balls").removeClass("on");}
            });
    
//    pf3 스크롤이벤트
    $(window).on("scroll",function(){
                if($(window).scrollTop() > $("section#pf3").offset().top -100){
                    $("#p3-balls").addClass("on");}
                else {$("#p3-balls").removeClass("on");}
            });
    
//    info 스크롤이벤트
    $(window).on("scroll",function(){
                if($(window).scrollTop() > $("section#info").offset().top -100){
                    $("#if-balls").addClass("on");}
                else {$("#if-balls").removeClass("on");}
            });
    
//    디자인 팝업 스크롤
    $(".pf-popw img").mouseenter(function(){
        $(this).stop().animate({top:-($(this).height()-$(".pf-popw").height())},4000);
    });
    $(".pf-popw img").mouseleave(function(){
        $(this).stop().animate({top:0},2500);
    });
    $(".pf-popw img").click(function(){
        $(this).stop();
    });
    
//    pf1 디자인 팝업
    $(".pf1-btd1").click(function(){
        $("#p1-pop1").show();
    });
    $(".pf1-btd2").click(function(){
        $("#p1-pop2").show();
    });
    
//    pf2 디자인 팝업
    $(".pf2-btd1").click(function(){
        $("#p2-pop1").show();
    });
    $(".pf2-btd2").click(function(){
        $("#p2-pop2").show();
    });
    $(".pf2-btd3").click(function(){
        $("#p2-pop3").show();
    });
    
//    pf3 디자인 팝업
    $(".pf3-btd1").click(function(){
        $("#p3-pop1").show();
    });
    $(".pf3-btd2").click(function(){
        $("#p3-pop2").show();
    });
    
//    포폴 팝업창 닫기
    $(".closebox").click(function(){
        $(".pf-pop").hide();
    });
    
     
//    main 팝업창 닫기
    $("#pop-close").click(function(){
        $("section#pop").hide();
//        $("section#pop").slideUp();
//        $("#pop-box").hide();
    });
    
    
//    제이쿼리 끝
});