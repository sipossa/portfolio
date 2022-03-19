$(function () {
  //-------------
  const mainSlider = $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    // vertical:true,
    fade: true,
  });
  let idx = 1;
  mainSlider.on('afterChange', function (e, s, c) {
    console.log(c);
    $('.num').css({
      // transform: 'rotate(' + 90 * idx + 'deg)'
        backgroundPositionY: -500*idx
      });
      idx++;
  })

  //----------
})