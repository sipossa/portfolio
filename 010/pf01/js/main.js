
$(function(){
   //----------------------------------
   
   $('#top_banner .container i.xi-close').on('click', function(){
       $('#top_banner').slideUp();
   })
   
   //-----------------------------------
   
   $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        dots:true,
    });

    $('#main_visual .btn .xi-angle-left-thin').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .btn .xi-angle-right-thin').on('click', function(){
        $('.main_slider').slick('slickNext');
    });

    //-----------------------------------

    $('#content02 .title i').on('click', function(){
        $('#content02 .more_ex').toggleClass('on')
    });

    //---------------------------------------------------날짜표시 시작
    
    var Target = document.getElementById("date"); /*var Target = $('#date');와 동일*/
    function clock() { /*'clock'이라는 이름의 함수를 설정함*/
        var time = new Date();

        var month = time.getMonth();
        var date = time.getDate();
        var day = time.getDay();
        var week = ['일', '월', '화', '수', '목', '금', '토'];

        Target.innerText = 
        `${month + 1}월 ${date}일 ${week[day]}요일 `;
            
    }
    clock(); /*'clock'이라는 함수를 실행해라*/
 
    //---------------------------------------------------날짜표시 끝

    $( "#datepicker" ).datepicker();

    $('#content03 .title i').on('click', function(){
        $('#content03 .calendar').toggleClass('on');
    });


    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:2,

        responsive: [ 
            { breakpoint:768,
                settings: { slidesToShow:1, slidesToScroll:1 }
            },
        ]
    })

    $('#content03 .btn .xi-angle-left-min').on('click',function(){
        $('.pr_slider').slick('slickPrev');
    })
    $('#content03 .btn .xi-angle-right-min').on('click',function(){
        $('.pr_slider').slick('slickNext');
    })

    //------------------------------------------

    $("#mv01").YTPlayer({
        videoURL:'https://youtu.be/Owms72QRNwM',
        containment:'#content01 .video figure',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false, //control이 안보이게, 보이게하려면 true
    });
    
    $('#content01 i.xi-pause').on('click', function(){
        $("#mv01").YTPPause();
    });
    
    $('#content01 i.xi-play').on('click', function(){
        $("#mv01").YTPPlay();
    });
    
    $('#content01 i.xi-expand').on('click', function(){
        $("#mv01").YTPFullscreen();
    });

    //-----------------------------------------
    
    $('#right_banner i.xi-angle-left-min').on('click', function(){
        $('#right_banner').toggleClass('on');
        $('#right_banner i.xi-angle-left-min').toggleClass('on');
    });

   //----------------------------------
})