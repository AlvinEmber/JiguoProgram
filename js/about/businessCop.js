$(function () {
    $(".guanyujiguobtn").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".container-fluid").offset().top
        })
    })
    $(".jiguodashijibtn").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".jiguodashiji").offset().top
        })
    })
    $(".lianxiwomenbtn").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".lianxiwomen").offset().top
        })
    })
    $(".shiyongliuchengbtn").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".container-fluid").offset().top
        })
    })
    $(".ruhebtn").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".ruhe").offset().top
        })
    })
})