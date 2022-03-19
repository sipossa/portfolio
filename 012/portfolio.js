$(function(){
// --------------------------------------------
    let sc = $('.section');
    let sideBar = $('nav li')
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'portfolio_06', 'profile'],
        afterLoad: function(origin, destination, direction){
            let idx = destination.index;
            let all = $('.cover_btn, nav, .toTop, #header h1, address')
            let left = $('#header h1, address');
            let right = $('.cover_btn, nav, .toTop')
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
            idx == 0 ? $('.toTop').stop().fadeOut() : $('.toTop').stop().fadeIn();
            if ($(window).width() > 768) {
                if (idx == 1 || idx == 3 || idx == 5) {
                    right.addClass('active');
                    left.removeClass('active');
                } else if (idx == 0 || idx == 7 || idx == 6) {
                    all.removeClass('active');
                } else {
                    left.addClass('active');
                    right.removeClass('active');
                }
            };
            if ($(window).width() <= 768) {
                if (idx >= 6) {
                    $('.toTop').addClass('active');
                } else {
                    $('.toTop').removeClass('active');
                };
                if (idx == 7) {
                    $('#header h1').stop().fadeOut();
                } else {
                    $('#header h1').stop().fadeIn();
                }
                if (idx == 0 || idx == 6 || idx == 7) {
                    $('nav').addClass('active');
                } else {
                    $('nav').removeClass('active');
                };
            }
        },
    });
    
    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');
        $('#cover').toggleClass('on');
        $('#footer address').stop().fadeToggle();
    });
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').removeClass('on');
        $('.cover_btn').removeClass('on');
        $('#footer').removeClass('on');
        if (!$('.cover_btn').hasClass('on')) {
            $('#footer address').fadeOut();
        };
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });

    function star(){
        let amount = 10;
        let intro = $('.intro .fp-tableCell')
        let i = 0;
        while (i < amount) {
            let star = $('<span class="star"></span>')
            intro.append(star);
            i++
        };
    };
    star();
    
    var trnS = $('.trn_slider');
    var slickOptions = {
        arrows: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    $(window).on('load resize', function() {
        if($(window).width() > 768) {
            trnS.slick('unslick');
        }else{
            trnS.not('.slick-initialized').slick(slickOptions)
        };
    });
    
    $('.prev_arrow').on('click', function(){
        trnS.slick('slickPrev');
    });
    $('.next_arrow').on('click', function(){
        trnS.slick('slickNext');
    });
// --------------------------------------------
});