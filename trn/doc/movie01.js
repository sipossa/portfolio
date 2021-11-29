$(function(){
//-------------------------------------------
    $('#bgndVideo').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
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
//----------------------------------
});