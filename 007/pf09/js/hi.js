$(document).ready(function(){
//제이쿼리 시작
    
     // 토글 시작 //
        //언어선택//
    $(".lang").on("click",function(){
        $(this).toggleClass("on");
    });
        //검색창//
    $(".nav-main>span").on("click",function(){
        $(this).toggleClass("on");
        $(".nav-search").slideToggle("on");
    });  
     // 토글 끝 //  
    
    $(".mopen").on("click",function(){
        $(".nav-main>nav").toggleClass("on")
        $(this).toggleClass("on")
    });

    
    // 슬라이드 시작//
    $(".visual-slide").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
    
     $(".event").slick({
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        dots:false,
        arrows:false, 
        responsive:[
            {breakpoint:768,
             settings:{
                 slidesToShow:1,
                 dots:true,
             }
                
            }
        ]
    }); 
    
    $(".video-s").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    }); 
  
    // 슬라이드 끝//    

    // 슬라이드 버튼 시작//     
    $(".prev-btn").on("click",function(){
        $(".event").slick("slickPrev");
    });
    $(".next-btn").on("click",function(){
        $(".event").slick("slickNext");
    });
    // 슬라이드 버튼 끝// 
    
    //슬라이드 효과 시작//  
    $(".visual-item").eq(1).addClass("on");
    $("#visual").on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".visual-item").eq(currentSlide+1).addClass("on").siblings().removeClass("on");
    });  
    //슬라이드 효과 끝//    
    
    $(".n-item").eq(0).addClass("on")
    $(".n-tag>span").eq(0).addClass("on")
        $(".n-tag>span").on("click",function(){
            $(".n-tag>span").removeClass("on");
            $(this).addClass("on");
            $(".n-item").hide();
            $(".n-item").eq($(this).index()).show();    
    });
    
    
    $(window).on("resize",function(){
        $(".nav-main>nav>ul>li").find(".nav-main>nav>ul").removeAttr("style")
    });
    
    // 스크롤 이벤트 시작//
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 30){        
        $(".nav-main").addClass("on"); 
        }else{
        $(".nav-main").removeClass("on");     
        }
    });       
    $(window).on("scroll",function(){
        var sct=$(window).scrollTop();
        var this_top=$("#m01").offset().top;
        console.log(sct);
        console.log(this_top);
        if(sct>this_top-400){
            $("#m01").addClass("on"); 
        }else{
            $("#m01").removeClass("on"); 
        }
    });   
    // 스크롤 이벤트 끝//

//제이쿼리 끝    
});