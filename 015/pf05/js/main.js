$(function () {
  $('.main_full').fullpage({
    anchors: ['main', 'pr_solution', 'usm_value', 'products', 'pr_gallery'],
    //background-attachement:fixed 활성,
    css3: false,
    controlArrows: true,
    scrollBar: false,
    afterRender: function () {
      /** arrow-left */
      const arrow_left = document.querySelector(".fp-controlArrow.fp-prev");
      arrow_left.innerHTML = `<i class="fas fa-chevron-left"></i>`;
      /** arrow-right */
      const arrow_right = document.querySelector(".fp-controlArrow.fp-next");
      arrow_right.innerHTML = `<i class="fas fa-chevron-right"></i>`;
    },
    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      $('.section').eq(idx).addClass('on').siblings().removeClass('on');
      $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
      idx >= 4 ? $('.to-top').fadeIn() : $('.to-top').fadeOut();
    },
  });

  // 헤더 메뉴 팝업
  $('.header .menu_pop-up').on('click', function () {
    $(this).toggleClass('on');
    $('.all_menu').slideToggle();
    if ($('.header .menu_pop-up').hasClass('on')) {
      $.fn.fullpage.setAllowScrolling(false);
      // $('.header nav').fadeOut();
      $('.header  .menu_pop-up').html('<i class="xi-close"></i>');
    } else {
      $.fn.fullpage.setAllowScrolling(true);
      $('.header nav').fadeIn();
      $('.header  .menu_pop-up').html('<i class="xi-bars"></i>');
    }
    return false;
  });

  $('.all_menu a').on('click', function () {
    $('.all_menu').slideUp();
    $.fn.fullpage.setAllowScrolling(true);
    $('.header>a').removeClass('on');
  });

  // MAIN VIDEO LINK
  $(".umovie").YTPlayer({
    videoURL: 'https://youtu.be/ApV28YumA-g',
    containment: '.main .video',
    autoPlay: false,
    mute: true,
    loop: 4,
    startAt: 30,
    stopAt: 55,
    showControls: false,
  });

  //  SECTION #02 SOLUTION BY SPACE 내부 슬라이드
  $('.inner-slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.tab_menu>li').on('click', function () {
    var $this = $(this);
    var idx = $(this).index();
    $('.tab_content>p').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
  });
});



// 아티클 세로슬라이드 기능
let moveType = 0;
let moveSpeed = 8000;

// 움직이는 작업중 다시 명령 받지 않음 
let moveWork = false;
let movePause = false;

function imgMove() {
  let firstImg = $(".RollDiv > div > a:first");
  if (moveWork == false) {
    if (moveType == 0) {
      // 맨처음 이미지의  높이 
      let aHeight = firstImg.height() + 30;
      // 롤링마지막에 맨처음의 a태그 추가 
      $(".RollDiv > div").append("<a href=\"" + firstImg.attr("href") + "\">" + firstImg.html() + "</a>");
      firstImg.animate({
        marginTop: -aHeight
      }, {
        duration: moveSpeed,
        step: function () {
          // 이동중 만약 일시정지 flag가 true라면 이동을 멈춘다 
          if (movePause == true) {
            $(this).stop();
          }
        },
        complete: function () {
          // 이동을 마친후 첫번째 a태그를 지워버린다 이미지 움직이는것을 다시 실행 
          $(this).remove();
          imgMove();
        }
      });
    } else {
      let lastImg = $(".RollDiv > div > a:last");
      let aHeight = lastImg.height();
      // a태그 앞에 마지막의 a태그를 생성한다 단 스타일은 마지막 a태그의 폭만큼 빼준다 
      $("<a href=\"" + lastImg.attr("href") + "\" style=\"margin-top:-" + aHeight + "px\">" + lastImg.html() + "</a>").insertBefore(".RollDiv > div > a:first")
      // 맨처음 a태그의 margin-top를 다시 0으로 맞춰준다. 
      firstImg.animate({
        marginTop: 0
      }, {
        duration: moveSpeed,
        step: function () {
          if (movePause == true) {
            $(this).stop();
          }
        },
        complete: function () {
          // 이동을 마친후 마지막 a태그를 지워버린다 이미지 움직이는것을 다시 실행 
          $(".RollDiv > div > a:last").remove();
          imgMove();
        }
      });
    }
  }
}

// 두번째 아티클
function imgMove2() {
  let firstImg = $(".RollDiv2 > div > a:first");
  if (moveWork == false) {
    if (moveType == 0) {
      let aHeight = firstImg.height() + 30;
      $(".RollDiv2 > div").append("<a href=\"" + firstImg.attr("href") + "\">" + firstImg.html() + "</a>");
      firstImg.animate({
        marginTop: -aHeight
      }, {
        duration: moveSpeed,
        step: function () {
          if (movePause == true) {
            $(this).stop();
          }
        },
        complete: function () {
          $(this).remove();
          imgMove2();
        }
      });
    } else {
      let lastImg = $(".RollDiv2 > div > a:last");
      let aHeight = lastImg.height();
      $("<a href=\"" + lastImg.attr("href") + "\" style=\"margin-top:-" + aHeight + "px\">" + lastImg.html() + "</a>").insertBefore(".RollDiv2 > div > a:first")
      firstImg.animate({
        marginLeft: 0
      }, {
        duration: moveSpeed,
        step: function () {
          if (movePause == true) {
            $(this).stop();
          }
        },
        complete: function () {
          $(".RollDiv2 > div > a:last").remove();
          imgMove2();
        }
      });
    }
  }
}

imgMove();
imgMove2();