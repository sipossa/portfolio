$(function(){
      
      $("#slider").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow:"<div class='prev'><div>",
         nextArrow:"<div class='next'><div>",
         dots:true,
      });
         
      $(".tab-m>li").eq(0).addClass("on");
//   $(".tab-slick").hide();
//   $(".tab-slick").eq(0).show();
      $(".tab-slick").css({visibility:"hidden"});
      $(".tab-slick").eq(0).css({visibility:"visible"});
      //$(".tab-left").css({visibility:"hidden"});
      //$(".tab-left").eq(0).css({visibility:"visible"});
      $(".tab-con02").css({visibility:"hidden"});
      $(".tab-con02").eq(0).css({visibility:"visible"});
      //$(".tab-bcon>div").hide();
     // $(".tab-bcon>div").eq(-10).show();
      //$(".b-con>div").hide();
      //$(".b-con>div").eq(0).show();
      //$(".tab-fcon>div").hide();
      //$(".tab-fcon>div").eq(-8).show();
      //$(".f-con>div").hide();
      //$(".f-con>div").eq(0).show();
      //$(".tab-scon>div").hide();
      //$(".tab-scon>div").eq(-6).show();
      //$(".s-con>div").hide();
      //$(".s-con>div").eq(0).show();
   
   
   $(".tab-slick01").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<div class='prev'><div>",
      nextArrow:"<div class='next'><div>",
      dots:true,
      asNavFor: ".tab-c-slide01,.b-con",
      focusOnSelect: true,
   });
   
   $(".tab-c-slide01").slick({
      asNavFor: ".tab-slick01, .b-con",
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   
   $(".b-con").slick({
      asNavFor: '.tab-slick01, .tab-c-slide01',
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   
   $(".tab-slick02").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<div class='prev'><div>",
      nextArrow:"<div class='next'><div>",
      dots:true,
      asNavFor: ".tab-c-slide02,.f-con",
      focusOnSelect: true,
   });
   
   $(".tab-c-slide02").slick({
      asNavFor: '.tab-slick02, .f-con',
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   
   $(".f-con").slick({
      asNavFor: '.tab-slick02, .tab-c-slide02',
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   
      $(".tab-slick03").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<div class='prev'><div>",
      nextArrow:"<div class='next'><div>",
      dots:true,
      asNavFor: ".tab-c-slide03,.s-con",
      focusOnSelect: true,
   });
   
   $(".tab-c-slide03").slick({
      asNavFor: '.tab-slick03,.s-con',
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   
      $(".s-con").slick({
      asNavFor: '.tab-slick03,.tab-c-slide03',
      focusOnSelect: true,
      prevArrow:false,
      nextArrow:false,
   });
   

   
   $(".tab-m>li").on("click",function(){
//      $(".tab-slick").hide();
//      $(".tab-slick").eq($(this).index()).show();
      $(".tab-slick").css({visibility:"hidden"});
      $(".tab-slick").eq($(this).index()).css({visibility:"visible"});
      $(".tab-m>li").removeClass("on");
      $(this).addClass("on");
      $(".tab-left>div").css({visibility:"hidden"});
      $(".tab-left>div").eq($(this).index()).css({visibility:"visible"});
      $(".tab-con02>div").css({visibility:"hidden"});
      $(".tab-con02>div").eq($(this).index()).css({visibility:"visible"});
   });
   
   
});