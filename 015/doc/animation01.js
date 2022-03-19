$(function(){
  //---------------------
$('.btn li').on('click', slidingfood);

function slidingfood() {
  let idx = $(this).index();
  console.log(idx);
  $('.case').animate({top: -530 * idx}, 1000, "easeOutBounce");


}

  //---------------------
})