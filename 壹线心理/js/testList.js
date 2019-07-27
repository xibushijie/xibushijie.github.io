var mySwiper = new Swiper('.swiper-container', {
    autoplay: false,
    effect : 'fade',
    // autoHeight: true,
    pagination: '.swiper-pagination',
    paginationType: 'fraction'
})

// 点击题目选项的效果
$(".swiper-slide li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    mySwiper.slideNext(); //下一题
})
// 上一题
$(".upTit").click(function () {
    mySwiper.slidePrev(); //上一题
});

// 提交
$(".submit").click(function () {
    var arr = [];
    $(".swiper-slide li.on").each(function () {
        var val = $(this).attr("value");
        arr.push(val);
        console.log(arr);
        // 1.把arr 提交  arr是选择的答案 数组

        //2.loading状态 和跳转到 测试结果页面
        $.showLoading();
        $(".weui-toast_content").html("正在生成报告");
        setTimeout(function () {
            $.hideLoading();
            window.location.href = "./testResult.html"; //测试结果页面
        }, 3000);
    })
});

// 如果需要跳转某一道题 用下面的方法
// $(".link2").click(function(){
//     mySwiper.slideTo(1, 1000, false);  //切换到第几个题，速度为1秒 从0开始
// });
// $(".link3").click(function(){
//     mySwiper.slideTo(2, 500, false);  //切换到第几个题，速度为1秒
// });

