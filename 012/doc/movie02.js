$(function(){


//------------------------------------------------------

$("#bgndVideo").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=QS19SFq166g&list=PLunuBhv6lAo3u2pox6EyjRooF-Ekn7m5k&index=18',
    containment:'#visual',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
});


$('#visual i.xi-pause').on('click', function(){
    $('#bgndVideo').YTPPause();
});
$('#visual i.xi-play').on('click', function(){
    $('#bgndVideo').YTPPlay();
});
$('#visual i.xi-tv').on('click', function(){
    $('#bgndVideo').YTPFullscreen();
});

$("#mv02").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=wI7rF08cez8&list=PLunuBhv6lAo3u2pox6EyjRooF-Ekn7m5k&index=5',
    containment:'self',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$('#movie02 i.xi-pause').on('click', function(){
    $('#mv02').YTPPause();
});
$('#movie02 i.xi-play').on('click', function(){
    $('#mv02').YTPPlay();
});
$('#movie02 i.xi-tv').on('click', function(){
    $('#mv02').YTPFullscreen();
});
//------------------------------------------------------


});