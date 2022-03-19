$(function(){
//--------------------------------------------

$("#m01").YTPlayer({
    videoURL:'https://youtu.be/c5ibxGwJhCc',
    containment:'#visual', //#visual 부분에서 동영상이 돌아가도록
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
    useOnMobile:true,
});

$('#visual i.xi-pause').on('click', function(){
    $("#m01").YTPPause();
});

$('#visual i.xi-play').on('click', function(){
    $("#m01").YTPPlay();
});

$('#visual i.xi-tv').on('click', function(){
    $("#m01").YTPFullscreen();
});


$("#mv01").YTPlayer({
    videoURL:'https://youtu.be/c5ibxGwJhCc',
    containment:'self', //#visual 부분에서 동영상이 돌아가도록
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false, //control이 안보이게, 보이게하려면 true
    playOnlyfVisible:true,
    optimizeDisplay:false,
});

$('#movie02 i.xi-pause').on('click', function(){
    $("#mv01").YTPPause();
});

$('#movie02 i.xi-play').on('click', function(){
    $("#mv01").YTPPlay();
});

$('#movie02 i.xi-tv').on('click', function(){
    $("#mv01").YTPFullscreen();
});

//--------------------------------------------
});