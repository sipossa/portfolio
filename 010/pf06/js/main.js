$(function(){
//-----------------------

$('.main_visual').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    speed:3000,
    pauseOnFocus:false,
    pauseOnHover:false,
});

$('.left .banner_slider').slick({
    dots:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000.
});

$('.depart_mid').hide();
$('.depart_top .btn').on('click', function(){
    $('.depart_mid').slideToggle();
});

$('.media .tabmenu .menu>ul>li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
})

$('.menu ul>li').on('click', function(){

    var idx= $(this).index();
    //console.log(idx);
    $(this).addClass('on').siblings().removeClass('on');
    $('.content .con').eq(idx).addClass('on').siblings().removeClass('on');
    
});


$('.center_slider').slick({
    dots:true,
    arrows:false,
    autoplay:true,
    fade:true,
    pauseOnFocus:false,
    pauseOnHover:false,
    autoplaySpeed:4000,
    speed: 2000,
});


$(window).on("scroll", function(){
    if ($(window).scrollTop() > 100) {
    $('.gotop').addClass('on');
    } else {
    $('.gotop').removeClass('on');
    }
});

$('.gotop').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

//-------------------------


$('.m_open i').on('click',function(){
    $('.gnb').toggleClass('on');
});

$('.gnb>ul>li>a').on('click', function(){
    if ($(window).width() < 769 ) {

        $(this).next().slideToggle();
        $(this).parents().siblings().find('.sub').slideUp();

    }
    
});

$('.reserv .reservtd .open').on('click',function(){
    $(this).next().toggleClass('on');
});


//---------------------------------
AOS.init({
    disable: 'mobile',
    disable: function() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
    
  });

  $(window).on('resize', function(){
    if($(window).width()>768)
        $('.sub').removeAttr("style");
    
   });

    
//--------------------------
})