$(function () {
    $(".freeUseBtn").on("click", function () {
        location.href = 'freeUse.html';
    })
    $(".freeUseBtnOut").on("click", function () {
        location.href = '../freeUse.html';
    })
    $(".BCBtn").on("click", function () {
        location.href = 'businessCop.html';
    })
    $(".BCBtnOut").on("click", function () {
        location.href = '../businessCop.html';
    })
    $('.ul_').on('click', 'li', function () {
        location.href = "../use/use_chanpinxiangqing.html"
    })
})