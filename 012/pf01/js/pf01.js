$(function () {
    //----------------------------------------------------------------------

    // 스크롤 이벤트 - 헤더
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 900) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })

    // 슬릭될 때 헤더에 'om'붙이기 (특정구간에서 헤더색상변경용)
    $('.main_slider').on('afterChange', function (e, s, c) {
        // console.log(c)
        if (c > 1) {
            $('#header').addClass('om')
        } else {
            $('#header').removeClass('om')
        }
    });


    // 메인비주얼 슬릭
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    // 메인비주얼 새로고침 했을 때 on붙어있게
    $('.main_slider figure').eq(1).addClass('on')
    // 슬릭될 때 헤더에 'on'붙이기 (비주얼마다 글자 효과넣기)
    $('.main_slider').on('afterChange', function (e, s, c) {
        // console.log(c);
        $('.main_slider figure').eq(c + 1).addClass('on').siblings().removeClass('on');
        // 슬라이더바가 메인비주얼 순서에 맞게 반응
        $('#main_visual .slide_bar li').eq(c).addClass('on').siblings().removeClass('on');
    });

    // 슬라이더바 새로고침 했을 때 on붙어있게
    $('#main_visual .slide_bar li').eq(0).addClass('on')
    // 슬라이더바 누르면 그 번호로 이동 
    $('#main_visual .slide_bar li').on('click', function () {
        var idx = $(this).index();
        // console.log(idx);
        $('.main_slider').slick('slickGoTo', idx);
        // 슬라이더바 누르면 게이지 차는 효과
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 제품 슬릭
    $('.pr_slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        centerMode: true,
        dots: true,
    });
    // 제품이 슬릭될 때 on 붙이기 (글자 효과)
    $('.pr_slider').on('afterChange', function (e, s, c) {
        // console.log(c);

        $('#content01 figure').eq(c + 4).addClass('on').siblings().removeClass('on')
    });

    // 새로고침 했을 때 제품 5번째로
    $('.pr_slider').slick('slickGoTo', 5);

    // 아이콘 눌렀을 때 이벤트(Prev, Next)
    $('.xi-angle-left-thin').on('click', function () {
        $('.pr_slider').slick('slickPrev')
    });
    $('.xi-angle-right-thin').on('click', function () {
        $('.pr_slider').slick('slickNext')
    });

    // 이미지 호버했을 때 on을 붙였다 뗐다 (테두리 효과)
    $('#content01 figure .case').hover(function () {
        $(this).toggleClass('on')
    });

    // 스크롤 이벤트 - 컨텐츠02
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 1470) {
            $('#content02').addClass('on')
        } else {
            $('#content02').removeClass('on')
        };
    });

    // 스크롤 이벤트 - 컨텐츠03
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 1750) {
            $('#content03 h2').addClass('on')
        } else {
            $('#content03 h2').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 2200) {
            $('#content03 figure').addClass('on')
        } else {
            $('#content03 figure').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 2200) {
            $('#content03 .text_con').addClass('on')
        } else {
            $('#content03 .text_con').removeClass('on')
        }
    });

    // 스크롤 이벤트 - 컨텐츠04
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 2430) {
            $('#content04 h2').addClass('on')
        } else {
            $('#content04 h2').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 2500) {
            $('#content04 .con').addClass('on')
        } else {
            $('#content04 .con').removeClass('on')
        }
    });

    // 패밀리사이트 다단메뉴
    $('#footer .top_f .family').on('click', function () {
        $(this).toggleClass('on')
    });

    // 스크롤 이벤트 - 탑버튼(페이드효과)
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        if (sct > 2400) {
            $('#toTop').fadeIn()
        } else {
            $('#toTop').fadeOut()
        }
    });

    // 탑버튼 누르면 페이지최상단으로 이동
    $('#toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    //----------------------------------------------------------------------
});