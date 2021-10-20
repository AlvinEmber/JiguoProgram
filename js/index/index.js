window.addEventListener('load', function () {
    var leftbtn = document.querySelector('.leftbtn');
    var rightbtn = document.querySelector('.rightbtn');
    var carousel = document.querySelector('.slideshow');
    // 获取轮播图长度
    var carouselWidth = carousel.offsetWidth;

    // 鼠标经过carousel 箭头显示
    carousel.addEventListener('mouseenter', function () {
        leftbtn.style.display = 'block';
        rightbtn.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    })
    // 鼠标移开carousel 箭头隐藏
    carousel.addEventListener('mouseleave', function () {
        leftbtn.style.display = 'none';
        rightbtn.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用右侧按钮事件
            rightbtn.click();
        }, 6000)
    })

    // 动态生成小圆圈
    // 获取ul图片列表
    var ul = carousel.querySelector('.slideshow_box');
    // 获取小圆圈
    var ol = carousel.querySelector('.circle');
    // 动态获取
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 用自定义属性data-index记录当前小圆圈的索引号
        li.setAttribute('data-index', i);
        ol.appendChild(li); // 在ol中插入li小圆点
        // 绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人（循环清空小圆点的样式)
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己
            this.className = 'current';

            // 点击小圆圈 移动图片（ul）
            // ul移动距离 圆圈索引号*图片宽度 注意是负值
            var dataindex = this.getAttribute('data-index');
            // 当点击了某个li 就把li赋值给num
            num = dataindex;
            // 并且把li的索引号给round
            round = dataindex;

            // 调用animate.js
            animate(ul, -dataindex * carouselWidth);
        })
    }
    ol.children[0].className = 'current';

    // 克隆第一张图
    var cloneli = ul.firstElementChild.cloneNode(true);
    ul.appendChild(cloneli);

    // 设置右按钮的滚动索引
    var num = 0;
    // 控制小圆圈的变化
    var round = 0;
    // 节流
    var flag = true;
    rightbtn.addEventListener('click', function () {
        if (flag) {
            // 关闭节流阀
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * carouselWidth, function () {
                flag = true;
            });

            round++;
            // if (round == ol.children.length) {
            //     round = 0;
            // }
            round = round == ol.children.length ? round = 0 : round;
            circleChange();
        }
    })
    leftbtn.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = - num * carouselWidth + 'px';
                // num = ul.children.length - 1;
            }
            num--;
            animate(ul, -num * carouselWidth, function () {
                flag = true;
            });

            round--;
            round = round < 0 ? ol.children.length - 1 : round;
            circleChange();
        }
    });
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[round].className = 'current';
    }

    // 自动播放
    var timer = setInterval(function () {
        // 手动调用右侧按钮事件
        rightbtn.click();
    }, 6000)
})

$(function () {
    $('.backToTop').on('click', function () {
        $('body, html').stop().animate({
            scrollTop: 0
        })
    })
})