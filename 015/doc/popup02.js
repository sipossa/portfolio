$(function () {

  // $(".popup_close").on('click', function(){
  //   $(this).parent().hide();
  // })

  $('#top_banner .container i ').on('click', function () {
    $(this).parent().slideUp();
  })


  $('#top_banner2 i').on('click', function () {
    $('#top_banner2 .case').toggleClass('on');
    $(this).toggleClass('on');
  })

  $('#top_banner3 i').on('click', function () {
    $('#top_banner3 .case').slideToggle();
    $(this).toggleClass('on');

  })
  $('#top_banner4 i').on('click', function () {
    $('#top_banner4 .case').toggleClass('on');
    $(this).toggleClass('on');
  })

  $('#bottom_banner i').on('click', function () {
    $('#bottom_banner .case').slideToggle(200);
    $(this).toggleClass('on');
  })


  $('#left_banner i').on('click', function () {
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
  })

  $('#right_banner i').on('click', function () {
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
  })



  //  $('#toTop').on('click', function(){
  //   $('html, body').animate({scrollTop:0});
  //  });

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    //  console.log(sct);
    //  if(sct<400) {
    //    $('#toTop').fadeIn();
    //   }else {
    //     $('#toTop').fadeOut();
    //   }
    // sct > 400 ? $('#toTop').fadeIn() :$('#toTop').fadeOut();
    $('#scroll_banner').css({
      top: 300 + sct
    });
  });


  //-------------------------------------------------
});

const toTop = document.querySelector('#toTop');
toTop.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('scroll', (e) => {
  const sct = document.documentElement.scrollTop;
  console.log(sct);
 if (sct>400) {toTop.classList.add('on')} else {
   toTop.classList.remove('on');
 }

});