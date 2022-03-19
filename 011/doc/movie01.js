$(function(){
//------------------------
$("#mv01").YTPlayer({//--html에서 가져온 소스에 div id 로 바꿔야함
    videoURL:'https://www.youtube.com/embed/WPdWvnAAurg',
    containment:'#visual', //내가 넣을 곳 . section 아이디 
    autoPlay:true,
    mute:true, 
    startAt:0, 
    opacity:1,     // 1보다낮추면 배경에 비치게 나옴 0.2,0.1
    showControls:false, // 재생버튼 없애는것 깃허브에 있음

}); 

$('#visual i.xi-pause').on('click', function(){
    $('#mv01').YTPPause(); //-- xi-pause클릭하면 mv01멈춘다.
});
$('#visual i.xi-play').on('click', function(){
    $('#mv01').YTPPlay(); //-- xi-play클릭하면 mv01 재생한다.
});
$('#visual i.xi-tv').on('click', function(){
    $('#mv01').YTPFullscreen(); //-- 풀스크린
});
//------------------------
});