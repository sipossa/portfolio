$(document).ready(function(){
//제이쿼리 시작

    $("nav a, .menubg a").click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({scrollTop:$(this.hash).offset().top},500);
        $(this).parent().addClass("oo").siblings().removeClass("oo");
        $("header>div").toggleClass("oo");
        $(".menubg").fadeOut();
    });
    
    $(".menubg a").click(function(e){
        e.preventDefault();    
        $(".m-bar").toggleClass("on")
    });
    
//퀵메뉴 
    $(".m-bar").click(function(){
        $(this).toggleClass("on");
        $(".menubg").fadeToggle();
    });
    
//오시는길 팝업    
    $(".map-icon").on("click",function(){
        $(".map").show("on")
    });    
    $(".map>i").on("click",function(){
        $(".map").hide("on")
    }); 
    
//예약안내 팝업    
    $(".res").on("click",function(){
        $(".reservation").show("on")
    });    
    $(".reservation>i").on("click",function(){
        $(".reservation").hide("on")
    });     

//헤드 따라다니기    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 100){        
        $(".head").addClass("on"); 
        }else{
        $(".head").removeClass("on");     
        }
    });     

//민박소개 슬라이드    
    $(".about").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });

//room 팝업창    
    $(".room01-01").on("click",function(){
        $(".room01").show("on")
        $(".room01-s").slick('setPosition');
    });    
    $(".room01>div>i").on("click",function(e){
        $(".room01").hide("on")
        e.preventDefault();
    });  
    $(".room02-01").on("click",function(){
        $(".room02").show("on")
        $(".room02-s").slick('setPosition');
    });    
    $(".room02>div>i").on("click",function(e){
        $(".room02").hide("on")
        e.preventDefault();
    });       
    $(".room03-01").on("click",function(){
        $(".room03").show("on")
        $(".room03-s").slick('setPosition');
    });    
    $(".room03>div>i").on("click",function(e){
        $(".room03").hide("on")
        e.preventDefault();
    }); 
    $(".room04-01").on("click",function(){
        $(".room04").show("on")
        $(".room04-s").slick('setPosition');
    });    
    $(".room04>div>i").on("click",function(e){
        $(".room04").hide("on")
        e.preventDefault();
    });         
//room 슬라이드
    $(".room01-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });    
    $(".room02-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
    $(".room03-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  
    $(".room04-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });      
//room슬라이드 버튼    
    $(".prev").on("click",function(){
        $(".room01-s").slick("slickPrev");          
    });
    $(".next").on("click",function(){
        $(".room01-s").slick("slickNext");          
    });    
    
    $(".prev02").on("click",function(){
        $(".room02-s").slick("slickPrev");          
    });
    $(".next02").on("click",function(){
        $(".room02-s").slick("slickNext");          
    }); 

    $(".prev03").on("click",function(){
        $(".room03-s").slick("slickPrev");          
    });
    $(".next03").on("click",function(){
        $(".room03-s").slick("slickNext");          
    }); 
    $(".prev04").on("click",function(){
        $(".room04-s").slick("slickPrev");          
    });
    $(".next04").on("click",function(){
        $(".room04-s").slick("slickNext");          
    });   
//pool 슬라이드
    $(".pool-s").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });   
//포토카드 슬라이드
    $(".photo-s").slick({ 
        autoplay:true,
        autoplaySpeed:3000,        
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        pauseOnFocus: false,
        pauseOnHover:false,
        draggable:false,
    });
//포토카드 텍스트 
    $(".photo-t").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
        draggable:false,
    });   
    
// 탑버튼
    $(".top").on("click",function(event){
        var offset = $("body").offset();
        $('html').animate({scrollTop:offset.top},400);
    });    
    
//풀페이지     
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
	setTimeout(delta,200);
});
});

//제이쿼리 끝
});




