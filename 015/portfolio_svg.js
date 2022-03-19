$(function(){
  //-----------------------------------------------------
  
  let sc=$('.section');
  let sideBar = $('nav li');
  $('#main').fullpage({
      anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile' ],
      afterLoad:function(origin, destination, direction){
          let idx=destination.index;
          sc.eq(idx).addClass('on').siblings().removeClass('on');
          sideBar.eq(idx).addClass('on').siblings().removeClass('on');
      },
  });
  
  let ha = new Typed('.slogan_txt',{
    strings: ['hayujzzz'],
    typeSpeed:100,
  });
  
  //-----------------------------------------------------
  })

  // const mockup = document.querySelector('.mockup');
  // mockup.addEventListener('mousemove', ()=>{
    
  // } )