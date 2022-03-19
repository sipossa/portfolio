$(function(){
//---------------------------------

$('.btn li').on('click', slidingbal);//slidingbal은 내가 임의로 지어준 함수이름
function slidingbal(){
    let idx=$(this).index(); //idx 정의해주기
    console.log(idx);
    $('.case').animate({top:-345*idx},1000, "easeOutBounce") //animate: css와 animation이 합쳐진 것 , css조절가능함
}




//---------------------------------
})