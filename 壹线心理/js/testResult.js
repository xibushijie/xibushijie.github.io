$(function () {
    // 右上角分享
    $(".shareArrow").click(function(){
        $(".wxShareTk").show();
    });
    $(".wxShareTkBox").click(function(){
        $(".wxShareTk").hide();
    });

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

    //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,重置列表数据;
    var mescroll = new MeScroll("mescroll", {
        up: {
            callback: getListData,
            isBounce: true,
            clearEmptyId: "dataList",
            lazyLoad: {
                use: true // 是否开启懒加载,默认false
            },
            page: {
                num: 0,
                size: 5,
                time: null
            }
        }
    });

    /*联网加载列表数据  page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function getListData(page) {

        var pageNum = page.num; // 页码, 默认从1开始 如何修改从0开始 ?
        var pageSize = page.size; // 页长, 默认每页10条
        //联网加载数据
        getListDataFromNet(page.num, page.size, function (curPageData) {

            console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
            mescroll.endSuccess(curPageData.length);
            setListData(curPageData);
        }, function () {
            //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
            mescroll.endErr();

        });
    }

    /*设置列表数据*/
    function setListData(curPageData) {
        var listDom = document.getElementById("dataList");

        var result = '';
        for (var i = 0; i < curPageData.length; i++) {
            result += '<div class="weui-panel__bd list">';
            result += '<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">';
            result += '<div class="weui-media-box__hd">';
            result += '<img class="weui-media-box__thumb" src="' + curPageData[i].pic + '">';
            result += '</div>';
            result += '<div class="weui-media-box__bd">';
            result += '<p class="weui-media-box__desc ">' + curPageData[i].title + '</p>';
            result += '<span class=" fs14">性魅力指数评估</span>';
            result += '<footer class="weui-media-box__title">';
            result += '<span class="f-fl ">99人已测</span><span class="f-fr  ceshiBtn">开始测试</span>';
            result += '</footer>';
            result += '</div>';
            result += '</a>';
            result += '</div>';
            // result += '<div class="weui-panel__bd list list2">';
            // result += '<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">';
            // result += '<div class="weui-media-box__bd">';
            // result += '<p class="weui-media-box__desc ">' + curPageData[i].title + '</p>';
            // result += '</div>';
            // result += '<div class="weui-media-box__hd">';
            // result += '<img src="' + curPageData[i].pic + '"">';
            // result += '</div>';
            // result += '</a>';
            // result += '</div>';
        }
        $("#dataList").append(result);

    }
    function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {

        setTimeout(function () {
            $.ajax({
                type: 'GET',
                url: './more.json',
                //url: '../res/pdlist1.json?num='+pageNum+"&size="+pageSize,
                dataType: 'json',
                success: function (data) {
                    //模拟分页数据
                    var data = data.lists;
                    var listData = [];
                    for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
                        if (i == data.length) break;
                        listData.push(data[i]);
                    }
                    successCallback(listData);

                },
                error: errorCallback
            });
        }, 1000)
    }

})