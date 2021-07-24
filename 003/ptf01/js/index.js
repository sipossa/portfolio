



$(function(){
    // header

    $(window).on('scroll',function(){
        var mot=$('#menu-slider').offset().top;
        var sct=$(window).scrollTop();
            if(sct>mot-50){
                $('header').addClass('on')
            }else{
                $('header').removeClass('on')
            }
                        

    })

    // 메뉴 슬라이더
    $('.beer-slider').slick({
      arrows:false,
      vertical:true,
      asNavFor:'.text-slider ',
      
      autoplay:true,
      autoplaySpeed:5000,
      pauseOnHover:false,
      pauseOnFocus:false,
      
    });

    $('.xi-caret-up-min').click(function(){
        $('.beer-slider').slick('slickPrev');
    });
    $('.xi-caret-down-min').click(function(){
        $('.beer-slider').slick('slickNext');
    });
    $('.xi-caret-up-min').click(function(){
        $('.visual-slider').slick('slickPrev');
    });
    $('.xi-caret-down-min').click(function(){
        $('.visual-slider').slick('slickNext');
    });
    




    $('.text-slider').slick({
        arrows:false,
        asNavFor:'.visual-slider ',
        fade:true,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        
    });
     



    $('.visual-slider').slick({
        arrows:false,
        
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });


    // 이벤트

    $('.event-slider').slick({
        arrows:false,
        
        slidesToShow: 6, 
    });

    $('.event-slider').on('mousemove',evMove);
    function evMove(e){
        if(e.pageX < $(this).width() / 2){
            $('.event-slider').slick('slickPrev');
        }else{
            $('.event-slider').slick('slickNext');
        }
    }








})