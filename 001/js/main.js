$(document).ready(function(){
//    제이쿼리 시작
    
//    풀페이지 시작
    var page=$(".content");
    var nli=$("nav li");
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
            }		
        });
    });
    
        page.on("mousewheel",function(e){
        e.preventDefault();
        console.log(event.wheelDelta);
        event.wheelDelta<0 ? delTa=$(this).next().offset().top : delTa=$(this).prev().offset().top;
        function delta() {$("html,body").stop().animate({scrollTop:delTa},1600,"easeOutBounce");}
        setTimeout(delta,200);
    });
    
//    네비 따라 부드럽게 이동
     $("nav a").click(function(e){
            e.preventDefault();
            $("html,body").animate({scrollTop:$(this.hash).offset().top},800);
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
        $("#bar-menu").fadeOut();
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
        autoplaySpeed: 4600,
    });
//      pf 슬라이드 애니메이션
    $(".slick-slide").removeClass("on");
    $(".slick-current").addClass("on");
        
//    디자인 팝업 스크롤
    $(".pf-popw img").mouseenter(function(){
        $(this).stop().animate({top:-($(this).height()-$(".pf-popw").height())},6000);
    });
    $(".pf-popw img").mouseleave(function(){
        $(this).stop().animate({top:0},4000);
    });
    $(".pf-popw img").click(function(){
        $(this).stop();
    });
    
//    pf1 디자인 팝업
    $(".pf1-btd1").click(function(){
        $("#p1-pop1").show();
    });
    
//    pf2 디자인 팝업
    $(".pf2-btd1").click(function(){
        $("#p2-pop1").show();
    });

    
//    pf3 디자인 팝업
    $(".pf3-btd1").click(function(){
        $("#p3-pop1").show();
    });
    
//    pf4 디자인 팝업
    $(".pf4-btd1").click(function(){
        $("#p4-pop1").show();
    });
    
//    pf5 디자인 팝업
    $(".pf5-btd1").click(function(){
        $("#p5-pop1").show();
    });
    
//    pf6 디자인 팝업
    $(".pf6-btd1").click(function(){
        $("#p6-pop1").show();
    });
    $(".pf6-btd2").click(function(){
        $("#p6-pop2").show();
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