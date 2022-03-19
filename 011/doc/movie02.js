$(function(){
    //-------------------------------------------
        $('#bgndVideo').YTPlayer({
            videoURL:'https://www.youtube.com/embed/WPdWvnAAurg?list=RDWPdWvnAAurg',
            containment:'#visual',
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false, //*버튼안보이게*//
        });
    
        $('#visual i.xi-pause').on('click', function(){
            $('#bgndVideo').YTPPause();
        });
        $('#visual i.xi-play').on('click', function(){
            $('#bgndVideo').YTPPlay();
        });
        $('#visual i.xi-tv').on('click', function(){
            $('#bgndVideo').YTPFullscreen(); //*클릭시 풀페이지*/
        });
    
    
        $('#mv01').YTPlayer({
            videoURL:'https://www.youtube.com/embed/WPdWvnAAurg?list=RDWPdWvnAAurg',
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