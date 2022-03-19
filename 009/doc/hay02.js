$(function(){


   $('.main_slider').slick({
      arrows:false,
      // dots:true, "ctrl+/" 주석처리
      autoplay:true,
      pauseOnHover:false,
   });
   $('.main_slider figure').eq(1).addClass('on')
   $('.main_slider').on('afterChange',function(e,s,c){
   $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on')

   });


   // slide 돌리는거
   $('.pp_slider').slick({
      arrows:false,
      // dots:true, "ctrl+/" 주석처리
      autoplay:true,
      pauseOnHover:false,
   });

// 화살표 클릭했을때 이동하는거
   $('#con03 .btn i.xi-angle-left-thin').on('click',function(){
      $('.pp_slider').slick('slickPrev')
   });
   $('#con03 .btn i.xi-angle-right-thin').on('click',function(){
      $('.pp_slider').slick('slickNext')
   });

   $('.pp_slider figure').eq(1).addClass('on');
   $('.pp_slider').on('afterChange',function(e,s,c){
      $('.pp_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
   });



   // 탭메뉴
   $('#con04 li').on('click',function(){
      var idx=$(this).index();
      // console.log(idx);
      $(this).addClass('on').siblings().removeClass('on');
      $('#con04 .tab_cont>div').eq(idx).addClass('on').siblings().removeClass('on');
   });

});