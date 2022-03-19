$(function(){
    // ---------------------------------------
    var HD = $('#header')
    var depth02 = $('.depth02')
    HD.on('mouseenter', function(){
        if ($(window).width() >= 768) {
            HD.addClass('active');
        };
    });
    HD.on('mouseleave', function(){
        if ($(window).width() >= 768) {
            HD.removeClass('active');
        };
    });
    

    $('.head_sub .lnb>li>a').on('click', function(){
        $(this).next().stop().slideToggle();
        $(this).parent().toggleClass('on');
    });


    $('.family_site span').on('click', function(){
        $('.family_site ul').stop().slideToggle();
    });
    
    $('.mopen').on('click', function(){
        if ($(window).width() <= 768) {
            $('.gnb').toggleClass('on');
            $('.hd_top').toggleClass('on');
            $(this).toggleClass('active');
            $('.login').toggleClass('on');
            $('html, body').toggleClass('no_scroll');
        };
    });
    
    $('.depth01>li>a').on('click', function(){
        if ($(window).width() <= 768) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth02').stop().slideUp();
        };
    });
    
    $('.depth02 dt').on('click', function(){
        if ($(window).width() <= 768) {
            $(this).parent().find('dd').slideToggle();
            $(this).parent().siblings().find('dd').stop().slideUp();
            $(this).parent().parent().siblings().find('dd').stop().slideUp();
        };
    });
    
    $(window).on('resize', function(){
        $('.depth02').removeAttr('style');
    });
    
    if ($(window).width() <= 768) {
        $('.br_none').css('display', 'none');
    } else {
        $('.br_none').css('display', 'block');
    }
    
    // ---------------------------------------
    });