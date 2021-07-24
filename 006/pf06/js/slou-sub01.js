$(function(){

   $('.s01-slider').slick({
      dots: false,
      autoplay:true,
      autoplaySpeed:2000,
      prevArrow:false,
      nextArrow:false,
     infinite: true,
     speed: 500,
     fade: true,
     cssEase: 'linear',
      pauseOnHover:false,
});
   
   //풀페이지
var bbq=$(".content");
//var lli=$("nav li");
//var logo=$("header>h1");
bbq.eq(0).addClass("oo");
//lli.eq(0).addClass("oo");

bbq.each(function(index){
	var $this=$(this);
	var $this_top=$this.offset().top;
   var lli=$(".guide li");
   bbq.eq(0).addClass("oo");
   lli.eq(0).addClass("oo");
	$(window).on("scroll",function(e){
	e.preventDefault();
	var wc=$(window).scrollTop();		
		if(wc > $this_top - 100){
			$this.addClass("oo").siblings().removeClass("oo");
			lli.eq(index).addClass("oo").siblings().removeClass("oo");
//			index==1||index==3 ? logo.css({color:"#ddd"}) : logo.css({color:"#333"});
		}		
	});
	var bhc=$(this).next().offset().top;
	var gyo=$(this).prev().offset().top;
	$this.on("mousewheel",function(e){
	e.preventDefault();
	console.log(event.wheelDelta);
	event.wheelDelta<0 ? delTa=bhc : delTa=gyo;
	function delta() {$("html,body").stop().animate({scrollTop:delTa},1100,"easeInOutExpo");}
	setTimeout(delta,200);
});
});
       $(function(){
        $(".guide a").on("click",function(){
            $("html,body").animate({scrollTop:$(this.hash).offset().top},500);
        });
    });
      $('.s02-img').slick({
           dots: false,
           infinite: true,
           speed: 500,
           fade: true,
           cssEase: 'linear',
         prevArrow:false,
         nextArrow:false,
         pauseOnHover:false,
         asNavFor: '.s02-text'
         });
   
         $('.s02-text').slick({
           dots: true,
           infinite: true,
           speed: 500,
           cssEase: 'linear',
         autoplay:true,
         autoplaySpeed:2000,
         prevArrow:false,
         nextArrow:false,
         pauseOnHover:false,
         asNavFor: '.s02-img',
         });
      
   $(".prev").on("click",function(){
      $(".s02-text").slick("slickPrev");
   });
   
   $(".next").on("click",function(){
      $(".s02-text").slick("slickNext");
   });
   
   $(".play").on("click",function(){
      $(".s02-text").slick("slickPlay");
   });
   $(".pause").on("click",function(){
      $(".s02-text").slick("slickPause");
   });
      
   
            $('.s03-text').slick({
           dots: true,
           infinite: true,
           speed: 500,
           cssEase: 'linear',
         autoplay:true,
         autoplaySpeed:2000,
         prevArrow:false,
         nextArrow:false,
         pauseOnHover:false,
         asNavFor: '.s03-img',
         });
   
   $('.s03-img').slick({
           dots: false,
           infinite: true,
           speed: 500,
           fade: true,
           cssEase: 'linear',
         prevArrow:false,
         nextArrow:false,
         pauseOnHover:false,
         asNavFor: '.s03-text'
         });
   
   $(".prev03").on("click",function(){
      $(".s03-text").slick("slickPrev");
   });
   
   $(".next03").on("click",function(){
      $(".s03-text").slick("slickNext");
   });
   
   $(".play03").on("click",function(){
      $(".s03-text").slick("slickPlay");
   });
   $(".pause03").on("click",function(){
      $(".s03-text").slick("slickPause");
   });
   
   
});
