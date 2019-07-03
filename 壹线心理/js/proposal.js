$(function () {
    $(".submit").click(function () {
        var val = $(".form textarea").val();
        if (!val) {
            $.alert("请输入您的宝贵意见和建议", "");
        } else if (val) {
            //提交的请求 
            // ...

            // 请求发送后的提示 和清空 输入框
            $.toast("您已提交成功", "text");
            $(".form textarea").val("");
            console.log(val);
        }



    });
});