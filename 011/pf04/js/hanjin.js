$(function(){
    //-----------------------------------------

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2800,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        
    });
        //메인슬라이드버튼
        $('#main_visual .btn i.xi-angle-left-thin').on('click', function(){
            $('.main_slider').slick('slickPrev')
        });
        $('#main_visual .btn i.xi-angle-right-thin').on('click', function(){
            $('.main_slider').slick('slickNext')
        });
        
    
    $('.main_slider figure').eq(1).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        //console.log(c);
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    })





    
    //사업분야
    
    $('.b_item01').slick({
        arrows:false,
        autoplay:true,        
        pauseOnHover:false,
        autoplaySpeed:2500,
        asNavFor: '.b_sr'
    
    });
    $('.b_sr').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:2500,
        asNavFor: '.b_item01',
        slidesToShow:1,
    });
    
    
    
    $('.b_sr figure').eq(1).addClass('on');
    $('.b_sr').on('afterChange', function(e,s,c){ 
        
        $('.b_sr figure').eq(c+1).addClass('on').siblings().removeClass('on'); //c+숫자 숫자는 slidesToShow:에서 몇개가 표시되느냐에 따라 달라짐,
        
    });

    
    
    
    $('.b_item01').on('afterChange', function(e,s,c){
        $('.it_slider .num').text('0' + (c+1))
    })
    
    
    $('#content03 .bt i.xi-angle-left-thin').on('click', function(){
        $('.b_sr').slick('slickPrev')
    });
    $('#content03 .bt i.xi-angle-right-thin').on('click', function(){
       $('.b_sr').slick('slickNext')
    });
    
    
    
    $('.pr01').slick({
        arrows:false,
        autoplay:true,
        vertical :true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        // dots:true,
    });
    
    AOS.init();


    //클릭시 탑
    
    $('#toTop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 600) //누르면 밑에서 위로,600은 시간(2초동안 올라감)
    });

    $(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    if(sct>2900) {
        $('#toTop').fadeIn()
    }else{
        $('#toTop').fadeOut()
    }
    });
  
    


    //반응형 컨트롤


$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});


$('.depth01>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
    
});

$(window).on('resize', function(){
    $('.depth02').removeAttr('style')
})

    //-----------------------------------------
    })


