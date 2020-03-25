$(function () {
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



    // // 好文页面
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

        var curNavIndex = swiper.clickedIndex;
        console.log(curNavIndex);

        
    });
})