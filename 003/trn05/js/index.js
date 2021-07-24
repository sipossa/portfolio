$(function(){

    const hd=$("header");
    $(window).on("scroll", ()=>{
        let sct=$(window).scrollTop();
        sct>0 ? hd.addClass("on") : hd.removeClass("on"); 
    });

    const main_slider = new Swiper('.main_slider', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 80,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });

    let prbar=$(".probar");
    prbar.addClass("on");
    main_slider.on('slideChangeTransitionEnd', ()=> {
        prbar.addClass("on");
        console.log(main_slider.realIndex)
    });
    main_slider.on('slideChangeTransitionStart', ()=> {
        prbar.removeClass("on");
    });


    const best_slider = new Swiper('.best_slider', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
    });

    best_slider[0].on('slideChangeTransitionEnd',()=> {
        let this_m=$(".best_slider .swiper-slide.swiper-slide-active");
        this_m.addClass("on").siblings().removeClass("on");
    });


    const gim_slider = new Swiper('.gim_slider', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        slidesPerView: 2,
        spaceBetween:180,
        autoplay: {
            delay: 4000,
        },
    });

    gim_slider.on('slideChangeTransitionStart', ()=> {
        let this_m=$(".gim_slider .swiper-slide.swiper-slide-active");
        this_m.addClass("on").siblings().removeClass("on");
    });

    $(window).on('scroll', ()=>{
        let sct=$(window).scrollTop();
        $('.section').each(function(){
            let this_top=$(this).offset().top;
            sct>this_top-400 ? $(this).addClass('on') : $(this).removeClass('on')
              
        })
    });


});

