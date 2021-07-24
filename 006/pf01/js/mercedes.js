$(document).ready(function(){
  $(".slider01").slick({
      autoplay:true,
      prevArrow:("<div class='prev'></div>"),
      nextArrow:("<div class='next'></div>"),
      dots:true,
  });

    
    $(".tab-color>li").on("click",function(){
        $("#tab .tab-car>div").hide();
        $("#tab .tab-car>div").eq($(this).index()).show();
        $(".tab-color>li").removeClass("on");
        $(this).addClass("on");
    });
});