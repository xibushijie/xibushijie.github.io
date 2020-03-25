$(function () {
    $("textarea").on("input onpropertychange", function () {
        $(this).height(this.scrollHeight);
        console.log(this.scrollHeight)
        if (this.scrollHeight >= 50) {
            $("textarea").css({ "height": "50px" })
        } else if (this.scrollHeight <= 50) {
            $(this).height(this.scrollHeight);
        }

        if ($(this).val()) {
            $(".submit").removeAttr("disabled");
        } else {
            $(".submit").attr("disabled", "disabled");
        }

    });

    // 提交评论
    $(".submit").click(function () {
        console.log($("textarea").val());
        //。。。 请求代码 ...
        //请求的时候需要的操作 1.清空输入框 2.按钮默认禁用 3.关闭评论弹出层 4.弹框提示 评论成功

        $("textarea").val("");
        $(".submit").attr("disabled", "disabled");
        $(".commentTk").hide();
        $.toast("您已评论成功", "text");

    });


    // 开始测试
    $(".test").click(function () {
        $(".play").show();
    });

    //支付提交
    var palyNum = $(".price2 span").text();
    $(".playBtn").click(function () {
        // 请求微信支付的接口 
        console.log(palyNum);

        window.location.href = "./testList.html";
    });

    // 评论弹出
    $(".commentBtn").click(function () {
        $(".commentTk").show();
    })
    $(".commentTk .weui-cell").click(function () {
        return false;
    });



    // 关闭弹出
    $(".layer").click(function () {
        $(this).hide();
    });
    $(".layer .box").click(function () {
        return false;
    });
    $(".play .box .head img").click(function () {
        $(".layer").hide();
    });
});