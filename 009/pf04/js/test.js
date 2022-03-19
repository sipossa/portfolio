$(function(){
    // ------------------------

     // header ///
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
         $('#header').addClass('on')
        }else{
         $('#header').removeClass('on')
        }
    });



    // visual video ///
    $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/eZOInt9eMek',
        containment:'#visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });



    // mopen ///
    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
    
    // nav ///
    $('.depth01>li>a').on('click',function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth02').slideUp();
        }
    });



    // #cont02 pr_slider ///

    $('.pr_slider').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            },
           
          ]
    });


    

    $('.pr_slider figure').eq(4).addClass('on')
    $('.pr_slider').on('afterChange',function(e,s,c){
        
       $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');

    });


    // #cont02 리스트 ///

    $("#cont02 ul li").eq(1).addClass("on");
    $("#cont02 .pr_slider").on('afterChange', function(e,s,c){
        $(window).width() < 768 ? $("#cont02 ul li").eq(c).addClass("on").siblings().removeClass("on")
        : $("#cont02 ul li").eq(c+1).addClass("on").siblings().removeClass("on")
    });
  
    $("#cont02 ul li").on('click', function(){
        var idx=$(this).index();
        $(window).width() < 768 ? $("#cont02 .pr_slider").slick('slickGoTo',  idx)  : $("#cont02 .pr_slider").slick('slickGoTo', idx-1);
        $(this).addClass("on").siblings().removeClass("on");
    });

       
   
   
   
    // aos mobie-none //
    
    AOS.init({
        disable: 'mobile',
    });





    // #cont06 tab //

    $('#cont06 li').on('click',function(){
        var idx=$(this).index();
        // console.log(idx);
        $(this).addClass('on').siblings().removeClass('on');
        $('#cont06 .tab_cont>div ').eq(idx).addClass('on').siblings().removeClass('on');
     });



   // #cont06 video //

    // $('#mv01').YTPlayer({
    //     videoURL:'https://youtu.be/RKlbViql5i0',
    //     containment:'self',
    //     autoPlay:true, 
    //     mute:true, 
    //     startAt:0, 
    //     opacity:1,
    //     showControls:false,
    //     playOnlyIfVisible:true,
    //     optimizeDisplay:false,
    // });




    // footer family //

    $('#footer ul li span').on('click',function(){
        $('#footer .fam').slideToggle();
    });

    
    // footer award_box //
    $('#footer .award').on('click',function(){
        $('#footer .award_box').fadeToggle(100);
    });

    $('#footer .award_box>a>i').on('click',function(){
        $('#footer .award_box').fadeOut(100);
    });
    



    // ------------------------
});