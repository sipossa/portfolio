$(function(){
// ----------------------------------------------

$('.btn li').on('click', Slidingshoes);
function Slidingshoes() {
    let idx=$(this).index();
    console.log(idx);
    $('.case').animate({top:-450*idx},1000,"easeInOutBack");
}








// ----------------------------------------------
});