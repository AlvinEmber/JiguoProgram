function animate(obj, target, callback) {
    // 清除以前的定时器 保留当前的定时器
    // console.log(target);
    // console.log(obj.offsetLeft);
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // Math.ceil() 向上取整
        var step = (target - obj.offsetLeft) / 10;
        // 大于0取大 小于0取小
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // console.log(step);
        // step>0?step
        if (obj.offsetLeft == target) {
            // 停止动画 本质上是停止定时器
            clearInterval(obj.timer);
            // 回调函数写的位置：定时器结束的位置
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}