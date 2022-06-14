//banner字淡入
$('.fa-right-B').fadeIn(5000)
$('.fa-left-A').fadeIn(5000)
$('.fa-right-A').fadeIn(3000)
$('.fa-left-B').fadeIn(3000)
//汽车动图
$('.gif').mouseenter(function () {

    //获取#img_left 的CSS left值 每次加二十然后赋值
    var left = parseInt($('#img_left').css('left'))
    var right = parseInt($('#img_right').css('right'))
    var left_right = -1600;

    if (parseInt($('#img_right').css('left')) !== -300) {

        setInterval(function () {
            left = left + 100;
            right = right - 100;
            //左边是否判断到达指定位置
            if (left <= 1263) {
                $('#img_left').css('left', left)
            }
            //右边边是否判断到达指定位置
            if (right >= -680) {

                $('#img_right').css('right', right)

                if (right = -669) {
                    $('#img_right').css('right', '')
                }

            }
            if (left_right <= -340) {
                left_right = left_right + 100
                $('#img_right').css('left', left_right);
            }
        }, 90)
    } else {
        // 定时间隔上个操作
        setTimeout(1000);
        //初始化
        $('#img_left').css('right', "")
        $('#img_right').css('left', "")
        $('#img_left').css('left', -286)
        $('#img_right').css('right', -339)

    }
})
