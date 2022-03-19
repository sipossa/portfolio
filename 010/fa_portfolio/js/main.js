$(function(){
//-------------------------------

new fullpage('#fullpage', {
    anchors: ['main', 'fashion01', 'fashion02', 'fashion03', 'content01', 'content02', 'content03', 'web01', 'web02', 'web03', 'web04', 'web05', 'web06', 'profile'],
    keyboardScrolling: true,
    //responsiveWidth:769,

    afterLoad: function(origin, destination, direction){
      let txt = $('.section').eq(destination.index).find('strong').text();
      $('.pg').text(txt);
      $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
      $('.gnb a').eq(destination.index).addClass('on').siblings().removeClass('on');
  },

  });

  $('.gnb a').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });

  $('.mopen').on('click', function(){
    $(this).toggleClass('on');
    $('.content').slideToggle();
  });

  $('.content a').on('click', function(){
    $('.content').slideUp();
    $('.mopen').removeClass('on');
  });

  $('.fc_content').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    slidesToShow:5,
    centerMode:true,

    responsive: [ 
        { breakpoint: 768,
            settings: { slidesToShow: 1, centerMode:false, }
        },
    ]
});

  $('.xi-angle-left-thin').on('click', function(){
    $('.fc_content').slick('slickPrev');
  });
  $('.xi-angle-right-thin').on('click', function(){
    $('.fc_content').slick('slickNext');
  });

  $('.fc_content03').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


  $('.xi-angle-left-thin').on('click', function(){
    $('.fc_content03').slick('slickPrev');
  });
  $('.xi-angle-right-thin').on('click', function(){
    $('.fc_content03').slick('slickNext');
  });

  $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
    
   });


//-------------------------------
})