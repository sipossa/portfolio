$(function(){
//jquery start
	
var msd=$(".main-slider").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    vertical:true,
    speed:1000,
    dots:true,
});
var msd_i=$(".main-slider figure");
msd_i.eq(1).addClass("on");

$("#main-visual .bar").addClass("on");
msd.on("afterChange", function(e,s,c){
    msd_i.eq(c+1).addClass("on").siblings().removeClass("on");
    $("#main-visual .bar").addClass("on");
});

msd.on("beforeChange", function(e,s,c,n){
    $("#main-visual .bar").removeClass("on");
});

$("#main-visual .ms-prev").on("click", function(){
    msd.slick("slickPrev");
});
$("#main-visual .ms-next").on("click", function(){
    msd.slick("slickNext");
});



$(".groble-link li").on("click", mapTab);
function mapTab(){
    let idx=$(this).index();
    //$(".groble-map dd").hide();
    $(".groble-map dd").eq(idx).fadeIn().siblings().fadeOut();
}


$(window).on("scroll", function(){
    let sct=$(window).scrollTop();
    $("section").each(function(idx){
        let ht=$(this).offset().top;    
        if(sct>ht-200){
            $(this).addClass("on").siblings().removeClass("on");
            console.log(idx);
            $("nav a").eq(idx+1).addClass("on").siblings().removeClass("on");
        }else if(sct==0){
            $("nav a").removeClass("on");
        }
    })
});

$(".link dt").on("click", function(){
    $(".link dd").slideToggle();
    $(".link i").toggleClass("on");
});

$(".link").on("mouseleave", function(){
    $(".link dd").slideUp();
});

//jquery end
});
