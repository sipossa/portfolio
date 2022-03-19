
//$(document).ready(function(){}); = $(function(){});랑 동일//

$(function(){
//--------------------------
//$('#popup01 span').on('click', function(){
    //$('#popup01').hide(); //클릭했을때 팝업창 없어짐//
//})//

$('.popup_close').on('click', function(){
    $(this).parent().hide();
})


//--------------------------
})