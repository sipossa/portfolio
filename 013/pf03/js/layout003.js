$(function(){
    //-------반응형 ----------------
    // $('.open').on('click', function(){
    //     $('nav').toggleClass('on')
    // });

    //-------반응형 ----------------
    $('#mobile-menu').on('click', function(){
        $('nav').toggleClass('on')
    });

    $('#mobile-menu').click(function(){
        $(this).toggleClass('on');

    });

    $('nav>ul>li>a').on('click', function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    });

    //-------헤더 온 ----------------
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on')
        }else{
            $('#header').removeClass('on')
        }
       
    });

//------------반응형에서만 슬릭 돌리는거
   var Rsd = $('.stip');

   var slickOptions = {
      infinite: true,
      slidesToShow: 1,
      autoplay:true,
      autoplaySpeed:3000,
      centerMode:false,
      dots:true,
      arrows:false
   };

   $(window).on('load resize', function() {
      if($(window).width() > 768) {
         Rsd.slick('unslick');
      }else{
         Rsd.not('.slick-initialized').slick(slickOptions);
      }
   });

    //-------------메인 동영상--------
    $("#m01").YTPlayer({
        videoURL:'dzb6oIAuinY', 
        containment:'#main_visual', 
        autoPlay:true, 
        mute:true, 
        startAt:4, 
        stopAt:27,
        opacity:1,
        loop:true,
        showControls:false,  
        quality:'highres',
    });
    //-------------
    $('.slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4, 
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,               
              }
            },
    
         ]       
    });
    //----------탭메뉴 온---------------
    $('.tab_manu li').on('click', function(){ 
        var $this= $(this); 
        var idx=$(this).index(); 
       $('.customer>div').eq(idx).addClass('on').siblings().removeClass('on');
       $this.addClass('on').siblings().removeClass('on'); 
    });

    //-------------
    $('#section01 i.xi-angle-left-min').on('click', function(){
        $('.slider').slick('slickPrev');
    });
    $('#section01 i.xi-angle-right-min').on('click', function(){
        $('.slider').slick('slickNext'); 
    });

    //-------------
    $('.con').slick({
        slidesToShow: 1,   
        arrows: false,        
        focusOnSelect: true,
        centerMode:true,
        centerPadding:'500px',
        asNavFor: '.sm',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                centerMode:false,               
              }
            },
    
         ] 

      });
      $('.sm').slick({
        slidesToShow: 1,
        asNavFor: '.con',
        fade: true,
        focusOnSelect: true,
        arrows: false,
      });

    //-------------
    $('#section02 .icon i.xi-angle-left-min').on('click', function(){
        $('.sm').slick('slickPrev');
    });
    $('#section02 .icon i.xi-angle-right-min').on('click', function(){
        $('.sm').slick('slickNext'); 
    });

    //-------------
    
    $('#section02 .container li').eq(0).addClass('active');

    $('#section02 .container li').on('click', function(){
        var idx=$(this).index();
        $(this).addClass('active').siblings().removeClass('active'); 
        $('.con').slick('slickGoTo', idx); 
    });
       
    $('.sm').on('afterChange', function(e,s,c){
        $('#section02 .container li').eq(c).addClass('active').siblings().removeClass('active');
    })

    //-------------   

    $('.conslide figure').eq(2).addClass('on')
    $('.conslide').on('afterChange', function(e,s,c){
        $('.conslide figure').eq(c+2).addClass('on').siblings().removeClass('on');
    });



    //----------------
    AOS.init();
   //----------------
 


});