$(function(){
//-------------------------------

new fullpage('#fullpage', {
    anchors: ['main', 'project01', 'project02', 'project03', 'project04', 'project05', 'project06', 'profile'],
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

  $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
    
   });


//-------------------------------
})