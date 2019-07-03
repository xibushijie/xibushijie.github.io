$(function () {
    // 保存结果图的事件
    $(".holdBtn").click(function () {
        $(".downTk").show();
    });

    // 分享给好友的事件
    $(".shareBtn").click(function () {
        $(".resultTk").show();
    });

    // 关闭弹层
    $(".shareTk .close").click(function () {
        $(".shareTk").hide();
    });
})