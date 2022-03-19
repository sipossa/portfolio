$(function(){
/*-------------------------------------------------------------------------------*/
 
$('.btn li').on('click', slidingbal);
function slidingbal () {
    let idx=$(this).index();
    console.log(idx);
    $('.case').animate({top:-500*idx},2000, "easeInOutBack")
}






















/*-------------------------------------------------------------------------------*/
});