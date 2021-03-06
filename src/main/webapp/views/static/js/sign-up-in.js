//邮箱格式检测
function checkEmail() {
    var regEmail = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    var email = $("input[id='inputEmail']").val();
    if (regEmail.test(email)) {
        signup();
    } else {
        alert("邮箱格式错误，请重新输入！");
    }
}

//注册
function signup() {
    /*获取用户注册信息*/
    var signupData = {
        'email': $("input[id='inputEmail']").val(),
        'username': $("input[id='inputUsername']").val(),
        'password': $("input[id='inputPassword']").val()
    };
    console.log(signupData);
    /*ajax发送请求*/
    $.ajax({
        url: "/register",
        async: true,
        type: 'POST',
        /*        contentType: "application/json;charset=utf-8",
                data:JSON.stringify(signupdata),*/
        data: signupData,
        success: function (data) {
            console.log('注册成功');
            console.log(data);
            if (data.hasOwnProperty("ExceptionIfo")) {
                alert(data.ExceptionIfo);
            } else {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('email', data.email);
                window.location.href = "http://localhost:8080/";
            }
        },
        error: function () {
            console.log('请求失败');
        },
        dataType: 'json'
    });
}

//登录
function signin() {
    var regEmail = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    var email = $("input[id='inputEmail']").val();
    if (regEmail.test(email)) {
        /*获取用户注册信息*/
        var signinData = {'email': email, 'password': $("input[id='inputPassword']").val()};

        /*ajax发送请求*/
        $.ajax({
            url: "/login",
            async: true,
            type: 'POST',
            /*        contentType: "application/json;charset=utf-8",
                    data:JSON.stringify(signupdata),*/
            data: signinData,
            success: function (data) {
                alert(data.user);
                console.log('登录成功');
                if (data.hasOwnProperty("loginException")) {
                    console.log(data.loginException);
                } else {
                    sessionStorage.setItem('user_qq',data.user_qq);
                    sessionStorage.setItem('username', data.username);
                    sessionStorage.setItem('email', data.email);
                    sessionStorage.setItem('user_github', data.user_github);
                    sessionStorage.setItem('user_address', data.user_address);
                    /*$(location).attr('href', 'http://localhost:8080/views/homepage.html');*/
                    window.location.href = "http://localhost:8080/";
                }

            },
            error: function () {
                console.log('请求失败');
            },
            dataType: 'json'
        });
    } else {
        alert("邮箱格式错误，请重新输入！");
    }
}
