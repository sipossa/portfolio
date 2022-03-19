$(function(){
// -----------------------------------------------------

var num=0;

function numc() {
    // console.log(num);
    $('#sec10 figure').eq(num).addClass('on').siblings().removeClass('on')
    num++;
    if (num>4) num=0;
}

setInterval(numc,1000)


var snum=0;

function move() {
    $('.move').css({left:-snum*1200})
    snum++;
    if (num>2) snum=0;
}

setInterval(move,3000)



// -----------------------------------------------------
});