$(function(){

//메인페이지 s01 슬라이더
   $('.s01-slide').slick({
       dots: false,
       infinite: true,
       speed: 500,
       fade: true,
       cssEase: 'linear',
       arrows:false,
       autoplay:true,
       autoplaySpeed:5000,
       pauseOnFocus:false,
       pauseOnHover:false,
    });
   
   //메인페이지 s02 슬라이더
   $(".s02-slide").slick({
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnFocus:false,
      pauseOnHover:false,
      dots:true,
      prevArrow:"<div class='prev'><i class='xi-angle-left-thin'></i></div>",
      nextArrow:"<div class='next'><i class='xi-angle-right-thin'></i></div>",
   });
   
   $(".s02-tabm>li").eq(0).addClass("on");
   $(".s02-tabc>div").eq(0).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   
   $(".s02-tabm>li").on("click",function(){
      var i=$(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      
      $(".s02-tabc>div").eq(i).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   });
    
        $(".quick-pop").hide(); 
        $(".quick-bg").hide();
    
    $(".q-box>div").on("click",function(){
      var i=$(this).index();
        var ph=[500,750,500]
        var mph=[450,640,450]
        $(".quick-pop").show(); 
        $(".quick-bg").show();
        $(".quick-pop").css({height:ph[i-1]});
        $(".quick-tabm>li").eq(i-1).addClass("on").siblings().removeClass("on");
        $(".q-tabcon-item>div").eq(i-1).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
        if($(window).width() <= 768){
          $(".quick-pop").css({height:mph[i-1]});
          }

    });
    
    $(".close").on("click",function(){
        $(".quick-pop").hide(); 
        $(".quick-bg").hide();
    });
    
   
   $(".quick-tabm>li").on("click",function(){
      var i=$(this).index();
       var ph=[500,720,500]
       var mph=[450,640,450]
      $(this).addClass("on").siblings().removeClass("on");
      $(".quick-pop").css({height:ph[i]});
      $(".q-tabcon-item>div").eq(i).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
       if($(window).width() <= 768){
          $(".quick-pop").css({height:mph[i]});
          }
   });
   
      $(".s03-tabm>li").eq(0).addClass("on");
   $(".s03-cont>div").eq(0).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   
   $(".s03-tabm>li").on("click",function(){
      var i=$(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      
      $(".s03-cont>div").eq(i).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   });
   
   $(".s04-tabm>li").eq(0).addClass("on");
   $(".s04-cont>figure").eq(0).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   
   $(".s04-tabm>li").on("click",function(){
      var i=$(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      
      $(".s04-cont>figure").eq(i).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   });
   
   $(".ms06-slide").slick({
     autoplay:true,
     autoplaySpeed:2000,
      pauseOnFocus:false,
      pauseOnHover:false,
      dots:true,
      prevArrow:"<div class='prev'><i class='xi-angle-left-thin'></i></div>",
      nextArrow:"<div class='next'><i class='xi-angle-right-thin'></i></div>",
      fade:true
   });
    
    $(".m-btn").on("click",function(){
      $(this).toggleClass("on");
          $("nav").toggleClass("on");
    });
    
    $("nav>ul>li").on("click",function(){
      if($("nav").hasClass("on")){
        $(this).toggleClass("on");    
        $(this).siblings().removeClass("on");                  
      }
   });
   $(window).on("resize",function(){
      $("nav>ul>li").find("ul").removeAttr("style");
   });
    
//    if($(window).width() <= 768){
//        var ht=$("#main-s02 img").height();
//        $(window).on("resize",function(){
//            $("#main-s02").height(1000+ht);
//        });           
//    }
    
//    function hrs() {
//        var ht=$(".slick-track").height();
//        console.log(ht);
//        $("#main-s02").height(400+ht);
//    }
//    hrs();
        
    
});