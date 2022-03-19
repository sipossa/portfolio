$(function(){
// -------------------------------------------------

// 배열::번호가 있는 자료형 0,1,2... left_text[0]
var left_text=['01구역','02구역','03구역','04구역']




var main=$('.main_full').fullpage({
    anchors:['f01', 'f02','f03', 'f04'],
    css3:false,     //background-attachment :fixed 활성화,
    // navigation:true,
    afterLoad: function(origin, destination, direction){
      var idx=destination.index;
      console.log(idx);
      $('.section').eq(idx).addClass('on').siblings().removeClass('on');
      $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
      $('.footer .left span').text(left_text[idx]);
      $('.footer .left strong').text('0' + (idx+1));
    },
   
});


$('.movie').YTPlayer({
    videoURL:'https://youtu.be/62mUh2MEQr8',
    containment:"body",
    autoPlay:true, 
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
    
    });



















// -------------------------------------------------
});