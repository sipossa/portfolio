$(function(){
    //----------------------------------------
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
            
        }
       
    });

    $('#main_visual .btn01 img').on('click', function(){
        $('.main_slider').slick('slickNext')
    });
   





    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:4000,
        //<<위로 움직이는 슬라이드  vertical:true,
        //<<흐려졌다 나오기 fade:true,
    
    });



    
    
    $('.best_item01').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:2000,
        asNavFor: '.best_sr'
    
    });
    $('.best_sr').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:2000,
        asNavFor: '.best_item01',
        slidesToShow:2,
    });


    $('#content01 .bt i.xi-angle-left-thin').on('click', function(){
        $('.best_sr').slick('slickPrev')
    });
    $('#content01 .bt i.xi-angle-right-thin').on('click', function(){
        $('.best_sr').slick('slickNext')
    });
    


    //제품 슬라이드
    $(".pr_slider").slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 4,
        autoplaySpeed:2000,
        
    });
    
    $('#content04 .btn i.xi-angle-left-thin').on('click', function(){
        $('.pr_slider').slick('slickPrev')
    });
    $('#content04 .btn i.xi-angle-right-thin').on('click', function(){
        $('.pr_slider').slick('slickNext')
    });
    
    
    
    //누르면 위로가는 버튼
    
    $('#toTop').on('click', function(){
        $('html, body').animate({scrollTop:0},900) //누르면 밑에서 위로,600은 시간(2초동안 올라감)
   });

    $(window).on('scroll', function(){
    var sct=$(window).scrollTop();
     if(sct>4000) {
        $('#toTop').fadeIn()
    }else{
        $('#toTop').fadeOut()
    }
    });
    
    
    
    //--------------------------------------------
    
    })