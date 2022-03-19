$(function(){

//-------------------------

$('.btn li').on('click', slidingbal);
function slidingbal() {
    let idx=$(this).index();
    console.log(idx);
    $('.case').animate({top:-400*idx},1000, "easeInOutBounce") //jquery ui -Easings 에서 효과 가져오기
    //top:-400*idx- 수치는 이미지사이즈
}








})