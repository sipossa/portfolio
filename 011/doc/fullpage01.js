$(function(){
    $('.main_full').fullpage({
        anchors:['full01', 'full02','full03','full04'],//페이지갯수마다 이름줄수있음
        //navigation:true,
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on'); //on이붙었을때뭘해라
         
        },
    });
   
})