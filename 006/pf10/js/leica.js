$(document).ready(function(){
    $("#popup-top>span").on("click",function(){
      $("#popup-top").toggleClass("on")
    });
    
    
    $(".mslide01").slick({
    dots:true,
      //arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
        prevArrow:"<div class='prev'></div>",
        nextArrow:"<div class='next'></div>",
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive:[
            {breakpoint:768,
             settings:{
                 arrows:false,
             }
                
            }
        ]
    
    });
    
    $(".tab-m>li").eq(0).addClass("on");
    $(".tab-m>li").on("click",function(){
        $("#tab .tab-con>div").hide();
        $("#tab .tab-con>div").eq($(this).index()).show();
        $(".tab-m>li").removeClass("on");
        $(this).addClass("on");
    });
    
    $(".mslide02").slick({
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        prevArrow:"<div class='prev'><i class='xi-angle-left'</i></div>",
        nextArrow:"<div class='next'><i class='xi-angle-right'</i></div>",
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
    $(".close>span").on("click",function(){
        $("#popup").hide();
    });
    
    //모바일버튼
    $(".m-btn").on("click",function(){
        $("nav").toggleClass("on");
        $(this).toggleClass("on");
    });
    
    $("nav>ul>li>a").on("click",function(){
      if($("nav").hasClass("on")){
         $(this).parent().siblings().find("a").removeClass("on");
            $(this).toggleClass("on");
      }
   });
})


