$(function(){
//------------------------------------------------------------------
  $(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0) {
        $('#header').addClass('on');
    }else{
        $('#header').removeClass('on');
    }
  });


  $('.lang').on('click', function(){
    $('.lang .kor').toggleClass('on');
    $('.lang .eng').toggleClass('on');
});


 var mS=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    /*dots:true,*/
    focusOnSelect:true,
  });

  $('#main_visual .main_slider .slick-dots li').eq(0).addClass('animation_active')

  mS.on('afterChange', function(e,s,c){  
    $('#main_visual .main_slider .slick-dots li').eq(c).addClass('animation_active').siblings().removeClass('animation_active');
  });


  AOS.init();


  $('#content_04 .slider>div').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnFocus:false,
    vertical:true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },

      {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },



    ]
  
  });




  $('.mopen').on('click', function(){
    $(this).toggleClass('on');
    $('nav').toggleClass('on');
    $('.mopen .xi-bars').toggleClass('on');
  });

  $('nav>ul>li>a').on('click', function(){
    if($('nav').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.sub_menu').slideUp();  
    }
  });


  $('#content_01 .more').on('click', function(){
    $('#content_01 .case').slideToggle(500);
    $(this).toggleClass('on');
});



  $('#content_03 .more_m').on('click', function(){
    $('#content_03 .case').slideToggle(500);
    $(this).toggleClass('on');
});

//------------------------------------------------------------------
});