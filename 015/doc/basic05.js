$(function () {
  //-------------
$('#top_banner i').on('click',function(){
  $('#top_banner').slideUp();
});

$('.main_slider').slick({
  arrows:false,
  autoplay:true,
  pauseOnHover:true,
  pauseOnFocus:true,
  autoplaySpeed: 2000,
});

 $('.pr_slider').slick({
   arrows: false,
   slidesToShow: 5,
   autoplaySpeed: 3000,
   autoplay: true,
  //  centerMode: true,
  //  centerPadding: '100px',
 });
 $('.pr_slider figure').eq(7).addClass('on');
 $('.pr_slider').on('afterChange', function(e,s,c){
   //c =0,1,2,...
  $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
  $('#product03 .slide_bar>span').css({left:c*100})
 })

 $('.pic').slick({
   arrows:false,
   autoplay:true,
   pauseOnHover:true,
   pauseOnFocus:true,
   asNavFor:'.pic',
 });

 $('.pr_slider02').slick({
  arrows: false,
  slidesToShow: 3,
  autoplaySpeed: 2000,
  autoplay: true,
 //  centerMode: true,
 //  centerPadding: '100px',
 });

 $('#product04  i.xi-arrow-left').on('click', function(){
   $('.pr_slider02').slick('slickPrev');
 });
 $('#product04  i.xi-arrow-right').on('click', function(){
   $('.pr_slider02').slick('slickNext');
 });

 $('#link select').on('change', function(){
   var link= $(this).val();
   window.open(link);
 })

$('.tab_menu li ').on('click', function(){
  var idx=$(this).index();
  // $('.tab_con>div').eq(idx).show().siblings().hide();
  $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
})
$('.tab_slider').slick({
  arrows:false,
  autoplay:true,
  slidesToShow: 3,
  centerMode:true,
  pauseOnHover:true,
  pauseOnFocus:true, 
});
  //-----------------
})