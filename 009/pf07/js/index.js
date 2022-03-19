$(function(){

    // mopen ///
    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });


    // search form//
    $('.search').on('click', function(){
        $(this).toggleClass('on');
        $('.searchForm').stop().slideToggle();
    });

   
    //  nav ///
    $('.depth02>li>a').on('click',function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth03').slideUp();
        }
    });
    
     //  nav ///
     if($(window).width() < 769) {
        $('.inner').eq(0).show();
     }
    $('.depth01>li>a').on('click',function(){
        if($(window).width() < 769) {
            $('.inner').hide();
            $(this).next().toggle();
            
        }
    });

     //  nav style 빼줌 ///
    $(window).on('resize',function(){
        $('#header .gnb .inner').removeAttr('style');
        });


   
      // visual video ///
      $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/NpW0iz52lVs',
        containment:'#visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });


    // 공지사항 ticker_02 //
    function tick2(){
		$('#ticker_02 li:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });
	}
	setInterval(function(){ tick2 () }, 3000);

   
    // news slider //
    $(".news_slider").slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        // vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });

    // result slider //
    $(".result_slider").slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });

    $('.tab_menu>li').on('click',function(){
        var $this=$(this); //자기자신
        var idx=$(this).index(); //자기자신의 번호 0 1 2
     //    console.log($this,idx);
         //    $('.tab_content>div').eq(idx).show().siblings().hide();
         $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
         $this.addClass('on').siblings().removeClass('on');
       });



    // tabmenu//
    
       $('.tab_menu li').on('click',function(){
        var idx=$(this).index();
        // $('.tab_cont>div').eq(idx).show().siblings().hide();
        $('.tab_cont>div').eq(idx).addClass('on').siblings().removeClass('on');
    });




     // tab_slider //
     $(".tab_slider").slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        
        // vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });

    // tab_slider02
     $(".tab_slider02").slick({
        autoplay:true,
        arrows:false,
        slidesToShow: 2,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        
        // vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });











    // to top & scroll_banner
    $('#scroll_banner li:nth-child(9)').on('click',function(){
        $('html,body').animate({scrollTop:0},600);
    });

    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
    $('#scroll_banner').css({top:300+sct})

    });


   
   
   
   
   
   
   
       // ---------------------------------------------
   });
