$(function(){
//----------------------------------------
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    vertical:true,
    //<<흐려졌다 나오기 fade:true,

});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    //console.log(c);
    //$('.num').css({transform:'rotate('+ 90*idx +'deg)'}); //수치다르게주면 다른효과
    $('.num').css({backgroundPositionY:-500*idx}); //backgroundPositionY:-500*c-6000*idx > 6000만큼더돌고나옴
    idx++;

});






//--------------------------------------------

})