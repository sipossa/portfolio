$(document).ready(function(){
//제이쿼리 시작
    
    ////////////////////// nav부분 //////////////////////////
    //네비 검색창
    $(".nav-s").on("click",function(){
        $(this).toggleClass("on");
        $(".nav-serch").slideToggle("on");
    });   
    $(".nav-b>span").on("click",function(){
        $(this).toggleClass("on");
        $(".nav-serch2").slideToggle("on");
    });        
    //스크롤시 네비 
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 30){        
        $(".nav-b").addClass("on"); 
        }else{
        $(".nav-b").removeClass("on");     
        }
    });    
    
    ////////////////////// #notice 팝업창 //////////////////////////
    //KU NOTICE 슬라이드
    $(".notice").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });
    //KU NOTICE 슬라이드 멈춤버튼
    $(".pause").on("click",function(){
        $(".notice").slick("slickPause")
    });
    
    ////////////////////// #k_news //////////////////////////
    //KU NEWS 탭메뉴
    $(".news-btn>span").eq(0).addClass("on")
    $(".news-btn>span").on("click",function(){
        var i=$(this).index();             
        $(".news-s>div").eq(i).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
        $(".news-s>div>div").toggleClass("on");
    }); 
    //KU NEWS 스크롤이벤트
    $(window).on("scroll",function(){
        var sct=$(window).scrollTop();
        var this_top=$(".content").offset().top;
        console.log(sct);
        console.log(this_top);
        if(sct>this_top-600){
            $(".content").addClass("on"); 
        }else{
            $(".content").removeClass("on"); 
        }
    }); 
    
    ////////////////////// #k_news 팝업창 //////////////////////////
    //팝업 슬라이드
    $(".k-bg-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });   
    //팝업 슬라이드 멈춤,이전,이후,닫기버튼
    $(".pause02").on("click",function(){
        $(".k-bg-s").slick("slickPause")
    });    
    $(".prev").on("click",function(){
        $(".k-bg-s").slick("slickPrev")
    });    
    $(".next").on("click",function(){
        $(".k-bg-s").slick("slickNext")
    });  
    $(".close").on("click",function(){
        $("#k-bg").addClass("on");
    });  
    
    //////////////////////footer//////////////////////////
    //사이트맵 팝업창
    $(".site-m>li").eq(0).addClass("on")
    $(".site-m>li").on("click",function(){
        var i=$(this).index();             
        $(".site-t>ul").eq(i).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    }); 
    //사이트맵 팝업창 켜기,닫기
    $(".close-m").on("click",function(){
        $(".sitemap").slideUp("on");
    });     
    $(".map").on("click",function(){
        $(".sitemap").slideDown("on");
    }); 
    $(".top-btn2").on("click",function(){
        $(".sitemap").slideDown("on");
    }); 
    //맨위로 버튼 
    $(".top-btn").on("click",function(){
        $("html,body").animate({scrollTop:0},500);
    });
    
    $(".mopen").on("click",function(){
        $("#m-nav").toggleClass("on")
        $(this).toggleClass("on")/*온버튼 붙이기*/
    });
    
    $("#m-nav>div:nth-child(2)>ul>li").eq(0).addClass("on")
    $("#m-nav>div:nth-child(2)>ul>li").on("click",function(){
        var i=$(this).index();             
        $("#m-nav>div:nth-child(3)>ul").eq(i).show().siblings().hide();
        $(this).addClass("on").siblings().removeClass("on");
    }); 
    

    $("#m-nav>div:nth-child(3)>ul>li").on("click",function(){
        var i=$(this).index();             
        $(this).find("ul").slideToggle();
        $(this).siblings().find("ul").stop().slideUp();
        $(this).toggleClass("on")
        $("#m-nav>div:nth-child(3)>ul ul>i").addClass("on");
        $(this).siblings().removeClass("on");
    });     

    $("#sub-main>span").on("click",function(){
        $("#sub-main>div:nth-child(4)").slideToggle("on")
        $(this).toggleClass("on")/*온버튼 붙이기*/
    }); 

    $("#sub-nav>div>ul>li").on("click",function(){
        $(this).toggleClass("on")    
        $(this).siblings().removeClass("on");
    });    

//제이쿼리 끝    
});