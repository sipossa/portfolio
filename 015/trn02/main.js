$(function(){

  $('#main').fullpage({
    anchors:['c01', 'c02','c03','c04','c05','footer'],
    // navigation: true,
    afterLoad: function(origin, destination, direction){
      let txt = $('.navbar>li').eq(destination.index).find('a').text();
      $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
      $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
      $('.now').text(txt);
      destination.index === 0 ? $('.header').fadeIn() : $('.header').fadeOut();
      destination.index === 0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
    },
  });

  $('.b_slider').slick({
    arrows:false,
    asNavFor: '.b_slider',
    autoplay: true,
  });

  // $('.brand_name li').on('click',(e)=>{
  //   $(this).addClass('on').siblings().removeClass('on');
  //   console.log(this);
  // })
  $('.brand_name li').on('click',function(){ 
    let idx= $(this).index();
    $('.b_slider').slick('slickGoTo',idx);
    // console.log(this);
  });

  $('.b_slider').on('afterChange', function(e,s,c){
    $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
  });


});