$(function(){
     $('.main01-slider').slick({
     infinite: true,
     speed: 500,
     fade: true,
     cssEase: 'linear',
    arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
   });
   
   
   $('.main02-slider').slick({
     autoplay: true,
     autoplaySpeed: 2000,
      pauseOnHover:true,
      pauseOnFocus:false,
      prevArrow:"<div class='prev'></div>",
      nextArrow:"<div class='next'></div>",
      dots:true,
   });
   
   $(".tabm>li").eq(0).addClass("on");
   $(".tabcon>div").css({visibility:"hidden"});
   $(".tabcon>div").eq(0).css({visibility:"visible"});
   $(".tabm-bar>span").css({width:12.5+"%"})
   $(".airplane").css({left:12.5+"%"})
   
   $(".tabm>li").on("click",function(){
      $(".tabcon>div").css({visibility:"hidden"});
      $(".tabcon>div").eq($(this).index()).css({visibility:"visible"});
      $(".tabm>li").removeClass("on");
      $(this).addClass("on");
      $(".tabm-bar>span").animate({width:12.5+($(this).index())*25+"%"},500);
      $(".airplane").animate({left:12.5+($(this).index())*25+"%"},500);
   });
   
   
       $('.main03-img').slick({
        asNavFor: '.main03-text',
         autoplay:true,
         autoplaySpeed:2000,
         dots:true,
         prevArrow:"<div class='prev'></div>",
         nextArrow:"<div class='next'></div>",
         pauseOnHover:false,
        pauseOnFocus:false,
      });
      $('.main03-text').slick({
        asNavFor: '.main03-img',
        focusOnSelect: false,
         arrows: false,
         fade:true,
      });
   
      $(window).on("scroll", function(){
            var sct=$(window).scrollTop();
            $(".sct-event").each(function(){
                var this_top=$(this).offset().top;
                var m=($(window).height()-$(this).height())/2+900;
                console.log(m);
                if(sct > this_top-m){
                    $(this).addClass("on");
                }else{
                    $(this).removeClass("on");
                }            
            })

        });
   $(".close").on("click",function(){
     $(".popup").hide(); 
   });
   
   $(".family").on("click",function(){
     $(".family-p").addClass("on");
   });
   
    $(".family-close").on("click",function(){
     $(".family-p").removeClass("on");
   });
   
//서브페이지01
   
   $('.sub01-mslide').slick({
     dots: true,
     infinite: true,
     speed: 500,
     fade: true,
     cssEase: 'linear',
      prevArrow:"<div class='prev'></div>",
      nextArrow:"<div class='next'></div>",
});

   
      $(".sub-tabm>li").eq(0).addClass("on");
      $(".tabm01>li").eq(0).addClass("on");
      $(".tabm02>li").eq(0).addClass("on");
      $(".tabm03>li").eq(0).addClass("on");
   $(".sub-tabcon>div").css({visibility:"hidden"});
   $(".sub-tabcon>div").eq(0).css({visibility:"visible"});
   $(".sub-tabm-bar>span").css({width:16.5+"%"})
   $(".sub-airplane").css({left:16.5+"%"})
   
   $(".sub-tabm>li").on("click",function(){
      $(".sub-tabcon>div").css({visibility:"hidden",zIndex:1});
      $(".sub-tabcon>div").eq($(this).index()).css({visibility:"visible",zIndex:3});
      $(".sub-tabm>li").removeClass("on");
      $(this).addClass("on");
      $(".sub-tabm-bar>span").animate({width:16.5+($(this).index())*33.33333+"%"},500);
      $(".sub-airplane").animate({left:16.5+($(this).index())*33.33333+"%"},500);
   });
   
   //서브 탭 02 
   
   $(".sub-tabcon02>div").eq(0).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
   $(".sub-tabm02>li").eq(0).addClass("on");
   
   $(".sub-tabm02>li").on("click",function(){
     var i= $(this).index();
      $(this).parent().next().children("div").eq(i).css({visibility:"visible"}).siblings().css({visibility:"hidden"});
      $(this).addClass("on").siblings().removeClass("on");
   });
   
   
   //객실 레이아웃 팝업창
   
   $(".sub-close").on("click",function(){
     $(".layout01").removeClass("on");  
     $(".layout-bg").removeClass("on");
      $(".layout-tabm>li").removeClass("on");
    $(".layout-tabcon>figure").removeClass("on");
   });
   
   $(".layout1").on("click",function(){
     $(".layout01").addClass("on");  
     $(".layout-bg").addClass("on");
      $(".layout-tabm>li").eq(0).addClass("on");
    $(".layout-tabcon>figure").eq(0).addClass("on");
   });
   
   
   $(".layout-tabm>li").on("click",function(){
      var i=$(this).index();
      $(".layout-tabcon>figure").eq(i).addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on");
   });
   
      $(".sub-close2").on("click",function(){
     $(".layout02").removeClass("on");  
     $(".layout-bg").removeClass("on");
      $(".layout-tabm2>li").removeClass("on");
    $(".layout-tabcon2>figure").removeClass("on");
   });
   
   $(".layout2").on("click",function(){
     $(".layout02").addClass("on");  
     $(".layout-bg").addClass("on");
      $(".layout-tabm2>li").eq(0).addClass("on");
    $(".layout-tabcon2>figure").eq(0).addClass("on");
   });
   
   
   $(".layout-tabm2>li").on("click",function(){
      var i=$(this).index();
      $(".layout-tabcon2>figure").eq(i).addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on");
   });
   
   $(".sub-close3").on("click",function(){
     $(".layout03").removeClass("on");  
     $(".layout-bg").removeClass("on");
      $(".layout-tabm3>li").removeClass("on");
    $(".layout-tabcon3>figure").removeClass("on");
   });
   
   $(".layout3").on("click",function(){
     $(".layout03").addClass("on");  
     $(".layout-bg").addClass("on");
      $(".layout-tabm3>li").eq(0).addClass("on");
    $(".layout-tabcon3>figure").eq(0).addClass("on");
   });
   
   
   $(".layout-tabm3>li").on("click",function(){
      var i=$(this).index();
      $(".layout-tabcon3>figure").eq(i).addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on");
   });
   
         $(".sub-close4").on("click",function(){
     $(".layout04").removeClass("on");  
     $(".layout-bg").removeClass("on");
      $(".layout-tabm4>li").removeClass("on");
    $(".layout-tabcon4>figure").removeClass("on");
   });
   
   $(".layout4").on("click",function(){
     $(".layout04").addClass("on");  
     $(".layout-bg").addClass("on");
      $(".layout-tabm4>li").eq(0).addClass("on");
    $(".layout-tabcon4>figure").eq(0).addClass("on");
   });
   
   
   $(".layout-tabm4>li").on("click",function(){
      var i=$(this).index();
      $(".layout-tabcon4>figure").eq(i).addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on");
   });
   
      $(".sub-close5").on("click",function(){
     $(".layout05").removeClass("on");  
     $(".layout-bg").removeClass("on");
      $(".layout-tabm5>li").removeClass("on");
    $(".layout-tabcon5>figure").removeClass("on");
   });
   
   $(".layout5").on("click",function(){
     $(".layout05").addClass("on");  
     $(".layout-bg").addClass("on");
      $(".layout-tabm5>li").eq(0).addClass("on");
    $(".layout-tabcon5>figure").eq(0).addClass("on");
   });
   
   
   $(".layout-tabm5>li").on("click",function(){
      var i=$(this).index();
      $(".layout-tabcon5>figure").eq(i).addClass("on").siblings().removeClass("on");
      $(this).addClass("on").siblings().removeClass("on");
   });
   
   $(window).on("scroll",bgY);
      function bgY() {
         var sct=$(window).scrollTop();
         var this_top=$(".slogan").offset().top-400;
         console.log(this_top);
         //console.log(sct);
         var this_h=$(".slogan").height();
         if(sct>this_top && sct<this_top+this_h){
            console.log(sct);
            $(".slogan").css({backgroundPositionY:-(sct-this_top)/2});
         }
      }
   

});


