$(document).ready(function(){
   $(".main-slider").slick({
     autoplay:true,
     dots:true,
      prevArrow:"<div class='prev'></div>",
      nextArrow:"<div class='next'></div>",
   });
   $(".tab-m>ul>li").eq(0).addClass("on");
   $(".tab-con>div").hide();
   $(".tab-con>div").eq(0).show();
   
   $(".tab-m>ul>li").on("click",function(){
     $(".tab-con>div").hide(); 
     $(".tab-con>div").eq($(this).index()).show();
     $(".tab-m>ul>li").removeClass("on");
      $(this).addClass("on");
   });
});