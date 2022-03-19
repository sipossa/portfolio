$(function(){


//배열 : 번호가 있는 자료형 0,1,2,... left_text[0]
var left_text=['01구역','02구역','03구역','04구역']

$('.main_full').fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],//페이지마다 이름줄수있음
    //background-attachement:fixed 활성,
    css3:false,
    //navigation: true,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.footer .left span').text(left_text[idx]);
        $('.footer .left strong').text('0' + (idx+1));
    },
});

    $(".movie").YTPlayer({//--html에서 가져온 소스에 div id 로 바꿔야함
        videoURL:'https://www.youtube.com/embed/ZxCu9hoWY4M',
        containment:"body", //내가 넣을 곳 . section 아이디 
        autoPlay:true,
        mute:true, 
        startAt:0, 
        opacity:1,     // 1보다낮추면 배경에 비치게 나옴 0.2,0.1
        showControls:false, // 재생버튼 없애는것 깃허브에 있음
    
    }); 

})