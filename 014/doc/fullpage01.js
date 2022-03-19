$(function(){
//---------------------------------------------------------
    var main=$('.main_full').fullpage({
        anchors:['f01', 'f02', 'f03', 'f04'],         /*<-주소창에 full01,02 나타낼수있음.풀페이지할때 항상 만들어두기! []은 배열을 나타냄*/
        /*navigation: true,*/
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on')  /*<-on이 찍힘*/
        },
    });









//---------------------------------------------------------
});