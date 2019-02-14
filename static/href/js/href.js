$(".nav li a").each(function () {
    if ($(this)[0].href == String(window.location)) {
        $(this).addClass("on").siblings().removeClass("on");
    }
});