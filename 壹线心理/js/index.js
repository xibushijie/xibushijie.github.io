var mySwiper = new Swiper('.swiper-container1', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
});

var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true
});

$(function () {
    FastClick.attach(document.body);

    // 分类页面左侧导航
    $("#tab2 .left li").click(function () {
        $(".sort").hide();
        $(this).addClass("on").siblings().removeClass("on");
    });

    // 排序弹框
    $(".sortBtn").click(function () {
        if ($(".sort").is(":hidden")) {
            $(".sort").show();
            $(".sortBtn img").css({ "transform": "rotate(180deg)" });
        } else {
            $(".sort").hide();
            $(".sortBtn img").css({ "transform": "rotate(0deg)" });
        }
    });
    $(".sort").click(function () {
        $(this).hide();
    })
    $(".sort ul").click(function () {
        return false;
    });
    $(".sort li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
});