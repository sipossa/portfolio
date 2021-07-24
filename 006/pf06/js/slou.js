$(function(){

   
   
   $(".m-slider").slick({
      dots: true,
     infinite: true,
     speed: 500,
     fade: true,
     cssEase: 'linear',
      autoplay:true,
      autoplaySpeed:2000,
      prevArrow:"<div class='prev'><i class='xi-angle-left'></i></div>",
      nextArrow:"<div class='next'><i class='xi-angle-right'></div>",
      pauseOnHover:false,
   });
   
   $(".prev").on("click",function(){
      $(".m-slider").slick("slickPrev");
   });
   
   $(".next").on("click",function(){
      $(".m-slider").slick("slickNext");
   });
   
   $(".m-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
            console.log(nextSlide);
            $(".count").text(nextSlide+1+"/"+slick.slideCount);
            });
   
   $(".s04-slider").slick({
      dots: true,
      autoplay:true,
      autoplaySpeed:2000,
      prevArrow:"<div class='prev'><i class='xi-angle-left-thin'></i></div>",
      nextArrow:"<div class='next'><i class='xi-angle-right-thin'></div>",
   });
   
   
   $(".tab-con>div").hide();
   $(".tab-con>div").eq(0).show();
   $(".tab-m>div").eq(0).addClass("on");
   
      $(".tab-m>div").on("click",function(){
         $(".tab-con>div").hide();
         $(".tab-con>div").eq($(this).index()).show();
         $(".tab-m>div").removeClass("on");
         $(this).addClass("on");
         
     });
   
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

   

   
   
});
