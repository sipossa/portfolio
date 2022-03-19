$(function(){
/*-------------------------------------------------------------------------------*/

var num=0;                       /*-----var라는건 변수라는뜻*/

function numc() {
    //console.log(num);
    $('#sec10 figure').eq(num).addClass('on').siblings().removeClass('on');
    num++;
    if (num>5) num=0;
}

setInterval(numc,2000)

var sunm=1;

function move() {
    $('.move').css({left:-sunm*500});
    sunm++;
    if (sunm>2) sunm=0;
}
setInterval(move,3000)



/*-------------------------------------------------------------------------------*/
});