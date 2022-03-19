$(function(){

    //배열: 번호가 있는 자료형 0,1,2 ...
    var left_text=['section01','section02','section03','section04','footer']

    var main=$('.main_full').fullpage({
        //navigation: true,
        anchors:['page01', 'page02', 'page03', 'page04'], //주소줄에 표시됨
        css3:false, //background:fixed 적용하려면 이거 적어줘야함
        afterLoad: function(origin, destination, direction){
           var idx=destination.index
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
            $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
            $('.footer .left span').text(left_text[idx]); //위에서 정한 내용이 표시되도록
            $('.footer .left strong').text('0' + (idx+1));
        },
    });

        
    $(".movie").YTPlayer({
        videoURL:'https://youtu.be/UNMjYVRldAA',
        containment:'body',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        coverImage:true,
    });

})