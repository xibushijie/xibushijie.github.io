var mySwiper = new Swiper('.swiper-container1', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
});

var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true
});

$(function () {

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

    // 底部的切换
    // $(".weui-tabbar a").click(function () {
    //     $(this).addClass("weui-bar__item--on").siblings().removeClass("weui-bar__item--on");
    //     var li_index = $(".weui-tabbar a").index(this);
    //     $(".weui-tab__bd-item").eq(li_index).fadeIn(0).siblings('.weui-tab__bd-item').hide();
    //     swiperFn();
    // })

    // // 好文页面
    // function swiperFn() {
    var mySwiperTop = new Swiper('#topNav', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
    });
    swiperWidth = mySwiperTop.container[0].clientWidth
    maxTranslate = mySwiperTop.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2
    $(".swiper-container").on('touchstart', function (e) {
        e.preventDefault()
    })
    mySwiperTop.on('tap', function (swiper, e) {
        //  e.preventDefault()
        slide = swiper.slides[swiper.clickedIndex]
        slideLeft = slide.offsetLeft
        slideWidth = slide.clientWidth
        slideCenter = slideLeft + slideWidth / 2
        // 被点击slide的中心点
        mySwiperTop.setWrapperTransition(300)
        if (slideCenter < swiperWidth / 2) {
            mySwiperTop.setWrapperTranslate(0)
        } else if (slideCenter > maxWidth) {
            mySwiperTop.setWrapperTranslate(maxTranslate)
        } else {
            nowTlanslate = slideCenter - swiperWidth / 2
            mySwiperTop.setWrapperTranslate(-nowTlanslate)
        }
        $("#topNav .active").removeClass('active');
        $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active');
        $(".tab-list").eq(swiper.clickedIndex).fadeIn().siblings('.tab-list').hide();
    });
    // }



    // 我的页面的跳转
    // $(".allTest").click(function () {
    //     $("#tab4").removeClass("weui-tab__bd-item--active");
    //     $("#tab2").addClass("weui-tab__bd-item--active");

    //     $(".weui-tabbar a").eq(3).removeClass("weui-bar__item--on");
    //     $(".weui-tabbar a").eq(1).addClass("weui-bar__item--on");
    // });
});