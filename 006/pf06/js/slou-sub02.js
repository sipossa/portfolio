$(function(){


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
   
   $(".tab-con>div").hide();
   $(".tab-con>div").eq(0).show();
   $(".tab-m li").eq(0).addClass("on");
   
      $(".tab-m li").on("click",function(){
         $(".tab-con>div").hide();
         $(".tab-con>div").eq($(this).index()).show();
         $(".tab-m li").removeClass("on");
         $(this).addClass("on");
         
     });
   
   
   $('.s05-slider').slick({
  //autoplay: true,
  autoplaySpeed: 2000,
   prevArrow:"<div class='prev'><i class='xi-angle-left-thin'></i></div>",
   nextArrow:"<div class='next'><i class='xi-angle-right-thin'></div>",
      dots:true,
});

});
