$(function(){
//------------------------------------

$('#header i').on('click', function(){
    $('#header nav').toggle();    //show : 보이도록 toggle: 보였다 안보였다하게
});

$(window).on('resize', function(){
    $('nav').removeAttr('style');  //사이즈 줄였을 때 자동으로 생기는 <style> 태그 없애주기
});


//------------------------------------
})