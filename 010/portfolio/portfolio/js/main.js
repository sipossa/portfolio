$(function(){
//-------------------------------

new fullpage('#fullpage', {
    anchors: ['main', 'project01', 'project02', 'project03', 'project04', 'project05', 'project06', 'profile'],
    keyboardScrolling: true,
    responsiveWidth:769,

    afterLoad: function(origin, destination, direction){
      let txt = $('.section').eq(destination.index).find('strong').text();
      $('.pg').text(txt);
      $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
      $('.gnb .dot').eq(destination.index).addClass('on').parent().siblings().find('.dot').removeClass('on');
     
      $('.now').text(txt);
      destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut();
      destination.index==0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
  },

  });

  $('.gnb .dot').on('click', function(){
    $(this).addClass('on');
    $(this).parent().siblings().find('.dot').removeClass('on');
  });

  $('.mopen').on('click', function(){
    $(this).toggleClass('on');
    $('.content').slideToggle();
  });

  $('.content a').on('click', function(){
    $('.content').slideUp();
    $('.mopen').removeClass('on');
  })


  $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
    
   });


//-------------------------------
})