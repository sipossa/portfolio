$(function(){
//-----------슬릭홈페이지 참고 하기------------
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    vertical:true, /*위로 움직임, 이거 없으면 그냥 옆으로 감*/
    //fade:true, /*흐려졌다나 나타남.*/
});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    console.log(c);
    $('.num').css({backgroundPositionY:-500*c-6000*idx});
    idx++;
});


});