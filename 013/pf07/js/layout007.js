$(function(){ 

    //-----팝업창 슬라이드-----
    $('.pop ul').slick({
        autoplay:true,
        autoplaySpeed:3000, 
        dots:false,
        fade: true,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover:false,
    });  


    //-----팝업 아이콘 온 붙이기-----
    $(".pause").on("click",function(){
        $(".pop ul").slick("slickPause")
    });    
    $(".xi-angle-up-min").on("click",function(){
        $(".pop ul").slick("slickPrev")
    });    
    $(".pop .xi-angle-down-min").on("click",function(){
        $(".pop ul").slick("slickNext")
    });  
  
    $('.close').on('click', function(){
        $(this).parent().parent().slideUp();
    });
    //-----랭귀지 클라스에 온 붙이기-----
    $('.language').on('click',function(){
        $(this).toggleClass('on') 
    });
 
    $('.txt_slide').slick({ 
        dots:true,
        arrows:false,
        autoplay:800,
    });  


    //-----탭메뉴-----
    $('.tab_menu li').on('click', function(){ 
        var $this= $(this);
        var idx=$(this).index();  
    //    console.log($this,idx);
    //    $('.tab_content ul').eq(idx).show().siblings().hide();
       $('.tab_content ul').eq(idx).addClass('on').siblings().removeClass('on');
       $this.addClass('on').siblings().removeClass('on'); 
    });


    //-----같은계급 온 붙여서 호버 만들기-----
    // $('nav').on('mouseenter', function(){
    //     $('h1').addClass('on')
    // });
    // $('nav').on('mouseleave', function(){
    //     $('h1').removeClass('on')
    // });

    // $('nav').on('mouseenter', function(){
    //     $('.menu').addClass('on')
    // });
    // $('nav').on('mouseleave', function(){
    //     $('.menu').removeClass('on')
    // })


    //-----숫자카운트-----
    function cU(){
        $('.count_number').counterUp({
            delay:50,
            time:800,
        });                  
    }
    var cu0=0;
    $(window).on("scroll", function(){
        if($(window).width() > 768){
            if($(window).scrollTop() > 1000){
                if(cu0!=1){
                    cU();
                    cu0=1;
                }                        
            }else{
                cu0=0;
            }

        }
       

    })
    //--------섹션03 화살표------------
    $('.xi-angle-left-thin').on('click', function(){
        $('.toSlide').slick('slickPrev');
    });
    $('.xi-angle-right-thin').on('click', function(){
        $('.toSlide').slick('slickNext'); 
    });

    //-------섹션03 슬라이드----------
    $('.toSlide').slick({
        dots:false,
        slidesToShow: 3,
        arrows:false,
        autoplay:1000,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1, 
                autoplay:true,              
              }
            },
    
         ] 
    });  

    //------섹션04 슬라이드---------
    $('.s_right').slick({
        dots:true,
        slidesToShow: 1,
        arrows:false,
        autoplay:300,
        // asNavFor: '.s_left',
    }); 
    // $('.s_left').slick({
    //     dots:false,
    //     slidesToShow: 1,
    //     arrows:false,
    //     fade: true,
    //     asNavFor: '.s_right',
    // }); 

    //------반응형 내비 메뉴 아이콘-------------
    $('#m_menu').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');  
    });

    $('.depth02_wrap>.container>ul>li>a').on('click', function(){
        if($('nav').hasClass('on')){ 
            $('.depth02_wrap ul ul').stop().slideUp();           
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function(){
        $('.depth02_wrap ul ul').removeAttr('style');
    })

}); 