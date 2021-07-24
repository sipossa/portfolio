$(document).ready(function(){
//제이쿼리 시작

//////////////오디오 시작//////////////
var audioFile = new Audio("music.mp3");
audioFile.loop = true;
$(".sound>i").eq(0).click(function(){
	audioFile.play();
});
$(".sound>i").eq(1).click(function(){
	audioFile.pause();
});    
//////////////오디오 끝//////////////     

//////////////메뉴 시작//////////////
$(".m-btn").click(function(){
	$(this).toggleClass("on");
	$(".m-bg").slideToggle();
    $("header>h1").toggleClass("on");
    $(".m-bg").addClass("on"); 
});
//////////////메뉴 끝//////////////
    
//////////////메뉴배경 시작//////////////    
$(".m-bg a").click(function(e){
    $(".m-btn").toggleClass("on").siblings().removeClass("on");
    $(".m-bg").fadeOut();
});
//////////////메뉴배경 끝//////////////   
    
//////////////팝업 시작//////////////   
$(".p-btn01").click(function(){   
    $(".guide01").show();  
});
$(".p-btn02").click(function(){   
    $(".guide02").show();  
});
$(".p-btn03").click(function(){   
    $(".guide03").show();  
}); 
$(".p-btn04").click(function(){   
    $(".guide04").show();  
});     
$(".p-btn05").click(function(){   
    $(".guide05").show();  
}); 
$(".p-btn06").click(function(){   
    $(".guide06").show();  
});   
    
$(".guide>i").click(function(){   
    $(".guide").hide();
});
    
$(".kakao-btn").click(function(){   
    $(".kakao").show();  
});   
$(".kakao>i").click(function(){   
    $(".kakao").hide();
});
//////////////팝업 끝//////////////   
   $(".p-btn").on("click",function(){
        fullpage_api.setAllowScrolling(false);
    });
    $(".guide>i").on("click",function(){
        fullpage_api.setAllowScrolling(true);
    });    
   $(".kakao-btn").on("click",function(){
        fullpage_api.setAllowScrolling(false);
    });
    $(".kakao>i").on("click",function(){
        fullpage_api.setAllowScrolling(true);
    });        
//////////////탑버튼 시작//////////////
    $(".top-btn").on("click",function(event){
        var offset = $("body").offset();
    });      
//////////////탑버튼 끝//////////////  
    
//////////////슬라이드 시작//////////////  
     $(".m02-slider").slick({
        autoplay:false,
        autoplaySpeed:5000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
     $(".m03-slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
     $(".m04-slider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
//////////////슬라이드 끝////////////// 
    
//////////////슬라이드 버튼 시작//////////////      
    $(".m02-slider").eq(0).addClass("on");
    $(".m02-btn>p").eq(0).addClass("on");
    $(".m02-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
         $(".m02-btn>p").eq(currentSlide).addClass("on").siblings().removeClass("on");
         $(".m02-slider").eq(currentSlide+1).addClass("on").siblings().removeClass("on");
    });  
    $(".m02-btn>p:nth-child(1)").on("click",function(){
                 $(".m02-slider").slick("slickGoTo", 0); 
    });
    $(".m02-btn>p:nth-child(2)").on("click",function(){
                 $(".m02-slider").slick("slickGoTo", 1); 
    });

    $(".m03-slider").eq(0).addClass("on");
    $(".m03-btn>p").eq(0).addClass("on");
    $(".m03-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
         $(".m03-btn>p").eq(currentSlide).addClass("on").siblings().removeClass("on");
         $(".m03-slider").eq(currentSlide+1).addClass("on").siblings().removeClass("on");
    }); 
    $(".m03-btn>p:nth-child(1)").on("click",function(){
                 $(".m03-slider").slick("slickGoTo", 0); 
    });
    $(".m03-btn>p:nth-child(2)").on("click",function(){
                 $(".m03-slider").slick("slickGoTo", 1); 
    });    
    $(".m03-btn>p:nth-child(3)").on("click",function(){
                 $(".m03-slider").slick("slickGoTo", 2); 
    }); 
    
    $(".m04-slider").eq(0).addClass("on");
    $(".m04-btn>p").eq(0).addClass("on");
    $(".m04-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
         $(".m04-btn>p").eq(currentSlide).addClass("on").siblings().removeClass("on");
         $(".m04-slider").eq(currentSlide+1).addClass("on").siblings().removeClass("on");
    });  
    $(".m04-btn>p:nth-child(1)").on("click",function(){
                 $(".m04-slider").slick("slickGoTo", 0); 
    });
    $(".m04-btn>p:nth-child(2)").on("click",function(){
                 $(".m04-slider").slick("slickGoTo", 1); 
    });
    //////////////슬라이드 버튼 끝////////////// 

    //////////////마우스오버시 멈추기 시작////////////// 
    $(".n-mac").mouseover(function(){
        $(".m02-slider").slick("slickPause");
    });
    $(".n-mac").mouseleave(function(){
        $(".m02-slider").slick("slickPlay");
    });     
    $(".n-mac").mouseover(function(){
        $(".m03-slider").slick("slickPause");
    });
    $(".n-mac").mouseleave(function(){
        $(".m03-slider").slick("slickPlay");
    });   
    $(".n-ipad").mouseover(function(){
        $(".m04-slider").slick("slickPause");
    });
    $(".n-ipad").mouseleave(function(){
        $(".m04-slider").slick("slickPlay");
    }); 
    //////////////마우스오버시 멈추기 끝////////////// 
    
//////////////마우스 시작////////////// 
    var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove',function(e){
        var x = e.clientX; 
        var y = e.clientY;
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
//////////////마우스 끝//////////////   
    
//////////////풀페이지 시작//////////////
var $this=$(".section");
$this.eq(0).addClass("on");  
 $("#fullpage").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page'], 
        loopHorizontal: false,   
        controlArrows: false,
        scrollingSpeed:1000,
        afterLoad: function(origin,destination){ 
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".scroll li").eq(destination.index).addClass("on").siblings().removeClass("on");
            $(".m02-slider, .m03-slider, .m04-slider").slick("slickPause");
            $(".m02-slider, .m03-slider, .m04-slider").slick("slickGoTo", 0, true)
            if(destination.index==3) {
                $(".m04-slider").slick("slickPlay");
            }
            if(destination.index==2) {
                $(".m03-slider").slick("slickPlay");
            }
            if(destination.index==1) {
                $(".m02-slider").slick("slickPlay");
            }            
        },        
    });        
  
    
//////////////풀페이지 끝////////////// 

//제이쿼리 끝
});