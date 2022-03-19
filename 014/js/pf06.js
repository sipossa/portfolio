$(function(){
//------------------------------------------------------------------
  
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:7000,
        pauseOnHover:false,
        fade:true,
    });

    $('#main_visual .main_slider figure').eq(0).addClass('on');
    $('#main_visual .main_slider').on('afterChange', function(e,s,c){
        $('#main_visual .main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
    });



    $('.mopen').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
        $('.mopen .xi-apps').toggleClass('on');
        $('.mopen .xi-close').toggleClass('on');
    });



    $('nav>ul>li>a').on('click', function(){
        if($('nav').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_menu').slideUp();  
        }
    });



    $('.con02_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        slidesToShow: 4,
        slidesToScroll : 4,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll : 2,
              }
            },
    
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll : 2,
                }
              },
    
    
    
          ]
        
    });

    $('#content_02 .btn i.xi-angle-left').on('click', function(){  
        $('.con02_slide').slick('slickPrev')
    });
    
    $('#content_02 .btn i.xi-angle-right').on('click', function(){
        $('.con02_slide').slick('slickNext')
    });   

    AOS.init({

        // disable: function () {
        //   var desktop = 768;
        //   return window.innerWidth < desktop;
        // } // 768px 이하일 때 disable
      
      });


    
    $(function(){
        $('.tab_meun>li').on('click', function(){
            var $this= $(this);
            var idx= $(this).index(); 
            $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
            $this.addClass('on').siblings().removeClass('on');
        });
    });



    const con04 = $('.con04_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '30px',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll : 1,
                centerPadding: '5px',
              }
            },
    
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll : 1,
                }
              },
    
    
    
          ]

    });

    $('#content_04 .btn i.xi-angle-left').on('click', function(){  
        $('.con04_slider').slick('slickPrev')
    });
    
    $('#content_04 .btn i.xi-angle-right').on('click', function(){
        $('.con04_slider').slick('slickNext')
    });  
    
    $('.con04_slider figure').eq(4).addClass('on')
    con04.on('afterChange', function(e,s,c){
        //let this_s=$('.con04_slider').find('.slick-center');
        //console.log(this_s)  /*<-요게 찍히는지 확인하는거 this_s 는 this의 s(슬릭)이라는뜻 . 모바일때도 똑같이 하고싶다면 밑에처럼 if($(window)해서 적어보기!*/
        if($(window).width()>768){
            $('.con04_slider figure').eq(c+4).addClass('on').siblings().removeClass('on'); /*<-c+4는 앞에 4개의 클론이 있는거. 근데 내가헷갈리니까 그냥 1,2,3다 해보고 되는걸로 하자*/
        } else {
            $('.con04_slider figure').eq(c+2).addClass('on').siblings().removeClass('on');
        }
        
    });
    


    $('.top_b').on('click', function(){
        $('html, body').animate({scrollTop:0},800);
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        var wd=$(window).width();
        if (wd>768) {
            if(sct>400) {
                $('.top_b').fadeIn()
            }else{
                $('.top_b').fadeOut()
            }
        }
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        var wd=$(window).width();
        if (wd<768) {
            if(sct>400) {
                $('.top_b').fadeIn()
            }else{
                $('.top_b').fadeOut()
            }
        }
    });
//------------------------------------------------------------------
});