$(document).ready(function(){
    
    //top 생성
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 300) {
            $(".top").show();
        }else {
            $(".top").hide();
        }
    });
    
    //top 이동
    $(".top").on("click",function(){
        $("html,body").animate({scrollTop:0},300);
    });
    
    //메인슬라이더
    $(".main-slider").slick({
        autoplay:true,
        prevArrow:"<div class='prev'><i class='xi-long-arrow-left'></div>",
        nextArrow:"<div class='next'><i class='xi-long-arrow-right'></div>"
    });

    //index 이미지 스크롤
    $("#img .img").each(function(index){
        var img = $(this);
        var imgTop = img.offset().top;
        $(window).on("scroll",function(){
        console.log ($(window).scrollTop());
        console.log (imgTop);
            if ($(window).scrollTop() > imgTop -700) {
                img.animate({opacity:1},1000);
            }
        });
    });
    
    //index reserve 카운터
    var i = 1
    $(".reserve-box .t04 .add").click(function(){
        ++i;
        $(this).siblings(".num").text(i);
        if(i>9) {
            i=9;
        };
    });
    $(".reserve-box .t04 .sub").click(function(){
        $(this).siblings(".num").text(i);
        --i;
        if(i<=0) {
            i=0;
        };
    });
    
    //rooms
    //rooms 탭메뉴
    $(".tab-menu li").eq(0).addClass("on");
    $(".tab-menu li").on("click",function(){
        $(".tab-menu li").removeClass("on");
        $(this).addClass("on");
        $(".item-box").fadeOut();
        var roomTab = $(this).attr("rel");
        $("#" + roomTab).fadeIn();
    });
    
    //overview
    //overview 탭메뉴
    $(".o-tab-menu li").eq(0).addClass("on");
    $(".o-tab-menu li").on("click",function(){
        $(".o-tab-menu li").removeClass("on");
        $(this).addClass("on");
        $(".o-item-box").fadeOut();
        var overwiewTab = $(this).attr("rel");
        $("#" + overwiewTab).fadeIn();
    });
    
    //overview 더보기
    $("#overview .o-item-box li a").on("click",function(e){
        e.preventDefault();
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
    
    //reserve 더보기
    $("#reserve .reserve-box li").eq(0).addClass("on");
    $("#reserve .reserve-box li a").on("click",function(e){
        e.preventDefault();
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
    
    //reserve hide-box 룸 선택
    $("#reserve .hide-box p").on("click",function(){
        $("#reserve .hide-box p").removeClass("on");
        $(this).addClass("on");
    });

    
    //reserve hide-box 날짜 선택
    $("#reserve .calender td").on("click",function(){
        $(this).parent().siblings().find("td").removeClass("on");
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    });
    //reserve 모두선택후 더보기 닫힘
    $(".reserve-btn").on("click",function(){
        $("#reserve .reserve-box li").removeClass("on");
    });
    
    //customer 더보기 슬라이드
    $("#customer .content li a").on("click",function(e){
        e.preventDefault();
        $(this).parent().toggleClass("on").siblings().removeClass("on");
    });
    

    //모바일
    $(".m-btn").on("click",function(){
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });
});
