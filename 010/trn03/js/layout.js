
const HD=document.querySelector('#hd')
window.addEventListener('scroll', ()=>{
   let sct=window.scrollY;
   sct>0 ? HD.classList.add('on') : HD.classList.remove('on');
})

//scroll event
const SEC = document.querySelectorAll('.active');
const WT=window.innerHeight;

window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 - 200? e.classList.add('on') : e.classList.remove('on');
        });

});


const SLIDEBAR = document.querySelector('.slide_bottom .bar');
const swiper1 = new Swiper('.main_slider', {
    loop:true,
    slidesPerView:2,
    spaceBetween: 150,
    autoplay: {
      delay: 3000,
    },
    pagination: {
        el: ".page",
        type: "fraction",
    },
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
    },
    autoplayDisableOnInteraction:false,
});

//afterChange
SLIDEBAR.classList.add('on');
swiper1.on('slideChangeTransitionEnd', ()=>{
    SLIDEBAR.classList.add('on');
});
swiper1.on('slideChangeTransitionStart', ()=>{
    SLIDEBAR.classList.remove('on');
})

const productSlide = new Swiper('.pr_slider', {
    loop:true,
    slidesPerView:4,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    pagination: {
        el: ".pr_btn .page",
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },

});

const productSlide02 = new Swiper('.sc04 .pr2_slider', {
    loop:true,
    slidesPerView:2,
    spaceBetween: 120,
    autoplay: {
      delay: 2000,
    },

});

const sItm = document.querySelectorAll('.sc04 .swiper-slide');
    // $('.swiper-slide');
    const itm = document.querySelector('.sc04 .swiper-slide-active');
    //itm.classList.add('on');
    productSlide02.on('slideChangeTransitionEnd',()=>{
        const itm = document.querySelector('.sc04                            .swiper-slide-active');
        itm.classList.add('on');
    });
    productSlide02.on('slideChangeTransitionStart', ()=>{
        sItm.forEach(e=>e.classList.remove('on'));
    });

    const productSlide03 = new Swiper('.pr3_slider', {
        loop:true,
        navigation: {
            nextEl: '.pr_btn .btn_next',
            prevEl: '.pr_btn .btn_prev',
        },
    
    });