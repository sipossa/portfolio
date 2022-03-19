$(function(){


//------------------------------------------------------

$("#mv01").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=DSWDmaIqEGQ',
    containment:'#visual',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
});

$('#visual i.xi-pause').on('click', function(){
    $('#mv01').YTPPause();
});
$('#visual i.xi-play').on('click', function(){
    $('#mv01').YTPPlay();
});
$('#visual i.xi-tv').on('click', function(){
    $('#mv01').YTPFullscreen();
});
//------------------------------------------------------


});