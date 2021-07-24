$(document).ready(function(){
   
    //메뉴바,전체메뉴열고닫기
    $(".m-bar").on("click",function(){
        $(this).toggleClass("on");
        $(".menu").toggleClass("on");
    });
    
    //메뉴클릭시 해당섹션으로 이동
    $(".menu a, .m-btn a").on("click",function(){
        $("html,body").stop().animate({scrollTop:$(this.hash).offset().top},0);
        $(".menu").removeClass("on");
        $(".m-bar").removeClass("on");
    });
    //타이틀 클릭시 메뉴창 없애기
    $(".title").on("click",function(){
        $(".menu").removeClass("on");
        $(".m-bar").removeClass("on");
    })
    
    $(".content").each(function(index){
        var thisTop = $(this).offset().top;
        $(".m-btn li").eq(0).addClass("on");
        //해당섹션 메뉴버튼 상태
        $(window).on("scroll",function(){
        var wTop = $(window).scrollTop();
        //console.log(wTop);
        //console.log(thisTop);
            if(wTop > thisTop - 100) {
                $(".m-btn li").eq(index).addClass("on").siblings().removeClass("on");
            };
        });
        //fullpage
        $(this).on("mousewheel",function(){
            event.wheelDelta < 0 ? delTa=$(this).next().offset().top : delTa=$(this).prev().offset().top;
            function slide() {
                $("html,body").stop().animate({scrollTop:delTa},500);
            };
            slide();
        });
    });
    
    //add 팝업창
    $(".add>div").on("click",function(){
        var i=1;
        $(".add-info figure").eq($(this).index()-i).addClass("on");
        $(".add-info div").addClass("on");
    });
 
    $(".add-info div p").on("click",function(){
        $(".add-info figure").removeClass("on");
        $(".add-info div").removeClass("on");
    });


});