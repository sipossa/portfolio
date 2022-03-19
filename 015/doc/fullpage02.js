$(function () {

  //array
  var left_text = ['1st', '2nd', '3rd', '4st'];

  $('.main_full').fullpage({
    anchors: ['f01', 'f02', 'f03', 'f04'],
    //background-attachement:fixed 활성,
    css3: false,
    // navigation: true,
    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      $('.section').eq(idx).addClass('on').siblings().removeClass('on');
      $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
      $('.footer .left span').text(left_text[idx]);
      $('.footer .left strong').text('0' + (idx+1));

    },
  });

  $(".umovie").YTPlayer({
    videoURL: 'https://youtu.be/QbmW76Cp4s8',
    containment: 'body',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
  });






});