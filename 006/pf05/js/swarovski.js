$(function(){
   $('.s02-slider').slick({
     centerMode: true,
     autoplay:true,
      autoplaySpeed: 1800,
      centerPadding: '120px',
      prevArrow:"<div class='prev'>prev</div>",
      nextArrow:"<div class='next'>next</div>",
      dots:true,
     slidesToShow: 3,
      responsive: [
    {
      breakpoint: 768,
      settings: {
         autoplay:true,
        centerPadding: '0px',
        slidesToShow: 1,
         prevArrow:"<div class='prev'>prev</div>",
         nextArrow:"<div class='next'>next</div>",
      }
    },
  ],
   });
   
   $(".s02-item").eq(4).addClass("on");
   $('.s02-slider').on("afterChange",function(event, slick, currentSlide, nextSlide){
      $(".s02-item").removeClass("on");
      $(".s02-item").eq(currentSlide+4).addClass("on");
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
   
   $(".bottom-wrap").on("mousemove", function(e){
       console.log(e.pageX);
      $(this).css({left:50+e.pageX/50+"%"})
   });
   
   $(window).on("scroll",function(){
     if($(window).scrollTop() > $("#s05").offset().top-500){
        $(".s05-right>img").addClass("on");
        }
      else{
         $(".s05-right>img").removeClass("on");
      }
   });
    
    $(window).on("scroll",function(){
        var vH=$("#main-v video").height();
      if($(window).scrollTop() > vH && $(window).width() > 769){
          $("header").addClass("on");
          $("nav").addClass("color");
      } else{
          $("header").removeClass("on");
          $("nav").removeClass("color");
      }
    });
   
   
   $(window).on("scroll",function(){
     if($(window).scrollTop() > 300){
        $("#top").addClass("on");
     }else{
        $("#top").removeClass("on");
     }
   });
    
   $("#top").on("click",function(){
     $ ("html,body").animate({scrollTop:0},500);
   });
   
   
   //모바일 메뉴버튼

      $("#m-btn").on("click",function(){
         $("nav").toggleClass("on");
         $(this).toggleClass("on");
      });
    
    //모바일네비
    $(window).on("resize",function(){
          if($(window).width() <= 768){  
          $("nav").addClass("color")
        }else{
            $("nav").removeClass("color")
    }  
    });
    if($(window).width() < 769 && $(window).height() >=0){  
          $("nav").addClass("color")
        }
    $(window).on("scroll",function(){
        var vH=$("#main-v video").height();
      if($(window).scrollTop() >= 0 && $(window).width() < 769){
          $("nav").addClass("color");
      }
    });
    
    //모바일 다단메뉴
    $("nav>ul>li>a").on("click",function(){
      if($("nav").hasClass("on")){
         $(this).parent().siblings().find("a").removeClass("on");
            $(this).toggleClass("on");
      }
   })

    
});