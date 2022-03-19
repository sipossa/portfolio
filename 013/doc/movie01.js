$(function(){
//---------------------------------------------------
$("#m01").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=RXDExEpil50',
    containment:'#visual',
    autoPlay:true, mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
}); 


$('#visual i.xi-pause').on('click', function(){
    $('#m01').YTPPause();
});

$('#visual i.xi-play').on('click', function(){
    $('#m01').YTPPlay();
});

$('#visual i.xi-tv').on('click', function(){
    $('#m01').YTPFullscreen();
});
//---------------------------------------------------
});