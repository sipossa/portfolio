

//-------두번째 슬라이드-----------
// $(function(){
    
// $('.btn li').on('click', slidingbal);
// function slidingbal() {
//     let idx=$(this).index();
//     console.log(idx);
//     $('.case').css({top:-270*idx})
// }


// });

//-----첫번째 슬라이드-----------
$(function(){
    
    $('.btn li').on('click', slidingbal);
    function slidingbal() {
        let idx=$(this).index();
        console.log(idx);
        $('.case').animate({top:-270*idx},1000, "easeInBounce" )
    }
    

});
















