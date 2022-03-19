$(function(){
//---------------------------------------------------------
    /*배열 : 번호가 있는 자료형 0,1,2... left_text[0]하면 0불려지고 1하면 1불려지고 */

    var left_text=['01','02','03','04']



    var main=$('.main_full').fullpage({
        anchors:['f01', 'f02', 'f03', 'f04'],         /*<-주소창에 full01,02 나타낼수있음.풀페이지할때 항상 만들어두기! []은 배열을 나타냄*/
        css3:false,          /*<-background-attachment:fixed 활성화시킴*/
        /*navigation: true,*/
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on')  /*<-on이 찍힘*/
            $('nav li').eq(idx).addClass('on').siblings().removeClass('on')  
            $('.footer .left span').text(left_text[idx]);    /*span이 화면에서 오른쪽에 있는 01숫자*/
            $('.footer .left strong').text('0' + (idx+1));
        },
    });





    $('.movie').YTPlayer({
        videoURL:'https://youtu.be/YJy1HK2m7Zg',
        containment:'body',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    }); 




//---------------------------------------------------------
});