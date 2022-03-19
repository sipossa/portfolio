$(function(){

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
            
        }
       
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2500,
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
    


//----제품슬라이드
$('.pro_sr').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    pauseOnHover:false,
    asNavFor: '.product02'

});
$('.product02').slick({
    arrows:false,    
    pauseOnHover:false,
    fade:true,
    speed:1200,
    asNavFor: '.pro_sr',
    slidesToShow:1,
});
//버튼
$('#content01 .bt i.xi-angle-left-thin').on('click', function(){
    $('.product02').slick('slickPrev')
});
$('#content01 .bt i.xi-angle-right-thin').on('click', function(){
    $('.product02').slick('slickNext')
});


$(window).on('scroll', function(){
    let sct=$(window).scrollTop();
    let bt=$(window).outerHeight(true);
    $('.con03').each(function(){
        let secTop = $(this).offset().top;
        let this_h = $(this).outerHeight(true);
        console.log(bt,this_h)
        sct > secTop - (bt-this_h)/2 -200 ? $(this).addClass('on') : $(this).removeClass('on');
    })

});  


$("#mv01").YTPlayer({
    videoURL:'https://www.youtube.com/embed/hSmW468U6lg',
    containment:'#content04',  
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1, 
    showControls:false,

}); 
 
  
    
$('#banner .itm06').on('click', function(){
    $('html, body').stop().animate({scrollTop:0}, 500);
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();

    $('#banner').css({top:300+sct});
});

//-----------------------------------------------------------

$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});

$('#header .mopen').on('click', function(){
    $('nav').toggle();
});

$(window).on('resize', function(){
    $('nav').removeAttr('style');
});

})