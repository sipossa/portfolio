$(function(){
//-------------------------------------------
    $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/4qn-aU5lFAM',
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


    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/4qn-aU5lFAM',
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
        $('#mv01').YTPPause();
    });
    $('#movie02 i.xi-play').on('click', function(){
        $('#mv01').YTPPlay();
    });
    $('#movie02 i.xi-tv').on('click', function(){
        $('#mv01').YTPFullscreen();
    });
//----------------------------------
});