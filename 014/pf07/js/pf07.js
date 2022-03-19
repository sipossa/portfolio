$(function(){
//-----------------------------------------------------------------
$('.video').YTPlayer({
    videoURL:'https://youtu.be/91tEAhywDck',
    containment:'#main_video',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
}); 

$('#main_video i.xi-pause').on('click', function(){
    $('.video').YTPPause();
});
$('#main_video i.xi-play').on('click', function(){
    $('.video').YTPPlay();
});



$('nav>ul>li>a').on('click', function(){
  if($('#header').hasClass('on')) {
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.sub_menu').slideUp();  
  }
});

$('.sub_menu>ul>li').on('click', function(){
  if($('nav').hasClass('on')) {
      $('.third_menu').stop().slideUp();
      $(this).find('.third_menu').stop().slideToggle();
  }
});


$('.con01_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:6000,
    pauseOnHover:false,
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll : 1,
          }
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll : 1,
            }
          },



      ]
    
});

$('#content_01 .btn i.xi-angle-left-thin').on('click', function(){  
    $('.con01_slide').slick('slickPrev')
});

$('#content_01 .btn i.xi-angle-right-thin').on('click', function(){
    $('.con01_slide').slick('slickNext')
});  



$('.con02_slide').slick({
    arrows:false,
    //autoplay:true,
    autoplaySpeed:4000,
    centerMode:true,
    centerPadding: '40px',
    pauseOnHover:false,
    slidesToShow: 6,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll : 3,
          }
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll : 3,
            }
          },



      ]
    
});



const dayContent =[
  '신정', 
  '입학식',
  '',
  '성적 이의신청<br>및 정정',
  '',
  '',
  '',
  '',
  '',
  '',
  '동계 계절학기 <br><br>전과 신청',
  '',
  '성적표 발송',
  '',
  '',
  '',
  '',
  '',
  '재입학 신청',
  '',
  '',
  '',
  '',
  '예비수강신청',
  '',
  '',
  '',
  '',
  '',
  '',
  '설 연휴',
]

function getDate(date) { // 날짜 변환 함수 (년, 월, 일을 반환)
    return date.toLocaleDateString().replace(/\./g, "").split(" ");
  }
  
  const pad = (str) => str > 10 ? str : '0' + str;   // pad 함수 ( 10 이하는 앞에 0붙이기 )
  
  window.onload = function() {
    const ToDay = new Date();  // date 객체
    
    const nowMonth = ToDay.getMonth();  // 현재 월
    
    const [y, m] = getDate(new Date(ToDay.setMonth(nowMonth)));   // 현재의 년과 월구하기 (이 코드로 다음달, 이전달로 이동 가능)
  
    const lastDay = getDate(new Date(y, m, 0)).pop() * 1;  // 해당 달의 마지막 일 구하기
    
    const day = new Date([y, m, 1].join("-")).getDay() * 1;  // 해당 달의 첫 요일 구하기
    
    const maxDay = Math.ceil((day + lastDay) / 7) * 7;  // 마지막 날과 시작 일을 더해 7의 배수를 만들어 줍니다.
  
    let html = '';
  
    for (let i = 1; i <= maxDay; i++) {    // 요일과 마지막 일을 합친 수만큼 반복문을 돌려줍니다.
      const diff = i - day;
      const d = diff <= lastDay && i > day ? diff : '';
      const tmpClass = !d ? 'background' : 'doc';
  
    // 해당 요일을 구하는 수식은 [ i - 첫 요일 ] 입니다.  

    // 첫 요일보다 작은 수는 이전달의 일이라는 뜻이며
    // 해당 달의 마지막 일보다 크면 다음 달이라는 뜻으로 넘기면 됩니다.


      html += `<div class="dateSel ${tmpClass}">${d}</div>`;
    }
  
    document.querySelector('.dateSel').innerHTML = html;   // 만든 날짜 정보를 넣어준다. 
    //document.querySelector('.date_text').innerText = `${y}년 ${pad(m)}월`;
    const content = document.querySelectorAll('.doc');
     content.forEach((e,i)=>{
      e.innerHTML += `<span>${dayContent[i]} </span>`
    })
  
  }
      

  
    $(window).on('resize', function(){
        if($(window).width() > 768) {               /*만약 윈도우가 768보다 크면*/
            $('#header').removeClass('on');         /*#헤더의 on 클래스를 떼고*/
            $('.sub_menu').removeAttr('style')       /*.섭메뉴의 스타일을 뗀다*/
        };
    });



    $('.mopen').on('click', function(){
      $(this).toggleClass('on');
      $('#header').toggleClass('on');
      $('.mopen .xi-bars').toggleClass('on');
      $('.mopen .xi-close').toggleClass('on');
  });












//-----------------------------------------------------------------
});