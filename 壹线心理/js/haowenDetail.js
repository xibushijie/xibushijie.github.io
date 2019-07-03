$(document).ready(function () {
    // 收藏和取消收藏
    var onOff = true;
    var div = $(".shoucang");
    div.click(function () {
        if (div.onOff) {
            div.css({ "background-image": 'url(./images/ic_collection_normal.png)' });
            div.onOff = false;
            $(".shoucang").html("收藏");
            $.toast("已取消收藏", "text");
            // 取消收藏发送请求

        } else {
            div.css({ "background-image": 'url(./images/ic_collection_selected.png)' });
            div.onOff = true;
            $.toast("收藏成功", "text");
            $(".shoucang").html("已收藏");
            //收藏发送请求
        }
    });

    $("textarea").on("input onpropertychange", function () {
        $(this).height(this.scrollHeight);
        console.log(this.scrollHeight)
        if (this.scrollHeight >= 50) {
            $("textarea").css({ "height": "50px" })
        } else if (this.scrollHeight <= 50) {
            $(this).height(this.scrollHeight);
        }

        // 评论
        $(document).keyup(function (event) {
            if (event.keyCode == 13) {
                var val = $("textarea").val();

                // 这里发送评论的请求  把 val 发到数据库
                console.log(val);

                //请求成功之后 的提示 和 清空 输入框
                $.toast("您已经评论成功", "text");
                $("textarea").val("");
                $("textarea").css({ "height": "20px" })
            }
        });
    });


});