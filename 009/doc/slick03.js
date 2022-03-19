$(function(){
   const mainSlider=$('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        vertical:true, // 아래위로바뀜//
        // fade:true, 페이드아웃으로바뀜 *slick홈페이지참고
    });


    let idx=1
    mainSlider.on('afterChange',function(e,s,c){
        // console.log(c);
        $('.num').css({backgroundPositionY:-500*c-6000*idx});
        idx++;

    })
});