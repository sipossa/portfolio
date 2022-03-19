$(function(){
    //-----------------------

const mainSlider=$('.main_slider').slick({
    //const mainSlider=  : 메인슬라이더 이름 지어줌
    arrows:false, //버튼이 없어짐//
    autoplay:true,
    pauseOnHover:false,
    //vertical:true, 슬라이드가 위아래로 움직임//
    fade:true, //흐려졌다 진해짐//
});

let idx=1; //기본시작값 지정
mainSlider.on('afterChange', function(e,s,c){
    //console.log(c);
    //$('.num').text(c); //c값이 표시되도록해라
    //$('.num').css({transform:'rotate('+ 180*idx+360 +'deg)'});
    $('.num').css({backgroundPositionY:-600*idx*1000});
    idx++; //계속돌아가라
})


    //-----------------------------
})