$(document).ready(function(){
//제이쿼리 시작

$("nav a, .menubg a").click(function(e){
	e.preventDefault();
	$("html,body").stop().animate({scrollTop:$(this.hash).offset().top},500);
	$(this).parent().addClass("oo").siblings().removeClass("oo");
	$("header>div").toggleClass("oo");
	$(".menubg").fadeOut();
});

$("header>div").click(function(){
	$(this).toggleClass("oo");
	$(".menubg").fadeToggle();
});
    
    $(".slide").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        fade: true,
//        arrows:false,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
    });

    $(".e_slide").slick({
        autoplay:true,
        autoplaySpeed:2000,
        centerMode: true,
        slidesToShow:5,
        variableWidth: true,
        prevArrow:"<div class='prev'><h3>PREV</h3><span></span></div>",
        nextArrow:"<div class='next'><h3>NEXT</h3><span></span></div>",
    });
    $(".icon").click(function() {
        $('html, body').animate({
            scrollTop : 0}, 400);
            return false;
        });
    
    $(".cc").on("click",function(){
        $(".logein").toggle("on")
    });
    
              
var bbq=$(".content");
var lli=$("nav li");
var logo=$("header>h1");
bbq.eq(0).addClass("oo");
lli.eq(0).addClass("oo");

bbq.each(function(index){
	var $this=$(this);
	var $this_top=$this.offset().top;	
	$(window).on("scroll",function(e){
	e.preventDefault();
	var wc=$(window).scrollTop();		
		if(wc > $this_top - 100){
			$this.addClass("oo").siblings().removeClass("oo");
			lli.eq(index).addClass("oo").siblings().removeClass("oo");
			index==1||index==3 ? logo.css({color:"#ddd"}) : logo.css({color:"#333"});
		}		
	});
	var bhc=$(this).next().offset().top;
	var gyo=$(this).prev().offset().top;
	$this.on("mousewheel",function(e){
	e.preventDefault();
	console.log(event.wheelDelta);
	event.wheelDelta<0 ? delTa=bhc : delTa=gyo;
	function delta() {$("html,body").stop().animate({scrollTop:delTa},1100,"easeInOutExpo");}
	setTimeout(delta,100);
  
    });
});




//제이쿼리 끝
});





