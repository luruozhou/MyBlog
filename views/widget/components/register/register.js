 window.jQuery = window.$ = require('../../../static/libs/js/jquery');
//cover加class
$(".cover").addClass("register-cover");

$(function () {

    var $register=$("[data-coverName=register]");
    // console.log($register);
    $register.find("#J-register").click(function(){
        var userName=$register.find("[name='userName']").val();
        var nickName=$register.find("[name='nickName']").val();
        var password=$register.find("[name='password']").val();
        var repassword=$register.find("[name='repassword']").val();
        if(password==repassword){
            console.log(userName,nickName,password)
            $.ajax({
                url:'/user/register',
                type:'post',
                data:{
                    password:password,
                    // avatar:
                    nickName:nickName,
                    userName:userName
                },
                success:function(res){
                    console.log(res);
                    switch(res.code){
                        case 1:{
                            location.href=location.href;
                            console.log("成功"+res.msg)
                            break;
                        }
                        case 0:{
                            console.log("失败"+res.msg)
                            $(".error").text(res.msg)
                            break;
                        }
                    }
                },
                error:function(){
                    console.log(err);
                }
            })
        }else{
           $register.find(".error").text("两次输入密码不同");
        }
    })
})

// console.log();