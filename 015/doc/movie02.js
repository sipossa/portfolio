$(function () {
  //-------------

  $("#bgmv").YTPlayer({ 
    videoURL:'https://youtu.be/93iQRtqhWPM',
    containment:'#visual',
    autoPlay:true,
    mute: true,
    startAt:0,
    opacity:1,
    showControls: false,

  });
 $('#visual i.xi-pause').on('click', function(){
   $('#bgmv').YTPPause();
 })
 $('#visual i.xi-play').on('click', function(){
   $('#bgmv').YTPPlay();
 })
 $('#visual i.xi-tv').on('click', function(){
   $('#bgmv').YTPFullscreen();
 })

 
 $("#mv01").YTPlayer({ 
  videoURL:'https://youtu.be/93iQRtqhWPM',
  containment:'self',
  autoPlay:true,
  mute: true,
  startAt:30,
  opacity:1,
  showControls: false, 
  playOnlyIfVisible:true,
  optimizeDisplay:false,
 })
 $("#mv02").YTPlayer({ 
  videoURL:'https://youtu.be/93iQRtqhWPM',
  containment:'self',
  autoPlay:true,
  mute: true,
  startAt:120,
  opacity:1,
  showControls: false,  
  playOnlyIfVisible:true,
  optimizeDisplay:false,
 })

 $('#movie02 i.xi-pause').on('click', function(){
  $('#mv02').YTPPause();
})
$('#movie02 i.xi-play').on('click', function(){
  $('#mv02').YTPPlay();
})
$('#movie02 i.xi-tv').on('click', function(){
  $('#mv02').YTPFullscreen();
})


  //-----------------
});