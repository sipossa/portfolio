$(function(){
//----------------------------

var num=0; //변수, 0부터시작해라

function numc() {
   // console.log(num);
   $('#sec10 figure').eq(num).addClass('on').siblings().removeClass('on');
    num++; //하나씩 늘린다
    if (num>4) num=0;
}

setInterval(numc,2000) //2초마다 함수가 실행되어라


var snum=0;

function move() {
    $('#sec11 .move').css({left:-snum*500});
    snum++; 
    if (snum>2) snum=0;

}

setInterval(move,3000)


//----------------------------
})