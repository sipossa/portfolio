$(function(){
  
   
    $("#portfolio").fullpage({      
        anchors:['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'profile'],
        css3:false,     
        navigation: true,
        controlArrows: false,
        autoScrolling:true,
        slideSpeed: 0,
        navigationPosition: 'left',
        

    });


    $( document ).mousemove(function( e ) {

    $('.hexagon' )    .parallax( 15 , e );
    $('.hexagon7' )    .parallax( 30 , e );
    $('.hexagon8' )    .parallax( 20 , e );
    $('.hexagon7-1' )    .parallax( 30 , e );
    $('.hexagon8-1' )    .parallax( 15 , e );

    });


    $(".site-img").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(".container_box").height();
        $(this).find("img").stop().animate({top:-(imgH-caseH+20)}, 3000)
    });
    $(".site-img").on("mouseleave", function(){
        $(this).find("img").stop().animate({top:0}, 1000)
    });



      if($(window).width() <= 800) {
          $(".site-img").on("mouseenter", function(){
              let imgH=$(this).find("img").height();
              let caseH2=$(".site-img").height();
              let siteEH=$(".site-exp").height();

              $(this).find("img").stop().animate({top:-(imgH+caseH2-siteEH)}, 3000)
          });
          $(".site-img").on("mouseleave", function(){
              $(this).find("img").stop().animate({top:0}, 1000)
          });
      }



$(".open").click(function(){
	$(this).toggleClass("on");
    $(".popup").toggleClass("on");
});
    
$(".popup a").click(function(e){
    $(".popup").toggleClass("on").siblings().removeClass("on");
   
    $(".open").removeClass("on");
    

});


})