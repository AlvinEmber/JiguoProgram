window.onload = function () {
    var phoneNumber = document.getElementById('phoneNumber');
    var picCode = document.getElementById('picCode');
    var yanzhengCode = document.getElementById('yanzhengCode');
    var userId = document.getElementById('userId');
    var password = document.getElementById('password');
    var repassword = document.getElementById('repassword');
    var checkOut = document.getElementsByClassName('checkOut');
    var imess_ = document.getElementsByClassName('imess');
    // console.log(imess_);
    var lis = document.querySelectorAll('li');
    var is = document.querySelectorAll('i');
    // console.log(lis);
    // console.log(is);

    // 39手机号部分
    var regphone = /^1[3|4|5|7|8]\d{9}$/;
    phoneNumber.onblur = function () {
        lis[39].style.display = 'inline-block';
        if (regphone.test(this.value)) {
            lis[39].className = 'right';
            is[0].className = 'right-icon';
            imess_[0].innerHTML = '格式正确';
            return true;
        } else {
            lis[39].className = 'wrong';
            is[0].className = 'wrong-icon';
            imess_[0].innerHTML = '手机号码格式不正确，请重新输入';
            return false;
        }
    }

    // 40图片验证码部分
    var regpic = /^r2B7$/gi;
    picCode.onblur = function () {
        lis[40].style.display = 'inline-block';
        if (regpic.test(this.value)) {
            lis[40].className = 'right';
            is[1].className = 'right-icon';
            imess_[1].innerHTML = '图片验证码输入正确';
            return true;
        } else {
            lis[40].className = 'wrong';
            is[1].className = 'wrong-icon';
            imess_[1].innerHTML = '与图片不一致，请重新输入';
            return false;
        }
    }

    // 41手机验证码部分
    var regyanzheng = /^1234$/;
    yanzhengCode.onblur = function () {
        lis[41].style.display = 'inline-block';
        if (regyanzheng.test(this.value)) {
            lis[41].className = 'right';
            is[2].className = 'right-icon';
            imess_[2].innerHTML = '验证码输入正确';
            return true;
        } else {
            lis[41].className = 'wrong';
            is[2].className = 'wrong-icon';
            imess_[2].innerHTML = '与短信不一致，请重新输入';
            return false;
        }
    }

    // 42用户名部分
    var regname = /^[a-zA-Z0-9_\u4e00-\u9fa5]{6,12}$/;
    // var password = inputpass.value;
    // console.log(password);
    userId.onblur = function () {
        lis[42].style.display = 'inline-block';
        if (regname.test(this.value)) {
            lis[42].className = 'right';
            is[3].className = 'right-icon';
            imess_[3].innerHTML = '格式正确';
            return true;
        } else {
            lis[42].className = 'wrong';
            is[3].className = 'wrong-icon';
            imess_[3].innerHTML = '用户名格式不正确，请重新输入';
            return false;
        }
    }

    // 43密码部分
    var regpass = /^[a-zA-Z0-9_-]{6,16}$/;
    // var password = inputpass.value;
    // console.log(password);
    password.onblur = function () {
        lis[43].style.display = 'inline-block';
        if (regpass.test(this.value)) {
            lis[43].className = 'right';
            is[4].className = 'right-icon';
            imess_[4].innerHTML = '格式正确';
            return true;
        } else {
            lis[43].className = 'wrong';
            is[4].className = 'wrong-icon';
            imess_[4].innerHTML = '密码格式不正确，请重新输入';
            return false;
        }
    }

    // 44重复密码部分
    repassword.onblur = function () {
        lis[44].style.display = 'inline-block';
        if (this.value === password.value) {
            lis[44].className = 'right';
            is[5].className = 'right-icon';
            imess_[5].innerHTML = '密码一致';
            return true;
        } else {
            lis[44].className = 'wrong';
            is[5].className = 'wrong-icon';
            imess_[5].innerHTML = '两次密码输入不一致，请重新输入';
            return false;
        }
    }

    // 模态框的js
    var time = 3;
    var timer;
    function timer() {
        if (time == 0) {
            location.href = 'index.html';
        } else {
            $(".modal-content").html('注册成功！将在' + time + '秒后跳转至用户登录界面_(:з」∠)_');
            time--;
        }
    }
    $('#myModal').on('show.bs.modal', function (e) {
        timer();
        setInterval(timer, 1000); // 提前调用防止页面空白
    })
}