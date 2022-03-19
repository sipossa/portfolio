$(function(){
//--------------------------------------
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    vertical:true, /*--아래위로(가로)움직임
    /*fade:true,  /*-- 흐려지면서 슬라이드*/
});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    /*console.log(c);*/
    $('.num').css({backgroundPositionY:-500*c-6000*idx});
    idx++; /*idx=idx+1; <-6000옆에 idx가 이뜻이란거라는디..?^^;*/
});





//---------------------------------------
});