$(function () {

  //menu slide
  $('.menu_slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    centerMode: true,
    dots: true,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
          // centerPadding: '120px',
        }
      },
    ]
  });


//text flow
  var contentSlider01 = $(".content-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    //pauseOnHover:false,
    pauseOnFocus: false,
    dots: false,
    speed: 2000,
    centerMode: true,
    variableWidth: true,
    cssEase: "linear",
  });


//video  
  $("#mv01").YTPlayer({
    videoURL: 'https://youtu.be/fcYEILFU1gc',
    containment: 'self',
    autoPlay: true,
    mute: true,
    startAt: 30,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
  })



// responsive menu button
  $('.gnb>ul>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
      // $('.submenu').hide();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.submenu').slideUp();
    }
  });

  $('.mopen i').on('click', function () {
    $('.gnb').toggleClass('on');
    $('.sns').fadeToggle();
  });

  $(window).on('resize', function () {
    $('.submenu').removeAttr('style')
  });



//instagram slider
$('.sns-slider').slick({
  arrows: false,
  centerMode: true,
  autoplay: true, 
  centerPadding: '100px',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '1rem',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 414,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});


//fade in scroll
  $(window).on('scroll', function () {
    var windowBottom = $(window).scrollTop() + $(window).height();
     
    var article = $('.card');
    for (var i = 0; i < article.length; i++) {
      var card = $(article[i]);
      var cardHalf = card.position().top + card.outerHeight() / 2;
      //  console.log(card);
      if (cardHalf < windowBottom) {
        card.animate({
          'opacity': '1'
        }, 1500)
      }  
    }
  });

});
 