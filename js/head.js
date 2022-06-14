
// 页眉页脚的JS
// 在线咨询
var consult = $('.consult')
consult.mouseenter(() => {
    $('.wx').css('display', 'block');
})

$('.wx img').click(() => {
    $('.wx').css('display', 'none');
})
//////////////////////////////////////

//导航栏微信 

var ul_show = $('.ul-img')
ul_show.mouseenter(() => {
    $('.ul-wx').css('display', 'block');
    $('.ul-hide').css('display', 'inline');
    $('.ul-show').css('display', 'none');
})
ul_show.mouseleave(() => {
    $('.ul-wx').css('display', 'none');
    $('.ul-hide').css('display', 'none');
    $('.ul-show').css('display', 'inline');
})
    ////////////////////////////////
